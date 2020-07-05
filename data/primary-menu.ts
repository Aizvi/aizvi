//#region Types
type ItemTypeA  ={
	id: number;
	object: 'page' | 'custom';
	url: string;
	title: string;
	children?: ItemTypeA[];
}

export type ItemTypeBChild = {
	id: number;
	url: string;
	title: string;
}


export type ItemTypeB = {
	id: number;
	object: 'dropdown';
	title: string;
	children: ItemTypeBChild[];
}


export type MenuItem = 	ItemTypeA | ItemTypeB;

//#endregion Types


//#region Item Structure
export const Primary: MenuItem[] = [
	{
		id: 1,
		object: 'page',
		url: '/services',
		title: 'Services'
	},
	{
		id: 2,
		object: 'dropdown',
		title: 'Products',
		children: [
			{
				id: 3,
				url: '/themes-templates',
				title: 'Themes & Templates',
			},
			{
				id: 4,
				url: '/open-source',
				title: 'Open Source',
			},
			{
				id: 5,
				url: '/solutions',
				title: 'Solutions',
			},
		]
	},
	{
		id: 6,
		object: 'page',
		url: '/work',
		title: 'Work'
	},
	{
		id: 10,
		object: 'page',
		url: '/contact-us',
		title: 'Contact Us',
	}
];

//#endregion Item Structure
