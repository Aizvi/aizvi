//#region Global imports
import React from 'react';
import { FaHeadphonesAlt,FaInfoCircle } from 'react-icons/fa';
import { Button } from 'reactstrap';
//#endregion Global imports




//#region Component


export const SectionBanner = () => {
    return (
        <section className="banner">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="banner__content">
                            <h3 className="banner__heading">We run all kinds of IT services that vow your<span> success</span></h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">

                        <div className="banner-btn-group">

                            <Button color="primary" className="banner__btn">
                                {/*{loading && <Spinner className="spinner--sm u-s-mr-2"/>}*/}
                                <FaHeadphonesAlt className="u-s-mr-10"/>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <span>Let's Talk</span>
                            </Button>

                            <Button color="light" className="banner__btn">
                                {/*{loading && <Spinner className="spinner--sm u-s-mr-2"/>}*/}
                                <FaInfoCircle className="u-s-mr-10"/>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <span>Get Info</span>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};
//#endregion Component
