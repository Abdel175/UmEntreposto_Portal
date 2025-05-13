import { executeWorkflow } from '@/_common/helpers/code/workflows.js';
import { getValue } from '@/_common/helpers/code/customCode.js';

export async function executeWorkflows(_trigger = 'onload', workflowParams = {}) {
    const trigger = typeof _trigger === 'string' ? _trigger : _trigger.trigger;
    const conditions = typeof _trigger === 'string' ? {} : _trigger.conditions || {};
    const { workflows: pageWorkflows = [], id: pageId } = wwLib.$store.getters['websiteData/getPage'] || {};
    const { workflows: appWorkflows = [] } = wwLib.$store.getters['websiteData/getDesignInfo'] || {};
    await Promise.all([
        ...pageWorkflows
            .filter(
                workflow =>
                    workflow.trigger === trigger &&
                    Object.keys(workflow?.triggerConditions || {}).every(key => {
                        const value = getValue(workflow.triggerConditions[key]);
                        return value === undefined || value === null || value === '' || conditions[key] === value;
                    })
            )
            .map(workflow => {
                return executeWorkflow(workflow, { ...workflowParams, executionContext: { type: 'p', pageId } }).catch(
                    err => wwLib.wwLog.error(err)
                ); // TODO: more info here when workflows failed?
            }),
        ...appWorkflows
            .filter(
                workflow =>
                    workflow.trigger === trigger &&
                    Object.keys(workflow?.triggerConditions || {}).every(key => {
                        const value = getValue(workflow.triggerConditions[key]);
                        return value === undefined || value === null || value === '' || conditions[key] === value;
                    })
            )
            .map(workflow => {
                return executeWorkflow(workflow, { ...workflowParams, executionContext: { type: 'a' } }).catch(err =>
                    wwLib.wwLog.error(err)
                ); // TODO: more info here when workflows failed?
            }),
    ]);
}

export function resetWorkflows() {
    wwLib.$store.dispatch('data/resetWorkflowsResult');
}
