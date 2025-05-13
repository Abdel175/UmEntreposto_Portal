<template>
    <div class="ww-link-popup" :style="backgroundStyle" ww-responsive="ww-link-bg" :data-section-uid="sectionId">
        <div class="ww-link-popup__background" @click="close()"></div>
        <div class="ww-link-popup__content">
            <wwObject ref="wwObject" v-bind="content" @click="handleWwObjectClick" />
        </div>
    </div>
</template>

<script>
import { provide, ref } from 'vue';

export default {
    name: 'wwLinkPopup',
    props: {
        content: Object,
        background: Object,
        sectionId: String,
    },
    setup(props) {
        provide('sectionId', props.sectionId);
        provide('_wwCanInteract', ref({ canInteract: true }));
        provide('_wwCanBeEdited', ref(true));
        provide('dragZoneId', 'linkPopup');
        return {};
    },
    computed: {
        backgroundStyle() {
            let style = {};

            if (!this.background) return style;

            if (typeof this.background === 'object') {
                if (this.background.type === 'none') return {};
                if (this.background.type === 'gradient' && this.background.value && this.background.value.value)
                    return { backgroundImage: this.background.value.value };
                else return { backgroundColor: this.background.value };
            } else {
                if (this.background.startsWith('var')) return { backgroundColor: this.background };
                if (this.background.includes('gradient')) return { backgroundImage: this.background };
                return { backgroundColor: this.background };
            }
        },
    },
    methods: {
        close() {
            wwLib.$store.dispatch('front/closeActiveLinkPopup', null);
        },
        handleWwObjectClick($event) {
            if (this.$refs.wwObject.$el === $event.target) {
                this.close();
            }
        },
    },
};
</script>

<style>
.no-scroll {
    overflow: hidden;
}
</style>

<style scoped lang="scss">
.ww-link-popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        min-height: 100%;
    }
    &__content {
        position: relative;
        min-height: 20px;
        width: 100%;
        z-index: 102;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
