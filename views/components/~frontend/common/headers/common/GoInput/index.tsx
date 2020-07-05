//#region Global Imports
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
//#endregion Global Imports

//#region Local Imports
import { Sections, Section } from '@data/go-to-section';
import { filterResults } from './go-filter';
//#endregion Local Imports

//#region Types
type Props = {
	/** An element type to render as (string or function). */
	tag?: any;
	/** Additional classes on the element type. */
	className?: string;
	/** Primary content after the input element. */
	children?: React.ReactNode;
	/** Shorthand for the input element. */
	input?: {
		[key: string]: any;
	};
};

type SectionState = Section[];
type StringState = string;
type BoolState = boolean;
//#enregion Types


//#region Component
export const GoInput = (props: Props) => {


	// All dashboard sections are inside this state
	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const [sections, setSections] = useState<SectionState>(Sections);

	// onFocus is called when a control receives. Very important state with the help of this
	// our results menu will be show
	const [focus, setFocus] = useState<BoolState>(false);

	// Value is persisted in the tagRef.current property.
	const tagRef = useRef(null);

	const [value, setValue] = useState<StringState>('');

	const [sectionResults, setSectionResults] = useState<Section[]>([]);


	// Take props
	const {tag, className, children , input } = props;


	const handleOutsideClick = (event: any) => {
		const ref = tagRef.current;
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		// First check if the click is happen on the direct children it returns true
		// and check if if its not the current div
		// The Node.contains() method returns a Boolean value indicating whether a node is a descendant
		// of a given node, i.e. the node itself, one of its direct children (childNodes),
		// one of the children's direct children, and so on.
		if (ref.contains(event.target)) {
			return;
		}
		setFocus(false);
	};

	const offFocus = () => {
		setValue('');
		setFocus(false);
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
		const goToFilter = () => {
			// If the value of the search input is less than 1 character then update the following states
			if (value.length < 1) {
				// Set the empty search result
				setSectionResults([]);
				// Set the empty search value
				setValue('');
				// Exit from the timeout handler
				return;
			}
			// Invocation of the search algorithm
			const results = filterResults(sections, value);
			// Update the results state
			setSectionResults([...results]);
		};


		// Is focus is set
		if (focus) {
			addEvents();
		} else {
			removeEvents();
		}

		goToFilter();


		return () => {
			removeEvents();
		};
	}, [focus, sections, value]);

	// Props check
	// If the user has implicitly used the `tag` prop then assign the tag, otherwise Tag would be
	// a 'div'.
	const Tag = tag || 'div';

	const cls = classNames(className, {'is-active': focus});

	const resultWrapperCls = classNames('go-result go-result--scroll', {'is-open': focus});
	/**
	const resultCls = classNames('go-r-data go-r-data--style-b', `go-r-data--scheme-${Math.floor(Math.random() * 6) + 1}`);
	const rsContent = (<button className={resultCls} key="1" onClick={offFocus}>
							<span className="a-s-r-data__title">{data.title}</span></button>);
	 **/
	const resultCls = classNames('go-r-data go-r-data--style-a');



	return (
		<Tag className={cls} ref={tagRef}>
			<input type="text" {...input}
				   value={value}
				   onFocus={(_e: React.FocusEvent<HTMLInputElement>) => {
					   setFocus(true);
				   }}
				   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					   setValue(e.target.value);
				   }}/>
			{ children && children }

			{/*	renderer */}
			{sectionResults.length > 0 &&
			<div className={resultWrapperCls}>
				<span className="go-r-heading">Choose Section</span>
				{
					sectionResults.map((data: Section, index: number) => {
						return (
							<div className={resultCls} key={index} onClick={offFocus}>{data.title}</div>
						);
					})
				}
			</div>
			}

			{
				!sectionResults.length && value.length > 0 &&
				<div className={resultWrapperCls}>
					<div className="go-result__msg">Oops! There are no section found.</div>
				</div>
			}
		</Tag>
	);
};

//#endregion Component
