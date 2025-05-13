const MAX_WORKFLOW_EXECUTION = 3;

/**
 *
 * @param {String[]} callstack
 * @returns {Boolean} true if guess infinity loop
 */
export function detectInfinityLoop(callstack) {
    // We don't need to check before
    if (callstack.length < MAX_WORKFLOW_EXECUTION) return false;

    const currentWorkflow = callstack[callstack.length - 1];

    // we search for repeated workflow calls
    const executions = callstack.filter(workflow => workflow === currentWorkflow);

    return executions.length >= MAX_WORKFLOW_EXECUTION;
}
