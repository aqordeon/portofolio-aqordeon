import ProductDescriptionBadboy from "../../components/Product/ProductDescriptionBadboy.vue";
import ProductDescriptionDeep from "../../components/Product/ProductDescriptionDeep.vue";
import ProductDescriptionF99 from "../../components/Product/ProductDescriptionF99.vue";
import ProductDescriptionHangout from "../../components/Product/ProductDescriptionHangout.vue";
import ProductDescriptionLoveSparks from "../../components/Product/ProductDescriptionLoveSparks.vue";
import ProductDescriptionToT from "../../components/Product/ProductDescriptionToT.vue";
import ProductDescriptionToT2 from "../../components/Product/ProductDescriptionToT2.vue";
import { decks } from "../useProduct";

function getShopLinks(slug: string) {
    return decks.find(d => d.slug === slug)?.link_online_shop ?? {}
}

export const useDecksLP = {
    deep: {
        name: 'Deep',
        title: `Kartu Deep - 50 Pertanyaan Deep Talk untuk Pasangan dan Sahabat`,
        meta: {
            title: 'Kartu Deep - Deep Talk Game',
            description: 'Kartu Deep - 50 pertanyaan deep talk untuk saling mengenal lebih dalam. Cocok untuk pasangan & sahabat. Semi anti-air, bilingual ID/EN. Mulai ngobrol lebih bermakna!'
        },
        slug: 'deep',
        price: 43000,
        description: ``,
        descriptionComponent: ProductDescriptionDeep,
        href: '/cards/deep',
        img_logo: '/images/logo/deep_logo.png',
        images: [
            {
                src: "/images/cards/deep1-4x5.webp",
                alt: "Kemasan kartu Deep beserta contoh kartu pertanyaan - permainan deep talk untuk pasangan dan sahabat yang ingin saling mengenal lebih dalam"
            },
        ],
        link_olshop: getShopLinks('deep'),
        link_spotify: `https://open.spotify.com/embed/playlist/4t8jBno2EAVan6AIr3elty?utm_source=generator`,
        reviews: [
            {
                author: '3*****2',
                rating: 5,
                date: 'Jan 2026',
                text: 'Suka banget..bisa buat bahan obrolan tanpa mikir hehe.. ditunggu edisi selanjutnya',
            },
            {
                author: 's*****t',
                rating: 5,
                date: 'Jun 2026',
                text: 'Biar ga bosen dan yg diobrolin ada aja sama pasangan, temen, or keluarga.. thanxx',
            },
        ],
        //   public/images/reviews/deep/  (lihat README di folder itu)
        review_images: [
            // {
            //     src: '/images/reviews/deep/review-1.webp',
            //     alt: 'Screenshot ulasan pembeli kartu Deep di Shopee',
            // },
        ],
    },
    hangout: {
        name: 'Hangout',
        title: 'Kartu Hangout - Permainan Nongkrong untuk Obrolan Seru Bareng Teman',
        meta: {
            title: 'Kartu Hangout - Permainan Nongkrong',
            description: 'Kartu Hangout - game nongkrong seru dengan pertanyaan ringan tapi bikin ngakak. Cocok untuk kenalan baru sampai sahabat lama. Anti awkward silence! '
        },
        slug: 'hangout',
        price: 43000,
        description: ``,
        descriptionComponent: ProductDescriptionHangout,
        img_logo: '/images/logo/hangout_logo.png',
        href: '/cards/hangout',
        images: [
            {
                src: "/images/cards/hangout1-4x5.webp",
                alt: "Kemasan kartu Hangout berwarna oranye beserta contoh kartu pertanyaan - permainan nongkrong seru untuk teman dan sahabat"
            },
            // { src: "https://lh3.googleusercontent.com/rd-d/ALs6j_GN2mt1tqZHyoMin8aZ3Xc1CxKgpS_xbfsQ3urG0b0jHFLynNY2uKxlmyv2II9xWMbieeselBrO3dqVYES2eC1uLLDm_YuazPvsyxqYUWx1lnKpKO2FkDgpuQTpyJeD393sToiMzyFcRCY0Zotw0IRw2GynD2-PppS84nIokRYpR-35leCIYbysEzg8uKKTgvnqie-4PzsM8LcZV0PlRUsxUTiCDPChPnv_gPW7MpFXPi8xkqNt-eU6MXQAUgiLDTn8LiIClvlcjg97oL2_oCjdCLmOWtShOd-D6TmcyT38SaHwPacuY3qpfLirbDLxewfvd9WBCWD6sRE8CWF9SBh62geMkdKIwW6jQS4-JK8Z7fEHOD9hIfXaYOzEIQo5-XEzVfYwoxGrpXCSI5XjNSrAzH0gKUEmLCN4fG4PhldQ60OWCvouGgZPzKZ9zqlhvVHyG1LEexWHw999SDAD7r2ehKtDDeSiVCHY2IzcbhFTQR8V46E0AbTwEwonTAWNrZX7CLk-Evk_ZqJMgyDdPBYyDaVEH3y7FwHAJbhVTjl_44LwMvoJpQUeRSq7fSJGoWo4VXbVygKqfgQM_1dDMJEvZOWl5UTVQiUOgnp_FFk2wSzs8WZp1SffjQ9GR990cRGS7u0-42GE8HFtoMEqanDMrDe4nmR5Qx1IpUeXslvoTp7S1nH7-I54Goxoypcc0lq1Z6kbptz07y1KxSTUuYNqRI7pMqpVALsWF1_ao0U4JT7nIxkxgglL5YFPacqFP7-gqsQp0PIQKvY98V7hhC3aVnRdqWbG1nzkBeTdTyWR1WfNWRUZB-Wd22VSVDrmycBV3XS4bxch3CQtuxLDrfAa4ZbI60eU_Ht_MoGNNjfZ765sndK4sTNme-Unu_cevIfxF337mnt7iMo0U6NRzdCE0t6sA-XWk6hWjAjDIgXNxbprgFUQX9EgfkBP43wPNkIeu6cYguvJwdd2LuiBrDb-vpcKouYVhauv65RiApcZdR_g-iZ7VvAfQg54WCMf83CkkPFHYcsw9mU8CffLN5n0EiDWFvTV7E95PqLOtVXBjvDq2ufM1hSwegQP8r7WFHYTuA1uTpeZwucMr8tFa9PaSZZix4st3kzrEp6ZrXGl4QXgimE84e6cWgrWLku4uXfdUlGDwTTKR_RqjUOCyOI4c64H0i8IR52isqd7d8wcUgZ1FoDsTOSYTOkH79_L16O24Kkym0XuOEUnZAMvmvcATn3_iXl8=w1920-h878",
            // alt: "Review Kartu Hangout"
            // },
        ],
        link_olshop: getShopLinks('hangout'),
        link_spotify: `https://open.spotify.com/embed/playlist/1wGrAVGey3vEl9ZTBTXMh3?utm_source=generator`
    },
    tot: {
        name: 'This or That',
        title: `Kartu This or That - Game Pilihan Seru untuk Mengenal Teman dan Pasangan`,
        meta: {
            title: 'Kartu This or That - Game Pilihan Seru',
            description: 'Kartu This or That - game pilihan seru untuk mengenal karakter teman & pasangan. Tanpa dare, tanpa awkward. Cocok untuk nongkrong & first date! '
        },
        slug: 'tot',
        price: 40000,
        description: ``,
        descriptionComponent: ProductDescriptionToT,
        img_logo: '/images/logo/tot_logo.png',
        href: '/cards/tot',
        images: [
            {
                src: "/images/cards/tot1-4x5.webp",
                alt: "Kemasan kartu This or That beserta contoh kartu pilihan - game pertanyaan seru untuk mengenal karakter teman dan pasangan saat nongkrong"
            },
        ],
        link_olshop: getShopLinks('tot'),
        link_spotify: null,
    },
    family99: {
        name: `Family 99`,
        title: `Kartu Family 99 - Game Ice Breaking Seru untuk Gathering dan Kumpul Keluarga`,
        meta: {
            title: 'Kartu Family 99 - Game Ice Breaking Seru',
            description: 'Kartu Family 99 - ice breaking seru untuk kumpul keluarga & gathering. 99 pertanyaan yang bikin suasana cair dan semua generasi bisa ikut main! '
        },
        slug: `family99`,
        price: 44000,
        description: ``,
        descriptionComponent: ProductDescriptionF99,
        img_logo: '/images/logo/family99_logo.png',
        href: '/cards/family99',
        images: [
            {
                src: "/images/cards/family991-4x5.webp",
                alt: "Kemasan kartu Family 99 beserta contoh kartu pertanyaan - permainan ice breaking seru untuk kumpul keluarga dan gathering semua generasi"
            },
        ],
        link_olshop: getShopLinks('family99'),
        link_spotify: `https://open.spotify.com/embed/playlist/4ymDR3ICyNFqVyko16ZRqa?utm_source=generator`,
    },
    badboy: {
        name: `Badboy`,
        title: `Kartu Badboy - 50 Pertanyaan Berani untuk Nongkrong Bareng Sirkel Cowok`,
        meta: {
            title: 'Kartu Badboy - Permainan Kartu Cowok',
            description: 'Kartu Badboy - 50 pertanyaan berani khusus buat sirkel cowok. Nongkrong jadi lebih jujur & seru. Tanpa dare, langsung ke intinya. Berani coba? '
        },
        slug: `badboy`,
        price: 40000,
        description: null,
        descriptionComponent: ProductDescriptionBadboy,
        img_logo: '/images/logo/badboy_logo.png',
        href: '/cards/badboy',
        images: [
            {
                src: "/images/cards/badboy1-4x5.webp",
                alt: "Kemasan kartu Badboy beserta contoh kartu pertanyaan - permainan nongkrong jujur dan berani khusus untuk sirkel cowok"
            },
        ],
        link_olshop: getShopLinks('badboy'),
        link_spotify: "https://open.spotify.com/embed/playlist/2JPq7VVKrJVEbnj1tNH2ha?utm_source=generator",
    },
    "tot-2": {
        name: `This or That 2`,
        title: `Kartu This or That 2 - Versi Lebih Seru dengan Konteks untuk Diskusi Lebih Dalam`,
        meta: {
            title: 'Kartu This or That 2 - Game Pilihan Seru',
            description: 'Kartu This or That 2 - versi upgrade dengan konteks di setiap kartu. Diskusi lebih seru & dalam. Cocok untuk yang sudah main versi pertama! '
        },
        slug: `tot-2`,
        price: 46000,
        description: null,
        descriptionComponent: ProductDescriptionToT2,
        img_logo: '/images/logo/tot2_logo.png',
        href: '/cards/tot-2',
        images: [
            {
                src: "/images/cards/tot21-4x5.webp",
                alt: "Kemasan kartu This or That 2 beserta contoh kartu pilihan - versi upgrade dengan konteks lebih dalam untuk diskusi seru bersama teman"
            },
        ],
        link_olshop: getShopLinks('tot-2'),
        link_spotify: null,
    },
    "love_sparks": {
        name: `Love Sparks`,
        title: `Kartu Love Sparks - Permainan Kartu Pasangan untuk Mempererat Koneksi Emosional`,
        meta: {
            title: 'Kartu Love Sparks - Permainan Kartu Pasangan',
            description: 'Kartu Love Sparks - permainan kartu untuk pasangan yang ingin lebih terhubung. Perkuat koneksi emosional lewat pertanyaan yang hangat & intim. '
        },
        slug: `love_sparks`,
        price: 43000,
        description: null,
        descriptionComponent: ProductDescriptionLoveSparks,
        img_logo: '/images/logo/love_sparks.png',
        href: '/cards/love_sparks',
        images: [
            {
                src: "/images/cards/love_sparks_main.webp",
                alt: "Kemasan kartu Love Sparks beserta contoh kartu pertanyaan - permainan untuk pasangan yang ingin mempererat koneksi emosional"
            },
            {
                src: "/images/cards/love_sparks_1.jpg",
                alt: "Tiga sisi kartu Love Sparks: depan berisi pertanyaan bilingual, belakang motif hati pink, dan kartu panduan cara bermain"
            },
            {
                src: "/images/cards/love_sparks_2.jpg",
                alt: "Playlist Spotify khusus Love Sparks di smartphone untuk menemani sesi bermain kartu pasangan dengan suasana musik yang pas"
            },
            {
                src: "/images/cards/love_sparks_3.jpg",
                alt: "Kemasan kartu Love Sparks berwarna pink dengan contoh kartu pertanyaan – cocok untuk pasangan yang ingin mempererat koneksi emosional"
            },
        ],
        link_olshop: getShopLinks('love_sparks'),
        link_spotify: "https://open.spotify.com/embed/playlist/29gNjlJTZcsbLTw8PF78Ad?utm_source=generator",
    },
    // xxx: {
    //     name: xxx,
    //     title: xxx,
    //     slug: xxx,
    //     description: xxx,
    //     images: xxx,
    //     link_olshop: xxx, 
    //     link_spotify: xxx,
    // },
}