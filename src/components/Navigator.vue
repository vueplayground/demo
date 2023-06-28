<template>
    <nav style="background-image:linear-gradient(204deg, #f0dfe20d 54%, #e1ebe8ff 59%, #f0f5faff 74%);background-color:#edf7f4ff;min-height:50px" class="shadow border-slate-300 border-b">
        <div style="width:216px;background-size:contain;background-repeat:no-repeat;margin-left:10px;cursor:pointer;float:left;height:35px;margin-top:7px;margin-bottom:7px" @click="$router.push('/')" class="sm:inline hidden logo">
        </div><button @click="$router.push('/')" :class="{active: route === '/'}" class="">
            About
        </button><button @click="$router.push('/features')" :class="{active: route === '/features'}">
            Features
        </button><button @click="$router.push('/documentation')" :class="{active: route.includes('/documentation')}">
            Docs
        </button><button @click="$router.push('/pricing')" :class="{active: route === '/pricing'}">
            Pricing
        </button> <button @click="open('https://studio.vueplay.com')" :class="{active: route === '/app'}" style="font-weight:bold;background-color:#74AE86;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:5px" class="hover:shadow-lg build">
            Build ⇾
        </button>
    </nav>
</template>
<script>
    export default {
        data: () => ({}),
        computed: {
            route() {
                return this.$route.path
            }
        },
        methods: {
            open(url) {
                location.href = url
            }
        }
    };
</script>
<style scoped>
    nav {
        display: block;
        text-align: right;
        width: 100%;
        height: 50px;
        background-color: #ffffffff;
        position: sticky;
        top: 0px;
    }

    button {
        border-style: none;
        background-color: #00000000;
        padding-right: 12px;
        padding-left: 12px;
        cursor: pointer;
        transition: .3s ease color;
        color: #5c5c5cff;
        height: 100%;
    }

    button.active {
        font-weight: bold;
    }

    button:hover {
        color: #74AE86;
    }

    .logo {
        background-image: url(@/assets/vueplayground-logo-long.png);
    }
</style>