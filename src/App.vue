<template>
    <div>
        <router-view /><button type="" @click="$router.push('/demo')">
            Got to demo
        </button>
    </div>
</template>
<script>
    export default {
        data: () => ({})
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
    }

    div {
        text-align: center;
    }
</style>