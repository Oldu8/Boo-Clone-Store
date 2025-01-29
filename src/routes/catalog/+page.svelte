<script lang="ts">
	import Breadcrumbs from '@/components/UI/Breadcrumbs.svelte';
	import type { Catalog } from '@/types/Catalog/catalog';
	import { onMount } from 'svelte';

	let list: Catalog = {
		id: 0,
		level: 0,
		hasMenu: false,
		hasList: false,
		slug: '',
		name: '',
		viewName: '',
		imageMain: '',
		imageSecondary: '',
		imageIcon: '',
		metaTitle: '',
		metaDescription: '',
		metaKeywords: '',
		hasJewelry: false,
		stickersIds: [],
		children: []
	};

	onMount(async () => {
		try {
			const response = await fetch('https://back.boo.ua/api/front/category?category_id=0');

			if (!response.ok) {
				throw new Error(`Failed to fetch items: ${response.status}`);
			}

			list = await response.json();
		} catch (error) {
			console.error('Error fetching catalog list:', error);
		}
	});

	export let data: { title: string; description: string } = {
		title: 'Default Title',
		description: 'Default Description'
	};
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<div class="py-4">
	<Breadcrumbs basePath="/" />
	<div class="pt-4">
		<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">Catalog</h2>
		<div class="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4">
			{#if list.children.length === 0}
				<p>No categories found.</p>
			{/if}
			{#each list.children as item}
				<div
					class="item-card flex cursor-pointer flex-col items-center justify-end rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105"
				>
					<a href={`/catalog/${item.id}`}>
						<img
							src={`https://back.boo.ua/${item.imageMain}`}
							alt={item.name}
							class="mb-4 h-80 w-80 rounded-lg object-contain"
						/>
						<h3 class="mt-auto text-center text-sm font-semibold sm:text-lg">
							{item.name.length > 100 ? `${item.name.substring(0, 40)}...` : item.name}
						</h3>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
