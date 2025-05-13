import { onUnmounted, computed, watch } from 'vue';
import { executeWorkflow } from '@/_common/helpers/code/workflows';
import { getComponentBaseUid } from '@/_common/helpers/component/component';

export function useLibraryComponentActions({ uid, componentId, repeatIndex }, { context, executionContext }) {
    const baseUid = getComponentBaseUid('libraryComponent', uid);

    function executeFunction(workflowId, parameters) {
        const workflow = wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.workflows[workflowId];
        return executeWorkflow(workflow, {
            context: {
                ...context,
                ...executionContext,
                parameters,
            },
        });
    }

    function clean() {
        if (context?.component) {
            if (context.component.localComponentActionsFn.libraryComponents?.[uid]?.[componentId]) {
                delete context.component.localComponentActionsFn.libraryComponents[uid][componentId];
                if (Object.keys(context.component.localComponentActionsFn.libraryComponents[uid]).length === 0) {
                    delete context.component.localComponentActionsFn.libraryComponents[uid];
                }
            }
        } else {
            if (wwLib.globalVariables.globalComponentActionsFn.libraryComponents?.[uid]?.[componentId]) {
                delete wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid][componentId];
                if (Object.keys(wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid]).length === 0) {
                    delete wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid];
                }
            }
        }
    }

    function define() {
        if (context?.component) {
            if (!context.component.localComponentActionsFn.libraryComponents[uid])
                context.component.localComponentActionsFn.libraryComponents[uid] = {};
            context.component.localComponentActionsFn.libraryComponents[uid][componentId] = {
                repeatIndex,
                executeFunction,
            };
        } else {
            if (!wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid])
                wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid] = {};
            wwLib.globalVariables.globalComponentActionsFn.libraryComponents[uid][componentId] = {
                repeatIndex,
                executeFunction,
            };
        }
    }

    let hasActions;
     /* wwFront:start */
    const workflows = wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.workflows || {};
    hasActions = {
        value: Object.values(workflows).some(workflow => workflow.isExternal),
    };
    /* wwFront:end */

    if (hasActions.value) {
        define();
    }

 
    onUnmounted(() => {
        clean();
    });
}

export function useComponentActions({ uid, componentId, type, repeatIndex }, { configuration, componentRef, context }) {
    if (!configuration.actions) return;

    function executeFunction(actionName, args) {
        if (typeof componentRef.value?.[actionName] === 'function') {
            return componentRef.value[actionName](...args);
        }
    }

    if (type === 'section') {
        wwLib.globalVariables.globalComponentActionsFn.sections[uid] = executeFunction;
    } else if (context?.component) {
        if (!context.component.localComponentActionsFn.elements[uid])
            context.component.localComponentActionsFn.elements[uid] = {};
        context.component.localComponentActionsFn.elements[uid][componentId] = {
            repeatIndex,
            executeFunction,
        };
    } else {
        if (!wwLib.globalVariables.globalComponentActionsFn.elements[uid])
            wwLib.globalVariables.globalComponentActionsFn.elements[uid] = {};
        wwLib.globalVariables.globalComponentActionsFn.elements[uid][componentId] = {
            repeatIndex,
            executeFunction,
        };
    }

    onUnmounted(() => {
        if (type === 'section') {
            delete wwLib.globalVariables.globalComponentActionsFn.sections[uid];
            return;
        }
        if (context?.component) {
            delete context.component.localComponentActionsFn.elements[uid][componentId];
            if (Object.keys(context.component.localComponentActionsFn.elements[uid]).length === 0)
                delete context.component.localComponentActionsFn.elements[uid];
            return;
        } else {
            delete wwLib.globalVariables.globalComponentActionsFn.elements[uid][componentId];
            if (Object.keys(wwLib.globalVariables.globalComponentActionsFn.elements[uid]).length === 0)
                delete wwLib.globalVariables.globalComponentActionsFn.elements[uid];
        }
    });
}

// TODO: log when component not found??
export function executeComponentAction(action, { context }, args = []) {
    if (!action.uid) return null;
    action.category = action.category || 'elements';
    const functions =
        context?.component?.localComponentActionsFn?.[action.category]?.[action.uid] ||
        wwLib.globalVariables.globalComponentActionsFn[action.category][action.uid];
    if (!functions) return null;
    if (typeof functions === 'function') functions[action.id](action.name, args);
    const keys = Object.keys(functions);
    let executeFunction = null;
    if (keys.length && action.repeatIndex) {
        for (const key in functions) {
            if (functions[key].repeatIndex === action.repeatIndex) {
                executeFunction = functions[key].executeFunction;
                break;
            }
        }
    }
    if (!executeFunction) executeFunction = functions[keys[0]].executeFunction;
    return executeFunction(action.actionName, args) || null;
}
