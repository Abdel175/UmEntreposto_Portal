import { resetCollections, fetchNonStaticCollectionsData } from './collections';
import { executeWorkflows, resetWorkflows } from './workflows';
import { useVariablesStore } from '@/pinia/variables.js';

 
let isFirstLoad = true;
const beforeUnload = () => {
    executeWorkflows('page-unload');
};

let isPluginsInitialized = false;
export async function initializePlugins() {
    if (isPluginsInitialized) return;
    isPluginsInitialized = true;
    wwLib.logStore.verbose('Initializing plugins...');
    await wwLib.wwPluginHelper.initPlugins();
    wwLib.logStore.verbose('Plugins loaded!');
}

export async function initializeData(toRoute, forceReset = false) {
    const variablesStore = useVariablesStore(wwLib.$pinia);
    wwLib.logStore.verbose('Loading page data...');
    const resetPersistant = isFirstLoad || forceReset;
    isFirstLoad = false;

    wwLib.$store.dispatch('front/showPageLoadProgress', false);

    /*=================================/
    / RESET & INIT                     /
    /=================================*/
    await wwLib.wwAuth.init();
    resetCollections(resetPersistant);
    resetWorkflows();
    wwLib.logStore.verbose('Reset variables...');
    variablesStore.resetVariables(toRoute, resetPersistant);
    if (forceReset) {
        wwLib.$emit('reset-library-variables');
    }

    /*=================================/
    / ONLOAD BEFORE FETCH              /
    /=================================*/
    if (resetPersistant) {
        wwLib.logStore.verbose('Executing before collection fetch app workflows...');
        await executeWorkflows('before-collection-fetch-app');
        wwLib.logStore.verbose('Before collection fetch app workflows done!');
    }
    wwLib.logStore.verbose('Executing before collection fetch workflows...');
    await executeWorkflows('before-collection-fetch');
    wwLib.logStore.verbose('Before collection fetch workflows done!');

    /*=================================/
    / FETCH COLLECTIONS                /
    /=================================*/
    wwLib.logStore.verbose('Fetching static collections data...', { type: 'collections' });
    await fetchNonStaticCollectionsData();
    wwLib.logStore.verbose('Static collections fetched!', { type: 'collections' });

    /*=================================/
    / ONLOAD AFTER FETCH               /
    /=================================*/
    if (resetPersistant) {
        wwLib.logStore.verbose('Executing app load workflows...');
        await executeWorkflows('onload-app');
        wwLib.logStore.verbose('App load workflows done!');
    }
    wwLib.logStore.verbose('Executing on load workflows...');
    await executeWorkflows('onload');
    wwLib.logStore.verbose('On load workflows done!');

    /*=================================/
    / SETUP UNLOAD EVENT               /
    /=================================*/
    /* wwFront:start */
    //Remove listener before adding it to be sure it's called only once
    wwLib.getFrontWindow().removeEventListener('beforeunload', beforeUnload);
    wwLib.getFrontWindow().addEventListener('beforeunload', beforeUnload);
    /* wwFront:end */
}

export async function onPageUnload() {
    wwLib.logStore.verbose('Executing page unload workflows...');
    await executeWorkflows('page-unload');
    wwLib.logStore.verbose('Page unload workflows done!');
}

 