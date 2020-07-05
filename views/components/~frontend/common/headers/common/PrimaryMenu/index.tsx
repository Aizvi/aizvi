//#region Global imports
import React,{useState} from 'react';
import Link from 'next/link';
import { take } from 'lodash';
//#endregion Global imports


//#region Local imports
import {Primary ,MenuItem} from '@data/primary-menu';
import { Dropdown } from './Dropdown';
//#endregion Local imports




//#region Types
type PrimaryMenuState = MenuItem[];
//#endregion Types


//#region Component

// It will returns only first 4 elements of the array.
const MENU_ITEMS_THRESHOLD = 4;

const data = take(Primary, MENU_ITEMS_THRESHOLD);

export const PrimaryMenu = () => {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-ignore
    // @ts-ignore
	const [items,setItems] = useState<PrimaryMenuState>(data);


    const decideItemMarkup = (item: MenuItem) => {
    	// Case 1:
        if ( (item.object === 'page' || item.object === 'custom' ) && !item.children) {
            return (
            	<li key={item.id}>
					<Link href={item.url}>
						<a className="p-menu__item">{item.title}</a>
					</Link>
				</li>
             );
        }
        // Case 2:
        else if ((item.object === 'page' || item.object === 'custom' ) && (item.children && item.children.length > 0)) {
			return (
				<li key={item.id} className="has-subMenu">
					<a href={item.url}>{item.title}</a>
					<ul>
						{
							item.children.map((item: MenuItem) => {
								const itemMarkup = decideItemMarkup(item);
								return itemMarkup;
							})
						}
					</ul>
				</li>
			);
		}
		// Case 3:
		else if (item.object === 'dropdown' &&  item.children.length > 0) {
			return <Dropdown key={item.id} item={item}/>
		}
    };

    const renderer = () => {
        if (items.length > 0 ) {
            return (
                <ul className="p-menu">
					{/* creates a new array with the results of calling a function for every array element. */}
                    {
                        items.map((item: MenuItem) => {
							const itemMarkup = decideItemMarkup(item);
							return itemMarkup;
                        })
                    }
                </ul>
            );
        }
    };
    return (
      <>
		  { renderer() }
	  </>
    );
};

//#endregion Component

