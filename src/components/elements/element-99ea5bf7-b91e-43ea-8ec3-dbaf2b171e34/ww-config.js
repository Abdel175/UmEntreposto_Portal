

export default {
  inherit: {
    type: "ww-text",
    exclude: ["text"],
  },
  editor: {
    label: {
      en: "Number",
    },
    icon: "number",
    bubble: {
      icon: "number",
    },
    customSettingsPropertiesOrder: [
      "value",
      "locale",
      [
        "style",
        "currency",
        "currencyDisplay",
        "notation",
        "signDisplay",
        "unit",
        "unitDisplay",
      ],
      [
        "minimumIntegerDigits",
        "fractionDigits",
        "thousandsSeparator",
        "convertion",
      ],
    ],
  },
  properties: {
    value: {
      label: {
        en: "Value",
      },
      type: "Text",
      bindable: true,
      defaultValue: 3.14159,
      section: "settings",

    },
    locale: {
      label: {
        en: "Locale",
        fr: "Locale",
      },
      type: "TextSelect",

      defaultValue: "ww-project-lang",
      section: "settings",
      bindable: true,
      bindingValidation: {
        type: "string",
        tooltip:
          'A string that defines the locale code: `"en" | "es" | "fr"` of `"ww-project-lang"` for the current page ',
      },
    },
    style: {
      label: {
        en: "Style",
        fr: "Style",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "decimal", label: "Decimal" },
          { value: "currency", label: "Currency" },
          { value: "percent", label: "Percent" },
          { value: "unit", label: "Unit" },
        ],
      },
      defaultValue: "currency",
      section: "settings",
    },
    currency: {
      hidden: (content) => content.style !== "currency",
      label: {
        en: "Currency",
        fr: "Currency",
      },
      type: "TextSelect",

      defaultValue: "USD",
      section: "settings",
      bindable: true,
    },
    currencyDisplay: {
      hidden: (content) => content.style !== "currency",
      label: {
        en: "Currency display",
        fr: "Currency display",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "narrowSymbol", label: "Symbol" },
          { value: "code", label: "Code" },
          { value: "name", label: "Name" },
        ],
      },
      defaultValue: "narrowSymbol",
      section: "settings",
    },
    notation: {
      label: {
        en: "Notation",
        fr: "Notation",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "standard", label: "Standard" },
          { value: "scientific", label: "Scientific" },
          { value: "compact", label: "Compact" },
        ],
      },
      defaultValue: "standard",
      section: "settings",
    },
    unit: {
      hidden: (content) => content.style !== "unit",
      label: {
        en: "Unit",
        fr: "Unit",
      },
      type: "TextSelect",

      defaultValue: "celsius",
      section: "settings",
      bindable: true,
    },
    unitDisplay: {
      hidden: (content) => content.style !== "unit",
      label: {
        en: "Unit dysplay",
        fr: "Unit dysplay",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "long", label: "Long" },
          { value: "short", label: "Short" },
          { value: "narrow", label: "Narrow" },
        ],
      },
      defaultValue: "short",
      section: "settings",
    },
    minimumIntegerDigits: {
      type: "Number",
      label: {
        en: "Minimum integer digits",
        fr: "Minimum integer digits",
      },
      options: {
        min: 1,
        max: 21,
      },
      defaultValue: 1,
      section: "settings",
      bindable: true,
    },
    fractionDigits: {
      type: "Number",
      label: {
        en: "Decimal places",
        fr: "Decimal places",
      },
      options: {
        min: 0,
        max: 20,
      },
      defaultValue: 2,
      section: "settings",
      bindable: true,
    },
    thousandsSeparator: {
      label: {
        en: "1000 separator",
        fr: "1000 separator",
      },
      type: "OnOff",
      defaultValue: true,
      bindable: true,
      section: "settings",
    },
  },
};
