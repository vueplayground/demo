<template>
    <div>
        <VueNavigator />
        <header>
            <div style="background-size:contain;background-position:center;background-repeat:no-repeat;width:345px;height:125px;margin-right:auto;margin-left:auto;margin-top:70px;position:relative;left:30px" class="logo">
            </div>
            <h1>
                <em>
                    Drag & Drop
                </em> <br />
                Builder
            </h1>
            <p>
                Create Vue Applications using a graphical designer
            </p>
        </header>
        <main style="width:100%">
            <section style="width:100%"><button @click="$router.push('/features')">
                    Features
                </button> <button @click="$router.push('/pricing')">
                    Pricing
                </button><button @click="open('https://vueplay.app')" class="higlighted">
                    Get Started ⇾
                </button> </section>
            <section>
                <div style="background-size:contain;background-position:center;background-repeat:no-repeat;margin-right:auto;margin-left:auto;margin-top:70px;position:relative;margin-bottom:50px;max-width:700px;aspect-ratio:1/.389;box-sizing:border-box" class="screenshot">
                </div>
            </section>
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
        font-size: 60px;
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
</style>