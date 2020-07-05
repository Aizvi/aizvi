//#region Global Components
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
//#endregion Global Components




// Success
export const toastSuccess = (message: string, options?: object) => {
	const content = <><span className="u-s-mr-8"><FaCheckCircle size="1rem"/></span><span>{message}</span></>;
	toast.success(content,options);
};
