import type { PageLoad } from './$types'; // Use correct import path
export const ssr = false;

export const load: PageLoad = async ({ params, fetch }) => {
	const categoryId = params.product; // Ensure this is the correct dynamic param

	console.log('categoryId', categoryId);
	try {
		const response = await fetch(
			`https://back.boo.ua/api/front/category?category_id=${categoryId}`
		);
		if (!response.ok) throw new Error('Failed to fetch category data');

		const categoryData = await response.json();

		return {
			title: `Category: ${categoryData.metaTitle}`,
			description: `Find the best deals in ${categoryData.metaDescription}!`,
			categoryData
		};
	} catch (error) {
		console.error('Error fetching category data:', error);
		return {
			title: `Category:`,
			description: `Find the best deals in!`,
			categoryData: null
		};
	}
};
