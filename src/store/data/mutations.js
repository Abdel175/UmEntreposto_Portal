import { set } from 'lodash';
import { markRaw, toRaw } from 'vue';

export default {
    setCollection(state, collection) {
        if (!state.collections[collection.id]) state.collections[collection.id] = {};
        for (const key in collection) {
            if (key === 'data') {
                if (collection.data) {
                    set(state.collections[collection.id], 'data', markRaw(toRaw(collection.data)));
                } else {
                    set(state.collections[collection.id], 'data', null);
                }
            } else if (key === 'fields') {
                if (Object.keys(collection.fields).length || !state.collections[collection.id].fields)
                    set(state.collections[collection.id], 'fields', collection.fields);
            } else if (key === 'offset' || key === 'total') {
                set(state.collections[collection.id], key, collection[key] || 0);
            } else set(state.collections[collection.id], key, collection[key]);
        }
    },
    setCollectionOffset(state, { collectionId, offset }) {
        if (!state.collections[collectionId]) return;
        set(state.collections[collectionId], 'offset', offset);
    },
    deleteCollection(state, collectionId) {
        delete state.collections[collectionId];
    },
     setCollectionFetching(state, { id, isFetching, isFetched }) {
        set(state.collections[id], 'isFetching', isFetching);
        if (isFetched !== undefined) set(state.collections[id], 'isFetched', isFetched);
        else set(state.collections[id], 'isFetched', !isFetching);
    },
    // Variables
    setPageParameterVariable(state, variable) {
        if (!state.pageParameterVariables[variable.id]) {
            state.pageParameterVariables[variable.id] = variable;
        } else {
            Object.assign(state.pageParameterVariables[variable.id], variable);
        }
    },
    removePageParameterVariables(state) {
        state.pageParameterVariables = {};
    },
    // Formulas
    setFormula(state, formula) {
        set(state.formulas, formula.id, formula);
    },
     setPluginFormula(state, formula) {
        set(state.pluginFormulas, formula.id, formula);
    },
    /*=============================================m_ÔÔ_m=============================================\
        WORKFLOWS
    \================================================================================================*/
    setWorkflowActionResult(state, { workflowId, actionId, result, error }) {
        set(state.workflowsResults, `${workflowId}.${actionId}.result`, result);
        set(state.workflowsResults, `${workflowId}.${actionId}.error`, error);
    },
    setWorkflowError(state, { workflowId, value }) {
        set(state.workflowsResults, `${workflowId}.error`, value);
    },
    setWorkflowActionLoop(state, { workflowId, actionId, loop }) {
        set(state.workflowsResults, `${workflowId}.${actionId}.loop`, loop);
    },
    initGlobalWorkflow(state, workflowData) {
        set(state.globalWorkflows, workflowData.id, workflowData);
    },
    setGlobalWorkflow(state, workflowData) {
        set(state.globalWorkflows, workflowData.id, workflowData);
    },
    resetWorkflowsResult(state) {
        state.workflowsResults = {};
    },
 };
