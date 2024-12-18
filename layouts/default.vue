<template>
	<div class="min-h-screen flex flex-col">
		<header class="bg-gray-800 text-white p-4 shadow-md">
			<h1 class="text-2xl font-bold">My Website</h1>
		</header>

		<main class="flex-grow bg-gray-100 p-6">
			<slot />
			<!-- This will render the page content -->
		</main>

		<footer class="bg-gray-800 text-white p-4 mt-8">
			<p class="text-center">&copy; 2024 My Website</p>
		</footer>
	</div>
</template>
