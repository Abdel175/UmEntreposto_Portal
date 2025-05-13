export const TEXT_CONFIGURATION = {
    properties: {
        '_ww-text_text': {
            label: 'Text',
            type: 'Info',
            category: 'text',
            options: { text: 'Click text to edit' },
            bindable: true,
            multiLang: true,
            defaultValue: 'New text',
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.text),
        },
        '_ww-text_sanitize': {
            label: 'Sanitize',
            type: 'OnOff',
            bindable: true,
            category: 'text',
            bindingValidation: {
                type: 'boolean',
                markdown: 'sanitize',
            },
        },
        '_ww-text_font': {
            label: 'Typography',
            type: 'Typography',
            category: 'text',
            options: (content, sidepanelContent, boundProperties) => ({
                initialValue: {
                    fontSize: content['_ww-text_fontSize'],
                    fontFamily: content['_ww-text_fontFamily'],
                    fontWeight: content['_ww-text_fontWeight'],
                    fontStyle: content['_ww-text_fontStyle'],
                    lineHeight: content['_ww-text_lineHeight'],
                },
                creationDisabled:
                    boundProperties['_ww-text_fontSize'] ||
                    boundProperties['_ww-text_fontFamily'] ||
                    boundProperties['_ww-text_fontWeight'] ||
                    boundProperties['_ww-text_fontStyle'] ||
                    boundProperties['_ww-text_lineHeight'],
                creationDisabledMessage: 'Cannot create typography from bound properties',
            }),
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
        '_ww-text_fontSize': {
            label: 'Size',
            type: 'Length',
            category: 'text',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 1, max: 100, default: true },
                    { value: 'em', label: 'em', min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: 'rem', label: 'rem', min: 0, max: 10, digits: 3, step: 0.1 },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content['_ww-text_font'] || boundProps['_ww-text_font'],
            bindingValidation: { markdown: 'font-size', type: 'string', cssSupports: 'font-size' },
        },
        '_ww-text_fontFamily': {
            label: 'Font family',
            type: 'FontFamily',
            category: 'text',
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content['_ww-text_font'] || boundProps['_ww-text_font'],
            bindingValidation: { markdown: 'font-family', type: 'string', cssSupports: 'font-family' },
        },
        '_ww-text_fontWeight': {
            label: 'Font weight',
            type: 'TextSelect',
            category: 'text',
            options: {
                options: [
                    { value: null, label: 'Default', default: true },
                    { value: 100, label: '100 - Thin' },
                    { value: 200, label: '200 - Extra Light' },
                    { value: 300, label: '300 - Light' },
                    { value: 400, label: '400 - Normal' },
                    { value: 500, label: '500 - Medium' },
                    { value: 600, label: '600 - Semi Bold' },
                    { value: 700, label: '700 - Bold' },
                    { value: 800, label: '800 - Extra Bold' },
                    { value: 900, label: '900 - Black' },
                ],
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content['_ww-text_font'] || boundProps['_ww-text_font'],
            bindingValidation: { markdown: 'font-weight', type: 'string', cssSupports: 'font-weight' },
        },
        '_ww-text_fontStyle': {
            label: 'Font Style',
            type: 'TextRadioGroup',
            category: 'text',
            options: {
                choices: [
                    { value: null, title: 'Default', icon: 'typo-default', default: true },
                    { value: 'italic', title: 'Italic', icon: 'typo-italic' },
                ],
            },
            responsive: true,
            states: true,
            bindable: true,
            classes: true,
            hidden: (content, _, boundProps) => content['_ww-text_font'] || boundProps['_ww-text_font'],
            bindingValidation: { markdown: 'font-style', type: 'string', cssSupports: 'font-style' },
        },
        '_ww-text_lineHeight': {
            label: 'Line height',
            type: 'Length',
            category: 'text',
            options: {
                unitChoices: [
                    { value: 'normal', label: 'auto', default: true },
                    { value: 'px', label: 'px', min: 0, max: 100 },
                    { value: '%', label: '%', min: 0, max: 100 },
                    { value: 'em', label: 'em', min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: 'rem', label: 'rem', min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: 'unset', label: 'none' },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content['_ww-text_font'] || boundProps['_ww-text_font'],
            bindingValidation: { markdown: 'line-height', type: 'string', cssSupports: 'line-height' },
        },
        '_ww-text_textAlign': {
            label: 'Alignment',
            type: 'TextRadioGroup',
            category: 'text',
            options: {
                choices: [
                    { value: 'left', default: true, title: 'Left', icon: 'menu-alt-2' },
                    { value: 'center', title: 'Center', icon: 'text-middle' },
                    { value: 'right', title: 'Right', icon: 'menu-alt-3' },
                    { value: 'justify', title: 'Justify', icon: 'menu' },
                ],
            },
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'text-align', type: 'string', cssSupports: 'text-align' },
        },
        '_ww-text_color': {
            label: 'Text color',
            type: 'Color',
            category: 'text',
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: 'color', type: 'string', cssSupports: 'color' },
            responsive: true,
            states: true,
            classes: true,
        },
        '_ww-text_textDecoration': {
            label: 'Decoration',
            type: 'TextRadioGroup',
            category: 'text',
            options: {
                choices: [
                    { value: 'none', title: 'None', icon: 'x', default: true },
                    { value: 'underline', title: 'Underline', icon: 'typo-underline' },
                    { value: 'overline', title: 'Overline', icon: 'typo-overline' },
                    { value: 'line-through', title: 'Line-through', icon: 'typo-strikethrough' },
                ],
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            bindingValidation: { markdown: 'text-decoration', type: 'string', cssSupports: 'text-decoration' },
        },
        '_ww-text_textDecorationStyle': {
            label: 'Decoration style',
            type: 'TextSelect',
            category: 'text',
            options: {
                options: [
                    { value: 'solid', label: 'Solid', default: true },
                    { value: 'double', label: 'Double' },
                    { value: 'dotted', label: 'Dotted' },
                    { value: 'dashed', label: 'Dashed' },
                    { value: 'wavy', label: 'Wavy' },
                ],
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            hidden: content => content['_ww-text_textDecoration'] === 'none' || !content['_ww-text_textDecoration'],
            bindingValidation: {
                markdown: 'text-decoration-style',
                type: 'string',
                cssSupports: 'text-decoration-style',
            },
        },
        '_ww-text_textDecorationColor': {
            label: 'Decoration color',
            type: 'Color',
            category: 'text',
            options: { nullable: true },
            responsive: true,
            bindable: true,
            bindingValidation: { markdown: 'color', type: 'string', cssSupports: 'color' },
            states: true,
            classes: true,
            hidden: content => content['_ww-text_textDecoration'] === 'none' || !content['_ww-text_textDecoration'],
        },
        '_ww-text_nowrap': {
            label: 'No-wrap',
            type: 'OnOff',
            category: 'text',
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: { type: 'boolean', markdown: 'no-wrap' },
        },
        '_ww-text_ellipsis': {
            hidden: content => !content['_ww-text_nowrap'],
            label: 'Ellipsis',
            type: 'OnOff',
            category: 'text',
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: { type: 'boolean', markdown: 'ellipsis' },
        },
        '_ww-text_textTransform': {
            label: 'Character case',
            type: 'TextSelect',
            category: 'text',
            options: {
                options: [
                    { value: null, label: 'None', default: true },
                    { value: 'capitalize', label: 'Capitalize' },
                    { value: 'uppercase', label: 'UPPERCASE' },
                    { value: 'lowercase', label: 'lowercase' },
                ],
            },
            responsive: true,
            bindable: true,
            bindingValidation: { markdown: 'text-transform', type: 'string', cssSupports: 'text-transform' },
            states: true,
            classes: true,
        },
        '_ww-text_textShadow': {
            label: 'Text Shadows',
            type: 'Shadows',
            category: 'text',
            options: { isText: true },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: { markdown: 'text-shadow', type: 'string', cssSupports: 'text-shadow' },
        },
        '_ww-text_letterSpacing': {
            label: 'Letter spacing',
            type: 'Length',
            category: 'text',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: -100, max: 100 },
                    { value: 'em', label: 'em', min: -10, max: 10, digits: 3, step: 0.1 },
                    { value: 'rem', label: 'rem', min: -10, max: 10, digits: 3, step: 0.1 },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'letter-spacing', type: 'string', cssSupports: 'letter-spacing' },
        },
        '_ww-text_wordSpacing': {
            label: 'Word spacing',
            type: 'Length',
            category: 'text',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'word-spacing', type: 'string', cssSupports: 'word-spacing' },
        },
        '_ww-text_links': {
            hidden: true,
        },
    },
};

