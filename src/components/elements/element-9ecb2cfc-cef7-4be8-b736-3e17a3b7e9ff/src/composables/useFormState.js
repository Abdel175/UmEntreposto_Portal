import { ref, shallowReactive, computed, shallowRef } from 'vue';

export function useFormState() {
    const isSubmitting = shallowRef(false);
    const isSubmitted = shallowRef(false);
    const inputValidityMap = ref({});

    const formState = shallowReactive({
        isSubmitting: computed(() => isSubmitting.value),
        isSubmitted: computed(() => isSubmitted.value),
        isValid: computed(() => {
            const inputsValidity = Object.values(inputValidityMap.value);
            if (inputsValidity.some(v => v === null)) {
                return null;
            }

            return !inputsValidity.some(isValid => !isValid);
        }),
    });

    const setFormState = newState => {
        if ('isSubmitting' in newState) isSubmitting.value = newState.isSubmitting;
        if ('isSubmitted' in newState) isSubmitted.value = newState.isSubmitted;
    };

    const updateInputValidity = (inputId, isValid) => {
        if (typeof isValid === 'boolean' || isValid === null) {
            inputValidityMap.value[inputId] = isValid;
        }
    };

    const removeInputValidity = inputId => {
        delete inputValidityMap.value[inputId];
    };

    return {
        formState,
        setFormState,
        updateInputValidity,
        removeInputValidity,
    };
}
