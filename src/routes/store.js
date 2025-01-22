import { writable } from 'svelte/store';

// Хранилище для количества товаров в корзине
export const cartCount = writable(0);

// Хранилище для выбранного языка
export const selectedLanguage = writable('UA');
