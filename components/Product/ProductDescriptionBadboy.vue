<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KeutamaanKartu from './Description/KeutamaanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">
        <p class="mt-4">
            BADBOY adalah permainan kartu yang berisi 50 pertanyaan berani seputar pengalaman pribadi, keputusan nakal, opini pribadi tentang suatu kenakalan, dan momen-momen guilty pleasure dalam hidup.
            Setiap pertanyaan mengajak pemain untuk cerita jujur dan buka sisi 'bad' mereka di dunia kerja, percintaan, keluarga, dan pertemanan.
        </p>

        <p class="mt-4">
            Kartu BADBOY ini sangat cocok dimainkan di beberapa situasi seru saat para laki-laki tangguh berkumpul. Momen seru seperti saat nginep bareng seperti di villa/kemah/rumah salah satu pemain, nongkrong bareng sirkel di coffeshop, atau kumpul reuni sekolah/kampus.
        </p>

        <p class="mt-4">
            Contoh pertanyaan yang ada di dalam kartu BADBOY:
        </p>
        <ul class="list-inside list-disc">
            <li>Apa kenakalan yang kamu lakukan hanya untuk caper (cari perhatian)?</li>
            <li>Sebutkan tanda-tanda bahwa seseorang itu badboy pemula:</li>
            <li>"Jangan ngaku BADBOY kalo lu gak dengerin band..."</li>
        </ul>

        <KeutamaanKartu class="mt-4" />

        <p class="mt-4">Jumlah pemain: minimal 2 orang (lebih rame lebih seru!)</p>

        <KelengkapanKartu class="mt-4" :addStart="['50 kartu untuk laki pemberani']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <p class="mt-4">#TruthCard #TruthOrDare #CardGames #BoardGames</p>
    </div>
</template>