<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl pxc-4 py-16 sm:pxx-6 sm:py-24 lg:max-w-4xl zlg:px-8">
            <div class="lg:grid lg:grid-cols-7 lg:items-start lg:gap-x-8 mb-10">
                <!-- Section: Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse col-span-3">
                    <!-- Image selector -->
                    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                        <TabList class="grid grid-cols-4 gap-6">
                            <Tab v-for="image in product?.images" :key="image.id"
                                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                                v-slot="{ selected }">
                                <span class="sr-only">{{ image.name }}</span>
                                <span class="absolute inset-0 overflow-hidden rounded-md">
                                    <img :src="image" alt="" class="size-full object-cover" />
                                </span>
                                <span
                                    :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                                    aria-hidden="true" />
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanels>
                        <TabPanel v-for="image in product?.images" :key="image.id">
                            <img :src="image" :alt="image.alt" class="aspect-square w-full object-cover sm:rounded-lg" />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

                <!-- Section: Product info (name, price, description, details) -->
                <div class="col-span-4 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 class="text-3xl font-bold tracking-tight text-justify ">{{ product?.title }}</h1>

                    <!-- <div class="mt-3">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl tracking-tight ">{{ product?.price }}</p>
                    </div> -->

                    <!-- Reviews -->
                    <!-- <div class="mt-3">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                    :class="[product?.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'size-5 shrink-0']"
                                    aria-hidden="true" />
                            </div>
                            <p class="sr-only">{{ product?.rating }} out of 5 stars</p>
                        </div>
                    </div> -->

                    <!-- Section: Description -->
                    <div class="mt-6">
                        <h3 class="sr-only">Description</h3>
                        <div class="editor-content text-base text-gray-700" v-html="product?.description" />
                        <component v-if="product?.descriptionComponent" :is="product?.descriptionComponent" />
                    </div>

                    <!-- Section: link olshop -->
                    <div class="mt-10 flex gap-x-4">
                        <a v-if="product?.link_olshop?.shopee" :href="product?.link_olshop?.shopee" target="_blank"><img src="/images/logo/shopee.webp" class="h-10 grayscale hover:grayscale-0"/></a>                            
                        <a v-if="product?.link_olshop?.tokopedia" :href="product?.link_olshop?.tokopedia" target="_blank"><img src="/images/logo/tokopedia.webp" class="h-10 grayscale hover:grayscale-0"/></a>                            
                        <a v-if="product?.link_olshop?.tiktokshop" :href="product?.link_olshop?.tiktokshop" target="_blank"><img src="/images/logo/tiktokshop.webp" class="h-10 grayscale hover:grayscale-0"/></a>                            
                    </div>

                    <!-- <div class="mt-10 flex">
                        <button type="button"
                            class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <HeartIcon class="size-6 shrink-0" aria-hidden="true" />
                            <span class="sr-only">Add to favorites</span>
                        </button>
                    </div> -->


                    <!-- Section: Additional Details -->
                    <section v-if="dummyDetail?.length" aria-labelledby="details-heading" class="mt-12">
                        <h2 id="details-heading" class="sr-only">Additional details</h2>

                        <div class="divide-y divide-gray-200 border-t border-gray-200">
                            <Disclosure as="div" v-for="detail in dummyDetail" :key="detail.name" v-slot="{ open }">
                                <h3>
                                    <DisclosureButton
                                        class="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span
                                            :class="[open ? 'text-indigo-600' : '', 'text-sm font-medium']">{{
                                            detail.name }}</span>
                                        <span class="ml-6 flex items-center">
                                            <PlusIcon v-if="!open"
                                                class="block size-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            <MinusIcon v-else
                                                class="block size-6 text-indigo-400 group-hover:text-indigo-500"
                                                aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel as="div" class="pb-6">
                                    <ul role="list"
                                        class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300">
                                        <li v-for="item in detail.items" :key="item" class="pl-2">{{ item }}</li>
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </section>
                </div>
            </div>
            
            <!-- Section: Spotify -->
            <section v-if="product?.link_spotify" class="relative isolate overflow-hidden bg-gray-800 px-6 sm:pt-10 sm:pb-12 lg:px-8">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10"></div>
                <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <img class="mx-auto h-32" src="/images/svg/spotify_logo.svg" alt="" />
                    <figure class="mt-5 mb-5">
                        <div class="text-center text-xl/8 font-bold text-white sm:text-3xl/9">
                            Mainkan musiknya, rasakan momennya lebih hidup
                        </div>
                        <div class="text-center opacity-80 text-white italic xtext-balance mx-auto mt-4 w-10/12">
                            Putar playlist spesial untuk tiap variant kartu Toko Tangan Kanan di Spotify, dan biarkan musiknya menyatu dengan momenmu.
                        </div>
                        <!-- <div class="mt-10 flex justify-center">
                            <a
                                :href="product?.link_spotify"
                                class="cursor-pointer inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                                target="_blank"
                            >
                                Dengarkan di Spotify
                            </a>
                        </div> -->
                    </figure>

                    <iframe data-testid="embed-iframe" style="border-radius:12px" :src="product?.link_spotify" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </section>
        </div>
    </div>

    <!-- <pre>{{ product }}</pre> -->
