import { computed, unref } from 'vue';
import { get } from 'lodash';

const allScreenMedia = computed(() => getAllScreenMedia());
const currentActiveScreens = computed(() => {
    const screenSize = wwLib.$store.getters['front/getScreenSize'];
    const screenOrder = wwLib.$store.getters['front/getScreenSizes'][screenSize].order;
    const screenSizes = wwLib.$store.getters['front/getScreenSizes'];
    return allScreenMedia.value.filter(screen => screenSizes[screen].order <= screenOrder);
});

export function getComponentRawProperty({
    dataRef,
    data, // use either dataRef or data, not both. We choose to have two different because unref is expensive on deeply nested objects
    prefix,
    suffix,
    propertyConfiguration,
    statesRef,
    states, // use either statesRef or states, not both. We choose to have two different because unref is expensive on array
    libraryComponentData,
    libraryComponentDataRef, // use either dataRef or data, not both. We choose to have two different because unref is expensive on deeply nested objects
    breakpoint, // use to ignore responsive inheritance. Usefull for classes data extraction on the sidepanel
    noClasses,
    layers,
 }) {
    propertyConfiguration = propertyConfiguration || {};
    const useClasses = !noClasses && propertyConfiguration.classes;
    data = (dataRef ? dataRef.value : data) || {};
    libraryComponentData = (libraryComponentDataRef ? libraryComponentDataRef.value : libraryComponentData) || {};
    let result;

 
    let path = concatenatePath([prefix, suffix]);
    let rawPath = path;
    if (path.startsWith('_state.style')) {
        path = path.replace('_state.style', 'style');
        rawPath = rawPath.replace('_state.style', 'rawStyle');
    }
    if (path.startsWith('_state')) {
        path = path.replace('_state', 'state');
        rawPath = rawPath.replace('_state', 'rawState');
    }
    if (!propertyConfiguration.noRootMerge) {
        const rawValue = get(libraryComponentData, rawPath);
        const value = get(libraryComponentData, path);
        if (rawValue !== undefined && value !== undefined) {
            return value;
        }
    }

    const inheritFromParent = get(data?._state?.libraryComponentInjected, path);
    if (inheritFromParent) {
        const libraryComponentId = data?.parentLibraryComponentId;
        data = layers?.[libraryComponentId]?.childrenData?.value?.[data?.uid];
    }

    const defaultAppliedClassesIds = data?._state?.classes?.default || [];
    if (!propertyConfiguration.states && !propertyConfiguration.responsive) {
        const path = concatenatePath([prefix, prefix === '_state' ? '' : 'default', suffix]);
        if (useClasses) {
            for (const classId of defaultAppliedClassesIds) {
                const value = getClassValue(classId, path);
                if (value !== undefined) {
                    result = value;
                }
                for (const subClassId of data?._state?.subClasses?.default?.[classId] || []) {
                    const value = getSubClassValue(classId, subClassId, path);

                    if (value !== undefined) {
                        result = value;
                    }
                }
            }
        }
        const value = get(data, path);
        if (value !== undefined) {
            result = value;
        }

        return result;
    }

    const screens = breakpoint ? [breakpoint] : currentActiveScreens.value;
    if (propertyConfiguration.responsive && !propertyConfiguration.states) {
        for (const screen of screens) {
            const path = concatenatePath([prefix, screen, suffix]);
            if (useClasses) {
                for (const classId of defaultAppliedClassesIds) {
                    const value = getClassValue(classId, path);
                    if (value !== undefined) {
                        result = value;
                    }

                    for (const subClassId of data?._state?.subClasses?.default?.[classId] || []) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            result = value;
                        }
                    }
                }
            }
            const value = get(data, path);
            if (value !== undefined) {
                result = value;
            }
        }

        return result;
    }

    // RESPONSIVE AND STATEFULL
    states = (statesRef ? statesRef.value : states) || [];
    for (const screen of screens) {
        const path = concatenatePath([prefix, screen, suffix]);
        if (useClasses) {
            for (const classId of defaultAppliedClassesIds) {
                const value = getClassValue(classId, path);
                if (value !== undefined) {
                    result = value;
                }
                const defaultAppliedSubClassesIds = data?._state?.subClasses?.default?.[classId] || [];
                for (const subClassId of defaultAppliedSubClassesIds) {
                    const value = getSubClassValue(classId, subClassId, path);
                    if (value !== undefined) {
                        result = value;
                    }
                }
                for (const state of states) {
                    if (state === 'default') continue;
                    const appliedSubClassesIds = data?._state?.subClasses?.[state]?.[classId] || [];
                    for (const subClassId of appliedSubClassesIds) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            result = value;
                        }
                    }
                }
            }
        }
        const value = get(data, path);
        if (value !== undefined) {
            result = value;
        }
    }
    for (const state of states) {
        if (state === 'default') continue;
        const appliedClassesIds = data?._state?.classes?.[state] || [];
        for (const screen of screens) {
            const path = concatenatePath([prefix, screen, suffix]);
            if (useClasses) {
                for (const classId of appliedClassesIds) {
                    const value = getClassValue(classId, path);
                    if (value !== undefined) {
                        result = value;
                    }
                    const appliedSubClassesIds = data?._state?.subClasses?.[state]?.[classId] || [];
                    for (const subClassId of appliedSubClassesIds) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            result = value;
                        }
                    }
                }
            }
            const value = get(data, concatenatePath([prefix, `${state}_${screen}`, suffix]));
            if (value !== undefined) {
                result = value;
            }
        }
    }
    return result;
}

