//#region Types

export type TabType = 'all' | 'web-applications' | 'mobile-applications' | 'open-source' | 'themes-templates';


export type Tab = {
    id: number;
    title: string;
    tabType: TabType;
}

//#endregion Types


//#region Item Structure
export const TabData: Tab[] = [
    // First tab will never be deleted
    {
        id: 1,
        title: 'All',
        tabType: 'all'
    },
    {
        id: 2,
        title: 'Web Applications',
        tabType: 'web-applications'
    },
    {
        id: 3,
        title: 'Mobile Applications',
        tabType: 'mobile-applications'
    },
    {
        id: 4,
        title: 'Open Source',
        tabType: 'open-source'
    },
    {
        id: 5,
        title: 'Themes & Templates',
        tabType: 'themes-templates'
    },

];

//#endregion Item Structure
