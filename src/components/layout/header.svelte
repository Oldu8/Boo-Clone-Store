<script lang="ts">
	import logo from '@/assets/logo.svg';
	import { onMount } from 'svelte';
	import { cartCount, selectedLanguage } from '@/routes/store';

	// 	onMount(async () => {
	//     const res = await fetch('https://fakestoreapi.com/products');
	//     products = await res.json();
	//   });
	let searchQuery = '';

	const handleSearch = () => {
		if (searchQuery.trim() !== '') {
			console.log('Search query:', searchQuery);
		} else {
			console.log('Search query is empty.');
		}
	};

	let count;
	let language;

	$: count = $cartCount;
	$: language = $selectedLanguage;

	function handleLanguageChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedLanguage.set(target.value);
	}
</script>

<div class="header-wrapper">
	<header
		class="mx-auto flex max-w-[1200px] flex-row flex-nowrap items-center justify-between gap-4"
	>
		<span>
			<img src={logo} alt="Logo" />
		</span>
		<div>
			<a
				href="/catalog"
				class="flex cursor-pointer items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				>Catalog</a
			>
		</div>
		<div class="search-bar flex items-center overflow-hidden rounded border border-blue-500">
			<div class="search-icon px-3 text-blue-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 15.75 21 21m-5.25-5.25a6.75 6.75 0 1 0-9.5 0 6.75 6.75 0 0 0 9.5 0Z"
					/>
				</svg>
			</div>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search"
				class="flex-grow px-4 py-2 focus:outline-none"
			/>
			<button
				type="button"
				on:click={handleSearch}
				class="bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
			>
				Search
			</button>
		</div>
		<div>
			<a
				href="/info"
				class=" flex cursor-pointer items-center rounded bg-white px-4 py-2 font-bold text-blue-500 hover:bg-blue-700 hover:text-white"
				>Information</a
			>
		</div>
		<div class="flex">
			<a class="flex cursor-pointer items-center gap-2" href="/cart">
				<p class="font-bold leading-8">To Cart</p>
				<div class="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>
					{#if count > 0}
						<!-- Количество товаров в корзине -->
						<span
							class="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white"
						>
							{count}
						</span>
					{/if}
				</div>
			</a>
		</div>
		<div>
			<select
				class="rounded border px-2 py-1"
				bind:value={$selectedLanguage}
				on:change={handleLanguageChange}
			>
				<option value="UA">UA</option>
				<option value="UK">UK</option>
				<option value="RU">RU</option>
			</select>
		</div>
	</header>
</div>

<style>
	.header-wrapper {
		position: sticky;
		top: 0;
		z-index: 100;
		padding: 35px;
		border-bottom: 1px solid #73cca8;
		background: white;
	}

	.search-bar {
		display: flex;
		align-items: center;
		width: 400px;
	}

	.search-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		flex-grow: 1;
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}
</style>
