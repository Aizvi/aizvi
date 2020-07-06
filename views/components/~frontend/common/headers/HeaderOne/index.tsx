//#region Global imports
import React,{useEffect,useState} from 'react';
import { MdSearch, MdMoreVert,MdClose } from 'react-icons/md';
import { FaPhone,FaEnvelope,FaSearch } from 'react-icons/fa';
import Link from 'next/link';
//#endregion Global imports

//#region Local Imports
import { Logo } from  '@components';
import { GoInput, PrimaryMenu,PanelMenu } from '../common';
//#endregion Local Imports

//#region Types
type BoolState = boolean;

type Props = {
	sticky: boolean;
}
//#endregion Types




//#region Component

export const HeaderOne = (props: Props) => {

	const { sticky } = props;

	const [partB, setPartB] = useState<BoolState>(false);

	const [panel, setPanel] = useState<BoolState>(false);


	// Part B
	const handlePartBClick = () => {
		setPartB(prevState => !prevState);
	};

	// Panel Section
	const handlePanelClick = () => {
		setPanel(prevState => !prevState);
	};

	const togglePanel = (isOpen: boolean) => {
		setPanel(isOpen);
	};



	useEffect(() => {

		if (sticky) {
			// Offset in pixels from the top of the screen when fixing element to viewport.
			const offset = 0;
			// Distance
			let distanceTarget = 0;
			// Target element which help us to set our sticky element
			const stickyRect = document.getElementById('header-d');

			if (stickyRect) {
				const rect = stickyRect.getBoundingClientRect();
				// Remember one thing: There is a known bug with iOS and getBoundingClientRect in
				// combination with position: fixed. Sometimes it is returning wrong values. So when
				// you have fixed elements, you probably have to use offsetTop property.
				distanceTarget = stickyRect.offsetTop + rect.height;
			}


			const scroll = () => {
				// We will get new value every time when this function will execute
				// `scrollTop` is the offset of document had scrolled out viewport
				const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
					document.body.scrollTop;
				if (stickyRect) {
					if (scrollTop > distanceTarget + offset) {
						stickyRect.setAttribute('class', 'header-d is-sticky');
					} else {
						stickyRect.setAttribute('class', 'header-d');
					}
				}
			};

			// This function will invoke whenever you scroll the page
			const handleScroll = () => {
				scroll();
			};
			// Add scroll event on the window Element
			window.addEventListener('scroll', handleScroll);
			// Before component mount only one time execution
			scroll();

			return () => {
				// Remove scroll event on the window Element
				window.removeEventListener('scroll', handleScroll);
			};
		}
	},[sticky]);



	return (
		<>
		{/*	 Message Section */}
		<div className="message-hiring">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-6">
					<div className="mh-content text-center text-md-left">
						<span className="mh-content__title u-s-mr-2">Hiring Now:</span>
						<a className="mh-content__subtitle" href="/hiring">Are you driven and looking for a opportunity?</a>
					</div>
				</div>
					<div className="col-md-6">
						<ul className="mh-content-2 justify-content-center justify-content-md-end">
							<li>
								<a href="tel:+923080496028" className="mh-tel">
									<span className="gl-icon u-s-mr-2"><FaPhone /></span>
									<span>+92-308-86698646</span>
								</a>
							</li>
							<li>

								<a href="mailto:contact@aizvi.com" className="mh-mail">
									<span className="gl-icon u-s-mr-2"><FaEnvelope /></span>
									<span>contact@aizvi.com</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/*	 Header Section */}
		<header className="header-d" id="header-d">
			{/* Desktop Header */}
			<div className="part-a">
						<div className="container">
						<div className="row align-items-center">

							<div className="col-xl-3 col-lg-3 col-md-3 col-6">
									{/* Logo */}
									<Link href="/">
										<a className="header-d__logo">
												<Logo size={104}/>
										</a>
									</Link>
							</div>


							<div className="col-xl-5 col-lg-7 col-md-7 d-md-block d-none">
									<GoInput input={{placeholder: 'Go to Section', id: 'g-input'}} className="g-input-wrap">
										<span className='g-icon gl-icon'>
											<FaSearch />
										</span>
									</GoInput>
							</div>


							<div className="col-xl-4 col-lg-2 col-md-2 col-6">
								{/* Navigation */ }
									<nav className="menu">
										{/* Menu on the large devices */}
										<div className="menu-wrap">
										<button type="button" className="btn--icon menu__btn-0" onClick={handlePartBClick}>
										{/* 22 x 22 */}
										<MdSearch size="1.4rem"/>
										</button>
										<button type="button" className="btn--icon menu__btn-1" onClick={handlePanelClick}>
										{/* 22 x 22 */}
										<MdMoreVert size="1.4rem"/>
										</button>
										</div>
										{/* PrimaryMenu on the extra-large devices */}
										<PrimaryMenu />
									</nav>
							</div>
						</div>

					</div>
					</div>




			{/*	GoInput on the medium devices */}
			{ partB && <div className="part-b">
				<GoInput input={{placeholder: 'Go to Section', id: 'g-input-2'}} />
				<button type="button" className="btn--icon gl-icon part-b__btn" onClick={handlePartBClick}>
					<MdClose />
				</button>
			</div> }






				{/*	Menu on the large devices */}
				<PanelMenu isOpen={panel} toggle={togglePanel}/>
				{/* End - Desktop Header */}
		</header>



		</>

	);
};
//#endregion Component
