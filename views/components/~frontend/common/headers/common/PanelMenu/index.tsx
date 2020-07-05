//#region Global imports
import React, { useState } from 'react';
import classNames from 'classnames';
//#endregion Global imports

//#region Data imports
import { Primary } from '@data/primary-menu';
//#endregion Data imports


//#region Local imports
import { PanelProvider } from './PanelContext';
import { Panel } from './Panel';
//#endregion Local imports


//#region Types
type Props = {
	/** A boolean flag which will open the panel. */
	isOpen?: boolean;
	/** Close Panel with a click button. */
	toggle?: (isOpen: boolean) => void;
	/** Default title display on the Panel. */
	title?: string;
};


export const PanelMenu = (props: Props) => {

	const { title, isOpen, toggle } = props;


	// It will hold the array
	const [currentPanel, setCurrentPanel] = useState<number[]>([0]);


	const addItemToPanel = (itemId: number) => {
		// Updates the array by using setState with the callback
		// New integer will always be on the top
		setCurrentPanel((prev) => {
			return [itemId, ...prev];
		});
	};


	const goBack = () => {
		// Updates the array by using setState with the callback
		// Because we want to update previous state then we can do something like this.
		setCurrentPanel((prev) => {
			return prev.slice(1);
		});
	};


	const panelCls = classNames('panel-menu', { 'is-open': isOpen });
	const panelOverlayCls = classNames('panel-menu__overlay', { 'is-visible': isOpen });


	const togglePanel = () => {
		if (toggle) {
			toggle(!isOpen);
		}
	};


	// JSX wil rendered
	return (

		<PanelProvider value={{ currentActivePanel: currentPanel[0], addItemToPanel, goBack, closePanel: togglePanel }}>

			{/*	 Panel-Menu Back Settings */}
			<div className={panelCls}>

				{/* This is very important It is our Panel menu */}
					<div className="panel-box">
						<Panel items={Primary} id={0} title={title} />
					</div>

				{/*	 Overlay */}
				<div className={panelOverlayCls} onClick={togglePanel}/>
			</div>

		</PanelProvider>
	);
};


//#endregion Component