export const LAYOUT_CONFIGURATION = {
    properties: {
        '_ww-layout_flexDirection': {
            label: 'Direction',
            type: 'TextRadioGroup',
            category: 'layout',
            options: {
                choices: [
                    { title: 'Vertical', value: 'column', label: 'Vertical' },
                    { title: 'Horizontal', value: 'row', label: 'Horizontal', default: true },
                ],
            },
            bindable: true,
            bindingValidation: {
                markdown: 'flex-direction',
                type: 'string',
                cssSupports: 'flex-direction',
            },
            responsive: true,
            classes: true,
        },
        '_ww-layout_rowGap': {
            label: 'Row gap',
            type: 'Length',
            category: 'layout',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 0, max: 100 },
                    { value: '%', label: '%', min: 0, max: 100, digits: 2, step: 1 },
                    { value: 'em', label: 'em', min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: 'rem', label: 'rem', min: 0, max: 10, digits: 3, step: 0.1 },
                ],
                useVar: true,
                noRange: true,
            },
            bindable: true,
            bindingValidation: {
                markdown: 'row-gap',
                type: 'string',
                cssSupports: 'row-gap',
            },
            states: true,
            classes: true,
            responsive: true,
        },
        '_ww-layout_columnGap': {
            label: 'Column gap',
            type: 'Length',
            category: 'layout',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 0, max: 100 },
                    { value: '%', label: '%', min: 0, max: 100, digits: 2, step: 1 },
                    { value: 'em', label: 'em', min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: 'rem', label: 'rem', min: 0, max: 10, digits: 3, step: 0.1 },
                ],
                useVar: true,
                noRange: true,
            },
            bindable: true,
            bindingValidation: {
                markdown: 'column-gap',
                type: 'string',
                cssSupports: 'column-gap',
            },
            states: true,
            responsive: true,
            classes: true,
        },
        '_ww-layout_justifyContent': {
            label: 'Justify',
            type: 'TextRadioGroup',
            category: 'layout',
            options: content => {
                if (content['_ww-layout_flexDirection'] === 'column') {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'align-x-start-vertical', default: true },
                            { value: 'center', title: 'Center', icon: 'align-x-center-vertical' },
                            { value: 'flex-end', title: 'End', icon: 'align-x-end-vertical' },
                            { value: 'space-around', title: 'Space around', icon: 'align-x-space-around-vertical' },
                            { value: 'space-between', title: 'Space between', icon: 'align-x-space-between-vertical' },
                        ],
                        compact: true,
                    };
                } else {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'align-x-start', default: true },
                            { value: 'center', title: 'Center', icon: 'align-x-center' },
                            { value: 'flex-end', title: 'End', icon: 'align-x-end' },
                            { value: 'space-around', title: 'Space around', icon: 'align-x-space-around' },
                            { value: 'space-between', title: 'Space between', icon: 'align-x-space-between' },
                        ],
                        compact: true,
                    };
                }
            },
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'justify-content', type: 'string', cssSupports: 'justify-content' },
        },
        '_ww-layout_alignItems': {
            label: 'Alignment',
            type: 'TextRadioGroup',
            category: 'layout',
            options: content => {
                if (content['_ww-layout_flexDirection'] === 'column') {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'align-x-start' },
                            { value: 'center', title: 'Center', icon: 'align-x-center' },
                            { value: 'flex-end', title: 'End', icon: 'align-x-end' },
                            { value: 'stretch', title: 'Stretch', icon: 'align-x-stretch', default: true },
                        ],
                        compact: true,
                    };
                } else {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'align-y-start' },
                            { value: 'center', title: 'Center', icon: 'align-y-center' },
                            { value: 'flex-end', title: 'End', icon: 'align-y-end' },
                            { value: 'stretch', title: 'Stretch', icon: 'align-y-stretch', default: true },
                            { value: 'baseline', title: 'Baseline', icon: 'align-y-baseline' },
                        ],
                        compact: true,
                    };
                }
            },
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'align-items', type: 'string', cssSupports: 'align-items' },
        },
        '_ww-layout_flexWrap': {
            label: 'Wrap elements',
            type: 'OnOff',
            category: 'layout',
            hidden: content => content['_ww-layout_flexDirection'] === 'column',
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'flex-wrap', type: 'boolean' },
        },
        '_ww-layout_alignContent': {
            label: 'Content Alignment',
            type: 'TextRadioGroup',
            category: 'layout',
            options: content => {
                if (content['_ww-layout_flexDirection'] === 'column') {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'y-align-content-start' },
                            { value: 'center', title: 'Center', icon: 'y-align-content-center' },
                            { value: 'flex-end', title: 'End', icon: 'y-align-content-end' },
                            { value: 'stretch', title: 'Stretch', icon: 'y-align-content-stretch', default: true },
                            { value: 'space-between', title: 'Space between', icon: 'y-align-content-space-between' },
                            { value: 'space-around', title: 'Space around', icon: 'y-align-content-space-around' },
                        ],
                        compact: true,
                    };
                } else {
                    return {
                        choices: [
                            { value: 'flex-start', title: 'Start', icon: 'x-align-content-start' },
                            { value: 'center', title: 'Center', icon: 'x-align-content-center' },
                            { value: 'flex-end', title: 'End', icon: 'x-align-content-end' },
                            { value: 'stretch', title: 'Stretch', icon: 'x-align-content-stretch', default: true },
                            { value: 'space-between', title: 'Space between', icon: 'x-align-content-space-between' },
                            { value: 'space-around', title: 'Space around', icon: 'x-align-content-space-around' },
                        ],
                        compact: true,
                    };
                }
            },
            hidden: content => !content['_ww-layout_flexWrap'],
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'align-content', type: 'string', cssSupports: 'align-content' },
        },
        '_ww-layout_reverse': {
            label: 'Reverse',
            type: 'OnOff',
            category: 'layout',
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'layout-reverse', type: 'boolean' },
        },
        '_ww-layout_pushLast': {
            label: 'Last to the end',
            type: 'OnOff',
            category: 'layout',
            responsive: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: 'layout-push-last', type: 'boolean' },
        },
    },
};

