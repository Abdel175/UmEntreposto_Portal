<template>
    <slot></slot>
</template>

<script>
import { provide, computed, inject } from 'vue';

export default {
    props: {
        data: { type: undefined, default: null },
        methods: { type: Array, default: () => [] },
        markdown: { type: String, default: '' },
        elementKey: { type: String, default: 'elementKey' },
    },
    setup(props) {
        const parentLocalContext = inject('_wwLocalContext', null);

        const localContext = computed(() => ({
            data: { ...(parentLocalContext?.value?.data || {}), [props.elementKey]: props.data },
            methods: { ...(parentLocalContext?.value?.methods || {}), [props.elementKey]: props.methods },
            markdown: { ...(parentLocalContext?.value?.markdown || {}), [props.elementKey]: props.markdown },
        }));

        provide('_wwLocalContext', localContext);
    },
};
</script>
