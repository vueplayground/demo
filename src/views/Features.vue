<template>
    <div class="bg-slate-100">
        <VueNavigator />
        <header>
            <h1>
                Features
            </h1>
            <p style="margin-right:auto;margin-left:auto;max-width:calc(100% - 40px);width:700px">
                Vue Playground is a full drag & drop builder for vue components and applications
            </p>
        </header>
        <main style="text-align:center;width:100%;margin-bottom:50px">
            <section class="p-6 m-auto container">
                <div class="xl:columns-4 lg:columns-3 sm:columns-2 columns-1">
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing A
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing B
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing C
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                    <div class="mb-6 p-6 inline-block shadow-slate-300 shadow rounded bg-white">
                        <div class="bg-blue-200 w-12 h-12 rounded">
                        </div>
                        <h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
                            Marketing
                        </h3>
                        <p class="text-slate-500 text-left">
                            Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
                        </p>
                    </div>
                </div>
                <div class="feature-list" @click="open('https://vueplay.app')" style="cursor:pointer">
                    <div>Code editor</div>
                    <div>Color selector</div>
                    <div>Deploy to GitHub pages</div>
                    <div>Drag & Drop components</div>
                    <div>Drag & Drop elements</div>
                    <div>
                        Export build
                    </div>
                    <div>
                        Export project
                    </div>
                    <div>
                        File explorer
                    </div>
                    <div>Google fonts selector</div>
                    <div>
                        Import assets
                    </div>
                    <div>
                        Import project
                    </div>
                    <div>Inline & css styling</div>
                    <div>
                        Javascript mockup
                    </div>
                    <div>Layers view</div>
                    <div>Live preview</div>
                    <div>Push to GitHub</div>
                    <div>
                        Responsive designer
                    </div>
                    <div>Routing</div>
                    <div>
                        Store online
                    </div>
                    <div>Transform positioning tool</div>
                    <div>Transform resize tool</div>
                    <div>Transform rotate tool</div>
                </div>
            </section>
            <section><button @click="$router.push('/pricing')">
                    Pricing
                </button><button @click="open('https://www.vueplay.com')" class="higlighted">
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
        max-width: calc(100% - 40px);
        margin-right: auto;
        margin-left: auto;
        width: 500px;
    }

    .feature-list>div {
        background-image: url(@/assets/check.png);
        background-position: 0px 6px;
        background-repeat: no-repeat;
        background-size: auto 20px;
        padding: 5px 30px;
    }
</style>