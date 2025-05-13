<template>
    <wwElement
        v-if="layoutType === 'text'"
        class="multiselect-single-label-el"
        v-bind="textElement"
        :ww-props="{ text: option.label || '' }"
        :states="optionStates"
    />
    <wwElement v-else class="multiselect-single-label-el free-layout" v-bind="flexboxElement" :states="optionStates" />
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        option: { type: Object, required: true },
        layoutType: { type: String, required: true },
        textElement: { type: Object, required: true },
        flexboxElement: { type: Object, required: true },
    },
    setup() {
        const observer = null;
        const optionStates = ref([]);

        return { observer, optionStates };
    },
    mounted() {
        const optionNode = this.$el.parentElement;
        if (!optionNode) return;

        this.observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                const classes = m.target.getAttribute(m.attributeName);
                this.$nextTick(() => {
                    this.handleOntionState(classes);
                });
            }
        });

        this.observer.observe(optionNode, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class'],
        });
    },
    methods: {
        handleOntionState(classes) {
            if (!classes || typeof classes !== 'string') return;

            if (classes.includes('is-pointed') && !classes.includes('is-selected')) {
                this.optionStates = [':hover'];
            } else if (!classes.includes('is-pointed') && classes.includes('is-selected')) {
                this.optionStates = ['Selected'];
            } else if (classes.includes('is-pointed') && classes.includes('is-selected')) {
                this.optionStates = ['Selected:hover'];
            } else {
                this.optionStates = [];
            }
        },
    },
    beforeUnmount() {
        if (this.observer) this.observer.disconnect();
    },
};
</script>

<style></style>
