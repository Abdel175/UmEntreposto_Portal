<template>
    <component
        :is="tag"
        class="ww-layout"
        :data-ww-layout-id="layoutId"
        :class="{
         }"
        :style="layoutStyle"
    >
        <slot name="header"></slot>
         <template v-if="internalList[0]">
            <wwLayoutItemContext
                v-for="index in restrictedLength"
                :key="isBound ? `${internalList[0].uid}_${index - 1}` : `${internalList[index - 1].uid}`"
                :index="offset + index - 1"
                :item="isBound ? internalList[0] : internalList[index - 1]"
                :is-repeat="isBound"
                :data="isBound && boundData ? boundData[offset + index - 1] : null"
                :repeated-items="boundData"
            >
                <slot
                    v-bind="{
                        item: isBound ? internalList[0] : internalList[index - 1],
                        index: offset + index - 1,
                        data: isBound && boundData ? boundData[offset + index - 1] : null,
                        layoutId,
                        itemStyle: getItemStyle(index - 1),
                     }"
                >
                    <wwElement
                        v-bind="isBound ? internalList[0] : internalList[index - 1]"
                        :extra-style="getItemStyle(index - 1)"
                    ></wwElement>
                </slot>
            </wwLayoutItemContext>
        </template>
     </component>
</template>

<script>
const PUSH_LAST_STYLE_VERTICAL = {
    marginTop: 'auto',
};
const PUSH_LAST_STYLE_HORIZONTAL = {
    marginLeft: 'auto',
};
import { computed, inject, toRef, reactive, provide, onUnmounted, ref } from 'vue';

import { useParentContentProperty } from '@/_common/use/useComponent';
import { getDisplayValue } from '@/_common/helpers/component/component';
import { inheritFrom } from '@/_common/helpers/configuration/configuration';

import { getLayoutStyleFromContent } from '@/_front/helpers/wwLayoutStyle';
import { useRestoreContext } from '@/_front/use/useRestoreContext';

import wwLayoutItem from './wwLayoutItem';
import wwLayoutItemContext from './wwLayoutItemContext';

 
let layoutId = 1;
const MAX_REPEAT = 200;

export default {
    name: 'wwLayout',
    components: {
        wwLayoutItem,
        wwLayoutItemContext,
    },
    props: {
        path: { type: String, required: false, default: undefined },
        tag: { type: String, default: 'div' },
        direction: { type: String, default: null },
        disableDragDrop: { type: Boolean, default: false },
        disableEdit: { type: Boolean, default: false },
    },
    emits: ['update:list'],
    setup(props, { emit }) {
        const id = layoutId++;
        const parentElementUid = inject('_wwElementUid', null);
        const parentElementComponentId = inject('_wwElementComponentId', null);
        const sectionId = inject('sectionId');
        const bindingContext = inject('bindingContext', null);

        const componentContent = inject('componentContent');
        const componentStyle = inject('componentStyle');
        const componentConfiguration = inject('componentConfiguration');
        const componentWwProps = inject('componentWwProps');

        const { rawProperty, property } = useParentContentProperty(toRef(props, 'path'));

        useRestoreContext({ path: toRef(props, 'path') });

        const isBound = computed(() => rawProperty.value && !!rawProperty.value.__wwtype);
        const boundData = computed(() => {
            if (!isBound.value) return null;
            if (!property.value) return null;

            if (Array.isArray(property.value)) {
                return property.value;
            }
            if (!property.value.data) {
                return null;
            }
            return Array.isArray(property.value.data) ? property.value.data : null;
        });
        const internalList = computed(() => {
            const { __wwtype, repeatable } = rawProperty.value || {};
            return (__wwtype ? repeatable : property.value) || [];
        });

        const paginationOptions = computed(() => {
            if (!isBound.value) return null;
            if (!property.value) return null;
            if (Array.isArray(property.value)) {
                return null;
            }
            if (!property.value.limit) return null;
            if (!property.value.total) return null;
            return property.value;
        });
        const offset = computed(() => {
            if (paginationOptions.value) return parseInt(paginationOptions.value.offset) || 0;
            return 0;
        });
        const length = computed(() => {
            if (!isBound.value) {
                return internalList.value.length;
            }
            if (paginationOptions.value) {
                if (!boundData.value) {
                    return 0;
                } else {
                    const maxIndex = Math.min(
                        offset.value + parseInt(wwLib.wwFormula.getValue(paginationOptions.value.limit)),
                        paginationOptions.value.total || 0
                    );
                    const length = Math.max(maxIndex - offset.value, 0);
                    return isNaN(length) ? 0 : length;
                }
            }
            return boundData.value ? boundData.value.length : 0;
        });

        const componentContext = {
            content: componentContent,
            wwProps: componentWwProps,
        };

        let restrictedLength;
         /* wwFront:start */
        // eslint-disable-next-line vue/no-ref-as-operand
        restrictedLength = length;
        /* wwFront:end */

        const layoutStyle = computed(() => {
            if (props.direction) {
                return {
                    flexDirection: props.direction,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                };
            } else if (inheritFrom(componentConfiguration, 'ww-layout')) {
                return getLayoutStyleFromContent(
                    componentContent,
                    componentStyle,
                    componentConfiguration,
                    componentContext
                );
            } else {
                return {};
            }
        });

 
        const __wwContainerType = computed(() =>
            getDisplayValue(componentStyle.display, componentConfiguration, componentContext)
        );
        provide('__wwContainerType', __wwContainerType);

        return {
            layoutId: id,
            layoutStyle,
            parentElementUid,
            sectionId,
            rawProperty,
            property,
            bindingContext,
            isBound,
            boundData,
            length,
            internalList,
            offset,
            paginationOptions,
            componentContent,
            componentStyle,
            restrictedLength,
         };
    },
    computed: {
     },

    watch: {
     },
     methods: {
        // TODO: one day extrastyle should be removed, now that we do not have wrapper anymore maybe?
        getItemStyle(index) {
            if (this.componentContent['_ww-layout_pushLast']) {
                const push = !this.componentContent['_ww-layout_reverse']
                    ? index === this.restrictedLength - 1
                    : index === 0;
                if (!push) return;
                // This is very important here to return const here
                // Big performance issue if we recreate object at each call
                return this.componentContent['_ww-layout_flexDirection'] === 'column'
                    ? PUSH_LAST_STYLE_VERTICAL
                    : PUSH_LAST_STYLE_HORIZONTAL;
            }
            return;
        },
     },
};
</script>

<style lang="scss">
/* No Scoped css to be easily overwrite */
.ww-layout {
    display: flex;
    pointer-events: initial;
    position: relative;

 }
</style>

<style lang="scss" scoped>
 </style>
