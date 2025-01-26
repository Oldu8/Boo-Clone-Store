<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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

	let isMobile = false;

	const checkScreenSize = () => {
		isMobile = window.innerWidth < 640;
	};

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window?.removeEventListener('resize', checkScreenSize);
		}
	});
</script>

<div class="mx-auto max-w-[1200px] py-4">
	<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">Top Categories</h2>
	<div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
		{#each categories as category}
			<div
				class="flex flex-row flex-nowrap items-center gap-1 rounded-lg bg-white px-2 py-2 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl md:gap-4 md:p-4"
			>
				<img
					src={category.icon}
					alt={category.title}
					class="mr-2 h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 md:mr-0"
				/>
				<div class="flex w-full flex-row items-center gap-2 md:flex-col md:items-start">
					<h6 class="text-sm font-semibold sm:text-xl md:mb-2 md:text-lg">{category.title}</h6>
					<a
						href={category.link}
						class="ml-auto rounded-md bg-blue-300 px-1 py-1 text-sm hover:bg-blue-400 sm:text-base md:ml-0 md:px-2"
					>
						{isMobile ? 'View' : 'View Category'}
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
