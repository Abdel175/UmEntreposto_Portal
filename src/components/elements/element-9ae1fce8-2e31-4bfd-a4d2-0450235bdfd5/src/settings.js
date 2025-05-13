export const textOptions = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            noRange: true,
        },
        responsive: true,
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        responsive: true,
    },
    fontWeight: {
        label: {
            en: 'Font weight',
            fr: 'Graisse',
        },
        type: 'TextSelect',
        options: {
            options: [
                { value: null, label: { en: 'Default', fr: 'Par défaut' } },
                { value: 100, label: { en: '100 - Thin' } },
                { value: 200, label: { en: '200 - Extra Light' } },
                { value: 300, label: { en: '300 - Light' } },
                { value: 400, label: { en: '400 - Normal' } },
                { value: 500, label: { en: '500 - Medium' } },
                { value: 600, label: { en: '600 - Semi Bold' } },
                { value: 700, label: { en: '700 - Bold' } },
                { value: 800, label: { en: '800 - Extra Bold' } },
                { value: 900, label: { en: '900 - Black' } },
            ],
        },
        responsive: true,
    },
    textAlign: {
        type: 'TextRadioGroup',
        options: {
            choices: [
                {
                    value: 'left',
                    default: true,
                    title: { en: 'Left', fr: 'Gauche' },
                    icon: 'menu-alt-2',
                },
                {
                    value: 'center',
                    title: { en: 'Center', fr: 'Milieu' },
                    icon: 'text-middle',
                },
                {
                    value: 'right',
                    title: { en: 'Right', fr: 'Droite' },
                    icon: 'menu-alt-3',
                },
                {
                    value: 'justify',
                    title: { en: 'Justify', fr: 'Justifié' },
                    icon: 'menu',
                },
            ],
        },
        label: {
            en: 'Alignement',
            fr: 'Alignement',
        },
        responsive: true,
        bindable: true,
    },
    color: {
        type: 'Color',
        label: {
            en: 'Text color',
            fr: 'Couleur du texte',
        },
        responsive: true,
        bindable: true,
        options: {
            nullable: true,
        },
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        responsive: true,
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
            noRange: true,
        },
        bindable: true,
    },
    marginTop: {
        type: 'Length',
        responsive: true,
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            noRange: true,
        },
        bindable: true,
    },
    marginBottom: {
        type: 'Length',
        responsive: true,
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            noRange: true,
        },
        bindable: true,
    },
};
