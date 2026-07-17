import type { Component } from 'vue'
import PostMainToT2BarengTeman from '../../components/Blog/PostMainToT2BarengTeman.vue'

export interface BlogImage {
    // Selama null, BlogFigure merender kotak placeholder memakai `alt` sebagai
    // deskripsi. Isi dengan path foto asli (mis. '/images/blog/tot-2/suasana.webp').
    src: string | null
    alt: string
    caption?: string
}

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    date: string
    dateLabel: string
    readingTime: string
    tags: string[]
    cover: BlogImage
    relatedCardSlug?: string
    contentComponent: Component
    meta: {
        title: string
        description: string
    }
}

// Foto per artikel dipisah dari body-nya supaya penggantian foto cukup di satu
// tempat: ganti `src`, dan placeholder di artikel otomatis hilang.
export const blogImages: Record<string, Record<string, BlogImage>> = {
    'main-this-or-that-2-bareng-teman': {
        suasana: {
            src: null,
            alt: 'Suasana teman-teman berkumpul di meja sambil memainkan kartu This or That 2',
            caption: 'Rencananya nongkrong sebentar, ujungnya kelamaan.',
        },
        kartu: {
            src: null,
            alt: 'Close-up kartu This or That 2 yang sedang dipegang, memperlihatkan pertanyaan beserta konteksnya',
            caption: 'Konteks di tiap kartu itu yang bikin jawabannya nggak bisa asal.',
        },
        diskusi: {
            src: null,
            alt: 'Teman-teman sedang berdebat dan tertawa saat membahas pilihan di kartu This or That 2',
            caption: 'Yang seru bukan jawabannya, tapi alasannya.',
        },
        penutup: {
            src: null,
            alt: 'Kartu This or That 2 tergeletak di meja di akhir sesi bermain bersama teman-teman',
            caption: 'Nggak ada yang sempat buka HP semalaman.',
        },
    },
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'main-this-or-that-2-bareng-teman',
        title: 'Main This or That 2 Bareng Teman: Nongkrong Biasa yang Jadi Kelamaan',
        excerpt: 'Kami keluarkan This or That 2 di tengah nongkrong yang obrolannya mulai mentok. Ternyata konteks di tiap kartu bikin semua orang punya argumen, dan malamnya berakhir jauh lebih lama dari rencana.',
        date: '2026-07-17',
        dateLabel: '17 Juli 2026',
        readingTime: '4 menit',
        tags: ['This or That 2', 'Nongkrong', 'Cerita Main'],
        cover: {
            src: null,
            alt: 'Teman-teman memainkan kartu This or That 2 saat nongkrong bersama',
        },
        relatedCardSlug: 'tot-2',
        contentComponent: PostMainToT2BarengTeman,
        meta: {
            title: 'Main This or That 2 Bareng Teman: Nongkrong Biasa yang Jadi Kelamaan',
            description: 'Cerita main kartu This or That 2 bareng teman: kenapa konteks di tiap pertanyaan bikin obrolan jalan sendiri, enaknya dimainkan berapa orang, dan cocok dipakai di momen apa.',
        },
    },
]

export const findBlogPost = (slug: string) => blogPosts.find(post => post.slug === slug)
