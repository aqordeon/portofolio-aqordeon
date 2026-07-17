<script setup lang="ts">
import Button from '../../components/Utils/Button.vue'
import { findBlogPost } from '../../composables/blog/posts'
import { useDecksLP } from '../../composables/cards/decks_lp'
import { decks } from '../../composables/useProduct'

const SITE_URL = 'https://tokotangankanan.com'

const route = useRoute()
const post = findBlogPost(String(route.params.postSlug))

if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan', fatal: true })
}

const relatedCard = post.relatedCardSlug ? useDecksLP[post.relatedCardSlug] : undefined
const relatedDeck = post.relatedCardSlug ? decks.find(deck => deck.slug === post.relatedCardSlug) : undefined

const formattedPrice = computed(() => relatedCard?.price
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(relatedCard.price)
    : null)

// Foto artikel masih placeholder, jadi og:image jatuh ke logo brand dulu.
const shareImage = post.cover.src ? `${SITE_URL}${post.cover.src}` : `${SITE_URL}/ttk_logo_1000.jpg`

useSeoMeta({
    title: post.meta.title,
    ogTitle: `${post.meta.title} | Toko Tangan Kanan`,
    description: post.meta.description,
    ogDescription: post.meta.description,
    ogImage: shareImage,
    ogUrl: `${SITE_URL}/blog/${post.slug}`,
    ogType: 'article',
    articlePublishedTime: post.date,
    twitterCard: 'summary_large_image',
})

useHead({
    link: [{ rel: 'canonical', href: `${SITE_URL}/blog/${post.slug}` }],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': `${SITE_URL}/blog/${post.slug}#article`,
                headline: post.title,
                description: post.meta.description,
                image: shareImage,
                datePublished: post.date,
                dateModified: post.date,
                inLanguage: 'id-ID',
                isPartOf: { '@id': `${SITE_URL}/blog#blog` },
                author: { '@id': `${SITE_URL}/#organization` },
                publisher: { '@id': `${SITE_URL}/#organization` },
                mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
                keywords: post.tags.join(', '),
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
                        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
                        { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
                    ],
                },
            }),
        },
    ],
})
</script>

<template>
    <div v-if="post" class="bg-white">
        <div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <!-- Breadcrumb -->
            <nav class="mb-8 text-sm" aria-label="Breadcrumb">
                <ol class="flex flex-wrap items-center gap-x-2 text-gray-500">
                    <li><NuxtLink to="/" class="hover:text-primary">Beranda</NuxtLink></li>
                    <li aria-hidden="true" class="text-gray-300">/</li>
                    <li><NuxtLink to="/blog" class="hover:text-primary">Blog</NuxtLink></li>
                    <li aria-hidden="true" class="text-gray-300">/</li>
                    <li class="font-medium text-gray-700 line-clamp-1" aria-current="page">{{ post.title }}</li>
                </ol>
            </nav>

            <!-- Section: judul artikel -->
            <header>
                <div class="flex flex-wrap items-center gap-2">
                    <span v-for="tag in post.tags" :key="tag"
                        class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {{ tag }}
                    </span>
                </div>

                <h1 class="mt-4 text-balance text-2xl md:text-4xl font-bold tracking-tight text-slate-800">
                    {{ post.title }}
                </h1>

                <div class="mt-4 flex items-center gap-x-2 text-xs md:text-sm text-slate-400">
                    <time :datetime="post.date">{{ post.dateLabel }}</time>
                    <span aria-hidden="true">·</span>
                    <span>{{ post.readingTime }} baca</span>
                </div>

                <p class="mt-6 text-sm md:text-lg leading-7 text-slate-500">{{ post.excerpt }}</p>
            </header>

            <!-- Section: isi artikel -->
            <article class="article-body mt-8">
                <component :is="post.contentComponent" />
            </article>

            <!-- Section: CTA kartu terkait -->
            <aside v-if="relatedCard"
                class="mt-12 flex flex-col items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:gap-6">
                <img :src="relatedCard.img_logo" :alt="`Logo kartu ${relatedCard.name}`" loading="lazy" decoding="async"
                    class="h-14 w-auto object-contain" />
                <div class="flex-1 text-center sm:text-left">
                    <p class="text-xs font-semibold uppercase tracking-wide text-primary/70">Kartu di artikel ini</p>
                    <p class="mt-1 text-base md:text-lg font-bold text-slate-800">{{ relatedCard.name }}</p>
                    <p class="mt-1 text-xs md:text-sm text-slate-500">
                        <span v-if="formattedPrice" class="font-semibold text-slate-700">{{ formattedPrice }}</span>
                        <span v-if="formattedPrice && relatedDeck?.rating" aria-hidden="true"> · </span>
                        <span v-if="relatedDeck?.rating">
                            ⭐ {{ relatedDeck.rating }} dari {{ relatedDeck.rating_count }} penilaian
                        </span>
                    </p>
                </div>
                <NuxtLink :href="relatedCard.href" class="shrink-0">
                    <Button type="primary" size="lg">
                        Lihat Kartunya
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                </NuxtLink>
            </aside>

            <div class="mt-10 text-center">
                <NuxtLink href="/blog" class="text-sm font-semibold text-primary hover:underline">
                    ← Kembali ke Blog
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// Tailwind typography tidak dipakai di project ini, jadi gaya artikel
// didefinisikan manual dan hanya berlaku untuk isi artikel.
.article-body {
    :deep(p) {
        @apply mt-4 text-sm md:text-base leading-7 text-slate-600 text-justify;
    }

    :deep(h2) {
        @apply mt-10 mb-2 text-lg md:text-2xl font-semibold tracking-tight text-slate-800;
    }

    :deep(blockquote) {
        @apply my-6 border-l-4 border-primary/40 bg-primary/5 py-3 pl-4 pr-3 text-sm md:text-base italic leading-7 text-slate-600 rounded-r;
    }

    :deep(em) {
        @apply italic;
    }
}
</style>
