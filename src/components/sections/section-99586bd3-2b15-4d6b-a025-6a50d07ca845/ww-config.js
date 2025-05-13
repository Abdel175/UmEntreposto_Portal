export default {
    options: {
        displayAllowedValues: ['flex', 'block', 'grid'],
    },
    inherit: [{ type: 'ww-layout' }, { type: 'ww-background-video' }],
    editor: {
        label: {
            en: 'Base',
        },
    },
    properties: {
        wwObjects: {
            hidden: true,
            defaultValue: [],
        },
    },
};
