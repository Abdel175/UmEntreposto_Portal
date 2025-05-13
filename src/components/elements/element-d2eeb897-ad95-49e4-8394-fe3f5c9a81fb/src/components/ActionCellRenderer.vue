<template>
    <div class="btn-container">
        <button
            @click.stop="onButtonClicked"
            class="datagrid-btn"
            :class="params.withFont ? 'with-font' : 'without-font'"
        >
            {{ params.label }}
        </button>
    </div>
</template>

<script>
export default {
    name: "ImageCellRenderer",
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onButtonClicked() {
            this.params.trigger({
                actionName: this.params.name,
                id: this.params.node.id,
                index: this.params.node.sourceRowIndex,
                displayIndex: this.params.node.rowIndex,
                row: this.params.data,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.datagrid-btn {
    background-color: var(--ww-data-grid_action-backgroundColor, unset);
    color: var(--ww-data-grid_action-color, unset);
    padding: var(--ww-data-grid_action-padding, unset);
    border: var(--ww-data-grid_action-border, unset);
    &.with-font {
        font: var(--ww-data-grid_action-font);
    }
    &.without-font {
        font-size: var(--ww-data-grid_action-fontSize);
        font-family: var(--ww-data-grid_action-fontFamily);
        font-weight: var(--ww-data-grid_action-fontWeight);
        font-style: var(--ww-data-grid_action-fontStyle);
        line-height: var(--ww-data-grid_action-lineHeight, normal);
    }
    border-radius: var(--ww-data-grid_action-borderRadius);
    cursor: pointer;
}
</style>
