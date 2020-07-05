//#region Global imports
import React,{ useContext } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { MdChevronLeft, MdClose, MdChevronRight } from 'react-icons/md';
//#endregion Global imports

//#region Local imports
import { PanelContext } from './PanelContext';
//#endregion Local imports


//#region Types
type Props = {
	/** Default `id` of the panel which you want to active. */
	id: number;
	/** Items data that will render on the panel. */
	items: any[];
	/** Default title display on the Panel. */
	title?: string;
};

//#endregion Types

export const Panel = (props: Props) => {

	const { items, id, title } = props;


	const { currentActivePanel, addItemToPanel, goBack,closePanel } = useContext(PanelContext);


	// Array of JSX Elements
	const panelsJSX: React.ReactNode[] = [];




	// Open next panel
	const nextPanel = (id: number) => {
		if (addItemToPanel) {
			addItemToPanel(id);
		}
	};





	return (
		<>
			<div className={id === currentActivePanel ? 'panel is-visible' : 'panel is-hidden'}>
				{/* Panel Actions => Header */}
				<div className="panel__actions">

					{/* Previous Button */}
					{ id > 0 && <button type="button"
							className="btn--icon gl-icon panel-action__btn panel-action__btn--left"
							onClick={goBack}>
						<MdChevronLeft/>
					</button> }

					{/* Title */}
					<div className="panel-action__title">{ title || 'Menu'}</div>


					{/* Close Button */}
					<button type="button"
							className="btn--icon gl-icon panel-action__btn panel-action__btn--right"
							onClick={closePanel}>
						<MdClose/>
					</button>
				</div>


				<div className="panel__list-wrap">
					<ul>
						{ items.map((item) => {
							if (item.children && item.children.length > 0) {
								panelsJSX.push(<Panel title={item.title} id={item.id} items={item.children} key={item.id}/>);
							}
							return (
									<li key={item.id} className={classNames({ 'panel-next': item.children && item.children.length > 0 })}>

										{/* List Item */}
										{ item.url ? <Link href={item.url}><a>{item.title}</a></Link> : <a>{item.title}</a>}

										{/* Render next Button if the item has `children` */}
										{ item.children && item.children.length > 0 &&
										<button type="button" className="btn--icon panel-next__btn" onClick={() => {
											nextPanel(item.id);
										}}>
											<MdChevronRight/>
										</button>
										}
									</li>
							);
						})}
					</ul>
				</div>
			</div>

			{/* Render all nested panels after the first panel. */}
			{ panelsJSX }
		</>
	);
};


//#endregion Component
