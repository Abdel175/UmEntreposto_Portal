import { debounce, isEqual } from 'lodash-es';
import { inject, computed, watch, onBeforeUnmount, shallowRef, unref, isRef } from 'vue';

function isValueEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'number') {
        return Number.isNaN(value);
    }

    if (typeof value === 'string') {
        return value.length === 0;
    }

    if (typeof value === 'boolean') {
        return false;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (value instanceof Set) {
        return value.size === 0;
    }

    if (value instanceof Map) {
        return value.size === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}

/**
 * This composable is defined here to be provided once to all form children inputs.
 * It allows child components to interact with the parent form by:
 * - Registering themselves as form inputs
 * - Providing their values and validation state
 * - Receiving form context like the form name and uid
 * - Unregistering when unmounted
 */
export function useForm(
    value,
    {
        fieldName,
        validation,
        customValidation = shallowRef(false),
        required = shallowRef(false),
        initialValue = undefined,
    },
    { elementState, emit, sidepanelFormPath = 'form', setValue = null }
) {
    const form = inject('_wwForm:info', null);
    const registerFormInput = inject('_wwForm:registerInput', () => {});
    const unregisterFormInput = inject('_wwForm:unregisterInput', () => {});
    const updateFormInput = inject('_wwForm:updateInput', () => {});

    const { uid } = elementState;
    const _fieldName = computed(() => fieldName?.value || elementState.name);

    function updateValue(newValue) {
        if (setValue) {
            setValue(newValue);
        } else {
            value.value = newValue;
        }
    }

    registerFormInput(uid, {
        [_fieldName.value]: {
            value: value.value,
            isValid: !required.value && !customValidation.value ? true : null,
            pending: false,
            forceValidateField,
            updateValue,
            initialValue: unref(initialValue), // Store the initialValue so it can be used during form reset
        },
    });

    // Watch initialValue if it's a ref and update the form input
    if (isRef(initialValue)) {
        watch(initialValue, newInitialValue => {
            updateFormInput(uid, input => {
                if (input[_fieldName.value]) {
                    input[_fieldName.value].initialValue = newInitialValue;
                }
            });
        });
    }
    const { resolveFormula } = wwLib.wwFormula.useFormula();

    const computeValidation = (value, required, customValidation, validation) => {
        const validationResult = customValidation && validation ? resolveFormula(validation)?.value : true;
        const hasValue = !isValueEmpty(value);

        // If not required, field is valid unless there's custom validation
        if (!required) {
            return validationResult;
        }

        // If required and has custom validation, both must be true
        if (customValidation && validation) {
            return hasValue && validationResult;
        }

        // If just required, check for value
        return hasValue;
    };

    function updateInputValidity(isValid) {
        updateFormInput(uid, input => {
            if (!input[_fieldName.value]) {
                console.warn('Field name not available, is the AI generating ?');
                return;
            }
            input[_fieldName.value].isValid = isValid;
            input[_fieldName.value].pending = false;
        });
    }
    let debouncedUpdateInputValidity = debounce(updateInputValidity, form.debounceDelay.value);
    watch(
        () => form.debounceDelay.value,
        () => {
            debouncedUpdateInputValidity.flush();
            debouncedUpdateInputValidity = debounce(updateInputValidity, form.debounceDelay.value);
        }
    );

    let isFirst = true;
    const computedValidation = computed(() => {
        // We have to compute the validation here, otherwise the reactivity will not work
        const isValid = computeValidation(value.value, required.value, customValidation.value, validation.value);
        if (isFirst) {
            isFirst = false;
            return null;
        }
        return isValid;
    });
    watch(computedValidation, isValid => {
        if (form.validationType.value === 'change') {
            updateFormInput(uid, input => {
                if (!input[_fieldName.value]) {
                    console.warn('Field name not available, is the AI generating ?');
                    return;
                }
                input[_fieldName.value].pending = true;
            });
            debouncedUpdateInputValidity(isValid);
        }
    });
    watch(
        () => form.validationType.value,
        validationType => {
            if (validationType === 'change') {
                updateInputValidity(
                    computeValidation(value.value, required?.value, customValidation?.value, validation?.value)
                );
            } else if (validationType === 'submit') {
                updateInputValidity(true);
            }
        }
    );
    onBeforeUnmount(() => {
        debouncedUpdateInputValidity.cancel();
    });
    function forceValidateField() {
        debouncedUpdateInputValidity.cancel();
        const isValid = computeValidation(value.value, required?.value, customValidation?.value, validation?.value);
        updateInputValidity(isValid);
        return isValid;
    }

    watch(
        value,
        (nv, ov) => {
            if (!isEqual(nv, ov)) {
                updateFormInput(uid, input => {
                    input[_fieldName.value].value = nv;
                });
            }
        },
        {
            deep: true,
        }
    );
    watch(_fieldName, (newName, oldName) => {
        updateFormInput(uid, input => {
            const oldValue = input[oldName];
            delete input[oldName];
            input[newName] = oldValue;
        });
    });


    onBeforeUnmount(() => {
        unregisterFormInput(uid);
    });

    return {
        selectForm,
    };
}

export function selectForm(uid, componentId) {
}
