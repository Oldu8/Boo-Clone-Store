<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let separator: string = '/';
	export let basePath: string = '';

	// Breadcrumbs array
	let breadcrumbs: { name: string; path: string }[] = [];

	// Parse URL and generate breadcrumbs
	const generateBreadcrumbs = () => {
		// Get the current path
		const path = window.location.pathname.replace(basePath, '');
		const segments = path.split('/').filter(Boolean);

		// Generate breadcrumb paths
		breadcrumbs = segments.map((segment, index) => {
			const path = '/' + segments.slice(0, index + 1).join('/');
			return { name: decodeURIComponent(segment), path };
		});
	};

	onMount(() => {
		generateBreadcrumbs();
	});
</script>

<nav class="breadcrumbs">
	{#if breadcrumbs.length > 0}
		<a href="/" class="breadcrumb-link">Home</a>
		{#each breadcrumbs as crumb, index}
			<span class="breadcrumb-separator">{separator}</span>
			<a
				href={crumb.path}
				class="breadcrumb-link {index === breadcrumbs.length - 1 ? 'active' : ''}"
				aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
			>
				{crumb.name}
			</a>
		{/each}
	{/if}
</nav>

<style>
	.breadcrumbs {
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: #333;
	}

	.breadcrumb-link {
		text-decoration: none;
		color: #007acc;
	}
	.breadcrumb-link::first-letter {
		text-transform: capitalize;
	}

	.breadcrumb-link.active {
		font-weight: bold;
		color: #000;
		pointer-events: none;
	}

	.breadcrumb-separator {
		margin: 0 0.5rem;
		color: #999;
	}
</style>
