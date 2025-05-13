<template>
    <wwEditableText
        class="ww-text"
        :tag="tag"
        :disabled="!canEditText"
        :model-value="internalText"
        :text-style="textStyle"
        :links="links"
        :sanitize="sanitize"
        @update:modelValue="updateText"
        @add-link="addLink"
        @remove-link="removeLink"
    ></wwEditableText>
</template>

<script>
/* eslint-disable no-unreachable */
import { inject } from 'vue';

export default {
    props: {
        text: { type: [String, Object], default: undefined },
        tag: { type: String, default: 'div' },
    },
    setup() {
        const content = inject('componentContent');
        return {
            content,
             wwFrontState: inject('wwFrontState'),
        };
    },
    computed: {
        canEditText() {
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable
            return false;
            /* wwFront:end */
        },
         textStyle() {
            return wwLib.wwUtils.getTextStyleFromContent(this.content);
        },
        internalText() {
            return (this.text === undefined ? this.content['_ww-text_text'] : this.text) || '';
        },
        sanitize() {
            return this.content['_ww-text_sanitize'];
        },
        links() {
            if (this.content['_ww-text_links']) {
                const links = {
                    ...this.content['_ww-text_links'],
                    ...this.content['_ww-text_links'][this.wwFrontState.lang],
                };
                // Horrible hack to handle the fact that old data are not under lang key
                Object.keys(links).forEach(key => {
                    if (key.length <= 4) {
                        delete links[key];
                    }
                });
                return links;
            } else {
                return {};
            }
        },
    },
     methods: {
        updateText(text) {
            /* wwFront:start */
            return;
            /* wwFront:end */
            // eslint-disable-next-line no-unreachable
            if (!this.isTextBound) {
                this.updateContent({ '_ww-text_text': text });
            }
        },
        async addLink({ id, value }) {
            /* wwFront:start */
            return;
            /* wwFront:end */
            const links = { ...this.content['_ww-text_links'] };
            this.updateContent({
                '_ww-text_links': {
                    ...links,
                    [this.wwFrontState.lang]: { ...links[this.wwFrontState.lang], [id]: value },
                },
            });
        },
        async removeLink(id) {
            /* wwFront:start */
            return;
            /* wwFront:end */
            const links = { ...this.content['_ww-text_links'] };
            delete links[id];
            if (links[this.wwFrontState.lang]) {
                delete links[this.wwFrontState.lang][id];
            }
            this.updateContent({ '_ww-text_links': links });
        },
    },
};
</script>
