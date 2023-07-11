<template>
    <Teleport to="head">
        <meta charset="UTF-8" />
        <title>{{title || 'Vue Play'}}</title>
        <meta name="description" :content="description || 'Design Vue files with a drag & drop template builder. Use playground to create your new web app.'" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.vueplay.com/screenshot.png" />
        <meta property="og:title" content="Vue Play" />
        <meta property="og:description" content="Design Vue files with a drag & drop template builder. Use playground to create your new web app." />
        <meta property="og:image:width" content="1550" />
        <meta property="og:image:height" content="605" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
        <link rel="manifest" href="site.webmanifest">
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <link rel="canonical" href="https://vueplay.com">
        <link rel="icon shortcut" type="image/x-icon" href="favicon.ico">
    </Teleport>
</template>
<script>
    export default {
        data: () => ({}),
        props: ['title', 'description']
    }
</script>
<style scoped></style>