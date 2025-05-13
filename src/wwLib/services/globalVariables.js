import { reactive } from 'vue';

export default {
    _navigationId: 0,
    customCodeVariables: reactive({}),
    globalComponentActionsFn: reactive({
        sections: {},
        elements: {},
        libraryComponents: {},
    }),
 };
