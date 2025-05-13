export default {
    showPageLoadProgress(state) {
        return state.showPageLoadProgress;
    },
    getTheme(state, _getters, rootState) {
        if (state.theme === undefined) return rootState.websiteData.design?.info?.defaultTheme;
        return state.theme;
    },
    /*=============================================m_ÔÔ_m=============================================\
        LANG
    \================================================================================================*/
    getLang(state) {
        return state.lang;
    },
    /*=============================================m_ÔÔ_m=============================================\
        SCREEN SIZE
    \================================================================================================*/
    getScreenSize: state => {
        const activeScreenSizes = Object.keys(state.isScreenSizeActive)
            .filter(screenSize => state.isScreenSizeActive[screenSize])
            .map(screenSize => {
                return { name: screenSize, order: state.screenSizes[screenSize].order };
            });

        activeScreenSizes.sort(({ order: orderA }, { order: orderB }) => {
            return orderB - orderA;
        });

        return activeScreenSizes.length ? activeScreenSizes[0].name : 'default';
    },
    getScreenSizes: state => state.screenSizes,
    getActiveLinkPopup: state => state.activeLinkPopup,
};
