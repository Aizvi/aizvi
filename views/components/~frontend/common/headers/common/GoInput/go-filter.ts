//#region Local imports
import { Section } from '@data/go-to-section';
//#endregion Local imports


export const filterResults = (sections: Section[], keyword: string): Section[] => {
	// The ES6 string includes() method determines whether a string contains the characters of
	// a specified string. Returns true if the string contains the value, otherwise
	// it returns false
	return sections.filter((item: Section) => {
		return item.title.toLowerCase().includes(keyword.toLowerCase());
	});
};

//#endregion custom functions
