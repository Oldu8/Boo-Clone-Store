export interface Item {
	id: number;
	slug: string;
	name: string;
	brandId: number | null;
	descriptionPreview: string;
	imagePreview: string;
	stickersIds: number[];
	_hasCache: boolean;
	minPricePenny: number;
	maxPricePenny: number;
	productsIds: string[];
	productCounter: number;
	url: string;
}

export interface ApiResponse {
	data: Item[];
	time: number;
}
