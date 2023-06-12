<template>
    <div>
        <VueNavigator />
        <header>
            <h1>
                Release Log
            </h1>
        </header>
        <main>
            <section style="max-width:700px;margin:auto">
                <h3>
                    12.06.2023 - Realease 1.0.1
                </h3>
                <ul>
                    <li>
                        Design - Improved navigation selector
                    </li>
                    <li>
                        Design - Improved style controller navigation
                    </li>
                    <li>
                        Feature - Server boost
                    </li>
                    <li>
                        Feature - Speed optimization
                    </li>
                    <li>
                        Feature - Tailwind style controller
                    </li>
                    <li>
                        Feature - Copy (keyboard shorcut supported)
                    </li>
                    <li>
                        Feature - Paste (keyboard shorcut supported)
                    </li>
                    <li>
                        Feature - Keyboard shorcut supported for delete
                    </li>
                    <li>
                        Feature - Keyboard shorcut supported for undo & redo
                    </li>
                    <li>
                        Feature - Improved context menu
                    </li>
                </ul>
            </section>
            <section style="max-width:700px;margin:auto">
                <h3>
                    22.05.2023 - Realease 1.0.0
                </h3>
                <ul>
                    <li>
                        Design - New login screen
                    </li>
                    <li>
                        Feature - Gradient color selection
                    </li>
                    <li>
                        Feature - Default styles for elements
                    </li>
                    <li>
                        Feature - Table demo content
                    </li>
                    <li>
                        Feature - List demo content
                    </li>
                    <li>
                        Feature - Allow drop on template
                    </li>
                    <li>
                        Feature - Box shadow controller
                    </li>
                    <li>
                        Feature - Text shadow controller
                    </li>
                    <li>
                        Feature - Keyframe timeline view
                    </li>
                    <li>
                        Bugfix - Fix file overwrite when switching between files
                    </li>
                </ul>
            </section>
            <section style="max-width:700px;margin:auto">
                <h3>
                    02.05.2023 - First launch
                </h3>
            </section>
        </main>
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    export default {
        components: {
            VueNavigator
        }
    };
</script>
<style scoped>
    body,
    html,
    #app {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        margin-right: 0px;
    }

    main {
        display: inline-block;
        text-align: left;
        width: 100%;
        padding: 0px 40px;
        box-sizing: border-box;
        margin-bottom: 50px;
        font-family: verdana;
        margin-right: auto;
        margin-left: auto;
    }

    header {
        text-align: center;
        font-family: verdana;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    h1 {
        font-size: 60px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    h2 {
        font-size: 30px;
        margin-top: 100px;
        text-align: left;
    }

    h3 {
        text-shadow: 1px 2px 3px #d9d9d9ff;
    }

    p {
        font-size: 20px;
        color: #6b6b6bff;
        margin-top: 50px;
        margin-bottom: 15px;
    }

    ul {
        display: inline-block;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    li {
        padding-bottom: 5px;
    }
</style>