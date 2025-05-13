 
export default {
    async init() {
        /* wwFront:start */
        const designInfo = wwLib.getFrontWindow().wwg_designInfo;
        await wwLib.$store.dispatch('websiteData/setFullDesign', designInfo);
        /* wwFront:end */
     },

    async fetchPage(pageId) {
 
        wwLib.logStore.verbose(`Loading page: _wwPage(${pageId})...`);

 
        await fetchData(pageId);

        wwLib.logStore.verbose('Page loaded');
    },

    getPageRoute(pageIdOrLinkId, allowHomePageId) {
        const pages = this.getPages();
        const info = this.getInfo();
        for (const page of pages) {
            if (page.linkId == pageIdOrLinkId || page.id == pageIdOrLinkId) {
                if (allowHomePageId && page.id == info.homePageId) {
                    return '';
                }
                return page.paths[wwLib.wwLang.lang];
            }
        }
        return '';
    },

 
    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    getWebsiteName() {
        wwLib.wwLog.warn('wwUtils.wwWebsiteData.getWebsiteName is deprecated');
        return wwLib.$store.getters['websiteData/getDesignInfo'].name;
    },

    /**
     * @PUBLIC_API
     */
    getDesign() {
        return wwLib.$store.getters['websiteData/getDesign'] || null;
    },

    /**
     * @PUBLIC_API
     */
    getInfo() {
        const design = this.getDesign();
        return design.info;
    },

    /**
     * @PUBLIC_API
     */
    getPages() {
        const design = this.getDesign();
        return design.pages;
    },

    /**
     * @PUBLIC_API
     */
    getCurrentPage() {
        return wwLib.$store.getters['websiteData/getPage'];
    },

    /**
     * @PUBLIC_API
     */
    getCurrentPageId() {
        return wwLib.$store.getters['websiteData/getPageId'];
    },
};

async function fetchData(pageId) {
    if (!pageId) return;

    let page;

    /* wwFront:start */
    try {
        const lang = window.location.pathname.startsWith(`/${wwLib.wwLang.lang}/`) ? wwLib.wwLang.lang : '';
        const base = wwLib.useBaseTag() ? wwLib.getBaseTag() : '/';
        let url = `${base}public/data/${pageId.split('_')[0]}.json?wwlang=${lang}&_wwcv=${window.wwg_cacheVersion}`;

        const {
            data: {
                cacheVersion,
                page: pageData,
                sections,
                wwObjects,
                collections,
                variables,
                formulas,
                workflows,
                libraryComponents,
            },
        } = await axios.get(url);

        //data.json contains a different cacheVersion
        //due to a deploy before the navigation
        if (cacheVersion != window.wwg_cacheVersion) {
            throw { reloadUrl: true };
        }

        if (pageData.cmsDataSetPath) {
            url = `${base}public/data/${pageId}.json?wwlang=${lang}&_wwcv=${window.wwg_cacheVersion}`;

            const {
                data: { page: pageIndexData },
            } = await axios.get(url);

            for (const key in pageIndexData) {
                pageData[key] = pageIndexData[key];
            }
        }

        if (collections) {
            const promises = [];
            for (const collection of Object.values(collections).filter(collection => collection.mode === 'static')) {
                if (!wwLib.$store.getters['data/getCollections'][collection.id])
                    promises.push(
                        axios
                            .get(`/public/collections/${collection.id}.json?_wwcv=${window.wwg_cacheVersion}`)
                            .then(({ data }) => (collection.data = data))
                            .catch(err => wwLib.wwLog.error(err))
                    );
            }
            await Promise.all(promises);
        }
        page = { page: pageData, sections, wwObjects };

        await wwLib.$store.dispatch('websiteData/setAllData', {
            page,
            collections,
            variables,
            formulas,
            workflows,
            libraryComponents,
        });
    } catch (err) {
        throw { redirectUrl: err.response.data.redirectUrl };
    }
    /* wwFront:end */

 
    // eslint-disable-next-line vue/custom-event-name-casing
    wwLib.$emit('wwStore:dataLoaded');
}
