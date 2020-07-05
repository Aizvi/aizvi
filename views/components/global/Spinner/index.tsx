//#region Global imports
import React from 'react';
import classNames from 'classnames';
//#endregion Global imports

//#region Types
type Props = {
	className?: string;
}
//#region Types


//#region Components
export const Spinner = (props: Props) => {

	const { className } = props;

	const cls = className ? classNames('spinner', className) : 'spinner';
	return (
		<div className={cls}>
			<div className="dot1" />
			<div className="dot2" />
		</div>

	);
};
//#endregion Components
