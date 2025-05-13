import { watchEffect, ref, readonly } from 'vue';

export function eagerComputed(effect) {
    const holder = ref();
    watchEffect(() => {
        holder.value = effect();
    });
    return readonly(holder);
}

export function lazySet(ref, value) {
    if (ref && ref.value !== value) ref.value = value;
}
