export default {
    editor: {
        label: "Donut progress bar",
        customSettingsPropertiesOrder: ["value"],
        customStylePropertiesOrder: [
            "style",
            ["fillInfo", "thickness", "fillColor"],
            ["emptyInfo", "emptyThickness", "emptyColor"],
            ["animationInfo", "animationDuration", "animationDelay"],
        ],
    },
    options: {
        displayAllowedValues: ["flex", "inline-flex"],
    },
    triggerEvents: [{ name: "change", label: "On change", event: { value: "" } }],
    properties: {
        value: {
            type: "Number",
            label: "Value",
            defaultValue: 65,
            bindable: true,
            section: "settings",
        },
        style: {
            label: "Style",
            type: "TextSelect",
            options: {
                options: [
                    { value: "center", label: "Center" },
                    { value: "out", label: "Out" },
                    { value: "out-over", label: "Out over" },
                    { value: "in", label: "In" },
                    { value: "in-over", label: "In over" },
                ],
            },
            defaultValue: "center",
            states: true,
            responsive: true,
            classes: true,
        },
        offset: {
            hidden: (content) => content.style !== "out" && content.style !== "in",
            type: "Length",
            label: "Line offset",
            options: {
                unitChoices: [{ value: "px", label: "px", min: 0, max: 50 }],
            },
            states: true,
            responsive: true,
            classes: true,
        },
        fillInfo: {
            type: "Info",
            label: "Fill",
        },
        thickness: {
            type: "Length",
            label: "Thickness",
            options: {
                unitChoices: [{ value: "px", label: "px", min: 1, max: 50 }],
            },
            states: true,
            responsive: true,
            classes: true,
        },
        emptyInfo: {
            type: "Info",
            label: "Empty",
        },
        emptyThickness: {
            type: "Length",
            label: "Thickness",
            options: {
                unitChoices: [{ value: "px", label: "px", min: 1, max: 50 }],
            },
            states: true,
            responsive: true,
            classes: true,
        },
        fillColor: {
            type: "Color",
            label: "Color",
            options: {
                nullable: true,
            },
            states: true,
            responsive: true,
            classes: true,
            bindable: true,
        },
        emptyColor: {
            type: "Color",
            label: "Color",
            options: {
                nullable: true,
            },
            states: true,
            responsive: true,
            classes: true,
            bindable: true,
        },
        animationInfo: {
            type: "Info",
            label: "Animation",
        },
        animationDuration: {
            type: "Length",
            label: "Duration",
            options: {
                unitChoices: [{ value: "ms", label: "ms", min: 1, max: 999 }],
            },
            states: true,
            responsive: true,
            classes: true,
        },
        animationDelay: {
            type: "Length",
            label: "Delay",
            options: {
                unitChoices: [{ value: "ms", label: "ms", min: 1, max: 999 }],
            },
            states: true,
            responsive: true,
            classes: true,
        },
        container: {
            hidden: true,
            defaultValue: [],
        },
    },
};
