<script setup lang='ts'>
import { useStringToHex } from '../../composables/Utils/useStringToHex';
import Button from '../Utils/Button.vue';
import Tag from '../Utils/Tag.vue';

const props = defineProps<{
    product: {
        id: number
        title: string
        slug: string
        href?: string
        imageSrc: string
        imageAlt: string
        occasion: string[]
        tags: string[]
    }
}>()
</script>

<template>
    <div class="relative group flex flex-col justify-between">
        <div>
            <div class="relative xaspect-square w-full rounded-md overflow-hidden border border-gray-200 group-hover:border-gray-500 object-contain aspect-[4/5]">
                <NuxtLink as="a" :href="`/cards/${product.slug}`" class="">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="" />
                </NuxtLink>
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <NuxtLink :href="`cards/${product.slug}`" class="relative font-semibold text-lg">
                            <span aria-hidden="true" class="absolute inset-0" />
                            {{ product.title }}
                        </NuxtLink>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <!-- <p class="text-sm font-medium">{{ product.price }}</p> -->
            </div>
            
            <div class="bottom-0 left-0 xpx-2 w-full flex gap-x-2 gap-y-1.5 flex-wrap mb-4">
                <div v-for="tag in product.occasion" :key="tag" class="inline-flex items-center gap-x-1 rounded select-none px-2 py-0 text-xs w-fit font-medium border"
                    :style="[
                        `background-color: color-mix(in srgb, ${useStringToHex(tag)} 30%, white)`,
                        `border: 1px solid color-mix(in srgb, ${useStringToHex(tag)} 80%, black)`,
                        `color: color-mix(in srgb, ${useStringToHex(tag)} 70%, black)`
                    ]"
                >
                    {{ tag }}
                </div>
            </div>
        </div>

        <NuxtLink :href="`/cards/${product.slug}`" class="mt-2 md:mt-4 w-full">
            <Button type="secondary" full>Lihat detail</Button>
        </NuxtLink>
    </div>
</template>