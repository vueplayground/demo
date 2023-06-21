<template>
    <div>
        <VueNavigator />
        <header>
            <h1>
                Data Deletion
            </h1>
            <p>Updated 28.04.2023</p>
        </header>
        <main>
            <section style="max-width:700px;margin:auto">
                <p>
                    Request deletion by sending us an email. You should contact us using the same email as your registered
                    account. Later on it will be possible to delete your account with all connected data in the app profile
                    modal.
                </p>
                <h2>Contact Us</h2>
                <p>Don't hesitate to contact us if you have any questions.</p><a href="mailto:steffan@siglar.no">steffan@siglar.no</a>
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

    p {
        font-size: 20px;
        color: #6b6b6bff;
        margin-top: 50px;
        margin-bottom: 15px;
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
</style>