export function getComponentPropertyClassInfo({
    dataRef,
    data, // use either dataRef or data, not both. We choose to have two different because unref is expensive on deeply nested objects
    prefix,
    suffix,
    propertyConfiguration,
    statesRef,
    states, // use either statesRef or states, not both. We choose to have two different because unref is expensive on array
    breakpoint, // use to ignore responsive inheritance. Usefull for classes data extraction on the sidepanel
 }) {
    propertyConfiguration = propertyConfiguration || {};
    const useClasses = propertyConfiguration.classes;
    data = (dataRef ? dataRef.value : data) || {};
    let classInformation = {};

 
    const defaultAppliedClassesIds = data?._state?.classes?.default || [];
    if (!propertyConfiguration.states && !propertyConfiguration.responsive) {
        const path = concatenatePath([prefix, prefix === '_state' ? '' : 'default', suffix]);
        if (useClasses) {
            for (const classId of defaultAppliedClassesIds) {
                const value = getClassValue(classId, path);
                if (value !== undefined) {
                    classInformation.propertyValue = value;
                    classInformation.classId = classId;
                }
                for (const subClassId of data?._state?.subClasses?.default?.[classId] || []) {
                    const value = getSubClassValue(classId, subClassId, path);
                    if (value !== undefined) {
                        classInformation.propertyValue = value;
                        classInformation.classId = classId;
                        classInformation.subClassId = subClassId;
                        classInformation.overwrittenBy = 'default';
                    }
                }
            }
        }
        const value = get(data, path);
        if (value !== undefined) {
            classInformation.propertyValue = value;
            classInformation.overwritten = !!classInformation.classId;
        }

        return classInformation;
    }

    const screens = breakpoint ? [breakpoint] : currentActiveScreens.value;
    if (propertyConfiguration.responsive && !propertyConfiguration.states) {
        for (const screen of screens) {
            const path = concatenatePath([prefix, screen, suffix]);
            if (useClasses) {
                for (const classId of defaultAppliedClassesIds) {
                    const value = getClassValue(classId, path);
                    if (value !== undefined) {
                        classInformation.propertyValue = value;
                        classInformation.classId = classId;
                        classInformation.subClassId = null;
                        classInformation.overwritten = false;
                        delete classInformation.overwrittenBy;
                    }
                    for (const subClassId of data?._state?.subClasses?.default?.[classId] || []) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            classInformation.propertyValue = value;
                            classInformation.classId = classId;
                            classInformation.subClassId = subClassId;
                            classInformation.overwritten = false;
                            delete classInformation.overwrittenBy;
                        }
                    }
                }
            }
            const value = get(data, path);
            if (value !== undefined) {
                classInformation.propertyValue = value;
                classInformation.overwritten = !!classInformation.classId;
                classInformation.overwrittenBy = screen;
            }
        }

        return classInformation;
    }

    // RESPONSIVE AND STATEFULL
    states = (statesRef ? statesRef.value : states) || [];
    for (const screen of screens) {
        const path = concatenatePath([prefix, screen, suffix]);
        if (useClasses) {
            for (const classId of defaultAppliedClassesIds) {
                const value = getClassValue(classId, path);
                if (value !== undefined) {
                    classInformation.propertyValue = value;
                    classInformation.classId = classId;
                    classInformation.subClassId = null;
                    classInformation.overwritten = false;
                    delete classInformation.overwrittenBy;
                }
                for (const subClassId of data?._state?.subClasses?.default?.[classId] || []) {
                    const value = getSubClassValue(classId, subClassId, path);
                    if (value !== undefined) {
                        classInformation.propertyValue = value;
                        classInformation.classId = classId;
                        classInformation.subClassId = subClassId;
                        classInformation.overwritten = false;
                        delete classInformation.overwrittenBy;
                    }
                }
                for (const state of states) {
                    if (state === 'default') continue;
                    for (const subClassId of data?._state?.subClasses?.[state]?.[classId] || []) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            classInformation.propertyValue = value;
                            classInformation.classId = classId;
                            classInformation.subClassId = subClassId;
                            classInformation.overwritten = false;
                            delete classInformation.overwrittenBy;
                        }
                    }
                }
            }
        }
        const value = get(data, path);
        if (value !== undefined) {
            classInformation.propertyValue = value;
            classInformation.overwritten = !!classInformation.classId;
            classInformation.overwrittenBy = screen;
        }
    }

    for (const state of states) {
        if (state === 'default') continue;
        const appliedClassesIds = data?._state?.classes?.[state] || [];
        for (const screen of screens) {
            const path = concatenatePath([prefix, screen, suffix]);
            if (useClasses) {
                for (const classId of appliedClassesIds) {
                    const value = getClassValue(classId, path);
                    if (value !== undefined) {
                        classInformation.propertyValue = value;
                        classInformation.classId = classId;
                        classInformation.subClassId = null;
                        classInformation.overwritten = false;
                        delete classInformation.overwrittenBy;
                    }
                    for (const subClassId of data?._state?.subClasses?.[state]?.[classId] || []) {
                        const value = getSubClassValue(classId, subClassId, path);
                        if (value !== undefined) {
                            classInformation.propertyValue = value;
                            classInformation.classId = classId;
                            classInformation.subClassId = subClassId;
                            classInformation.overwritten = false;
                            delete classInformation.overwrittenBy;
                        }
                    }
                }
            }
            const value = get(data, concatenatePath([prefix, `${state}_${screen}`, suffix]));
            if (value !== undefined) {
                classInformation.propertyValue = value;
                classInformation.overwritten = !!classInformation.classId;
                classInformation.overwrittenBy = `${state}_${screen}`;
            }
        }
    }

    return classInformation;
}

 
function concatenatePath(pathes) {
    return pathes.filter(path => path && path.length).join('.');
}
function getClassValue(classId, path) {
    const classData = wwLib.$store.getters['libraries/getClasses'][classId];
    return get(classData, path);
}
function getSubClassValue(classId, subClassId, path) {
    const classData = wwLib.$store.getters['libraries/getClasses'][classId];
    return get(classData, `subClasses.${subClassId}.${path}`);
}
export function getAllScreenMedia() {
    const screenSizes = wwLib.$store.getters['front/getScreenSizes'];
    return Object.keys(screenSizes).sort((key1, key2) => screenSizes[key1].order - screenSizes[key2].order);
}
