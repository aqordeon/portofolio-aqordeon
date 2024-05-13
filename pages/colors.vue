<template>
    <div class="max-w-5xl mx-auto">
        <!-- <pre>{{ colorData }}</pre> -->
        <div class="space-y-14">
            <!-- Teal -->
            <div v-for="(color, colorName) in useStockBackgroundColor" class="space-y-2">
                <div class="capitalize font-bold text-2xl text-neutral-600">
                    {{ colorName }}
                </div>
                <!-- Box: bg -->
                <div class="grid grid-cols-11">
                    <template v-for="(rgbColor, idxColor) in color" :key="rgbColor + idxColor">
                        <div v-if="currentlyCopied != rgbColor+idxColor" @click="() => (useCopyText(rgbHex(rgbColor), onCopyColor(rgbColor+idxColor)))"
                            class="flex flex-col items-center cursor-pointer p-1 rounded hover:shadow-xl hover:ring-1 hover:ring-gray-300">
                            <div class="text-gray-400">{{ numberTailwind[idxColor] }}</div>
                            <div :class="rgbColor" :style="{backgroundColor: rgbColor}" class="h-12 aspect-square rounded-md whitespace-nowrap shadow" />
                            <div class="font-medium mt-1 uppercase">
                                #{{ rgbHex(rgbColor) }}
                            </div>
                        </div>

                        <div v-else class="flex items-center justify-center text-gray-500">
                            Copied!
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <!-- {{ useStockBackgroundColor }} -->
    </div>
</template>

<script setup lang="ts">
import rgbHex from 'rgb-hex'

const numberTailwind = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]


const currentlyCopied = ref<string | null>(null)
const currentTimeout = ref(null)
const onCopyColor = (selectedColor: string) => {
    clearTimeout(currentTimeout.value)
    currentlyCopied.value = selectedColor
    currentTimeout.value = setTimeout(() => {
        currentlyCopied.value = null
    }, 1000)
}


</script>

<style lang="scss" scoped>

</style>