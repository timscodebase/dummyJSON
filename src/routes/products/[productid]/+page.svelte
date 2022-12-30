<script>
	export let data;
	const { product } = data;
</script>

<a href="/products">&larr; Back to product</a>
<h2>{product.title}</h2>

<div class="flex">
	{#each product.images as image}
		<img src={image} alt={product.title} />
	{/each}
</div>

<style>
	.flex {
		display: flex;
		overflow-x: scroll;
	}

	a {
		color: var(--dark-text);
	}
</style>
