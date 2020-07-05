//#region Local Imports
import { SvgMedical,SvgEducation,SvgFood,SvgEcommerce,SvgTravel,SvgFinance } from '@components';
//#endregion Local Imports


//#region Types
export type IndustryItem ={
	id: number;
	title: string;
	description: string;
	icon: any;
}

//#endregion Types


//#region Item Structure
export const IndustryData: IndustryItem[] = [
	{
		id: 1,
		title: 'Health',
		description: 'Our solutions have been empower the medical needs of its users,giving them a one-stop-solution for their health.',
		icon: SvgMedical
	},
	{
		id: 2,
		title: 'Education',
		description: 'Our online and ed-tech solutions provide educators, administrators, and learners to create personalized learning environments.',
		icon: SvgEducation
	},
	{
		id: 3,
		title: 'Food',
		description: 'We create solutions like food ordering and resultant membership system for your business to display food items.',
		icon: SvgFood
	},
	{
		id: 4,
		title: 'E-Commerce',
		description: 'We provide customizable E-Commerce system to easy start your online E-Commerce business.',
		icon: SvgEcommerce
	},
	{
		id: 5,
		title: 'Travel',
		description: 'If you want your own travel booking application to offer hotel, flight, car and cruise bookings in minutes then you\'re in the right place.',
		icon: SvgTravel
	},
	{
		id: 6,
		title: 'Finance',
		description: 'Our finance solution comes with banking features like account transfer, account statements, branches, auto deposit and more',
		icon: SvgFinance
	},

];

//#endregion Item Structure
