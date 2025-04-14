
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';



import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

//signupform
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            switch(error.code) {
                case 'auth/popup-closed-by-user':
                    alert('Closed by user');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            console.log(error);
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                // case await 'auth/popup-closed-by-user':
                //     alert('GooglePopup closed by user')
                //     break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                 
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} />
                
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} />
                <div className='buttons-container'>
                <Button 
                    buttonType='' 
                    type="submit">
                        Sign in
                </Button>
                <Button
                    type='button' 
                    onClick={signInWithGoogle} 
                    buttonType='google'>
                        Google sign in
                </Button>
                </div>
                <p style={{ padding: 50 }}>This function doesn't really make sense to have, but it is functioning</p>
            </form>
        </div>
    )
}


export default SignInForm;