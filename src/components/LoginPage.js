import React, {useState, useContext, useEffect} from 'react';
import { Button } from './generics/Button'
import AuthContext from './auth/auth-context';
import Card from './generics/Card'
import "../css/forms.css";
import axios from 'axios';



const LoginPage = ({history})=>{
    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const authCtx = useContext(AuthContext);

    const [fullName, setFullName] = useState('');
    const [email, setNewEmail] = useState('');
    const [password, setNewPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleEmailChange = (e)=>{
        //check if input is not empty string
        setNewEmail(e.target.value);

        // setFormIsValid(
        //     e.target.value.includes('@') && enteredPassword.trim().length > 6
        // );
        setFormIsValid(
            e.target.value.includes('@') && password.trim().length > 6
        );
    }
    const handlePasswordChange =(e)=>{
         //check if input is not empty string
        setNewPassword(e.target.value);

        // setFormIsValid(
        //     enteredEmail.includes('@') && e.target.value.trim().length > 6
        // );
        setFormIsValid(
            email.includes('@') && e.target.value.trim().length > 6
        );
    }

    // const validateEmailHandler = () => {
    //     setEmailIsValid(enteredEmail.includes('@'));
    // };
    const validateEmailHandler = () => {
        setEmailIsValid(email.includes('@'));
    };
    
    // const validatePasswordHandler = () => {
    //     setPasswordIsValid(enteredPassword.trim().length > 6);
    // };
    const validatePasswordHandler = () => {
        setPasswordIsValid(password.trim().length > 6);
    };

    const loginFunc = (e)=>{
        e.preventDefault()
       axios.post("http://localhost:4000/user/signup", {fullName, email, password})
       .then(res=>{
           console.log(res)
           setSuccess(true)
       })
       .catch(error =>{
           console.log(error)
           setFailure(true)
       })
    }

    const handleLogin = (e)=>{
        
        e.preventDefault()
        const loginData = {
            email: enteredEmail,
            password: enteredPassword
        }
        if(formIsValid){
            authCtx.onLogin(loginData);
        
            if(authCtx.isLoggedIn){
                history.push('/dashboard')
            }else{
                history.push('/')
            }
            // console.log(authCtx.isLoggedIn)
            // console.log(loginData)
        }else{
            console.log('credentials wrong')
        }
        
       
        
        setEmail('');
        setPassword('');
    }

    return(
        <Card className='login'>
            <div className='login_form_div'>
                <form onSubmit = {loginFunc}>
                   { isLogin && <div>
                        <h3>Welcome back. Login to continue</h3>
                    </div>}
                    { !isLogin && <div>
                        <h3>Welcome. Signup to create account</h3>
                    </div>}
                   { success && <p>Your signup has been successfull</p>}
                   { failure && <p>Your signup has failed</p>}
                    {!isLogin && <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="fullName_section">Full Name: </label>
                        <input value={fullName} type='text' placeholder='Enter your full name' id='fullName_section'onChange={(e)=>setFullName(e.target.value)}/>
                    </div>}
                    <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="email_section">Enter Email: </label>
                        <input value={email} type='text' placeholder='Enter your Email' id='email_section'onChange={handleEmailChange} onBlur={validateEmailHandler} />
                    </div>
                    <div className={`input-div control ${passwordIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="password_section">Enter Password: </label>
                        <input value={password} type='password' placeholder='Enter your password' id='password_section' onChange={handlePasswordChange} onBlur={validatePasswordHandler} />
                    </div>
                    <div className='btn-div'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit' disabled={!formIsValid} >Log in</Button>
                    </div>
                    { !isLogin && <div>
                        <span>Already have an account? <Button buttonStyle='btn--outline' buttonSize='btn--small' onClick={()=>setIsLogin(true)}>Login</Button></span>
                    </div>}
                    { isLogin && <div>
                        <span>Don't have an account yet? <Button buttonStyle='btn--outline' buttonSize='btn--small' onClick={()=>setIsLogin(false)}>SignUp</Button></span>
                    </div>}
                </form>
            </div>
        </Card>
    )

}
export default LoginPage