//#region Types


export type PersonItem = {
    id: number;
    name: string;
    position: string;
    image: {
        url: string;
        altTitle: string;
    };
    social: {
        facebook: string;
        twitter: string;
        instagram: string;
    };
}

//#endregion Types


//#region PersonItem Structure
export const PersonData: PersonItem[] = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Co-founder',
        image: {
            url: '/images/member-1.jpg',
            altTitle: 'Member 1'
        },
        social: {
            facebook: 'https://wwww.facebook.com',
            twitter: 'https://www.twitter.com',
            instagram: 'https://www.instagram.com'
        }
    },
    {
        id: 2,
        name: 'Allan Doe',
        position: 'Co-founder / Marketing Manager',
        image: {
            url: '/images/member-1.jpg',
            altTitle: 'Member 2'
        },
        social: {
            facebook: 'https://wwww.facebook.com',
            twitter: 'https://www.twitter.com',
            instagram: 'https://www.instagram.com'
        }
    },

];

//#region PersonItem Structure
