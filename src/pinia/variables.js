import { ref, shallowReactive, reactive, effectScope } from 'vue';
import { defineStore } from 'pinia';
import { set } from 'lodash';
import { computed } from 'vue';

export const useVariablesStore = defineStore('variables', () => {
    const website = shallowReactive({});
    const plugins = shallowReactive({});
    const components = reactive({});
    const values = ref({});
    const scopes = {};

    function resetVariables(toRoute, resetPersistant) {
        const variables = Object.values(this.website);
        for (const variable of variables) {
            if (!resetPersistant && variable.type !== 'query' && variable.isPersistentOnNav) {
                continue;
            }

            let defaultValue = variable.defaultValue;

            if (variable.isLocalStorage) {
                defaultValue = getLocalStorageVariableInitValue(variable);
            }
            if (variable.type === 'query') {
                defaultValue = getQueryVariableInitValue(variable, toRoute);
            }

            this.setValue(variable.id, defaultValue, { ignoreQuery: true });
        }
        wwLib.$store.dispatch('data/setPageParameterVariables');
    }

    function getConfiguration(variableId) {
        return (
            this.website[variableId] ||
            this.components[variableId] ||
            this.plugins[variableId] ||
            wwLib.$store.getters['data/getPageParameterVariables'][variableId]
        );
    }

    function add(category, id, variable, { partialUpdate = false } = {}) {
        const previousVersion = this.getConfiguration(id);
        const previousName = previousVersion?.name;
        const hasPreviousVersion = !!previousVersion;

        if (partialUpdate) {
            Object.assign(previousVersion, variable);
        } else {
            let path = 'website';
            switch (category) {
                case 'website':
                    break;
                case 'plugin':
                    path = 'plugins';
                    break;
                case 'component':
                    path = 'components';
                    break;
            }
            this[path][id] = variable;
        }

        if (hasPreviousVersion && (previousName === variable.name || ['plugin', 'component'].includes(category))) {
            return;
        }

        const that = this;
        function get() {
            return that.values[id];
        }
        function set(value) {
            that.setValue(id, value);
        }
        scopes[id] = effectScope(true);

        scopes[id].run(() => {
            if (wwLib.globalVariables.customCodeVariables[id] === undefined) {
                wwLib.globalVariables.customCodeVariables[id] = computed({
                    get,
                    set,
                });
            }
            if (category === 'plugin' || category === 'component' || !variable.name || variable.name === previousName) {
                return;
            }
            if (wwLib.globalVariables.customCodeVariables[variable?.name] === undefined) {
                wwLib.globalVariables.customCodeVariables[variable?.name] = computed({
                    get,
                    set,
                });
            }
        });
        // TODO; maybe a small memory leak when variable change name
        if (previousName) {
            delete wwLib.globalVariables.customCodeVariables[previousName];
        }
    }

    function setValue(variableId, value, { ignoreQuery, path, index, arrayUpdateType, workflowContext } = {}) {
        const configuration = this.getConfiguration(variableId);
        if (!configuration) return;
        if (typeof value === 'string') {
            switch (configuration.type) {
                case 'query': {
                    if (!ignoreQuery) {
                        let router;
                         /* wwFront:start */
                        router = wwLib.getFrontRouter();
                        /* wwFront:end */
                        const currentPath = router.currentRoute._value.path;
                        const currentQuery = router.currentRoute._value.query;

                        const valueToSet = value !== configuration.defaultValue ? value : undefined;

                        if (currentQuery[configuration.queryName || configuration.name] !== valueToSet) {
                            const query = { ...currentQuery };
                            // TODO: reread this comments with new store and see if we can do better
                            // Apply all query variables because replace is async but we can't await here and so it produce a race condition issue on mulltiple query update
                            for (const key in this.website) {
                                if (this.website[key].type === 'query')
                                    query[this.website[key].queryName || this.website[key].name] =
                                        this.values[key] === '' ? undefined : this.values[key];
                            }
                            query[configuration.queryName || configuration.name] = valueToSet;
                            router.replace({
                                path: currentPath,
                                query,
                            });
                        }
                    }
                    break;
                }
                case 'number':
                    try {
                        value = parseFloat(value);
                    } catch (error) {
                        value = 0;
                        wwLib.wwLog.error(`Unable to set variable ${variableId} value.`);
                        wwLib.wwLog.error('Expected value of type number, got :', value);
                    }
                    break;
                case 'object':
                case 'array':
                    if (!(path || arrayUpdateType)) {
                        try {
                            value = JSON.parse(value);
                        } catch (error) {
                            value = configuration.type === 'object' ? {} : [];
                            // TODO: move to log panel?
                            wwLib.wwLog.error(`Unable to set variable ${variableId} value.`);
                            wwLib.wwLog.error(`Expected value of type ${configuration.type}, got:`, value);
                        }
                    }

                    break;
            }
        } else if (
            value &&
            typeof value === 'object' &&
            ['object', 'array'].includes(configuration.type) &&
            !configuration.preserveReference
        ) {
            // Here we need to be sure we are not sharing object instance inside variable.
            // This may be overkill sometimes, but then we are sure to handle all corner cases when this is relevant
            value = _.cloneDeep(value);
        }

        if (configuration.type === 'object' && path) {
            this.values[variableId] = this.values[variableId] || {};
            set(this.values[variableId], path, value);
            wwLib.logStore.verbose(`Variable _wwVariable(${variableId}) update`, {
                preview: this.values[variableId],
                workflowContext,
                type: workflowContext ? 'action' : null,
            });
        } else if (configuration.type === 'array' && arrayUpdateType) {
            this.values[variableId] = this.values[variableId] || [];
            index = index || 0;
            switch (arrayUpdateType) {
                case 'update': {
                    let finalPath = `[${index}]`;
                    if (path) {
                        finalPath = `${finalPath}.${path}`;
                    }
                    set(this.values[variableId], finalPath, value);
                    wwLib.logStore.verbose(`Updating partially array variable _wwVariable(${variableId}) `, {
                        preview: value,
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                    break;
                }
                case 'delete':
                    this.values[variableId].splice(index, 1);
                    wwLib.logStore.verbose(`Deleting item ${index} from array _wwVariable(${variableId})`, {
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                    break;
                case 'insert':
                    this.values[variableId].splice(index, 0, value);
                    wwLib.logStore.verbose(
                        `Inserting value into array variable at index ${index} _wwVariable(${variableId}) `,
                        {
                            preview: value,
                            workflowContext,
                            type: workflowContext ? 'action' : null,
                        }
                    );
                    break;
                case 'unshift':
                    this.values[variableId].unshift(value);
                    wwLib.logStore.verbose(`Removing first element from array variable _wwVariable(${variableId}) `, {
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                    break;
                case 'push':
                    this.values[variableId].push(value);
                    wwLib.logStore.verbose(
                        `Adding value at the end of the array variable _wwVariable(${variableId}) `,
                        {
                            preview: value,
                            workflowContext,
                            type: workflowContext ? 'action' : null,
                        }
                    );
                    break;
                case 'shift':
                    this.values[variableId].shift(value);
                    wwLib.logStore.verbose(
                        `Adding value at the start of the array variable _wwVariable(${variableId}) `,
                        {
                            preview: value,
                            workflowContext,
                            type: workflowContext ? 'action' : null,
                        }
                    );
                    break;
                case 'pop':
                    this.values[variableId].pop(value);
                    wwLib.logStore.verbose(`Removing last value of the array variable _wwVariable(${variableId})`, {
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                    break;
            }
        } else {
            this.values[variableId] = value;
            wwLib.logStore.verbose(`Setting value for _wwVariable(${variableId}) `, {
                preview: _.cloneDeep(value),
                workflowContext,
                type: workflowContext ? 'action' : null,
            });
        }

        if (configuration.isLocalStorage && window.localStorage) {
            wwLib.logStore.verbose(`Updating localStorage to synchronize with _wwVariable(${variableId})`);
            switch (configuration.type) {
                case 'query':
                case 'string':
                    window.localStorage.setItem(`variable-${variableId}`, value);
                    break;
                case 'number':
                case 'object':
                case 'array':
                case 'boolean':
                    window.localStorage.setItem(`variable-${variableId}`, JSON.stringify(this.values[variableId]));
                    break;
            }
        }
    }

    function remove(variableId) {
        const item = this.getConfiguration(variableId);

        if (!item) {
            return;
        }

        delete this.values[variableId];
        delete this.website[variableId];
        delete this.components[variableId];
        delete this.plugins[variableId];

        scopes[variableId]?.stop();
        delete scopes[variableId];
        delete wwLib.globalVariables.customCodeVariables[item.id];
        if (item.name) {
            delete wwLib.globalVariables.customCodeVariables[item.name];
        }
    }

    function cleanComponent(sectionIds) {
        for (const componentVariable of Object.values(this.components)) {
            if (!sectionIds.includes(componentVariable.sectionId)) {
                this.remove(componentVariable.id);
            }
        }
    }

    function renameFolder(variables) {
        for (const variable of variables) {
            if (!this.website[variable.id]) continue;
            this.add('website', variable.id, { ...this.website[variable.id], folder: variable.folder });
        }
    }

    return {
        website,
        plugins,
        components,
        values,
        resetVariables,
        getConfiguration,
        setValue,
        add,
        remove,
        cleanComponent,
        renameFolder,
    };
});

function getLocalStorageVariableInitValue(variable) {
    let value = undefined;
    switch (variable.type) {
        case 'query':
        case 'string': {
            const localValue = window.localStorage?.getItem(`variable-${variable.id}`);
            // Checking null because empty string is a valid value. null ==> not defined
            value = localValue !== null ? localValue : variable.defaultValue;
            break;
        }
        case 'number':
        case 'object':
        case 'array':
        case 'boolean':
            try {
                const localValue = window.localStorage?.getItem(`variable-${variable.id}`);
                // Checking null because falsy value can be valid. null ==> not defined
                value = localValue !== null ? JSON.parse(localValue) : variable.defaultValue;
            } catch {
                value = variable.defaultValue;
                wwLib.wwLog.error('Invalid localStorage value for variable id:', variable.id);
            }
            break;
    }
    return value;
}

function getQueryVariableInitValue(variable, toRoute) {
    let value = undefined;
    const query = toRoute ? toRoute.query : {};

    Object.keys(query).forEach(name => {
        if (variable.name.toLowerCase() === name.toLowerCase()) value = query[name];
    });

    if (value === undefined && variable.isLocalStorage) {
        value = getLocalStorageVariableInitValue(variable);
    }

    return value || variable.defaultValue;
}
