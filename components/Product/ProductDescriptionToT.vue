<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KeutamaanKartu from './Description/KeutamaanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">

        <p class="mt-4">
            Kartu THIS or THAT berisi pilihan-pilihan random yang
                akan membuat pemain harus memilih salah satu dari dua pilihan. Tujuannya adalah untuk memancing diskusi
                ringan dan mengenal preferensi masing-masing pemain dengan cara yang menyenangkan.
        </p>
        
        <p class="mt-4">
            Kenapa kartu ini seru adalah karena semua pertanyaan tidak memiliki konteks spesifik, sehingga pemain harus menentukan konteksnya sendiri.
            Cocok dimainkan dengan teman, sahabat dekat, maupun keluarga untuk mengisi waktu luang atau sebagai ice breaker dalam suatu acara.
        </p>
        
        <KeutamaanKartu class="mt-4" />

        <p class="mt-4">Jumlah pemain: 2-6 Orang</p>

        <KelengkapanKartu class="mt-4" :addStart="['50 kartu pertanyaan (versi Indonesia dan English)']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <p class="mt-4">#TruthCard #TruthOrDare #CardGames #BoardGames</p>
    </div>
</template>