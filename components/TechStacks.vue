<template>
    <div class="container">
        <div class="grid justify-center">
            <div class="text-center mb-16 text-4xl font-bold">The core tools Otdi used daily</div>
            <div class="flex justify-center grid-flow-col gap-x-8">
                <div v-for="(stack, index) in techstacks" :key="index" class="pb-4 hover:border-b-4 hover:border-b-violet-600">
                    <img :src="stack.logo" :alt="stack.description" class="w-[100px] object-contain">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const techstacks = [
    {
        name: "Yarn",
        url: "https://yarnpkg.com/",
        logo: "/logo/yarn.png",
        description: "Yarn is one of the main JavaScript package managers."
    },
    {
        name: "Tailwind",
        url: "https://tailwindcss.com/",
        logo: "/logo/tailwind.png",
        description: "Tailwind is one of most favourite CSS framework."
    },
    {
        name: "ESLint",
        url: "https://eslint.org/",
        logo: "/logo/eslint.png",
        description: "ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code."
    },
    {
        name: "Git",
        url: "https://git-scm.com/",
        logo: "/logo/git.png",
        description: "Git is a distributed version control system that tracks changes in any set of computer files."
    },
    {
        name: "Nuxt 3",
        url: "https://nuxt.com/",
        logo: "/logo/nuxt 3.png",
        description: "An open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js."
    },
    {
        name: "Typescript",
        url: "https://www.typescriptlang.org/",
        logo: "/logo/typescript.png",
        description: "An open source high-level programming language. A strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript."
    },
    {
        name: "Vue 3",
        url: "https://vuejs.org/",
        logo: "/logo/vue 3.png",
        description: "Front end JavaScript framework for building user interfaces and single-page applications."
    },
]
</script>

<style lang="scss" scoped></style>