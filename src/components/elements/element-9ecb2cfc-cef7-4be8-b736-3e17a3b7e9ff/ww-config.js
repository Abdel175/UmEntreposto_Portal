export default {
    options: {
        displayAllowedValues: ['flex', 'block', 'inline-block', 'inline-flex'],
    },
    inherit: {
        type: 'ww-layout',
    },
    editor: {
        label: {
            fr: 'Conteneur de formulaire',
            en: 'Form Container',
        },
        icon: 'pencil',
        bubble: {
            icon: 'pencil',
        },
        customStylePropertiesOrder: ['validation', 'debounceDelay'],
        hint: () => {
            const currentEl = wwLib.wwUtils.getSelectedComponent();
            if (!currentEl) {
                return false;
            }
            const hasSubmitBtn = currentEl.querySelector('[data-ww-flag="btn-submit"]');
            if (hasSubmitBtn) {
                return false;
            }

            return {
                section: 'workflows',
                type: 'warning',
                header: {
                    en: 'Submit button missing!',
                    fr: 'Bouton de soumission manquant !',
                },
                text: {
                    en: 'A form container require a button with type submit to use the "on submit" trigger.',
                    fr: "Un conteneur de formulaire à besoin d'un bouton avec le type submit pour délencher l'évènement de soumission.",
                },
            };
        },
    },
    actions: [
        {
            label: 'Set form state',
            action: '_setFormState',
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
        {
            label: 'Submit form',
            action: 'submitForm',
        },
        {
            label: 'Reset form',
            action: 'resetForm',
            args: [
                {
                    name: 'initialValues',
                    type: 'object',
                    required: false,
                },
            ],
        },
    ],
    triggerEvents: [
        {
            name: 'submit',
            label: {
                en: 'On submit',
            },
            default: true,
        },
        {
            name: 'submit-validation-error',
            label: {
                en: 'On submit validation error',
            },
            default: true,
        },
    ],
    properties: {
        validation: {
            section: 'settings',
            label: 'Validation',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'submit', label: 'On form submit' },
                    { value: 'change', label: 'On input change' },
                ],
            },
            bindable: true,
            defaultValue: 'submit',
            bindingValidation: {
                type: 'string',
                tooltip: 'Which event to trigger the form validation on. Either `submit` or `change`',
                enum: ['change', 'submit'],
            },
        },
        debounceDelay: {
            section: 'settings',
            type: 'Length',
            label: {
                en: 'Validation delay',
            },
            options: {
                unitChoices: [{ value: 'ms', label: 'ms', min: 1, max: 5000 }],
            },
            defaultValue: '500ms',
            hidden: content => content.validation !== 'change',
            bindable: true,
            bindingValidation: {
                type: 'string',
                tooltip:
                    'The delay before triggering the form validation in milliseconds. Must be between `1` and `5000`',
            },
        },
        formContent: {
            hidden: true,
            defaultValue: [],
        },
        autocomplete: {
            section: 'settings',
            label: { en: 'Autocomplete', fr: 'Autocomplétion' },
            type: 'OnOff',
            defaultValue: true,
        },
    },
};
