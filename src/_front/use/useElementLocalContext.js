import { inject, reactive, computed, provide } from 'vue';

export function useElementLocalContext() {
    const parentLocalContext = inject('_wwLocalContext', null);
    const elementLocalContext = reactive({ key: null, data: null, methods: null, markdown: '' });

    // TODO: éventuellement sauter toute cette étape en lisant une clef de configuration? A débattre si impact perf
    // TODO: Revoir la structure des clés si particuliers (ex: imbrication de localContext avec des clés communes)
    const localContext = computed(() => {
        if (!elementLocalContext.key) {
            return parentLocalContext?.value;
        }
        return {
            data: {
                ...(parentLocalContext?.value?.data || {}),
                [elementLocalContext.key]: elementLocalContext.data,
            },
            methods: {
                ...(parentLocalContext?.value?.methods || {}),
                [elementLocalContext.key]: elementLocalContext.methods,
            },
            markdown: {
                ...(parentLocalContext?.value?.markdown || {}),
                [elementLocalContext.key]: elementLocalContext.markdown,
            },
        };
    });

    provide('_wwLocalContext', localContext);
    provide('_wwElementLocalContext', elementLocalContext);

    return localContext;
}

export function useRegisterElementLocalContext(key, dataRef, methods, markdown) {
    const elementLocalContext = inject('_wwElementLocalContext');
    elementLocalContext.key = key;
    elementLocalContext.data = dataRef;
    elementLocalContext.methods = methods;
    elementLocalContext.markdown = markdown;
}
