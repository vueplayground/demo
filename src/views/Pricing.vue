<template>
    <div style="height:100%;width:100%;display:inline-block">
        <VueNavigator />
        <header>
            <h1>
                Pricing
            </h1>
            <p>
                Compare plans
            </p>
        </header>
        <main>
            <section>
                <Pricing style="margin-bottom:50px;max-width:786px;text-align:left;margin-right:auto;margin-left:auto" />
            </section>
            <section>
                <button @click="$router.push('/features')">
                    Features
                </button> <button @click="open('https://vueplay.app')" class="higlighted">
                    Get Started ⇾
                </button>
            </section>
        </main>
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Pricing from "@/components/Pricing.vue";
    export default {
        components: {
            VueNavigator,
            Pricing
        },
        data: () => ({}),
        methods: {
            open(url) {
                location.href = url
            }
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
    }

    main {
        display: inline-block;
        text-align: center;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 50px;
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
        margin-bottom: 50px;
    }

    h1 {
        font-size: 60px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    em {
        font-style: normal;
        color: rgba(238, 76, 215, 1);
        background: linear-gradient(45deg, rgba(88, 208, 255, 1) 0%, rgba(238, 76, 215, 1) 100%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    button.higlighted {
        color: #fff;
        background-color: #74AE86;
    }

    button.higlighted:hover {
        background-color: #8cab96ff;
    }

    section button {
        border: none;
        padding-top: 10px;
        padding-right: 15px;
        padding-bottom: 10px;
        padding-left: 15px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 17px;
        margin-right: 20px;
        cursor: pointer;
        color: #072c38ff;
        transition: .5s ease background;
    }

    section button:last-child {
        margin-right: 0px;
    }

    section button:hover {
        background-color: #e6e6e6ff;
    }
</style>