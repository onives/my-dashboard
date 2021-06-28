import React, {useState, useEffect } from 'react';
import { Button } from './generics/Button'
import { Link } from 'react-router-dom';
import "../css/forms.css";



const LoginPage = ({onLogIn})=>{
    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        console.log('EFFECT RUNNING');
    
        return () => {
          console.log('EFFECT CLEANUP');
        };
    }, []);

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);

        setFormIsValid(
            e.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    }
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);

        setFormIsValid(
            enteredEmail.includes('@') && e.target.value.trim().length > 6
        );
    }

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };
    
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const handleLogin = (e)=>{
        e.preventDefault()
        const loginData = {
            email: enteredEmail,
            password: enteredPassword
        }
        onLogIn(loginData);
        setEmail('');
        setPassword('');
    }
    return(
        <div className='login_form_div'>
            <form onSubmit = {handleLogin}>
                <div>
                    <h3>Welcome back Admin. Login to continue</h3>
                </div>
                <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="email_section">Enter Email: </label>
                    <input value={enteredEmail} type='text' placeholder='Enter your Email' id='email_section'onChange={handleEmailChange} onBlur={validateEmailHandler} />
                </div>
                <div className={`input-div control ${passwordIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="password_section">Enter Password: </label>
                    <input value={enteredPassword} type='text' placeholder='Enter your password' id='password_section' onChange={handlePasswordChange} onBlur={validatePasswordHandler} />
                </div>
                <div className='btn-div'>
                    <Link to = '/dashboard'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit' disabled={!formIsValid}>Log in</Button>
                    </Link>
                </div>
            </form>
        </div>
    )

}
export default LoginPage