const VERSION = 3;

export default class wwObjectHelper {
    static get typeAliases() {
        return {
            'ww-text': 'd7904e9d-fc9a-4d80-9e32-728e097879ad',
            'ww-image': '3a7d6379-12d3-4387-98ff-b332bb492a63',
            'ww-button': '59dca300-db78-42e4-a7a6-0cbf22d3cc82',
            'ww-icon': '1b1e2173-9b78-42cc-a8ee-a6167caea340',
            'ww-checkbox': 'af811adf-94d9-49dd-ab22-e2f29ae30299',
            'ww-video': '1494761b-1d0c-4266-aba7-7f24f824978e',
            'ww-iframe': '6d692ca2-6cdc-4805-aa0c-211102f335d0',
            'ww-columns': '21881619-a984-4847-81a9-922c3dbb5853',
            'ww-container': '086d46a0-9232-4df3-8119-7d3c8779cb1a',
            'ww-flexbox': 'b783dc65-d528-4f74-8c14-e27c934c39b1',
            'ww-hover-dropdown': '0dc461bb-103e-4b2e-80e0-846ec3c30a6e',
            'ww-map': '3265984a-eb92-4d73-b702-dbd0e4d1472e',
            'ww-expand': '53401515-b694-4c79-a88d-abeecb1de562',
            'ww-tabs': 'fa33562c-495c-4d2e-bc8f-cf5ec449bf6e',
            'navigation-menu': 'fb3e0024-f017-4193-a6a1-bc2eed330d1d',
        };
    }

    static getDefault(type, content = {}, _state = {}, name) {
        type = this.typeAliases[type] || type;

        if (!content.default) content = { default: content };
        return {
            isWwObject: true,
            version: VERSION,
            type,
            content,
            name,
            _state,
            wwObjectBaseId: type,
        };
    }

    /**
     * TODO: signature will complety change as soon as we are sure non external code use it anymore
     * @PUBLIC_API
     */
    static async create(type, content, _state, parentSectionId, keepChildren, parentLibraryComponentId) {
        return await wwObjectHelper.createFromTemplate(
            wwObjectHelper.getDefault(type, content, _state, _state && _state.name),
            parentSectionId,
            keepChildren,
            parentLibraryComponentId
        );
    }

    /**
     * TODO: signature will complety change as soon as we are sure non external code use it anymore
     */
    static async createFromTemplate(wwObjectTemplate, parentSectionId, keepChildren, parentLibraryComponentId) {
        const type = wwObjectTemplate.type;

        if (type && !wwObjectTemplate.wwObjectBaseId) {
            wwObjectTemplate.wwObjectBaseId = this.typeAliases[type] || type;
        }

        if (type && (type === 'ww-button' || type === 'ww-text')) {
            if (wwObjectTemplate.content.default.text) {
                const content = { ...wwObjectTemplate.content.default };
                content['_ww-text_text'] = content.text;
                delete content.text;
                wwObjectTemplate.content.default = content;
            }
        }

        wwObjectTemplate.parentSectionId = parentSectionId;
        wwObjectTemplate.parentLibraryComponentId = parentLibraryComponentId;

        return await wwLib.$store.dispatch('websiteData/createWwObjectFromTemplate', {
            wwObjectTemplate,
            noHistory: true,
            keepChildren,
        });
    }

    static async createLibraryComponentInstance(libraryComponentBaseId) {
        return await wwLib.$store.dispatch('websiteData/createWwObjectFromTemplate', {
            wwObjectTemplate: {
                isWwObject: true,
                libraryComponentBaseId,
                content: {},
                _state: {},
            },
            noHistory: true,
        });
    }

    /**
     * TODO: signature will complety change as soon as we are sure non external code use it anymore
     * @PUBLIC_API
     */
    static async cloneElement(uid, parentSectionId, name, parentLibraryComponentId) {
        const template = wwObjectHelper.convertToTemplate(uid);
        const newWwObjectId = await wwObjectHelper.createFromTemplate(
            { ...template, name },
            parentSectionId,
            false,
            parentLibraryComponentId
        );
        return { isWwObject: true, uid: newWwObjectId };
    }

    static convertToTemplate(uid) {
        return wwLib.$store.getters['websiteData/getFullWwObject'](uid, true);
    }

