<script>
	let myCards = [];
	let deck = undefined;
	let cardsLeft = 52;

	const getNewDeck = async () => {
		const resp = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
		const json = await resp.json();
		return json;
	};

	const getCards = async (numberCardToDraw = 1) => {
		if (!deck) {
			deck = await getNewDeck();
		}
		// Todo: check if there are enough cards left
		// Todo: limit number of cards to draw
		const resp = await fetch(
			`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${numberCardToDraw}`
		);
		const json = await resp.json();
		myCards = [...myCards, ...json.cards];
		cardsLeft = json.remaining;
	};
</script>

<h2>Cards</h2>
<h3>There are {cardsLeft} {cardsLeft > 1 ? 'cards' : 'card'}</h3>

<h3>My cards</h3>

<div class="buttons">
	<button on:click={() => getCards(1)}>Draw 1 card</button>
	<button on:click={() => getCards(2)}>Draw 2 cards</button>
	<button on:click={() => getCards(3)}>Draw 3 cards</button>
	<button on:click={() => getCards(4)}>Draw 4 cards</button>
	<button on:click={() => getCards(5)}>Draw 5 cards</button>
</div>

<div class="cards">
	{#each myCards as card}
		<img src={card.image} alt={card.code} />
	{/each}
</div>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing);
		padding: var(--spacing);
	}
</style>
