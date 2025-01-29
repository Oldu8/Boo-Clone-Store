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
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<div class="py-4">store : {data.categoryData?.name}</div>
