<script lang="ts">
	import type { Item, ApiResponse } from '@/types/HomePage/home';
	import { onMount } from 'svelte';

	let items: Item[] = [];

	onMount(async () => {
		try {
			const response = await fetch(
				'https://back.boo.ua/api/front/models/previews-by-ids?ids[]=76375&ids[]=727&ids[]=38504&ids[]=5208&ids[]=5051'
			);

			if (!response.ok) {
				throw new Error(`Failed to fetch items: ${response.status}`);
			}

			const jsonResponse: ApiResponse = await response.json();

			items = jsonResponse.data;
		} catch (error) {
			console.error('Error fetching items:', error);
		}
	});
</script>

<div class="mx-auto my-4 px-4 py-4 md:max-w-[1200px] md:px-0">
	<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">Top Items</h2>
	<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-5">
		{#if items.length > 0}
			{#each items as item}
				<a
					href={item.url}
					class="item-card flex cursor-pointer flex-col items-center justify-end rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105"
				>
					<div class="mb-auto">
						<img
							src={item.imagePreview}
							alt={item.name}
							class="mb-4 h-40 w-40 rounded-lg object-contain"
						/>
						<h3 class="mb-auto text-center text-sm font-semibold sm:text-lg">
							{item.name.length > 100 ? `${item.name.substring(0, 40)}...` : item.name}
						</h3>
					</div>
					<p class="mb-4 text-xs text-gray-600 sm:text-sm">
						Price: {(item.minPricePenny / 100).toFixed(2)} UAH
					</p>
					<button
						class="rounded bg-blue-500 px-3 py-2 text-xs text-white hover:bg-blue-600 sm:px-4 sm:py-2 sm:text-sm"
					>
						Add to cart
					</button>
				</a>
			{/each}
		{:else}
			<p class="text-center text-gray-500">Loading items...</p>
		{/if}
	</div>
</div>

<style>
	.item-card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		padding: 1rem;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.item-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	}

	.item-card img {
		width: 100%;
		height: 10rem;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.item-card h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	.item-card p {
		color: #4b5563; /* Tailwind gray-600 */
		font-size: 0.875rem;
		margin-bottom: 0.75rem;
		text-align: center;
	}
</style>
