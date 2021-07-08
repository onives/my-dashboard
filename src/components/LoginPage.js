import React, {useState, useContext} from 'react';
import { Button } from './generics/Button'
import AuthContext from './auth/auth-context';
import Card from './generics/Card'
import "../css/forms.css";



const LoginPage = ({history})=>{
    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const authCtx = useContext(AuthContext);
    


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
        authCtx.onLogin(loginData);
        if(authCtx.isLoggedIn){
            history.push('/dashboard')
        }else{
            history.push('/')
        }
        console.log(authCtx.isLoggedIn)
        console.log(loginData)
        
        setEmail('');
        setPassword('');
    }

    return(
        <Card className='login'>
            <div className='login_form_div'>
                <form onSubmit = {handleLogin}>
                    <div>
                        <h3>Welcome back. Login to continue</h3>
                    </div>
                    <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="email_section">Enter Email: </label>
                        <input value={enteredEmail} type='text' placeholder='Enter your Email' id='email_section'onChange={handleEmailChange} onBlur={validateEmailHandler} />
                    </div>
                    <div className={`input-div control ${passwordIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="password_section">Enter Password: </label>
                        <input value={enteredPassword} type='password' placeholder='Enter your password' id='password_section' onChange={handlePasswordChange} onBlur={validatePasswordHandler} />
                    </div>
                    <div className='btn-div'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit' disabled={!formIsValid} >Log in</Button>
                    </div>
                </form>
            </div>
        </Card>
    )

}
export default LoginPage