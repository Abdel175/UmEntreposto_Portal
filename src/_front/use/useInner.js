import { cloneDeep } from 'lodash';
import { computed, onUnmounted, reactive, watch, onMounted, inject } from 'vue';
import { checkVariableType } from '@/_common/helpers/updateVariable.js';
import { getValue } from '@/_common/helpers/code/customCode.js';
import { set } from 'lodash';
import { useVariablesStore } from '@/pinia/variables.js';
import { escapeHTMLInObject } from '@/_common/helpers/htmlEscaper.js';

export function useInner(baseUid, { context, props }, componentIdentifier) {
    const sectionId = inject('sectionId', null);
    const variablesStore = useVariablesStore();

    const variableConfiguration = computed(
        () => wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.variables || {}
    );
    const formulaConfiguration = computed(
        () => wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.formulas || {}
    );

    const bindingContext = inject('bindingContext', null);
    const isInsideRepeat = computed(() => bindingContext !== null);

    const variables = reactive({});
    const formulas = reactive({});
    const componentVariablesConfiguration = reactive({});
    const externalVariablesIds = {};

    Object.keys(variableConfiguration.value).forEach(key => {
        variables[key] = cloneDeep(variableConfiguration.value[key].defaultValue);
        if (variableConfiguration.value[key].isExternal && !isInsideRepeat.value) {
            if (context?.component) {
                externalVariablesIds[key] = wwLib.wwVariable.registerLibraryComponentVariable({
                    uid: componentIdentifier.uid,
                    componentType: 'libraryComponent',
                    name: variableConfiguration.value[key].name,
                    id: `${componentIdentifier.uid}-${variableConfiguration.value[key].id}`,
                    defaultValue: variableConfiguration.value[key].defaultValue,
                    type: variableConfiguration.value[key].type,
                    readonly: true,
                    resettable: false,
                    libraryContext: context,
                    sectionId,
                });
            } else {
                externalVariablesIds[key] = wwLib.wwVariable.registerComponentVariable({
                    uid: componentIdentifier.uid,
                    componentType: 'libraryComponent',
                    name: variableConfiguration.value[key].name,
                    id: `${componentIdentifier.uid}-${variableConfiguration.value[key].id}`,
                    defaultValue: variableConfiguration.value[key].defaultValue,
                    type: variableConfiguration.value[key].type,
                    readonly: true,
                    resettable: false,
                    sectionId,
                });
            }
        }
    });

    // TODO: strange that it is needed. May broke in production
    const getValueFn = getValue;

    function setFormula(formulaId) {
        formulas[formulaId] = (...args) => {
            const __wwParameters = (formulaConfiguration.value?.[formulaId]?.parameters || []).map(
                parameter => parameter.name || ''
            );
            const __wwClosureParameters = ['__wwItem', ...__wwParameters];
            // eslint-disable-next-line no-unused-vars
            const __wwargs = [formulaConfiguration.value?.[formulaId], ...args];
            return eval(`
            (function(${__wwClosureParameters.join(', ')}) {
                return getValueFn(
                    {...__wwItem, __wwtype: __wwItem.type},
                    {...context, component: { baseUid, props, variables, formulas }},
                    { recursive: false, args: {names: '${__wwParameters.join(', ')}', value: args } }
                );
            })(...__wwargs)`);
        };
    }

    Object.keys(formulaConfiguration.value).forEach(key => {
        setFormula(key);
    });

 
    return {
        variables,
        formulas,
        updateVariable(variableId, value, { path, index, arrayUpdateType, workflowContext = {} } = {}) {
            workflowContext = {
                ...(workflowContext || {}),
                executionContext: {
                    ...(workflowContext?.executionContext || {}),
                    libraryComponentIdentifier: { ...componentIdentifier, baseUid },
                },
            };
            const variable = variableConfiguration.value[variableId] || componentVariablesConfiguration[variableId];
            try {
                if (!variable) {
                    wwLib.logStore.error(`Try to set variable ${variableId} (not found)`, {
                        type: workflowContext ? 'action' : null,
                        workflowContext,
                    });
                    throw new Error('variable not found');
                }

                if (value === undefined && !['delete', 'shift', 'pop'].includes(arrayUpdateType)) {
                    return;
                }

                value = checkVariableType(variable, value, { path, arrayUpdateType });
                if (value && typeof value === 'object' && ['object', 'array'].includes(variable.type)) {
                    // Here we need to be sure we are not sharing object instance inside variable.
                    // This may be overkill sometimes, but then we are sure to handle all corner cases when this is relevant
                    value = _.cloneDeep(value);
                }

                if (variable.type === 'object' && path) {
                    variables[variableId] = variables[variableId] || {};
                    set(variables[variableId], path, value);
                    wwLib.logStore.verbose(`Variable _wwLocalVariable(${variableId}) update`, {
                        preview: value,
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                } else if (variable.type === 'array' && arrayUpdateType) {
                    variables[variableId] = variables[variableId] || [];
                    index = index || 0;
                    switch (arrayUpdateType) {
                        case 'update': {
                            let finalPath = `[${index}]`;
                            if (path) {
                                finalPath = `${finalPath}.${path}`;
                            }
                            set(variables[variableId], finalPath, value);
                            wwLib.logStore.verbose(
                                `Updating partially array variable _wwLocalVariable(${variableId}) `,
                                {
                                    preview: value,
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        }
                        case 'delete':
                            variables[variableId].splice(index, 1);
                            wwLib.logStore.verbose(
                                `Deleting item ${index} from array _wwLocalVariable(${variableId})`,
                                {
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        case 'insert':
                            variables[variableId].splice(index, 0, value);
                            wwLib.logStore.verbose(
                                `Inserting value into array variable at index ${index} _wwLocalVariable(${variableId}) `,
                                {
                                    preview: value,
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        case 'unshift':
                            variables[variableId].unshift(value);
                            wwLib.logStore.verbose(
                                `Removing first element from array variable _wwLocalVariable(${variableId}) `,
                                {
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        case 'push':
                            variables[variableId].push(value);
                            wwLib.logStore.verbose(
                                `Adding value at the end of the array variable _wwLocalVariable(${variableId}) `,
                                {
                                    preview: value,
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        case 'shift':
                            variables[variableId].shift(value);
                            wwLib.logStore.verbose(
                                `Adding value at the start of the array variable _wwLocalVariable(${variableId}) `,
                                {
                                    preview: value,
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                        case 'pop':
                            variables[variableId].pop(value);
                            wwLib.logStore.verbose(
                                `Removing last value of the array variable _wwLocalVariable(${variableId})`,
                                {
                                    workflowContext,
                                    type: workflowContext ? 'action' : null,
                                }
                            );
                            break;
                    }
                } else {
                    variables[variableId] = value;
                    wwLib.logStore.verbose(`Setting value for _wwLocalVariable(${variableId}) `, {
                        preview: escapeHTMLInObject(_.cloneDeep(value)),
                        workflowContext,
                        type: workflowContext ? 'action' : null,
                    });
                }

                if (variable.isExternal && externalVariablesIds[variableId]) {
                    if (context?.component) {
                        context.component.methods.updateVariable(externalVariablesIds[variableId], value, {
                            path,
                            index,
                            arrayUpdateType,
                            workflowContext,
                        });
                    } else {
                        wwLib.wwVariable.updateValue(externalVariablesIds[variableId], value, {
                            path,
                            index,
                            arrayUpdateType,
                            workflowContext,
                        });
                    }
                }

                return value;
            } catch (error) {
                wwLib.logStore.error(
                    `Unable to update variable ${
                        variable ? `${variable.name} of type ${variable.type}` : ''
                    } (${variableId}) : ${error.message} - got : `,
                    { workflowContext }
                );
                wwLib.logStore.error(value);
            }
        },
        componentVariablesConfiguration,
    };
}
