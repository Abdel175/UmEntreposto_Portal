<template>
    <div class="image-cell">
        <img v-if="params?.value" :src="params.value" :style="{ width: params.width, height: params.height }" />
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
};
</script>

<style scoped>
.image-cell {
    height: 100%;
    display: flex;
    align-items: center;
}

.image-cell img {
    object-fit: contain;
}
</style>
