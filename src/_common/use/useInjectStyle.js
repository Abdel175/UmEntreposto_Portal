import { onUnmounted, watch } from 'vue';

export function useInjectStyle(id, valueRef) {
    if (!id) return;

    watch(
        valueRef,
        (value, oldValue) => {
            if (value === oldValue) return;
            if (!value?.length) {
                deleteStyle(id);
            } else {
                injectStyle(id, valueRef.value);
            }
        },
        { immediate: true }
    );

    onUnmounted(() => {
        deleteStyle(id);
    });
}

function injectStyle(id, value) {
    let styleElement = wwLib.getFrontDocument().getElementById(id);
    if (!styleElement) {
        styleElement = wwLib.getFrontDocument().createElement('style');
        styleElement.setAttribute('id', id);
        wwLib.getFrontDocument().head.append(styleElement);
    }

    styleElement.innerText = value;

    return styleElement;
}

function deleteStyle(id) {
    let styleElement = wwLib.getFrontDocument().getElementById(id);
    if (styleElement) styleElement.remove();
}
