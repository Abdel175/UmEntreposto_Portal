<template>
    <component :is="tag" v-bind="properties" class="text-link">
        <slot />
    </component>
</template>

<script>
import { computed, toRef } from 'vue';

export default {
    props: {
        link: { type: [Object, String, Number], default: undefined },
    },
    setup(props) {
        const {
            tag: linkTag,
            properties,
            normalizedLink,
            hasLink,
        } = wwLib.wwElement.useLink({
            isLinkInjected: false,
            forcedLinkRef: toRef(props, 'link'),
        });
        return { tag: computed(() => (hasLink.value ? linkTag.value : 'span')), properties, normalizedLink };
    },
};
</script>

<style lang="scss" scoped>
.text-link {
    display: inline-block;
    text-decoration: inherit;
    cursor: pointer;
}
</style>
