<template>
    <div style="height:100%;display:inline-block;width:100%">
        <VueNavigator />
        <header>
            <h1>
                Vue.js
                <br /> <em>
                    Drag & Drop
                </em> <br />
                Builder
            </h1>
            <p>
                Design and share Vue Components from a graphical view.
            </p>
            <section><button @click="$router.push('/features')">
                    Features
                </button> <button @click="$router.push('/pricing')">
                    Pricing
                </button><button @click="open('https://vueplay.app')" class="higlighted">
                    Get Started ⇾
                </button> </section>
        </header>
        <main>
        </main>
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    export default {
        data: () => ({}),
        components: {
            VueNavigator
        },
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
        background-color: #d97de3ff;
    }

    button.higlighted:hover {
        background-color: #059cedff;
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