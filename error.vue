<script setup lang="ts">
import type { NuxtError } from '#app'
import Button from './components/Utils/Button.vue'

const props = defineProps<{
    error: NuxtError
}>()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
    title: () => (is404.value ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan'),
    robots: 'noindex, follow',
})

const goHome = () => clearError({ redirect: '/' })
const goToCards = () => clearError({ redirect: '/cards' })
</script>

<template>
    <NuxtLayout>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                <p class="text-base font-semibold text-primary">{{ error?.statusCode || 404 }}</p>
                <h1 class="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-800">
                    {{ is404 ? 'Halaman tidak ditemukan' : 'Ups, terjadi kesalahan' }}
                </h1>
                <p class="mt-4 text-base text-slate-500 text-balance">
                    {{ is404
                        ? 'Halaman yang kamu cari mungkin sudah dipindahkan atau memang tidak ada. Yuk, kembali dan lihat koleksi kartu kami.'
                        : 'Maaf, sesuatu tidak berjalan sebagaimana mestinya. Coba muat ulang halaman atau kembali ke beranda.' }}
                </p>
                <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button type="primary" size="lg" @click="goHome">Kembali ke Beranda</Button>
                    <Button type="secondary" size="lg" @click="goToCards">
                        Lihat Semua Kartu
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
