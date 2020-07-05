//#region Global imports
import App from 'next/app';
import React from 'react';
//#endregion Global imports


//#region Local imports
import '@assets/scss/vendor-frontend.scss';
import '@assets/scss/utility.scss';
import '@assets/scss/app.scss';
//#enregion Local imports


/**
 * This component is very important because `Next.js` uses `_app.js` component to initialize pages.
 * We're overriding this component with our custom implementation because we want to control the
 * page initialization and wanted to use redux store on our all pages.
 */
/**
 * Next.js is universal, which means it executes code first server-side, then client-side.
 * The `window`, `document` object is only present client-side, so if you absolutely need to have
 * access to it in some React component, you should put that code in lifecycle method like
 * componentDidMount. This lifecycle method will only be executed on the client.
 * You may also want to check if there isn't some alternative universal library which may suit
 * your needs.
 */
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default MyApp;
