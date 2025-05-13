export async function fetchStaticCollectionsData() {
    const collectionsToFetch = Object.values(wwLib.$store.getters['data/getCollections']).filter(
        collection => collection.mode === 'static'
    );
    await Promise.all(collectionsToFetch.map(cmsDataSet => wwLib.wwCollection.fetchCollection(cmsDataSet.id)));
}

export async function fetchNonStaticCollectionsData() {
     /* wwFront:start */
    await _fetchNonStaticCollectionsData(Object.values(wwLib.$store.getters['data/getCollections']));
    /* wwFront:end */
}

export async function _fetchNonStaticCollectionsData(allCollections) {
    const collectionsToFetch = allCollections.filter(collection => {
        const _collection = wwLib.$store.getters['data/getCollections'][collection.id];
        return _collection.mode !== 'static' && !_collection.isFetched && _collection.config.isAutoFetch;
    });
    const collections = collectionsToFetch.filter(collection => {
        const collectionStr = JSON.stringify(collection);
        return !collectionsToFetch
            .filter(item => item.id !== collection.id)
            .find(item => collectionStr.includes(item.id));
    });
    if (!collections.length) return;

    await Promise.all(collections.map(async collection => wwLib.wwCollection.fetchCollection(collection.id)));

    await _fetchNonStaticCollectionsData(allCollections);
}

export function resetCollections(resetPersistant) {
    const collections = Object.values(wwLib.$store.getters['data/getCollections']);
    for (const collection of collections) {
        if (collection.mode === 'static') continue;
        wwLib.$store.dispatch('data/setCollectionFetching', {
            id: collection.id,
            isFetching: false,
            isFetched: collection.isFetched,
        });
        if (
            !resetPersistant &&
            collection.config &&
            collection.config.isPersistentOnNav &&
            (collection.isFetched || collection.isFetching)
        )
            continue;
        wwLib.$store.dispatch('data/setCollection', {
            ...collection,
            data: collection.type === 'collection' ? [] : {},
            total: 0,
        });
        wwLib.$store.dispatch('data/setCollectionFetching', { id: collection.id, isFetching: false, isFetched: false });
    }
}

 