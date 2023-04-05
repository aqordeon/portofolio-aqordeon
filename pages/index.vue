<template>
	<section class="container mx-auto my-24">
		<div class="pt-20">
			<div class="text-6xl font-black">
				Communicate ideas through pixel, shape, and colors.
			</div>

			<div class="grid grid-cols-2 gap-x-10">
				<div class="bg-yellow-100 rounded-3xl h-[400px] p-8 shadow-lg">
					<p class="text-5xl">HELLO</p>
				</div>
				<div class="bg-green-100 rounded-3xl h-[400px] p-8 shadow-lg">
					<p>Hello There</p>
					<p>I'm a FrontEnd Developer. Also I'm a designer. And I concern to visual looks.</p>
					<div class="bg-gray-200 rounded-lgs py-4 px-6 max-w-fit">Mail me.</div>
				</div>
			</div>

			<div class="grid mt-24">
				<div class=" h-[400px] rounded-3xl shadow-xl grid bg-[url('./assets/images/figih.jpg')] bg-cover bg-center">
					<div class="bg-gray-900/50 grid">
						<NuxtLink to="/programming" class="text-4xl text-white font-extrabold place-self-center">PROGRAMMING</NuxtLink>
					</div>
				</div>
			</div>

			<div class="grid mt-24">
				<div class="bg-purple-500 h-[400px] rounded-3xl shadow-xl grid ">
					<div class="text-4xl font-extrabold place-self-center">DESIGN</div>
				</div>
			</div>

			<div class="grid mt-24">
				<TechStacks />
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
