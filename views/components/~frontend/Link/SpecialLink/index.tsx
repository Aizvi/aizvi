//#region Global imports
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FaLongArrowAltRight } from 'react-icons/fa';
//#endregion Global imports


//#region Types
type Props = {
	text: string;
	url: string;
	className: string;
};
//#endregion Types


//#region Component
export const SpecialLink = (props: Props) => {

	const { text, url, className } = props;


	return (
		<Link href={url}>
			<a className={classNames(className,'special-link')}>
				<span className="special-link__arrow link-arrow--before"><FaLongArrowAltRight/></span>
				{ text }
				<span className="special-link__arrow link-arrow--after"><FaLongArrowAltRight/></span>
			</a>
		</Link>
	);
};
//#endregion Component
