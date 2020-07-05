//#region Global Imports
import React, { useState, useEffect, useCallback } from 'react';
//#endregion Global Imports



//#region Types
type Data = {
	[key: string]: any;
}

// Type for Get / Set `values` or `errors`
type VE = {
	[key: string]: string;
};

// FieldTouch => Determines does field is touch or not?
type FieldTouch = {
	[key: string]: boolean;
};



type Form = {
	handleOnChange: (event: React.ChangeEvent<any>) => void;
	handleOnSubmit: (event: React.FormEvent) => void;
	clear: () => void;
	values: VE;
	errors: VE;
	fieldTouch: FieldTouch;
	validity: boolean;
	setValues: (schema: VE) => void;
	setErrors: (schema: VE) => void;
};
//#endregion Types



//#region Hook
const VALUE = 'value';
const ERROR = 'error';


const getPropValues = (stateSchema: VE, prop?: string) => {
	// ["quoteName", "quoteEmail","quoteService","quoteBudget"]
	const arrayOfKeys = Object.keys(stateSchema);
	// Construct an object with property with value or with property with boolean value
	// By default, If user enter the second parameter then our accumulator will be an Object with values
	// If it is not a second parameter then it will construct an object with false boolean value
	return arrayOfKeys.reduce((accumulator, curr) => {
		if (!prop) {
			// {quoteName: false, quoteEmail: false, quoteService: false, quoteBudget: false}
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			accumulator[curr] = false;
		} else {
			// accumulator is an empty object & curr will be property 'contactEmail'
			// After that, assign newly constructed object a 'value'/'error' of that property
			// {quoteEmail: stateSchema->quoteEmail->value/error->''}
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			accumulator[curr] = stateSchema[curr][prop];
		}
		// In the end If second parameter is not enter we will get the same object just like before
		// Example => {quoteName: '', quoteEmail: '', quoteService: '', quoteBudget: ''}
		// But if the second parameter is not enter we will get the boolean value
		return accumulator;
	}, {});
};


