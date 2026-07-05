<template>
    <div class="container max-w-5xl">
        <div class="text-7xl text-color-2 font-extrabold text-center my-32 py-4">
            Sorry, but the page is currently on maintenance.
        </div>
    </div>
</template>

<script setup>
// Halaman masih maintenance — jangan diindeks Google sampai ada konten asli.
useSeoMeta({
    title: 'Blog',
    robots: 'noindex, follow',
})
</script>

<style lang="scss" scoped></style>