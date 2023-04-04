<template>
	<div>
		<CommonsDebugComp v-if="isDebug" />
		<NavigationComp class="fixed z-30" />
		<main class="">
			<slot />
		</main>
		<!-- <Footer /> -->
	</div>
</template>

<script setup>
import NavigationComp from '../components/Navigation/NavigationComp.vue';

const route = useRoute()
const isDebug = route.query.debug === "1"

</script>
