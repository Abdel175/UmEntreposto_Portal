<template>
    <wwPageLoadProgress />
    <div :ww-page-id="page.id" class="website-wrapper">
        <!-- __WW_PAGE_MADE_WITH_WEWEB__ -->
        <div v-if="page && page.pageLoaded" class="sections-wrapper">
            <template v-for="(section, index) in sections" :key="section.uid">
                <!-- wwFront:start -->
                <div class="placeholder-section" :data-placeholder-section-uid="section.uid"></div>
                <!-- wwFront:end -->
                <wwSection
                    :uid="section.uid"
                    :section-index="index"
                    :index="index"
                    :ww-responsive="`ww-section-${index}`"
                />
            </template>
         </div>
        <!-- POPUPS -->
        <transition name="ww-front-popups" tag="div">
            <wwLinkPopup
                v-if="activeLinkPopup"
                :content="activeLinkPopup.content"
                :background="activeLinkPopup.background"
                :section-id="activeLinkPopup.sectionId"
            />
        </transition>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
import wwPageLoadProgress from '@/_front/components/wwPageLoadProgress';
import { getBackgroundStyle } from '@/_front/helpers/wwBackgroungStyle';

/* wwFront:start */
import { useHead } from '@vueuse/head';
/* wwFront:end */

 
export default {
    components: {
        wwPageLoadProgress,
     },
    setup() {
        const store = useStore();
        const page = computed(() => store.getters['websiteData/getPage'] || { id: null, meta: {} });

        const designInfo = computed(() => store.getters['websiteData/getDesignInfo'] || {});

        /* wwFront:start */
        const homePage = computed(
            () => store.getters['websiteData/getPageById'](designInfo.value.homePageId) || { id: null, meta: {} }
        );
        // TODO: not execute on first load
        useHead({
            title: computed(() => wwLib.wwLang.getText(page.value.title) || wwLib.wwLang.getText(homePage.value.title)),
            htmlAttrs: { lang: wwLib.wwLang.lang, amp: false },
        });
        /* wwFront:end */
        return {
            designInfo,
            page,
            mousePosition: {
                x: 0,
                y: 0,
            },
            /* wwFront:start */
            sections: computed(() => {
                const sections = store.getters['websiteData/getSections'];
                return page.value.sections.map(({ uid }) => sections[uid]);
            }),
            /* wwFront:end */
             /* wwFront:start */
            brandingOptions: {
                href: 'https://go.weweb.io/preview',
                target: '_blank',
                style: 'position: fixed; bottom: 4px; right: 4px; background: rgb(38, 38, 38); color: white; padding: 10px 12px; font-size: 14px; border: 1px solid rgb(97, 97, 97); border-radius: 4px; cursor: pointer; font-weight: 500;',
            },
            /* wwFront:end */
        };
    },
    computed: {
        ...mapGetters({
            designInfo: 'websiteData/getDesignInfo',
            activeLinkPopup: 'front/getActiveLinkPopup',
            screen: 'front/getScreenSize',
            theme: 'front/getTheme',
         }),
        background() {
            return getBackgroundStyle(this.designInfo?.background || {});
        },
    },
    watch: {
        activeLinkPopup() {
            if (this.activeLinkPopup) {
                document.querySelector('html').classList.add('ww-link-popup-open');
            } else {
                document.querySelector('html').classList.remove('ww-link-popup-open');
            }
        },
         theme() {
            this.setTheme();
        },
        background() {
            this.setBackground();
        },
    },
    mounted() {
         this.setTheme();
        this.setBackground();
        /* wwFront:start */
        /* wwFront:end */
    },
     methods: {
        /* wwFront:start */
        checkBranding() {
            const frontDocument = wwLib.getFrontDocument();
            const allElem = frontDocument.querySelectorAll('a');
            for (const elem of allElem) {
                if (elem.innerHTML === 'Made with WeWeb') {
                    const hasSameStyle = elem.getAttribute('style') === this.brandingOptions.style;
                    const hasSameHref = elem.getAttribute('href') === this.brandingOptions.href;
                    const hasSameTarget = elem.getAttribute('target') === this.brandingOptions.target;
                    if (hasSameStyle && hasSameHref && hasSameTarget) {
                        return;
                    }
                }
            }
            this.addBranding();
        },
        addBranding() {
            const frontDocument = wwLib.getFrontDocument();
            const elem = frontDocument.createElement('a');
            elem.innerHTML = 'Made with WeWeb';
            Object.keys(this.brandingOptions).forEach(key => elem.setAttribute(key, this.brandingOptions[key]));
            frontDocument.body.appendChild(elem);
        },
        /* wwFront:end */
        setTheme() {
            if (this.theme === 'dark') {
                wwLib.getFrontDocument().documentElement.classList.add('ww-app-theme-dark');
            } else {
                wwLib.getFrontDocument().documentElement.classList.remove('ww-app-theme-dark');
            }
        },
        setBackground() {
            wwLib.getFrontDocument().documentElement.style.background = this.background;
        },
        getTarget(section) {
            return `[data-placeholder-section-uid="${section.uid}"],[data-section-uid="${section.uid}"]`;
        },
     },
};
</script>

<style lang="scss">
html {
    overflow-x: hidden;
    width: 100%;

    &.ww-link-popup-open {
        overflow-y: hidden;
    }
}
 </style>

<style scoped lang="scss">
.website-wrapper {
    height: 100%;
    .placeholder-section {
        opacity: 0;
        height: 0;
        width: 0;
        overflow: hidden;
        pointer-events: none;
    }

    .sections-wrapper {
        position: relative;
        isolation: isolate;
     }
}
.ww-front-popups-enter-active,
.ww-front-popups-leave-active {
    transition: all 0.3s;
}
.ww-front-popups-enter-from, .ww-front-popups-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0.95);
}
 </style>
