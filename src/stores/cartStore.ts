import { writable } from 'svelte/store';
import type { CartItem } from '@/types/Layout/CartItem';

export const cartItems = writable<CartItem[]>([]);

export const addToCart = (item: CartItem) => {
	cartItems.update((items) => {
		return [...items, item];
	});
};

export const removeFromCart = (id: number) => {
	cartItems.update((items) => items.filter((item) => item.id !== id));
};

export const clearCart = () => {
	cartItems.set([]);
};
