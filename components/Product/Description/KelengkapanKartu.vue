<script setup lang='ts'>
const props = defineProps<{
    addStart: string[]
}>()
</script>

<template>
    <div>
        <p>Kelengkapan produk:</p>
        <ul class="list-inside list-disc">
            <template v-for="item in props.addStart" :key="item">
                <li>{{ item }}</li>
            </template>
            <li>1 kartu panduan bermain</li>
            <li>Box tempat kartu</li>
        </ul>
    </div>
</template>