</template>

<script setup lang="ts">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useDecksLP } from '../../composables/cards/decks_lp'


const dummyDetail = [
        // {
        //     name: 'Features',
        //     items: [
        //         'Multiple strap configurations',
        //         'Spacious interior with top zip',
        //         'Leather handle and tabs',
        //         'Interior dividers',
        //         'Stainless strap loops',
        //         'Double stitched construction',
        //         'Water-resistant',
        //     ],
        // },
        // {
        //     name: 'Care',
        //     items: [
        //         'Spot clean as needed',
        //         'Hand wash with mild soap',
        //         'Machine wash interior dividers',
        //         'Treat handle and tabs with leather conditioner',
        //     ],
        // },
        // {
        //     name: 'Shipping',
        //     items: [
        //         'Free shipping on orders over $300',
        //         'International shipping available',
        //         'Expedited shipping options',
        //         'Signature required upon delivery',
        //     ],
        // },
        // {
        //     name: 'Returns',
        //     items: [
        //         'Easy return requests',
        //         'Pre-paid shipping label included',
        //         '10% restocking fee for returns',
        //         '60 day return window',
        //     ],
        // },
    ]

// const fetchLibrary = async () => {
//     const route = useRoute()
//     const aa = await $fetch(`/api/card/${route.params.cardSlug}`)

//     console.log('aaa', aa)
//     product.value = aa
// }
// fetchLibrary()
const product = useDecksLP[useRoute()?.params?.cardSlug]

</script>

<style>
.editor-content {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #222;
}

.editor-content h1,
.editor-content h2,
.editor-content h3,
.editor-content h4,
.editor-content h5,
.editor-content h6 {
  font-weight: 600;
  line-height: 1.3;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.editor-content h1 { font-size: 2rem; }
.editor-content h2 { font-size: 1.6rem; }
.editor-content h3 { font-size: 1.4rem; }
.editor-content h4 { font-size: 1.2rem; }
.editor-content h5 { font-size: 1.1rem; }
.editor-content h6 { font-size: 1rem; }

.editor-content p {
  margin: 0.25em 0;
}

.editor-content a {
  color: #008989;
  text-decoration: underline;
  transition: color 0.2s ease;
}
.editor-content a:hover {
  color: #006e6e;
}

/* List styling */
.editor-content ul,
.editor-content ol {
  margin: 0.5em 0 0.5em 1.5em;
  padding-left: 1em;
}

.editor-content ul li {
  list-style-type: disc;
  margin: 0.25em 0;
}

.editor-content ol li {
  list-style-type: decimal;
  margin: 0.25em 0;
}

/* Nested list */
.editor-content li ul,
.editor-content li ol {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

/* Blockquote */
.editor-content blockquote {
  border-left: 4px solid #008989;
  padding-left: 1em;
  margin: 1em 0;
  color: #555;
  font-style: italic;
  background: #f9f9f9;
  border-radius: 4px;
}

/* Code blocks */
.editor-content pre,
.editor-content code {
  font-family: 'JetBrains Mono', monospace;
  background: #f3f3f3;
  border-radius: 4px;
}

.editor-content pre {
  padding: 0.75em 1em;
  overflow-x: auto;
}

.editor-content code {
  padding: 0.15em 0.3em;
}

/* Images */
.editor-content img {
  max-width: 100%;
  border-radius: 6px;
  margin: 1em 0;
}

/* Horizontal rule */
.editor-content hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 1.5em 0;
}
</style>