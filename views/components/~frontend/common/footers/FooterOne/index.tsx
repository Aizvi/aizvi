//#region Global imports
import React from 'react';
//#endregion Global imports


//#region Local imports
import { Contact } from '../common';
import { Copyright } from '../common';
//#endregion Local imports


//#region Component

export const FooterOne = () => {
    return (
        <footer className="footer">
            {/* Contact Section  */}
            <Contact />
            {/* Copyright Section  */}
            <Copyright />
    </footer>);
};


//#endregion Component
