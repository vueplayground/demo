<template>
    <footer style="height:202px;width:100%;text-align:center;box-sizing:border-box;font-size:23px;display:inline-block;padding-top:27px;background-image:linear-gradient(204deg, #f0dfe20d 14%, #e1ebe8ff 19%, #f0f5faff 34%);background-color:#edf7f4ff" class="pb-12">

        <p style="font-size:16px;margin-bottom:25px;margin-top:30px">
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
        font-size: 16px;
    }

    a:hover {
        color: #607991ff;
    }
</style>