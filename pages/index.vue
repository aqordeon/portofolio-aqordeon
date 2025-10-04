<template>
	<DashboardIndex />

	<div class="bg-white">

		<main>
			<div class="relative isolate">
				<svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
					aria-hidden="true">
					<defs>
						<pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1"
							patternUnits="userSpaceOnUse">
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
						<path
							d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
							stroke-width="0" />
					</svg>
					<rect width="100%" height="100%" stroke-width="0"
						fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
				</svg>

				<div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
					aria-hidden="true">
					<div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
						style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
				</div>

				<div class="overflow-hidden">
					<div class="mx-auto max-w-7xl pb-32 pt-28 lg:pt-16">
						<DashboardIndexHeadline />
						<DashboardIndexPoints />

						<!-- List product -->
						<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
							<h2 class="text-slate-700 text-2xl font-bold tracking-tight text-center">Best Seller</h2>
							<p class="text-slate-500 mt-2 text-center mx-auto text-balance">
								Variant di bawah ini selalu jadi pilihan favorit dari Toko Tangan Kanan!
								Setiap kartu dirancang untuk bikin momen nongkrong, first date, atau kumpul keluarga jadi lebih hidup, lebih dekat, dan pastinya lebih memorable.
								Kalau bingung mulai dari mana, best seller ini jawabannya ✨
							</p>

							<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								<ProductOnSmallGrid v-for="product in decksTopSellers" :key="product.slug" :product="product" />
							</div>
						</div>	
					</div>
				</div>
			</div>
		</main>

		<!-- <div class="bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div
					class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
						alt="Transistor" width="158" height="48" />

					<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform"
						width="158" height="48" />

					<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple"
						width="158" height="48" />

					<img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
						alt="SavvyCal" width="158" height="48" />

					<img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
						alt="Statamic" width="158" height="48" />
				</div>
				<div class="mt-16 flex justify-center">
					<p
						class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
						<span class="hidden md:inline">Over 2500 companies use our tools to better their
							business.</span>
						<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"><span
								class="absolute inset-0" aria-hidden="true" /> Read our customer stories <span
								aria-hidden="true">&rarr;</span></a>
					</p>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script setup lang="ts">

// definePageMeta({
//     layout: 'ttk'
// })

import { ref } from 'vue'
import Button from '../components/Utils/Button.vue'
import { decksTopSellers } from '../composables/useProduct'
import ProductOnSmallGrid from '../components/Products/ProductOnSmallGrid.vue'

useSeoMeta({
	title: 'Toko Tangan Kanan | Cards that build your moments',
	ogTitle: 'Toko Tangan Kanan | Cards that build your moments',
	description: 'Koleksi permainan kartu seperti Deep, Hangout, Badboy, Family99, dan lainnya. Cocok untuk nongkrong, PDKT, atau ngobrol santai bareng teman dan pasangan.',
	ogDescription: 'Koleksi permainan kartu seperti Deep, Hangout, Badboy, Family99, dan lainnya. Cocok untuk nongkrong, PDKT, atau ngobrol santai bareng teman dan pasangan.',
	ogImage: 'https://tokotangankanan.com/ttk_logo_1000.jpg',
	twitterCard: 'summary_large_image',
})



console.log('decksTopSellers', decksTopSellers)

// const gtm = useGtm() // auto-imported by the module

// const triggerEvent = (ab) => {
// 	console.log(ab.srcElement.innerText)
// 	gtm.trackEvent({
// 		event: ab.srcElement.innerText,
// 		category: 'category',
// 		action: 'lalalalalal',
// 		label: 'My custom component trigger',
// 		value: 'abcdef',
// 		noninteraction: false,
// 	})
// }


</script>

<style lang="scss" scoped></style>
