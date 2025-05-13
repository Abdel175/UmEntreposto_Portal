<template>
    <div class="ww-expand">
        <div class="toggle-container" @click="handleManualInput($event)">
            <div v-if="!value || editLayout" class="unactive-toggle">
                <div v-if="editLayout" class="label unactive label-xs normal">closed</div>
                <wwLayout class="layout toggle-layout" path="activeToggleLayout" />
            </div>
            <div v-if="value || editLayout" class="active-toggle">
                <div v-if="editLayout" class="label active label-xs normal">opened</div>
                <wwLayout class="layout toggle-layout" path="toggleLayout" />
            </div>
        </div>
        <wwExpandTransition>
            <div v-show="value || isEditing" class="content">
                <div v-if="editLayout" class="label content label-xs normal">content</div>
                <wwLayout class="layout content-layout" path="contentLayout" />
            </div>
        </wwExpandTransition>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
    },
    data() {
        return {
            editLayout: false,
        };
    },
    emits: ['update:content:effect', 'trigger-event', 'add-state', 'remove-state'],
    setup(props) {
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            type: 'boolean',
            defaultValue: computed(() => props.content.value === undefined ? false : props.content.value),
        });

        return { variableValue, setValue };
    },
    computed: {
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        value() {
            return !!this.variableValue;
        },
    },
    watch: {
        'content.value'(newValue) {
            newValue = !!newValue;
            if (newValue === this.value) return;
            this.setValue(newValue);
            this.$emit('trigger-event', { name: 'initValueChange', event: { value: newValue } });
        },
        isEditing() {
            this.editLayout = false;
        },
    },
    mounted() {
        this.editLayout = false;
    },
    beforeUnmount() {
        this.editLayout = false;
    },
    methods: {
        handleManualInput($event) {
            if (this.isEditing) return;
            const value = !this.value
            this.setValue(value);
            this.$emit('trigger-event', { name: 'change', event: { domEvent: $event, value } });
        },
        toggleEdit() {
            this.editLayout = !this.editLayout;
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-expand {

    .active-toggle,
    .unactive-toggle,
    .content {
        position: relative;

        .layout {
            display: flex;
            flex-direction: column;

            &.isEditing {
                min-height: 50px;
                border: 1px dashed var(--ww-color-dark-500);
            }
        }

        .label {
            position: absolute;
            top: 0;
            right: 0;

            padding: var(--ww-spacing-00) var(--ww-spacing-01);
            border-bottom-left-radius: var(--ww-spacing-00);
            z-index: 101;
            color: white;

            &.unactive {
                background-color: var(--ww-color-dark-500);
            }

            &.active {
                background-color: var(--ww-color-green-500);
            }

            &.content {
                background-color: var(--ww-color-blue-500);
            }
        }
    }
}
</style>