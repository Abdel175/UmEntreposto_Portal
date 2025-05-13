import { executeCode, getValue } from '@/_common/helpers/code/customCode.js';
import { executeComponentAction } from '@/_common/use/useActions.js';
import { detectInfinityLoop } from '@/_common/helpers/code/workflowsCallstack.js';
import { getComponentLabel } from '@/_common/helpers/component/component.js';
import { set } from 'lodash';
import { unref } from 'vue';
import { useVariablesStore } from '@/pinia/variables.js';

const metaActionTypes = ['loop', 'while-loop', 'if', 'filter', 'switch'];
export async function executeWorkflow(
    workflow,
    { context = {}, event = {}, callstack = [], isError, executionContext, internal } = {}
) {
 
    let error, result;
    if (!workflow) return {};
    callstack = [...callstack, workflow.id];

    if (detectInfinityLoop(callstack)) {
         wwLib.logStore.info('Possible infinity loop detected! Workflow was stopped.', {
            workflowContext: { workflow, executionContext },
            type: 'action',
        });
        return {};
    }

 
    if (!isError) {
        switch (executionContext?.type) {
            case 'p':
                wwLib.logStore.info(`Start page workflow _wwWorkflow(${workflow.id},p,${executionContext.pageId})`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
                break;
            case 'a':
                wwLib.logStore.info(`Start application workflow _wwWorkflow(${workflow.id},a)`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
                break;
            case 'e':
                wwLib.logStore.info(`Start element workflow _wwWorkflow(${workflow.id},e,${executionContext.uid})`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
                break;
            case 'c':
                wwLib.logStore.info(`Start component _wwWorkflow(${workflow.id},c)`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
                break;
            case 's':
                wwLib.logStore.info(`Start section workflow _wwWorkflow(${workflow.id},s,${executionContext.uid})`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
                break;
            default:
                wwLib.logStore.info(`Start workflow _wwWorkflow(${workflow.id},${internal ? 'c' : 'g'})`, {
                    type: 'action',
                    workflowContext: { workflow, executionContext },
                });
        }
        ({ error, result } = await executeWorkflowActions(workflow, workflow.firstAction, {
            context,
            event,
            callstack,
            isError: false,
            executionContext,
            internal,
        }));
    }

    if (error) {
        wwLib.logStore.error('Workflow triggered an error', {
            type: 'action',
            workflowContext: { workflow, executionContext },
            error,
        });
        if (internal) {
            set(context.component, `workflowsResults.${workflow.id}.error`, convertErrorToObject(error));
        } else {
            await wwLib.$store.dispatch('data/setWorkflowError', {
                workflowId: workflow.id,
                value: convertErrorToObject(error),
            });
        }
    }

    // Execute error workflow
    if (isError || error) {
        wwLib.logStore.info('Start error branch', {
            workflowContext: { workflow, executionContext },
            type: 'action',
        });
        const { result: errorResult } = await executeWorkflowActions(workflow, workflow.firstErrorAction, {
            context,
            event,
            callstack,
            isError: true,
            executionContext,
            internal,
        });
         // Always return initial error, we ignore error from the error branch
        wwLib.logStore.info('Error branch done!', {
            workflowContext: { workflow, executionContext },
            type: 'action',
        });
        return { error, result: errorResult };
    }

     wwLib.logStore.info('Workflow done!', {
        workflowContext: { workflow, executionContext },
        type: 'action',
    });
    return { error, result };
}

export async function executeWorkflowActions(
    workflow,
    actionId,
    { context, event, callstack = [], isError, queue = [], executionContext, internal }
) {
    try {
        if (!workflow || !actionId) return {};
        const action = workflow.actions[actionId];
        if (!action) return {};

        // Each action may change workflows info, so we refetch new data on each iteration
        let localContext = {
            ...context,
            workflow: internal
                ? context?.component?.workflowsResults?.[workflow.id]
                : wwLib.$store.getters['data/getWorkflowResults'](workflow.id),
        };

        const { result, stop, breakLoop } = await executeWorkflowAction(workflow, actionId, {
            context: localContext,
            event,
            callstack,
            isError,
            standalone: false,
            executionContext,
            internal,
        });

        if (stop || breakLoop) {
            return { result, breakLoop };
        }

        let branch = (action.branches || []).find(({ value }) => value === result);
        if (!branch) {
            branch = (action.branches || []).find(({ isDefault }) => isDefault);
        }
        if (branch && branch.id && !action.disabled) {
            return await executeWorkflowActions(workflow, branch.id, {
                context: localContext,
                event,
                callstack,
                isError,
                queue: action.next ? [action.next, ...queue] : queue,
                executionContext,
                internal,
            });
        } else if (action.next) {
            return await executeWorkflowActions(workflow, action.next, {
                context: localContext,
                event,
                callstack,
                isError,
                queue,
                executionContext,
                internal,
            });
        } else if (queue.length) {
            return await executeWorkflowActions(workflow, queue[0], {
                context: localContext,
                event,
                callstack,
                isError,
                queue: queue.slice(1),
                executionContext,
                internal,
            });
        } else {
            return { result };
        }
    } catch (error) {
        // Stop the actions if one failed (legacy behavior)
        return { error };
    }
}

export async function executeWorkflowAction(
    workflow,
    actionId,
    { context = {}, event = {}, callstack = [], isError, standalone = true, executionContext, internal }
) {
    let result, stop, breakLoop;
    if (!workflow || !actionId) return { result };

    if (!Object.keys(context).includes('workflow')) {
        context = {
            ...context,
            workflow: internal
                ? context?.component?.workflowsResults[workflow.id]
                : wwLib.$store.getters['data/getWorkflowResults'](workflow.id),
        };
    }

    const action = workflow.actions[actionId];
    if (!action) return { result };

    function logActionInformation(type, log, meta = {}) {
        wwLib.logStore.log(type, log, {
            workflowContext: { workflow, actionId: action.id, executionContext },
            type: 'action',
            ...meta,
        });
    }

 
    if (!standalone && action.disabled) {
         return { result };
    }

 
    const wwUtils = {
        log: logActionInformation,
    };

    try {
        switch (action.type) {
            case 'custom-js': {
                if (!action.code) throw new Error('No custom code defined.');
                result = await executeCode(action.code, context, event, wwUtils);
                logActionInformation('info', 'Executing custom Javascript');
                break;
            }
            case 'variable': {
                if (!action.varId) throw new Error('No variable selected.');
                const value = getValue(action.varValue, context, { event, recursive: false });
                const path = action.usePath ? getValue(action.path || '', context, { event, recursive: false }) : null;
                const index = getValue(action.index || 0, context, { event, recursive: false });

                const variablesStore = useVariablesStore(wwLib.$pinia);
                const innerVariables =
                    wwLib.$store.getters['libraries/getComponents'][context?.component?.baseUid]?.inner?.variables ||
                    {};
                const innerComponentVariables = context?.component?.componentVariablesConfiguration || {};

                if (innerVariables[action.varId] || innerComponentVariables[action.varId]) {
                    result = context?.component?.methods?.updateVariable(action.varId, value, {
                        path,
                        index,
                        arrayUpdateType: action.arrayUpdateType,
                        workflowContext: { workflow, actionId: action.id, executionContext },
                    });
                } else if (variablesStore.getConfiguration(action.varId)) {
                    result = wwLib.wwVariable.updateValue(action.varId, value, {
                        path,
                        index,
                        arrayUpdateType: action.arrayUpdateType,
                        workflowContext: { workflow, actionId: action.id, executionContext },
                    });
                }

                break;
            }
            case 'reset-variables': {
                const variablesStore = useVariablesStore(wwLib.$pinia);
                const innerVariables =
                    wwLib.$store.getters['libraries/getComponents'][context?.component?.baseUid]?.inner?.variables ||
                    {};
                const innerComponentVariables = context?.component?.componentVariablesConfiguration || {};
                for (const varId of action.varsId || []) {
                    if (!varId) continue;
                    const variable = variablesStore.getConfiguration(varId);
                    if (variable) {
                        wwLib.wwVariable.updateValue(
                            varId,
                            variable.defaultValue === undefined ? null : unref(variable.defaultValue),
                            { workflowContext: { workflow, actionId: action.id, executionContext } }
                        );
                    } else if (innerVariables[varId]) {
                        context?.component?.methods?.updateVariable(
                            varId,
                            innerVariables[varId].defaultValue === undefined
                                ? null
                                : unref(innerVariables[varId].defaultValue),
                            {
                                workflowContext: { workflow, actionId: action.id, executionContext },
                            }
                        );
                    } else if (innerComponentVariables[varId]) {
                        context?.component?.methods?.updateVariable(
                            varId,
                            innerComponentVariables[varId].defaultValue === undefined
                                ? null
                                : unref(innerComponentVariables[varId].defaultValue),
                            {
                                workflowContext: { workflow, actionId: action.id, executionContext },
                            }
                        );
                    }
                }
                break;
            }
            case 'fetch-collection': {
                if (!action.collectionId) throw new Error('No collection selected.');
                const collection = wwLib.$store.getters['data/getCollections'][action.collectionId];
                if (!collection) throw new Error('Collection not found.');
                await wwLib.wwCollection.fetchCollection(
                    action.collectionId,
                    {},
                    { workflowContext: { workflow, actionId: action.id, executionContext } }
                );
                if (collection.error) {
                    if (collection.error.message) throw { name: 'Error', ...collection.error };
                    else throw new Error('Error while fetching the collection');
                }
                break;
            }
            case 'fetch-collections': {
                if (!action.collectionsId.length) throw new Error('No collection selected.');
                const collections = wwLib.$store.getters['data/getCollections'];
                await Promise.all(
                    action.collectionsId
                        .filter(id => !!id)
                        .map(async collectionId => {
                            const collection = collections[collectionId];
                            if (!collection) throw new Error('Collection not found.');
                            await wwLib.wwCollection.fetchCollection(
                                collectionId,
                                {},
                                { workflowContext: { workflow, actionId: action.id, executionContext } }
                            );
                            if (collection.error) {
                                if (collection.error.message) throw { name: 'Error', ...collection.error };
                                else throw new Error(`Error while fetching the collection ${collection.name}`);
                            }
                        })
                );
                break;
            }
            case 'update-collection': {
                if (!action.collectionId) throw new Error('No collection selected.');
                const collection = wwLib.$store.getters['data/getCollections'][action.collectionId];
                if (!collection) throw new Error('Collection not found.');
                await wwLib.wwCollection.updateCollection(
                    action.collectionId,
                    getValue(action.data, context, { event }),
                    {
                        updateType: action.updateType,
                        updateIndex: getValue(action.updateIndex, context, { event }),
                        updateBy: action.updateBy,
                        idKey: getValue(action.idKey, context, { event }),
                        idValue: getValue(action.idValue, context, { event }),
                        merge: getValue(action.merge, context, { event }),
                        refreshFilter: getValue(action.refreshFilter, context, { event }),
                        refreshSort: getValue(action.refreshSort, context, { event }),
                    }
                );
                break;
            }
            case 'change-page': {
                if (action.navigateMode === 'external') {
                    const externalUrl = getValue(action.externalUrl, context, { event });

                     /* wwFront:start */
                    if (action.openInNewTab) wwLib.getFrontWindow().open(externalUrl, '_blank');
                    else wwLib.getFrontWindow().open(externalUrl, '_self');
                    /* wwFront:end */

                    logActionInformation('info', 'Navigate to', {
                        preview: externalUrl || 'Undefined',
                    });

                    break;
                }

                let href;
                let queries = {};

                if (action.mode === 'path') {
                    let path = getValue(action.path, context, { event });
                    if (path !== '/' && path.endsWith('/')) path = path.replace(/\/$/, '');
                     /* wwFront:start */
                    href = path;
                    /* wwFront:end */
                } else {
                    if (!action.pageId) throw new Error('No page selected.');
                    const value = getValue(action.pageId, context, { event });
                    const pageId = typeof value === 'object' ? value.id : value;
                    const page = wwLib.$store.getters['websiteData/getPageById'](pageId);
                    if (!page) throw new Error('Page not found.');
                     /* wwFront:start */
                    href = wwLib.wwPageHelper.getPagePath(pageId);
                    /* wwFront:end */
                    const resolvedParameters = Object.keys(action.parameters || {}).reduce(
                        (result, param) => ({
                            ...result,
                            [param]: getValue(action.parameters[param], context, { event }),
                        }),
                        {}
                    );
                    const variables = wwLib.$store.getters['data/getPageParameterVariablesFromId'](pageId);
                     /* wwFront:start */
                    for (const variable of variables) {
                        href = href.replace(
                            `{{${variable.id}|${variable.defaultValue || ''}}}`,
                            resolvedParameters[variable.id]
                        );
                    }
                    /* wwFront:end */
                }

                const resolvedQueries = getValue(action.queries, context, { event });
                if (resolvedQueries) {
                    if (Array.isArray(resolvedQueries) && resolvedQueries.length)
                        queries = resolvedQueries.reduce((queries, query) => {
                            queries[query.name] = query.value;
                            return queries;
                        }, queries);
                    else if (typeof resolvedQueries === 'object') {
                        queries = { ...queries, ...resolvedQueries };
                    }
                }

                if (action.loadProgress && action.loadProgressColor) {
                    wwLib.$store.dispatch('front/showPageLoadProgress', { color: action.loadProgressColor });
                }
                const section = getValue(action.section, context, { event });
                const hash = wwLib.wwUtils.sanitize(
                    wwLib.$store.getters['websiteData/getSectionTitle'](section) || section
                );
                wwLib.wwApp.goTo(href, queries, {
                    openInNewTab: action.openInNewTab,
                    hash: hash ? `#${hash}` : null,
                });
                break;
            }
            case 'previous-page': {
                let noBack;

                 noBack = !wwLib.getFrontRouter().options.history.state.back;

                if (noBack) {
                    let href;
                    if (!action.pageId) throw new Error('No page selected.');
                    const value = getValue(action.pageId, context, { event });
                    const pageId = typeof value === 'object' ? value.id : value;
                    const page = wwLib.$store.getters['websiteData/getPageById'](pageId);
                    if (!page) throw new Error('Page not found.');
                     /* wwFront:start */
                    href = wwLib.wwPageHelper.getPagePath(pageId);
                    /* wwFront:end */
                    wwLib.wwApp.goTo(href);
                    break;
                }

                 wwLib.getFrontRouter().go(-1);

                break;
            }
            case 'page-loader': {
                if (action.show) {
                    wwLib.$store.dispatch('front/showPageLoadProgress', { color: action.color || 'blue' });
                    logActionInformation('info', 'Setting page loader progress bar', {
                        preview: action.color || 'blue',
                    });
                } else {
                    wwLib.$store.dispatch('front/showPageLoadProgress', false);
                    logActionInformation('info', 'Disable page loader progress bar');
                }

                break;
            }
            case 'upload-file': {
                const variablesStore = useVariablesStore(wwLib.$pinia);
                if (!action.varId) throw new Error('No file variable selected.');

                const isVariable = typeof action.varId === 'string';
                const isInternalVariable =
                    isVariable && context?.component?.componentVariablesConfiguration?.[action.varId];

                const fileVariable = isVariable
                    ? isInternalVariable
                        ? context?.component?.componentVariablesConfiguration?.[action.varId]
                        : variablesStore.components[action.varId]
                    : null;
                const actionValue = isVariable
                    ? isInternalVariable
                        ? context?.component?.variables[action.varId]
                        : variablesStore.values[action.varId]
                    : getValue(action.varId, context, { event });

                if (isVariable) {
                    if (!fileVariable) throw new Error('File variable not found.');
                    if (!actionValue)
                        throw new Error(
                            'No file selected. Please create a true / false split to manage the case when there is no file.'
                        );
                } else {
                    if (!actionValue) throw new Error('File not found.');
                    if (typeof actionValue !== 'object') throw new Error('Not a file object.');
                }

                const progressVariable = isVariable
                    ? isInternalVariable
                        ? context?.component?.componentVariablesConfiguration?.[`${fileVariable.componentUid}-progress`]
                        : variablesStore.components[`${fileVariable.componentUid}-progress`]
                    : null;

                const statusVariable = isVariable
                    ? isInternalVariable
                        ? context?.component?.componentVariablesConfiguration?.[`${fileVariable.componentUid}-status`]
                        : variablesStore.components[`${fileVariable.componentUid}-status`]
                    : null;

                const element = isVariable
                    ? wwLib.$store.getters['websiteData/getWwObjects'][fileVariable.componentUid] || {}
                    : null;
                const isMultiple = isVariable
                    ? element?.content?.default?.multiple || statusVariable
                    : Array.isArray(actionValue);

                const updateProgressVariable = progress => {
                    if (!progressVariable) return;
                    if (isInternalVariable) {
                        context?.component?.methods?.updateVariable(`${fileVariable.componentUid}-progress`, progress);
                    } else {
                        variablesStore.setValue(progressVariable.id, progress);
                    }
                };

                const markAllFilesCompleted = () => {
                    if (!statusVariable) return;

                    const currentStatus = isInternalVariable
                        ? context?.component?.variables[`${fileVariable.componentUid}-status`] || {}
                        : variablesStore.values[statusVariable.id] || {};

                    const updatedStatus = { ...currentStatus };
                    for (const file of files) {
                        if (file && file.name) {
                            updatedStatus[file.name] = {
                                uploadProgress: 100,
                                isUploading: false,
                                isUploaded: true,
                            };
                        }
                    }

                    if (isInternalVariable) {
                        context?.component?.methods?.updateVariable(
                            `${fileVariable.componentUid}-status`,
                            updatedStatus
                        );
                    } else {
                        variablesStore.setValue(statusVariable.id, updatedStatus);
                    }
                };

                let progress = 0;
                result = [];

                const designId = wwLib.$store.getters['websiteData/getDesignInfo'].id;
                const files = isMultiple ? actionValue : [actionValue];

                for (const file of files) {
                    if (!file || !file.name) continue;

                    const { data } = await axios.post(
                        `${wwLib.wwApiRequests._getApiUrl()}/designs/${designId}/user-files`,
                        {
                            name: file.name.replace(/[#!@$%^&*()+=\[\]{};':"\\|,<>\? \/]/g, '_'), // Replace problematic characters with underscores
                            type: file.type || file.mimeType,
                            size: file.size,
                            tag: `${getValue(action.fileTag, context, { event, recursive: false }) || ''}`,
                        }
                    );

                    const handleFileProgress = data => {
                        const fileProgress = (data.loaded / data.total) * 100;
                        const overallProgress = progress + fileProgress / files.length;

                        updateProgressVariable(overallProgress);

                        if (statusVariable) {
                            const fileId = file.name;
                            const currentStatus = isInternalVariable
                                ? context?.component?.variables[`${fileVariable.componentUid}-status`] || {}
                                : variablesStore.values[statusVariable.id] || {};

                            const updatedStatus = {
                                ...currentStatus,
                                [fileId]: {
                                    uploadProgress: fileProgress,
                                    isUploading: fileProgress < 100,
                                    isUploaded: fileProgress >= 100,
                                },
                            };

                            if (isInternalVariable) {
                                context?.component?.methods?.updateVariable(
                                    `${fileVariable.componentUid}-status`,
                                    updatedStatus
                                );
                            } else {
                                variablesStore.setValue(statusVariable.id, updatedStatus);
                            }
                        }
                    };

                    await axios.put(data.signedRequest, file, {
                        headers: { Accept: '*/*', 'Content-Type': file.type || file.mimeType },
                        skipAuthorization: true,
                        onUploadProgress: handleFileProgress,
                    });

                     result.push({ url: data.url, name: data.name, ext: data.ext, tag: data.tag, size: data.size });
                    progress += 100 / files.length;
                }
                if (!isMultiple) result = result[0];

                updateProgressVariable(100);
                markAllFilesCompleted();

                logActionInformation('info', 'File upload completed', { preview: result });
                break;
            }
            case 'execute-workflow': {
                if (!action.workflowId) throw new Error('No workflow selected.');

                let workflow;
                let childExecutionContext;
                if (action.internal) {
                    workflow =
                        wwLib.$store.getters['libraries/getComponents'][context?.component?.baseUid]?.inner
                            ?.workflows?.[action.workflowId];
                    childExecutionContext = {
                        libraryComponentIdentifier: executionContext?.libraryComponentIdentifier,
                    };
                } else {
                    workflow = wwLib.$store.getters['data/getGlobalWorkflows'][action.workflowId];
                }
                if (!workflow) throw new Error('Workflow not found.');

                logActionInformation('info', `Starting an other workflow (${workflow.name})`);

                const parameters = {};
                Object.keys(action.parameters || {}).forEach(paramName => {
                    parameters[paramName] = getValue(action.parameters[paramName], context, { event });
                });
                const execution = await executeWorkflow(workflow, {
                    context: {
                        ...context,
                        parameters,
                        workflow: action.internal
                            ? context?.component?.workflowsResults?.[action.workflowId] || {}
                            : wwLib.$store.getters['data/getWorkflowResults'](action.workflowId),
                    },
                    event,
                    callstack,
                    internal: action.internal,
                    executionContext: childExecutionContext,
                });
                result = execution.result;
                if (execution.error) {
                    throw execution.error;
                }
                break;
            }
            case 'trigger-event': {
                if (!action.triggerId) throw new Error('No trigger selected.');
                const trigger =
                    wwLib.$store.getters['libraries/getComponents'][context?.component?.baseUid]?.configuration
                        ?.triggers?.[action.triggerId];
                const value = getValue(action.event, context, { event, recursive: false });
                logActionInformation('info', `Emiting an event (${trigger?.label})`);
                context?.component?.methods?.triggerEvent(action.triggerId, value);
                break;
            }
            case 'component-action': {
                if (!action.actionName) throw new Error('No actions selected.');

                const argsValues = getValue(action.args, context, { event, recursive: true });
                logActionInformation(
                    'info',
                    `${action.actionName} triggered on ${getComponentLabel(action.type, action.uid)}`
                );

                result = executeComponentAction(
                    {
                        ...action,
                        repeatIndex: context?.item?.repeatIndex || null,
                    },
                    { context },
                    argsValues
                );

                break;
            }
            case 'execute-dropzone-workflow': {
                if (!action.workflowId) throw new Error('No workflow selected.');
                const parameters = getValue(action.parameters, context, { event });
                const execution = await context?.dropzone?.methods?.executeWorkflow(action.workflowId, parameters);
                result = execution.result;
                if (execution.error) {
                    throw execution.error;
                }
                break;
            }
            case 'return': {
                result = getValue(action.value, context, { event });
                logActionInformation('info', 'Returning value', { preview: result });
                break;
            }
            case 'if': {
                result = !!getValue(action.value, context, { event });
                logActionInformation(
                    'info',
                    `Branching for ${isError ? 'Error ' : ''}Action ${action.name ? `| ${action.name}` : ''} - ${
                        result ? 'True' : 'False'
                    }`
                );
                break;
            }
            case 'switch': {
                result = getValue(action.value, context, { event });
                logActionInformation(
                    'info',
                    `Branching for ${isError ? 'Error ' : ''}Action ${
                        action.name ? `| ${action.name}` : ''
                    } - ${JSON.stringify(result)}`
                );
                break;
            }
            case 'filter': {
                result = !!getValue(action.value, context, { event });
                stop = !result;
                if (stop) {
                    logActionInformation(
                        'info',
                        `Filter ${isError ? 'Error ' : ''}Action ${action.name ? `| ${action.name}` : ''} - Stop`
                    );
                }
                break;
            }
            case 'wait': {
                if (action.value === undefined && action.duration === undefined)
                    throw new Error('No time delay defined.');
                const delay = getValue(action.value || action.duration, context, { event });
                logActionInformation('info', `Waiting ${delay}ms ⏳`);
                await new Promise(resolve => setTimeout(resolve, delay));
                logActionInformation('info', '⌛ Stop waiting');
                break;
            }
            case 'user-location': {
                if (!('geolocation' in navigator)) {
                    logActionInformation('error', 'Geolocation is not available.');
                    throw new Error('Geolocation is not available.');
                }

                try {
                    const response = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    result = {
                        coords: {
                            accuracy: response.coords.accuracy,
                            altitude: response.coords.altitude,
                            altitudeAccurary: response.coords.altitudeAccurary,
                            heading: response.coords.heading,
                            latitude: response.coords.latitude,
                            longitude: response.coords.longitude,
                            speed: response.coords.speed,
                        },
                        timestamp: response.timestamp,
                    };
                } catch (error) {
                    logActionInformation('error', 'Error while geolocation.');
                    throw new Error('Error while geolocation.');
                }

                break;
            }
            case 'print-pdf': {
                wwLib.getFrontWindow().print();

 
                break;
            }
            case 'loop': {
                let items = getValue(action.value, context, { event });
                if (!Array.isArray(items)) {
                    throw new Error('Fail to start loop, as items to parse is not iterable');
                } else {
                    if (items.length)
                        logActionInformation(
                            'info',
                            `${action.name ? action.name + ': ' : ''} Starting looping on ${items.length} items`
                        );
                    else
                        logActionInformation(
                            'info',
                            `${action.name ? action.name + ': ' : ''} Skipping loop as items to parse is empty`
                        );
                }
                for (const [index, item] of items.entries()) {
                    if (internal) {
                        set(context.component, `workflowsResults.${workflow.id}.${actionId}.loop`, {
                            index,
                            item,
                            items,
                        });
                    } else {
                        wwLib.$store.dispatch('data/setWorkflowActionLoop', {
                            workflowId: workflow.id,
                            actionId,
                            loop: {
                                index,
                                item,
                                items,
                            },
                        });
                    }
                    logActionInformation(
                        'info',
                        `Loop ${isError ? 'Error ' : ''}Action ${action.name ? `| ${action.name}` : ''} - Iteration ${
                            index + 1
                        }/${items.length}`
                    );
                    const {
                        error: loopError,
                        result: loopResult,
                        breakLoop: loopBrealLoop,
                    } = await executeWorkflowActions(workflow, action.loop, {
                        isError,
                        context,
                        event,
                        callstack,
                        executionContext,
                        internal,
                    });
                    if (loopError) {
                        throw loopError;
                    }
                    result = loopResult;
                    if (loopBrealLoop) {
                        break;
                    }
                }
                logActionInformation(
                    'info',
                    `Loop ${isError ? 'Error ' : ''}Action ${action.name ? `| ${action.name}` : ''} - End`
                );
                break;
            }
            case 'while-loop': {
                logActionInformation('info', `${action.name ? action.name + ': ' : ''} Start while loop`);
                let value = getValue(action.value, context, { event });
                while (value) {
                    const {
                        error: loopError,
                        result: loopResult,
                        breakLoop: loopBrealLoop,
                    } = await executeWorkflowActions(workflow, action.loop, {
                        isError,
                        context,
                        event,
                        callstack,
                        executionContext,
                        internal,
                    });
                    result = loopResult;
                    if (loopError) {
                        throw loopError;
                    }
                    if (loopBrealLoop) {
                        break;
                    }
                    // Each action may change workflows info, so we refetch new data on each iteration
                    let localContext = {
                        ...context,
                        workflow: internal
                            ? context?.component?.workflowsResults?.[workflow.id]
                            : wwLib.$store.getters['data/getWorkflowResults'](workflow.id),
                    };
                    value = getValue(action.value, localContext, { event });
                }
                logActionInformation(
                    'info',
                    `While ${isError ? 'Error ' : ''}Action ${action.name ? `| ${action.name}` : ''} - End`
                );
                break;
            }
            case 'continue-loop': {
                result = stop = getValue(action.value, context, { event });
                break;
            }
            case 'break-loop': {
                result = breakLoop = getValue(action.value, context, { event });
                break;
            }
            case 'change-lang': {
                if (!action.lang) throw new Error('No language selected.');
                const lang = getValue(action.lang, context, { event });
                logActionInformation('info', `Changing language to "${lang}"`);

                const setLangSuccess = wwLib.wwLang.setLang(lang);
                if (!setLangSuccess) throw new Error(`Page does not contain the lang "${lang}"`);

                break;
            }
            case 'log': {
                if (!action.message) throw new Error('No message defined.');
                const message = getValue(action.message, context, { event });
                if (typeof message !== 'string') throw new Error('Message must be a string.');
                const preview = getValue(action.preview, context, { event });
                logActionInformation(action.level || 'info', message, { preview });
                break;
            }
            case 'copy-clipboard': {
                result = getValue(action.value, context, { event });
                logActionInformation('info', 'Copying value to clipboard', { preview: result });
                await navigator.clipboard.writeText(`${result}`);
                break;
            }
            case 'stop-click': {
                event?.stopPropagation?.();
                event?.preventDefault?.();
                break;
            }
            case 'file-create-url': {
                const base64String = getValue(action.fileString, context, { event });
                // Decode the Base64 string into a Uint8Array
                const binaryString = atob(
                    base64String.startsWith('data:') ? base64String.split('base64,')[1] : base64String
                );
                const arrayBuffer = new ArrayBuffer(binaryString.length);
                const uint8Array = new Uint8Array(arrayBuffer);
                for (let i = 0; i < binaryString.length; i++) {
                    uint8Array[i] = binaryString.charCodeAt(i);
                }

                // Create a Blob from the Uint8Array
                const blob = new Blob([uint8Array], { type: 'application/octet-stream' });

                // Generate a URL for the Blob
                const blobUrl = URL.createObjectURL(blob);
                logActionInformation('info', 'Create object URL from Base64', { preview: result });
                result = blobUrl;
                break;
            }
            case 'file-encode-base64': {
                const variablesStore = useVariablesStore(wwLib.$pinia);
                let file;
                if (typeof action.file === 'string') {
                    const innerComponentVariables = context?.component?.componentVariablesConfiguration || {};
                    if (innerComponentVariables[action.file]) {
                        file = context?.component?.variables?.[action.file];
                    } else {
                        file = variablesStore.values[action.file];
                    }
                } else {
                    file = getValue(action.file, context, { event });
                }
                if (!file) throw new Error('File not found.');
                if (typeof file !== 'object') throw new Error('Not a file object.');

                result = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.onload = () =>
                        resolve(action.output === 'base64' ? reader.result.split(',')[1] : reader.result);

                    reader.readAsDataURL(file);
                });
                if (!result)
                    throw new Error(
                        'Cannot encode the file. Your file may be too big to be encoded to base64 in a browser (Chrome-like=512mb;Firefox=32mb).'
                    );
                logActionInformation('info', 'Generate Base64 encoded file', { preview: truncateString(result, 20) });
                break;
            }
            case 'file-download-url': {
                const res = await fetch(getValue(action.fileUrl, context, { event }));
                if (!res.ok) {
                    const error = await res.text();
                    throw new Error('File could not be fetch', { cause: error });
                }
                const blob = await res.blob();

                // Create a URL for the Blob object
                const blobUrl = URL.createObjectURL(blob);

                // Sanitize and validate the file name
                let fileName = getValue(action.fileName, context, { event }) || '';
                fileName = fileName.replace(/[^\w\s.-]/gi, '');

                if (blobUrl.startsWith('blob:')) {
                    // Create a link element for downloading the file
                    const downloadLink = wwLib.getFrontDocument().createElement('a');

                    // Set the download attributes with sanitized values
                    downloadLink.href = blobUrl;
                    downloadLink.download = fileName;

                    // Simulate a click on the link to trigger the download
                    downloadLink.click();
                } else {
                    throw new Error('Invalid blob URL');
                }

                // Clean up by revoking the Blob URL
                URL.revokeObjectURL(blobUrl);

                logActionInformation('info', 'Download file from URL');
                break;
            }
            case 'change-theme': {
                const theme = getValue(action.theme, context, { event }) || 'light';
                wwLib.$store.dispatch('front/setTheme', theme);
                logActionInformation('info', `Changed to ${theme} theme`);
                break;
            }
            default: {
                if (action.type.startsWith('_wwLocalMethod_')) {
                    const match = action.type.match(/_wwLocalMethod_(.+)\.(.+)/);
                    if (match) {
                        const [, elementKey, methodKey] = match;
                        const method = context.local?.methods?.[elementKey]?.[methodKey]?.method;

                        if (typeof method === 'function') {
                            const args = (action.args || []).map(arg => getValue(arg, context, { event }));
                            result = method(...args);
                            logActionInformation('info', `Executing local method: ${elementKey}.${methodKey}`);
                        } else {
                            logActionInformation(
                                'error',
                                `Local method not found or not a function: ${elementKey}.${methodKey}`
                            );
                        }
                    } else {
                        logActionInformation('error', 'Invalid local method format');
                    }
                } else {
                    const actions = wwLib.$store.getters['data/getPluginActions'];
                    const currentAction = actions[action.type];
                    if (!currentAction) break;
                    const plugin =
                        currentAction.pluginId &&
                        wwLib.$store.getters['websiteData/getPluginById'](currentAction.pluginId);
                    if (!plugin) break;
                    const args = getValue(action.args || [], context, { event });
                    logActionInformation('info', `Action ${currentAction.name}`);
                    try {
                        const promise = wwLib.wwPlugins[plugin.namespace][currentAction.code](args, wwUtils);
                        result = currentAction.isAsync ? await promise : promise;
                    } catch (error) {
                        wwLib.wwLog.error(error);
                        throw error;
                    }
                }

                break;
            }
        }

        if (internal) {
            set(context.component, `workflowsResults.${workflow.id}.${actionId}.result`, result);
            set(context.component, `workflowsResults.${workflow.id}.${actionId}.error`, null);
        } else {
            wwLib.$store.dispatch('data/setWorkflowActionResult', {
                workflowId: workflow.id,
                actionId,
                result,
                error: null,
            });
        }

 
        if (!metaActionTypes.includes(action.type)) {
            switch (action.type) {
                case 'file-encode-base64':
                    logActionInformation('info', 'Succeeded 🎉', { preview: truncateString(result, 20) });
                    break;
                default:
                    logActionInformation('info', 'Succeeded 🎉', { preview: result });
            }
        }
    } catch (err) {
        const error = convertErrorToObject(err);
        if (internal) {
            set(context.component, `workflowsResults.${workflow.id}.${actionId}.error`, error);
            set(context.component, `workflowsResults.${workflow.id}.${actionId}.result`, result);
        } else {
            wwLib.$store.dispatch('data/setWorkflowActionResult', {
                workflowId: workflow.id,
                actionId,
                error,
                result,
            });
        }

         if (err) {
            wwLib.logStore.error('An error happened during the execution of the workflow', {
                type: 'action',
                error: err,
                workflowContext: { workflow, executionContext },
            });
        }
        throw err;
    }

    return { result, stop, breakLoop };
}

function convertErrorToObject(err) {
    const keys = ['name', ...Object.getOwnPropertyNames(err)];
    let error = {};
    for (const key of keys) error[key] = err[key];
    return error;
}

 
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}
