<template>
    <form
        :name="formName"
        :autocomplete="content.autocomplete"
        class="ww-form-container"
        :class="{ editing: isEditing, selected: isSelected }"
        data-ww-flag="form-container"
        @submit.prevent="onSubmit"
    >
        <wwLayout class="ww-form-container__content" path="formContent" ww-responsive="wwLayout" />
    </form>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['trigger-event'],
    computed: {
        formName() {
            return this.wwElementState.name;
        },
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        isSelected() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
        async onSubmit() {
            this.$emit('trigger-event', { name: 'submit' });
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-form-container {
    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
}
</style>
