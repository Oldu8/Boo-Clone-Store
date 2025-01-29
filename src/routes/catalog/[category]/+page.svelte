<script lang="ts">
	import Breadcrumbs from '@/components/UI/Breadcrumbs.svelte';
	import type { Catalog } from '@/types/Catalog/catalog';

	export let data: { title: string; description: string; categoryData: Catalog };

	const breadcrumbItems = [
		{ name: 'Catalog', path: '/catalog' },
		{ name: data.categoryData?.name || 'Loading...', path: `/catalog/${data.categoryData?.slug}` }
	];
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
			<p class="text-center">{data.categoryData.name}</p>
		{:else}
			<p class="text-center text-red-500">Category data not found.</p>
		{/if}
	</div>
</div>
