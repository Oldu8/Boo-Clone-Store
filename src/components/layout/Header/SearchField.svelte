<script lang="ts">
	import SearchIcon from '@/assets/icons/layout/search.svg';
	let searchQuery = '';

	const handleSearch = () => {
		if (searchQuery.trim() !== '') {
			console.log('Search query:', searchQuery);
		} else {
			console.log('Search query is empty.');
		}
	};
</script>

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

<style>
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
