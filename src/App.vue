<template>
    <router-view />
    <Footer />
</template>
<script>
    import Footer from "@/components/Footer.vue";
    export default {
        data: () => ({}),
        components: {
            Footer
        }
    };
</script>
<style>
    body,
    html,
    #app {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        margin-right: 0px;
        height: 100%;
    }
</style>