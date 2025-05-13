function showObjectPropertyPath(basePropertyKey, { content, boundProps }) {
    return (
        boundProps[basePropertyKey] &&
        content[basePropertyKey] &&
        typeof wwLib.wwCollection.getCollectionData(content[basePropertyKey])[0] === 'object'
    );
}
function getObjectPropertyPathOptions(basePropertyKey, { content }) {
    const data = wwLib.wwCollection.getCollectionData(content[basePropertyKey]);
    if (!data.length || typeof data[0] !== 'object') {
        return null;
    }

    return { object: data[0] };
}

import { textOptions } from './src/settings';

export default {
    editor: {
        label: {
            en: 'Rich text',
        },
        customStylePropertiesOrder: [
            'customMenu',
            'menuColor',
            [
                'selectedTag',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'p',
                'mention',
                'a',
                'blockquote',
                'code',
                'img',
                'checkbox',
                'table',
            ],
        ],
        customSettingsPropertiesOrder: [
            'formInfobox',
            ['fieldName', 'customValidation', 'validation'],
            'readonly',
            'editable',
            'hideMenu',
            'wrapMenu',
            'initialValue',
            'output',
            'placeholder',
            'debounce',
            'debounceDelay',
            'autofocus',
            'enableMention',
            [
                'mentionChar',
                'mentionAllowSpaces',
                'mentionListLength',
                'mentionList',
                'mentionIdPath',
                'mentionLabelPath',
            ],
            [
                'parameterTitle',
                'parameterTextType',
                'parameterBold',
                'parameterItalic',
                'parameterUnderline',
                'parameterStrike',
                'parameterAlignLeft',
                'parameterAlignCenter',
                'parameterAlignRight',
                'parameterAlignJustify',
                'parameterTextColor',
                'parameterBulletList',
                'parameterOrderedList',
                'parameterTaskList',
                'parameterTable',
                'parameterLink',
                'parameterImage',
                'parameterCodeBlock',
                'parameterQuote',
                'parameterUndo',
                'parameterRedo',
            ],
        ],
    },
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
    },
    triggerEvents: [
        { name: 'change', label: { en: 'On change' }, event: { value: '' } },
        { name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
        { name: 'mention:click', label: { en: 'On mention click' }, event: { mention: { id: '', label: '' } } },
        { name: 'focus', label: { en: 'On focus' }, event: { value: '' } },
        { name: 'blur', label: { en: 'On blur' }, event: { value: '' } },
    ],
    actions: [
        { label: 'Focus Rich text', action: 'focusEditor' },
        {
            label: 'Set Link',
            action: 'setLink',
            args: [
                {
                    name: 'URL',
                    type: 'Text',
                },
            ],
        },
        {
            label: 'Set Image',
            action: 'setImage',
            args: [
                {
                    name: 'Source',
                    type: 'Text',
                },
                {
                    name: 'Alt',
                    type: 'Text',
                },
                {
                    name: 'Title',
                    type: 'Text',
                },
            ],
        },
        {
            label: 'Set Tag',
            action: 'setTag',
            args: [
                {
                    name: 'Tag',
                    type: 'select',
                    options: [
                        { value: 0, label: { en: 'p' } },
                        { value: 1, label: { en: 'h1' } },
                        { value: 2, label: { en: 'h2' } },
                        { value: 3, label: { en: 'h3' } },
                        { value: 4, label: { en: 'h4' } },
                        { value: 5, label: { en: 'h5' } },
                        { value: 6, label: { en: 'h6' } },
                    ],
                },
            ],
        },
        { label: 'Toggle Bold', action: 'toggleBold' },
        { label: 'Toggle Italic', action: 'toggleItalic' },
        { label: 'Toggle Underline', action: 'toggleUnderline' },
        { label: 'Toggle Strike', action: 'toggleStrike' },
        {
            label: 'Set Text Align',
            action: 'setTextAlign',
            args: [
                {
                    name: 'Alignment',
                    type: 'select',
                    options: [
                        { value: 'left', label: { en: 'left' } },
                        { value: 'center', label: { en: 'center' } },
                        { value: 'right', label: { en: 'right' } },
                        { value: 'justify', label: { en: 'justify' } },
                    ],
                },
            ],
        },
        {
            label: 'Set Color',
            action: 'setColor',
            args: [
                {
                    name: 'Color',
                    type: 'color',
                },
            ],
        },
        { label: 'Toggle Bullet List', action: 'toggleBulletList' },
        { label: 'Toggle Ordered List', action: 'toggleOrderedList' },
        { label: 'Toggle Check List', action: 'toggleTaskList' },
        { label: 'Toggle Code Block', action: 'toggleCodeBlock' },
        { label: 'Toggle Blockquote', action: 'toggleBlockquote' },
        { label: 'Undo', action: 'undo' },
        { label: 'Redo', action: 'redo' },
        // Table
        {
            label: 'Insert Table',
            action: 'insertTable',
        },
        {
            label: 'Insert Row',
            action: 'insertRow',
            args: [
                {
                    name: 'Position',
                    type: 'select',
                    options: [
                        { value: 'before', label: { en: 'Before' } },
                        { value: 'after', label: { en: 'After' } },
                    ],
                },
            ],
        },
        {
            label: 'Insert Column',
            action: 'insertColumn',
            args: [
                {
                    name: 'Position',
                    type: 'select',
                    options: [
                        { value: 'before', label: { en: 'Before' } },
                        { value: 'after', label: { en: 'After' } },
                    ],
                },
            ],
        },
        {
            label: 'Delete Row',
            action: 'deleteRow',
        },
        {
            label: 'Delete Column',
            action: 'deleteColumn',
        },
        {
            label: 'Delete Table',
            action: 'deleteTable',
        },
    ],
    properties: {
        readonly: {
            section: 'settings',
            label: {
                en: 'Read only',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
        },
        customMenu: {
            label: {
                en: 'Custom menu',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
        },
        initialValue: {
            section: 'settings',
            label: {
                en: 'Init value',
            },
            type: 'Textarea',
            defaultValue: '',
            bindable: true,
        },
        output: {
            label: {
                en: 'Output',
                fr: 'Output',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'html', label: { en: 'html' } },
                    { value: 'markdown', label: { en: 'markdown' } },
                ],
            },
            section: 'settings',
            defaultValue: 'html',
        },
        debounce: {
            label: { en: 'Debounce' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
        },
        debounceDelay: {
            type: 'Length',
            label: {
                en: 'Delay',
            },
            options: {
                unitChoices: [{ value: 'ms', label: 'ms', min: 1, max: 5000 }],
            },
            section: 'settings',
            defaultValue: '500ms',
            responsive: true,
            hidden: content => !content.debounce,
        },
        placeholder: {
            section: 'settings',
            label: {
                en: 'Placeholder',
            },
            type: 'Textarea',
            defaultValue: 'Type here...',
            bindable: true,
        },
        enableMention: {
            section: 'settings',
            label: {
                en: 'Mentions',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        mentionList: {
            section: 'settings',
            label: {
                en: 'Mentions List',
            },
            hidden: content => !content.enableMention,
            type: 'Array',
            options: {
                item: {
                    type: 'Object',
                    defaultValue: { id: '', label: '' },
                    options: {
                        item: {
                            id: {
                                label: { en: 'Id' },
                                type: 'Text',
                            },
                            label: {
                                label: { en: 'Label' },
                                type: 'Text',
                            },
                        },
                    },
                },
            },
            defaultValue: [],
            bindable: true,
        },
        mentionIdPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('mentionList', { content, boundProps }),
            label: {
                en: 'Id property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('mentionList', { content }),
            defaultValue: null,
            section: 'settings',
        },
        mentionLabelPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('mentionList', { content, boundProps }),
            label: {
                en: 'Label property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('mentionList', { content }),
            defaultValue: null,
            section: 'settings',
        },
        mentionAllowSpaces: {
            section: 'settings',
            hidden: content => !content.enableMention,
            label: {
                en: 'Allow spaces',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        mentionChar: {
            section: 'settings',
            hidden: content => !content.enableMention,
            label: {
                en: 'Char trigger',
            },
            type: 'Text',
            defaultValue: '@',
        },
        mentionListLength: {
            section: 'settings',
            hidden: content => !content.enableMention,
            label: {
                en: 'Numbers of suggestion',
            },
            type: 'Number',
            options: {
                min: 1,
                max: 20,
                step: 1,
            },
            bindable: true,
            defaultValue: 5,
        },
        autofocus: {
            section: 'settings',
            label: {
                en: 'Autofocus',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        editable: {
            section: 'settings',
            label: {
                en: 'Editable',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        hideMenu: {
            section: 'settings',
            label: {
                en: 'Hide menu',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            hidden: content => content.customMenu,
        },
        wrapMenu: {
            section: 'settings',
            label: {
                en: 'Wrap menu',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            hidden: content => content.customMenu,
        },
        menuColor: {
            label: {
                en: 'Menu color',
            },
            type: 'Color',
            defaultValue: '#000000ad',
            states: true,
            classes: true,
            responsive: true,
            hidden: content => content.customMenu,
        },
        selectedTag: {
            label: {
                en: 'Tag to edit',
                fr: 'Tag à éditer',
            },
            type: 'TextSelect',
            editorOnly: true,
            options: {
                options: [
                    { value: 'h1', label: { en: 'h1' } },
                    { value: 'h2', label: { en: 'h2' } },
                    { value: 'h3', label: { en: 'h3' } },
                    { value: 'h4', label: { en: 'h4' } },
                    { value: 'h5', label: { en: 'h5' } },
                    { value: 'h6', label: { en: 'h6' } },
                    { value: 'p', label: { en: 'p' } },
                    { value: 'a', label: { en: 'a' } },
                    { value: 'img', label: { en: 'image' } },
                    { value: 'blockquote', label: { en: 'blockquote' } },
                    { value: 'code', label: { en: 'code' } },
                    { value: 'mention', label: { en: 'mention' } },
                    { value: 'checkbox', label: { en: 'checkbox' } },
                    { value: 'table', label: { en: 'table' } },
                ],
            },
            defaultValue: null,
        },
        h1: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h1';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '32px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        h2: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h2';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '24px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        h3: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h3';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '19px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        h4: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h4';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        h5: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h5';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        h6: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h6';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        p: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'p';
            },
            options: {
                item: textOptions,
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        mention: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'mention';
            },
            options: {
                item: {
                    fontSize: textOptions.fontSize,
                    fontFamily: textOptions.fontFamily,
                    fontWeight: textOptions.fontWeight,
                    color: textOptions.color,
                    borderSize: {
                        type: 'Length',
                        label: {
                            en: 'Border',
                            fr: 'Bordure',
                        },
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                        bindable: true,
                    },
                    borderRadius: {
                        type: 'Length',
                        label: {
                            en: 'Border radius',
                            fr: 'Border radius',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontFWeight: '',
                color: '#099AF2',
                borderSize: '1px',
                borderRadius: '6px',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        a: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'a';
            },
            options: {
                item: {
                    fontSize: textOptions.fontSize,
                    fontFamily: textOptions.fontFamily,
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Text color',
                            fr: 'Couleur du texte',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                    isUnderline: {
                        type: 'OnOff',
                        label: {
                            en: 'Underline',
                            fr: 'Soulingé',
                        },
                        bindable: true,
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                color: '',
                isUnderline: true,
            },
            states: true,
            classes: true,
            responsive: true,
        },
        blockquote: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'blockquote';
            },
            options: {
                item: {
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Text color',
                            fr: 'Couleur du texte',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                    borderColor: {
                        type: 'Color',
                        label: {
                            en: 'Blockquote color',
                            fr: 'Couleur de la bordure',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                    marginTop: {
                        type: 'Length',
                        label: {
                            en: 'Margin top',
                            fr: 'Margin top',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                    marginBottom: {
                        type: 'Length',
                        label: {
                            en: 'Margin bottom',
                            fr: 'Margin bottom',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                color: 'rgb(153, 153, 153)',
                borderColor: 'rgb(223, 226, 229)',
                marginTop: '6px',
                marginBottom: '6px',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        code: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'code';
            },
            options: {
                item: {
                    fontSize: textOptions.fontSize,
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Text color',
                            fr: 'Couleur du texte',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                    bgColor: {
                        type: 'Color',
                        label: {
                            en: 'Blockquote color',
                            fr: 'Couleur de la bordure',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                    borderRadius: {
                        type: 'Length',
                        label: {
                            en: 'Border radius',
                            fr: 'Border radius',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                    paddingX: {
                        type: 'Length',
                        label: {
                            en: 'Padding X',
                            fr: 'Padding X',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                    paddingY: {
                        type: 'Length',
                        label: {
                            en: 'Padding Y',
                            fr: 'Padding Y',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                            noRange: true,
                            useVar: true,
                        },
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                color: '#FFF',
                bgColor: '#0D0D0D',
                borderRadius: '8px',
                paddingX: '16px',
                paddingY: '12px',
                fontSize: '13px',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        img: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'img';
            },
            options: {
                item: {
                    maxWidth: {
                        type: 'Length',
                        label: {
                            en: 'Max width',
                            fr: 'Max width',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [
                                { value: 'auto', label: 'auto', default: true },
                                { value: 'px', label: 'px', min: 1, max: 300 },
                            ],
                            noRange: true,
                            useVar: true,
                        },
                    },
                    maxHeight: {
                        type: 'Length',
                        label: {
                            en: 'Max height',
                            fr: 'Max height',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [
                                { value: 'auto', label: 'auto', default: true },
                                { value: 'px', label: 'px', min: 1, max: 300 },
                            ],
                            noRange: true,
                            useVar: true,
                        },
                    },
                    inline: {
                        type: 'OnOff',
                        label: {
                            en: 'Inline',
                            fr: 'Inline',
                        },
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                maxWidth: 'auto',
                maxHeight: 'auto',
                inline: false,
            },
            states: true,
            classes: true,
            responsive: true,
        },
        checkbox: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'checkbox';
            },
            options: {
                item: {
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Accent color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                color: '#000',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        customMenuElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-flexbox',
                state: {
                    name: 'Custom menu container',
                    style: {
                        default: {
                            width: '100%',
                        },
                    },
                },
            },
            navigator: {
                hidden: content => !content.customMenu,
            },
        },
        table: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'table';
            },
            options: {
                item: {
                    borderColor: {
                        type: 'Color',
                        label: {
                            en: 'Border color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                        defaultValue: '#099af2',
                    },
                    borderWidth: {
                        type: 'Length',
                        label: {
                            en: 'Border width',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                        classes: true,
                        states: true,
                        defaultValue: '1px',
                    },
                    headerBgColor: {
                        type: 'Color',
                        label: {
                            en: 'Header background color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                    },
                    headerColor: {
                        type: 'Color',
                        label: {
                            en: 'Header text color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                    },
                    pairCellBgColor: {
                        type: 'Color',
                        label: {
                            en: 'Pair row background color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                    },
                    oddCellBgColor: {
                        type: 'Color',
                        label: {
                            en: 'Impair row background color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                    },
                    cellColor: {
                        type: 'Color',
                        label: {
                            en: 'Cell text color',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        classes: true,
                        states: true,
                    },
                    cellPaddingY: {
                        type: 'Length',
                        label: {
                            en: 'Cell padding Y',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                        classes: true,
                        states: true,
                    },
                    cellPaddingX: {
                        type: 'Length',
                        label: {
                            en: 'Cell padding X',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 10 }],
                            noRange: true,
                            useVar: true,
                        },
                        classes: true,
                        states: true,
                    },
                },
                singleLine: true,
            },
            defaultValue: {
                borderColor: '#C7C7C7',
                borderWidth: '1px',
                headerBgColor: '#f5f5f5',
                headerColor: '#000',
                pairCellBgColor: '#fff',
                oddCellBgColor: '#FDFDFD',
                cellColor: '#000',
                cellPaddingY: '6px',
                cellPaddingX: '8px',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        parameterTitle: {
            section: 'settings',
            hidden: content => content.customMenu,
            type: 'Title',
            label: {
                en: 'Parameters',
            },
            editorOnly: true,
        },
        parameterTextType: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Text type',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterBold: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Bold',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterItalic: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Italic',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterUnderline: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Underline',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterStrike: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Strike',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterAlignLeft: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Align left',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        default: true,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterAlignCenter: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Align center',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        default: true,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterAlignRight: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Align right',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        default: true,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterAlignJustify: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Align justify',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        default: true,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterTextColor: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Text color',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterBulletList: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Bullet list',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterOrderedList: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Ordered list',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterTaskList: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Check list',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        default: true,
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterTable: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Table',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                        default: true,
                    },
                ],
            },
            defaultValue: true,
        },
        parameterLink: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Link',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterImage: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Image',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        default: true,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: false,
        },
        parameterCodeBlock: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Code block',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterQuote: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Quote',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterUndo: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Undo',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },
        parameterRedo: {
            section: 'settings',
            hidden: content => content.customMenu,
            label: {
                en: 'Redo',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: true,
                        default: true,
                        label: 'Show',
                    },
                    {
                        value: false,
                        label: 'Hide',
                    },
                ],
            },
            defaultValue: true,
        },

        fieldName: {
            label: 'Field name',
            section: 'settings',
            type: 'Text',
            defaultValue: '',
            bindable: true,
            hidden: (_, sidePanelContent) => !sidePanelContent.form?.uid,
        },
        customValidation: {
            label: 'Custom validation',
            section: 'settings',
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            hidden: (_, sidePanelContent) => !sidePanelContent.form?.uid,
        },
        validation: {
            label: 'Validation',
            section: 'settings',
            type: 'Formula',
            defaultValue: '',
            bindable: true,
            hidden: (content, sidePanelContent) => !sidePanelContent.form?.uid || !content.customValidation,
        },
    },
};
