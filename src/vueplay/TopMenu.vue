<template>
	<div
		:class="{ mobile }"
		class="topmenu w-full inline-block"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="w-6 h-6 cursor-pointer"
		>
			<path
				fill-rule="evenodd"
				d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
				clip-rule="evenodd"
			/>
		</svg>
		<slot name="logo">
			Logo comes here
		</slot>
		<menu>
			<slot>
				<li>
					Home
				</li>
				<li>
					About
				</li>
				<li>
					More
					<ul>
						<li>
							Blog
						</li>
						<li>
							Docs
							<ul>
								<li>
									Introduction
								</li>
								<li>
									How it works
								</li>
								<li>
									FAQ
									<ul>
										<li>
											A
										</li>
										<li>
											B
										</li>
										<li>
											C
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							Discussion
						</li>
					</ul>
				</li>
				<li>
					Contact
				</li>
			</slot>
		</menu>
	</div>
</template>

<script>
export default {
	props: {
		breakpoint: {
			type: Number,
			default: 568
		}
	},
	data: () => ({
		open: false,
		mobile: false
	}),
	created() {
		this.onResize()
		window.addEventListener('resize', this.onResize)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},
	methods: {
		onResize() {
			this.mobile = window.innerWidth < this
				.breakpoint
		}
	}
};

</script>

<style scoped>
/**
	TODO: Allow slotted selectors when scoped
	Then the .topmenu class can be skipped
**/
:slotted(li) {
	color: red; /* Should apply to the slotted scope */
}
:deep(li) {
	color: green; /* Should affect child components */
}
:global(li) {
	color: blue; /* Should apply to the global scope */
}
</style>

<style>
.topmenu {
	--bg-color: rgba(192,216,210,1);
	--button-bg-color: var(--bg-color);
	--button-bg-hover-color: rgba(174,195,190,1);
	--button-text-color: rgba(14,58,62,1);
}

.topmenu menu {
	position: absolute;
	background-color: var(--bg-color);
	width: 100%;
}

.topmenu li {
	position: relative;
	padding: 10px 10px;
	margin: 0px;
	display: inline-block;
	background-color: var(--button-bg-color);
	color: var(--button-text-color);
	cursor: pointer;
}

.topmenu li:hover {
	background-color: var(--button-bg-hover-color);
}

.topmenu menu>li {
	float: left;
	overflow: 'hidden';
}

.topmenu ul {
	display: none;
}

.topmenu ul li {
	display: block;
	text-align: right;
}

.topmenu li:hover>ul {
	position: absolute;
	display: inline-block;
}

.topmenu menu > li:hover>ul {
	top: 100%;
	right: 0px;
}

.topmenu li ul li ul {
	top: 0px;
	left: 100%;
}

.topmenu li ul li ul li {
	text-align: left;
}

.topmenu svg {
	display: none;
}

.topmenu.mobile svg {
	display: inline-block;
}

.topmenu.mobile menu>li {
	display: none;
}
</style>
