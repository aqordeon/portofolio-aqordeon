<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KeutamaanKartu from './Description/KeutamaanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">

        <p>
            Kartu Family 99: Edisi I, berisi kuis-kuis
                di luar nurul, yang setiap kuisnya berisi 5 jawaban. Setiap jawaban memiliki skor 1-40 yang didasarkan dari penilaian surveyor.
                Untuk menang dalam permainan ini, pemain harus menjawab setiap kuisnya dengan tepat dan tebak jawaban dengan skor tertinggi. Permainan kartu Family99 terinspirasi dari
                acara TV Family 100.
        </p>
        <p class="mt-4">
            Tujuan dari kartu Family99 ini adalah untuk mengisi waktu luang bersama para pemain dengan cara
            yang seru dan menantang.
        </p>

        <p class="mt-4">
            Setiap kuis dirancang untuk menguji pengetahuan umum dan insting pemain dalam
            menebak jawaban yang memiliki skor paling tinggi. Cocok dimainkan sebagai games hiburan di segala acara seperti reuni sekolah, lomba 17 Agustusan, dan bahkan ketika kumpul keluarga di hari raya Idul Fitri, Imlek, Natal, dll.
        </p>

        <KeutamaanKartu class="mt-4" />

        <p class="mt-4">Jumlah pemain: 2 orang/lebih</p>

        <KelengkapanKartu class="mt-4" :addStart="['50 kartu kuis, tiap kuis mempunyai 5 jawaban']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <p class="mt-4">#TruthCard #TruthOrDare #CardGames #BoardGames</p>
    </div>
</template>