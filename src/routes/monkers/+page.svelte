<script>
	export let data;
	const { monkers } = data;

	$: console.log(monkers);
</script>

<h2>Monkers</h2>

<div class="grid">
	{#each monkers as monker}
		<div class="card">
			<img src={monker.image} alt={monker.name} />
			<h3>{monker.name}</h3>
			<p>{monker.description}</p>
		</div>
	{/each}
</div>
