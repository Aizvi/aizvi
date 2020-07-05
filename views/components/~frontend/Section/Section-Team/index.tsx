//#region Global imports
import React from 'react';
import classNames from 'classnames';

//#endregion Global imports


//#region Local imports
import { PersonData, PersonItem } from '@data/team';
import { CardTeam, SpecialLink, SvgTeamBlob } from '@components';
//#endregion Local imports


//#region TypesHeader
type Props = {
    heading: {
        label1: string;
        label2: string;
    };
    description?: string;
    className?: string;
};
//#endregion Types


//#region Component


export const SectionTeam = (props: Props) => {

    const {heading: {label1, label2}, description, className} = props;


    return (
        <section className={classNames(className, 'section-team')}>

            {/* Container */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-team__content">

                            {/* Svg Blob */}
                            <div className="section-team__svg">
                                    <SvgTeamBlob />
                            </div>

                            <div className="section-team__area">
                                {/*	Heading */}
                                <h3 className="section-team__heading">{label1}{' '}<span>{label2}</span></h3>

                                {/*	 Description */}
                                <p className="section-team__description">
                                    {description}
                                </p>

                                {/* Links */}
                                <div className="section-team__link-wrapper">
                                    <a href="#" className="btn btn-primary section-team__link-1">Join us now</a>
                                    <SpecialLink text='Ready for work' url='/' className='section-team__link-2'/>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-8">

						<div className="row">
                        {/* Render cards */}
                        {PersonData.map((person: PersonItem) => {
                            return (
                                <div className="col-lg-6 col-md-6" key={person.id}>
                                    <CardTeam name={person.name} position={person.position} image={person.image}
                                              social={person.social}/>
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
