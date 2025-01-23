<script lang="ts">
	import CartIcon from '@/assets/icons/Categories/cart-shopping-solid.svg';
	import HammerIcon from '@/assets/icons/Categories/hammer-solid.svg';
	import LaptopIcon from '@/assets/icons/Categories/laptop-solid.svg';
	import MobileIcon from '@/assets/icons/Categories/mobile-screen-button-solid.svg';
	import PlugIcon from '@/assets/icons/Categories/plug-solid.svg';
	import RingIcon from '@/assets/icons/Categories/ring-solid.svg';

	let categories = [
		{ title: 'Smartphones', icon: MobileIcon, link: '/catalog/electronics/smartphones' },
		{ title: 'Gold Jewellery', icon: RingIcon, link: '/catalog/jewellery/gold' },
		{ title: 'Electronics', icon: LaptopIcon, link: '/catalog/electronics' },
		{ title: 'Household Appliances', icon: PlugIcon, link: '/catalog/household' },
		{ title: 'Construction tools', icon: HammerIcon, link: '/catalog/tools' },
		{ title: 'All categories', icon: CartIcon, link: '/catalog' }
	];
</script>

<div class="categories-wrapper max-[1200px] mx-auto py-4">
	<h2 class="mb-6 text-center text-3xl font-bold">Top Categories</h2>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each categories as category}
			<div
				class="category-card group relative overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
			>
				<a
					href={category.link}
					class="flex flex-row flex-nowrap items-center gap-4 p-6 text-center"
				>
					<img
						src={category.icon}
						alt={category.title}
						class="h-12 w-12 text-blue-500 transition-transform duration-300 group-hover:scale-110"
					/>
					<div class="flex flex-col items-start">
						<h6 class="mb-2 text-xl font-semibold">{category.title}</h6>
						<button class="text-whit rounded-md bg-blue-300 px-2 py-1 hover:bg-blue-400">
							View Category
						</button>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Дополнительные стили для иконок, если необходимо */
</style>
