import { ref } from 'vue';
import { executeWorkflows } from '@/_common/helpers/data/workflows';

export function createKeyboardEventStore() {
    const keyboardEventInfo = ref({
        keydown: { key: '', keyCode: 0, shiftKey: false, ctrlKey: false, altKey: false, metaKey: false },
        keyup: { key: '', keyCode: 0, shiftKey: false, ctrlKey: false, altKey: false, metaKey: false },
    });

    function handleKeyDown(event) {
         keyboardEventInfo.value.keydown = {
            key: event.key,
            keyCode: event.keyCode,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
        };
        executeWorkflows('keydown', { event: keyboardEventInfo.value.keydown });
    }

    function handleKeyUp(event) {
         keyboardEventInfo.value.keyup = {
            key: event.key,
            keyCode: event.keyCode,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
        };
        executeWorkflows('keyup', { event: keyboardEventInfo.value.keyup });
    }

    function start() {
        wwLib.getFrontWindow().addEventListener('keydown', handleKeyDown);
        wwLib.getFrontWindow().addEventListener('keyup', handleKeyUp);
    }

    return {
        keyboardEventInfo,
        start,
    };
}
