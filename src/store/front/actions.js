export default {
    showPageLoadProgress({ commit }, showPageLoadProgress) {
        commit('showPageLoadProgress', showPageLoadProgress);
    },
    setTheme({ commit }, theme) {
        commit('setTheme', theme);

        let themeItemName = 'ww-app-theme';
         if (window.localStorage) window.localStorage.setItem(themeItemName, theme);
    },
    /*=============================================m_ÔÔ_m=============================================\
        LANG
    \================================================================================================*/
    setLang({ commit }, newLang) {
        commit('setLang', newLang);
    },
    /*=============================================m_ÔÔ_m=============================================\
        SCREEN SIZE
    \================================================================================================*/
    setIsScreenSizeActive({ commit }, { screenSize, isActive }) {
        commit('setIsScreenSizeActive', { screenSize, isActive });
    },
    setActiveLinkPopup({ commit }, { content, background, sectionId }) {
        commit('setActiveLinkPopup', { content, background, sectionId });
    },
    closeActiveLinkPopup({ commit }) {
        commit('setActiveLinkPopup', null);
    },
};
