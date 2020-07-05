//#region Global imports
import React,{ useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Button, Input } from 'reactstrap';
//#endregion Global imports



//#region Local imports
import { Spinner } from '@components';
import { useFormHandle } from '@hooks';
import {toastSuccess} from '@toasts';
//#endregion Local imports


//#region Component
export const Contact = () => {


// Schema is an object key value-pair contains the value of an input and the current error if any.
    const formSchema = {
        contactName: { value: '', error: '' },
        contactEmail: { value: '', error: '' },
        contactService: { value: '', error: '' },
        contactNeed: { value: '', error: '' },
    };

    // ServiceArray
    const service = ['enterprise', 'dedicated-development', 'mobile-development', 'web-development', 'data-services', 'ui-ux'];

    // Create a validation in your formSchema
    // Property should be the same in your formSchema in-order validation works.
    // validator prop accepts a function that you can be used to validate your state via regex.
    const formValidatorSchema = {
        contactName: {
            required: true,
            requiredMsg: 'Name is required.',
            validator: {
                func: (value: string) => /^[A-Z][A-Za-z.'\- ]+$/.test(value),
                error: 'Name should start with uppercase and then lower / upper case.',
            },
        },
        contactEmail: {
            required: true,
            requiredMsg: 'Email is required.',
            validator: {
                func: (value: string) => /^\w+@\w+\.\w+$/.test(value),
                error: 'Invalid email format.',
            },
        },
        // Validate the select by checking that the value is in the array
        contactService: {
            required: true,
            validator: {
                func: (value: string) => service.some(service => service === value),
                error: 'You must select a valid service.',
            },
        },
        quoteNeed: {
            required: false,
        },

    };

    // Passed your formSchema and formValidatorSchema in useFormHandle hooks.
    // The 3rd parameter is (optional) a callback function to be called when you submit
    // your form if all fields is valid
    const [loading, setLoading] = useState<boolean>(false);



    const onSubmitForm = () => {
        // Set the delay in ms to close the toast automatically.
        const delay = 9000;
        setLoading(true);
        setTimeout(() => {
            toastSuccess('Your Quote has been successfully submit. Wait we will contact you.');
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            clear();
            setLoading(false);
        }, delay);
    };

    const { clear, values, errors, fieldTouch, validity, handleOnChange, handleOnSubmit } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useFormHandle(formSchema, formValidatorSchema, onSubmitForm);

    const { contactName, contactEmail, contactService, contactNeed } = values;





    return (
        <div className='contact'>


            {/* Container */}
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="contact__wrap">
                            <h3 className="contact__heading">Need a hand?</h3>
                            <p className="contact__subtitle">Reach out to the world’s most reliable IT services.</p>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-6 u-s-mb-30">

                        <div className="c__form-wrap">


                            <form onSubmit={handleOnSubmit} method="post" className={ validity ? 'was-validated' : ''}>

                                <div className="field">

                                    {/* Horizontal Fields */}
                                    <div className="field__body">
                                        <div className="field position-relative">
                                            <Input name="contactName" type="text" placeholder="Name *" required
                                                   autoComplete="off" value={contactName} onChange={handleOnChange} />
                                            { errors.contactName && fieldTouch.contactName &&
                                            <div className="invalid-tooltip">{ errors.contactName }</div>}
                                        </div>
                                        <div className="field position-relative">
                                            <Input name="contactEmail" type="email" placeholder="Email *" required autoComplete="off" value={contactEmail} onChange={handleOnChange} />
                                            { errors.contactEmail && fieldTouch.contactEmail &&
                                            <div className="invalid-tooltip">{ errors.contactEmail }</div> }
                                        </div>
                                    </div>
                                </div>


                                {/* SelectBox */}
                                <div className="field position-relative">
                                    <Input type="select" name="contactService" required value={contactService}
                                           onChange={handleOnChange}>
                                        <option value="" disabled>Which Service Are You Interested In? *</option>
                                        <option value="enterprise">Enterprise Software Solutions</option>
                                        <option value="dedicated-development">Dedicated Development Team</option>
                                        <option value="mobile-development">Mobile App Development</option>
                                        <option value="web-development">Web App Development</option>
                                        <option value="data-services">Data Services</option>
                                        <option value="ui-ux">UI / UX</option>
                                    </Input>
                                    {errors.contactService && fieldTouch.contactService &&
                                    <div className="invalid-tooltip">{errors.contactService}</div>}
                                </div>

                                {/* TextArea */}
                                <div className="field position-relative">
                                    <Input type="textarea" className="contact-need" name="contactNeed" rows="6" placeholder='Please describe what you need.' value={contactNeed} onChange={handleOnChange}/>
                                </div>

                                <div>
                                    <Button color="primary" type="submit" className="contact-btn" disabled={loading}>
                                        { loading && <Spinner className="spinner--sm u-s-mr-10"/> }
                                        <span>Get a free consultation</span>
                                    </Button>
                                </div>

                            </form>


                        </div>
                    </div>
                    <div className="col-lg-5 ml-auto">


                        <div className="info-1">

                            <h3 className="info-1__rating-h3">4.9 / 5.0</h3>

                            <div className="info-1__star-wrap">
                                <span>
                                    <FaStar/>
                                </span>
                                <span>
                                    <FaStar/>
                                 </span>
                                <span>
                                    <FaStar/>
                                </span>
                                <span>
                                    <FaStar/>
                                </span>
                                <span>
                                    <FaStar/>
                                </span>
                            </div>

                            <p className="info-1__text-p">by 100+ customers form the Globe</p>

                        </div>



                        <div className="info-2">

                            <h6 className="info-2__text-h6">Reach out now!</h6>

                            <h3 className="info-2__h3">
                                <a href="tel:+007676565">(+92) 308-0496028</a>
                            </h3>

                            <div className="info-2__text-2">Start the collaboration with us while figuring out the best solution based on your needs.</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>);
};
//#endregion Component
