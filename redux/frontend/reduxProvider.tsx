//#region Global Imports
import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { IntlProvider } from 'react-redux-multilingual';
//#endregion Global Imports



//#region Local Imports
import { initializeFrontendStore } from './store';
import { frontendTranslations } from '@translations/frontend';
//#endregion Local Imports


//#region Component
let reduxStore: any;


const getOrInitializeStore = (initialState?: any) => {
	// Always make a new store if server, otherwise state is shared between requests
	if (typeof window === 'undefined') {
		return initializeFrontendStore(initialState);
	}
	// Create store if unavailable on the client and set it on the window object
	if (!reduxStore) {
		reduxStore = initializeFrontendStore(initialState);
	}
	return reduxStore;
};



// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const withRedux = (PageComponent, { ssr = true } = {}) => {

	// A function which will return JSX element.
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const WithRedux = ({ initialReduxState, ...props }) => {
		const store = getOrInitializeStore(initialReduxState);
		return (
			<Provider store={store}>
				<IntlProvider translations={frontendTranslations} locale='en'>
				<PageComponent {...props} />
				</IntlProvider>
			</Provider>
		);
	};

	// Make sure people don't use this HOC on _app.js level
	if (process.env.NODE_ENV !== 'production') {
		const isAppHoc =
			PageComponent === App || PageComponent.prototype instanceof App;
		if (isAppHoc) {
			throw new Error('The withRedux HOC only works with PageComponents');
		}
	}

	// Set the correct displayName in development
	if (process.env.NODE_ENV !== 'production') {
		const displayName =
			PageComponent.displayName || PageComponent.name || 'Component';

		WithRedux.displayName = `withRedux(${displayName})`;
	}

	if (ssr || PageComponent.getInitialProps) {

		// Bind `getInitialProps` async function to the WithRedux HOC.
		WithRedux.getInitialProps = async (context: any) => {

			// Get or Create the store with `undefined` as initialState
			// This allows you to set a custom default initialState
			const reduxStore = getOrInitializeStore();

			// Provide the store to getInitialProps of pages
			context.reduxStore = reduxStore;

			// Run getInitialProps from HOCed PageComponent
			const pageProps =
				typeof PageComponent.getInitialProps === 'function'
					? await PageComponent.getInitialProps(context)
					: {};

			// Pass props to PageComponent
			return {
				...pageProps,
				initialReduxState: reduxStore.getState(),
			};
		};
	}

	return WithRedux;
};
//#endregion Component