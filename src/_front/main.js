import { createApp, createSSRApp } from 'vue';
import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next';
import { isEqual, isEmpty, cloneDeep, get, set, merge } from 'lodash';

 
/* wwFront:start */
import { createHead } from '@vueuse/head';
/* wwFront:end */

import App from '@/_front/App.vue';
import router from '@/_front/router';

let store;
let pinia;
/* wwFront:start */
// Set theme class before first global context computation to avoid flickering and wrong computed colors
if (window.localStorage?.getItem('ww-app-theme') === 'dark')
    document.documentElement.classList.add('ww-app-theme-dark');
else if (window.localStorage?.getItem('ww-app-theme') === 'light')
    document.documentElement.classList.remove('ww-app-theme-dark');

import storeImport from '@/store';
import wwLibImport from '@/wwLib';
import { createPinia } from 'pinia';
store = storeImport;
pinia = createPinia();
window.wwLib = wwLibImport;

if ('serviceWorker' in navigator) {
    if (window.wwg_disableManifest) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (const registration of registrations) {
                registration.unregister();
            }
        });
    } else {
        navigator.serviceWorker.register(`serviceworker.js?_wwcv=${window.wwg_cacheVersion}`).catch(error => {
            console.error('Service worker registration failed:', error);
        });
    }
}
/* wwFront:end */
 
import wwElements from '@/_front/components/';
import { addMediaQueriesListener } from '../helpers/mediaQueriesListener';
import globalServices from '@/_common/plugins/globalServices';

 
require('@/assets/css');

//Set window libraries
window._ = {
    isEqual,
    isEmpty,
    cloneDeep,
    get,
    set,
    merge,
};
window.axios = axios.create({});

 
const app = createApp(App);

const init = async function () {
    window.vm = app;
    app.use(pinia);
    app.use(store);
    app.use(VueCookieNext);
    app.use(wwElements);
    app.use(globalServices);
    app.config.unwrapInjectedRef = true;
    /* wwFront:start */
    app.use(createHead());
    /* wwFront:end */

 
 
    await wwLib.initFront({ store, router });

    app.use(router);

    addMediaQueriesListener(wwLib.$store.getters['front/getScreenSizes'], (screenSize, isActive) => {
        wwLib.$store.dispatch('front/setIsScreenSizeActive', { screenSize, isActive });
    });

    await router.isReady();

    // We select ourself app element, because Vue does not know how to do it properly (Editor + Front Iframe)
    const el = document.getElementById('app');
    app.mount(el);

    /* wwFront:start */
    // Needed or reactivity is not working in deployed app
    wwLib.scrollStore.setValues();
    /* wwFront:end */

    wwLib.$emit('wwLib:isMounted');
    wwLib.isMounted = true;
};

init();

/* wwFront:start */
wwLib.getFrontWindow().addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    wwLib.installPwaPrompt = e;
});
/* wwFront:end */

export default app;
