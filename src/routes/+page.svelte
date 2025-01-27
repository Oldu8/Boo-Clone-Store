<script lang="ts">
	import HomeSlider from '@/components/HomePage/HomeSlider.svelte';
	import TopCategories from '@/components/HomePage/TopCategories.svelte';
	import TopItems from '@/components/HomePage/TopItems.svelte';

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

<div>
	<HomeSlider />
	<div class="py-4 md:py-12"></div>
	<TopCategories />
	<TopItems />
</div>
