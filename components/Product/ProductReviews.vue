<script setup lang="ts">
import { computed, ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'

interface Review {
    author: string
    rating: number
    text: string
    date?: string
}

interface ReviewImage {
    src: string
    alt: string
}

const props = withDefaults(
    defineProps<{
        reviews?: Review[]
        images?: ReviewImage[]
        /** Aggregate rating shown in the header. Falls back to the average of `reviews`. */
        rating?: number
        /** Total number of ratings on the marketplace. Falls back to `reviews.length`. */
        ratingCount?: number
        title?: string
    }>(),
    {
        reviews: () => [],
        images: () => [],
        title: 'Apa kata mereka yang sudah main',
    },
)

const hasReviews = computed(() => props.reviews.length > 0)
const hasImages = computed(() => props.images.length > 0)
const hasContent = computed(() => hasReviews.value || hasImages.value)

const averageRating = computed(() => {
    if (props.rating) return props.rating
    if (!hasReviews.value) return 0
    const sum = props.reviews.reduce((acc, r) => acc + (r.rating || 0), 0)
    return Math.round((sum / props.reviews.length) * 10) / 10
})

const totalCount = computed(() => props.ratingCount ?? props.reviews.length)

// --- Lightbox for review screenshots ---
const lightboxOpen = ref(false)
const activeIndex = ref(0)

function openLightbox(index: number) {
    activeIndex.value = index
    lightboxOpen.value = true
}
</script>

<template>
    <section v-if="hasContent" aria-labelledby="reviews-heading" class="mt-16 border-t border-gray-200 pt-12">
        <div class="mb-8">
            <h2 id="reviews-heading" class="text-2xl font-bold tracking-tight text-gray-900">
                {{ title }}
            </h2>

            <div v-if="averageRating" class="mt-3 flex items-center gap-x-2">
                <div class="flex items-center">
                    <StarIcon v-for="i in [0, 1, 2, 3, 4]" :key="i"
                        :class="[averageRating > i ? 'text-primary' : 'text-gray-300', 'size-5 shrink-0']"
                        aria-hidden="true" />
                </div>
                <p class="text-sm text-gray-600">
                    <span class="font-semibold text-gray-900">{{ averageRating }}</span>
                    <span v-if="totalCount"> dari {{ totalCount }} penilaian</span>
                </p>
            </div>
        </div>

        <!-- Text testimonials -->
        <div v-if="hasReviews" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure v-for="(review, index) in reviews" :key="index"
                class="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center">
                    <StarIcon v-for="i in [0, 1, 2, 3, 4]" :key="i"
                        :class="[review.rating > i ? 'text-primary' : 'text-gray-300', 'size-4 shrink-0']"
                        aria-hidden="true" />
                    <span class="sr-only">{{ review.rating }} dari 5 bintang</span>
                </div>
                <blockquote class="mt-3 grow text-sm/6 text-gray-700">
                    <p>{{ review.text }}</p>
                </blockquote>
                <figcaption class="mt-4 flex items-center justify-between text-xs">
                    <span class="font-semibold text-gray-900">{{ review.author }}</span>
                    <span v-if="review.date" class="text-gray-400">{{ review.date }}</span>
                </figcaption>
            </figure>
        </div>

        <!-- Screenshot gallery -->
        <div v-if="hasImages" :class="hasReviews ? 'mt-10' : ''">
            <h3 v-if="hasReviews" class="mb-4 text-sm font-medium text-gray-500">Bukti ulasan dari pembeli</h3>
            <ul role="list" class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                <li v-for="(image, index) in images" :key="image.src">
                    <button type="button" @click="openLightbox(index)"
                        class="group block w-full overflow-hidden rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2">
                        <img :src="image.src" :alt="image.alt" width="400" height="400" loading="lazy" decoding="async"
                            class="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105" />
                    </button>
                </li>
            </ul>
        </div>

        <!-- Lightbox -->
        <TransitionRoot :show="lightboxOpen" as="template">
            <Dialog class="relative z-50" @close="lightboxOpen = false">
                <TransitionChild as="template" enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/80" aria-hidden="true" />
                </TransitionChild>

                <div class="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild as="template" enter="duration-200 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="relative max-h-full max-w-3xl">
                            <img v-if="images[activeIndex]" :src="images[activeIndex].src"
                                :alt="images[activeIndex].alt"
                                class="max-h-[85vh] w-auto rounded-lg object-contain" />
                            <button type="button" @click="lightboxOpen = false"
                                class="absolute -top-3 -right-3 flex size-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100">
                                <span aria-hidden="true" class="text-xl leading-none">&times;</span>
                                <span class="sr-only">Tutup</span>
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>
    </section>
</template>
