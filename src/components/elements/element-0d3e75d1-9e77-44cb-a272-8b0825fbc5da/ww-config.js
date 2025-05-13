export default {
    editor: {
        label: {
            en: 'Input select',
            fr: 'Champs sélection',
        },
        icon: 'select',
        customStylePropertiesOrder: [
            ['dropdownBorderWidth', 'dropdownBorderColor', 'dropdownBorderRadius', 'dropdownMaxHeight'],
            ['searchFontFamily', 'searchFontSize', 'searchFontColor'],
        ],
        customSettingsPropertiesOrder: [
            'openInEditor',
            'layoutType',
            'required',
            'readonly',
            'disabled',
            'initialValue',
            ['placeholder', 'noResultsText', 'noOptionsText'],
            ['options'],
            ['hintFields', 'labelField', 'valueField'],
            [
                'advanced',
                'searchable',
                'closeOnSelect',
                'canDeselect',
                'infiniteScroll',
                'loadingRingColor',
                'limitedOptions',
                'limit',
            ],
            ['clearIcon', 'caretIcon'],
        ],
    },
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
    },
    triggerEvents: [
        { name: 'change', label: { en: 'On change' }, event: { value: '' }, default: true },
        { name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
    ],
    inherit: { type: 'ww-text', exclude: ['text'] },
    properties: {
        layoutType: {
            label: {
                en: 'Layout type',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'text', label: { en: 'Text' } },
                    { value: 'free', label: { en: 'Free layout' } },
                ],
            },
            defaultValue: 'text',
            section: 'settings',
        },
        readonly: {
            label: { en: 'Read only', fr: 'Lecture seule' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.readonly !== undefined),
        },
        openInEditor: {
            type: 'OnOff',
            label: {
                en: 'Force open in editor',
            },
            editorOnly: true,
            defaultValue: false,
            section: 'settings',
            hidden: content => content.readonly || content.disabled,
        },
        required: {
            type: 'OnOff',
            label: {
                en: 'Required',
                fr: 'Required',
            },
            defaultValue: false,
            bindable: true,
            section: 'settings',
        },
        placeholder: {
            label: {
                en: 'Placeholder',
                fr: 'Texte par défaut',
            },
            type: 'Text',
            defaultValue: { en: 'Placeholder' },
            section: 'settings',
            bindable: true,
            multiLang: true,
        },
        noOptionsText: {
            label: {
                en: 'No options text',
                fr: 'No options text',
            },
            type: 'Text',
            section: 'settings',
            multiLang: true,
            bindable: true,
        },
        noResultsText: {
            label: {
                en: 'No results text',
                fr: 'No results text',
            },
            type: 'Text',
            section: 'settings',
            multiLang: true,
            bindable: true,
        },
        disabled: {
            label: {
                en: 'Disabled',
                fr: 'Désactivé',
            },
            type: 'OnOff',
            defaultValue: false,
            section: 'settings',
            bindable: true,
        },
        advanced: {
            type: 'OnOff',
            label: {
                en: 'Display advanced options',
            },
            defaultValue: false,
            bindable: true,
            section: 'settings',
        },
        canDeselect: {
            hidden: content => !content.advanced,
            label: {
                en: 'Can unselect',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            section: 'settings',
        },
        searchable: {
            hidden: content => !content.advanced,
            label: {
                en: 'Searchable',
                fr: 'Recherche',
            },
            bindable: true,
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
            section: 'settings',
        },
        searchFontFamily: {
            label: {
                en: 'Search font family',
            },
            type: 'FontFamily',
            responsive: true,
            states: true,
            classes: true,
            hidden: content => !content.searchable,
        },
        searchFontSize: {
            label: {
                en: 'Search font size',
            },
            type: 'Length',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 1, max: 100 },
                    { value: 'em', label: 'em', min: 1, max: 10, digits: 2 },
                    { value: 'rem', label: 'rem', min: 1, max: 10, digits: 2 },
                ],
            },
            responsive: true,
            states: true,
            classes: true,
            hidden: content => !content.searchable,
        },
        searchFontColor: {
            label: {
                en: 'Search font color',
            },
            type: 'Color',
            options: {
                nullable: true,
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            hidden: content => !content.searchable,
        },
        closeOnSelect: {
            hidden: content => !content.advanced,
            label: {
                en: 'Close on select',
                fr: 'Ferme à la sélection',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
            section: 'settings',
        },
        infiniteScroll: {
            hidden: content => !content.advanced,
            label: {
                en: 'Infinite scroll',
                fr: 'Scroll infini',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            section: 'settings',
        },
        loadingRingColor: {
            hidden: content => !content.advanced || !content.infiniteScroll,
            label: {
                en: 'Loading ring color',
            },
            type: 'Color',
            defaultValue: '#099af2',
            bindable: true,
            section: 'settings',
            classes: true,
            states: true,
            responsive: true,
        },
        limitedOptions: {
            hidden: content => !content.advanced,
            label: {
                en: 'Limited options',
                fr: 'Options limitées',
            },
            type: 'OnOff',
            defaultValue: false,
            section: 'settings',
        },
        limit: {
            hidden: content => !content.advanced || !content.limitedOptions,
            type: 'Number',
            label: {
                en: 'Limit',
                fr: 'Limite',
            },
            options: {
                min: 10,
                max: 50,
                step: 1,
            },
            defaultValue: 20,
            bindable: true,
            section: 'settings',
        },
        clearIcon: {
            label: {
                en: 'Clear icon',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            section: 'settings',
        },
        caretIcon: {
            label: {
                en: 'Caret icon',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
            section: 'settings',
        },
        initialValue: {
            label: {
                en: 'Initial value',
                fr: 'Valeur initiale',
            },
            type: 'Text',
            bindable: true,
            section: 'settings',
        },
        options: {
            label: { en: 'Options', fr: 'Options' },
            type: 'Array',
            section: 'settings',
            options: {
                item: {
                    type: 'Object',
                    defaultValue: { label: { en: 'New option' }, value: '' },
                    options: {
                        item: {
                            label: {
                                label: { en: 'Label' },
                                type: 'Text',
                                options: { placeholder: 'Label' },
                                multiLang: true,
                            },
                            value: {
                                label: { en: 'Value' },
                                type: 'Text',
                                options: { placeholder: 'Value' },
                            },
                            image: {
                                hidden: content => content.layoutType !== 'imageText',
                                label: { en: 'Image' },
                                type: 'Text',
                                options: { placeholder: 'Image link' },
                            },
                        },
                    },
                },
            },
            defaultValue: [
                { value: 'option', label: { en: 'option - 1' } },
                { value: 'option2', label: { en: 'option - 2' } },
            ],
            bindable: true,
        },
        hintFields: {
            hidden: (content, sidepanelContent, boundProps) => !boundProps.options || content.options,
            label: {
                en: 'Options fields',
                fr: 'Champs des options',
            },
            type: 'Info',
            options: {
                text: { en: 'Please provide at least one option to configure fields' },
            },
            editorOnly: true,
            section: 'settings',
        },
        labelField: {
            hidden: (content, sidepanelContent, boundProps) => !boundProps.options || !content.options,
            label: {
                en: 'Label field',
                fr: 'Label field',
            },
            type: 'ObjectPropertyPath',
            options: content => {
                if (!content.options.length || typeof content.options[0] !== 'object') {
                    return null;
                }

                return { object: content.options[0] };
            },
            defaultValue: '',
            section: 'settings',
            multiLang: true,
        },
        valueField: {
            hidden: (content, sidepanelContent, boundProps) => !boundProps.options || !content.options,
            label: {
                en: 'Value field',
                fr: 'Value field',
            },
            type: 'ObjectPropertyPath',
            options: content => {
                if (!content.options.length || typeof content.options[0] !== 'object') {
                    return null;
                }

                return { object: content.options[0] };
            },
            defaultValue: '',
            section: 'settings',
        },
        placeholderElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-text',
                state: {
                    name: 'Placeholder text',
                    style: {
                        default: {
                            color: '#D1D5DB',
                        },
                    },
                },
            },
            navigator: {
                group: 'Select',
            },
        },
        textElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-text',
                state: {
                    name: 'Option text',
                    style: {
                        default: {
                            color: '#BD0F0F',
                            width: '100%',
                        },
                    },
                },
            },
            navigator: {
                group: 'Option',
                hidden: content => content.layoutType === 'free',
            },
        },
        flexboxElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-flexbox',
                state: {
                    name: 'Option container',
                    style: {
                        default: {
                            width: '100%',
                        },
                    },
                },
            },
            navigator: {
                group: 'Option',
                hidden: content => content.layoutType !== 'free',
            },
        },
        caretIconElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-icon',
                state: {
                    name: 'Caret icon',
                    style: {
                        default: {
                            padding: '0px 12px',
                        },
                    },
                },
                content: { default: { icon: 'fas fa-caret-down', color: '#9CA3AF', fontSize: '16' } },
            },
            navigator: {
                group: 'Select',
            },
        },
        clearIconElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-icon',
                state: {
                    name: 'Clear icon',
                    style: {
                        default: {
                            padding: '12px',
                        },
                    },
                },
                content: { default: { icon: 'wwi wwi-cross', color: '#9CA3AF', fontSize: '14' } },
            },
            navigator: {
                group: 'Select',
            },
        },
        dropdownBorderWidth: {
            type: 'Length',
            label: {
                en: 'Dropdown border width',
            },
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            },
            defaultValue: undefined,
            states: true,
            classes: true,
            bindable: true,
            responsive: true,
        },
        dropdownBorderColor: {
            label: {
                en: 'Dropdown border color',
            },
            type: 'Color',
            defaultValue: undefined,
            states: true,
            classes: true,
            bindable: true,
            responsive: true,
        },
        dropdownBorderRadius: {
            type: 'Length',
            label: {
                en: 'Dropdown border radius',
            },
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            },
            defaultValue: undefined,
            states: true,
            classes: true,
            bindable: true,
            responsive: true,
        },
        dropdownMaxHeight: {
            label: {
                en: 'Dropdown max height',
            },
            type: 'Length',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 500 }],
            },
            responsive: true,
            states: true,
            defaultValue: undefined,
            states: true,
            classes: true,
            bindable: true,
            responsive: true,
        },
    },
};
