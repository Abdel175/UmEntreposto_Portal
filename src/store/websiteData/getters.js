import utils from './utils';
 
export default {
    /*=============================================m_ÔÔ_m=============================================\
        DESIGN
    \================================================================================================*/
    getDesign(state) {
        if (!state.design) {
            return null;
        }

        return state.design;
    },
    getDesignInfo(state) {
        if (!state.design || !state.design.info) {
            return {};
        }

        return state.design.info;
    },
 
    /*=============================================m_ÔÔ_m=============================================\
        PAGES
    \================================================================================================*/
    getPages(state) {
         // eslint-disable-next-line no-unreachable
        return state.design.pages;
    },
     getPage: state => state.design.pages.find(page => page.id === state.pageId),
    getPageById: state => id => state.design.pages.find(page => page.id === id),
    getPageByLinkId: state => linkId => state.design.pages.find(page => page.linkId === linkId || page.id === linkId),
    getFullPage(state) {
        return utils.getFullPage(state);
    },
    getPageId(state) {
        return state.pageId;
    },

    /*=============================================m_ÔÔ_m=============================================\
        WWOBJECTS
    \================================================================================================*/
    getComponentAvailableStates:
        state =>
        ({ type, uid }) => {
            let _state;
            if (type === 'section') {
                _state = (state.sections[uid] && state.sections[uid]._state) || {};
            } else {
                _state = (state.wwObjects[uid] && state.wwObjects[uid]._state) || {};
            }
            return (_state.states || []).map(state => state.id);
        },
    getComponentRawStates:
        state =>
        ({ type, uid }) => {
            let _state;
            if (type === 'section') {
                _state = (state.sections[uid] && state.sections[uid]._state) || {};
            } else {
                _state = (state.wwObjects[uid] && state.wwObjects[uid]._state) || {};
            }
            return _state.states || [];
        },
    getWwObjectStyle: state => id => {
        const { _state = {} } = state.wwObjects[id] || {};
        return _state.style || {};
    },
    getFullWwObject:
        state =>
        (uid, asTemplate = false) => {
            return utils.parseFullObject(state, { uid, isWwObject: true }, asTemplate);
        },
    getWwObjects(state) {
        return state.wwObjects;
    },
    getWwObjectContext(state) {
        return state.wwObjectContext;
    },
    /*=============================================m_ÔÔ_m=============================================\
      SECTIONS
    \================================================================================================*/
    getSectionTitle: state => uid => {
        return state.design.pages
            .map(page => page.sections || [])
            .flat()
            .find(section => section.uid === uid)?.sectionTitle;
    },
    getSectionState: state => id => {
        const { _state } = state.sections[id] || {};
        return _state || {};
    },
    getFullSection(state) {
        return function (sectionId) {
            if (state.sections[sectionId]) {
                let section = _.cloneDeep(state.sections[sectionId]);
                return utils.parseFullObject(state, section);
            }
            return null;
        };
    },
    getSections: state => state.sections,
    getIsSectionLinked: state => sectionId =>
        state.design.pages
            .map(page => page.sections || [])
            .flat()
            .filter(section => section.uid === sectionId).length > 1,
    /*=============================================m_ÔÔ_m=============================================\
        PLUGINS
    \================================================================================================*/
    getPlugins: state => state.plugins,
     getPluginByComponentId: state => componentId =>
        state.plugins.find(plugin => plugin.id && `plugin-${plugin.id}` === componentId),
    getPluginByName: state => name => state.plugins.find(plugin => plugin.namespace === name),
    getPluginById: state => id => state.plugins.find(plugin => id && plugin.id === id),
    getAuthPlugin: state => {
        return state.plugins.find(plugin => plugin.id === state.design?.info?.authPluginId);
    },
    getPluginSettings: (_, getters) => id => {
        const plugin = getters.getPluginById(id);
        return plugin && plugin.settings;
    },
    getPluginIsLoaded: (_, getters) => id => {
        const plugin = getters.getPluginById(id);
        return plugin && plugin.isLoaded;
    },
};
