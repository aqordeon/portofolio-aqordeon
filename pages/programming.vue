<template>
    <div class="container max-w-5xl pb-[52px] py-[72px] grid gap-24">
        <div class="grid gap-8 md:gap-16 lg:gap-24">
            <div class="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-16 md:even:flex-row-reverse text-right even:text-left justify-end"
                v-for="(item, index) in goodAt" :key="index">
                <div class="p-6">
                    <h2 class="pb-6 text-3xl font-bold text-color-1" v-html="item.title"></h2>
                    <p class="">{{ item.description }}</p>
                </div>
                <img :src="item.image" alt="" title="" sizes="sm:90vw, lg:50vw, xl:30vw"
                    class="mx-auto px-10 md:px-0 md:object-contain " format="webp" />
            </div>
        </div>
    </div>
    <div class="theme-4 grid justify-center py-16 px-48">
        <TechStacks />
    </div>
    <div class="container max-w-5xl mb-24">
        <div class="mt-12 mb-8 text-center text-slate-700 font-black text-4xl">Featured Project</div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-12">
            <div class="h-80 rounded-xl theme-4 p-8 grid content-end gap-y-2">
                <div class="text-gray-100 font-semibold text-4xl">Title</div>
                <div class="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ipsum. Nostrum ducimus corporis rerum saepe?</div>
                <!-- <div class="grid grid-flow-col gap-x-4 justify-start">
                    <img src="/logo/git.png" alt="" class="w-8">
                    <img src="/logo/vue 3.png" alt="" class="w-8">
                    <img src="/logo/nuxt 3.png" alt="" class="w-8">
                </div> -->
            </div>
            <div class="h-80 rounded-xl theme-4 p-8 grid content-end gap-y-2">
                <div class="text-gray-100 font-semibold text-4xl">Title</div>
                <div class="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ipsum. Nostrum ducimus corporis rerum saepe?</div>
            </div>
            <div class="h-80 rounded-xl theme-4 p-8 grid content-end gap-y-2">
                <div class="text-gray-100 font-semibold text-4xl">Title</div>
                <div class="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ipsum. Nostrum ducimus corporis rerum saepe?</div>
            </div>
            <div class="h-80 rounded-xl theme-4 p-8 grid content-end gap-y-2">
                <div class="text-gray-100 font-semibold text-4xl">Title</div>
                <div class="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ipsum. Nostrum ducimus corporis rerum saepe?</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const goodAt = [
    {
        title: 'Optimize Images',
        description: 'Optimized images is a must so the website don`t need to load the full-size image that usually takes lots memory.',
        image: '/dummy.png'
    },
    {
        title: 'Improve Web Performance',
        description: "The most-faced problem that usually developer meets ~ page's performance is slow. Optimizing code, reducing page load times, caching strategies. Yeah, Vika can do it.",
        image: '/dummy.png'
    },
    {
        title: 'Slicing UI',
        description: 'Taking a design mockup and breaking it down into code. Responsive, pixel-perfect designs.',
        image: '/dummy.png'
    },
    {
        title: 'Responsive View',
        description: 'Taking a design mockup and breaking it down into code. Responsive, pixel-perfect designs.',
        image: '/dummy.png'
    },
]
</script>

<style lang="scss" scoped></style>