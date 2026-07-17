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

// --- Marquee track ---
// The track holds two identical halves so translating it by -50% lands exactly
// on the start of the second half, making the loop seamless. With few images the
// base sequence is repeated first so the track is always wider than the viewport.
const marqueeEnabled = computed(() => props.images.length > 1)

const marqueeBase = computed(() => {
    const repeat = Math.max(1, Math.ceil(6 / props.images.length))
    return Array.from({ length: repeat }, () => props.images).flat()
})

const marqueeTrack = computed(() => [...marqueeBase.value, ...marqueeBase.value])

/** ~6s per image keeps the pace readable regardless of how many there are. */
const marqueeDuration = computed(() => `${marqueeBase.value.length * 6}s`)

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
            <div v-if="marqueeEnabled" class="marquee -mx-4 overflow-hidden px-4 sm:mx-0 sm:px-0">
                <ul role="list" class="marquee-track flex w-max items-center"
                    :style="{ '--marquee-duration': marqueeDuration }">
                    <!-- Spacing lives on the item, not as a flex `gap`: the track must be an
                         exact 2x tile so translating -50% lands seamlessly on the copy. -->
                    <li v-for="(image, index) in marqueeTrack" :key="`${index}-${image.src}`" class="pr-3"
                        :aria-hidden="index >= marqueeBase.length || undefined">
                        <button type="button" :tabindex="index >= marqueeBase.length ? -1 : undefined"
                            @click="openLightbox(index % images.length)"
                            class="block overflow-hidden rounded-lg border border-gray-200 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2">
                            <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async"
                                class="review-shot" />
                        </button>
                    </li>
                </ul>
            </div>

            <!-- A lone screenshot has nothing to scroll past, so it just sits there. -->
            <button v-else type="button" @click="openLightbox(0)"
                class="block overflow-hidden rounded-lg border border-gray-200 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2">
                <img :src="images[0].src" :alt="images[0].alt" loading="lazy" decoding="async" class="review-shot" />
            </button>
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

<style scoped>
.marquee {
    /* Fade the images out at both edges so they enter and leave, rather than
       being clipped mid-scroll. */
    mask-image: linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent);
}

.marquee-track {
    animation: marquee-scroll var(--marquee-duration, 36s) linear infinite;
}

/* Marketplace screenshots arrive at whatever ratio and dimension they were
   exported at. These are a ceiling, not a fixed size: a large capture scales
   down to fit the row, a small one is left at its native size rather than
   stretched — they are text-heavy, and upscaling turns the text to mush.
   Both dimensions stay auto, so the ratio is preserved and nothing is cropped. */
.review-shot {
    display: block;
    width: auto;
    max-width: min(80vw, 32rem);
    max-height: 13rem;
}

@media (min-width: 640px) {
    .review-shot {
        max-height: 16rem;
    }
}

.marquee:hover .marquee-track,
.marquee:focus-within .marquee-track {
    animation-play-state: paused;
}

@keyframes marquee-scroll {
    from {
        transform: translateX(0);
    }

    to {
        /* Half the track is the duplicated copy, so this lands back on frame 0. */
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .marquee {
        overflow-x: auto;
        mask-image: none;
        -webkit-mask-image: none;
    }

    .marquee-track {
        animation: none;
    }
}
</style>
