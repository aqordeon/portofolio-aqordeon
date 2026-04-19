<script setup lang="ts">
import { decks } from '~/composables/useProduct'

definePageMeta({ layout: false })

useHead({
    title: 'Toko Tangan Kanan – Belanja Sekarang',
    meta: [
        { name: 'description', content: 'Temukan semua varian kartu Toko Tangan Kanan di marketplace favoritmu.' },
        { property: 'og:title', content: 'Toko Tangan Kanan – Belanja Sekarang' },
    ],
})

const platforms = {
    shopee: {
        label: 'Shopee',
        bg: '#fff',
        color: '#EE4D2D',
        icon: '/images/logo/shopee.webp',
    },
    tiktokshop: {
        label: 'TikTok Shop',
        bg: '#fff',
        color: '#000000',
        icon: '/images/logo/tiktokshop.webp',
    },
    tokopedia: {
        label: 'Tokopedia',
        bg: '#fff',
        color: '#03AC0E',
        icon: '/images/logo/tokopedia.webp',
    },
    lazada: {
        label: 'Lazada',
        bg: '#fff',
        color: '#0F146D',
        icon: '/images/logo/lazada.webp',
    },
} as const

type PlatformKey = keyof typeof platforms

const sorted = ref(false)
const decksWithLinks = computed(() => {
    const base = decks.filter(d => d.link_online_shop)
    return sorted.value ? [...base].sort((a, b) => a.title.localeCompare(b.title)) : base
})

const { trackClick } = useTrackClick()

function getLinks(deck: typeof decks[number]) {
    if (!deck.link_online_shop) return []
    return (Object.keys(deck.link_online_shop) as PlatformKey[]).map(key => ({
        key,
        url: (deck.link_online_shop as Record<string, string>)[key],
        ...platforms[key],
    }))
}
</script>

