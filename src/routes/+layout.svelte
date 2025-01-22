<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	let { children } = $props();
</script>

<div>
	<Header />
	<div class="main min-h-full">
		{@render children()}
	</div>
	<Footer />
</div>
