<template>
	<div>
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavigationBar />
		<main class="">
			<slot />
		</main>
		<LayoutsFooterBar />
	</div>
</template>

<script setup>
// import NavigationBar from '../components/Navigation/NavigationBar.vue';

const route = useRoute()
const isDebug = route.query.debug === "1"

</script>
