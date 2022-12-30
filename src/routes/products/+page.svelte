<script>
	export let data;
	const { categories, products: allProducts } = data;
	const { products } = allProducts;

	let selectedCategory = 'smartphones';

	$: filteredProducts = products.filter((product) => product.category === selectedCategory);

	function handleCategoryChange() {
		console.log(selectedCategory);
	}
</script>

<h1>Products</h1>

<lable for="categories">Category</lable>
<select
	name="categories"
	id="categories"
	bind:value={selectedCategory}
	on:change={handleCategoryChange}
>
	{#each categories as category}
		<option value={category}>{category}</option>
	{/each}
</select>

<div class="grid">
	{#each filteredProducts as product}
		<a href="products/{product.id}">
			<div class="product">
				<header>
					<h2>
						{product.title}
					</h2>
				</header>
				<img src={product.thumbnail} alt={product.title} />
				<footer><p>{product.description}</p></footer>
			</div>
		</a>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: var(--spacing);
		padding: var(--spacing) 0;
	}

	header,
	footer {
		padding: var(--spacing);
	}
	header {
		background: var(--header-bg);
		color: var(--light-text);
	}
	footer {
		background: var(--footer-bg);
		color: var(--light-text);
	}

	.product {
		border: 1px solid #ccc;
	}

	.product img {
		max-width: 100%;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
