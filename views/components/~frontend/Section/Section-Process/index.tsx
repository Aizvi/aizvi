//#region Global imports
import React from 'react';
import classNames from 'classnames';
//#endregion Global imports


//#region Local imports
import { AnimationCircleWavePulse } from '@components';
import { ProcessItem } from '@data/process';
import { SpecialLink, SvgWave } from '@components';
//#endregion Local imports

//#region TypesHeader
type Props = {
    processItems: ProcessItem[];
    heading: {
        label1: string;
        label2: string;
    };
    subHeading?: string;
    className?: string;
};
//#endregion Types


//#region Component


export const SectionProcess = (props: Props) => {

    const { processItems, heading: {label1, label2}, subHeading,  className } = props;


    return (
        <section className={ classNames(className,'process')}>
            {/* Container */}
            <div className="container">
                {/* Row1 */}
                <div className="row">
                    <div className="col-lg-12">

                            <div className="process__wrapper">

                                <div className="process__block-1">

                                    {/*	 Sub Heading */}
                                    { subHeading && <h6 className="process__subtitle">{ subHeading }</h6>}

                                    {/*	Heading */}
                                    <h3 className="process__description">{ label1 }{' '}<span>{ label2 }</span></h3>


                                    {/* Svg */}
                                    <span className="process__wave">
											<SvgWave />
										</span>

                                </div>

                                <div className="process__block-2">

                                    <h3 className="process__total-text">
                                        <span className="process__total">{ ('0' + processItems.length).slice(-2) }</span>
                                        <span>STEPS</span>
                                    </h3>
                                </div>

                            </div>
                    </div>
                </div>

                {/*  Row2 */}
                <div className="row">
                    <div className="col-lg-12">

                        <div className="process-item-wrapper">


                            { processItems.map((item: ProcessItem, index: number) => {

                                return (

                                        <div className="process-item" key={item.id}>

                                            {/* Straight Line */}
                                            { (index + 1) < processItems.length && <div className="process-line" />}

                                            {/* Circle Wrap */}
                                            <div className="process-circle-wrap">

                                                {/* Animation component */}
                                                <AnimationCircleWavePulse />

                                                <div className="process-circle">{ index + 1 }</div>
                                            </div>

                                            <div className="process-content">

                                                <h5 className="process-content__heading">{('0' + (index + 1)).slice(-2) + '.'}{' '}{item.title}</h5>

                                                <p className="process-content__description">{ item.description }</p>

                                                <SpecialLink text="Look more" url="/" className="process__link"/>

                                            </div>
                                        </div>

                                );

                            })}




                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
};
//#endregion Component
