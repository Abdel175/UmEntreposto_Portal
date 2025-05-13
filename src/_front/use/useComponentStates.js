import { ref, reactive, computed, unref, provide, inject, onUnmounted, watch } from 'vue';
import { getValue } from '@/_common/helpers/code/customCode.js';

export function useComponentStates({ uid, type }, { context = {}, propsState = [], isSelected = false }) {
    // State define by the user on this component
    const rawStates = computed(() => wwLib.$store.getters['websiteData/getComponentRawStates']({ uid, type }));

    // Store state handle by weweb like _wwHover/ _wwLinkActive
    const internalStates = reactive(new Set());

    const activeStates = computed(() => {
        return rawStates.value.filter(state => getValue(state.condition, context)).map(({ id }) => id);
    });
    const parentActiveStates = inject('activeStates', ref([]));

    const lazyCurrentStates = ref([]);
    watch(
        () => {
 
            // Props states are passed as name, this is easier for UX point of view. So we need to check that too
            return rawStates.value
                .filter(
                    ({ id, label }) =>
                        internalStates.has(id) ||
                        internalStates.has(label) ||
                        (unref(propsState) || []).includes(label) ||
                        activeStates.value.includes(id) ||
                        parentActiveStates.value.includes(id)
                )
                .map(state => state.id);
        },
        currentStates => {
            // This is working because order is always the same
            if (JSON.stringify(currentStates) !== JSON.stringify(lazyCurrentStates.value)) {
                lazyCurrentStates.value = currentStates;
            }
        },
        { immediate: true }
    );

 
    // Lazy is important, or all children will be recalculate for nothing
    const lazyProvidedStates = ref([]);
    watch(
        () => {
            const inheritStates = lazyCurrentStates.value.filter(state => state.startsWith('_wwParent_'));
            const inheritableStates = rawStates.value
                .filter(state => lazyCurrentStates.value.includes(state.id))
                .map(state => `_wwParent_${uid}_${state.id}`);

            return [...inheritStates, ...inheritableStates, ...parentActiveStates.value];
        },
        states => {
            // This is working because order is always the same
            if (JSON.stringify(states) !== JSON.stringify(lazyProvidedStates.value)) {
                lazyProvidedStates.value = states;
            }
        },
        { immediate: true }
    );

    provide('activeStates', lazyProvidedStates);

    return {
        currentStates: lazyCurrentStates,
         addInternalState(state, disabledOnEdit) {
             internalStates.add(state);
        },
        removeInternalState(state, disabledOnEdit) {
             internalStates.delete(state);
        },
        toggleInternalState(state, disabledOnEdit) {
             if (internalStates.has(state)) {
                internalStates.delete(state);
            } else {
                internalStates.add(state);
            }
        },
    };
}
