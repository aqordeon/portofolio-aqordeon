<script setup lang="ts">
import { useUseLogo } from '../../../composables/useLogo';


const onClickSpotify = () => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'spotify_click',
        });
    }
    console.log('Spotify clicked');
}
</script>

<template>
    <div class="relative isolate overflow-hidden bg-white">
        <div class="px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    Mainkan Heartline diiringi musik
                </h2>
                <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8">
                    Tambah keseruan permainan dengan mainkan musik pilihan di Spotify.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a @click="() => onClickSpotify()" href="https://open.spotify.com/playlist/29gNjlJTZcsbLTw8PF78Ad?si=8dTtYc4VS0yM_xBmloH0_A"
                        target="_blank" rel="noopener noreferrer"
                        class="flex items-center gap-x-2 rounded-md bg-[#1ed760] text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        <span class="text-xl" v-html="useUseLogo('spotify')"></span>
                        Heartline 911
                    </a>
                </div>
            </div>
        </div>
        <svg viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
            <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
            </defs>
        </svg>
    </div>
</template>
