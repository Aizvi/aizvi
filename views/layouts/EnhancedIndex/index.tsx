//#region Global imports
import React, {  useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
// Translate using higher-order component (HOC)
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { withTranslate } from 'react-redux-multilingual';
//#endregion Global imports

//#region Local imports
import { withRedux } from '@redux/frontend/reduxProvider';
//#endregion Local imports


//#region Component

//#region Types
type Props = {
	children: ReactNode;
}
//#endregion Types

const Index = (props: Props) => {

	// Alternative to connect’s mapDispatchToProps
	// By default, the return value of `useDispatch` is the standard Dispatch type defined by the
	// Redux core types, so no declarations are needed.
	const dispatch = useDispatch();

	const { children } = props;


	useEffect(() => {
	//	dispatch(fetchProducts());
	},[dispatch]);


	return <>{ children }</>;
};

export const EnhancedIndex =  withTranslate(withRedux(Index));
//#endregion Component


