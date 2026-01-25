<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KeutamaanKartu from './Description/KeutamaanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">

        <p class="mt-4">
            <span class="font-bold">This or That 2</span> adalah versi terbaru dari permainan kartu This or That yang lebih seru dan menantang karena setiap pertanyaan hadir dengan konteks khusus. Tidak hanya sekadar memilih dua opsi, pemain kini harus mempertimbangkan situasi atau kondisi tertentu sebelum menentukan pilihan.
        </p>
        
        <p class="mt-4">
            Tujuan dari <span class="font-bold">This or That 2</span> adalah untuk memicu diskusi yang lebih mendalam dan menyenangkan di antara para pemain. Dengan konteks yang berbeda-beda, setiap pertanyaan menjadi lebih menarik dan dapat mengungkap preferensi serta pandangan unik dari setiap individu.
        </p>
        
        <p class="mt-4">
            Salah satu contoh pertanyaan dalam <span class="font-bold">This or That 2</span> adalah: Kekuatan super hanya 1 jam per hari: lebih suka menggandakan diri maksimal 5 kembaran (seperti Naruto) atau mengendalikan air tapi tidak bisa menciptakan air baru (seperti Avatar)?
        </p>

        


        
        <KeutamaanKartu class="mt-4" />

        <p class="mt-4">Jumlah pemain: 2-6 Orang</p>

        <KelengkapanKartu class="mt-4" :addStart="['50 kartu pertanyaan (versi Indonesia dan English)']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <p class="mt-4">#TruthCard #TruthOrDare #CardGames #BoardGames</p>
    </div>
</template>