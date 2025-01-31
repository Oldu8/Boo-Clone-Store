<script lang="ts">
	import CartIcon from '@/assets/icons/layout/cart.svg';
	import { cartItems } from '@/stores/cartStore';
	import CartPopup from '@/components/layout/Header/CartPopup.svelte';
	import LanguageControl from './LanguageControl.svelte';

	let isCartOpen = false;
	let cartCount = 0;

	$: cartItems.subscribe((items) => {
		cartCount = items.length;
	});

	const toggleCartPopup = () => {
		isCartOpen = !isCartOpen;
	};

	let count;
</script>

<div>
	<div class="flex items-center gap-4">
		<button class="flex cursor-pointer items-center gap-2" on:click={toggleCartPopup}>
			<div class="relative">
				<img src={CartIcon} alt="Cart Icon" class="h-6 w-6" />
				{#if cartCount > 0}
					<span
						class="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white"
					>
						{count}
					</span>
				{/if}
			</div>
		</button>
		<LanguageControl />
	</div>

	<CartPopup isOpen={isCartOpen} closePopup={toggleCartPopup} />
</div>
