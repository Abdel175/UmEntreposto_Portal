export default {
    editor: {
        label: {
            en: "Modal",
        },
        excludedSections: ["sizing", "spacing", "positioning", "background", "styling", "advanced-style", "customCss"],
    },
    triggerEvents: [{ name: "backdropClick", label: { en: "On backdrop click" } }],
    options: {
        forceHydration: true,
    },
    properties: {
        display: {
            type: "OnOff",
            label: {
                en: "Display",
                fr: "Afficher",
            },
            bindable: true,
            responsive: true,
            defaultValue: true,
        },
        displayInEditor: {
            type: "OnOff",
            label: {
                en: "Force display in editor",
                fr: "Forcer l'affichage dans l'éditeur",
            },
            editorOnly: true,
            hidden: (content, sidepanelContent, boundProps) => !boundProps.display,
            defaultValue: false,
        },
        animation: {
            type: "TextSelect",
            label: {
                en: "Animation",
                fr: "Animation",
            },
            options: {
                options: [
                    { value: "fade", label: { en: "Fade", fr: "Fondu" } },
                    { value: "fromTop", label: { en: "Appears from top", fr: "Apparait par le haut" } },
                    { value: "fromRight", label: { en: "Appears from right", fr: "Apparait par la droite" } },
                    { value: "fromLeft", label: { en: "Appears from left", fr: "Apparait par la gauche" } },
                    { value: "fromBottom", label: { en: "Appears from bottom", fr: "Apparait par le bas" } },
                    { value: "zoomIn", label: { en: "Zoom in", fr: "Zoom arrière" } },
                    { value: "zoomOut", label: { en: "Zoom out", fr: "Zoom avant" } },
                ],
            },
            responsive: true,
            states: true,
            classes: true,
            defaultValue: "fade",
        },
        position: {
            type: "TextSelect",
            label: {
                en: "Position",
                fr: "Position",
            },
            options: {
                options: [
                    { value: "topLeft", label: { en: "On top left", fr: "En haut à gauche" } },
                    { value: "topMiddle", label: { en: "On top middle", fr: "En haut au milieu" } },
                    { value: "topRight", label: { en: "On top right", fr: "En haut à droite" } },
                    { value: "middleLeft", label: { en: "On middle left", fr: "Au milieu à gauche" } },
                    { value: "middle", label: { en: "On middle", fr: "Au milieu" } },
                    { value: "middleRight", label: { en: "On middle right", fr: "Au milieu à droite" } },
                    { value: "bottomLeft", label: { en: "On bottom left", fr: "En bas à gauche" } },
                    { value: "bottomMiddle", label: { en: "On bottom middle", fr: "En bas au milieu" } },
                    { value: "bottomRight", label: { en: "On bottom right", fr: "En bas à droite" } },
                    { value: "custom", label: { en: "Custom", fr: "Personnalisé" } },
                ],
            },
            defaultValue: "middle",
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
        },
        positionLeft: {
            hidden: (content) => content.position !== "custom",
            label: {
                en: "Horizontal",
                fr: "Horizontal",
            },
            type: "Length",
            options: {
                unitChoices: [
                    { value: "%", label: "%", min: 0, max: 100 },
                    { value: "px", label: "px", min: 0, max: 1000 },
                ],
            },
            defaultValue: "0%",
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        positionTop: {
            hidden: (content) => content.position !== "custom",
            label: {
                en: "Vertical",
                fr: "Vertical",
            },
            type: "Length",
            options: {
                unitChoices: [
                    { value: "%", label: "%", min: 0, max: 100 },
                    { value: "px", label: "px", min: 0, max: 1000 },
                ],
            },
            defaultValue: "0%",
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        zIndex: {
            label: {
                en: "Z axis",
            },
            type: "Number",
            options: {
                min: 0,
                max: 100,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: "z-index",
                type: "string",
                cssSupports: "z-index",
            },
        },
        backdrop: {
            type: "OnOff",
            label: {
                en: "Backdrop",
                fr: "Fond",
            },
            bindable: true,
            defaultValue: true,
            responsive: true,
            states: true,
            classes: true,
        },
        backdropColor: {
            type: "Color",
            label: {
                en: "Backdrop color",
                fr: "Couleur du fond",
            },
            bindable: true,
            defaultValue: undefined,
            responsive: true,
            states: true,
            classes: true,
            hidden: (content) => !content.backdrop,
        },
        transition: {
            type: "Transitions",
            label: {
                en: "Transition",
                fr: "Transition",
            },
            options: {
                enforcedTransitionProperty: "all",
            },
            bindable: true,
            defaultValue: "all .3s ease",
            responsive: true,
            classes: true,
        },
        modalContent: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-flexbox",
                },
            ],
        },
    },
};
