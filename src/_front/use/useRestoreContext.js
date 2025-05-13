import { inject, ref, unref, provide, computed, reactive } from 'vue';
import { get } from 'lodash';

export function useRestoreContext({ path }) {
    const data = inject('componentData', ref({}));
    const state = inject('componentState', ref({}));

    // TODO: check if this can change or not
    const isDropzone = get(data.value?._state?.libraryComponentInjected, 'content.' + unref(path));
    if (!isDropzone) {
        return;
    }
    const libraryComponentId = data?.value?.parentLibraryComponentId;
    const layers = inject('_wwLibraryComponentLayers', {});
    const context = inject('_wwLibraryComponentContext', {});

 
    const parentBindingContext = inject('bindingContext', null);
    if (!parentBindingContext) {
        provide('bindingContext', layers?.[libraryComponentId]?.savedContext?.bindingContext);
    }
    provide('_wwLibraryComponentContext', layers?.[libraryComponentId]?.savedContext?.libraryComponentContext);

    const dropzoneContext = reactive({
        data: computed(() => state?.dropzoneContext?.data),
        libraryComponentId,
        parent: layers?.[libraryComponentId]?.savedContext?.dropzoneContext,
        methods: {
            executeWorkflow: context?.component?.methods?.executeWorkflow,
        },
    });
    provide('_wwDropzoneContext', dropzoneContext);
    const localContext = layers?.[libraryComponentId]?.savedContext?.localContext;
    provide('_wwLocalContext', localContext);
}
