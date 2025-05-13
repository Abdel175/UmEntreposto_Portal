export default {
    showPageLoadProgress: false,
    /*=============================================m_ÔÔ_m=============================================\
        LANG
    \================================================================================================*/
    lang: 'en',
    /*=============================================m_ÔÔ_m=============================================\
        SCREEN SIZE
    \================================================================================================*/
    screenSize: null,

    screenSizes: {
        default: {
            order: 0,
            label: {
                en: 'Desktop',
                fr: 'Ordinateur',
            },
            breakPoint: null,
            icon: '16/desktop',
            query: null,
            defaultWidth: 1100,
            defaultHeight: (1100 * 9) / 16,
        },
        tablet: {
            order: 1,
            label: {
                en: 'Tablet',
                fr: 'Tablette',
            },
            breakPoint: 991,
            icon: '16/tablet',
            query: 'max-width: 991px',
            defaultWidth: 770,
            defaultHeight: (770 * 14) / 9,
        },
        mobile: {
            order: 2,
            label: {
                en: 'Mobile',
                fr: 'Mobile',
            },
            breakPoint: 767,
            icon: '16/mobile',
            query: 'max-width: 767px',
            defaultWidth: 400,
            defaultHeight: (400 * 13) / 9,
        },
    },
    isScreenSizeActive: {},
    theme: window.localStorage?.getItem('ww-app-theme') || undefined,
    activeLinkPopup: null,
    elementStates: {},
};
