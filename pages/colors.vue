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
                <div class="flex justify-between">
                    <div v-for="rgbColor in color" @click="() => useCopyText(rgbHex(rgbColor))" class="flex flex-col items-center cursor-pointer p-1 rounded hover:shadow-xl hover:ring-1 hover:ring-gray-300">
                        <div :class="rgbColor" :style="{backgroundColor: rgbColor}" class="h-12 aspect-square rounded-md whitespace-nowrap shadow" />
                        <div>
                            #{{ rgbHex(rgbColor) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ useStockBackgroundColor }} -->
    </div>
</template>

<script setup lang="ts">
import rgbHex from 'rgb-hex';
// const colorsName = [ 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', ]
// const colorData = {}

// colorsName.forEach(color => {
//     colorData[color] = []
//     colorData[color].push(`bg-${color}-50`)
//     for (let i = 1; i <= 9; i++) {
//         colorData[color].push(`bg-${color}-${i * 100}`);
//     }
//     colorData[color].push(`bg-${color}-950`)
// })

</script>

<style lang="scss" scoped>

</style>