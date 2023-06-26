<template>
    <div class="bg-slate-100">
        <VueNavigator class="z-10" />
        <header>
            <h1>
                Pricing
            </h1>
            <p>
                Compare plans
            </p>
        </header>
        <main>
            <section style="text-align:left" class="drop-shadow">
                <Pricing style="margin-bottom:50px;max-width:786px;text-align:left;margin-right:auto;margin-left:auto" />
            </section>
            <section style="text-align:center">
                <button @click="$router.push('/features')" class="transition-shadow hover:drop-shadow-lg drop-shadow">
                    Features
                </button> <button @click="open('https://www.vueplay.com')" class="duration-300 transition hover:drop-shadow-lg drop-shadow higlighted">
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
        margin-bottom: 15px;
    }

    h1 {
        font-size: 60px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    em {
        font-style: normal;
        color: rgba(238, 76, 215, 1);
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
        background-color: rgb(235, 235, 235);
    }

    section button:last-child {
        margin-right: 0px;
    }

    section button:hover {
        background-color: #e6e6e6ff;
    }
</style>