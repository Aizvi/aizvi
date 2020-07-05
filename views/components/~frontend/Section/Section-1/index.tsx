//#region Global imports
import React from 'react';
import classNames from 'classnames';
//#endregion Global imports


//#region Local imports
import { SvgWave } from '@components';
//#endregion Local imports

//#region TypesHeader
type Props = {
	heading: {
		label1: string;
		label2: string;
	};
	subHeading?: string;
	className?: string;
	children?: React.ReactNode;
};
//#endregion Types


//#region Component


export const Section1 = (props: Props) => {

	const { heading: {label1, label2}, subHeading,  className, children } = props;


	/*
	// First Word
	let firstWord = '';

	// If user has given a subHeading
	if (subHeading) {
		// Regular Expression
		const regExp = /^([\w]+)/;
		// Matches Array
		const matches = regExp.exec(subHeading);

		// If Matches is an array
		if (matches && matches.length > 0) {
			firstWord = matches[0];
		}
	}
*/

	return (
		<section className={ classNames(className,'section-1')}>

            {/*{ curve && <div className="curve"> <SvgCurve /> </div> }*/}

			{/* Container */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
								<div className="section-1__content u-s-mb-48">
									{/* Svg */}
									<span className="section-1__wave">
										<SvgWave />
									</span>
									{/*	 Sub Heading */}
									{ subHeading && <h6 className="section-1__subtitle">{ subHeading }</h6>}

									{/*	Heading */}
									<h3 className="section-1__description">{ label1 }{' '}<span>{ label2 }</span></h3>

									{/*	 First Word => empty string is falsy value*/}
									{/*{ firstWord && <span className="section__word">{firstWord}</span> }*/}
								</div>
					</div>
				</div>

				 { children }
			</div>

		</section>

	);
};
//#endregion Component