export const useFormHandle = (stateSchema = {}, stateValidatorSchema = {}, submitFormCallback?: (arg: VE) => void): Form => {

	/**
	 * {
	 * quoteName:{value:'',error:''},
	 * quoteEmail:{value:'',error:''},
	 * quoteService:{value:'default',error:''},
	 * quoteBudget:{value:'default',error:''}
	 * }
	 */
	const [state, setStateSchema] = useState<Data>(stateSchema);

	/**
	 * {
	 * quoteName: '',
	 * quoteEmail: '',
	 * quoteService: 'default',
	 * quoteBudget: 'default'
	 * }
	 */
	const [values, setValues] = useState<Data>(getPropValues(state,VALUE));

	/**
	 * {
	 * quoteName: '',
	 * quoteEmail: '',
	 * quoteService: '',
	 * quoteBudget: ''
	 * }
	 */
	const [errors, setErrors] = useState<Data>(getPropValues(state, ERROR));

	/**
	 * {
	 * quoteName: false,
	 * quoteEmail: false,
	 * quoteService: false,
	 * quoteBudget: false
	 * }
	 */
	// Contain all fields with a boolean to check which field is validated successfully
	const [fieldTouch, setFieldTouch] = useState<FieldTouch>(getPropValues(state));


	/**
	 * When the form is considered invalid it means it return true.
	 * Default when the form is rendered it would not consider as a invalid form.
	 */
	const [validity, setValidity] = useState<boolean>(false);





	// Functions



	// Validate fields in forms
	const validateFormFields = useCallback((name, value) => {
			// This is custom validator schema
			const validator: Data = stateValidatorSchema;

			// If `contactName` is an object which is true then make it false
			// Making sure that stateValidatorSchema name is same in
			// stateSchema
			if (!validator[name]) {
				return;
			}
			// Get that object
			const field = validator[name];

			let error = '';

			// =================Error RULES=================

			const validatorObject = field['validator'];

			// Rule 1:
			// if `value` `is an empty string then by default it is false
			// So we make it true, If property `required` and `requiredMsg` is also true
			if (!value && field.required) {
				error = field.requiredMsg || 'This field is required.';
			}

			// Rule 2: Pattern Validator
			 if (error === '' && typeof validatorObject === 'object' && validatorObject !== null) {
				// Test the function callback if the value is meet the criteria
				const testFunc = validatorObject['func'];

				// Execute the function which returns a boolean
				if (!testFunc(value)) {
					// Assign pattern error
					error = validatorObject['error'];
				}
			}

			// Rule 3: Minimum Length
		/**
			if (error === '' && field.minLength && value.length < field.minLength ) {
				error =  field.minLengthMsg || '';
			}
		 */




			// =================End Error RULES=================

			return error;
		},
		[stateValidatorSchema]
	);




	// Set Initial Error State
	// When hooks was first rendered...
	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const setInitialErrorState = useCallback(() => {
		const errorArray = Object.keys(errors);
		errorArray.map(name => {
				setErrors(prevState => {
					/**
					 * {quoteName: "Name is required.",
					 * quoteEmail: "Email is required.",
					 * quoteService: "You must select a valid service.",
					 * quoteBudget: "You must select a valid budget plan."}
					 */
					const obj = { ...prevState, [name]: validateFormFields(name, values[name]) };
					return obj;
				});
			});
	},[errors, values, validateFormFields]);



	// Used to disable submit button if there's a value in errors
	// or the required field in state has no value.
	// Wrapped in useCallback to cached the function to avoid intensive memory leaked
	// in every re-render in component
	const validateErrorState = useCallback(() => {
		// If it finds an array element where the function returns a true value, some() returns
		// true (and does not check the remaining values Otherwise it returns false
		const keyErrorsArray = Object.values(errors);
		const final = keyErrorsArray.some(error => error);
		return final;
		},
		[errors]
	);

	// Event handler for handling changes in input.
	const handleOnChange = useCallback(event => {

			// Set validity to true => error in the form
			setValidity(true);


			const name = event.target.name;
			const value = event.target.value;

			// `error` will be a string which returns from the `validateFormFields` function
			const error = validateFormFields(name, value);
			/**
			 * Remember Remember Remember: When this line will update the following state then
			 * in your place where you are using hook like this
			 * const { values,errors,fieldTouch } = useFormHandle();
			 * You will get the update values of destructure properties and it will render on your
			 * UI.
			 */
			setValues((prevState) => ({ ...prevState, [name]: value }));
			setErrors((prevState) => ({ ...prevState, [name]: error }));
			setFieldTouch((prevState) => ({ ...prevState, [name]: true }));
		},
		[validateFormFields]
	);

	const handleOnSubmit = useCallback(
		event => {

			/**
			 * Remember: A <form /> / <input /> element has a checkValidity() method which returns false
			 * when the form is considered invalid and true when it is valid.
			 * A form is considered invalid when at least one of its input elements is invalid.
			 * -------
			 * It return `true` when one input in the form is invalid
			 * if (event.target.checkValidity() === false) {
			 * 		event.preventDefault();
			 * 		event.stopPropagation();
			 * }
			 * Add class `was-validated` on the form
			 */
			event.preventDefault();
			// Making sure that there's no error in the state
			// before calling the submit callback function
			// If it returns true it means there's an error string in the error array so make it false
			if (!validateErrorState()) {
				if (submitFormCallback) {
					/**
					 * `values` are passed in the callback
					 *  {quoteName: "Ahmad",
					 *  quoteEmail: "h@h.com",
					 *  quoteService: "enterprise",
					 *  quoteBudget: "plan-1"}
					 */
					setValidity(false);
					submitFormCallback(values);
				}
			}
			// This is very important When user didn't touch any field and try to submit the form
			// then we will manually convert all fields are touched. Because when the value of
			// all field becomes touch/true then all errors will show on the form.
			else {
					setValidity(true);
					/**
					 * `errors` are passed in callback
					 * {quoteName: "",
					 * quoteEmail: "",
					 * quoteService: "Please select a valid select",
					 * quoteBudget: "Please select a valid select"}
					 */
					/**
					 * `fieldTouch` fields are passed in the callback
					 * {quoteName: true,
					 * quoteEmail: true,
					 * quoteService: false,
					 * quoteBudget: false}
					 */
					// Now convert are `fieldTouch` to true
					const fieldsKey = Object.keys(fieldTouch);
					fieldsKey.map(name => {
					setFieldTouch(prevState => {
						const obj = { ...prevState, [name]: true };
						return obj;
					});
				});
			}
		},
		[validateErrorState, submitFormCallback, values, fieldTouch]
	);


	// useEffect hooks


	// Get a local copy of stateSchema
	useEffect(() => {

		setStateSchema(stateSchema);
		setInitialErrorState();
	}, []);  // eslint-disable-line


	// After Form submission please clear the form fields
	// useCallback is used to memoize a function. You can think of a and b (or anything used in the
	// second argument of useCallback) as the keys to the memoized function. When either a or b change,
	// a new function is created.
	const clear = useCallback(() => {
		setValues(getPropValues(state, VALUE));
		setErrors(getPropValues(state, ERROR));
		setFieldTouch(getPropValues(state));

	}, [state]);


	return {
		handleOnChange,
		handleOnSubmit,
		values,
		errors,
		clear,
		validity,
		setValues,
		setErrors,
		fieldTouch
	};
};


//#endregion Hook
