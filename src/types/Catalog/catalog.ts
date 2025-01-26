export interface Catalog {
	id: number;
	level: number;
	hasMenu: boolean;
	hasList: boolean;
	slug: string;
	name: string;
	viewName: string;
	imageMain: string;
	imageSecondary: string;
	imageIcon: string;
	metaTitle: string;
	metaDescription: string;
	metaKeywords: string;
	hasJewelry: boolean;
	stickersIds: number[];
	children: Catalog[];
}
