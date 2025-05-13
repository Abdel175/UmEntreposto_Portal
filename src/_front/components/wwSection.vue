<template>
     <!-- wwFront:start -->
    <wwSectionComponent :key="uid" :uid="uid" v-bind="$attrs"></wwSectionComponent>
    <!-- wwFront:end -->
</template>

<script>
 import wwSectionComponent from '@/_front/components/wwSectionComponent.vue';

export default {
    name: 'wwSection',
    components: {
         wwSectionComponent,
    },
    inheritAttrs: false,
    props: {
        uid: { type: String, required: true },
    },
};
</script>
