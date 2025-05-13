<template>
    <div class="ww-page-load-progress" :class="{ display: showPageLoadProgress }">
        <div class="progress" :style="{ width: pageLoadProgress + '%', background: pageLoadProgressColor }"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            pageLoadProgress: 0,
            isProgressing: false,
            pageLoadProgressColor: 'blue',
        };
    },
    computed: {
        ...mapGetters({
            showPageLoadProgress: 'front/showPageLoadProgress',
        }),
    },
    watch: {
        showPageLoadProgress() {
            if (this.showPageLoadProgress) {
                this.pageLoadProgressColor = this.showPageLoadProgress.color || '#000000';
                this.pageLoadProgress = 10;
                this.isProgressing = true;
                setTimeout(this.runPageLoadProgress, 300);
            } else {
                this.isProgressing = false;
            }
        },
    },
    methods: {
        runPageLoadProgress() {
            if (!this.isProgressing) {
                this.pageLoadProgress = 0;
                return;
            }
            this.pageLoadProgress = this.pageLoadProgress + (100 - this.pageLoadProgress) / 5;
            setTimeout(this.runPageLoadProgress, 300);
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-page-load-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    height: 3px;
    display: flex;
    pointer-events: none;
    align-items: flex-start;
    z-index: 99999999999999999;

    &.display {
        opacity: 1;
    }
    & .progress {
        height: 100%;
        background: red;
        transition: width 0.3s linear;
    }
}
</style>
