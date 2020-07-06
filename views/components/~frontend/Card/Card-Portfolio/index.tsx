//#region Global imports
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
//#endregion Global imports



//#region Types



type Props = {
	title: string;
	category: string;
	slug: string;
	permalink: string;
	description: string;
	image: {
		url: string;
		altTitle: string;
	};
};
//#endregion Types


//#region Component

export const CardPortfolio = (props: Props) => {


	const  { title, permalink, category,description, image} = props;

	return (




			<a href={permalink} target="_blank" rel="noopener noreferrer">
				<div className="card-portfolio">
					<img src={image.url} alt={image.altTitle} className="card-portfolio__img"/>
					<div className="card-portfolio__body">


						<h5 className="card-portfolio__title">
								{ title }
						</h5>

						<h6 className="card-portfolio__category"> { category }</h6>


						<p className="card-portfolio__text">
								{ description }
						</p>

						<div className="card-portfolio__view-wrap">
								<div className="card-portfolio__view">
									<span>View now</span>
									<span className="card-portfolio__view-arrow"><FaLongArrowAltRight/></span>
								</div>
						</div>
					</div>
				</div>
			</a>



	);
};
//#endregion Component
