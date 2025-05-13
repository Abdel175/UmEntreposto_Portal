export default {
  editor: {
    label: {
      en: "Date picker",
    },
    icon: "calendar",
    bubble: {
      icon: "calendar",
    },
    customStylePropertiesOrder: [
      "lang",
      "format",
      "customFormat",
      [
        "displayTitle",
        "orientation",
        "menuPosition",
        "enableCalendarOnly",
        "stickedDatePicker",
        "calendarOnlyFit",
        "enableLeftSidebar",
        "enableRightSidebar",
        "enableMultiCalendars",
        "multiCalendars",
        "multiCalendarsSolo",
      ],
      [
        "stylesTitle",
        "themeFontFamily",
        "themeFontSize",
        "themeTimeFontSize",

        "advancedStyles",
        "themePreviewFontSize",
        "themeBorderRadius",
        "themeCellBorderRadius",
        "themeCellSize",
        "themeCellPadding",
        "themeMenuMinWidth",
      ],
      [
        "colorsTitle",
        "themePrimaryColor",
        "themeSecondaryColor",
        "themeBackgroundColor",
        "themeTextColor",
        "themePrimaryTextColor",
        "themeHoverColor",
        "themeDisabledColor",

        "advancedColors",
        "themeHoverTextColor",
        "themeHoverIconColor",
        "themeBorderColor",
        "themeMenuBorderColor",
        "themeBorderHoverColor",
        "themeScrollBarBackgroundColor",
        "themeScrollBarColor",
        "themeSuccessColor",
        "themeSuccessDisabledColor",
        "themeIconColor",
        "themeDangerColor",
        "themeHighlightColor",
      ],
    ],
    customSettingsPropertiesOrder: [
      "readonly",
      "required",
      [
        "selectionTitle",
        "selectionMode",
        "initValueSingle",
        "initValueRangeStart",
        "initValueRangeEnd",
        "initValueMulti",
        "multiDatesLimit",
        "rangeMode",
        "autoRange",
        "enablePartialRange",
        "minRange",
        "maxRange",
        "noDisabledRange",
      ],
      ["behaviorTitle", "autoApply", "closeOnAutoApply"],
      ["timeTitle", "dateMode", "timezone", "use24", "enableSeconds"],
      [
        "datesTitle",
        "startDate",
        "minDate",
        "maxDate",

        "advancedDates",
        "preventMinMaxNavigation",
        "ignoreTimeValidation",
        "allowedDates",
        "disabledDates",
        "disabledWeekDays",
      ],
      [
        "weeksAndMonthsTitle",
        "weekStart",
        "weekNumbers",
        "hideOffsetDates",
        "disableMonthYearSelect",
      ],

      ["flowTitle", "enableFlow", "flowHint", "flowSteps"],
    ],
  },
  triggerEvents: [
    {
      name: "change",
      label: { en: "On change" },
      event: { value: "2023-03-02T14:54:54.727Z" },
      getTestEvent: "getTestEvent",
    },
    {
      name: "initValueChange",
      label: { en: "On init value change" },
      event: { value: "2023-03-02T14:54:54.727Z" },
      getTestEvent: "getTestEvent",
    },
  ],
  actions: [
    {
      label: 'Clear',
      action: 'clearValue',
    }
  ],
  properties: {
    initValueSingle: {
      label: {
        en: "Init value",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",

      hidden: (content) => content.selectionMode !== "single",
    },
    initValueRangeStart: {
      label: {
        en: "Init value start",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",

      hidden: (content) => content.selectionMode !== "range",
    },
    initValueRangeEnd: {
      label: {
        en: "Init value end",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",

      hidden: (content) => content.selectionMode !== "range",
    },
    initValueMulti: {
      label: {
        en: "Init value",
      },
      type: "Array",
      defaultValue: null,
      bindable: true,
      section: "settings",

      hidden: (content) => content.selectionMode !== "multi",
    },
    displayTitle: {
      label: {
        en: "Display",
      },
      type: "Title",
      section: "style",
      editorOnly: true,
    },
    stylesTitle: {
      label: {
        en: "Style",
        fr: "Style",
      },
      type: "Title",
      section: "style",
      editorOnly: true,
    },
    colorsTitle: {
      label: {
        en: "Colors",
        fr: "Colors",
      },
      type: "Title",
      section: "style",
      editorOnly: true,
    },
    selectionTitle: {
      label: {
        en: "Selection",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    behaviorTitle: {
      label: {
        en: "Behavior",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    timeTitle: {
      label: {
        en: "Time",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    datesTitle: {
      label: {
        en: "Dates",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    weeksAndMonthsTitle: {
      label: {
        en: "Weeks / Months",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    flowTitle: {
      label: {
        en: "Flow",
      },
      type: "Title",
      section: "settings",
      editorOnly: true,
    },
    advancedColors: {
      label: { en: "Advanced" },
      section: "style",
      defaultValue: false,
      type: "TextRadioGroup",
      options: {
        choices: [
          { value: true, label: { en: "Show" } },
          { value: false, label: { en: "Hide" } },
        ],
      },
    },
    advancedStyles: {
      label: { en: "Advanced" },
      section: "style",
      defaultValue: false,
      type: "TextRadioGroup",
      options: {
        choices: [
          { value: true, label: { en: "Show" } },
          { value: false, label: { en: "Hide" } },
        ],
      },
    },
    advancedDates: {
      label: { en: "Advanced" },
      section: "settings",
      defaultValue: false,
      type: "TextRadioGroup",
      options: {
        choices: [
          { value: true, label: { en: "Show" } },
          { value: false, label: { en: "Hide" } },
        ],
      },
    },
    enableCalendarOnly: {
      label: { en: "Calendar only", fr: "Calendrier seul" },
      type: "OnOff",
      defaultValue: false,
      states: true,
      classes: true,
    },
    stickedDatePicker: {
      label: { en: "Sticked date picker", fr: "Date picker fixé" },
      type: "OnOff",
      defaultValue: false,
      states: true,
      classes: true,
      bindable: true,
      propertyHelp: {
        tooltip: "If set to `true`, the date picker will be rendered at trigger button level and not above all elements. This may be useful in the case of a date picker in a pop-up.",
      },
    },
    calendarOnlyFit: {
      label: { en: "Fit" },
      section: "style",
      defaultValue: "stretch",
      type: "TextRadioGroup",
      options: {
        choices: [
          { value: "stretch", label: { en: "Stretch" } },
          { value: "center", label: { en: "Center" } },
        ],
      },
      states: true,
      classes: true,
      hidden: (content) => !content.enableCalendarOnly,
    },
    enableLeftSidebar: {
      label: { en: "Left sidebar" },
      type: "OnOff",
      defaultValue: false,
      hidden: (content) => content.enableCalendarOnly,
    },
    enableRightSidebar: {
      label: { en: "Right sidebar" },
      type: "OnOff",
      defaultValue: false,
      hidden: (content) => content.enableCalendarOnly,
    },
    menuPosition: {
      label: {
        en: "Menu position",
        fr: "Menu position",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "center", label: { en: "Center" }, default: true },
          { value: "left", label: { en: "Left" } },
          { value: "right", label: { en: "Right" } },
        ],
      },
      states: true,
      classes: true,
      responsive: true,
      defaultValue: "center",
    },
    selectionMode: {
      label: {
        en: "Mode",
        fr: "Mode",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "single", label: { en: "Single" } },
          { value: "range", label: { en: "Range" } },
          { value: "multi", label: { en: "Multi dates" } },
        ],
      },
      defaultValue: "single",
    },
    dateMode: {
      label: {
        en: "Mode",
        fr: "Mode",
      },
      type: "TextSelect",
      section: "settings",
      options: (content) => {
        return {
          options: [
            {
              value: "datetime",
              label: { en: "Datetime" },
              support: ["single", "range", "multi"],
            },
            {
              value: "date",
              label: { en: "Date" },
              support: ["single", "range", "multi"],
            },
            {
              value: "time",
              label: { en: "Time" },
              support: ["single", "range"],
            },
            {
              value: "month",
              label: { en: "Month" },
              support: ["single", "range"],
            },
            {
              value: "year",
              label: { en: "Year" },
              support: ["single", "range"],
            },
          ].filter((opt) => opt.support.includes(content.selectionMode)),
        };
      },
      defaultValue: "datetime",
    },
    enableSeconds: {
      label: { en: "Enable seconds", fr: "Activer les secondes" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      hidden: (content) => !["datetime", "time"].includes(content.dateMode),
    },
    use24: {
      label: { en: "24h mode", fr: "Mode 24h" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      states: true,
      classes: true,
      responsive: true,
      hidden: (content) => !["datetime", "time"].includes(content.dateMode),
    },
    multiDatesLimit: {
      label: {
        en: "Multi dates limit",
      },
      type: "Number",
      section: "settings",
      defaultValue: 0,
      hidden: (content) => content.selectionMode !== "multi",
    },
    enableMultiCalendars: {
      label: { en: "Multi calendars", fr: "Calendriers multiple" },
      type: "OnOff",
      section: "style",
      defaultValue: false,
      hidden: (content) =>
        content.selectionMode !== "range" ||
        !["datetime", "date", "week"].includes(content.dateMode),
    },
    multiCalendars: {
      label: {
        en: "Calendars number",
      },
      type: "Number",
      section: "style",
      defaultValue: 2,
      options: {
        min: 2,
        max: 4,
        step: 1,
      },
      hidden: (content) =>
        content.selectionMode !== "range" ||
        !["datetime", "date", "week"].includes(content.dateMode) ||
        !content.enableMultiCalendars,
    },
    multiCalendarsSolo: {
      label: { en: "Independant calendars", fr: "Calendriers indépendants" },
      type: "OnOff",
      section: "style",
      defaultValue: false,
      hidden: (content) =>
        content.selectionMode !== "range" ||
        !["datetime", "date", "week"].includes(content.dateMode) ||
        !content.enableMultiCalendars,
    },
    rangeMode: {
      label: { en: "Range mode", fr: "Range mode" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "free", label: { en: "Free" } },
          { value: "auto", label: { en: "Auto" } },
          { value: "minmax", label: { en: "Min Max" } },
        ],
      },
      bindable: true,
      defaultValue: "free",
      hidden: (content) => content.selectionMode !== "range",
    },
    enablePartialRange: {
      label: { en: "Partial range", fr: "Range partiel" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: true,
      hidden: (content) =>
        content.selectionMode !== "range" ||
        content.rangeMode !== "free" ||
        (content.rangeMode === "free" && content.enableCalendarOnly),
    },
    autoRange: {
      label: {
        en: "Auto range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 1,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "auto",
    },
    minRange: {
      label: {
        en: "Min range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 2,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "minmax",
    },
    maxRange: {
      label: {
        en: "Max range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 7,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "minmax",
    },
    orientation: {
      label: {
        en: "Orientation",
        fr: "Orientation",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "horizontal", label: { en: "Horizontal" }, default: true },
          { value: "vertical", label: { en: "Vertical" } },
        ],
      },
      states: true,
      classes: true,
      responsive: true,
    },
    timezone: {
      label: {
        en: "Timezone",
        fr: "Fuseau horaire",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "locale", label: { en: "Locale" } },
          { value: "Pacific/Midway", label: { en: "Pacific/Midway" } }, // -11
          { value: "America/Adak", label: { en: "America/Adak" } }, // -10,
          { value: "Pacific/Gambier", label: { en: "Pacific/Gambier" } }, // -9
          {
            value: "America/Los_Angeles",
            label: { en: "America/Los_Angeles" },
          }, // -8
          { value: "America/Denver", label: { en: "America/Denver" } }, // -7
          { value: "America/Chicago", label: { en: "America/Chicago" } }, // -6
          { value: "America/New_York", label: { en: "America/New_York" } }, // -5
          { value: "America/Santiago", label: { en: "America/Santiago" } }, // -4
          { value: "America/Sao_Paulo", label: { en: "America/Sao_Paulo" } }, // -3
          { value: "America/Noronha", label: { en: "America/Noronha" } }, // -2
          {
            value: "Atlantic/Cape_Verde",
            label: { en: "Atlantic/Cape_Verde" },
          }, // -1
          { value: "UTC", label: { en: "UTC" } }, // utc
          { value: "Europe/Brussels", label: { en: "Europe/Brussels" } }, //+1
          { value: "Africa/Cairo", label: { en: "Africa/Cairo" } }, // +2
          { value: "Europe/Minsk", label: { en: "Europe/Minsk" } }, // +3
          { value: "Europe/Moscow", label: { en: "Europe/Moscow" } }, // +4
          { value: "Asia/Tashkent", label: { en: "Asia/Tashkent" } }, // +5
          { value: "Asia/Dhaka", label: { en: "Asia/Dhaka" } }, // +6
          { value: "Asia/Novosibirsk", label: { en: "Asia/Novosibirsk" } }, // +7
          { value: "Australia/Perth", label: { en: "Australia/Perth" } }, // +8
          { value: "Asia/Tokyo", label: { en: "Asia/Tokyo" } }, // +9
          { value: "Australia/Hobart", label: { en: "Australia/Hobart" } }, // +10
          { value: "Asia/Vladivostok", label: { en: "Asia/Vladivostok" } }, // +11
          { value: "Pacific/Auckland", label: { en: "Pacific/Auckland" } }, // +12
        ],
      },
      defaultValue: "locale",
      bindable: true,
      hidden: (content) => !["datetime"].includes(content.dateMode),
    },
    enableFlow: {
      label: { en: "Flow", fr: "Flow" },
      type: "OnOff",
      bindable: true,
      section: "settings",
      defaultValue: false,
      hidden: (content) => content.enableMultiCalendars,
    },
    flowHint: {
      label: {
        en: "Hint",
        fr: "Hint",
      },
      type: "Info",
      options: {
        text: { en: "Order the flow steps" },
      },
      section: "settings",
      editorOnly: true,
      hidden: (content) => !content.enableFlow,
    },
    flowSteps: {
      label: {
        en: "Steps",
        fr: "Steps",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
        },
        movable: true,
        getItemLabel(_, index) {
          return `Step ${index + 1}`;
        },
      },
      defaultValue: [
        "month",
        "year",
        "calendar",
        "time",
        "minutes",
        "hours",
        "seconds",
      ],
      hidden: (content) => !content.enableFlow,
    },
    readonly: {
      label: { en: "Read only", fr: "Lecture seule" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content, sidePanelContent, boundProps, wwProps) =>
        !!(wwProps && wwProps.readonly !== undefined),
    },
    required: {
      label: { en: "Required", fr: "Requis" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    lang: {
      label: {
        en: "Lang",
        fr: "Lang",
      },
      type: "TextSelect",
      options: () => {
        const options = wwLib.wwWebsiteData
          .getCurrentPage()
          .langs.map((lang) => ({
            value: lang,
            label: { en: lang },
          }));

        options.unshift({ value: "pageLang", label: "Page lang" });

        return { options };
      },
      defaultValue: "pageLang",
      bindable: true,

    },
    format: {
      label: {
        en: "Format",
        fr: "Format",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "DD/MM/YYYY", label: { en: "DD/MM/YYYY" } },
          { value: "MMMM D, YYYY", label: { en: "MMMM D, YYYY" } },
          { value: "MMM D, YYYY", label: { en: "MMM D, YYYY" } },
          { value: "h:mm A", label: { en: "h:mm A" } },
          { value: "h:mm:ss A", label: { en: "h:mm:ss A" } },
          {
            value: "MMM D, YYYY h:mm A",
            label: { en: "MMM D, YYYY h:mm A" },
          },
          { value: "custom", label: { en: "Custom" } },
        ],
      },
      defaultValue: "DD/MM/YYYY",
    },
    customFormat: {
      label: { en: "Custom Format", fr: "Custom Format" },
      type: "Text",
      options: {
        placeholder: "MMMM D, YYYY h:mm A",
      },
      bindable: true,

      defaultValue: "",
      hidden: (content) => content.format !== "custom",
    },
    autoApply: {
      label: {
        en: "Auto apply",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    closeOnAutoApply: {
      label: {
        en: "Close on auto apply",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: true,
    },
    weekNumbers: {
      label: { en: "Week numbers" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "none", label: { en: "None" } },
          { value: "local", label: { en: "Local" } },
          { value: "iso", label: { en: "ISO" } },
        ],
      },
      bindable: true,
      defaultValue: "none",
    },
    weekStart: {
      label: { en: "Week start" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "0", label: { en: "Sunday" } },
          { value: "1", label: { en: "Monday" } },
          { value: "2", label: { en: "Tuesday" } },
          { value: "3", label: { en: "Wednesday" } },
          { value: "4", label: { en: "Thursday" } },
          { value: "5", label: { en: "Friday" } },
          { value: "6", label: { en: "Saturday" } },
        ],
      },

      bindable: true,
      defaultValue: "1",
    },
    hideOffsetDates: {
      label: {
        en: "Hide offset dates",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    minDate: {
      label: {
        en: "Min date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    maxDate: {
      label: {
        en: "Max date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    preventMinMaxNavigation: {
      label: {
        en: "Prevent min/max navigation",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content) => !content.advancedDates,
    },
    ignoreTimeValidation: {
      label: {
        en: "Ignore time validation",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content) => !content.advancedDates,
    },
    startDate: {
      label: {
        en: "Start date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    disableMonthYearSelect: {
      label: {
        en: "Disable month/year select",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    allowedDates: {
      label: {
        en: "Allowed dates",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
          defaultValue: "2023-03-06",
        },
      },
      bindable: true,
      defaultValue: [],
      hidden: (content) => !content.advancedDates,
    },
    disabledDates: {
      label: {
        en: "Disabled dates",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
          defaultValue: "2023-03-06",
        },
      },
      bindable: true,
      defaultValue: [],
      hidden: (content) => !content.advancedDates,
    },
    disabledWeekDays: {
      label: {
        en: "Disabled week days",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "TextSelect",
          options: {
            options: [
              { value: "0", label: { en: "Sunday" } },
              { value: "1", label: { en: "Monday" } },
              { value: "2", label: { en: "Tuesday" } },
              { value: "3", label: { en: "Wednesday" } },
              { value: "4", label: { en: "Thursday" } },
              { value: "5", label: { en: "Friday" } },
              { value: "6", label: { en: "Saturday" } },
            ],
          },
        },
      },

      bindable: true,
      defaultValue: [],
      hidden: (content) => !content.advancedDates,
    },
    noDisabledRange: {
      label: {
        en: "No disabled range",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content) => content.selectionMode !== "range",
    },
    /* ==== THEMING ==== */
    themeFontFamily: {
      type: "FontFamily",
      label: {
        en: "Font family",
      },
      responsive: true,
      states: true,
      classes: true,
    },
    themeFontSize: generateThemeSizingConfig("Font size", 16, 48),
    themeTimeFontSize: generateThemeSizingConfig("Time font size", 32, 48),
    themeBorderRadius: generateThemeSizingConfig("Border radius", 4, 20, true),
    themeCellBorderRadius: generateThemeSizingConfig(
      "Cell border radius",
      4,
      20,
      true
    ),
    themePreviewFontSize: generateThemeSizingConfig(
      "Preview font size",
      13,
      48,
      true
    ),
    themeMenuMinWidth: generateThemeSizingConfig(
      "Menu min width",
      250,
      300,
      true
    ),
    themeCellSize: generateThemeSizingConfig("Cell size", 35, 100, true),
    themeCellPadding: generateThemeSizingConfig("Cell padding", 5, 32, true),

    themePrimaryColor: generateThemeColorConfig("Primary Color", "#1976d2"),
    themeSecondaryColor: generateThemeColorConfig("Secondary Color", "#c0c4cc"),
    themeBackgroundColor: generateThemeColorConfig(
      "Background Color",
      "#ffffff"
    ),
    themeTextColor: generateThemeColorConfig("Text Color", "#212121"),
    themePrimaryTextColor: generateThemeColorConfig(
      "Primary Text Color",
      "#f8f5f5"
    ),
    themeHoverColor: generateThemeColorConfig("Hover Color", "#f3f3f3"),
    themeDisabledColor: generateThemeColorConfig("Disabled Color", "#f6f6f6"),
    themeHoverTextColor: generateThemeColorConfig(
      "Hover Text Color",
      "#212121",
      true
    ),
    themeHoverIconColor: generateThemeColorConfig(
      "Hover Icon Color",
      "#959595",
      true
    ),
    themeBorderColor: generateThemeColorConfig("Border Color", "#ddd", true),
    themeMenuBorderColor: generateThemeColorConfig(
      "Menu Border Color",
      "#ddd",
      true
    ),
    themeBorderHoverColor: generateThemeColorConfig(
      "Border Hover Color",
      "#aaaeb7",
      true
    ),
    themeScrollBarBackgroundColor: generateThemeColorConfig(
      "Scrollbar background Color",
      "#f3f3f3",
      true
    ),
    themeScrollBarColor: generateThemeColorConfig(
      "Scrollbar Color",
      "#959595",
      true
    ),
    themeSuccessColor: generateThemeColorConfig(
      "Success Color",
      "#76d275",
      true
    ),
    themeSuccessDisabledColor: generateThemeColorConfig(
      "Success Disabled Color",
      "#a3d9b1",
      true
    ),
    themeIconColor: generateThemeColorConfig("Icon Color", "#959595", true),
    themeDangerColor: generateThemeColorConfig("Danger Color", "#ff6f60", true),
    themeHighlightColor: generateThemeColorConfig(
      "Highlight Color",
      "#1976d219",
      true
    ),
    triggerZone: {
      hidden: true,
      defaultValue: [
        {
          isWwObject: true,
          type: "ww-text",
          state: {
            name: "Date input",
          },
        },
      ],
      navigator: {
        group: "Trigger",
      },
    },
    leftSidebarZone: {
      hidden: true,
      defaultValue: [],
      navigator: {
        group: "Left Sidebar",
      },
    },
    rightSidebarZone: {
      hidden: true,
      defaultValue: [],
      navigator: {
        group: "Right Sidebar",
      },
    },

    actionSelectElement: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "ww-button",
        state: {
          name: "Select button",
        },
        content: { default: { text: "Select" } },
      },
      navigator: {
        group: "Actions",
      },
    },
  },
};

function generateThemeColorConfig(label, defaultValue, advanced) {
  return {
    label: {
      en: label,
    },
    type: "Color",
    defaultValue: defaultValue,
    bindable: true,
    responsive: true,
    states: true,
    classes: true,
    hidden: advanced ? (content) => !content.advancedColors : undefined,
  };
}

function generateThemeSizingConfig(label, defaultValue, max, advanced) {
  return {
    type: "Length",
    label: {
      en: label,
    },
    bindable: true,
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max }],
    },
    responsive: true,
    classes: true,
    states: true,
    defaultValue: defaultValue + "px",
    hidden: advanced ? (content) => !content.advancedStyles : undefined,
  };
}
