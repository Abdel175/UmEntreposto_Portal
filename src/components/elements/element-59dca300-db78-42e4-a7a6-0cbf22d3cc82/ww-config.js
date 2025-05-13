const INFO = {
    submit: 'sub',
    reset: 'rst',
    button: 'btn',
};

export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Button',
            fr: 'Bouton',
        },
        icon: 'cursor-click',
        infoTags: content => {
            if (content.buttonType && INFO[content.buttonType]) {
                return {
                    color: 'var(--ww-color-blue-500)',
                    backgroundColor: 'var(--ww-color-blue-100)',
                    text: INFO[content.buttonType].toUpperCase(),
                    action: () => {
                        wwLib.wwSearchBar.executeAction({
                            actions: wwLib.wwSearchBar.getEditSidebarActions('settings', 'custom-0'),
                        });
                    },
                };
            } else {
                return [];
            }
        },
        workflowHint: content => {
            if (content.buttonType !== 'submit') {
                return false;
            }

            return {
                type: 'warning',
                header: {
                    en: 'You probably shouldn’t trigger workflows on submit buttons.',
                    fr: 'Vous ne devriez pas déclencher un workflow depuis un bouton submit',
                },
                text: {
                    en: 'For your users to benefit from automatic form field validation, you should trigger submit workflows on the form container. Unless you are 100% sure of what you’re doing and want to bypass this behavior.',
                    fr: 'Pour que vos utilisateurs bénéficient de la validation automatique des champs de formulaire, vous devez déclencher des workflows de soumission sur le conteneur de formulaire. À moins que vous ne soyez sûr à 100 % de ce que vous faites et que vous souhaitiez contourner ce comportement.',
                },
                button: {
                    text: { en: 'Select form container', fr: 'Selectionnez le form container' },
                    action: 'selectParentFormContainer',
                },
            };
        },
    },
    states: ['focus', 'disabled'],
    triggerEvents: [
        { name: 'focus', label: { en: 'On focus' }, event: null },
        { name: 'blur', label: { en: 'On blur' }, event: null },
    ],
    properties: {
        backgroundColor: {
            label: {
                en: 'Text Background',
                fr: 'Background du Texte',
            },
            type: 'Color',
            options: {
                nullable: true,
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
        buttonType: {
            label: {
                en: 'Type',
                fr: 'Type',
            },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: null, label: 'none' },
                    { value: 'button', label: 'Button' },
                    { value: 'submit', label: 'Submit Button' },
                ],
            },
            defaultValue: 'button',
            bindable: true,
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the button type: `"button" | "submit"`',
            },
        },
        disabled: {
            label: { en: 'Disabled' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
        },
        hasLeftIcon: {
            label: { en: 'Left icon', fr: 'Icône gauche' },
            section: 'settings',
            type: 'OnOff',
        },
        leftIcon: {
            hidden: true,
        },
        hasRightIcon: {
            label: { en: 'Right icon', fr: 'Icône droite' },
            type: 'OnOff',
            section: 'settings',
        },
        rightIcon: {
            hidden: true,
        },
    },
};
