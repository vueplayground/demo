<template>
    <footer style="background-color:#474747ff;height:202px;width:100%;text-align:center;box-sizing:border-box;font-size:23px;display:inline-block;padding-top:27px">
        <p style="color:#c9c9c9ff;font-size:16px">
            © All rights reserved - Siglar Development AS {{
new Date().getUTCFullYear()
}}
        </p> <router-link to="/change-log">
            Change log
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
        color: #c9c9c9ff;
    }

    a {
        color: #c9c9c9ff;
        text-decoration: none;
        font-size: 16px;
    }

    a:hover {
        color: #ffffffff;
    }
</style>