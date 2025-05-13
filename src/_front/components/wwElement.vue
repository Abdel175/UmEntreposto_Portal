<template>
    <wwLibraryComponent v-if="isLibraryComponent" :key="uid" :uid="uid" v-bind="$attrs"></wwLibraryComponent>
    <template v-else>
             <wwElementComponent ref="elementComponent" v-bind="$attrs" :key="`${uid}_${parentKey}`" :uid="uid">
                <slot></slot>
            </wwElementComponent>
     </template>
</template>

<script>
 import wwElementComponent from '@/_front/components/wwElementComponent.vue';
import wwLibraryComponent from './wwLibraryComponent.vue';

export default {
    name: 'wwElement',
    components: {
         wwElementComponent,
        wwLibraryComponent,
    },
    inheritAttrs: false,
    props: {
        uid: { type: String, required: true },
    },
    /* wwFront:start */
    setup(props) {
        return {
            isLibraryComponent: !!wwLib.$store.getters['websiteData/getWwObjects'][props.uid]?.libraryComponentBaseId,
            parentKey: `${wwLib.$store.getters['websiteData/getWwObjects'][props.uid]?.parentLibraryComponentId}`,
        };
    },
    /* wwFront:end */
    computed: {
        // Used externally to get the component instance
        componentRef() {
            if (this.$refs.elementComponent) {
                return this.$refs.elementComponent.$refs.component;
            } else {
                return null;
            }
        },
     },
};
</script>
