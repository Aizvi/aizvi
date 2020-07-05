//#region Local Imports
import { SvgUi,SvgWeb,SvgMobile,SvgScrap,SvgData,SvgEnterprise } from '@components';
//#endregion Local Imports


//#region Types
export type ServiceItem = {
	id: number;
	title: string;
	description: string;
	icon: any;
}

//#endregion Types


//#region Item Structure
export const ServiceData: ServiceItem[] = [
	{
		id: 1,
		title: 'UI / UX',
		description: 'Design is not only about aesthetics; it’s about how the product works and even above that, how it makes the user feel.',
		icon: SvgUi
	},
	{
		id: 2,
		title: 'Web Development',
		description: 'Our online and ed-tech solutions provide educators, administrators, and learners to create personalized learning environments.',
		icon: SvgWeb
	},
	{
		id: 3,
		title: 'Mobile Development',
		description: 'We create solutions like food ordering and resultant membership system for your business to display food items.',
		icon: SvgMobile
	},
	{
		id: 4,
		title: 'Web Scraping',
		description: 'We provide customizable E-Commerce system to easy start your online E-Commerce business.',
		icon: SvgScrap
	},
	{
		id: 5,
		title: 'Data Services',
		description: 'If you want your own travel booking application to offer hotel, flight, car and cruise bookings in minutes then you\'re in the right place.',
		icon: SvgData
	},
	{
		id: 6,
		title: 'Enterprise Solutions',
		description: 'Our finance solution comes with banking features like account transfer, account statements, branches, auto deposit and more',
		icon: SvgEnterprise
	},

];

//#endregion Item Structure
