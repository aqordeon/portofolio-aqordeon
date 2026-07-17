<script setup lang='ts'>
import BlogFigure from './BlogFigure.vue'
import { blogImages } from '../../composables/blog/posts'

const images = blogImages['main-this-or-that-2-bareng-teman']
</script>

<template>
    <div>
        <p>
            Malam itu rencananya cuma nongkrong biasa. Sudah kumpul, sudah pesan minum, dan seperti
            biasa obrolannya mentok di kabar kerjaan sama rencana yang nggak jadi-jadi. Jadi kami
            keluarkan <NuxtLink href="/cards/tot-2" class="font-semibold text-primary hover:underline">This or That 2</NuxtLink>
            dari tas, dan sisa malamnya berubah total.
        </p>

        <BlogFigure v-bind="images.suasana" priority />

        <h2>Bedanya sama This or That yang pertama</h2>
        <p>
            Di versi pertama, kamu cuma disodori dua pilihan. Seru, tapi jawabannya sering selesai
            dalam dua detik. Di This or That 2, setiap pertanyaan datang bersama konteksnya, dan
            justru konteks itu yang bikin orang mikir dulu sebelum menjawab.
        </p>
        <p>
            Contohnya salah satu kartu yang malam itu bikin meja kami ribut paling lama:
        </p>
        <blockquote>
            Kekuatan super hanya 1 jam per hari: lebih suka menggandakan diri maksimal 5 kembaran
            (seperti Naruto) atau mengendalikan air tapi tidak bisa menciptakan air baru
            (seperti Avatar)?
        </blockquote>
        <p>
            Perhatikan bagian "hanya 1 jam per hari" dan "tapi tidak bisa menciptakan air baru".
            Tanpa dua batasan itu, pertanyaannya gampang. Dengan batasan itu, tiba-tiba semua orang
            punya argumen, dan ada saja yang ngotot sampai lima menit kemudian.
        </p>

        <BlogFigure v-bind="images.kartu" />

        <h2>Yang bikin obrolannya jalan sendiri</h2>
        <p>
            Hal menarik dari kartu jenis ini: yang seru bukan jawabannya, tapi alasannya. Pertanyaan
            pilihan bikin semua orang otomatis punya posisi, dan begitu ada yang mulai membela
            pilihannya, sisanya ikut nimbrung tanpa perlu dipancing lagi.
        </p>
        <p>
            Ada juga efek samping yang nggak kami duga. Kami sudah kenal bertahun-tahun, tapi malam
            itu tetap ada hal baru yang ketahuan cuma gara-gara satu kartu. Ternyata masih banyak
            yang belum pernah kami tanyakan satu sama lain.
        </p>

        <BlogFigure v-bind="images.diskusi" />

        <h2>Enaknya dimainkan berapa orang?</h2>
        <p>
            This or That 2 dirancang untuk 2 sampai 6 orang. Dari pengalaman kami, di angka 4-5 orang
            terasa paling pas: cukup ramai untuk debat, tapi masih kebagian giliran semua. Kalau
            cuma berdua juga tetap jalan, obrolannya jadi lebih personal dan panjang per kartunya.
        </p>
        <p>
            Isinya 50 kartu pertanyaan, semuanya ditulis dalam dua bahasa, Indonesia dan Inggris.
            Aturannya nggak ribet, tinggal ambil kartu paling atas dan mulai. Nggak ada persiapan,
            nggak ada skor, nggak ada yang perlu dihafal.
        </p>

        <h2>Cocok dipakai kapan</h2>
        <p>
            Selain nongkrong biasa, kartu ini kepakai banget buat momen yang biasanya canggung di
            awal: <em>first date</em>, ice breaking, atau kumpul yang isinya nggak semua orang saling
            kenal. Karena pertanyaannya ringan tapi ada isinya, orang baru pun gampang ikut ngobrol
            tanpa merasa diinterogasi.
        </p>
        <p>
            Dan kalau ada pertanyaan yang dirasa kurang nyaman, ya sudah, lewat saja. Nggak ada yang
            maksa. Kartunya alat bantu, bukan aturan.
        </p>

        <BlogFigure v-bind="images.penutup" />

        <h2>Penutup</h2>
        <p>
            Malam itu berakhir jauh lebih lama dari rencana awal, dan nggak ada satu pun dari kami
            yang sempat buka HP. Buat kami itu ukuran keberhasilan yang paling jujur.
        </p>
        <p>
            Kalau kamu sudah pernah main This or That yang pertama, versi kedua ini bakal terasa
            seperti naik level. Kalau belum pernah sama sekali, mulai dari sini juga nggak masalah.
        </p>
    </div>
</template>
