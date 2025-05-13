import { ref, markRaw } from 'vue';
 
import { getComponentLabel } from '@/_common/helpers/component/component.js';
import { useVariablesStore } from '@/pinia/variables.js';
const LOG_TYPES = {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    VERBOSE: 'verbose',
};

// TODO: register a listener to use wwLog, and remove the wwLog calls from the code

const MAX_LOGS = 5000;
export function createLogStore() {
    const logs = ref([]);
    let listeners = [];

    function log(type, message, meta) {
     }

    return {
        logs,
        log,
        error(message, meta) {
            log(LOG_TYPES.ERROR, message, meta);
        },
        warning(message, meta) {
            log(LOG_TYPES.WARNING, message, meta);
        },
        info(message, meta) {
            log(LOG_TYPES.INFO, message, meta);
        },
        verbose(message, meta) {
            log(LOG_TYPES.VERBOSE, message, meta);
        },
        registerListener(listener) {
            listeners.push(listener);
        },
        unregisterListener(listener) {
            listeners = listeners.filter(l => l !== listener);
        },
        clear() {
            logs.value = [];
        },
        TYPES: LOG_TYPES,
    };
}

 