export const GRID_CONFIGURATION = {
    properties: {
        '_ww-grid_flowDirection': {
            label: 'Direction',
            type: 'TextRadioGroup',
            category: 'grid',
            options: {
                choices: [
                    { title: 'Row', value: 'row', label: 'Row', default: true },
                    { title: 'Column', value: 'column', label: 'Column' },
                ],
            },
            bindable: true,
            responsive: true,
            classes: true,
            bindingValidation: { markdown: 'grid-flow-direction', type: 'string' },
        },
        '_ww-grid_columns': {
            label: 'Columns',
            type: 'ArrayCompact',
            options: {
                item: {
                    label: specific__array => `Column ${specific__array.index + 1}`,
                    type: 'Length',
                    options: unitPickerOptions('fr', 'px', '%', 'auto'),
                    defaultValue: '1fr',
                    bindable: true,
                    responsive: true,
                },
                placeholder: { icon: 'columns', text: 'Columns auto-generated' },
            },
            defaultValue: undefined,
            category: 'grid',
            bindable: true,
            responsive: true,
            classes: true,
            bindingValidation: { markdown: 'grid-columns', type: 'array' },
        },
        '_ww-grid_rows': {
            label: 'Rows',
            type: 'ArrayCompact',
            options: {
                item: {
                    label: specific__array => `Row ${specific__array.index + 1}`,
                    type: 'Length',
                    options: unitPickerOptions('fr', 'px', '%', 'auto'),
                    defaultValue: '1fr',
                    bindable: true,
                    responsive: true,
                },
                placeholder: { icon: 'rows', text: 'Rows auto-generated' },
            },
            defaultValue: undefined,
            category: 'grid',
            bindable: true,
            responsive: true,
            classes: true,
            bindingValidation: { markdown: 'grid-rows', type: 'array' },
        },
        '_ww-grid_columnGap': { ...LAYOUT_CONFIGURATION.properties['_ww-layout_columnGap'], category: 'grid' },
        '_ww-grid_rowGap': { ...LAYOUT_CONFIGURATION.properties['_ww-layout_rowGap'], category: 'grid' },
    },
};

