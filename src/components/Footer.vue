<template>
    <footer style="background-color:#474747ff;height:202px;width:100%;text-align:center;padding-top:35px;box-sizing:border-box;font-size:23px;display:inline-block">
        <p style="color:#c9c9c9ff">
            © All rights reserved - Siglar Development AS {{
new Date().getUTCFullYear()
}}
        </p>
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
    }
</style>