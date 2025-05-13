/* eslint-disable vue/no-dupe-keys */
<template>
    <!-- wwFront:start -->
    <component
        :is="vueComponentName"
        v-if="isRendering"
        ref="component"
        :style="elementStyle"
        class="ww-element"
        :class="[state.class || '', `ww-element-${uid}`]"
        v-bind="componentAttributes"
        :content="content"
        :uid="uid"
        :ww-front-state="wwFrontState"
        :ww-element-state="wwElementState"
        ww-responsive="ww-element"
        @trigger-event="onTriggerEvent"
        @element-event="$emit('element-event', $event)"
        @add-state="addInternalState"
        @remove-state="removeInternalState"
        @toggle-state="toggleInternalState"
    >
        <slot></slot
    ></component>
    <!-- wwFront:end -->
 </template>

<script>
import { computed, ref, toRef, reactive, inject, provide, shallowRef, watch, onUnmounted } from 'vue';

import {
    getComponentVueComponentName,
    getComponentConfiguration,
    getComponentLabel,
    getComponentIcon,
    getComponentSize,
    getDisplayValue,
} from '@/_common/helpers/component/component';

 
import { useComponentData, useComponentTriggerEvent } from '@/_common/use/useComponent';
import { useComponentStates } from '@/_front/use/useComponentStates';
import { useComponentKeyframes } from '@/_front/use/useComponentKeyframes';
import { useComponentAdvancedInteractions } from '@/_front/use/useComponentAdvancedInteractions';
import { useComponentActions } from '@/_common/use/useActions';
import { useElementLocalContext } from '@/_front/use/useElementLocalContext';

import { getBackgroundStyle } from '@/_front/helpers/wwBackgroungStyle';

let componentId = 1;

