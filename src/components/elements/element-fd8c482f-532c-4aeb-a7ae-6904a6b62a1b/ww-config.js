const DEFAULT_VALUE = [{ name: 'filename.png', size: 100 }];

export default {
    editor: {
        label: 'Input File Drop',
        icon: 'upload',
        bubble: { icon: 'upload' },
    },
    states: ['drop'],
    triggerEvents: [
        { name: 'change', label: 'On change', event: { value: DEFAULT_VALUE }, default: true },
        { name: 'initValueChange', label: 'On init value change', event: { value: DEFAULT_VALUE } },
        { name: 'invalidFile', label: 'On invalid file drop', event: { value: DEFAULT_VALUE } },
    ],
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
    },
    properties: {
        layout: {
            hidden: true,
            defaultValue: [],
        },
        multiple: {
            label: 'Multiple',
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
        },
        required: {
            label: 'Required',
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
        },
        readonly: {
            label: { en: 'Read only', fr: 'Lecture seule' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.readonly !== undefined),
        },
        accept: {
            label: 'Extensions',
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Any', value: 'any' },
                    { label: 'Image', value: 'image' },
                    { label: 'Video', value: 'video' },
                    { label: 'Audio', value: 'audio' },
                    { label: 'PDF', value: 'pdf' },
                    { label: 'CSV', value: 'csv' },
                    { label: 'Excel file', value: 'xls' },
                    { label: 'Word file', value: 'doc' },
                    { label: 'JSON', value: 'json' },
                    { label: 'Custom', value: 'custom' },
                ],
            },
            section: 'settings',
            defaultValue: 'any',
        },
        acceptCustom: {
            type: 'Text',
            options: { placeholder: '.html, .xml, .pt' },
            section: 'settings',
            hidden: content => content.accept !== 'custom',
            defaultValue: '',
        },
    },
};
