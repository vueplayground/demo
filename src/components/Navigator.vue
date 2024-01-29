<template>
	<TopMenu>
		<li>
			test
		</li>
	</TopMenu>
</template>
<script>
	import TopMenu from "@/vueplay/TopMenu.vue";
	export default {
		components: {
			TopMenu: TopMenu
		},
		data: () => ({}),
		computed: {
			route() {
				return this.$route.path;
			}
		},
		methods: {
			open(url) {
				location.href = url;
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