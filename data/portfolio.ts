//#region Local imports
import { TabType } from '@data/tab';
//#endregion Local imports

//#region Types

type Category = 'Web Application' | 'Mobile Application' | 'Website' | 'Theme Template' | 'Tool';

type Image = {
    url: string;
    altTitle: string;
}

export type PortfolioItem = {
    id: number;
    title: string;
    category: Category;
    slug: string;
    permalink: string;
    description: string;
    image: Image;
    tabType: TabType[]; // One item could have multiple types
}

//#endregion Types


//#region Item Structure
export const PortfolioData: PortfolioItem[] = [
    {
        id: 1,
        slug: 'foe',
        permalink: 'https://foe.org',
        title: 'Foe.org - Global Warming Donation',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Foe'
        },
        tabType: ['web-applications']
    },
    {
        id: 2,
        slug: 'school-tube',
        permalink: 'https://www.schooltube.com',
        title: 'Schooltube.com - Video Sharing & Management',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 3,
        slug: 'fly-rusts',
        permalink: 'https://www.flyrusts.com/',
        title: 'Flyrusts.com - Alaska Tour Management',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 4,
        slug: 'perfumes-shop',
        permalink: 'https://www.theperfumeshop.pk/',
        title: 'Perfumeshop.pk - E-commerce',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 5,
        slug: 'canyon-creek-food',
        permalink: 'http://www.canyoncreekfood.com/',
        title: 'Canyon Creek Food - Food Services',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 6,
        slug: 'hutchinson-community-college',
        permalink: 'https://hutchcc.edu/',
        title: 'Hutchinson Community College',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 7,
        slug: 'act-right',
        permalink: 'https://actright.com/',
        title: 'ActRight - Donation Campaign',
        category: 'Web Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['web-applications']
    },
    {
        id: 8,
        slug: 'hit-rush',
        permalink: 'https://github.com/ahmadHuss/HitRush',
        title: 'HitRush - Android Game',
        category: 'Mobile Application',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['open-source', 'mobile-applications']
    },
    {
        id: 9,
        permalink: 'https://d2r00w08fz6ft0.cloudfront.net/groover-demo/home.html',
        slug: 'ludus-multipurpose-e-commerce-template',
        title: 'Ludus Multipurpose E-Commerce Template',
        category: 'Theme Template',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Ludus'
        },
        tabType: ['open-source','themes-templates']
    },
    {
        id: 10,
        slug: 'groover-multipurpose-e-commerce-template',
        permalink: 'https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/index.html',
        title: 'Groover Multipurpose E-Commerce Template',
        category: 'Theme Template',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'Groover'
        },
        tabType: ['open-source','themes-templates']
    },
    {
        id: 11,
        slug: 'react-placenode',
        permalink: 'https://www.npmjs.com/package/react-placenode',
        title: 'React Placenode - React.js package',
        category: 'Tool',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'react-placenode'
        },
        tabType: ['open-source']
    },
    {
        id: 12,
        slug: 'react-stickynode-update',
        permalink: 'https://www.npmjs.com/package/react-stickynode-update',
        title: 'React Stickynode - React.js package',
        category: 'Tool',
        description: 'At Aizvi, we have a holistic and integrated approach towards core modernization to experience technological evolution.',
        image: {
            url: '/images/case.jpg',
            altTitle: 'react-stickynode'
        },
        tabType: ['open-source']
    },

];

//#endregion Item Structure
