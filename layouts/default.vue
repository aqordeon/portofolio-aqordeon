<script setup lang='ts'>
    
</script>

<template>
    <div>
		<LayoutsHeaderTTK />

        <main class="bg-white text-primary">
			<div class="w-full max-w-4xl mx-auto">
                <slot />
            </div>
		</main>
		
        <LayoutsFooterTTK />
    </div>
</template>