//#region Global imports
import React from 'react';
//#endregion Global imports

//#region Local imports
import {omit} from '@utils/utils';
//#endregion Local imports


//#region Types
type Props = {
	[key: string]: any;
	// It will
	size?: number;
};
//#endregion Types


//#region Components
export const Logo = (props: Props) => {
	const { size } = props;
	const orginalWidth = 195;
	const originalHeight = 65;
	let computedWidth;
	let computedHeight;

	// Constrain aspect ratio of the height when the width is changed.
	if (size) {
		computedWidth = size;
		// Adjust height
		computedHeight = Math.round( (size * originalHeight) / orginalWidth);
	} else {
		computedWidth = orginalWidth;
		computedHeight = originalHeight;
	}

	const {...attrs} = omit(props,['size']);
	return (
		<svg viewBox="0 0 196.9 64.71" width={computedWidth + 'px'} height={computedHeight + 'px'} {...attrs}>
			<path
				d="M56.26 10.62a32.93 32.93 0 00-5.63-5 35.28 35.28 0 00-5.55-3.1A33.16 33.16 0 0032.37 0a35.91 35.91 0 00-9.53 1.55A32.41 32.41 0 000 32.39a32.66 32.66 0 003.48 14.34 32.26 32.26 0 0016.13 15.39A30.11 30.11 0 0025.72 64a29.9 29.9 0 006.65.69c.31 0 .56-.06.84-.06a32.2 32.2 0 0023-54z"
				fill="currentColor"
				className="logo__circle"
			/>
			<path
				d="M40 25.43a10.34 10.34 0 00-1.79-1.58 11 11 0 00-1.76-1 10.71 10.71 0 00-4-.8 11.37 11.37 0 00-3 .49 10.3 10.3 0 00-1 19.28 9.73 9.73 0 001.94.61 9.9 9.9 0 002.12.22h.26A10.26 10.26 0 0040 25.43z"
				fill="#fff"
			/>
			<path
				d="M100.89 53.1l-2.83-9.28h-14.2L81 53.1h-8.9L85.88 14H96l13.79 39.1zm-4.8-16.21q-3.91-12.62-4.41-14.26c-.33-1.1-.57-2-.71-2.61q-.87 3.4-5 16.87zm17.62-21.3c0-2.65 1.48-4 4.42-4s4.43 1.32 4.43 4a3.89 3.89 0 01-1.11 2.95 4.64 4.64 0 01-3.32 1.05c-2.94 0-4.42-1.33-4.42-4zm8.48 37.51h-8.13V23.29h8.13zm29.26 0h-23.53v-4.8l13.8-18.79h-13v-6.22H151v5.28l-13.46 18.31h13.91zm12.99 0l-11.36-29.81h8.5l5.76 17a30.33 30.33 0 011.2 6.11h.16a26.72 26.72 0 011.2-6.11l5.73-17h8.5L172.78 53.1zm23.61-37.51q0-4 4.43-4t4.42 4a3.92 3.92 0 01-1.1 2.95 4.67 4.67 0 01-3.32 1.05q-4.42 0-4.43-4zm8.48 37.51h-8.13V23.29h8.13z"
				fill="currentColor"
				className="logo__text"
			/>
		</svg>
	)
};
//#endregion Components
