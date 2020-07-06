//#region Global imports
import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
//#endregion Global imports


//#region Types

type Props = {
    name: string;
    position: string;
    image: {
        url: string;
        altTitle: string;
    };
    social: {
        facebook: string;
        twitter: string;
        instagram: string;
    };
};
//#endregion Types


//#region Component

export const CardTeam = (props: Props) => {


    const {name, position, image, social} = props;

    return (
        <div className="person-item">

            <div className="person-item__wrapper">

                {/* Image & Social Network icons */}
                <div className="person-item__image">

                    <img className="img-fluid" src={image.url} alt={image.altTitle}/>

                    <div className="person__social">
                        <div className="person__social-inner">
							{/* eslint-disable-next-line react/jsx-no-target-blank */}
							<a target="_blank" href={social.facebook} rel="noopener noreferrer">
                                <FaFacebook/>
                            </a>
							{/* eslint-disable-next-line react/jsx-no-target-blank */}
							<a target="_blank" href={social.twitter} rel="noopener noreferrer">
                                <FaTwitter/>
                            </a>
							{/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a target="_blank" href={social.instagram} rel="noopener noreferrer">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Person Info */}
                <div className="person-info">
                    <h5 className="person__name">{name}</h5>
                    <div className="person__position">{position}</div>
                </div>
            </div>
        </div>);
};
//#endregion Component
