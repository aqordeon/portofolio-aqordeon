<template>
	<section class="w-screen">
		<div class="container max-w-5xl">
			<div class="z-50 grid grid-flow-col justify-between items-center py-4 px-6 ">
				<div class="grid grid-flow-col gap-x-4 text-color-5">
					<!--  -->
					<!-- /Index -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
							/Index
					</NuxtLink>

					<!-- Programming -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/programming"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
							Programming
					</NuxtLink>

					<!-- Design -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/design"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
						Design
					</NuxtLink>

					<!-- Blog -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/blog"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
						Blog
					</NuxtLink>

					<!-- Colors -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/colors"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
						Color
					</NuxtLink>

					<!-- Colors -->
					<NuxtLink active-class="bg-gray-800 text-white" to="/awadvantage?timer=7&warning=4"
						class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
						AW Advantage
					</NuxtLink>

				</div>
				<!-- <div class="grid grid-flow-col gap-x-3">
					<div @click.prevent="useState('tembak', () => 'pink')" class="theme-1 rounded-full p-4 hover:cursor-pointer">
						aaaaaa
					</div>
					<div class="theme-3 rounded-full p-4 hover:cursor-pointer">xx</div>
					<div class="theme-2 rounded-full p-4 hover:cursor-pointer">aa</div>
				</div> -->
			</div>
		</div>
	</section>
</template>

<script setup>
const foo = 'abc'
useState('tembak')
</script>

<style lang="scss" scoped></style>
