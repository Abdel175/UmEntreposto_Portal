<template>
    <component :is="tag" :style="layoutStyle">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        tag: { type: String, default: 'div' },
    },
    setup() {
        return {
            layoutStyle: wwLib.wwElement.useLayoutStyle(),
        };
    },
};
</script>
