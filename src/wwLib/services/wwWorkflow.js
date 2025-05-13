import { executeWorkflow } from '@/_common/helpers/code/workflows';
import { executeWorkflows } from '@/_common/helpers/data/workflows';

export default {
    /**
     * @PUBLIC_API
     */
    executeTrigger(trigger, { event, conditions = {} }) {
        executeWorkflows({ trigger, conditions }, { event });
    },

    /**
     * @PUBLIC_API
     */
    async executeGlobal(uid, parameters) {
        if (!uid) throw new Error('No workflow provided.');
        const workflow = wwLib.$store.getters['data/getGlobalWorkflows'][uid];
        if (!workflow) throw new Error('Workflow not found.');
        const execution = await executeWorkflow(workflow, {
            context: {
                parameters,
                workflow: wwLib.$store.getters['data/getWorkflowResults'](uid),
            },
        });
        if (execution.error) {
            throw execution.error;
        }
        return execution.result;
    },
};
