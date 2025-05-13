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
        fontSize: {
            label: { en: 'Size', fr: 'Taille' },
            type: 'Number',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'Icon',
            bindable: true,
            states: true,
            defaultValue: 'wwi wwi-icon',
        },
    },
};
