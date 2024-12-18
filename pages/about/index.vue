<template>
	<div class="min-h-screen flex flex-col items-center bg-gray-50 py-8">
		<h1 class="text-4xl font-extrabold text-gray-800">About Page</h1>
		<p>{{ aboutStore.info }}</p>
	</div>
</template>

<script setup lang="ts">
import { useAboutStore } from "~/stores/aboutStore";

// Access the Pinia store
const aboutStore = useAboutStore();

// Fetch data when the component is mounted
onMounted(() => {
	aboutStore.fetchAboutData();
});
</script>
