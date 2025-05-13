<script>
import { h, resolveComponent } from 'vue';
import TextLink from './TextLink.vue';

function createNode(node, options) {
    const nodeName = node.nodeName.toLowerCase();
    if (nodeName === '#comment') {
        return;
    }
    if (nodeName === '#text') {
        return node.textContent;
    }
    if (nodeName === 'script') {
        return null;
    }
    const children = Array.from(node.childNodes)
        .map(child => createNode(child, options))
        .filter(n => !!n);
    let attrs = {};
    if (node.attributes) {
        for (let a of node.attributes) {
            if (!a.nodeName.includes('data-ww-link')) {
                attrs[a.nodeName] = a.nodeValue;
            }
        }
    }
    if (node.hasAttribute('data-ww-link-id')) {
        return h(
            TextLink,
            {
                link: options.links[node.getAttribute('data-ww-link-id')],
                ...attrs,
            },
            { default: () => children }
        );
    }
    return h(nodeName, attrs, children);
}

export default {
    props: {
        text: { type: String, required: true },
        links: { type: Object, default: () => ({}) },
        tag: { type: String, default: 'div' },
    },
    computed: {
        isEditing() {
             // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    render() {
        let text = this.text;
        text = text.replace(/<p>/g, '<div>');
        text = text.replace(/<\/p>/g, '</div>');
        text = text.replace(/<br><\/div>/g, '<br>');
        text = text.replace(/<\/div><div>/g, '<br>');
        text = text.replace(/\n/g, '<br>');
        text = text.replace(/<\/div>/g, '');
        text = text.replace(/<div>/g, '');

        // remove useless characters from Word
        text = text.replace(/\u2028/g, ' ');

        const contentText = document.createElement('div');
        contentText.innerHTML = text;

        const children = Array.from(contentText.childNodes)
            .map(child =>
                createNode(child, {
                    links: this.links,
                    isEditing: this.isEditing,
                })
            )
            .filter(n => !!n);
        return h(
            resolveComponent(this.tag),
            {
                class: {
                    'ww-text-content': true,
                    editing: this.isEditing,
                },
                type: this.tag === 'button' ? 'button' : null,
            },
            children
        );
    },
};
</script>

<style lang="scss" scoped>
a {
    display: inline;
}
 </style>
