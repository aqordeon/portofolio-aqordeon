<template>
	<div>
		<CommonsDebugComp v-if="isDebug" />
		<NavigationBar class="fixed top-0 w-screen z-50" />
		<main class="">
			<slot />
		</main>
		<LayoutsFooter />
	</div>
</template>

<script setup>
import NavigationBar from '../components/Navigation/NavigationBar.vue';

const route = useRoute()
const isDebug = route.query.debug === "1"

</script>