export default {
    components: {
     },
    inject: {
        parentId: { from: '_wwElementUid', default: null },
        wwIsInStretchedSection: { from: '__wwIsInStretchedSection', default: false },
    },
    inheritAttrs: false,
    props: {
        uid: { type: String, required: true },
        isWwObject: { type: Boolean, default: true }, // only here to not have warning on vbind
        wwProps: { type: Object, default: () => ({}) },
        states: { type: Array, default: () => [] },
        isLibraryComponentRoot: { type: Boolean, default: false },
        libraryComponentData: { type: Object, default: null },
        libraryComponentTriggerEvent: { type: Function, default: null },
        libraryComponentTriggerLibraryComponentEvent: { type: Function, default: null },
     },
    // update:child-selected and update:is-selected are used by useElementSelection
    emits: ['element-event', 'update:child-selected', 'update:is-selected', 'add-state', 'remove-state'],
    setup(props, vueContext) {
        const id = componentId;
        componentId++;
        const component = shallowRef(null);

        const wwLayoutContext = inject('wwLayoutContext', {});
        const bindingContext = inject('bindingContext', null);
        const sectionId = inject('sectionId', null);
        const containerType = inject('__wwContainerType', null);
        const wwLibraryComponentUid_ = inject('wwLibraryComponentUid_', null);

        provide('wwLayoutContext', {});
        provide('__wwContainerType', null);
        provide('__wwIsInStretchedSection', false);
        provide('_wwElementUid', props.uid);
        provide('_wwElementComponentId', id);

 
        const libraryComponentContext = inject('_wwLibraryComponentContext', null);
        const dropzoneContext = inject('_wwDropzoneContext', null);
        const localContext = useElementLocalContext();
        const context = reactive({
            item: computed(() => bindingContext || {}),
            layout: computed(() => ({ id: wwLayoutContext.layoutId })),
            component: libraryComponentContext?.component,
            get thisInstance() {
                return component.value?.$el;
            },
            dropzone: dropzoneContext,
            local: localContext,
        });

        const {
            currentStates,
            addInternalState,
            removeInternalState,
            toggleInternalState,
         } = useComponentStates(
            { uid: props.uid, type: 'element' },
            {
                context,
                propsState: toRef(props, 'states'),
             }
        );

        provide('wwAddInternalState', addInternalState);
        provide('wwRemoveInternalState', removeInternalState);
        provide('wwToggleInternalState', toggleInternalState);

        const {
            content,
            style,
            state,
            rawContent,
            rawStyle,
            name: elementName,
            configuration,
         } = useComponentData({
            type: 'element',
            uid: props.uid,
            componentId: id,
            currentStates,
            wwProps: toRef(props, 'wwProps'),
            context,
            libraryComponentDataRef: computed(() => props.libraryComponentData),
         });
 
        // TODO: could be one common reactive property
        // This is already the case for Section
        const wwFrontState = reactive({
            lang: computed(() => wwLib.$store.getters['front/getLang']),
            pageId: computed(() => wwLib.$store.getters['websiteData/getPageId']),
            sectionId, // THIS IS WRONG, SHOULD NOT BE HERE. PLEASE DELETE ONE DAY :(
            screenSize: computed(() => wwLib.$store.getters['front/getScreenSize']),
            screenSizes: computed(() => wwLib.$store.getters['front/getScreenSizes']),
        });
        provide('wwFrontState', wwFrontState);

        const hasLink = computed(() => {
            return state.link && state.link.type !== 'none';
        });

        const wwElementState = reactive({
            props: toRef(props, 'wwProps'),
            uid: props.uid,
            name: elementName,
            states: currentStates,
        });
        provide('wwElementState', wwElementState);

        const isRendering = computed(() => {
 
            /* wwFront:start */
            // eslint-disable-next-line no-unreachable
            return style.conditionalRendering;
            /* wwFront:end */
        });

        // When component is unmount, we reset state (the mouse leave event is not fired)
        watch(isRendering, isRendering => {
            if (!isRendering) {
                removeInternalState('_wwHover', true);
            }
        });

 
        function triggerElementEvent(event) {
            vueContext.emit('element-event', event);
        }
        provide('triggerElementEvent', triggerElementEvent);

 
        useComponentAdvancedInteractions(state, wwLib.$store.getters['websiteData/getPageId']);

        const { animationStyle } = useComponentKeyframes({
            componentId: id,
            style,
         });

 
        useComponentActions(
            { uid: props.uid, componentId: id, type: 'element', repeatIndex: bindingContext?.index },
            { context, configuration, componentRef: component }
        );

        const { listeners, triggerEvent } = useComponentTriggerEvent(
            {
                state,
                componentIdentifier: { type: 'element', componentId: id, uid: props.uid },
                triggerParentEvent: props.libraryComponentTriggerEvent,
                triggerLibraryComponentEvent: props.libraryComponentTriggerLibraryComponentEvent,
                parentInteractionsRef: computed(() => props.libraryComponentData?.state?.interactions),
                isRenderingRef: isRendering,
                rootElementRef: component,
                extraListeners: {
                    onMouseenter() {
                        addInternalState('_wwHover', true);
                        vueContext.emit('add-state', ['_wwHover', true]);
                    },
                    onMouseleave() {
                        removeInternalState('_wwHover', true);
                        vueContext.emit('remove-state', ['_wwHover', true]);
                    },
                },
            },
            context
        );

        const wwTechnicalAttributes = computed(() => {
            let attributes = {
                'data-ww-element': true,
                'data-ww-uid': props.uid,
                'data-ww-component-id': id,
            };

            if (bindingContext?.index) attributes['data-ww-repeat-index'] = bindingContext?.index;

            if (wwLibraryComponentUid_) attributes['data-ww-comp-uid'] = wwLibraryComponentUid_;

 
            return attributes;
        });

        // TODO if we are not recalculate this too often? even if it is static
        // The function is call in different places in the setup functions
        const config = getComponentConfiguration('element', props.uid);

 
        return {
            component,
            content,
            style,
            state,
            componentId: id,
            sectionId,
            configuration: config,
            bindingContext,
            rawContent,
            context,
            elementName,
            addInternalState,
            removeInternalState,
            toggleInternalState,
            listeners,
            triggerEvent,
            wwFrontState,
            hasLink,
            wwElementState,
            containerType,
            isRendering,
            animationStyle,
            wwLibraryComponentUid_,
            wwTechnicalAttributes,
         };
    },
    computed: {
        vueComponentName() {
            return getComponentVueComponentName('element', this.uid);
        },
        /*=============================================m_ÔÔ_m=============================================\
            CONFIG / STATE
        \================================================================================================*/
        configurationOptions() {
            return this.configuration.options || {};
        },
        componentAttributes() {
            let attributes = { ...this.$attrs };

            // Sometimes components can have listeners in $attrs, we need to merge them
            for (const [eventName, listener] of Object.entries(this.listeners)) {
                const tmp = attributes[eventName];
                attributes[eventName] = event => {
                    listener(event);
                    tmp?.(event);
                };
            }

            if (this.state.attributes) {
                try {
                    for (const attr of this.state.attributes.filter(attr => attr.name)) {
                        attributes[attr.name.replace(/ /g, '')] = attr.value;
                    }
                } catch {
                    wwLib.wwLog.warn(
                        `Attributes is missbind for element ${getComponentLabel('element', this.uid)} (${this.uid})`
                    );
                }
            }

            if (this.state.id) {
                attributes.id = this.state.id;
            }

            Object.assign(attributes, this.wwTechnicalAttributes);

            return attributes;
        },
 
        /*=============================================m_ÔÔ_m=============================================\
            STYLE
        \================================================================================================*/
        isFlexboxChild() {
            return this.containerType === 'flex' || this.containerType === 'inline-flex';
        },
        isGridChild() {
            return this.containerType === 'grid' || this.containerType === 'inline-grid';
        },
        elementStyle() {
            const ignoredStyleProperties = this.configuration?.options?.ignoredStyleProperties || [];

            const wwObjectStyle = {};

            if (!ignoredStyleProperties.includes('margin')) {
                wwObjectStyle.margin = this.style.margin || '0';
            }
            if (!ignoredStyleProperties.includes('padding')) {
                wwObjectStyle.padding = this.style.padding || '0';
            }
            if (!ignoredStyleProperties.includes('overflow')) {
                wwObjectStyle.overflow = this.style.overflow;
            }
            wwObjectStyle.zIndex = this.style.zIndex || 'unset';

            //ALIGN SELF
            wwObjectStyle.alignSelf = this.isFlexboxChild && this.style.align ? this.style.align : 'unset';

            //DISPLAY
            wwObjectStyle.display = getDisplayValue(this.style.display, this.configuration, {
                content: this.content,
                wwProps: this.wwProps,
            });

            // POSITION
            if (['absolute', 'fixed', 'sticky'].includes(this.style.position)) {
                wwObjectStyle.position = this.style.position;
                const hasValue = this.style.top || this.style.bottom || this.style.left || this.style.right;
                wwObjectStyle.top = this.style.top || (hasValue ? null : '0px');
                wwObjectStyle.bottom = this.style.bottom;
                wwObjectStyle.left = this.style.left;
                wwObjectStyle.right = this.style.right;
            }

            // WIDTH
            wwObjectStyle.width = getComponentSize(
                this.style.width,
                this.configurationOptions.autoByContent ? 'auto' : null
            );

            if (this.isFlexboxChild && this.style.flex) {
                wwObjectStyle.flex = this.style.flex;
            }

            // MAX-WIDTH
            wwObjectStyle.maxWidth = getComponentSize(this.style.maxWidth);
            // MIN-WIDTH
            wwObjectStyle.minWidth = getComponentSize(this.style.minWidth);

            //PERSPECTIVE
            let perspective = this.style.perspective || 0;
            const hasPerspective = wwLib.wwUtils.getLengthUnit(perspective)[0];
            if (hasPerspective) {
                wwObjectStyle.perspective = perspective;
            }

            //HEIGHT
            wwObjectStyle.height = this.style.height || 'auto';

            //ASPECT-RATIO
            if (!ignoredStyleProperties.includes('aspectRatio')) {
                wwObjectStyle.aspectRatio = this.style.aspectRatio;
            }

            //MAX-HEIGHT
            wwObjectStyle.maxHeight = getComponentSize(this.style.maxHeight);
            //MIN-HEIGHT
            wwObjectStyle.minHeight = getComponentSize(this.style.minHeight);

            if (!ignoredStyleProperties.includes('background')) {
                wwObjectStyle.background = getBackgroundStyle(this.style);
            }

            // OTHER
            const otherProperties = ['boxShadow', 'opacity', 'transition', 'transform'];
            if (!ignoredStyleProperties.includes('border')) {
                otherProperties.push('border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight');
            }
            if (!ignoredStyleProperties.includes('outline')) {
                otherProperties.push('outline', 'outlineOffset');
            }
            if (!ignoredStyleProperties.includes('borderRadius')) {
                otherProperties.push('borderRadius');
            }
            otherProperties.forEach(prop => {
                if (this.style[prop] !== undefined && this.style[prop] !== null) {
                    wwObjectStyle[prop] = this.style[prop];
                }
            });

            //CURSOR
            if (this.style.cursor) {
                     wwObjectStyle.cursor = this.style.cursor;
             }

            //ANIMATION
            Object.assign(wwObjectStyle, this.animationStyle);

            //CUSTOM CSS
            for (const prop in this.style.customCss || {}) {
                wwObjectStyle[prop] = this.style.customCss[prop];
            }

            if (this.wwIsInStretchedSection && !this.style.align) {
                wwObjectStyle.width = wwObjectStyle.width || '100%';
                wwObjectStyle.alignSelf = 'center';
            }

            //ADD EXTRA-STYLE
            return { ...wwObjectStyle, ...this.gridStyle, ...(this.$attrs['extra-style'] || {}) };
        },
        gridStyle() {
            if (!this.isGridChild) return {};

            const { columnSpan, rowSpan, gridColumn, gridRow } = this.style;

            const gridStyles = {};
            if (columnSpan) gridStyles.gridColumn = `span ${columnSpan}`;
            if (rowSpan) gridStyles.gridRow = `span ${rowSpan}`;
            if (gridColumn) gridStyles.gridColumn = gridColumn;
            if (gridRow) gridStyles.gridRow = gridRow;

            return gridStyles;
        },
 
        /*=============================================m_ÔÔ_m=============================================\
            STYLE HELPERS
        \================================================================================================*/
     },
    methods: {
        onTriggerEvent({ name, event } = {}) {
            this.triggerEvent(name, event);
        },
     },
};
</script>

<style scoped lang="scss">
 </style>
