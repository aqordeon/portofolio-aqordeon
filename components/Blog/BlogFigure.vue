<script setup lang='ts'>
// Foto artikel belum ada: selama `src` masih null, figure ini merender kotak
// placeholder berisi deskripsi fotonya. Tinggal isi `src` di posts.ts untuk
// menggantinya dengan foto asli, tanpa mengubah apa pun di sini.
const props = withDefaults(defineProps<{
    src?: string | null
    alt: string
    caption?: string
    aspect?: string
    priority?: boolean
}>(), {
    src: null,
    aspect: 'aspect-[16/9]',
    priority: false,
})
</script>

<template>
    <figure class="my-8">
        <img v-if="props.src" :src="props.src" :alt="props.alt"
            :loading="props.priority ? 'eager' : 'lazy'"
            :fetchpriority="props.priority ? 'high' : undefined"
            decoding="async"
            class="w-full rounded-lg object-cover" :class="props.aspect" />

        <div v-else
            class="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center"
            :class="props.aspect">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-8 text-primary/50" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p class="text-xs md:text-sm font-semibold text-primary/70">Foto menyusul</p>
            <p class="max-w-md text-xs text-slate-500">{{ props.alt }}</p>
        </div>

        <figcaption v-if="props.caption" class="mt-2 text-center text-xs text-slate-500">
            {{ props.caption }}
        </figcaption>
    </figure>
</template>
