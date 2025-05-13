import { ref, inject, computed, unref, watch } from 'vue';
import { getLayoutStyleFromContent } from '@/_front/helpers/wwLayoutStyle';
import { useRegisterElementLocalContext } from '@/_front/use/useElementLocalContext';
/* wwFront:start */
import { useRoute } from 'vue-router';
/* wwFront:end */

export default {
    /**
     * @PUBLIC_API
     */
    useCreate() {
        const parentRawData = inject('componentData', ref({}));
        return {
            async createElement(type, { content, _state } = {}, { keepChildren } = {}) {
                /* wwFront:start */
                wwLib.wwLog.warn('The function "createElement" should not be called on the production website.');
                /* wwFront:end */
             },
            async createElementFromTemplate(template, { keepChildren } = {}) {
                /* wwFront:start */
                wwLib.wwLog.warn(
                    'The function "createElementFromTemplate" should not be called on the production website.'
                );
                /* wwFront:end */
             },
            async cloneElement(uid, { name } = {}) {
                /* wwFront:start */
                wwLib.wwLog.warn('The function "cloneElement" should not be called on the production website.');
                /* wwFront:end */
             },
        };
    },

    /**
     * @PUBLIC_API
     */
    useLayoutStyle() {
        const componentContent = inject('componentContent');
        const componentStyle = inject('componentStyle');
        const componentConfiguration = inject('componentConfiguration');
        const componentWwProps = inject('componentWwProps');
        const componentContext = {
            content: componentContent,
            wwProps: componentWwProps,
        };

        return computed(() =>
            getLayoutStyleFromContent(componentContent, componentStyle, componentConfiguration, componentContext)
        );
    },

    /**
     * @PUBLIC_API
     */
    useBackgroundVideo() {
        const componentContent = inject('componentContent');

        return computed(() => {
            if (!componentContent['_ww-backgroundVideo']) return null;
            return {
                url: componentContent['_ww-backgroundVideo'],
                loop: componentContent['_ww-backgroundVideoLoop'],
                poster: componentContent['_ww-backgroundVideoPoster'],
                preload: componentContent['_ww-backgroundVideoPreload'],
                size: componentContent['_ww-backgroundVideoSize'],
            };
        });
    },

    /**
     * @PUBLIC_API
     */
    useLink({ isDisabled, forcedLinkRef } = {}) {
        const componentState = inject('componentState', {});
        const wwProps = inject('componentWwProps', {});

        const addInternalState = inject('wwAddInternalState', () => {});
        const removeInternalState = inject('wwRemoveInternalState', () => {});
        const sectionId = inject('sectionId');
        const bindingContext = inject('bindingContext', null);
        /* wwFront:start */
        const route = useRoute();
        /* wwFront:end */

        const normalizedLink = computed(() => {
            const rawLink = forcedLinkRef
                ? forcedLinkRef.value
                : wwProps.value.wwLink
                ? wwProps.value.wwLink
                : componentState.link;

            if (!rawLink || rawLink.type === 'none') {
                return { type: 'none' };
            }

            //OPEN / CLOSE POPUP
            if (rawLink.type === 'open-popup' || rawLink.type === 'close-popup') {
                return {
                    type: rawLink.type,
                    content: rawLink.content,
                    background: rawLink.background,
                };
            }

            const link = { type: rawLink.type };

            //TARGET
            if (rawLink.targetBlank || rawLink.type === 'file') link.target = '_blank';

            //DOWNLOAD
            if (rawLink.type === 'file') {
                if (!rawLink.file || typeof rawLink.file === 'string') {
                    link.download = true;
                } else {
                    link.download = rawLink.file.name;
                }
            }

            //QUERY
            if (rawLink.query) link.query = rawLink.query;

            if (rawLink.parameters) link.parameters = rawLink.parameters;

            //HREF
            switch (rawLink.type) {
                case 'internal':
                case 'collection': {
                    const variables = Object.values(
                        wwLib.$store.getters['data/getPageParameterVariablesFromId'](rawLink.pageId)
                    );
                     /* wwFront:start */
                    if (!rawLink.pageId) link.href = '';
                    else {
                        const pageId = `${rawLink.pageId}${
                            rawLink.type === 'collection' ? `_${bindingContext?.repeatIndex || 0}` : ''
                        }`;
                        const page =
                            wwLib.$store.getters['websiteData/getPageById'](pageId) ||
                            wwLib.$store.getters['websiteData/getPageByLinkId'](pageId);
                        if (!page) return { type: 'none' };
                        link.href = wwLib.wwPageHelper.getPagePath(page.id);
                        link.pageId = page.id;
                        for (const variable of variables) {
                            link.href = (link.href || '').replace(
                                `{{${variable.id}|${variable.defaultValue || ''}}}`,
                                rawLink.parameters?.[variable.id]
                            );
                        }
                    }
                    /* wwFront:end */
                    break;
                }
                case 'file':
                    if (!rawLink.file || typeof rawLink.file === 'string') {
                        link.href = rawLink.file || 'download';
                    } else {
                        link.href = rawLink.file.url;
                    }
                    break;
                case 'mail':
                    link.href = `mailto:${rawLink.href}`;
                    break;
                case 'tel':
                    link.href = `tel:${rawLink.href}`;
                    break;
                default:
                    link.href = rawLink.href;

                    if (typeof link.href !== 'string') {
                        link.href = '';
                    }

                    /* wwFront:start */
                    if (link.href && link.href.startsWith('/')) {
                        link.type = 'internal';
                    }
                    /* wwFront:end */
                    break;
            }

            //HASHTAG
            if (rawLink.sectionId && rawLink.pageId) {
                link.sectionId = rawLink.sectionId;
                const page =
                    wwLib.$store.getters['websiteData/getPageById'](rawLink.pageId) ||
                    wwLib.$store.getters['websiteData/getPageByLinkId'](rawLink.pageId);
                if (page && page.sections) {
                    const _section = page.sections.find(
                        ({ uid, linkId }) => uid === rawLink.sectionId || linkId === rawLink.sectionId
                    );
                    if (_section) {
                        link.sectionId = _section.uid;
                        link.hash = `${wwLib.wwUtils.sanitize(_section.sectionTitle)}`;
                    }
                }
            }

            //PAGE LOAD PROGRESS
            if (rawLink.loadProgress) {
                link.loadProgress = true;
                link.loadProgressColor = rawLink.loadProgressColor || 'blue';
            }

            return link;
        });

        const tag = computed(() => {
            if (normalizedLink.value.type === 'none') return 'div';
            if (normalizedLink.value.type === 'open-popup' || normalizedLink.value.type === 'close-popup') return 'div';
             // eslint-disable-next-line no-unreachable
            if (normalizedLink.value.type === 'internal' || normalizedLink.value.type === 'collection')
                return 'router-link';
            else return 'a';
        });

 
        const isOnSamePage = computed(() => {
            /* wwFront:start */
            if (normalizedLink.value.href) {
                let linkUrl, location;
                linkUrl = normalizedLink.value.href;
                if (linkUrl.endsWith('/')) linkUrl = linkUrl.slice(0, -1);
                if (linkUrl.startsWith('https://')) {
                    linkUrl = linkUrl.replace('https://', '');
                }
                if (linkUrl.startsWith('http://')) {
                    linkUrl = linkUrl.replace('http://', '');
                }
                location = decodeURI(route.path);
                if (location.endsWith('/')) location = location.slice(0, -1);

                return linkUrl === location;
            } else {
                return false;
            }
            /* wwFront:end */
         });

        watch(
            isOnSamePage,
            isOnSamePage => {
                if (isOnSamePage) {
                    addInternalState('_wwLinkActive');
                } else {
                    removeInternalState('_wwLinkActive');
                }
            },
            { immediate: true }
        );

        function navigate(event, attributes) {
            // eslint-disable-next-line vue/custom-event-name-casing
            wwLib.$emit('wwLink:clicked');
            event.stopPropagation();

            //NO NAVIGATION NEEDED
            if (isOnSamePage.value && !attributes.target) {
                //SCROLL TO SECTION
                if (normalizedLink.value.sectionId) {
                    const _section = wwLib.$store.getters['websiteData/getPage'].sections.find(
                        ({ uid, linkId }) =>
                            uid === normalizedLink.value.sectionId || linkId === normalizedLink.value.sectionId
                    );

                    if (_section) {
                        const section = wwLib.$store.getters['websiteData/getSections'][_section.uid];
                        wwLib.wwApp.scrollIntoView(
                            wwLib.getFrontDocument().querySelector(`[data-section-uid="${section.uid}"]`)
                        );
                    } else {
                        wwLib.getFrontWindow().scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }
                }
                return;
            }

             /* wwFront:start */
            if (attributes.target) {
                window.open(attributes.href).focus();
            } else {
                if (normalizedLink.value.type === 'internal') {
                    wwLib.getFrontRouter().push(attributes.href);
                } else {
                    window.location = attributes.href;
                }
            }
            /* wwFront:end */
        }

        return {
            properties: computed(() => {
                let properties = {};

                switch (normalizedLink.value.type) {
                    case 'close-popup':
                        properties.onClick = event => {
                            if (unref(isDisabled)) return;
                             event.stopPropagation();

                            // eslint-disable-next-line vue/custom-event-name-casing
                            wwLib.$emit('wwLink:closePopup');
                            wwLib.$store.dispatch('front/closeActiveLinkPopup', null);
                        };
                        break;
                    case 'open-popup':
                        properties.onClick = event => {
                            if (unref(isDisabled)) return;
                             event.stopPropagation();

                            wwLib.$store.dispatch('front/setActiveLinkPopup', {
                                content: normalizedLink.value.content,
                                background: normalizedLink.value.background,
                                sectionId,
                            });
                        };
                        break;
                    case 'none':
                        break;
                    default: {
                        //HREF
                        properties.href = normalizedLink.value.href;
                        if (
                            (normalizedLink.value.type === 'internal' || normalizedLink.value.type === 'collection') &&
                            !(properties.href || '').endsWith('/')
                        ) {
                            properties.href = `${properties.href}/`;
                        }

                        //QUERY
                        if (normalizedLink.value.query && normalizedLink.value.query.length) {
                            const query = normalizedLink.value.query
                                ?.filter(query => !!query)
                                .map(({ name, value }) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
                                .join('&');
                            properties.href = `${properties.href}${
                                properties.href.indexOf('?') !== -1 ? '&' : '?'
                            }${query}`;
                        }

                        //HASHTAG
                        if (normalizedLink.value.hash)
                            properties.href = `${properties.href}#${normalizedLink.value.hash}`;

                        //TO
                        properties.to = properties.href;
                        if (properties.href?.startsWith('/')) {
                            //Remove starting slash for href only
                            properties.href = properties.href.slice(1);
                        }

                        //TARGET
                        if (normalizedLink.value.target) properties.target = normalizedLink.value.target;

                        //DOWNLOAD
                        if (normalizedLink.value.download) properties.download = normalizedLink.value.download;

                        //NAVIGATE
                        const scrollToSection =
                            isOnSamePage.value && normalizedLink.value.hash && normalizedLink.value.target !== '_blank';

                        if ((tag.value !== 'router-link' && tag.value !== 'a') || scrollToSection) {
                            if (unref(isDisabled)) return;
                            properties.onClick = event => {
                                 if (normalizedLink.value.loadProgress && !isOnSamePage.value)
                                    wwLib.$store.dispatch('front/showPageLoadProgress', {
                                        color: normalizedLink.value.loadProgressColor,
                                    });
                                navigate(event, properties);
                            };
                        } else {
                            properties.onClick = event => {
                                 // eslint-disable-next-line vue/custom-event-name-casing
                                wwLib.$emit('wwLink:clicked');
                                if (normalizedLink.value.loadProgress && !isOnSamePage.value)
                                    wwLib.$store.dispatch('front/showPageLoadProgress', {
                                        color: normalizedLink.value.loadProgressColor,
                                    });
                                event.stopPropagation();
                            };
                        }
                        break;
                    }
                }

                return properties;
            }),
            tag,
            hasLink: computed(() => normalizedLink.value.type !== 'none'),
            normalizedLink,
        };
    },

    /**
     * @PUBLIC_API
     */
    useRegisterElementLocalContext,
};
