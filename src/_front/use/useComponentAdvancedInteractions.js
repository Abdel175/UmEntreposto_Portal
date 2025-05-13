import { watch, onMounted, onUnmounted } from 'vue';

export function useComponentAdvancedInteractions(_state, pageId) {
    watch(
        () => _state?.id,
        (newId, oldId) => {
            if (newId !== oldId) {
                if (oldId) delete wwLib.scrollStore.componentPositionInfo.value[oldId];
                if (newId && _state?.watchScrollPosition) {
                    wwLib.scrollStore.componentPositionInfo.value[newId] = {
                        pageId,
                    };
                }
            }
        }
    );

    watch(
        () => _state?.watchScrollPosition,
        (isActive, wasActive) => {
            if (isActive !== wasActive) {
                if (wasActive && _state?.id) delete wwLib.scrollStore.componentPositionInfo.value[_state.id];
                if (isActive && _state?.id) {
                    wwLib.scrollStore.componentPositionInfo.value[_state.id] = {
                        pageId,
                    };
                }
            }
        },
        { immediate: true }
    );

    onMounted(() => {
        if (_state?.id && _state?.watchScrollPosition && !wwLib.scrollStore.componentPositionInfo.value?.[_state.id]) {
            wwLib.scrollStore.componentPositionInfo.value[_state.id] = {
                pageId,
            };
        }
    });

    onUnmounted(() => {
        if (
            _state?.id &&
            wwLib.scrollStore.componentPositionInfo.value?.[_state.id] &&
            wwLib.scrollStore.componentPositionInfo.value?.[_state.id].pageId === pageId
        ) {
            delete wwLib.scrollStore.componentPositionInfo.value[_state.id];
        }
    });
}
