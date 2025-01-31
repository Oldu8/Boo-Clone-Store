<script lang="ts">
	import BurgerIcon from '@/assets/icons/layout/burger.svg';
	import CartIcon from '@/assets/icons/layout/cart.svg';
	import SearchIcon from '@/assets/icons/layout/search.svg';
	import logo from '@/assets/logo.svg';
	import { cartCount, selectedLanguage } from '@/routes/store';

	let searchQuery = '';
	let isMobileMenuOpen = false;

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

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};
</script>

<div class="header-wrapper">
	<header
		class="mx-auto flex max-w-[1200px] flex-row flex-nowrap items-center justify-between gap-4 p-4"
	>
		<span>
			<a href="/">
				<img src={logo} alt="Logo" class="h-10 w-auto" />
			</a>
		</span>

		<div class="hidden md:flex md:items-center md:gap-4">
			<a
				href="/catalog"
				class="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				>Catalog</a
			>
			<div class="search-bar flex items-center overflow-hidden rounded border border-blue-500">
				<div class="search-icon px-3 text-blue-500">
					<img src={SearchIcon} alt="Search Icon" class="h-6 w-6" />
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
			<a
				href="/info"
				class="cursor-pointer rounded bg-white px-4 py-2 font-bold text-blue-500 hover:bg-blue-700 hover:text-white"
				>Information</a
			>
			<div class="flex items-center gap-4">
				<a class="flex cursor-pointer items-center gap-2" href="/cart">
					<div class="relative">
						<img src={CartIcon} alt="Cart Icon" class="h-6 w-6" />
						{#if count > 0}
							<span
								class="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white"
							>
								{count}
							</span>
						{/if}
					</div>
				</a>
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
		</div>

		<div class="flex items-center gap-4 md:hidden">
			<a class="flex cursor-pointer items-center gap-2" href="/cart">
				<div class="relative">
					<img src={CartIcon} alt="Cart Icon" class="h-6 w-6" />
					{#if count > 0}
						<span
							class="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white"
						>
							{count}
						</span>
					{/if}
				</div>
			</a>

			<button on:click={toggleMobileMenu} class="text-blue-500 focus:outline-none">
				<img src={BurgerIcon} alt="Menu Icon" class="h-6 w-6" />
			</button>
		</div>

		{#if isMobileMenuOpen}
			<div
				class="absolute right-0 top-16 z-50 flex min-w-[200px] flex-col gap-2 rounded-lg bg-white p-4 shadow-lg md:hidden"
			>
				<a href="/catalog" class=" mb-1 border-b-2 pb-1 font-bold text-blue-500">Catalog</a>
				<a href="/info" class="mb-1 border-b-2 pb-1 font-bold text-blue-500">Information</a>
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
		{/if}
	</header>
</div>

<style>
	.header-wrapper {
		position: sticky;
		top: 0;
		z-index: 100;
		background: white;
		box-shadow:
			0 7px 20px 0 rgb(0 0 0 / 20%),
			0 4px 10px 0 rgb(0 0 0 / 20%);
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
