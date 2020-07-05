//#region Global imports
import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Input, Button } from 'reactstrap';
//#endregion Global imports

//#region Local imports
import { useFormHandle } from '@hooks';
import {toastSuccess} from '@toasts';
//#endregion Local imports





//#region Component


export const Hero = () => {



	// Schema is an object key value-pair contains the value of an input and the current error if any.
	const formSchema = {
		quoteName: { value: '', error: '' },
		quoteEmail: { value: '', error: '' },
		quoteService: { value: '', error: '' },
		quoteBudget: { value: '', error: '' },
	};

	// Service Array
	const service = ['enterprise', 'dedicated-development', 'mobile-development', 'web-development', 'data-services', 'ui-ux'];

	// Budget Array
	const budget = ['plan-1', 'plan-2', 'plan-3', 'plan-4', 'plan-5'];

	// Create a validation in your formSchema
	// Property should be the same in your formSchema in-order validation works.
	// validator prop accepts a function that you can be used to validate your state via regex.
	const formValidatorSchema = {
		quoteName: {
			required: true,
			requiredMsg: 'Name is required.',
			validator: {
				func: (value: string) => /^[A-Z][A-Za-z.'\- ]+$/.test(value),
				error: 'Name should start with uppercase and then lower / upper case.',
			},
		},
		quoteEmail: {
			required: true,
			requiredMsg: 'Email is required.',
			validator: {
				func: (value: string) => /^\w+@\w+\.\w+$/.test(value),
				error: 'Invalid email format.',
			},
		},
		// Validate the select by checking that the value is in the array
		quoteService: {
			required: true,
			validator: {
				func: (value: string) => service.some(service => service === value),
				error: 'You must select a valid service.',
			},
		},
		quoteBudget: {
			required: true,
			validator: {
				func: (value: string) => budget.some(budget => budget === value),
				error: 'You must select a valid budget plan.',
			},

		},

	};

	// Passed your formSchema and formValidatorSchema in useFormHandle hooks.
	// The 3rd parameter is (optional) a callback function to be called when you submit
	// your form if all fields is valid.




	const [loading, setLoading] = useState<boolean>(false);



	const onSubmitForm = () => {
		// Set the delay in ms to close the toast automatically.
		const delay = 9000;
		/**
		 * `values` that we get are
		 *  {quoteName: "Ahmad",
		 *  quoteEmail: "h@h.com",
		 *  quoteService: "enterprise",
		 *  quoteBudget: "plan-1"}
		 */
		setLoading(true);
		setTimeout(() => {
			toastSuccess('Your Quote has been successfully submit. Wait we will contact you.');
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			clear();
			setLoading(false);
		}, delay);
	};

	const { clear, values, errors, fieldTouch, validity, handleOnChange, handleOnSubmit } =
		// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/ban-ts-ignore
		// @ts-ignore
		useFormHandle(formSchema, formValidatorSchema, onSubmitForm);

	const { quoteName, quoteEmail, quoteService, quoteBudget } = values;





	return (
		<div className={ classNames('section-hero')}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6">
						<div className="jumbotron">
							<h1 className="jumbotron__heading">Excellent IT services and digital experiences</h1>
							<p className="jumbotron__subtitle">A company of small individuals that deliverer you to collaborative services and sprints with powerful digital solutions and experiences.</p>
							<div className="jumbotron__contact-wrapper">
								<Link href="/contact">
									<a className="btn btn-primary jumbotron__contact">Contact us</a>
								</Link>
							</div>


							{/*<Link href="/">*/}
							{/*	<a className="title__link">*/}
							{/*			<span className="title__svg title__svg--before">*/}
							{/*				<FaLongArrowAltRight size="1.2em"/>*/}
							{/*			</span>*/}
							{/*		Discover us No 1. Service Provider*/}
							{/*		<span className="title__svg title__svg--after">*/}
							{/*				<FaLongArrowAltRight size="1.2em"/>*/}
							{/*			</span>*/}
							{/*	</a>*/}
							{/*</Link>*/}
						</div>

					</div>
					{/* margin-left, margin-right help us to make content center of the column*/}
					<div className="col-lg-5 mr-auto ml-auto col-md-6">
						<div className="quote-form">
							<div className="q-text u-s-mb-24">
								<h5 className="q-heading u-s-mb-12">Get a Quote Now</h5>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								<p className="q-text u-s-mb-16">It's our pleasure to have a chance to cooperate.</p>
							</div>
							<form onSubmit={handleOnSubmit} method="post" className={ validity ? 'was-validated' : ''}>



								<div className="u-s-mb-20 position-relative">
									<Input type="text" name="quoteName" placeholder="Name *" required
										   autoComplete="off" value={quoteName} onChange={handleOnChange}/>
									{errors.quoteName && fieldTouch.quoteName &&
									<div className="invalid-tooltip">{errors.quoteName}</div>}
								</div>



								<div className="u-s-mb-20 position-relative">
									<Input type="email" name="quoteEmail" placeholder="Email *" required
										   autoComplete="off" value={quoteEmail} onChange={handleOnChange}/>
									{errors.quoteEmail && fieldTouch.quoteEmail &&
									<div className="invalid-tooltip">{errors.quoteEmail}</div>}
								</div>


								{/* Yes We can use required attribute in HTML5.
								 But remember, first value should be empty.
								 <select required>
									<option value="">Please select</option>
									<option value="first">First</option>
								</select>
								  */}
								<div className="u-s-mb-20 position-relative">
									<Input type="select" name="quoteService" required value={quoteService}
										   onChange={handleOnChange}>
										<option value="" disabled>Which Service Are You Interested In? *</option>
										<option value="enterprise">Enterprise Software Solutions</option>
										<option value="dedicated-development">Dedicated Development Team</option>
										<option value="mobile-development">Mobile App Development</option>
										<option value="web-development">Web App Development</option>
										<option value="data-services">Data Services</option>
										<option value="ui-ux">UI / UX</option>
									</Input>
									{errors.quoteService && fieldTouch.quoteService &&
									<div className="invalid-tooltip">{errors.quoteService}</div>}
								</div>



								<div className="u-s-mb-20 position-relative">
									<Input type="select" name="quoteBudget" required value={quoteBudget}
										   onChange={handleOnChange}>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<option value="" disabled>What's Your Estimated Budget? *</option>
										<option value="plan-1">$50,000 - $100,000</option>
										<option value="plan-2">$100,000 - $200,000</option>
										<option value="plan-3">$200,000 - $500,000</option>
										<option value="plan-4">$500,000 or above</option>
										<option value="plan-5">Request Budget Guidance</option>
									</Input>
									{errors.quoteBudget && fieldTouch.quoteBudget &&
									<div className="invalid-tooltip">{errors.quoteBudget}</div>}
								</div>



								<div>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									<Button color="primary" type="submit" className="quote-btn" disabled={loading}>
										{/*{loading && <Spinner className="spinner--sm u-s-mr-3"/>}*/}
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<span>Let's Start A Conversation</span>
									</Button>
								</div>


							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};
//#endregion Component
