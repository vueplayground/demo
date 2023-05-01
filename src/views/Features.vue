<template>
    <div>
        <VueNavigator />
        <header>
            <h1>
                Features
            </h1>
            <div class="feature-list">
                <div>Code editor</div>
                <div>Color selector</div>
                <div>Deploy to GitHub pages</div>
                <div>Drag & Drop components</div>
                <div>Drag & Drop elements</div>
                <div>
                    Export build
                </div>
                <div>
                    File explorer
                </div>
                <div>Google fonts selector</div>
                <div>Inline & css styling</div>
                <div>
                    Javascript mockup
                </div>
                <div>Layers view</div>
                <div>Live preview</div>
                <div>Push to GitHub</div>
                <div>Routing</div>
                <div>
                    Store online
                </div>
                <div>Transform resize tool</div>
                <div>Transform positioning tool</div>
                <div>Transform rotate tool</div>
            </div>
        </header>
        <main style="text-align:center;width:100%;margin-bottom:50px">
            <section><button @click="$router.push('/pricing')">
                    Pricing
                </button><button @click="open('https://vueplay.app')" class="higlighted">
                    Get Started ⇾
                </button></section>
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

    .feature-list {
        background-color: #74AE86;
        color: #ffffffff;
        text-align: left;
        padding: 20px 30px;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-bottom: 50px;
        margin-top: 40px;
        max-width: 500px;
        margin-right: auto;
        margin-left: auto;
    }

    .feature-list>div {
        background-image: url(@/assets/check.png);
        background-position: 0px 6px;
        background-repeat: no-repeat;
        background-size: auto 20px;
        padding: 5px 30px;
    }
</style>