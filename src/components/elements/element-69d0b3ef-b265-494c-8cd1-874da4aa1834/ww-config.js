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
        workflowHint: () => {
            const currentEl = wwLib.wwUtils.getSelectedComponent();
            if (!currentEl) {
                return false;
            }
            const hasSubmitBtn = currentEl.querySelector('[data-ww-flag="btn-submit"]');
            if (hasSubmitBtn) {
                return false;
            }

            return {
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
    triggerEvents: [{ name: 'submit', label: { en: 'On submit' }, default: true }],
    properties: {
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
