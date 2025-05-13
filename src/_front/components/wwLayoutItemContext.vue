<template>
    <slot></slot>
</template>

<script>
import { provide, inject, reactive, computed, toRef } from 'vue';

export default {
    props: {
        index: { type: Number, required: true },
        item: { type: [Object, null], default: null },
        data: { type: undefined, default: null },
        isRepeat: { type: Boolean, default: false },
        repeatedItems: { type: [Array, null], default: null },
    },
    setup(props) {
        const index = toRef(props, 'index');

 
        // Normally we are ok doing this here, as key for isRepeat and not repeat item or not the same
        if (props.isRepeat) {
            const parentBindingContext = inject('bindingContext', null);
            const bindingContext = reactive({
                parent: parentBindingContext,
                data: toRef(props, 'data'),
                index,
                repeatIndex: index,
                isACopy: computed(() => (parentBindingContext && parentBindingContext.isACopy) || props.index > 0),
                repeatedItems: toRef(props, 'repeatedItems'), // Used for counting repeat in Navigator component
            });

            provide('bindingContext', bindingContext);
        }
    },
};
</script>
