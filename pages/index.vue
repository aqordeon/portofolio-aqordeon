<template>
	<section class="container max-w-5xl mx-auto my-24">
		<div class="pt-12">
			<div class="text-7xl max-w-4xl font-black text-color-1 mb-16">
				Communicate ideas through pixels, colors, and characters.
			</div>

			<!-- Row 1: Hoila & About Me -->
			<div class="grid grid-cols-8 gap-x-8 gap-y-14">
				<div class="col-span-3 theme-7 border-2 border-gray-300 rounded-3xl p-8 shadow-lg grid content-end gap-y-4">
					<img src="~/assets/images/avatar1.png" alt="" class="h-full justify-self-center">
					<p class="text-5xl font-bold text-color-4 mt-4">Hoila!!</p>
					<div class="text-color-5">I'm Otdi, a frontend developer which focus on Nuxt and Tailwind.</div>
				</div>
				<div class="col-span-5">
					<div class="h-full overflow-hidden rounded-3xl shadow-xl grid theme-6">
						<NuxtLink to="/about" class="text-6xl text-white font-extrabold place-self-center">
							About Me
						</NuxtLink>
					</div>
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
				<div class="col-span-5">
					<div class="h-[400px] overflow-hidden rounded-3xl shadow-xl grid theme-2">
						<NuxtLink to="/blog" class="text-6xl text-white font-extrabold place-self-center">
							Blog
						</NuxtLink>
					</div>
				</div>
				<div class="col-span-3">
					<div class="h-[400px] overflow-hidden rounded-3xl shadow-xl grid theme-5">
						<NuxtLink to="/programming" class="text-6xl text-white font-extrabold place-self-center">
							#
						</NuxtLink>
					</div>
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