export const BACKGROUND_VIDEO_CONFIGURATION = {
    properties: {
        '_ww-backgroundVideo': {
            label: 'Video',
            type: 'Video',
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: 'background.video',
                type: 'string',
            },
        },
        '_ww-backgroundVideoPoster': {
            label: 'Poster',
            type: 'Image',
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: 'background.video.poster',
                type: 'string',
            },
        },
        '_ww-backgroundVideoSize': {
            label: 'Size',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'cover', default: true, label: { en: 'Cover', fr: 'Couvrir' } },
                    { value: 'contain', label: { en: 'Contain', fr: 'Contenir' } },
                ],
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: 'background.video.size',
                type: 'string',
            },
        },
        '_ww-backgroundVideoLoop': {
            label: 'Loop',
            type: 'OnOff',
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: 'background.video.loop',
                type: 'boolean',
            },
        },
        '_ww-backgroundVideoPreload': {
            label: 'Preload',
            type: 'OnOff',
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: 'background.video.preload',
                type: 'boolean',
            },
        },
    },
};

function unitPickerOptions(...units) {
    const unitChoices = [
        { value: 'auto', label: 'auto', default: true },
        { value: 'px', label: 'px', min: 0, max: 100 },
        { value: 'fr', label: 'fr', min: 0, max: 100, digits: 2, step: 1 },
        { value: '%', label: '%', min: 0, max: 100, digits: 2, step: 1 },
        { value: 'em', label: 'em', min: 0, max: 10, digits: 3, step: 0.1 },
        { value: 'rem', label: 'rem', min: 0, max: 10, digits: 3, step: 0.1 },
    ].filter(unit => !units || units.includes(unit.value));

    return {
        unitChoices,
        useVar: true,
        noRange: true,
    };
}

