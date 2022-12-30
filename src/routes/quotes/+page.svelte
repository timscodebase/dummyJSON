<script>
	export let data;
	const { quotes } = data;
</script>

{#each quotes.quotes as quote}
	<div>
		<h3>{quote.quote}</h3>
		<p>{quote.author}</p>
	</div>
{/each}
