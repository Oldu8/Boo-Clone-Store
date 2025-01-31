<script lang="ts">
	import { cartItems, removeFromCart } from '@/stores/cartStore';
	import type { CartItem } from '@/types/Layout/CartItem';

	let items: CartItem[] = [];

	$: cartItems.subscribe((data) => {
		items = data;
	});

	export let isOpen = false;
	export let closePopup: () => void;
</script>

{#if isOpen}
	<div class="cart-popup-overlay" on:click={closePopup}></div>
	<div class="cart-popup">
		<h2 class="cart-title">Shopping Cart</h2>
		{#if items.length === 0}
			<p class="empty-cart">Your cart is empty</p>
		{:else}
			<ul class="cart-items">
				{#each items as item (item.id)}
					<li class="cart-item">
						<img src={item.image} alt={item.title} class="cart-img" />
						<div class="cart-info">
							<p class="cart-title">{item.title}</p>
							<p class="cart-price">${item.price}</p>
						</div>
						<button class="remove-btn" on:click={() => removeFromCart(item.id)}>✕</button>
					</li>
				{/each}
			</ul>
			<div class="cart-actions">
				<a href="/cart" class="btn cart-btn">Go to Cart</a>
				<a href="/checkout" class="btn checkout-btn">Start Order</a>
			</div>
		{/if}
	</div>
{/if}

<style>
	.cart-popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 90;
	}
	.cart-popup {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		z-index: 100;
		width: 300px;
	}
	.cart-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.cart-items {
		list-style: none;
		padding: 0;
		margin: 0;
		max-height: 300px;
		overflow-y: auto;
	}
	.cart-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.cart-img {
		width: 50px;
		height: 50px;
		border-radius: 5px;
		object-fit: cover;
	}
	.cart-info {
		flex-grow: 1;
		margin-left: 10px;
	}
	.cart-price {
		color: #777;
	}
	.remove-btn {
		background: none;
		border: none;
		color: red;
		font-size: 18px;
		cursor: pointer;
	}
	.cart-actions {
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
	}
	.btn {
		text-decoration: none;
		padding: 10px 15px;
		border-radius: 5px;
		text-align: center;
		display: inline-block;
	}
	.cart-btn {
		background: #007bff;
		color: white;
	}
	.checkout-btn {
		background: #28a745;
		color: white;
	}
</style>
