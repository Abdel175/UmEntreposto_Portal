<template>
    <wwText :tag="tag" :text="text" v-bind="properties" :class="{ '-link': hasLink && !isEditing }"></wwText>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['update-content', 'update:content:effect'],
    setup() {
        const { hasLink, tag, properties } = wwLib.wwElement.useLink();
        return { hasLink, linkTag: tag, properties };
    },
    computed: {
        tag() {
            return this.hasLink ? this.linkTag : this.content.tag;
        },
        text() {
            return this.wwElementState.props.text;
        },
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
.-link {
    cursor: pointer;
}
</style>
