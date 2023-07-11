<template>
    <Teleport to="head title">{{title || 'Vue Play'}}</Teleport>
</template>
<script>
    export default {
        props: ['title', 'description'],
        created() {
            if (this.description) document.head.children.description = this.description
        }
    }
</script>
<style scoped></style>