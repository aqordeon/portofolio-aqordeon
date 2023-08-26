<template>
	<section class="w-screen">
		<div class="container max-w-5xl">
			<div class="z-50 grid grid-flow-col justify-between items-center py-4 px-6 ">
				<div class="grid grid-flow-col gap-x-4 text-color-5">
					<div>
						<NuxtLink active-class="bg-gray-800 text-white" to="/"
							class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">/Index
						</NuxtLink>
					</div>
					<div>
						<NuxtLink active-class="bg-gray-800 text-white" to="/programming"
							class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">
							{{foo}}</NuxtLink>
					</div>
					<div>
						<NuxtLink active-class="bg-gray-800 text-white" to="/design"
							class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">Design
						</NuxtLink>
					</div>
					<div>
						<NuxtLink active-class="bg-gray-800 text-white" to="/blog"
							class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">Blog
						</NuxtLink>
					</div>
				</div>
				<div class="grid grid-flow-col gap-x-3">
					<div @click.prevent="useState('tembak', () => 'pink')" class="theme-1 rounded-full p-4 hover:cursor-pointer"></div>
					<div class="theme-3 rounded-full p-4 hover:cursor-pointer"></div>
					<div class="theme-2 rounded-full p-4 hover:cursor-pointer"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const foo = 'abc'
useState('tembak')
</script>

<style lang="scss" scoped></style>
