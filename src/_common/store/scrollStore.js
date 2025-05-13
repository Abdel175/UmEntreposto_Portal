import { ref } from 'vue';
import { executeWorkflows } from '@/_common/helpers/data/workflows';

export function createScrollStore() {
    const componentPositionInfo = ref({});

    function listenPosition() {
        for (const componentId in componentPositionInfo.value) {
            try {
                const element =
                    wwLib.getFrontDocument().querySelector(`[data-ww-element][id='${componentId}']`) ||
                    wwLib.getFrontDocument().querySelector(`.ww-section-element[id='${componentId}']`);

                if (!element) {
                    if (Object.keys(componentPositionInfo.value[componentId]).length)
                        resetPositionInfo(componentPositionInfo.value[componentId]);
                    continue;
                }

                const rect = element.getBoundingClientRect();

                lazySetPositionInfo(componentId, 'x', Math.floor(rect.left));
                lazySetPositionInfo(componentId, 'y', Math.floor(rect.top));
                lazySetPositionInfo(componentId, 'width', Math.floor(rect.width));
                lazySetPositionInfo(componentId, 'height', Math.floor(rect.height));

                const innerWidth = screen.value.screenSize.width;
                const innerHeight = screen.value.screenSize.height;

                const xPercent = roundTo2(((innerWidth - rect.left) * 100) / (innerWidth + rect.width));
                const yPercent = roundTo2(((innerHeight - rect.top) * 100) / (innerHeight + rect.height));

                lazySetPositionInfo(componentId, 'xPercent', xPercent);
                lazySetPositionInfo(componentId, 'yPercent', yPercent);
            } catch (err) {
                wwLib.wwLog.error(err);
            }
        }

        requestAnimationFrame(listenPosition);
    }

    const screen = ref({
        scroll: {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
        },
        screenSize: {
            width: 0,
            height: 0,
        },
        pageSize: {
            width: 0,
            height: 0,
        },
    });

    function setScroll() {
        screen.value.scroll.x = Math.floor(wwLib.getFrontWindow().scrollX);
        screen.value.scroll.y = Math.floor(wwLib.getFrontWindow().scrollY);
    }

    function setScrollPercent() {
        screen.value.scroll.xPercent = roundTo2(
            (100 * screen.value.scroll.x) / (screen.value.pageSize.width - screen.value.screenSize.width || 1)
        );
        screen.value.scroll.yPercent = roundTo2(
            (100 * screen.value.scroll.y) / (screen.value.pageSize.height - screen.value.screenSize.height || 1)
        );
    }

    function setSize() {
        screen.value.screenSize.width = Math.floor(wwLib.getFrontWindow().innerWidth);
        screen.value.screenSize.height = Math.floor(wwLib.getFrontWindow().innerHeight);
    }

    function setPage() {
        screen.value.pageSize.width = Math.floor(wwLib.getFrontWindow().document.documentElement.scrollWidth);
        screen.value.pageSize.height = Math.floor(wwLib.getFrontWindow().document.documentElement.scrollHeight);
    }

    async function onScroll() {
        await executeWorkflows('page-scroll', {
            event: JSON.parse(JSON.stringify(screen.value)),
        });
    }

    async function onResize() {
        await executeWorkflows('page-resize', {
            event: JSON.parse(JSON.stringify(screen.value)),
        });
    }

    function lazySetPositionInfo(componentId, key, value) {
        if (componentPositionInfo.value[componentId]?.[key] !== value) {
            componentPositionInfo.value[componentId][key] = value;
        }
    }

    //ouaf
    function roundTo2(value) {
        return parseFloat(Math.floor(value * 100) / 100);
    }

    function setValues() {
        //Order is important
        setScroll();
        setSize();
        setPage();
        setScrollPercent();
    }

    return {
        screen,
        componentPositionInfo,
        setValues,
        start: () => {
            //Order is important
            setValues();

            wwLib.getFrontWindow().addEventListener('scroll', () => {
                //Order is important
                setScroll();
                setScrollPercent();
                onScroll();
            });
            wwLib.getFrontWindow().addEventListener('resize', () => {
                //Order is important
                setSize();
                setScrollPercent();
                onResize();
            });
            const pageObserver = new ResizeObserver(() => {
                //Order is important
                setPage();
                setScrollPercent();
            });
            pageObserver.observe(wwLib.getFrontWindow().document.documentElement);

            listenPosition();
        },
    };
}

function resetPositionInfo(positionInfoValue) {
    for (const key in positionInfoValue) delete positionInfoValue[key];
}
