import { computed } from 'vue';
import { useInjectStyle } from '@/_common/use/useInjectStyle';

export function useComponentKeyframes({ componentId, style, isEditing, isSelected }) {
    const _animationName = `ww-keyframes-${componentId}`;

    const animationKeyframes = computed(() => {
        return (
            style?.animationKeyframes &&
            `${style?.animationKeyframes}`.replace(/^(@keyframes\s*)[^\s{]*(\s*{)/gi, `$1${_animationName}$2`)
        );
    });

    useInjectStyle(_animationName, animationKeyframes);

    return {
        animationStyle: computed(() => {
            if (!style.animationDuration) return {};
 
            let animationPlayState = getRealValue(
                style.animationPlayState === undefined ? true : style.animationPlayState,
                'running',
                'paused'
            );
            let animationName = _animationName;
 
            return {
                animationName,
                animationPlayState,
                animationDuration: style.animationDuration,
                animationTimingFunction: style.animationTimingFunction || 'ease',
                animationDelay: style.animationDelay || '0s',
                animationIterationCount: style.animationIterationCount || 'infinite',
                animationFillMode: style.animationFillMode || 'none',
                animationDirection: getRealValue(style.animationDirection, 'alternate', 'normal'),
            };
        }),
    };
}

function getRealValue(value, valueTrue, valueFalse) {
    if (value === valueTrue || value === valueFalse) return value;
    return value ? valueTrue : valueFalse;
}
