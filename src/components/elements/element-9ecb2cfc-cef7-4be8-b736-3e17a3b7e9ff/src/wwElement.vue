<template>
    <form
        ref="formRef"
        :name="formName"
        :autocomplete="content.autocomplete"
        class="ww-form-container"
        :class="{
            editing: isEditing,
            selected: isSelected,
        }"
        :aria-busy="formState.isSubmitting"
        :aria-invalid="!formState.isValid"
        data-ww-flag="form-container"
        @submit.prevent="handleSubmit"
    >
        <wwLayout class="ww-form-container__content" path="formContent" ww-responsive="wwLayout" />
    </form>
</template>

<script>
import { ref, provide, computed, watch, onMounted } from 'vue';
import { useForm } from './shared/useForm';
import { useFormState } from './composables/useFormState';
import { useFormSubmission } from './composables/useFormSubmission';
import { useFormInputs } from './composables/useFormInputs';
import { isEqual } from 'lodash-es';

export default {
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
        const isEditing = computed(() => {
            // eslint-disable-next-line no-unreachable
            return false;
        });
        const isSelected = computed(() => {
            // eslint-disable-next-line no-unreachable
            return false;
        });

        const formRef = ref(null);
        const componentId = ref(null);
        const formName = computed(() => props.wwElementState.name);
        const validationType = computed(() => props.content.validation);
        const debounceDelay = computed(() => {
            if (!props.content.debounceDelay) return 0;
            const parsedDelay = wwLib.wwUtils.getLengthUnit(props.content.debounceDelay)[0] || 0;
            if (parsedDelay < 1) return 0;
            return parsedDelay;
        });

        const { formState, setFormState, updateInputValidity, removeInputValidity } = useFormState();
        const { formInputs, forceValidateAllFields, resetInputs } = useFormInputs({
            updateInputValidity,
            removeInputValidity,
        });

        const isValid = computed(() => formState.isValid.value);

        const formData = ref({});
        function updateFormData() {
            // Remove keys that don't exist in formInputs
            for (const key of Object.keys(formData.value)) {
                if (!(key in formInputs.value)) {
                    delete formData.value[key];
                }
            }

            // Update values for existing keys
            for (const [key, { value }] of Object.entries(formInputs.value)) {
                if (!isEqual(formData.value[key], value)) {
                    formData.value[key] = value;
                }
            }
        }
        watch(
            formInputs,
            v => {
                updateFormData(v);
            },
            {
                deep: true,
            }
        );

        const { handleSubmit } = useFormSubmission({
            forceValidateAllFields,
            formState: { value: formState, setFormState },
            emit,
            isValid,
            updateFormData,
            validationType,
        });

        function _setFormState(isSubmitting, isSubmitted) {
            setFormState({ isSubmitting: !!isSubmitting, isSubmitted: !!isSubmitted });
        }
        
        function resetForm(initialValues = {}) {
            resetInputs(initialValues);
            setFormState({ isSubmitting: false, isSubmitted: false });
            updateFormData();
        }

        const { setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.wwElementState.uid,
            name: 'form',
            type: 'object',
            defaultValue: {},
        });

        const data = computed(() => ({
            formData: formData.value,
            fields: formInputs.value,
            isSubmitting: formState.isSubmitting.value,
            isSubmitted: formState.isSubmitted.value,
            isValid: isValid.value,
        }));

        const methods = {
            setFormState: {
                method: _setFormState,
                editor: {
                    label: 'Set form state',
                    elementName: 'Form',
                    description: 'Set isSubmitting and isSubmitted',
                    args: [
                        {
                            name: 'isSubmitting',
                            type: 'boolean',
                        },
                        {
                            name: 'isSubmitted',
                            type: 'boolean',
                        },
                    ],
                },
            },
            submitForm: {
                method: handleSubmit,
                editor: {
                    label: 'Submit form',
                    elementName: 'Form',
                    description: 'Submit the form',
                    args: [],
                },
            },
            resetForm: {
                method: resetForm,
                editor: {
                    label: 'Reset form',
                    elementName: 'Form',
                    description: 'Reset the form fields to their initial values',
                    args: [
                        {
                            name: 'initialValues',
                            type: 'object',
                            description: 'Optional object with initial values for specific fields',
                            required: false,
                        },
                    ],
                },
            },
        };

        watch(data, newData => setValue(newData), { deep: true, immediate: true });

        provide('_wwForm:info', {
            uid: props.wwElementState.uid,
            componentId: componentId.value,
            name: formName,
            validationType,
            debounceDelay,
        });
        provide('_wwForm:useForm', useForm);

        const markdown = `### Form local informations

#### inputs
Object containing all form inputs. Each input contains:
- \`value\`: Input's current value
- \`isValid\`: Boolean indicating if input passes validation (optional)`;

        wwLib.wwElement.useRegisterElementLocalContext('form', data, methods, markdown);

        /* Useful for the form to be identified by the childrens and make them have the right behaviors (tooltips, show/hide props, etc...) */
        onMounted(() => {
            componentId.value = formRef?.value?.getAttribute('data-ww-component-id');
        });

        return {
            formRef,
            isEditing,
            isSelected,
            formName,
            handleSubmit,
            formState,
            _setFormState,
            resetForm,
        };
    },
};
</script>

<style lang="scss" scoped>
.ww-form-container {
    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>
