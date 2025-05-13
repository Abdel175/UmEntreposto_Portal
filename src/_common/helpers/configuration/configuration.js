import {
    TEXT_CONFIGURATION,
    LAYOUT_CONFIGURATION,
    GRID_CONFIGURATION,
    BACKGROUND_VIDEO_CONFIGURATION,
} from './configurationInherit';

export function inheritFrom(configuration, from) {
    if (configuration.inherit === from) return true;
    if (configuration.inherit && configuration.inherit.type === from) {
        return configuration.inherit;
    }
    if (!Array.isArray(configuration.inherit)) return false;
    return configuration.inherit.find(el => el === from || (el && el.type === from));
}

export function getInheritedConfiguration(configuration) {
    const inheritFromText = inheritFrom(configuration, 'ww-text');
    if (inheritFromText) {
        if (!Array.isArray(inheritFromText.exclude)) {
            configuration = {
                ...configuration,
                properties: { ...(configuration.properties || {}), ...TEXT_CONFIGURATION.properties },
            };
        } else {
            configuration = {
                ...configuration,
                properties: { ...(configuration.properties || {}) },
            };
            for (const [key, value] of Object.entries(TEXT_CONFIGURATION.properties)) {
                if (!inheritFromText.exclude.some(k => `_ww-text_${k}` === key)) {
                    configuration.properties[key] = value;
                }
            }
        }
    }

    const inheritFromBackgroundVideo = inheritFrom(configuration, 'ww-background-video');
    if (inheritFromBackgroundVideo) {
        configuration = {
            ...configuration,
            properties: {
                ...(configuration.properties || {}),
                ...BACKGROUND_VIDEO_CONFIGURATION.properties,
            },
        };
    }

    const inheritFromLayout = inheritFrom(configuration, 'ww-layout');
    if (inheritFromLayout) {
        if (!Array.isArray(inheritFromLayout.exclude)) {
            configuration = {
                ...configuration,
                properties: {
                    ...(configuration.properties || {}),
                    ...LAYOUT_CONFIGURATION.properties,
                    ...GRID_CONFIGURATION.properties,
                },
            };
        } else {
            configuration = {
                ...configuration,
                properties: {
                    ...(configuration.properties || {}),
                    ...LAYOUT_CONFIGURATION.properties,
                    ...GRID_CONFIGURATION.properties,
                },
            };
            for (const [key, value] of Object.entries(LAYOUT_CONFIGURATION.properties)) {
                if (!inheritFromLayout.exclude.some(k => `_ww-layout_${k}` === key)) {
                    configuration.properties[key] = value;
                }
            }
        }
    }

    return configuration;
}
