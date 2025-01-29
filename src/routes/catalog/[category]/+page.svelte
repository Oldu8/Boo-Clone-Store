<script lang="ts">
	import CatalogCard from '@/components/Catalog/CatalogCard.svelte';
	import Breadcrumbs from '@/components/UI/Breadcrumbs.svelte';
	import type { Catalog } from '@/types/Catalog/catalog';

	export let data: { title: string; description: string; categoryData: Catalog };

	const breadcrumbItems = [
		{ name: 'Catalog', path: '/catalog' },
		{ name: data.categoryData?.name || 'Loading...', path: `/catalog/${data.categoryData?.slug}` }
	];

	console.log(data.categoryData);
	const list = data.categoryData?.children || [];
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<div class="py-4">
	<Breadcrumbs basePath="/" items={breadcrumbItems} />
	<div class="pt-4">
		<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">{data.categoryData?.metaTitle}</h2>
		{#if data.categoryData}
			<div class="flex w-full flex-col flex-wrap justify-start">
				{#if list.length === 0}
					<p>No categories found.</p>
				{/if}
				{#each list as category}
					<div class="mt-14 flex w-full flex-col flex-wrap justify-start">
						<h3 class="mb-6 text-left text-xl font-bold">{category?.metaTitle}</h3>
						<div class="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4">
							{#if category.children.length > 0}
								{#each category.children as item}
									<CatalogCard {item} />
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-center text-red-500">Category data not found.</p>
		{/if}
	</div>
</div>
