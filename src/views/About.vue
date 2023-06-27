<template>
    <div class="bg-slate-100">
        <VueNavigator class="z-10" />
        <header>
            <div style="background-size:contain;background-position:center;background-repeat:no-repeat;width:300px;height:125px;margin-right:auto;margin-left:auto;margin-top:40px;position:relative;max-width:calc(100% - 100px)" class="logo">
            </div>
            <h1 style="text-shadow:0px 0px">
                <em style="margin-top:28px">
                    Drag & Drop
                </em> <br />
                Builder
            </h1>
            <p style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px">
                Create Vue Applications using a graphical designer
            </p>
        </header>
        <main style="width:100%">
            <section style="width:100%"><button @click="$router.push('/features')" class="transition-shadow hover:drop-shadow-lg drop-shadow">
                    Features
                </button> <button @click="$router.push('/pricing')" class="transition-shadow hover:drop-shadow-lg drop-shadow">
                    Pricing
                </button><button @click="open('https://www.vueplay.com')" class="duration-300 transition hover:drop-shadow-lg drop-shadow higlighted">
                    Get Started ⇾
                </button> </section>
            <section>
                <div style="background-size:contain;background-position:center;background-repeat:no-repeat;margin-right:auto;margin-left:auto;margin-top:70px;position:relative;margin-bottom:50px;max-width:calc(100% - 40px);aspect-ratio:1/.389;box-sizing:border-box;width:700px" class="shadow-slate-200 shadow-xl screenshot">
                </div>
                <section style="width:100%">
                    <a href="https://www.producthunt.com/posts/vue-playground?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vue&#0045;playground" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392346&theme=light" alt="Vue&#0032;Playground - Visual&#0032;drag&#0032;and&#0032;drop&#0032;builder&#0032;for&#0032;vue&#0032;components&#0032;and&#0032;apps | Product Hunt" style="width: 250px; height: 54px;;margin:auto" width="250" height="54" /></a>
                </section>
            </section>
        </main>
        <Footer />
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Footer from "@/components/Footer.vue";
    export default {
        components: {
            VueNavigator,
            Footer
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
        margin-top: 50px;
        margin-bottom: 50px;
        color: #7a7a7aff;
    }

    button.higlighted {
        color: #fff;
        background-color: #74AE86;
    }

    button.higlighted:hover {
        background-color: #8cab96ff;
    }

    h1 {
        font-size: 45px;
        margin-top: 5px;
        margin-bottom: 30px;
        color: #242c36ff;
    }

    em {
        font-style: normal;
        color: #74AE86;
        background: linear-gradient(45deg, #394657 0%, #74AE86 100%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
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

    .logo {
        background-image: url(@/assets/vueplayground-logo.png);
    }

    .screenshot {
        background-image: url(@/assets/screenshot.png);
    }

    @media only screen and (max-width: 600px) {
        .logo {
            left: 0px;
        }
    }
</style>