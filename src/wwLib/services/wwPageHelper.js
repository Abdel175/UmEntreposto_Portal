import { createRouter, createWebHistory } from 'vue-router';
import { getKeyValue } from 'lodash';

export default {
    /**
     * @PUBLIC_API
     */
    getPagePath(pageId, lang = wwLib.wwLang.lang) {
        const website = wwLib.wwWebsiteData.getInfo();
        if (!website) throw new Error('Project not found.');

        let base = '/';

        const langFound = website.langs.find(websiteLang => websiteLang.lang === lang);
        if (!langFound) throw new Error('Lang not found.');

        const page = wwLib.wwWebsiteData.getPages().find(page => page.id === pageId || page.linkId === pageId);
        if (!page) throw new Error('Page not found.');

        const isHomePage = page && page.id === website.homePageId;

        const path = `${base}${langFound.default && !langFound.isDefaultPath ? '' : `${lang}/`}${
            isHomePage ? '' : page.paths[lang] || page.paths.default
        }`;

        return path.endsWith('/') ? path : `${path}/`;
    },

    guessPage(path) {
        const router = generateTmpRouter();
        const guess = router.resolve(path);
        return guess
            ? { pageId: guess.name.split('_')[1], params: guess.params, collectionIndex: guess.name.split('_')[3] }
            : null;
    },
};

function generateTmpRouter() {
    const routes = [];
    for (const page of wwLib.wwWebsiteData.getPages()) {
        Object.keys(page.paths).forEach(lang => {
            if (page.cmsDataSetPath) {
                const data = getKeyValue(wwLib.$store.getters['data/getCollections'], page.cmsDataSetPath);
                data.forEach((data, index) => {
                    const slugPath = page.paths[lang].match(/{{__wwPage\.data\.(\w+)}}/)[1];
                    const path = getKeyValue(data, slugPath)
                        .toLowerCase()
                        .replace(/[^a-z0-9\\_\-\/]+/g, '_');
                    routes.push({
                        name: `page_${page.id}_${lang}_${index}`,
                        path: (lang === 'default' ? '' : '/' + lang) + '/' + path,
                    });
                });
            } else {
                routes.push({
                    name: `page_${page.id}_${lang}`,
                    path:
                        (lang === 'default' ? '' : '/' + lang) +
                        '/' +
                        page.paths[lang].replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1'),
                });
            }
        });
    }
    return createRouter({ routes, history: createWebHistory() });
}
