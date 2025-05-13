<template>
    <wwLayout path="wwObjects" class="section-base"></wwLayout>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped>
.section-base {
    width: 100%;
    height: 100%;
}
</style>
