export default {
    editor: {
        label: {
            en: 'Icon',
            fr: 'Icône',
        },
        icon: 'star',
    },
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    properties: {
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'SystemIcon',
            bindable: true,
            states: true,
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            states: true,
            classes: true,
            responsive: true,
            options: {
                nullable: true,
            },
            hidden: (_content, _sidePanelContent, _boundProps, wwProps) => !!(wwProps && wwProps.color),
        },
    },
};
