export default {
    /**
     * @PUBLIC_API
     */
    scrollIntoView(element, options = {}) {
        options = { left: 0, offset: 0, behavior: 'smooth', ...options };
        const rect = element.getBoundingClientRect();

        wwLib
            .getFrontDocument()
            .querySelector('html')
            .scrollTo({
                top: rect.top + wwLib.getFrontWindow().scrollY - options.offset,
                behavior: options.behavior,
            });
    },

    /**
     * @PUBLIC_API
     */
    addScriptToHead(scriptUrl, attributes = {}, options = {}) {
        options = { once: true, editor: false, ...options };
        if (!scriptUrl) {
            return;
        }
        return new Promise(function (resolve, reject) {
            try {
                const scriptAlreadyInDom = wwLib.getFrontDocument().head.querySelector(`script[src="${scriptUrl}"]`);

                // Get or create unique script id
                let uniqueId;
                if (scriptAlreadyInDom && options.once) {
                    uniqueId = scriptAlreadyInDom.getAttribute('id');
                    return resolve();
                } else {
                    uniqueId = wwLib.wwUtils.getUid();

                    let styleToAdd = createScript(wwLib.getFrontDocument(), {
                        id: uniqueId,
                        type: 'text/javascript',
                        src: scriptUrl,
                        ...attributes,
                    });

                    styleToAdd.onload = function () {
                        wwLib.$emit('wwUtils:newStyle-' + uniqueId);
                        return resolve();
                    };
                    styleToAdd.onerror = function () {
                        return reject();
                    };
                    wwLib.getFrontDocument().head.appendChild(styleToAdd);

                 }
            } catch (e) {
                return reject(e);
            }
        });
    },

    /**
     * @PUBLIC_API
     */
    addStyleSheetToHead(styleUrl, attributes = {}, options = {}) {
        options = { editor: false, ...options };
        if (!styleUrl) {
            return;
        }
        return new Promise(function (resolve, reject) {
            try {
                const styleAlreadyInDom = wwLib.getFrontDocument().querySelector(`link[href="${styleUrl}"]`);
                // Get or create unique script id
                let uniqueId;
                if (styleAlreadyInDom) {
                    uniqueId = styleAlreadyInDom.getAttribute('id');
                    return resolve();
                } else {
                    uniqueId = wwLib.wwUtils.getUid();
                    let styleToAdd = wwLib.getFrontDocument().createElement('link');
                    styleToAdd.onload = function () {
                        wwLib.$emit('wwUtils:newStyle-' + uniqueId);
                        return resolve();
                    };
                    styleToAdd.onerror = function () {
                        return reject();
                    };
                    styleToAdd.setAttribute('href', styleUrl);
                    styleToAdd.setAttribute('id', uniqueId);
                    styleToAdd.setAttribute('rel', 'stylesheet');
                    for (const attribute in attributes) {
                        styleToAdd.setAttribute(attribute, attributes[attribute]);
                    }
                    wwLib.getFrontDocument().head.appendChild(styleToAdd);

                 }
            } catch (e) {
                return reject();
            }
        });
    },

    /**
     * @PUBLIC_API
     */
    goTo(route, query = {}, options = {}) {
 
        /* wwFront:start */
        //Add leading '/'
        if (route && typeof route === 'string' && !route.startsWith('/')) {
            route = `/${route}`;
        }

        //Add trailling '/'
        if (route && typeof route === 'string' && !route.endsWith('/')) {
            route = `${route}/`;
        }

        route = wwLib.getFrontRouter().resolve({ path: route, query, hash: options.hash });
        if (options && options.openInNewTab) window.open(route.href, '_blank').focus();
        //Prevent page change if same page
        else if (route.href === wwLib.getFrontRouter().currentRoute.value.href && !options.hash) return;
        else {
            wwLib.getFrontRouter().push(route);
            if (route.name === wwLib.getFrontRouter().currentRoute.value.name && options.hash) {
                const section = wwLib.getFrontDocument().getElementById(options.hash.replace('#', ''));
                section
                    ? wwLib.wwApp.scrollIntoView(section)
                    : wwLib.getFrontWindow().scroll({
                          top: 0,
                          left: 0,
                          behavior: 'smooth',
                      });
            }
        }
        /* wwFront:end */
    },
};

function createScript(document, attributes = {}) {
    const scriptEl = document.createElement('script');
    Object.keys(attributes).forEach(attr => scriptEl.setAttribute(attr, attributes[attr]));
    return scriptEl;
}
