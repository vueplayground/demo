<template>
    <nav class="bg-sky-50 h-12 w-full block top-0 sticky text-right shadow border-slate-300 border-b">
        <div style="width:85px;background-size:contain;background-repeat:no-repeat;margin-left:10px;cursor:pointer;float:left;height:35px;margin-top:7px;margin-bottom:7px" @click="$router.push('/')" class="logo">
        </div><button @click="$router.push('/home')" :class="{active: route === '/'}" class="hover:text-blue-700 text-slate-700">
            Home
        </button> <button @click="$router.push('/about')" :class="{active: route === '/about'}" class="hover:text-blue-700 text-slate-700">
            About
        </button><button @click="$router.push('/contact')" :class="{active: route === '/contact'}" class="hover:text-blue-700 text-slate-700">
            Contact
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
    button {
        border-style: none;
        padding-right: 12px;
        padding-left: 12px;
        cursor: pointer;
        transition: .3s ease color;
        height: 100%;
    }

    button.active {
        font-weight: bold;
    }

    .logo {
        background-image: url(@/assets/your-logo.png);
    }
</style>