<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import Wrong from '~/assets/audio/wrong.mp3'
import Timeout from '~/assets/audio/timeout.mp3'
import Success from '~/assets/audio/success.mp3'
import Horn from '~/assets/audio/horn.mp3'
import Tick from '~/assets/audio/tick.mp3'
import IntenseTick from '~/assets/audio/intense_tick.mp3'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'

const route = useRoute()
const param_timer = ref(route.query.timer || 7)
const param_warning = ref(route.query.warning || 3)
console.log(param_timer.value, param_warning.value)

definePageMeta({
    layout: ''
})

const countdown = ref(param_timer.value)
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
        if (countdown.value == param_warning.value) {
            setTimeout(() => {
                audio_intense_tick.currentTime = 0;
                audio_intense_tick.play()
            }, 140)
        }

        if (countdown.value >= 1) {
            audio_tick.currentTime = 0;
            audio_tick.play()
        } else {
            console.log('23232')
            clearInterval(interval)
            audio_intense_tick.pause()
            interval = undefined
            audio_timeout.play()
        }
    }, 1000)
}

const resetCountdown = () => {
    countdown.value = param_timer.value
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
        } else if (event.key === 'w') {
            _salah.value.style.opacity = 1
            setTimeout(() => {
                _salah.value.style.opacity = 0
            }, 5000)
            audio_wrong.play()
        } else if (event.key === 'c') {
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
        } else if (event.key === 'z') {
            isModalTimer.value = true
        } else if (event.key === 'x') {
            isModalWarning.value = true
        }
    })
})

onUnmounted(() => {
    clearInterval(interval)
    window.removeEventListener('keydown', () => {})
})

const listHotkeys = [
    {
        key: 'W',
        label: 'Wrong!'
    },
    {
        key: 'C',
        label: 'Correct'
    },
    {
        key: 'Space',
        label: 'Start Countdown'
    },
    {
        key: 'R',
        label: 'Reset Countdown'
    },
    {
        
    },
    {
        key: 'T',
        label: 'Horn Wrong🔊',
        bg_color: '#a7f3d0'
    },
    {
        key: 'H',
        label: 'Horn Party🥳',
        bg_color: '#a7f3d0'
    },
    {
        key: 'Z',
        label: 'Change countdown',
        bg_color: '#67e8f9'
    },
    {
        key: 'X',
        label: 'Change warning',
        bg_color: '#67e8f9'
    }
]

const isModalTimer = ref(false)
const isModalWarning = ref(false)
</script>

<template>
    <div>
        <div class="bg-indigo-100 -z-10 text-center fixed top-0 right-0 h-screen w-screen flex justify-center items-center">
            <div class="relative">
                <transition name="fade">
                    <p class="font-light inline text-[800px] tabular-nums">{{ countdown }}</p>
                </transition>
            </div>
        </div>

        <div class="w-full max-w-3xl xqwezxc absolute left-1/2 bottom-5 -translate-x-1/2 -translate-y-1/2 z-10">
            <!-- S - B - T - H - SPACE - R - ESC -->

            <!-- Hotkey: Wrong -->
            <div class="flex gap-x-6 gap-y-3 flex-wrap justify-around ">
                <template v-for="(hotkey, indexHtky) in listHotkeys" :key="indexHtky">
                    <div v-if="hotkey.key" class="flex items-center gap-x-2">
                        <div class="bg-indigo-200 border border-indigo-500 rounded w-fit px-2"
                            :style="{
                                backgroundColor: hotkey.bg_color,
                            }"
                        >
                            {{ hotkey.key }}
                        </div>
                        <div class="font-bold">
                            {{ hotkey.label }}
                        </div>
                    </div>

                    <div v-else class="w-full border-t border-indigo-700 h-1">
                        
                    </div>
                </template>
            </div>
        </div>

        <div ref="_salah" style="opacity: 0" class="text-[200px] fixed top-0 right-0 h-screen w-screen flex flex-col justify-center items-center z-50 bg-red-300 text-red-600 transition-all">
            <div class="-translate-y-1/4">
                <div class="font-bold text-center">WRONG!</div>
                <div class="text-center">🫵😂</div>
            </div>
        </div>

        <div ref="_benar" style="opacity: 0" class="text-[200px] fixed top-0 right-0 h-screen w-screen flex flex-col justify-center items-center z-50 bg-green-300 text-green-600 transition-all">
            <div class="-translate-y-1/4">
                <div class="font-bold text-center">NOICE!</div>
                <div class="text-center">😎👍</div>
            </div>
        </div>

        <Dialog :open="isModalTimer" @close="() => isModalTimer = false" class="relative z-50">
            <!-- The backdrop, rendered as a fixed sibling to the panel container -->
            <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

            <!-- Full-screen container to center the panel -->
            <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
                <!-- The actual dialog panel -->
                <DialogPanel class="w-full max-w-sm rounded bg-white py-8 px-6">
                    <DialogTitle class="text-center font-bold text-2xl">Set timer</DialogTitle>
                    <DialogDescription class="text-center">
                        Seconds when to start the countdown
                    </DialogDescription>

                    <div>
                        <input class="sr-only" />

                        <input
                            type="number"
                            v-model="param_timer"
                            @input="() => resetCountdown()"
                            class="border border-gray-300 rounded px-3 py-2 w-full"
                            :autofocus="false"
                            @keydown.enter="() => isModalTimer = false"
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>

        <Dialog :open="isModalWarning" @close="() => isModalWarning = false" class="relative z-50">
            <!-- The backdrop, rendered as a fixed sibling to the panel container -->
            <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

            <!-- Full-screen container to center the panel -->
            <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
                <!-- The actual dialog panel -->
                <DialogPanel class="w-full max-w-sm rounded bg-white py-8 px-6">
                    <DialogTitle class="text-center font-bold text-2xl">Set warning</DialogTitle>
                    <DialogDescription class="text-center">
                        Seconds when to warning sound played
                    </DialogDescription>

                    <div>
                        <input class="sr-only" />

                        <input
                            type="number"
                            v-model="param_warning"
                            class="border border-gray-300 rounded px-3 py-2 w-full"
                            :autofocus="false"
                            @keydown.enter="() => isModalWarning = false"
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    </div>
</template>