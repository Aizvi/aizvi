//#region Global imports
import React, { ReactNode, useEffect } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { MdArrowUpward } from 'react-icons/md';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
//#endregion Global imports

//#region Local imports
// Very important import because it contains a component that wrap with our redux store.
import { EnhancedIndex } from '../EnhancedIndex';
import { HeaderOne, FooterOne } from '@components';
//#endregion Local imports


//#region Component

//#region Types
type Props = {
	title: string;
	children: ReactNode;
}
//#endregion Types
if (typeof window !== 'undefined') {

	NProgress.configure({ showSpinner: false });

	// Fires when a route starts to change
	Router.events.on('routeChangeStart', () => {
		NProgress.start();
	});

	// Fires when a route changed completely
	Router.events.on('routeChangeComplete', () => {
		NProgress.done();
	});

	//  Fires when there's an error when changing routes, or a route load is cancelled
	Router.events.on('routeChangeError', () => {
		NProgress.done();
	});
}

export const Main = (props: Props) => {

	const { title, children } = props;

	const clickToTop = () => {
		window.scroll({top: 0, left: 0, behavior: 'smooth' });
	};

	useEffect(() => {

		// Button
		const btnTop: HTMLButtonElement | null = document.querySelector('.s-top');

		// It Will Show or Hide the scroll button
		const handleScroll = () => {
			if (btnTop) {
				if (document.documentElement.scrollTop  > 600) {
					btnTop.style.display = 'block';
				} else {
					btnTop.style.display = 'none';
				}
			}
		};

		window.addEventListener('scroll',handleScroll);
		return () => {
			window.removeEventListener('scroll',handleScroll);
		};

	},[]);


	return (
		<EnhancedIndex>
			<Head>
				<title>{`${process.env.appName} - ${title}`}</title>
				{/* Stylesheet for the Admin
				<link rel="stylesheet" href="/css/app.css"/> */}
			</Head>
			<HeaderOne sticky={true}/>
			{children}
			<FooterOne />
			{/*	Scroll-Top-Button */}
			<div className="layout-offset">
				<button className="s-top gl-icon btn--icon" onClick={clickToTop}>
					<MdArrowUpward />
				</button>
			</div>
			{/* Toast-Container	*/}
			<ToastContainer transition={Slide} position="top-center" closeButton={false} hideProgressBar={true} />
		</EnhancedIndex>
	);
};

export default Main;
//#endregion Component


