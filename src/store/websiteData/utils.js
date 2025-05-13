export default {
    getFullPage(state) {
        let fullPage = null;
        for (const p of state.design.pages) {
            if (p.id == state.pageId) {
                fullPage = _.cloneDeep(p);
                for (const i in fullPage.sections) {
                    fullPage.sections[i] = _.cloneDeep(state.sections[fullPage.sections[i].uid]);
                }
                fullPage = this.parseFullObject(state, fullPage);
            }
        }

        return fullPage;
    },

    parseFullObject(state, data, asTemplate = false) {
        if (!data) return data;
        if (typeof data !== 'object') return data;
        if (Array.isArray(data)) {
            const result = [];
            data.forEach(child => {
                result.push(this.parseFullObject(state, child, asTemplate));
            });
            return result;
        }
        if (data.isWwObject && data.uid) {
            const wwObject = state.wwObjects[data.uid];
            if (!wwObject) {
                return {};
            }
            if (asTemplate) {
                const template = {
                    ...wwObject,
                    content: this.parseFullObject(state, wwObject.content, asTemplate),
                    _state: this.parseFullObject(state, wwObject._state, asTemplate),
                    isWwObject: true,
                };
                delete template.uid;
                return template;
            } else {
                return {
                    ...wwObject,
                    content: this.parseFullObject(state, wwObject.content, asTemplate),
                    _state: this.parseFullObject(state, wwObject._state, asTemplate),
                };
            }
        }
        // Normal object
        const result = {};
        Object.keys(data).forEach(key => {
            result[key] = this.parseFullObject(state, data[key], asTemplate);
        });
        return result;
    },
};
