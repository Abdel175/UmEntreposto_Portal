<template>
    <div class="ww-loader" :style="cssVariable">
        <div v-if="content.spinner === 'plane'" class="sk-plane"></div>

        <div v-else-if="content.spinner === 'chase'" class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'bounce'" class="sk-bounce">
            <div class="sk-bounce-dot"></div>
            <div class="sk-bounce-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'wave'" class="sk-wave">
            <div class="sk-wave-rect"></div>
            <div class="sk-wave-rect"></div>
            <div class="sk-wave-rect"></div>
            <div class="sk-wave-rect"></div>
            <div class="sk-wave-rect"></div>
        </div>

        <div v-else-if="content.spinner === 'pulse'" class="sk-pulse"></div>

        <div v-else-if="content.spinner === 'flow'" class="sk-flow">
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'swing'" class="sk-swing">
            <div class="sk-swing-dot"></div>
            <div class="sk-swing-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'circle'" class="sk-circle">
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
            <div class="sk-circle-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'circle-fade'" class="sk-circle-fade">
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
            <div class="sk-circle-fade-dot"></div>
        </div>

        <div v-else-if="content.spinner === 'grid'" class="sk-grid">
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
        </div>

        <div v-else-if="content.spinner === 'fold'" class="sk-fold">
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
        </div>

        <div v-else-if="content.spinner === 'wander'" class="sk-wander">
            <div class="sk-wander-cube"></div>
            <div class="sk-wander-cube"></div>
            <div class="sk-wander-cube"></div>
        </div>
    </div>
</template>

<script>
import './spinkit.min.css';

export default {
    props: {
        content: { type: Object, required: true },
    },
    computed: {
        cssVariable() {
            return {
                '--sk-color': this.content.color,
                '--sk-size': this.content.size,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-loader {
    justify-content: center;
    align-items: center;
}
</style>
