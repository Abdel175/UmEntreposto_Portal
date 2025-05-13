<template>
    <div class="ww-progressbar-donut">
        <ve-progress
            :key="componentKey"
            :size="size"
            :progress="value"
            :color="`${content.fillColor}`"
            :emptyColor="`${content.emptyColor}`"
            :thickness="thickness"
            :emptyThickness="emptyThickness"
            :lineMode="`${content.style} ${offset}`"
            :animation="`default ${animation.duration} ${animation.delay}`"
        >
            <wwLayout class="content" path="container" />
        </ve-progress>
    </div>
</template>

<script>
import { computed } from "vue";
import { VeProgress } from "vue-ellipse-progress";

export default {
    components: { VeProgress },
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },

    },
    emits: ["trigger-event"],
    setup(props) {
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: "value",
            type: "number",
            defaultValue: computed(() => {
                let val = parseInt(props.content.value);
                if (isNaN(val)) val = 0;
                return val === undefined ? 0 : val;
            }),
        });
        return { variableValue, setValue };
    },
    data() {
        return {
            elementHeight: 250,
            componentKey: 0,
            resizeObserver: null,
        };
    },
    computed: {
        value() {
            let val = parseInt(this.variableValue);
            if (isNaN(val)) return 0;
            return val;
        },
        size() {
            return this.elementHeight > 0 ? this.elementHeight : 50;
        },
        thickness() {
            return this.getUnitValue(this.content.thickness);
        },
        emptyThickness() {
            return this.getUnitValue(this.content.emptyThickness);
        },
        offset() {
            const offset = this.getUnitValue(this.content.offset);
            return offset >= 0 ? offset : 100;
        },
        animation() {
            return {
                delay: this.getUnitValue(this.content.animationDelay),
                duration: this.getUnitValue(this.content.animationDuration),
            };
        },
    },
    watch: {
        "content.value"(newValue) {
            if (newValue === undefined) return;
            newValue = parseInt(this.content.value);
            if (isNaN(newValue)) newValue = 0;
            if (newValue === this.value) return;
            this.setValue(newValue);
            this.$emit("trigger-event", {
                name: "change",
                event: { value: newValue },
            });
        },
    },
    methods: {
        updateSize(value) {
            this.elementHeight = value;
            this.componentKey += 1;
        },
        getUnitValue(unit) {
            return wwLib.wwUtils.getLengthUnit(unit)[0];
        },
    },
    beforeUnmount() {
        this.resizeObserver.disconnect();
    },
    mounted() {
        const el = this.$el;
        const size = el.getBoundingClientRect().height;
        this.updateSize(size);
        this.resizeObserver = new ResizeObserver((entries) => {
            this.updateSize(entries[0].contentRect.height);
        });
        this.resizeObserver.observe(el);
    },
};
</script>

<style lang="scss" scoped>
.ww-progressbar-donut {
    position: relative;
    justify-content: center;
    align-items: center;

    .content {
        width: fit-content;
        height: fit-content;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>
