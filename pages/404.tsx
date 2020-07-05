//#region Global Imports
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
//#endregion Global Imports

//#region Local imports
import { Main } from '@layouts';
//#endregion Local imports




//#region Component

const Custom404: NextPage = () => {
	const title = `404 Page Not Found`;
	return (
		<Main title={title}>
			<section className="error">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 className="error__h1">404</h1>
							<p className="error__p">This page is outside of the Universe</p>
							<p className="error__p2">
								The page you are trying to access does not exist or has been moved.
								Try going back to our homepage.</p>
							<div><Link href="/"><a className="btn btn-primary error__btn">Go to Homepage</a></Link></div>
						</div>
					</div>
				</div>


			</section>
		</Main>
	);

};


export default Custom404;
//#endregion Component
