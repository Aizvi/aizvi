//#region Global imports
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
//#endregion Global imports




//#region Types
type Props = {
	title: string;
	description: string;
	icon: any;
	iconClass?: string;
	children?: React.ReactNode;
};
//#endregion Types


//#region Component


export const Card2 = (props: Props) => {


	const  {title, description, icon: Icon,iconClass , children} = props;

	return (

			<div className="card-2">
				<div className="card-2__body">

					<div className="card-2__icon">
						<div className={ classNames('card-2__icon-wrap',iconClass) }>

							<div className="card-2__svg">
								<Icon />
							</div>

						</div>
					</div>

						<h5 className="card-2__title">
							{ title }
						</h5>

						<p className="card-2__text">
							{ description }
						</p>

						<Link href="/">
							<a className="btn btn-primary card-2__link">Get a Quote</a>
						</Link>

				</div>

				{ children && children }
			</div>

	);
};
//#endregion Component
