<template>
    <div class="container max-w-5xl pb-[52px] py-[72px] grid gap-24">
        <div class="grid gap-8 md:gap-16 lg:gap-24">
            <div class="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-16 md:even:flex-row-reverse text-right even:text-left justify-end"
                v-for="(item, index) in goodAt" :key="index">
                <div class="p-6">
                    <h2 class="pb-6 text-3xl font-bold text-green-800" v-html="item.title"></h2>
                    <p class="">{{ item.description }}</p>
                </div>
                <img :src="item.image" alt="" title="" sizes="sm:90vw, lg:50vw, xl:30vw"
                    class="mx-auto px-10 md:px-0 md:object-contain " format="webp" />
            </div>
        </div>
    </div>
    <div class="bg-green-500 h-48 grid justify-center pt-16 px-48">
        <div class="text-gray-800 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fugit aspernatur quo,
            tenetur voluptatum iusto
            modi sit omnis corporis maiores?</div>
    </div>
    <div class="container max-w-5xl mb-24">
        <div>Featured Web</div>
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
]
</script>

<style lang="scss" scoped></style>