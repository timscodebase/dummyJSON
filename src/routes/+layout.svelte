<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />

<div class="page">
	<slot />
</div>

<Footer />

<style>
	.page {
		padding: 1rem;
	}
</style>
