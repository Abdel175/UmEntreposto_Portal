export default {
    inherit: ['ww-text'],
    editor: {
        label: {
            en: 'Text',
            fr: 'Texte',
        },
        icon: 'text',
        infoTag: content => ({
            color: 'var(--ww-color-blue-500)',
            backgroundColor: 'var(--ww-color-blue-100)',
            text: content.tag === 'button' ? 'BTN' : content.tag && content.tag.toUpperCase(),
            action: () => {
                wwLib.wwSearchBar.executeAction({
                    actions: wwLib.wwSearchBar.getEditSidebarActions('settings', 'custom-0'),
                });
            },
        }),
    },
    options: {
        linkable: true,
    },
    properties: {
        tag: {
            label: {
                en: 'Html tag',
                fr: 'Tag html',
            },
            section: 'settings',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'p', label: 'P' },
                    { value: 'h1', label: 'H1' },
                    { value: 'h2', label: 'H2' },
                    { value: 'h3', label: 'H3' },
                    { value: 'h4', label: 'H4' },
                    { value: 'button', label: 'Button' },
                    { value: 'div', label: 'Div' },
                ],
            },
            defaultValue: 'p',
        },
    },
};
