<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	let { children } = $props();
</script>

<div>
	<Header />
	<div class="main">
		{@render children()}
	</div>
	<footer>footer</footer>
</div>
