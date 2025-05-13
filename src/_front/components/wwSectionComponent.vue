/* eslint-disable vue/no-dupe-keys */
<template>
    <div
        v-if="isRendering"
        ref="rootElement"
        :style="containerStyle"
        ww-responsive="ww-section"
        class="ww-section"
        :data-section-uid="uid"
        :class="[
             `ww-section-${uid}`,
        ]"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <!-- BACKGROUND VIDEO -->
        <wwBackgroundVideo v-if="backgroundVideo" :video="backgroundVideo"></wwBackgroundVideo>

        <div :id="anchorId" class="hash-anchor"></div>

         <!-- wwFront:start -->
        <component
            :is="vueComponentName"
            ref="component"
            class="ww-section-element"
            :class="[state.class || '']"
            v-bind="componentAttributes"
            :style="elementStyle"
            ww-responsive="ww-section-element"
            :content="content"
            :uid="uid"
            :ww-section-state="wwSectionState"
            :ww-front-state="wwFrontState"
            @trigger-event="onTriggerEvent"
            @add-state="addInternalState"
            @remove-state="removeInternalState"
            @toggle-state="toggleInternalState"
        />
        <!-- wwFront:end -->

     </div>
</template>

<script>
 import { provide, ref, computed, toRef, reactive, inject, shallowRef, watch } from 'vue';

import {
    getComponentIcon,
    getComponentLabel,
    getComponentVueComponentName,
    getComponentSize,
    getDisplayValue,
} from '@/_common/helpers/component/component';
import { useComponentData, useComponentTriggerEvent } from '@/_common/use/useComponent';
import { useComponentStates } from '@/_front/use/useComponentStates';
import { useComponentAdvancedInteractions } from '@/_front/use/useComponentAdvancedInteractions';
import { useComponentActions } from '@/_common/use/useActions';

import { getBackgroundStyle } from '@/_front/helpers/wwBackgroungStyle';

 
import { inheritFrom } from '@/_common/helpers/configuration/configuration';

