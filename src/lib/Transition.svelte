<script>
	import { slide } from 'svelte/transition';

	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let color = '#0095ff';
</script>

<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
  div:hover {
    font-weight: 500;
    cursor: pointer;
    color: #0095ff;
  }
  
</style>

<label>
	<input type="checkbox" bind:checked={showItems}>
	show list
</label>

<label>
	<input type="range" bind:value={i} max=10>
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide>
			{item}
		</div>
	{/each}
{/if}