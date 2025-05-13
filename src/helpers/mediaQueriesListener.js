// Here we subscribe to all needed mediaQueries listeners, and return an unsubscribe function
// Callback will be call each time a size is selected
export function addMediaQueriesListener(screenSizes, onScreenSizeChange) {
    const listeners = [];

    const mediaQueryLists = Object.keys(screenSizes).map(screenSize => {
        const query = `(${screenSizes[screenSize].query || 'min-width: 0px'})`;
        return { screenSize, mediaQueryList: window.matchMedia(query) };
    });

    // We define a mediaQuery for each available size
    mediaQueryLists.forEach(({ screenSize, mediaQueryList }) => {
        if (mediaQueryList.addEventListener || mediaQueryList.addListener) {
            // We call callback only if the size is now the right one
            function onMediaQueryListChange(evt) {
                onScreenSizeChange(screenSize, evt.matches);
            }

            // On old devices, addEventListener is addListener, without 'change' parameter
            if (mediaQueryList.addEventListener) {
                mediaQueryList.addEventListener('change', onMediaQueryListChange);
            } else {
                mediaQueryList.addListener(onMediaQueryListChange);
            }

            // We remember listener to be able to remove them
            listeners.push({ listener: onMediaQueryListChange, mediaQueryList });

            // We define the initial state because mediaQuery listeners will not be called until one value changes
            onScreenSizeChange(screenSize, mediaQueryList.matches);
        }
    });

    // We return a function to remove all listeners
    return function unsubscribe() {
        listeners.forEach(({ listener, mediaQueryList }) => {
            mediaQueryList.removeEventListener(listener);
        });
    };
}
