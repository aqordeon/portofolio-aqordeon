<template>
    <header class="bg-white sticky inset-x-0 top-0 z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Toko Tangan Kanan</span>
                    <img class="h-8 w-auto"
                        src="/ttk/ttk-teal-logo.png" alt="" />
                </NuxtLink>
            </div>
            
            <!-- Button: Hamburger (mobile) -->
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                </button>
            </div>

            <!-- Section: list navbar (desktop) -->
            <div class="hidden lg:flex lg:gap-x-12">
                <div @click="_popover?.toggle" class="text-sm/6 font-semibold cursor-pointer inline">
                    <span>Semua kartu</span>
                    <span class="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 inline transition-all"  :class="_popover?.visible ? 'rotate-180' : ''">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>

                </div>
                <NuxtLink href="/tentang-kami" class="text-sm/6 font-semibold ">Tentang kami</NuxtLink>
                <NuxtLink href="/faq" class="text-sm/6 font-semibold ">FAQ</NuxtLink>
                <NuxtLink href="/kontak" class="text-sm/6 font-semibold ">Kontak</NuxtLink>
            </div>
        </nav>

        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <NuxtLink href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Toko Tangan Kanan</span>
                        <img class="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="size-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in cardsList" :key="item.name" :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50">{{
                                item.name }}</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>

        <!-- Popover: semua kartu -->
        <Popover ref="_popover">
            <div class="flex flex-col py-1 gap-4 w-[15rem]">
                <ul class="list-none p-0 m-0 flex flex-col gap-2">
                    <NuxtLink
                        v-for="card, idxCard in cardsList"
                        :key="idxCard"
                        @click="() => _popover?.hide()"
                        :href="card.href"
                        class="px-3 py-1 rounded flex items-center gap-2"
                        :class="$route.path === card.href ? 'bg-primary text-white' : 'hover:bg-primary/10 '"
                    >
                        <div>
                            <span class="font-medium">{{ card.name }}</span>
                        </div>
                        <div class="ml-auto h-fit">
                            <div class="aspect-[16/9] w-10">
                                <img :src="card.img" :alt="card.name" class="object-contain h-full w-full" />
                            </div>
                        </div>
                    </NuxtLink>
                </ul>
            </div>
        </Popover>
    </header>
</template>

<script lang="ts" setup>

import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Popover } from 'primevue'

const cardsList = [
	{
        name: 'Deep',
        img: '/images/logo/deep_logo.png',
        href: '/cards/deep'
    },
	{
        name: 'Hangout',
        img: '/images/logo/hangout_logo.png',
        href: '/cards/hangout'
    },
	{
        name: 'This or That',
        img: '/images/logo/tot_logo.png',
        href: '/cards/tot'
    },
	{
        name: 'Family99',
        img: '/images/logo/family99_logo.png',
        href: '/cards/family99'
    },
	{
        name: 'Badboy',
        img: '/images/logo/badboy_logo.png',
        href: '/cards/badboy'
    },
	{
        name: 'Berani Gak?',
        img: '/images/logo/beranigak_logo.png',
        href: '/cards/berani_gak'
    },
	{
        name: 'This or That 2',
        img: '/images/logo/tot2_logo.png',
        href: '/cards/tot2'
    },
]

const mobileMenuOpen = ref(false)

const _popover = ref(null)
</script>

<style></style>