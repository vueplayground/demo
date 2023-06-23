<template>
    <nav style="background-image:linear-gradient(270deg, #ff19000d, #b2d4c9ff)">
        <div style="height:34px;width:240px;background-size:contain;background-repeat:no-repeat;margin-top:7px;margin-left:10px;cursor:pointer;float:left" @click="$router.push('/')" class="sm:inline hidden logo">
        </div><button @click="$router.push('/')" :class="{active: route === '/'}" class="">
            About
        </button><button @click="$router.push('/features')" :class="{active: route === '/features'}">
            Features
        </button><button @click="$router.push('/pricing')" :class="{active: route === '/pricing'}">
            Pricing
        </button> <button @click="open('https://www.vueplay.com')" :class="{active: route === '/app'}" style="font-weight:bold;background-color:#b3b3b3ff;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:5px" class="build">
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
        border-bottom-width: 1px;
        border-style: solid;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
        border-color: #e0e0e0ff;
        background-color: #ffffffff;
        position: sticky;
        top: 0px;
        z-index: 10;
    }

    button {
        border-style: none;
        height: 100%;
        background-color: #00000000;
        padding-right: 15px;
        padding-left: 15px;
        cursor: pointer;
        transition: .3s ease all;
        color: #5c5c5cff;
    }

    button.active {
        font-weight: bold;
    }

    button:hover {
        color: #74AE86;
    }

    button.build:hover {
        background-color: #74AE86 !important;
    }

    .logo {
        background-image: url(@/assets/vueplayground-logo-long.png);
    }
</style>