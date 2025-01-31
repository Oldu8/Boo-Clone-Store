// import type { PageLoad } from './$types'; // Use correct import path
// export const ssr = true;

// export const load: PageLoad = async ({ params, fetch }) => {
// 	const categoryId = params.product; // Ensure this is the correct dynamic param

// 	console.log('categoryId', categoryId);
// 	try {
// 		const response = await fetch(
// 			`https://back.boo.ua/api/front/category?category_id=${categoryId}`
// 		);
// 		if (!response.ok) throw new Error('Failed to fetch category data');

// 		const categoryData = await response.json();

// 		return {
// 			title: `Category: ${categoryData.metaTitle}`,
// 			description: `Find the best deals in ${categoryData.metaDescription}!`,
// 			categoryData
// 		};
// 	} catch (error) {
// 		console.error('Error fetching category data:', error);
// 		return {
// 			title: `Category:`,
// 			description: `Find the best deals in!`,
// 			categoryData: null
// 		};
// 	}
// };
export const ssr = true;

export function load() {
	return {
		title: 'Offer Page | Boo Clone - придбати БУ товари вигідно!',
		description:
			'Boo Clone - найкраща платформа для покупки БУ товарів в Україні вигідно. Завітай та обирай серед надійних продавців!'
	};
}
