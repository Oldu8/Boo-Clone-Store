<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	let { children } = $props();
</script>

<div class="main flex h-screen flex-col">
	<Header />
	<div class="mx-auto px-4 py-4 md:max-w-[1200px] md:px-0">
		{@render children()}
	</div>
	<Footer />
</div>
