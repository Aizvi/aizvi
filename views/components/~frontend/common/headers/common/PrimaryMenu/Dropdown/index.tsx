//#region Global imports
import React,{useEffect,useState,useRef} from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
//#endregion Global imports


//#region Local imports
import {ItemTypeB,ItemTypeBChild} from '@data/primary-menu';
//#endregion Local imports

//#region Types
type Props = {
	item: ItemTypeB;
};

type BoolState = boolean;
//#endregion Types





//#region Component
export const Dropdown = (props: Props) => {

	const { item } = props;

	const router = useRouter();

	const refItem = useRef(null);

	const [dropdownOpen, setDropdownOpen] = useState<BoolState>(false);


	const toggleLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		event.preventDefault();
		router.push(href);
		setDropdownOpen(false);
	};


	const toggle = (_event: React.MouseEvent<HTMLButtonElement>) => {
		setDropdownOpen(prevState => !prevState);
	};



	const handleOutsideClick = (event: any) => {
		const ref = refItem.current;
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		// First check if the click is happen on the direct children it returns true
		// and check if if its not the current div
		// The Node.contains() method returns a Boolean value indicating whether a node is a descendant
		// of a given node, i.e. the node itself, one of its direct children (childNodes),
		// one of the children's direct children, and so on.
		if (ref.contains(event.target) && ref !== event.target) {
			return;
		}
		setDropdownOpen(false);
	};


	useEffect(() => {

		const addEvents = () => {
			['click', 'touchstart'].forEach(event =>
				// true - The event handler is executed in the capturing phase
				// Capturing phase: The event goes down to the element.
				document.addEventListener(event, handleOutsideClick, true),
			);
		};
		const removeEvents = () => {
			['click', 'touchstart'].forEach(event =>
				// true - The event handler is executed in the capturing phase
				// Capturing phase: The event goes down to the element.
				document.removeEventListener(event, handleOutsideClick, true),
			);
		};
		// Is open is set
		if (dropdownOpen) {
			addEvents();
		} else {
			removeEvents();
		}
		return () => {
			removeEvents();
		};
	}, [dropdownOpen]);


	return (
		<li className={ classNames('drop-down', { 'is-active': dropdownOpen })} ref={refItem}>
			<button className="p-menu__item" onClick={toggle}>
				<span>{item.title}</span>
				<span className="gl-icon u-s-ml-2 drop-down__icon" style={{width: '0.5rem', height: '0.5rem'}}>
					{ dropdownOpen ? <FaChevronUp size={'0.5rem'}/> : <FaChevronDown size={'0.5rem'}/>}
                </span>
			</button>
			<ul className={ classNames('drop-down__list', { 'is-open': dropdownOpen })}>

				{
					item.children.map((item: ItemTypeBChild) => {
						return (
							<li key={item.id}>
								<a href={item.url} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
									toggleLink(event, item.url)
								}}>
									{item.title}
								</a>
							</li>
						);
					})
				}
			</ul>
		</li>
	);
};

//#endregion Component

