<template>
    <div
        class="modal-container"
        :style="backdropStyle"
        ww-responsive="modal-container"
        @mousedown.self="$emit('trigger-event', { name: 'backdropClick' })"
    >
        <transition :name="content.animation" mode="out-in">
            <wwLayout
                v-if="show"
                class="modal-dropzone"
                direction="column"
                path="modalContent"
                :class="content.position"
                :style="modalContentStyle"
                ww-responsive="modal-dropzone"
                :inherit-from-element="['width']"
            ></wwLayout>
        </transition>
    </div>
</template>

<script>
import { presets } from "./settings.js";

export default {
    props: {
        content: { type: Object, required: true },

    },
    emits: ["trigger-event", "update:sidepanel-content"],
    computed: {
        isEditing() {

            return false;
        },
        show() {

            return this.content.display;
        },
        backdropStyle() {
            if (this.show && this.content.backdrop) {
                return {
                    "--backdropColor": this.content.backdropColor,
                    "--backdropEvents": "auto",
                    zIndex: this.content.zIndex,
                };
            }

            return {
                "--backdropColor": "transparent",
                "--backdropEvents": "none",
                zIndex: this.content.zIndex,
            };
        },
        modalContentStyle() {
            const baseStyle = {
                "--transition": this.content.transition,
            };

            if (this.content.position !== "custom") {
                return {
                    ...baseStyle,
                    ...presets[this.content.position],
                };
            }

            return {
                ...baseStyle,
                "--top": this.content.positionTop,
                "--left": this.content.positionLeft,
            };
        },
    },
    watch: {

    },
};
</script>

<style lang="scss" scoped>
:root {
    --transition: none;
    --backdropColor: transparent;
    --backdropEvents: none;
    --top: unset;
    --left: unset;
}

.modal-container {
    display: flex;
    position: fixed;
    top: 0;
    height: 100vh; // fallback for older browsers
    height: 100dvh;
    z-index: 30;
    transition: background-color 0.5s;
    background-color: var(--backdropColor);
    pointer-events: var(--backdropEvents);
}

.modal-dropzone {
    position: absolute;
    height: inset;
    width: 100%;
    height: 100%;
    display: flex;

    align-items: var(--align) !important;
    justify-content: var(--justify) !important;

    top: var(--top);
    left: var(--left);

    pointer-events: none;
}

.fade-enter-active,
.fade-leave-active,
.fromTop-enter-active,
.fromTop-leave-active,
.fromRight-enter-active,
.fromRight-leave-active,
.fromBottom-enter-active,
.fromBottom-leave-active,
.fromLeft-enter-active,
.fromLeft-leave-active,
.zoomIn-enter-active,
.zoomIn-leave-active,
.zoomOut-enter-active,
.zoomOut-leave-active {
    transition: var(--transition);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fromTop-enter-from {
    opacity: 0;
    transform: translate(0%, -100%);
}
.fromTop-leave-to {
    opacity: 0;
    transform: translate(0%, -100%);
}

.fromRight-enter-from {
    opacity: 0;
    transform: translate(100%, 0%);
}
.fromRight-leave-to {
    opacity: 0;
    transform: translate(100%, 0%);
}

.fromBottom-enter-from {
    opacity: 0;
    transform: translate(0%, 100%);
}
.fromBottom-leave-to {
    opacity: 0;
    transform: translate(0%, 100%);
}

.fromLeft-enter-from {
    opacity: 0;
    transform: translate(-100%, 0%);
}
.fromLeft-leave-to {
    opacity: 0;
    transform: translate(-100%, 0%);
}

.zoomIn-enter-from {
    opacity: 0;
    transform: translate(0%, 0%) scale(1.5);
}
.zoomIn-leave-to {
    opacity: 0;
    transform: translate(0%, 0%) scale(1.5);
}

.zoomOut-enter-from {
    opacity: 0;
    transform: translate(0%, 0%) scale(0.5);
}
.zoomOut-leave-to {
    opacity: 0;
    transform: translate(0%, 0%) scale(0.5);
}
</style>
