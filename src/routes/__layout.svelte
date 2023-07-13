<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>
<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
