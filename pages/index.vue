<template>
	<section class="container max-w-5xl mx-auto my-24">
		<div class="pt-12">
			<div class="text-7xl max-w-4xl font-black text-color-1 mb-24">
				Communicate ideas through pixels, colors, and characters.
			</div>

			<!-- Row 1: Hoila & About Me -->
			<div class="grid grid-cols-8 gap-x-8 gap-y-14">
				<div class="col-span-3 bg-white border-2 border-gray-300 rounded-3xl p-8 shadow-lg grid content-end gap-y-4">
					<img src="~/assets/images/avatar1.png" alt="" class="h-full justify-self-center">
					<p class="text-5xl font-bold text-color-4 mt-4">Hoila!!</p>
					<div class="text-color-5">I'm Otdi, a frontend developer which focus on <span class="font-extrabold">Nuxt</span> and <span class="font-extrabold">Tailwind</span>.</div>
				</div>
				<NuxtLink to="/about" class="col-span-5">
					<div class="h-full overflow-hidden rounded-3xl shadow-xl grid theme-6">
						<div class="text-6xl text-white font-extrabold place-self-center">
							About Me
						</div>
					</div>
				</NuxtLink>

				<!-- Row 2: Programming -->
				<NuxtLink to="/programming" class="col-span-8">
					<div
						class=" h-[400px] overflow-hidden rounded-3xl shadow-xl grid bg-[url('./assets/images/programming.jpg')] bg-cover bg-center">
						<div class="bg-gray-900/50 grid backdrop-blur-sm">
							<div class="text-6xl text-color-7 font-extrabold place-self-center">
								PROGRAMMING
							</div>
						</div>
					</div>
				</NuxtLink>

				<!-- Row 3 -->
				<NuxtLink to="/blog" class="col-span-5">
					<div class="h-[400px] overflow-hidden rounded-3xl shadow-xl grid theme-2">
						<div class="text-6xl text-white font-extrabold place-self-center">
							Blog
						</div>
					</div>
				</NuxtLink>
				<NuxtLink to="/#" class="col-span-3">
					<div class="h-[400px] overflow-hidden rounded-3xl border-2 border-gray-300 shadow-xl grid theme-7">
						<div class="text-6xl text-color-5 font-extrabold place-self-center">
							#
						</div>
					</div>
				</NuxtLink>

				<!-- Row 4: Design -->
				<NuxtLink to="/design" class="col-span-8">
					<div
						class=" h-[400px] rounded-3xl overflow-hidden shadow-xl grid bg-[url('./assets/images/design/design.jpg')] bg-cover bg-center">
						<div class="bg-gray-900/50 grid backdrop-blur-sm">
							<div class="text-6xl text-color-7 font-extrabold place-self-center">
								DESIGN
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>



			<div class="grid mt-24">
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
