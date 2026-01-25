<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KeutamaanKartu from './Description/KeutamaanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">

        <p>
            Kartu Hangout: Edition I, berisi topik-topik ringan, tidak terlalu personal, dan tidak membutuhkan tenaga
            untuk berpikir, karena ya memang random aja..
        </p>

        <p class="mt-4">
            Tujuan dari kartu Hangout ini adalah untuk mengisi obrolan di tongkrongan dengan topik-topik random yang
            akan membuat suasana tongkrongan jadi makin seru. Contoh topik dari kartu ini adalah pengalaman, imajinasi, kehidupan, dll.
        </p>

        <p class="mt-4">
            Karena topiknya ringan dan random, kartu Hangout cocok dimainkan dengan teman biasa, teman yang baru
            kenal, bahkan stranger random. Topik dalam kartu Hangout ini bisa juga dijadikan topik obrolan di dating app agar bonding jadi lebih seru.
        </p>

        <KeutamaanKartu class="mt-4" />

        <p class="mt-4">Jumlah pemain: 2-6 Orang</p>

        <KelengkapanKartu class="mt-4" :addStart="['50 kartu pertanyaan topik ringan dan random']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <p class="mt-4"> #TruthCard #TruthOrDare #CardGames #BoardGames </p>
    </div>
</template>