export default {
    name: 'wwSectionComponent',
    components: {
     },
    props: {
        uid: { type: String, required: true },
        index: { type: Number, required: true },
    },
    setup(props) {
        const component = shallowRef(null);
        const rootElement = shallowRef(null);
        provide('sectionId', props.uid);
        provide('dragZoneId', props.uid);

 
        const { currentStates, addInternalState, removeInternalState, toggleInternalState } = useComponentStates(
            { uid: props.uid, type: 'section' },
            {
                context: {},
                propsState: toRef(props, 'states'),
             }
        );

        const wwIsInStretchedSection = computed(() => {
            return content['_ww-layout_alignItems'] === 'stretch' && content['_ww-layout_flexDirection'] === 'column';
        });

        provide('__wwIsInStretchedSection', wwIsInStretchedSection);

        const {
            content,
            style,
            state,
            configuration,
            name: sectionName,
         } = useComponentData({
            type: 'section',
            uid: props.uid,
            currentStates,
         });

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

        const { listeners, triggerEvent } = useComponentTriggerEvent({
            state,
            componentIdentifier: { type: 'section', uid: props.uid },
            isRenderingRef: isRendering,
        });

        const wwSectionState = reactive({
            uid: props.uid, // this can be static
            name: sectionName,
            states: currentStates,
        });

 
        useComponentAdvancedInteractions(state, wwLib.$store.getters['websiteData/getPageId']);
        useComponentActions({ uid: props.uid, type: 'section' }, { configuration, componentRef: component });

 
        return {
            rootElement,
            component,
            content,
            style,
            state,
            configuration,
            listeners,
            triggerEvent,
            addInternalState,
            removeInternalState,
            toggleInternalState,
            vueComponentName: getComponentVueComponentName('section', props.uid), // this can never change, as this component is uid keyed and objectbase cannot change
            wwSectionState,
            wwFrontState: inject('wwFrontState'),
            anchorId: computed(() => {
                const { sectionTitle } = wwLib.$store.getters['websiteData/getSections'][props.uid] || {};
                return wwLib.wwUtils.sanitize(sectionTitle);
            }),
            isRendering,
            containerStyle: computed(() => {
                let _style = {
                    height: getComponentSize(style.height, 'auto'),
                    aspectRatio: style.aspectRatio,
                    margin: style.margin,
                    zIndex: style.zIndex || 'unset',
                    overflow: style.overflow,
                    opacity: style.opacity,
                };

                //MIN-HEIGHT
                _style.minHeight = getComponentSize(style.minHeight);
                //MAX-HEIGHT
                _style.maxHeight = getComponentSize(style.maxHeight);

                //Manage display
                _style.display = getDisplayValue(style.display, configuration, {
                    content,
                });

                if (style.position === 'sticky' || style.position === 'fixed' || style.position === 'absolute') {
                    _style.position = style.position;
                    const hasValue = style.top || style.bottom || style.left || style.right;
                    _style.top = style.top || (hasValue ? null : '0px');
                    _style.bottom = style.bottom;
                    _style.left = style.left;
                    _style.right = style.right;
                    _style.width =
                        style.position !== 'sticky' || !hasValue ? getComponentSize(style.width, undefined) : undefined;
                }

                _style.background = getBackgroundStyle(style);

                //CURSOR
                if ( style.cursor) {
                    _style.cursor = style.cursor;
                }

                // OTHER
                ['transition', 'transform'].forEach(prop => {
                    if (style[prop]) {
                        _style[prop] = style[prop];
                    }
                });

                //CUSTOM CSS
                for (const prop in style.customCss || {}) {
                    _style[prop] = style.customCss[prop];
                }

                return _style;
            }),
         };
    },
    computed: {
        elementStyle() {
            const style = {
                width: getComponentSize(this.style.width, '100%'),
                padding: this.style.padding,
            };

            //MAX-WIDTH
            style.maxWidth = getComponentSize(this.style.maxWidth);
            //MIN-WIDTH
            style.minWidth = getComponentSize(this.style.minWidth);

            //MIN-HEIGHT
            style.minHeight = getComponentSize(this.style.minHeight);
            //MAX-HEIGHT
            style.maxHeight = getComponentSize(this.style.maxHeight);

            // OTHER
            [
                'border',
                'borderTop',
                'borderBottom',
                'borderLeft',
                'borderRight',
                'borderRadius',
                'boxShadow',
                'transition',
                'transform',
            ].forEach(prop => {
                if (this.style[prop]) {
                    style[prop] = this.style[prop];
                }
            });

            let perspective = this.style.perspective || 0;
            const hasPerspective = wwLib.wwUtils.getLengthUnit(perspective)[0];
            if (hasPerspective) {
                style.perspective = perspective;
            }

            return style;
        },
        backgroundVideo() {
            if (!inheritFrom(this.configuration, 'ww-background-video') || !this.content['_ww-backgroundVideo'])
                return null;
            return {
                url: this.content['_ww-backgroundVideo'],
                loop: this.content['_ww-backgroundVideoLoop'],
                poster: this.content['_ww-backgroundVideoPoster'],
                preload: this.content['_ww-backgroundVideoPreload'],
                size: this.content['_ww-backgroundVideoSize'],
            };
        },
        componentAttributes() {
            let attributes = { ...this.listeners };

            if (this.state.attributes) {
                try {
                    for (const attr of this.state.attributes.filter(attr => attr.name)) {
                        attributes[attr.name.replace(/ /g, '')] = attr.value;
                    }
                } catch {
                    wwLib.wwLog.warn(
                        `Attributes is missbind for section ${getComponentLabel('section', this.uid)} (${this.uid})`
                    );
                }
            }

            if (this.state.id) {
                attributes.id = this.state.id;
            }

            return attributes;
        },
     },
    methods: {
        onTriggerEvent({ name, event } = {}) {
            this.triggerEvent(name, event);
        },
        onMouseEnter() {
            this.addInternalState('_wwHover', true);
        },
        onMouseLeave() {
            this.removeInternalState('_wwHover', true);
        },
     },
};
</script>

<style lang="scss" scoped>
.ww-section {
    position: relative;
    max-width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ww-section-element {
        width: 100%;
        // min-height: 50px;
    }

    .hash-anchor {
        position: absolute;
        top: 0;
        left: 50%;
    }

 }
 </style>
