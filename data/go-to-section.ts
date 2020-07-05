//#region Types
export type Section = {
	/** Title of the section */
	title: string;
	/** Path of the section */
	path: string;
};
//#endregion Types


//#region Item Structure
export const Sections: Section[] = [
	{
		title: 'Industries',
		path:'#industries'
	},
	{
		title: 'Services',
		path:'#services'
	},
	{
		title: 'How we Work',
		path:'#how-we-work'
	},
	{
		title: 'Projects',
		path:'#projects'
	},
	{
		title: 'Meet Members',
		path:'#members'
	},
	{
		title: 'Request a quote',
		path:'#quote'
	},
];

//#endregion Item Structure
