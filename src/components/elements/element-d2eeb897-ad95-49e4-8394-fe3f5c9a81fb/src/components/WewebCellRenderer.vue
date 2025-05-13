<template>
    <div class="ww-cell-renderer">
        <wwLayoutItemContext
            is-repeat
            :index="params.node.sourceRowIndex"
            :data="{ value: params.value, row: params.data }"
        >
            <wwElement v-bind="params.containerId" class="ww-cell-renderer-flexbox"></wwElement>
        </wwLayoutItemContext>
    </div>
</template>

<script>
export default {
    name: "WewebCellRenderer",
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.ww-cell-renderer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    line-height: normal;
    :deep(.ww-cell-renderer-flexbox) {
        flex: 1;
    }
}
</style>
