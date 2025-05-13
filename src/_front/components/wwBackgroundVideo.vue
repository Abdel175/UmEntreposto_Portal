<template>
    <div class="ww-background-video">
        <video ref="video" muted autoplay playsinline v-bind="attributes" ww-responsive="video"></video>
    </div>
</template>

<script>
export default {
    name: 'BackgroundVideo',
    props: {
        video: { type: Object, required: true },
    },
    computed: {
        poster() {
            if (this.video.poster) {
                 /* wwFront:start */
                // eslint-disable-next-line no-unreachable
                return `${this.video.poster}`;
                /* wwFront:end */
            } else {
                return '';
            }
        },
        attributes() {
            const attributes = {
                src: this.video.url,
                poster: this.poster,
            };

            if (this.video.loop) attributes.loop = true;
            if (this.video.preload) attributes.preload = true;

            if (this.video.size === 'contain') {
                attributes.style = {
                    'max-height': '100%',
                    'max-width': '100%',
                };
            } else {
                attributes.style = {
                    width: '100%',
                    height: '100%',
                    'object-fit': 'cover',
                };
            }

            return attributes;
        },
    },
     mounted() {
        // We need to delay video play for not have error on Chrome and Safari
        // https://medium.com/@naivetech/video-inside-html-video-tag-not-playing-in-chrome-or-safari-fixed-2a9849d66fa4
        // TODO: probably have to recheck this behavior on editor when changing the url
        this.interval = setInterval(() => {
            const video = this.$refs.video;
            const videoState = video.readyState;
            if (videoState === 4) {
                video.muted = true;
                video.play();
                clearInterval(this.interval);
            }
        }, 1000);
    },
    unmounted() {
        clearInterval(this.interval);
    },
};
</script>

<style lang="scss" scoped>
.ww-background-video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;

    video {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;

        &.cover {
            min-height: 100%;
            min-width: 100%;
        }
        &.contain {
            max-height: 100%;
            max-width: 100%;
        }
    }
}
</style>
