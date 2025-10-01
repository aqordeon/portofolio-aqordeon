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
					<div class="mx-auto max-w-7xl px-6 pb-32 pt-28 lg:px-8 lg:pt-16">
						<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<!-- Headline -->
							<div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
									Kartu kecil, bangun momen besar.
								</h1>
								<p
									class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
									Satu kartu bisa jadi awal obrolan yang seru, dekatin yang jauh, atau bikin nongkrong makin pecah. Banyak varian untuk semua momenmu.
								</p>
								<div class="mt-10 flex items-center gap-x-6">
									<a href="#"
										class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
										Jelajahi semua kartu
									</a>
									<a href="#" class="text-sm/6 font-semibold text-gray-900">
										Lihat cara mainnya <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>

							<!-- Image Gallery -->
							<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
								<div
									class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div class="relative">
										<img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<div class="relative">
										<img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div class="relative">
										<img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
											alt=""
											class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<div class="relative">
										<img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
											alt=""
											class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div class="relative">
										<img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>

						<!-- List product -->
						<div class="mx-auto max-w-2xl mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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

		<div class="bg-white py-24 sm:py-32">
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
		</div>
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
