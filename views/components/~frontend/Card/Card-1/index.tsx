//#region Global imports
import React from 'react';
//#endregion Global imports


//#region Local imports
import { SpecialLink } from '@components';
//#endregion Local imports

//#region Types
type Props = {
	title: string;
	description: string;
	icon: any;
};
//#endregion Types


//#region Component

export const Card1 = (props: Props) => {


	const  {title, description, icon: Icon} = props;

	return (

			<div className="card-1">

				<div className="card-1__body">
					<div className="card-1__icon">
						<div className="card-1__svg">
							<Icon />
						</div>
					</div>
					<div className="card-1__content">
						<h5 className="card-1__title">
								{ title }
						</h5>

						<p className="card-1__text">
								{ description }
						</p>

						<div className="card-1__link-wrap">
							<SpecialLink text='Get a Quote' url='/' className='card-1__link'/>
						</div>
					</div>
				</div>


			</div>

	);
};
//#endregion Component
