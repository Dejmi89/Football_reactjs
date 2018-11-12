import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../UI/form_fields';
import { validate } from '../../UI/misc.js';

class Enroll extends Component {

    state = {
        formError: false,
        fromSuccess: '',
        formData: {
            email:{
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    submitForm(){

    }

    updateForm(element) {
            const newFormdata = {...this.state.formData};
            const newElement = {...newFormdata[element.id]};

            newElement.value = element.event.target.value;

            let validData = validate(newElement);




            newFormdata[element.id] = newElement;
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];

            this.setState({
                formError: false, 
                formData : newFormdata 
            })
    }

    render() {
        return (
            <Fade >
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formData={this.state.formData.email }
                                change={(element)=> this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;