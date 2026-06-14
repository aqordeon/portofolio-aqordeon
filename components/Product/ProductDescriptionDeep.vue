<script setup lang='ts'>
import GreetingPenutup from './Description/GreetingPenutup.vue';
import KelengkapanKartu from './Description/KelengkapanKartu.vue';
import KualitasKartu from './Description/KualitasKartu.vue';


</script>

<template>
    <div class="text-justify">
        <p>
            Kartu DEEP: Edition I, berisi topik-topik deep talk, tujuannya adalah untuk mengenal antar pemain lebih
            dalam yang bahkan belum pernah dibahas sebelumnya. Contoh topik dari kartu ini adalah masa lalu, masa
            depan, opini/pendapat, imajinasi, kehidupan, dll.
        </p>
        
        <p class="mt-4">
            Cocok dimainkan dengan sahabat dekat, pasangan/crush/calon pasangan, maupun dengan saudara sedarah.<br> Bentuk kartu sangat
            minimalis, dapat dibawa kemana saja dan dapat dimainkan kapan saja jika diperlukan.<br> Desain sangat menarik
            dan menggambarkan isi kartu.
        </p>

        
        <div class="mt-4">
            <p class="font-bold">Momen yang pas untuk deeptalk:</p>
            <ul class="list-inside list-disc">
                <li>Kemah malam (deeptalk di depan api unggun).</li>
                <li>Night drive sambil ngobrol intim.</li>
                <li>Late night conversations (pillowtalk, sleepcall).</li>
                <li>Ngobrol santai di cafe (sambil ngopi, dll).</li>
            </ul>
        </div>

        <p class="mt-4"><span class="font-bold">Jumlah pemain</span>: 2-6 Orang</p>
        
        <KelengkapanKartu class="mt-4" :addStart="['50 kartu pertanyaan topik deep talk']" />
        <KualitasKartu class="mt-4" />
        <GreetingPenutup class="mt-4" />

        <!-- <p class="mt-4"> #TruthCard #TruthOrDare #CardGames #BoardGames </p> -->
    </div>
</template>