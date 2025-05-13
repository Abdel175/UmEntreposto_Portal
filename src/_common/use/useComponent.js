import { get } from 'lodash';
import { computed, reactive, inject, provide, watch, ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

import { getComponentConfiguration } from '@/_common/helpers/component/component.js';
import { STYLE_CONFIGURATION, STATE_CONFIGURATION } from '@/_common/helpers/configuration/configurationCommon.js';
import { getValue } from '@/_common/helpers/code/customCode.js';
import { executeWorkflow } from '@/_common/helpers/code/workflows.js';
import { getComponentRawProperty } from '@/_common/helpers/component/componentProperty.js';
import { lazySet } from '@/_common/helpers/reactivity.js';

export function useComponentData({
    type,
    uid,
    componentId,
    currentStates,
    context = {},
    libraryComponentDataRef,
    wwProps = {},
 }) {
    let content = {};
    let rawContent = {};
    let sidepanelContent = reactive({
        content: {},
        _state: {
            style: {},
        },
    });
    let style = {};
    let rawStyle = {};
    let rawState = {};
    let state = {};

 
    const configuration = getComponentConfiguration(type, uid);
    const component = computed(() =>
        type === 'section'
            ? wwLib.$store.getters['websiteData/getSections'][uid]
            : wwLib.$store.getters['websiteData/getWwObjects'][uid]
    );
    const layers = inject('_wwLibraryComponentLayers', {});

    for (let propertyName in configuration.properties) {
        const propertyConfiguration = configuration.properties[propertyName];
        if (!propertyConfiguration.editorOnly) {
            setContentProperty(propertyName, propertyConfiguration, {
                component,
                currentStates,
                libraryComponentDataRef,
                 context,
                content,
                rawContent,
                layers,
            });
         }
    }

    for (let propertyName in STYLE_CONFIGURATION) {
        if (
            STYLE_CONFIGURATION[propertyName].componentType &&
            STYLE_CONFIGURATION[propertyName].componentType !== type
        ) {
            continue;
        }
        if (!STYLE_CONFIGURATION[propertyName].editorOnly) {
            const rawProperty = computed(() =>
                getComponentRawProperty({
                    dataRef: component,
                    prefix: '_state.style',
                    suffix: propertyName,
                    propertyConfiguration: STYLE_CONFIGURATION[propertyName],
                    statesRef: currentStates,
                    libraryComponentDataRef,
                 })
            );
            const property = computed(() =>
                getValue(rawProperty.value, context, {
                    defaultUndefined: STYLE_CONFIGURATION[propertyName].fallbackToDefault
                        ? STYLE_CONFIGURATION[propertyName].defaultValue
                        : STYLE_CONFIGURATION[propertyName].defaultUndefined,
                })
            );
            // eslint-disable-next-line vue/no-ref-as-operand
            style[propertyName] = property;
            rawStyle[propertyName] = rawProperty;
         }
    }
    for (const propertyName in STATE_CONFIGURATION) {
        if (propertyName === 'interactions') {
            const rawProperty = computed(() => component.value?._state.interactions);
            // eslint-disable-next-line vue/no-ref-as-operand
            state.interactions = rawProperty;
            // eslint-disable-next-line vue/no-ref-as-operand
            rawState.interactions = rawProperty;
        } else if (!STATE_CONFIGURATION[propertyName].editorOnly) {
            const rawProperty = computed(() =>
                getComponentRawProperty({
                    dataRef: component,
                    prefix: '_state',
                    suffix: propertyName,
                    propertyConfiguration: STATE_CONFIGURATION[propertyName],
                    statesRef: currentStates,
                    libraryComponentDataRef,
                 })
            );
            const property = computed(() =>
                getValue(rawProperty.value, context, {
                    defaultUndefined: STATE_CONFIGURATION[propertyName].fallbackToDefault
                        ? STATE_CONFIGURATION[propertyName].defaultValue
                        : STATE_CONFIGURATION[propertyName].defaultUndefined,
                })
            );
            // eslint-disable-next-line vue/no-ref-as-operand
            state[propertyName] = property;
            rawState[propertyName] = rawProperty;
         }
    }

    if (type === 'libraryComponent') {
        const rawProperty = computed(() => component.value?.content?.default?.childrenData || {});
        // eslint-disable-next-line vue/no-ref-as-operand
        content.childrenData = rawProperty;
        // eslint-disable-next-line vue/no-ref-as-operand
        rawContent.childrenData = rawProperty;
    }

    content = reactive(content);
    style = reactive(style);
    rawContent = reactive(rawContent);
    rawStyle = reactive(rawStyle);
    rawState = reactive(rawState);
    state = reactive(state);

 
    if (type === 'libraryComponent') {
        // TODO ?
    } else {
        provide('componentContent', content);
        provide('componentState', state);
        provide('componentStyle', style);
        provide('componentRawContent', rawContent);
        provide('componentConfiguration', configuration);
        provide('componentData', component);
        provide('componentWwProps', wwProps);
    }

    return {
        content,
         style,
        state,
        rawContent,
        rawStyle,
        rawState,
        name: computed(() => component.value && component.value.name),
        configuration,
    };
}

export function useParentContentProperty(path) {
    const componentContent = inject('componentContent');
    const componentRawContent = inject('componentRawContent');

    return {
        property: computed(() => get(componentContent, path.value)),
        rawProperty: computed(() => get(componentRawContent, path.value)),
    };
}

const LOG_TYPE = {
    section: 's',
    element: 'e',
    libraryComponent: 'c',
};

export function useComponentTriggerEvent(
    {
        state,
        componentIdentifier,
        triggerLibraryComponentEvent,
        triggerParentEvent,
        parentInteractionsRef,
        isRenderingRef,
        rootElementRef,
        extraListeners = {},
    },
    context = {}
) {
    const data = inject('componentData', ref({}));

 
    function triggerEvent(name, event = {}) {
         const workflows = (state.interactions || []).filter(({ trigger }) => trigger === name);

        // Launch all workflows in parallel
        workflows.forEach(workflow => {
            executeWorkflow(workflow, {
                context,
                event,
                executionContext: {
                    type: LOG_TYPE[componentIdentifier.type],
                    uid: componentIdentifier.uid,
                 },
            });
        });
    }

    if (componentIdentifier.type === 'libraryComponent') {
        return { triggerEvent };
    }
    const listeners = computed(() => {
        const allActionEvents = [
            ...new Set(
                [...(state.interactions || []), ...(parentInteractionsRef?.value || [])].map(({ trigger }) => trigger)
            ),
        ];
        const allEvents = allActionEvents
            .filter((item, pos) => item && allActionEvents.indexOf(item) === pos)
            .filter(eventName =>
                [
                    'click',
                    'dblclick',
                    'contextmenu',
                    'mousedown',
                    'mouseup',
                    'mousemove',
                    'mouseenter',
                    'mouseleave',
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel',
                    'scroll',
                ].includes(eventName)
            );

        const listeners = {};

        for (const eventName of allEvents) {
            listeners[`on${eventName[0].toUpperCase()}${eventName.substr(1)}`] = event => {
                if (eventName === 'contextmenu') event.preventDefault();
                // Trigger define on the library component instance level
                if (triggerParentEvent) {
                    triggerParentEvent(eventName, event);
                }
                triggerEvent(eventName, event);
            };
        }

        for (const [eventName, listener] of Object.entries(extraListeners)) {
            const tmp = listeners[eventName];
            listeners[eventName] = event => {
                listener(event);
                tmp?.(event);
            };
        }
        return listeners;
    });

    function triggerLifecycleEvent(eventName) {
        // Mount define on the library component level
        if (triggerLibraryComponentEvent) {
            triggerLibraryComponentEvent(eventName, {});
        }
        // Mount define in the library component instance level
        if (triggerParentEvent) {
            triggerParentEvent(eventName, {});
        }
        // Mount define by the element itself
        triggerEvent(eventName, {});
    }

    watch(isRenderingRef, (isRendered, wasRendered) => {
        if (isRendered && !wasRendered) {
            // Next tick to ensure that the component is fully rendered
            nextTick(() => triggerLifecycleEvent('_wwOnMounted'));
        } else if (!isRendered && wasRendered) {
            triggerLifecycleEvent('_wwOnBeforeUnmount');
        }
    });

    const scrollListener = event => {
        triggerEvent('scroll', event);
    };

    if (rootElementRef) {
        // TODO: Verify if works with library components
        watch(rootElementRef, () => {
            if (rootElementRef?.value?.$el) {
                rootElementRef.value.$el.removeEventListener('scroll', scrollListener);
                rootElementRef.value.$el.addEventListener('scroll', scrollListener);
            }
        });
    }

    triggerLifecycleEvent('_wwOnCreated');

    onMounted(() => {
        if (isRenderingRef.value) {
            triggerLifecycleEvent('_wwOnMounted');
        }
    });

    onBeforeUnmount(() => {
        if (isRenderingRef.value) {
            triggerLifecycleEvent('_wwOnBeforeUnmount');
        }

        if (rootElementRef?.value?.$el) {
            rootElementRef?.value?.$el.removeEventListener('scroll', scrollListener);
        }
    });

    return { triggerEvent, listeners };
}

export function useLibraryComponentWorkflow({ baseUid, componentIdentifier }, context = {}) {
    function triggerEvent(name, event = {}, property) {
        const workflows = Object.values(
            wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.workflows || {}
        ).filter(({ trigger, triggerProperty }) => trigger === name && (!property || property === triggerProperty));
        // Launch all workflows in parallel
        workflows.forEach(workflow => {
            executeWorkflow(workflow, {
                context,
                event,
                internal: true,
                executionContext: {
                    type: LOG_TYPE[componentIdentifier.type],
                    uid: componentIdentifier.uid,
                 },
            });
        });
    }

    function executeLibraryComponentWorkflow(workflowId, parameters) {
        const workflow = wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.workflows?.[workflowId];
        if (!workflow) {
            console.error(`Workflow with id ${workflowId} not found`);
            return;
        }
        return executeWorkflow(workflow, {
            context: { ...context, parameters },
            internal: true,
            executionContext: {
                type: LOG_TYPE[componentIdentifier.type],
                uid: componentIdentifier.uid,
             },
        });
    }

    let propertiesToWatch;
     /* wwFront:start */
    propertiesToWatch = [
        ...new Set(
            Object.values(wwLib.$store.getters['libraries/getComponents'][baseUid]?.inner?.workflows || {})
                .filter(({ trigger }) => trigger === '_wwOnPropertyChange')
                .map(({ triggerProperty }) => triggerProperty)
        ),
    ];
    /* wwFront:end */

             for (const property of propertiesToWatch) {
                 const unwatch = watch(
                    () => context?.component?.props?.[property],
                    (newValue, oldValue) => {
                        triggerEvent('_wwOnPropertyChange', { newValue, oldValue }, property);
                    },
                    { immediate: true }
                );
             }
 
    return { triggerLibraryComponentEvent: triggerEvent, executeLibraryComponentWorkflow };
}

function setContentProperty(
    propertyName,
    propertyConfiguration,
    {
        component,
        currentStates,
        libraryComponentDataRef,
        useEditorKeyframesRef,
        context,
        content,
        rawContent,
        boundProps,
        layers,
     }
) {
    const rawProperty = computed(() => {
        const value = getComponentRawProperty({
            dataRef: component,
            prefix: 'content',
            suffix: propertyName,
            propertyConfiguration,
            statesRef: currentStates,
            libraryComponentDataRef,
            layers,
         });
        return value;
    });
    const property = computed(() => {
         /* wwFront:start */
        return getValue(rawProperty.value, context, {
            defaultUndefined: propertyConfiguration.fallbackToDefault
                ? propertyConfiguration.defaultValue
                : propertyConfiguration.defaultUndefined,
        });
        /* wwFront:end */
    });
    // eslint-disable-next-line vue/no-ref-as-operand
    content[propertyName] = property;
    rawContent[propertyName] = rawProperty;

 }
