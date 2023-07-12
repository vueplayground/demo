<template>
</template>
<script>
    export default {
        props: ['title', 'description', 'keywords'],
        data: () => ({
            defaults: {
                title: 'Vue Play',
                description: 'Design Vue files with a drag & drop template builder. Use playground to create your new web app.',
                keywords: 'Vue Play Playground Vue.js Vuejs Drag Drop Design UI Visual Graphic Userinterface',
                author: ''
            }
        }),
        created() {
            document.title = this.title || this.defaults.title
            this.ensureMeta('description')
            this.ensureMeta('keywords')
            this.ensureMeta('author')
            document.head.children.description.content = this.description || this.defaults.description
            document.head.children.keywords.content = this.keywords || this.defaults.keywords
            document.head.children.author.content = this.author || this.defaults.author
        },
        methods: {
            ensureMeta(type) {
                if (!document.head.children[type] || document.head.children[type] === undefined) {
                    let meta = document.createElement('meta')
                    meta.name = type
                    document.head.appendChild(meta)
                }
            }
        }
    }
</script>
<style scoped></style>