import { watchEffect, shallowReactive } from 'vue';
import { useComponentBasesStore } from '@/pinia/componentBases.js';
import { useVariablesStore } from '@/pinia/variables.js';
import { cloneDeep } from 'lodash';

export default {
     async registerPlugin(componentId, content, devOptions = null) {
        const plugin =
            wwLib.$store.getters['websiteData/getPluginByComponentId'](componentId) ||
            wwLib.$store.getters['websiteData/getPluginByName'](componentId) ||
            (await wwLib.$store.dispatch('websiteData/addDevPlugin', { ...(devOptions || {}) }));
        if (!wwLib.wwPlugins) wwLib.wwPlugins = shallowReactive({});
        let settings;
         /* wwFront:start */
        // eslint-disable-next-line
        settings = window.wwg_pluginsSettings[plugin.id] || { publicData: {}, privateData: {} };
        /* wwFront:end */

        const store = useComponentBasesStore(wwLib.$pinia);
        const config = store.configurations[componentId];
 
        wwLib.$store.dispatch('websiteData/updatePlugin', {
            pluginId: plugin.id,
            settings,
            isLoaded: plugin.isLoaded || false,
        });

        this.mountPlugin(plugin, {
            content: this._devPlugins[plugin.namespace]?.content || content,
            config: this._devPlugins[plugin.namespace]?.config || config,
            settings,
        });

     },
    mountPlugin(plugin, { content = {}, config = {}, settings = {} }) {
        wwLib.wwPlugins[plugin.namespace] = {
            ...content,
            name: plugin.name,
            namespace: plugin.namespace,
            isDev: plugin.isDev,
            get id() {
                const pluginFound = wwLib.$store.getters['websiteData/getPluginByName'](plugin.namespace) || {};
                return pluginFound.id;
            },
            get isLoaded() {
                const pluginFound = wwLib.$store.getters['websiteData/getPluginByName'](plugin.namespace) || {};
                return wwLib.$store.getters['websiteData/getPluginIsLoaded'](pluginFound.id);
            },
            get settings() {
                const pluginFound = wwLib.$store.getters['websiteData/getPluginByName'](plugin.namespace) || {};
                return _.cloneDeep(
                    wwLib.$store.getters['websiteData/getPluginSettings'](pluginFound.id) || {
                        publicData: {},
                        privateData: {},
                    }
                );
            },
        };
        // Retrocompatibility for defining pluginValue for formulas
        if (plugin.id !== plugin.namespace) {
            wwLib.wwPlugins[plugin.id] = wwLib.wwPlugins[plugin.namespace];
        }

        const variablesStore = useVariablesStore(wwLib.$pinia);
        let variables = config?.variables;
        if (typeof variables === 'function') {
            variables = variables(settings);
        } else if (typeof variables === 'object' && !Array.isArray(variables)) {
            variables = Object.values(variables);
        }

        (variables || []).forEach(variable => {
            variablesStore.add('plugin', `${plugin.id}-${variable.name}`, {
                ...variable,
                pluginId: plugin.id,
                id: `${plugin.id}-${variable.name}`,
                value: variable.defaultValue,
                defaultValue: variable.defaultValue,
            });
            variablesStore.values[`${plugin.id}-${variable.name}`] = cloneDeep(variable.defaultValue);
            Object.defineProperty(wwLib.wwPlugins[plugin.namespace], variable.name, {
                get() {
                    return variablesStore.values[`${plugin.id}-${variable.name}`];
                },
                set(value) {
                    wwLib.wwVariable.updateValue(`${plugin.id}-${variable.name}`, value);
                },
            });
        });

        (config?.formulas || []).forEach(formula => {
            wwLib.$store.dispatch('data/setPluginFormula', {
                ...formula,
                pluginId: plugin.id,
                id: `${plugin.id}-${formula.name}`,
            });
        });

         // eslint-disable-next-line no-async-promise-executor
        const isLoaded = new Promise(async resolve => {
            try {
                if (wwLib.wwPlugins[plugin.namespace]._onLoad)
                    await wwLib.wwPlugins[plugin.namespace]._onLoad(settings);
                else if (wwLib.wwPlugins[plugin.namespace].onLoad)
                    await wwLib.wwPlugins[plugin.namespace].onLoad(settings);
            } catch (err) {
                wwLib.wwLog.error(err);
            }
            wwLib.$store.dispatch('websiteData/updatePlugin', {
                pluginId: plugin.id,
                isLoaded: true,
            });

            resolve();
        });

        this._pluginPromises.push(isLoaded);
    },
    async initPlugins() {
        await this.waitPluginsLoaded();
    },
    async waitPluginsLoaded() {
        return await Promise.all(this._pluginPromises);
    },
    _pluginPromises: [],
    _devPlugins: {},
};
