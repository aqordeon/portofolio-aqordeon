<script setup lang='ts'>
    
</script>

<template>
    <div>
		<LayoutsHeaderTTK />

        <main class="bg-white text-primary">
			<div class="w-full">
                <slot />
            </div>
		</main>
		
        <LayoutsFooterTTK />
    </div>
</template>

<style>
.container {
    @apply mx-auto
}
</style>