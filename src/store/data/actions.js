 
export default {
    setCollections({ commit }, collections) {
        for (const collection of collections) {
            if (!collection) continue;
            commit('setCollection', { ...collection, isFetching: collection.mode !== 'static' });
            commit('setCollectionFetching', {
                id: collection.id,
                isFetching: false,
                isFetched: collection.mode === 'static',
            });
        }
    },
    setNewCollections({ commit, state }, collections) {
        /* wwFront:start */
        for (const collection of Object.values(state.collections)) {
            if (collection.mode === 'static') continue;
            if (collection.config.isPersistentOnNav) continue;
            commit('deleteCollection', collection.id);
        }
        /* wwFront:end */
        for (const collection of collections) {
            if (!collection) continue;
            if (state.collections[collection.id]) continue;
            commit('setCollection', { ...collection, isFetching: collection.mode !== 'static' });
            commit('setCollectionFetching', {
                id: collection.id,
                isFetching: false,
                isFetched: collection.mode === 'static',
            });
        }
    },
    setCollectionOffset({ commit }, { collectionId, offset }) {
        commit('setCollectionOffset', { collectionId, offset });
    },
    setCollection({ commit }, collection) {
        commit('setCollection', collection);
    },
     setCollectionFetching({ commit }, { id, isFetching, isFetched }) {
        commit('setCollectionFetching', { id, isFetching, isFetched });
    },
    setPageParameterVariables({ commit, getters, rootGetters }) {
        commit('removePageParameterVariables');
        const page = rootGetters['websiteData/getPage'];
        if (!page) return;
        let params = {};
         /* wwFront:start */
        params = wwLib.getFrontRouter().currentRoute._value.params;
        /* wwFront:end */
        const variables = getters['getPageParameterVariablesFromId'](page.id);
        for (const variable of variables) {
            commit('setPageParameterVariable', {
                ...variable,
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                value: params[variable.id],
                /* wwFront:end */
            });
        }
    },
    removePageParameterVariables({ commit }) {
        commit('removePageParameterVariables');
    },
    // Formulas
    setFormulas({ dispatch }, formulas) {
        for (const formula of formulas) {
            dispatch('setFormula', formula);
        }
    },
    setFormula({ commit }, formula) {
        if (!formula) return;
        commit('setFormula', formula);
    },
     setPluginFormula({ commit }, formula) {
        if (!formula) return;
        commit('setPluginFormula', formula);
    },
    /*=============================================m_ÔÔ_m=============================================\
        WORKFLOWS
    \================================================================================================*/
    setWorkflowActionResult({ commit }, data) {
        commit('setWorkflowActionResult', data);
    },
    setWorkflowError({ commit }, data) {
        commit('setWorkflowError', data);
    },
    setWorkflowActionLoop({ commit }, data) {
        commit('setWorkflowActionLoop', data);
    },
    initGlobalWorkflows({ dispatch }, workflows) {
        for (const worfklowData of workflows) {
            dispatch('initGlobalWorkflow', worfklowData);
        }
    },
    initGlobalWorkflow({ commit }, worfklowData) {
        if (!worfklowData) return;
        commit('initGlobalWorkflow', worfklowData);
    },
    setGlobalWorkflows({ dispatch }, workflows) {
        for (const worfklowData of workflows) {
            dispatch('setGlobalWorkflow', worfklowData);
        }
    },
    setGlobalWorkflow({ commit }, worfklowData) {
        if (!worfklowData) return;
        commit('setGlobalWorkflow', worfklowData);
    },
    resetWorkflowsResult({ commit }) {
        commit('resetWorkflowsResult');
    },
 };
