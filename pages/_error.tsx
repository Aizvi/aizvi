//#region Global Imports
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
//#endregion Global Imports

//#region Local imports
import { Main } from '@layouts';
//#endregion Local imports




//#region Component
interface Error {
	statusCode?: number | null | undefined
}

const Error: NextPage<Error> = ({ statusCode }) => {


	const title = `${statusCode} Error occurred`;


	return (
		<Main title={title}>
			<section className="error">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 className="error__h1">{statusCode}</h1>
							<p className="error__p">{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
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

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
//#endregion Component
