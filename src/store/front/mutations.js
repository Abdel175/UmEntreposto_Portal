export default {
    showPageLoadProgress(state, showPageLoadProgress) {
        state.showPageLoadProgress = showPageLoadProgress;
    },
    setTheme(state, theme) {
        state.theme = theme;
    },
    /*=============================================m_ÔÔ_m=============================================\
        LANG
    \================================================================================================*/
    setLang(state, newLang) {
         state.lang = newLang;
    },
    /*=============================================m_ÔÔ_m=============================================\
        SCREEN SIZE
    \================================================================================================*/
    setIsScreenSizeActive(state, { screenSize, isActive }) {
        state.isScreenSizeActive[screenSize] = !!isActive;
    },
    setActiveLinkPopup(state, options) {
        const { content, background, sectionId } = options || {};
        state.activeLinkPopup = options ? { content, background, sectionId } : null;
    },
};