<template>
    <div class="min-h-dvh bg-[#090e14] relative overflow-x-hidden font-sans">
        <!-- Ambient background blobs -->
        <div class="blob blob-1" aria-hidden="true" />
        <div class="blob blob-2" aria-hidden="true" />
        <div class="blob blob-3" aria-hidden="true" />

        <div class="relative z-[1] max-w-[520px] mx-auto px-5 pt-10 pb-12 flex flex-col gap-8">
            <!-- Back to homepage -->
            <NuxtLink href="/" class="self-start inline-flex items-center gap-1.5 text-slate-400 text-sm font-medium no-underline hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Homepage
            </NuxtLink>

            <!-- Header -->
            <header class="flex flex-col items-center gap-3 text-center animate-[fadeDown_0.6s_ease_both]">
                <div class="w-[88px] h-[88px] rounded-full p-[3px] flex items-center justify-center shadow-[0_0_30px_rgba(0,137,137,0.4)] cbg-[linear-gradient(135deg,#008989,#7f00ff,#ff6b6b)]">
                    <img src="/ttk/ttk-white-logo.png" alt="Toko Tangan Kanan Logo"
                         class="xw-20 xh-20 xrounded-full object-contain cbg-[#111]" />
                </div>
                <h1 class="text-2xl font-extrabold text-white tracking-tight leading-tight">Toko Tangan Kanan</h1>
                <p class="text-sm text-slate-400 max-w-xs leading-relaxed">Kartu seru buat kalian yang pengen obrolan lebih bermakna ✨</p>
            </header>

            <!-- Sort toggle -->
            <div class="flex justify-end">
                <button
                    @click="sorted = !sorted"
                    class="inline-flex items-center gap-1.5 text-[0.76rem] font-semibold px-3 py-1.5 rounded-full border transition-all duration-150"
                    :class="sorted ? 'bg-[#008989]/20 border-[#008989]/50 text-[#00c9c9]' : 'bg-white/[0.04] border-white/[0.1] text-slate-400 hover:text-slate-200 hover:border-white/20'"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9M3 12h5m13 0-4 4m0 0-4-4m4 4V8" /></svg>
                    Urutkan A-Z
                </button>
            </div>

            <!-- Product Cards -->
            <main class="flex flex-col gap-4">
                <div
                    v-for="(deck, i) in decksWithLinks"
                    :key="deck.slug"
                    class="bg-white/[0.04] border border-white/[0.08] rounded-[18px] backdrop-blur-md p-4 relative overflow-hidden transition-all duration-75 animate-[fadeUp_0.5s_ease_both] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,137,137,0.15)] hover:border-[rgba(0,137,137,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-[18px] before:bg-[linear-gradient(135deg,rgba(0,137,137,0.06),transparent_60%)] before:pointer-events-none"
                    :style="{ animationDelay: `${i * 80}ms` }"
                >
                    <!-- Top seller badge -->
                    <span v-if="deck.is_topseller"
                          class="topseller-badge absolute top-2.5 right-3 text-[0.7rem] font-bold text-white px-2.5 py-[3px] rounded-full tracking-wide">
                        🔥 Best Seller
                    </span>

                    <div class="flex gap-4 items-start">
                        <!-- Product image -->
                        <div class="flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                            <img :src="deck.imageSrc" :alt="deck.imageAlt"
                                 class="w-full h-full object-cover block"
                                 loading="lazy" />
                        </div>

                        <!-- Product info + links -->
                        <div class="flex-1 min-w-0 flex flex-col gap-1.5">
                            <div class="flex items-start justify-between gap-2 pr-16">
                                <h2 class="text-base font-bold text-slate-100 leading-tight">{{ deck.title }}</h2>
                            </div>
                            <div class="flex flex-wrap gap-1">
                                <span v-for="tag in deck.tags" :key="tag"
                                      class="text-[0.68rem] text-slate-500 font-medium">#{{ tag }}</span>
                            </div>
                            <div class="flex flex-wrap gap-1.5 mt-1.5">
                                <a
                                    v-for="link in getLinks(deck)"
                                    :key="link.key"
                                    :href="link.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 py-2 pr-3.5 pl-2 rounded-full no-underline text-[0.72rem] font-semibold text-white opacity-[0.92] transition-all duration-75 whitespace-nowrap hover:opacity-100 hover:-translate-y-px hover:scale-[1.04] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                                    :style="{
                                        'background-color': link.bg,
                                        color: link.color,
                                    }"
                                    @click="trackClick(deck.slug, link.key, 'links')"
                                >
                                    <img v-if="link.icon" :src="link.icon" :alt="link.label"
                                         class="w-4 h-4 object-contain rounded-[3px] flex-shrink-0" />
                                    <span v-else class="text-sm leading-none">🛒</span>
                                    <span class="leading-none">{{ link.label }}</span>
                                </a>
                            </div>
                            
                            <div class="flex justify-end mt-2">
                                <NuxtLink :href="`/cards/${deck.slug}`"
                                    class="flex-shrink-0 text-[0.68rem] font-semibold text-[#008989] no-underline hover:text-[#00c9c9] transition-colors whitespace-nowrap">
                                    Lihat detail →
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer class="text-center text-slate-500 text-[0.78rem] flex flex-col gap-1">
                <p>© 2025 Toko Tangan Kanan</p>
                <a href="https://www.instagram.com/tokotangankanan" target="_blank" rel="noopener noreferrer"
                   class="text-[#008989] no-underline font-semibold transition-colors hover:text-[#00bfbf]">
                    @tokotangankanan
                </a>
            </footer>
        </div>
    </div>
</template>

<style scoped>
/* ── Keyframes ─────────────────────────────────────────── */
@keyframes drift {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(30px, -20px) scale(1.08); }
    100% { transform: translate(-20px, 30px) scale(0.95); }
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

/* ── Blobs: radial-gradient + animation-direction not supported in Tailwind ── */
.blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.18;
    pointer-events: none;
    z-index: 0;
    animation: drift 18s ease-in-out infinite alternate;
}
.blob-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, #008989, #00c9c9);
    top: -150px; left: -150px;
    animation-duration: 20s;
}
.blob-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, #7f00ff, #e100ff);
    bottom: -100px; right: -100px;
    animation-duration: 16s;
    animation-direction: alternate-reverse;
}
.blob-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, #ff6b6b, #ffd93d);
    top: 50%; left: 60%;
    animation-duration: 24s;
}

/* ── Shimmer badge: needs background-size shorthand ─────── */
.topseller-badge {
    background: linear-gradient(90deg, #ff6b35, #f7c948, #ff6b35);
    background-size: 200% 100%;
    animation: shimmer 2.5s linear infinite;
}
</style>
