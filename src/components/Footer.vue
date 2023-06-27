<template>
    <footer style="width:100%;text-align:center;box-sizing:border-box;display:inline-block;background-image:linear-gradient(204deg, #f0dfe20d 14%, #e1ebe8ff 19%, #f0f5faff 34%);background-color:#edf7f4ff" class="border-slate-300 border-t text-xs md:text-md sm:text-sm px-6 py-8">

        <p class="pb-3">
            © All rights reserved - Siglar Development AS {{
new Date().getUTCFullYear()
}}
        </p> <router-link to="/release-log">
            Release log
        </router-link>
        -
        <router-link to="/terms-of-service">
            Terms of Service
        </router-link>-<router-link to="/privacy-policy">
            Privacy Policy
        </router-link>
    </footer>
</template>
<script>
    export default {
        data: () => ({})
    };
</script>
<style scoped>
    footer {
        font-family: verdana;
        color: #8598abff;
    }

    a {
        color: #8598abff;
        text-decoration: none;
    }

    a:hover {
        color: #607991ff;
    }
</style>