    /**
     * @PUBLIC_API
     */
    static getWwObject(uid) {
        return wwLib.$store.getters['websiteData/getWwObjects'][uid];
    }

    static async removeWwObject(uidToRemove) {
        async function _removeWwObject(parentType, parent) {
            if (JSON.stringify(parent).includes(uidToRemove)) {
                const content = parent.content?.default || {};
                for (const key in content) {
                    if (Array.isArray(content[key])) {
                        const index = content[key].findIndex(item => item.uid === uidToRemove);
                        if (index !== -1) {
                            let newContent = JSON.parse(JSON.stringify(content[key]));
                            newContent.splice(index, 1);
                            await wwLib.$store.dispatch('websiteData/removeWwObject', {
                                wwObjectId: uidToRemove,
                                originElement: {
                                    wwObjectId: parentType == 'element' ? parent.uid : null,
                                    sectionId: parentType == 'section' ? parent.uid : null,
                                    path: `content.${key}`,
                                    value: newContent,
                                },
                            });
                            return {
                                parentId: parent.uid,
                                childPath: key,
                                childIndex: index,
                            };
                        }
                    }
                }
            }
        }

        let parent;
        for (const uid in wwLib.$store.getters['websiteData/getSections']) {
            const section = wwLib.$store.getters['websiteData/getSections'][uid];
            if (section.uid === uidToRemove) continue;
            const parentData = await _removeWwObject('section', section);
            if (parentData) {
                parent = {
                    ...parentData,
                    type: 'section',
                };
            }
        }
        for (const uid in wwLib.$store.getters['websiteData/getWwObjects']) {
            const element = wwLib.$store.getters['websiteData/getWwObjects'][uid];
            if (element.uid === uidToRemove) continue;
            const parentData = await _removeWwObject('element', element);
            if (parentData) {
                parent = {
                    ...parentData,
                    type: 'element',
                };
            }
        }
        return parent;
    }

    static findParentWwObject(uidToFind) {
        function _findParentWwObject(parentType, parent) {
            if (JSON.stringify(parent).includes(uidToFind)) {
                const content = parent.content?.default || {};
                for (const key in content) {
                    if (Array.isArray(content[key])) {
                        const index = content[key].findIndex(item => item.uid === uidToFind);
                        if (index !== -1) {
                            return {
                                parentId: parent.uid,
                                childType: 'array',
                                childPath: key,
                                childIndex: index,
                            };
                        }
                    } else if (content[key]?.uid === uidToFind) {
                        return {
                            parentId: parent.uid,
                            childType: 'single',
                            childPath: key,
                        };
                    } else if (content[key]?.repeatable?.length && content[key]?.repeatable[0].uid === uidToFind) {
                        return {
                            parentId: parent.uid,
                            childType: 'array',
                            childPath: `${key}.repeatable`,
                            childIndex: 0,
                        };
                    }
                }
            }
        }

        let parent;
        for (const uid in wwLib.$store.getters['websiteData/getSections']) {
            const section = wwLib.$store.getters['websiteData/getSections'][uid];
            if (section.uid === uidToFind) continue;
            const parentData = _findParentWwObject('section', section);
            if (parentData) {
                parent = {
                    ...parentData,
                    parentSectionId: section.uid,
                    type: 'section',
                };
            }
        }
        for (const uid in wwLib.$store.getters['websiteData/getWwObjects']) {
            const element = wwLib.$store.getters['websiteData/getWwObjects'][uid];
            if (element.uid === uidToFind) continue;
            const parentData = _findParentWwObject('element', element);
            if (parentData) {
                parent = {
                    ...parentData,
                    parentSectionId: element.parentSectionId,
                    type: 'element',
                };
            }
        }
        return parent;
    }

    static findWwObjectByName(name) {
        for (const uid in wwLib.$store.getters['websiteData/getWwObjects']) {
            const element = wwLib.$store.getters['websiteData/getWwObjects'][uid];
            if (element.name === name) {
                return element;
            }
        }
        for (const uid in wwLib.$store.getters['websiteData/getSections']) {
            const section = wwLib.$store.getters['websiteData/getSections'][uid];
            if (section.sectionTitle === name) {
                return section;
            }
        }
        return null;
    }
}
