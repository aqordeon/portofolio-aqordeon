<script setup lang="ts">
const faqs = [
    {
        question: 'Apa itu Toko Tangan Kanan?',
        answer: 'Toko Tangan Kanan adalah toko yang menjual berbagai macam produk kartu permainan berkualitas tinggi, mulai dari kartu untuk nongkrong, kartu untuk pasangan, kartu untuk laki-laki, hingga kartu kuis untuk acara tertentu. Kami berkomitmen untuk hadir sebagai alat bantu membangun momen menyenangkan dan berkesan bagi semua kalangan.',
    },
    {
        question: 'Bagaimana cara membeli produk di Toko Tangan Kanan?',
        answer: 'Kami tersedia di beberapa platform e-commerce seperti Tokopedia, Shopee, Lazada, dan Tiktokshop. Anda dapat mencari "Toko Tangan Kanan" di platform tersebut untuk menemukan produk kami. Selain itu, Anda juga dapat mengikuti media sosial kami untuk mendapatkan informasi terbaru tentang produk dan penawaran khusus.',
    },
    {
        question: 'Kartu ini cocok untuk siapa?',
        answer: 'Cocok untuk siapa saja. Tersedia berbagai varian yang bisa dimainkan bersama teman, pasangan, keluarga, maupun orang baru.',
    },
    {
        question: 'Apakah ada aturan mainnya?',
        answer: 'Setiap varian dilengkapi dengan panduan bermain yang bisa dibaca sebelum mulai. Namun, cara bermain tetap fleksibel dan dapat disesuaikan dengan situasi serta gaya sesuai sirkel pemain',
    },
    {
        question: 'Setiap varian bedanya apa?',
        answer: 'Sejak jawaban ini dibuat, kami sudah memiliki 8 varian. Setiap varian punya tema dan tujuan yang berbeda. Ada yang ringan, ada yang berbobot, ada yang fun, jadi bisa dipilih sesuai mood atau momen.',
    },
    {
        question: 'Bahasa apa yang digunakan di dalam kartu?',
        answer: 'Setiap kartu menggunakan 2 bahasa sekaligus, yaitu bahasa Indonesia dan bahasa Inggris. Jadi bisa bermain sambil belajar bahasa juga.',
    },
    {
        question: 'Apakah ada pertanyaan yang terlalu sensitif?',
        answer: 'Tergantung variannya. Beberapa varian memang memiliki pertanyaan berbobot, tapi semua pertanyaan tetap dalam batas wajar dan selalu bisa dilewati kalau dirasa kurang nyaman.',
    },
    {
        question: 'Apakah kartunya tahan air?',
        answer: 'Ya, kualitas kartu kami tahan terhadap air namun dalam skala kecil seperti percikan, tidak sepenuhnya waterproof.',
    },
    {
        question: 'Apakah bisa custom pertanyaan sendiri?',
        answer: 'Untuk saat ini belum tersedia, tapi tidak menutup kemungkinan akan ada ke depannya.',
    },
    {
        question: 'Bagaimana kalau produk rusak saat diterima?',
        answer: 'Silakan hubungi kami dengan bukti foto atau video, nanti akan kami bantu prosesnya.',
    },
]

const openStates = ref<boolean[]>(faqs.map(() => false))

const allExpanded = computed(() => openStates.value.every(Boolean))

function toggleItem(index: number) {
    openStates.value[index] = !openStates.value[index]
}

function toggleAll() {
    const expand = !allExpanded.value
    openStates.value = faqs.map(() => expand)
}
</script>

<template>
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <button
                    @click="toggleAll"
                    class="shrink-0 self-start sm:self-center inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 transition-transform duration-300"
                        :class="allExpanded ? 'rotate-180' : 'rotate-0'"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {{ allExpanded ? 'Tutup Semua' : 'Buka Semua' }}
                </button>
            </div>

            <dl class="mt-12 divide-y divide-gray-200">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="py-1 pb-4 first:pt-0 last:pb-0"
                >
                    <dt>
                        <button
                            @click="toggleItem(index)"
                            class="pt-4 pb-2.5 flex w-full items-start justify-between text-left text-gray-900 focus:outline-none group"
                        >
                            <span class="text-base font-semibold leading-7 group-hover:text-primary transition-colors">
                                {{ faq.question }}
                            </span>
                            <span class="ml-6 flex h-7 shrink-0 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5 text-gray-400 transition-transform duration-300"
                                    :class="openStates[index] ? 'rotate-180' : 'rotate-0'"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    </dt>
                    <dd
                        class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="openStates[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
                    >
                        <p class="pr-12 text-base leading-7 text-gray-600">{{ faq.answer }}</p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>
te>