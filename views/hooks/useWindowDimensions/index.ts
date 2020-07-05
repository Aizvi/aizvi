//#region Global Imports
import {useState,useEffect} from 'react';
//#endregion Global Imports

const getWindowDimensions = () => {
	// @ts-ignore
	const {innerWidth,innerHeight,outerWidth,outerHeight} = window;
	return {innerWidth,innerHeight,outerHeight,outerWidth};
};

//#region Hook
export const useWindowDimensions = () => {
	const [windowDimensions,setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};
		window.addEventListener('resize', handleResize);
		// cleanup remove Listener when the component where this hook is used is unmounted.
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

//#endregion Hook