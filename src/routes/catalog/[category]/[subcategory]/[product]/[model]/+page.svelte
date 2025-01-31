<script lang="ts">
	import Breadcrumbs from '@/components/UI/Breadcrumbs.svelte';

	export let data: { title: string; description: string };

	const breadcrumbItems = [{ name: 'Catalog', path: '/catalog' }];
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
		<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">Model page</h2>
	</div>
</div>
