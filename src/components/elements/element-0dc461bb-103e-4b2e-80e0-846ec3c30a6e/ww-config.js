export default {
    options: {
        autoByContent: true,
    },
    editor: {
        label: {
            en: 'Hover dropdown',
        },
        icon: 'chevron-down',
        bubble: {
            icon: 'chevron-down',
        },
        customStylePropertiesOrder: [
            'internalDisplay',
            ['trigger', 'closeOnClick'],
            ['appearAnimation', 'slideOrigin', 'rotationAngle', 'animationDuration', 'animationTimingFunction'],
            ['alignement'],
            ['isMenuBreakpoint', 'menuBreakpoint'],
        ],
    },
    properties: {
        internalDisplay: {
            label: { en: 'Init display' },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        trigger: {
            label: {
                en: 'Show on',
                fr: 'Show on',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'mouseenter', label: { en: 'Hover', fr: 'Hover' } },
                    { value: 'click', label: { en: 'Click' } },
                ],
            },
            defaultValue: 'click',
        },
        closeOnClick: {
            label: {
                en: 'Close on click',
                fr: 'Fermeture au click',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'always', label: { en: 'Always', fr: 'Toujours' } },
                    { value: 'outside', label: { en: 'Outside only', fr: 'En dehors uniquement' } },
                ],
            },
            defaultValue: 'always',
        },
        appearAnimation: {
            label: {
                en: 'Appear animation',
                fr: "Animation d'apparition",
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'fade', label: { en: 'Fade', fr: 'Fade' } },
                    { value: 'slideY', label: { en: 'Slide Y', fr: 'Slide Y' } },
                    { value: 'slideX', label: { en: 'Slide X', fr: 'Slide X' } },
                    { value: 'scale', label: { en: 'Scale', fr: 'Scale' } },
                    { value: 'rotate', label: { en: 'Rotate', fr: 'Rotate' } },
                ],
            },
            defaultValue: 'fade',
        },
        slideOrigin: {
            type: 'Length',
            label: {
                en: 'Slide origin',
                fr: 'Slide origin',
            },
            hidden: content => {
                return !['slideX', 'slideY'].includes(content.appearAnimation);
            },
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: -300, max: 300 }],
            },
            defaultValue: '20px',
        },
        rotationAngle: {
            type: 'Length',
            label: {
                en: 'Rotation angle',
                fr: 'Rotation angle',
            },
            hidden: content => {
                return content.appearAnimation !== 'rotate';
            },
            options: {
                unitChoices: [{ value: 'deg', label: 'deg', min: -180, max: 180 }],
            },
            defaultValue: '-35deg',
        },
        animationDuration: {
            type: 'Length',
            label: {
                en: 'Animation duration',
                fr: "Durée de l'animation",
            },
            options: {
                unitChoices: [{ value: 'ms', label: 'ms', min: 1, max: 5000 }],
            },
            defaultValue: '300ms',
        },
        animationTimingFunction: {
            label: {
                en: 'Animation timing function',
                fr: 'Animation timing function',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'ease', label: { en: 'ease', fr: 'ease' } },
                    { value: 'ease-in', label: { en: 'ease-in', fr: 'ease-in' } },
                    { value: 'ease-out', label: { en: 'ease-out', fr: 'ease-out' } },
                    { value: 'ease-in-out', label: { en: 'ease-in-out', fr: 'ease-in-out' } },
                    { value: 'linear', label: { en: 'linear', fr: 'linear' } },
                ],
            },
            defaultValue: 'ease',
        },
        alignement: {
            label: { en: 'Alignement' },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    { value: 'align-left', title: { en: 'Left', fr: 'Gauche' }, icon: 'align-left' },
                    { value: 'center', title: { en: 'Center', fr: 'Milieu' }, icon: 'align-center' },
                    { value: 'align-right', title: { en: 'Right', fr: 'Droite' }, icon: 'align-right' },
                ],
            },
            defaultValue: 'center',
        },
        isMenuBreakpoint: {
            label: { en: 'Mobile view' },
            type: 'OnOff',
            defaultValue: true,
        },
        menuBreakpoint: {
            hidden: content => !content.isMenuBreakpoint,
            label: { en: 'Mobile view starting at' },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    { value: 'laptop', title: { en: 'Laptop' }, icon: 'monitor' },
                    { value: 'tablet', title: { en: 'Tablet' }, icon: 'tablet' },
                    { value: 'mobile', title: { en: 'Mobile' }, icon: 'mobile' },
                ],
            },
            defaultValue: 'mobile',
        },
        dropdown: {
            hidden: true,
            defaultValue: [],
            navigator: {
                group: 'Trigger',
            },
        },
        dropdownContent: {
            hidden: true,
            defaultValue: [],
            navigator: {
                group: 'Content',
            },
        },
    },
};
