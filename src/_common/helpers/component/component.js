import { useComponentBasesStore } from '@/pinia/componentBases';

export function getComponentVueComponentName(type, uid, noLog = false) {
    const baseUid = getComponentBaseUid(type, uid, noLog);
    return getComponentBaseVueComponentName(type, baseUid);
}

export function getComponentBaseVueComponentName(type, baseUid) {
    if (!baseUid) return null;
    if (type === 'element') {
        return `wwobject-${baseUid}`;
    } else if (type === 'section') {
        return `section-${baseUid}`;
    }
    return null;
}

export function getComponentBaseUid(type, uid, noLog = false) {
    if (type === 'element') {
        return wwLib.$store.getters['websiteData/getWwObjects'][uid]?.wwObjectBaseId;
    } else if (type === 'libraryComponent') {
        return wwLib.$store.getters['websiteData/getWwObjects'][uid]?.libraryComponentBaseId;
    } else if (type === 'section') {
        const baseId = wwLib.$store.getters['websiteData/getSections'][uid]?.sectionBaseId;
        if (!baseId) {
            if (!noLog) wwLib.wwLog.error(`Component base not found : ${type} / ${uid}`);
            return null;
        }
        return baseId;
    }
    return null;
}

function _getIcon(type, config, uid) {
    const { icon, deprecated } = config.editor || {};
    if (deprecated) return 'warning';
    if (icon) return icon;
    if (type === 'element') {
        if (uid && !wwLib.$store.getters['websiteData/getWwObjects'][uid]) return 'warning';
        return 'element';
    } else if (type === 'section') {
        return 'section';
    } else if (type === 'libraryComponent') {
        return 'component';
    } else {
        return 'options';
    }
}

export function getComponentIcon(type, uid) {
    const config = getComponentConfiguration(type, uid);
    return _getIcon(type, config, uid);
}

export function getComponentBaseIcon(type, baseUid) {
    const config = getComponentBaseConfiguration(type, baseUid);
    return _getIcon(type, config);
}

function _getComponentConfiguration(name) {
    const store = useComponentBasesStore(wwLib.$pinia);
    return store.configurations[name] || {};
}

export function getComponentConfiguration(type, uid, noLog = false) {
    if (type === 'libraryComponent') {
        const baseUid = getComponentBaseUid(type, uid, noLog);
        return wwLib.$store.getters['libraries/getComponents'][baseUid]?.configuration || {};
    }
    const name = getComponentVueComponentName(type, uid, noLog);
    return _getComponentConfiguration(name);
}

export function getComponentBaseConfiguration(type, baseUid) {
    if (type === 'libraryComponent') {
        return wwLib.$store.getters['libraries/getComponents'][baseUid]?.configuration || {};
    }
    const name = getComponentBaseVueComponentName(type, baseUid);
    return _getComponentConfiguration(name);
}

function _getLabel(type, config) {
    if (!type) return '';
    const { label, deprecated } = config.editor || {};
    let returnLabel = '';
    if (type === 'section') {
        if (wwLib.wwManagerLang) {
            returnLabel = wwLib.wwManagerLang.getText(label) || 'Section';
        } else {
            returnLabel = label && label.en ? label.en : 'Section';
        }
    } else {
        if (wwLib.wwManagerLang) {
            returnLabel = wwLib.wwManagerLang.getText(label) || 'Element';
        } else {
            returnLabel = label && label.en ? label.en : 'Element';
        }
    }
    return `${returnLabel}${deprecated ? ' - Deprecated' : ''}`;
}

export function getComponentBaseLabel(type, baseUid) {
    if (type === 'libraryComponent') {
        const longName = wwLib.$store.getters['libraries/getComponents'][baseUid]?.name || 'Component';
        const pathes = longName.split('/');
        return pathes[pathes.length - 1];
    }
    const config = getComponentBaseConfiguration(type, baseUid);
    return _getLabel(type, config);
}

export function getComponentLabel(type, uid) {
    if (!type) return '';
    const name = getComponentName(type, uid);
    if (name) return name;
    if (type === 'libraryComponent') {
        const baseUid = getComponentBaseUid(type, uid);
        return getComponentBaseLabel(type, baseUid);
    }
    const config = getComponentConfiguration(type, uid);
    return _getLabel(type, config);
}

export function getElementDomElement(componentId) {
    return wwLib.getFrontDocument().querySelector(`[data-ww-component-id="${componentId}"]`);
}

const FALSY_VALUES = ['none', 'false', false, null, undefined];
export function isComponentDisplayed(displayValue) {
    if (typeof displayValue === 'string') return !FALSY_VALUES.includes(displayValue.toLowerCase());
    return !FALSY_VALUES.includes(displayValue);
}

export const DEFAULT_DISPLAY_VALUES = ['block', 'inline-block'];

export function getDisplayAllowedValues(configuration, context /* {content, wwProps} */) {
    if (typeof configuration?.options?.displayAllowedValues === 'function') {
        return configuration?.options?.displayAllowedValues(context?.content, context?.wwProps);
    }
    return configuration?.options?.displayAllowedValues || DEFAULT_DISPLAY_VALUES;
}

export function getDisplayValue(displayValue, configuration, context) {
    const isDisplayed = isComponentDisplayed(displayValue);

    if (!isDisplayed) return 'none';

    const allowedValues = getDisplayAllowedValues(configuration, context);

    if (typeof displayValue === 'string' && allowedValues.includes(displayValue.toLowerCase())) {
        return displayValue.toLowerCase();
    }

    return allowedValues[0];
}

export function doesComponentSupportDisplayType(configuration, displayType, context) {
    return getDisplayAllowedValues(configuration, context).includes(displayType);
}

export function getComponentSize(size, defaultSize = 'unset') {
    if (!size || size === 'auto') return defaultSize;
    return size;
}

export function getPageSectionsIds() {
    return Object.keys(wwLib.$store.getters['websiteData/getSections']);
}

export function getPageElementsIds() {
    const page = JSON.stringify(wwLib.$store.getters['websiteData/getFullPage']);
    const r = /"uid":"([\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12})"/g;
    let matches,
        output = [];
    while ((matches = r.exec(page))) {
        output.push(matches[1]);
    }

    return output;
}

export function getComponentName(type, uid) {
    if (!type) return '';
    if (type === 'section') {
        const { sectionTitle } = wwLib.$store.getters['websiteData/getSections'][uid] || {};
        return sectionTitle;
    } else {
        const { name } = wwLib.$store.getters['websiteData/getWwObjects'][uid] || { name: 'Element undefined' };
        return name;
    }
}
export function setComponentName(type, uid, value) {
    wwLib.$store.dispatch('websiteData/setComponentProperty', {
        type,
        uid,
        path: `${type === 'section' ? 'sectionTitle' : 'name'}`,
        value,
    });
}
