export default {
    editor: {
        label: {
            en: 'Accordion',
            fr: 'Accordion',
        },
        icon: 'view-grid',
    },
    properties: {
        value: {
            label: {
                en: 'Init value',
            },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
        },
        toggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        activeToggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        contentLayout: {
            hidden: true,
            defaultValue: [],
        },
        toggleEdit: {
            type: 'Button',
            section: 'settings',
            editorOnly: true,
            options: {
                text: { en: 'Toggle edition', fr: 'Toggle edition' },
                color: 'blue',
                action: 'toggleEdit',
            },
        },
    },
};
