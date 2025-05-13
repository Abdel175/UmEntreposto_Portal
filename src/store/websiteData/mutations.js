 
import { getPath } from '@/_common/helpers/pathResolver';

export default {
    /*=============================================m_ÔÔ_m=============================================\
        DESIGN
    \================================================================================================*/
    setFullDesign(state, designInfo) {
        state.design.info = { ...designInfo, pages: undefined, plugins: undefined };

        for (let page of designInfo.pages) {
            state.design.pages.push(page);
        }
    },
    updateDesignInfo(state, designInfo) {
        state.design.info = { ...designInfo, _isFromSocket: undefined };
    },
    setFonts(state, fonts) {
        state.design.info.fonts = fonts;
    },
 
    /*=============================================m_ÔÔ_m=============================================\
        PAGE
    \================================================================================================*/
    setPageData(state, data) {
        for (const sectionId in data.sections) {
            if (!state.sections[sectionId]) state.sections[sectionId] = data.sections[sectionId];
        }
        for (const wwObjectId in data.wwObjects) {
            if (!state.wwObjects[wwObjectId]) state.wwObjects[wwObjectId] = data.wwObjects[wwObjectId];
        }

        this.commit('websiteData/setPageId', data.page.id);

        for (const page of state.design.pages) {
            if (page.id === data.page.id) {
                /* wwFront:start */
                for (const key in data.page) {
                    page[key] = data.page[key];
                }
                /* wwFront:end */
                page.pageLoaded = true;
            } else {
                page.pageLoaded = false;
            }
        }

        for (const sectionId in state.sections) {
            if (!data.sections[sectionId]) delete state.sections[sectionId];
        }
        for (const wwObjectId in state.wwObjects) {
            if (state.wwObjects[wwObjectId].parentSectionId && !data.wwObjects[wwObjectId])
                delete state.wwObjects[wwObjectId];
        }
    },
    setPageId(state, id) {
        state.pageId = id;
    },
 
 
    /*=============================================m_ÔÔ_m=============================================\
        PLUGINS
    \================================================================================================*/
    addPlugin(state, plugin) {
        const pluginIndexFound = state.plugins.findIndex(elem => elem.name === plugin.name);
        if (pluginIndexFound !== -1) {
            const pluginFound = state.plugins[pluginIndexFound];
            const pluginMerge = pluginFound.isDev ? { ...pluginFound, ...plugin } : { ...plugin, ...pluginFound };
            state.plugins.splice(pluginIndexFound, 1, pluginMerge);
        } else {
            state.plugins.push({
                id: plugin.id,
                isDev: plugin.isDev,
                isLoaded: plugin.isLoaded,
                name: plugin.name,
                namespace: plugin.namespace,
                settings: plugin.settings,
             });
        }
    },
    updatePlugin(state, { pluginId, settings, isDev, isLoaded }) {
        const plugin = state.plugins.find(plugin => plugin.namespace === pluginId || plugin.id === pluginId);
        if (!plugin) return;
        if (settings) plugin.settings = settings;
        if (typeof isDev === 'boolean') plugin.isDev = isDev;
        if (typeof isLoaded === 'boolean') plugin.isLoaded = isLoaded;
    },
};
