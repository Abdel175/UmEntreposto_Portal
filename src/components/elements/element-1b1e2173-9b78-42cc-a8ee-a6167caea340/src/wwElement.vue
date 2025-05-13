<template>
    <component
        :is="hasLink ? tag : 'div'"
        v-html="iconHTML"
        v-bind="properties"
        :style="style"
        class="ww-icon"
        :class="{ '-link': hasLink }"
    ></component>
</template>

<script>
import { ref, watchEffect, computed } from 'vue';
const placeholderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>';

export default {
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
    },
    setup(props) {
        const { getIcon } = wwLib.useIcons();
        const { hasLink, tag, properties } = wwLib.wwElement.useLink();

        const iconText = ref(null);

        const icon = computed(() => {
            return props.wwElementState.props.icon || props.content.icon;
        });

        const color = computed(() => {
            return props.wwElementState.props.color || props.content.color;
        });

        watchEffect(async () => {
            try {
                iconText.value = await getIcon(icon.value);
            } catch (error) {
                iconText.value = null;
            }
        });

        return {
            getIcon,
            iconText,
            hasLink,
            tag,
            properties,
            color,
        };
    },
    computed: {
        iconHTML() {
            return this.iconText;
        },
        style() {
            return {
                '--icon-color': this.color,
            };
        },
    },
};
</script>

<style scoped lang="scss">
.ww-icon {
    color: var(--icon-color, unset);
    > :deep(svg) {
        width: 100%;
        height: 100%;
    }
    &.-link {
        cursor: pointer;
    }
}
</style>