export const GRID_CHILD_HELP = {
    columnSpan: {
        tooltip:
            'Specifies how many columns an element should span across in the grid layout. This determines the element\'s width relative to the total number of grid columns. Set the value of the property grid-column to `span value`. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column" target="_blank">[MDN Doc]</a>',
        bindingValidation: { markdown: 'column-span', type: 'string', cssSupports: 'column-span' },
    },
    rowSpan: {
        tooltip:
            'Defines the number of rows an element will span over. This affects the element\'s height by extending it across multiple grid rows. Set the value of the property row-column to `span value`. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row" target="_blank">[MDN Doc]</a>',
        bindingValidation: { markdown: 'row-span', type: 'string', cssSupports: 'row-span' },
    },
    gridColumn: {
        tooltip:
            'Sets the element\'s starting and ending positions along the grid\'s column axis. It determines where the element is placed horizontally within the grid. Set the value of the property grid-column to `value`. Overwrite the column span property. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column" target="_blank">[MDN Doc]</a>',
        bindingValidation: { markdown: 'grid-column', type: 'string', cssSupports: 'grid-column' },
    },
    gridRow: {
        tooltip:
            'Indicates the element\'s starting and ending positions along the grid\'s row axis. This property controls the vertical placement of the element within the grid layout. Set the value of the property row-column to `value`. Overwrite the row span property.  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row" target="_blank">[MDN Doc]</a>',
        bindingValidation: { markdown: 'grid-row', type: 'string', cssSupports: 'grid-row' },
    },
};
