<template>
     <!-- wwFront:start -->
    <wwElementComponent
        v-if="!isLoop"
        :key="rootUid"
        ref="elementComponent"
        :uid="rootUid"
        is-library-component-root
        :library-component-data="componentData"
        :library-component-trigger-event="triggerEvent"
        :library-component-trigger-library-component-event="triggerLibraryComponentEvent"
        v-bind="$attrs"
        @addState="addInternalState(...$event)"
        @removeState="removeInternalState(...$event)"
    ></wwElementComponent>
    <!-- wwFront:end -->
</template>

<script>
import { ref, inject, provide, computed, reactive, onBeforeUnmount } from 'vue';
import { getComponentBaseUid } from '@/_common/helpers/component/component.js';
 import wwElementComponent from '@/_front/components/wwElementComponent.vue';
import { useComponentData, useComponentTriggerEvent, useLibraryComponentWorkflow } from '@/_common/use/useComponent.js';
import { useInner } from '@/_front/use/useInner.js';
import { useComponentStates } from '@/_front/use/useComponentStates.js';
import { useLibraryComponentActions } from '@/_common/use/useActions.js';

let componentId = 1;

export default {
    components: {
         wwElementComponent,
    },
    inheritAttrs: false,
    props: {
        uid: { type: String, required: true },
    },
    setup(props) {
        const id = componentId;
        const baseUid = getComponentBaseUid('libraryComponent', props.uid);
        componentId++;

        const wwLayoutContext = inject('wwLayoutContext', {});
        const bindingContext = inject('bindingContext', null);
        const isACopy = computed(() => bindingContext && bindingContext.isACopy);
        const containerType = inject('__wwContainerType', null);

        provide('wwLibraryComponentUid_', props.uid);

 
        const elementComponent = ref(null);
        const parentLibraryComponentContext = inject('_wwLibraryComponentContext', null);
        const dropzoneContext = inject('_wwDropzoneContext', null);
        const localContext = inject('_wwLocalContext', null);
        const context = reactive({
            item: computed(() => bindingContext || {}),
            layout: computed(() => ({ id: wwLayoutContext.layoutId })),
            component: parentLibraryComponentContext?.component,
            get thisInstance() {
                return elementComponent.value?.component?.$el;
            },
            dropzone: dropzoneContext,
            local: localContext,
        });

        const {
            currentStates,
            addInternalState,
            removeInternalState,
         } = useComponentStates(
            { uid: props.uid, type: 'element' },
            {
                context,
             }
        );

        const {
            content,
            style,
            state,
            rawContent,
            rawStyle,
            rawState,
            name: elementName,
         } = useComponentData({
            type: 'libraryComponent',
            uid: props.uid,
            componentId: id,
            currentStates,
            context,
         });

 
        const { variables, updateVariable, formulas, componentVariablesConfiguration } = useInner(
            baseUid,
            {
                context,
                props: content,
            },
            { uid: props.uid, componentId: id, type: 'element' }
        );
        const libraryComponentContext = {
            component: {
                props: content,
                baseUid,
                variables,
                workflowsResults: reactive({}),
                 localComponentActionsFn: reactive({
                    elements: {},
                    libraryComponents: {},
                }),
                methods: {
                    updateVariable,
                },
                formulas,
                componentVariablesConfiguration,
            },
            get thisInstance() {
                return elementComponent.value?.component?.$el;
            },
        };

        // Triggering workflows define on the component level
        const { triggerLibraryComponentEvent, executeLibraryComponentWorkflow } = useLibraryComponentWorkflow(
            {
                baseUid,
                componentIdentifier: { type: 'libraryComponent', componentId: id, uid: props.uid },
            },
            libraryComponentContext
        );
        libraryComponentContext.component.methods.executeWorkflow = executeLibraryComponentWorkflow;

        // Triggering workflows define on the instance level
        const { triggerEvent } = useComponentTriggerEvent(
            {
                state,
                componentIdentifier: { type: 'libraryComponent', componentId: id, uid: props.uid },
            },
            context
        );
        libraryComponentContext.component.methods.triggerEvent = triggerEvent;

        const parentCounts = inject('_wwLibraryComponentCounts', ref({}));
        const counts = computed(() => ({
            ...parentCounts.value,
            [baseUid]: (parentCounts.value[baseUid] || 0) + 1,
        }));
        provide('_wwLibraryComponentCounts', counts);

        // Saving data to be restored for dropzones
        const parentLibraryComponentLayers = inject('_wwLibraryComponentLayers', {});
        const layers = {
            ...parentLibraryComponentLayers,
            [baseUid]: {
                componentIdentifier: { type: 'libraryComponent', componentId: id, uid: props.uid, baseUid },
                savedContext: {
                    bindingContext,
                    libraryComponentContext: parentLibraryComponentContext,
                    dropzoneContext,
                    localContext,
                 },
                childrenData: computed(() => content?.childrenData || {}),
            },
        };
        provide('_wwLibraryComponentLayers', layers);

 
        useLibraryComponentActions(
            { uid: props.uid, componentId: id, repeatIndex: bindingContext?.index },
            { context, executionContext: libraryComponentContext }
        );

        // Resetting data context
        provide('bindingContext', null);
        provide('_wwLibraryComponentContext', libraryComponentContext);

 
        return {
            addInternalState,
            removeInternalState,
            isLoop: computed(() => counts.value[baseUid] > 10),
            triggerEvent,
            triggerLibraryComponentEvent,
            componentData: reactive({
                state,
                style,
                rawState,
                rawStyle,
             }),
            elementComponent,
         };
    },
    computed: {
        base() {
            const baseUid = getComponentBaseUid('libraryComponent', this.uid);
            return wwLib.$store.getters['libraries/getComponents'][baseUid];
        },
        rootUid() {
            return this.base?.rootElementId;
        },
    },
};
</script>

 