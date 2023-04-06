<template>
	<section class="container max-w-5xl mx-auto my-24">
		<div class="pt-12">
			<div class="text-7xl max-w-4xl font-black text-color-1 mb-16">
				Communicate ideas through pixels, colors, and characters.
			</div>

			<!-- Row 1 -->
			<div class="grid grid-cols-8 gap-x-8 gap-y-14">
				<div class="col-span-3 theme-2 rounded-3xl h-[400px] p-8 shadow-lg">
					<p class="text-5xl">HELLO</p>
				</div>
				<div class="col-span-5 theme-5 rounded-3xl h-[400px] p-8 shadow-lg">
					<p>Hello There</p>
					<p>I'm a FrontEnd Developer. Also I'm a designer. And I concern to visual looks.</p>
					<div class="bg-gray-200 rounded-lgs py-4 px-6 max-w-fit">Mail me.</div>
				</div>

				<!-- Row 2: Programming -->
				<div class="col-span-8">
					<div
						class=" h-[400px] overflow-hidden rounded-3xl shadow-xl grid bg-[url('./assets/images/picture1.jpg')] bg-cover bg-center">
						<div class="bg-gray-900/50 grid">
							<NuxtLink to="/programming" class="text-6xl text-white font-extrabold place-self-center">
								PROGRAMMING
							</NuxtLink>
						</div>
					</div>
				</div>

				<!-- Row 3 -->
				<div class="col-span-5 theme-4 rounded-3xl h-[400px] p-8 shadow-lg">
					<p class="text-5xl">HELLO</p>
				</div>
				<div class="col-span-3 theme-1 rounded-3xl h-[400px] p-8 shadow-lg">
					<p>Hello There</p>
					<p>I'm a FrontEnd Developer. Also I'm a designer. And I concern to visual looks.</p>
					<div class="bg-gray-200 rounded-lgs py-4 px-6 max-w-fit">Mail me.</div>
				</div>

				<!-- Row 4: Design -->
				<div class="col-span-8">
					<div
						class=" h-[400px] rounded-3xl overflow-hidden shadow-xl grid bg-[url('./assets/images/picture2.jpg')] bg-cover bg-center">
						<div class="bg-gray-900/50 grid">
							<NuxtLink to="/design" class="text-6xl text-white font-extrabold place-self-center">
								DESIGN
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>



			<div class="grid mt-24">
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
