<template>
	<section class="w-screen">
		<div class="container max-w-5xl">
			<div class="z-50 grid grid-flow-col justify-between items-center py-4 px-6 ">
				<div class="grid grid-flow-col gap-x-4 text-color-5">
					<div>
						<NuxtLink to="/" class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">/Index</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/programming" class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">Programming</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/design" class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">Design</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/blog" class="py-2 px-4 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white">Blog</NuxtLink>
					</div>
				</div>
				<div class="">
					<div class="theme-1 rounded-full py-3 px-8 text-white">Get Started</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
