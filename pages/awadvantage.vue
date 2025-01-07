<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import Wrong from '~/assets/audio/wrong.mp3'
import Timeout from '~/assets/audio/timeout.mp3'
import Success from '~/assets/audio/success.mp3'
import Horn from '~/assets/audio/horn.mp3'
import Tick from '~/assets/audio/tick.mp3'
import IntenseTick from '~/assets/audio/intense_tick.mp3'

const route = useRoute()
const param_timer = route.query.timer || 7
const param_warning = route.query.warning || 3
console.log(param_timer, param_warning)

const countdown = ref(param_timer)
let interval: number | undefined

const audio_wrong = new Audio(Wrong)
const audio_timeout = new Audio(Timeout)
const audio_success = new Audio(Success)
const audio_horn = new Audio(Horn)
const audio_tick = new Audio(Tick)
const audio_intense_tick = new Audio(IntenseTick)

// audio_wrong.volume = 0.8

const startCountdown = () => {
    if (interval) return
    interval = setInterval(() => {
        console.log(countdown.value)
        countdown.value--
        if (countdown.value == param_warning) {
            setTimeout(() => {
                audio_intense_tick.currentTime = 0;
                audio_intense_tick.play()
            }, 140)
        }

        if (countdown.value >= 1) {
            audio_tick.currentTime = 0;
            audio_tick.play()
        } else {
            clearInterval(interval)
            audio_intense_tick.pause()
            interval = undefined
            audio_timeout.play()
        }
    }, 1000)
}

const resetCountdown = () => {
    countdown.value = param_timer
    clearInterval(interval)
    interval = undefined
}

const _benar = ref()
const _salah = ref()

onMounted(() => {
    // startCountdown()
    window.addEventListener('keydown', (event) => {
        if (event.key === 'r' || event.key === 'Escape') {
            resetCountdown()
        } else if (event.key === 's') {
            _salah.value.style.opacity = 1
            setTimeout(() => {
                _salah.value.style.opacity = 0
            }, 5000)
            audio_wrong.play()
        } else if (event.key === 'b') {
            _benar.value.style.opacity = 1
            setTimeout(() => {
                _benar.value.style.opacity = 0
            }, 5000)
            audio_success.play()
        } else if (event.key === 't') {
            audio_timeout.currentTime = 0;
            audio_timeout.play()
        } else if (event.key === 'h') {
            audio_horn.currentTime = 0;
            audio_horn.play()
        } else if (event.key === ' ') {
            startCountdown()
        }
    })
})

onUnmounted(() => {
    clearInterval(interval)
    window.removeEventListener('keydown', () => {})
})
</script>

<template>
    <div>
        <div class="bg-indigo-100 text-center fixed top-0 right-0 h-screen w-screen flex justify-center items-center">
            <div class="relative">
                <transition name="fade">
                    <p class="font-light inline text-[800px] tabular-nums">{{ countdown }}</p>
                </transition>
            </div>
        </div>

        <div class="absolute left-1/2 bottom-12 -translate-x-1/2 -translate-y-1/2 z-10">
            S - B - T - H - SPACE - R - ESC
        </div>

        <div ref="_salah" style="opacity: 0" class="text-[200px] fixed top-0 right-0 h-screen w-screen flex flex-col justify-center items-center z-50 bg-red-300 text-red-600 transition-all">
            <div class="-translate-y-1/4">
                <div class="font-bold">SALAH!</div>
                <div class="text-center">🫵😂</div>
            </div>
        </div>

        <div ref="_benar" style="opacity: 0" class="text-[200px] fixed top-0 right-0 h-screen w-screen flex flex-col justify-center items-center z-50 bg-green-300 text-green-600 transition-all">
            <div class="-translate-y-1/4">
                <div class="font-bold text-center">MANTAP MABAR!</div>
                <div class="text-center">😎👍</div>
            </div>
        </div>
    </div>
</template>