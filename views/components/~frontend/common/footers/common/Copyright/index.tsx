//#region Global imports
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';
//#endregion Global imports


//#region Local imports
import { Logo } from '@components';
//#endregion Local imports




//#region Component
export const Copyright = () => {
    return (
        <div className="f">

            <div className="f__area">


                    <div className="container">


                        <div className="row">



                            <div className="col-lg-4 col-md-6 col-sm-6">

                                <div className="f-w__logo">

                                    {/* Logo */}
                                    <Link href="/">
                                        <a className="f__logo">
                                            <Logo size={104}/>
                                        </a>
                                    </Link>

                                </div>




                                <ul className="f-w__list">
                                    <li className="black-coral-f-14">1-A D-Block Allama Iqbal Town, Lhr</li>
                                    <li><a className="black-coral-f-14-h-primary" href="mailto:contact@aizvi.com">contact@aizvi.com</a></li>
                                    <li><a className="jet-f-16-700-h-jet" href="tel:+923080496028">(+92) 308-049-6028</a></li>
                                    <li><a className="primary-f-14-600-h-primary" href="https://webperia.com/">www.aizvi.com</a></li>
                                </ul>
                            </div>



                            <div className="col-lg-2 col-md-4 col-sm-6 u-s-mb-30">

                                <h6 className="f__h6">IT Services</h6>


                                <ul className="f-w__list">
                                    <li><a className="black-coral-f-14-h-primary" href="#">Managed IT</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">IT Support</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">IT Consultancy</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Cloud Computing</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Cyber Security</a></li>
                                </ul>


                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 u-s-mb-30">

                                <h6 className="f__h6">Quick links</h6>


                                <ul className="f-w__list">
                                    <li><a className="black-coral-f-14-h-primary" href="#">Pick up locations</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Terms of Payment</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Privacy Policy</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Where to Find Us</a></li>

                                </ul>


                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 u-s-mb-30">

                                <h6 className="f__h6">Support</h6>


                                <ul className="f-w__list">
                                    <li><a className="black-coral-f-14-h-primary" href="#">Forum Support</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Help & FAQ</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Contact Us</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Budget Plan</a></li>
                                    <li><a className="black-coral-f-14-h-primary" href="#">Cookies Policy</a></li>
                                </ul>


                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 u-s-mb-30 d-flex align-items-center">

                                <ul className="f-w__list">
                                    <li>
                                        <a href="#" className="f-store">
                                            <img src="/images/play-store.png" className="img-fluid" alt="Get on the Google store"/>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="f-store">
                                            <img src="/images/apple-store.png" className="img-fluid" alt="Get on the Apple store"/>
                                        </a>
                                    </li>

                                </ul>


                            </div>



                        </div>
                    </div>
            </div>

            {/*  Copyright   */}
            <div className="f__copyright">
                <div className="container">
                    <div className="row align-items-center">


                        <div className="col-md-6 u-s-mb-14">
                            <span className="f__copyright-text">© {new Date().getFullYear()} Aizvi All Rights Reserved.</span>
                        </div>


                        {/* Social-Media Column */}
                        <div className="d-flex justify-content-start justify-content-md-end col-md-6">


                            <ul className="f__social-list">

                                <li className="">
                                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li className="">
                                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li className="">
                                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li className="">
                                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};
//#endregion Component
