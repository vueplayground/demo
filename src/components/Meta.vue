<template></template>
<script>
export default {
    props: ['title', 'description'],
    created() {
        document.head.children.title = this.title || 'Vue Play'
        document.head.children.description = this.description || 'Design Vue files with a drag & drop template builder. Use playground to create your new web app'
    }
}
</script>
<style scoped></style>