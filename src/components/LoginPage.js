import React, {useState} from 'react';
import { Button } from './generics/Button'
import { Link } from 'react-router-dom';
import "../css/forms.css";



const LoginPage = ({onLogIn})=>{
    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
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
                <div className='input-div'>
                    <label htmlFor="email_section">Enter Email: </label>
                    <input value={enteredEmail} type='text' placeholder='Enter your Email' id='email_section'onChange={handleEmailChange} />
                </div>
                <div className='input-div'>
                    <label htmlFor="password_section">Enter Password: </label>
                    <input value={enteredPassword} type='text' placeholder='Enter your password' id='password_section' onChange={handlePasswordChange} />
                </div>
                <div className='btn-div'>
                    <Link to = '/dashboard'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Log in</Button>
                    </Link>
                </div>
            </form>
          
        </div>
    )

}
export default LoginPage