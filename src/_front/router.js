import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"dcd951ac-069a-4051-9c64-5b3e0812549f","homePageId":"b4308a31-2b68-4b0d-9073-dfd5328f7b20","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"pt","default":true,"isDefaultPath":false}],"background":{},"workflows":[],"pages":[{"id":"7c2dd11c-73f4-4d8a-bfce-5f3340ababed","linkId":"7c2dd11c-73f4-4d8a-bfce-5f3340ababed","name":"Login","folder":null,"paths":{"pt":"login","default":"login"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"bc5e5b5e-b9cb-48a8-9f2e-f2943ec37684","sectionTitle":"Main Container","linkId":"8a8e65b1-c279-412b-880b-a29276004ba7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"910788f2-9a16-4fdd-b73a-4090ef2c34bd","linkId":"910788f2-9a16-4fdd-b73a-4090ef2c34bd","name":"cadastro_tipo","folder":null,"paths":{"pt":"cadastro_tipo","default":"cadastro_tipo"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"b63e8525-9e51-4510-8171-bf129f9c8b6b","sectionTitle":"Header Section","linkId":"24d91548-1cc1-42f6-a136-eb85071801aa"},{"uid":"4a78b3aa-8c11-43e0-8ad5-97de2c04de62","sectionTitle":"Main Content Section","linkId":"dfcc878d-56dc-418c-ba80-b07fec7ecd7a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8756bded-6dc4-412c-a3e9-dd904eb141ad","linkId":"8756bded-6dc4-412c-a3e9-dd904eb141ad","name":"orcamento_detail","folder":null,"paths":{"pt":"orcamento_detail","default":"orcamento_detail"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"598d306f-9d5b-4f14-b06a-3322942c5b8e","sectionTitle":"Main Content Section","linkId":"57c254ec-8895-429a-b9c4-10956bd961f3"},{"uid":"d1f8ac42-7c2e-4676-8716-cf429825828a","sectionTitle":"Sidenav Section","linkId":"c1cf307d-4180-43cc-867e-f8e66b514e08"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b0e733bd-6221-4299-a854-53078ca82a15","linkId":"b0e733bd-6221-4299-a854-53078ca82a15","name":"Catalogo 2","folder":null,"paths":{"pt":"home-copy","default":"home-copy"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"fa7e86ad-262c-4124-87be-4312245b37a5","sectionTitle":"Sidemenu","linkId":"bd3ba79e-0e8f-43a9-b663-ea267c44a263"},{"uid":"aa5cc151-9bf2-4382-a969-9984387d0c8f","sectionTitle":"Container","linkId":"b3e5dd27-4d76-4f19-8c69-143d23f40428"},{"uid":"6bf4bc66-1dfb-4027-a801-7294a956cc55","sectionTitle":"Bottom Nav","linkId":"ab1c87dc-1301-4c53-a213-818683e164ec"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b4308a31-2b68-4b0d-9073-dfd5328f7b20","linkId":"b4308a31-2b68-4b0d-9073-dfd5328f7b20","name":"Catalogo","folder":null,"paths":{"en":"home","default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"fa7e86ad-262c-4124-87be-4312245b37a5","sectionTitle":"Sidemenu","linkId":"bd3ba79e-0e8f-43a9-b663-ea267c44a263"},{"uid":"aa5cc151-9bf2-4382-a969-9984387d0c8f","sectionTitle":"Container","linkId":"b3e5dd27-4d76-4f19-8c69-143d23f40428"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cf822164-42d1-400d-a067-80f681e68695","linkId":"cf822164-42d1-400d-a067-80f681e68695","name":"Login2","folder":null,"paths":{"pt":"login2","default":"login2"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"89805f27-171f-4405-9b7b-f4046329031e","sectionTitle":"Login","linkId":"22481181-5748-49ed-a42e-6df2cb6631f5"},{"uid":"c71b5754-21dc-4adf-a2b6-18a36402efa5","sectionTitle":"MainSection","linkId":"6f0c8c26-1a62-49be-8da0-3e37704f1017"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 12;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
