<template>
    <div class="container max-w-5xl pb-[52px] py-[72px] grid gap-24">
        <div class="text-6xl text-center text-color-1 font-black">What Otdi Good At</div>
        <div class="grid gap-x-24 gap-y-12">
            <div
                class="flex flex-row gap-y-6 gap-x-12 even:flex-row-reverse text-right even:text-left justify-end"
                v-for="(item, index) in goodAt" :key="index">
                <div class="p-6 place-self-center">
                    <h2 class="pb-2 text-3xl font-bold text-color-1" v-html="item.title"></h2>
                    <p class="">{{ item.description }}</p>
                </div>
                <img :src="item.image" alt="" class="mx-auto h-96"/>
            </div>
        </div>
    </div>
    <div class="theme-5 grid justify-center py-16 px-48">
        <TechStacks />
    </div>
    <div class="container max-w-5xl mb-24">
        <div class="mt-12 mb-8 text-center text-slate-700 font-black text-4xl">Featured Project</div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-12">
            
            <!-- Read/See -->
            <div class="h-80 rounded-3xl shadow-lg overflow-hidden bg-[url('~/assets/images/readsee.png')] bg-cover">
                <NuxtLink to="https://readsee.io" target="_blank" noRel class="grid content-end h-full backdrop-black p-8 gap-y-2">
                    <div class="text-gray-100 font-semibold text-4xl text-color-3">Read/See</div>
                    <div class="text-green-300">A landing page for Customer Data Platform.</div>
                </NuxtLink>
            </div>
            <div class="h-80 rounded-3xl shadow-lg overflow-hidden bg-[url('~/assets/images/space.png')] bg-cover">
                <NuxtLink to="https://master--poetic-cactus-ac6ae9.netlify.app" target="_blank" noRel class="grid content-end h-full backdrop-white p-8 gap-y-2">
                    <div class="text-gray-100 font-semibold text-4xl text-color-5">Space</div>
                    <div class="text-gray-700">Completing a challenge from <NuxtLink to="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" class="font-semibold">FrontendMentor</NuxtLink>.</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const goodAt = [
    {
        title: 'Slicing UI',
        description: 'Pixel-perfect designs. Taking a design mockup from Figma and breaking it down into programmatical code.',
        image: '/illustrations/slicing.svg'
    },
    {
        title: 'Responsive View',
        description: 'Responsive, cross-platform view. Setting the responsive view for phones, tablets, and desktops.',
        image: '/illustrations/responsive.svg'
    },
    {
        title: 'Optimize Images',
        description: 'Supafast! Optimized images so the website don`t need to load the full-size image that usually takes lots memory make it heavy to access.',
        image: '/illustrations/images.svg'
    },
    {
        title: 'Improve Web Performance',
        description: "The most-faced problem that usually developer meets ~ page's performance is slow. Optimizing code, reducing page load times, caching strategies. Yeah, Vika can do it.",
        image: '/illustrations/performance.svg'
    },
]
</script>

<style lang="scss" scoped></style>