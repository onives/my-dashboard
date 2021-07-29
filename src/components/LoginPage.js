import React, {useState, useContext} from 'react';
import { Button } from './generics/Button';
import AuthContext from './auth/auth-context'; 
import Card from './generics/Card';
import "../css/forms.css";
import axios from 'axios';


const LoginPage = ({history})=>{
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const[isLoading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const handleEmailChange = (e)=>{
        //check if input is not empty string
        setEmail(e.target.value);
        setFormIsValid(
            e.target.value.includes('@') && password.trim().length > 6
        );
    }
    const handlePasswordChange =(e)=>{
         //check if input is not empty string
        setPassword(e.target.value);
        setFormIsValid(
            email.includes('@') && e.target.value.trim().length > 6
        );
    }

    const validateEmailHandler = () => {
        setEmailIsValid(email.includes('@'));
    };
    
    const validatePasswordHandler = () => {
        setPasswordIsValid(password.trim().length > 6);
    };

    const submitHandler = (e)=>{
        e.preventDefault()
        if(!email || !password) return
        setLoading(true)
        if(isLogin){
            axios.post("http://localhost:4000/user/login", {email, password})
            .then(res=>{
                setLoading(false)
                console.log(res)

                setTimeout(()=>{
                    setSuccess(false)
                    history.replace('/dashboard')
                }, 2000)
                const expTime = new Date(
                    //session to last for an hour => 3600 * 1000 (converted to miliseconds)
                    new Date().getTime() + (3600000)
                );
                authCtx.onLogin(res.data.token, expTime.toISOString());
                setSuccess(true)
            })
            .catch(error =>{
                setLoading(false)
                console.log(error)
                setTimeout(()=>{
                     setFailure(false)
                 }, 5000)
                setFailure(true)
            })
        }else {
            //    axios.post("https://my-dashboard-api.herokuapp.com/user/signup", {fullName, email, password})
            axios.post("http://localhost:4000/user/signup", {fullName, email, password})
            .then(res=>{
                setLoading(false)
                console.log(res)
                setTimeout(()=>{
                    setSuccess(false)
                    history.push('/dashboard')
                }, 2000)
                setSuccess(true)
                authCtx.onLogin(res.data.token);
            })
            .catch(error =>{
                setLoading(false)
                console.log(error)
                setTimeout(()=>{
                     setFailure(false)
                 }, 5000)
                setFailure(true)
            })
        }

       setFullName('');
       setEmail('');
       setPassword('');
    }

    return(
        <Card className='login'>
            <div className='login_form_div'>
                { !isLogin && success && <p className='successful-alert'>Your signup has been successfull</p>}
                { !isLogin && failure && <p className='unsuccessful-alert'>Your signup has failed</p>}
                { isLogin && failure && <p className='unsuccessful-alert'>Invalid Login Credentials</p>}
                {isLogin && success && <p className='successful-alert'>Your login has been sucessful</p>}
                <form onSubmit = {submitHandler}>
                   { isLogin && <div>
                        <h3>Welcome back. Login to continue</h3>
                    </div>}
                    { !isLogin && <div>
                        <h3>Welcome. Signup to create account</h3>
                    </div>}
                   

                   { !isLogin && <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="fullName_section">Enter Full Name: </label>
                        <input value={fullName} type='text' placeholder='Enter your full name' id='fullName_section'onChange={(e)=>setFullName(e.target.value)}/>
                    </div>}
                    <div className={`input-div control ${emailIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="email_section">Enter Email: </label>
                        <input value={email} type='text' placeholder='Enter your Email' id='email_section'onChange={handleEmailChange} onBlur={validateEmailHandler} />
                    </div>
                    <div className={`input-div control ${passwordIsValid === false ? 'invalid' : ''}`}>
                        <label htmlFor="password_section">Enter Password: </label>
                        <input value={password} type='password' placeholder='Enter your password' minLength="6" id='password_section' onChange={handlePasswordChange} onBlur={validatePasswordHandler} />
                    </div>
                    <div className='btn-div'>
                        {!isLoading && <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit' disabled={!formIsValid} >Proceed</Button>}
                        {isLoading && <p className="isLoading">Sending request... </p>}
                    </div>
                    { !isLogin && <div className='login-signup-span'>
                        <span>Already have an account? <Button buttonStyle='btn--outline' buttonSize='btn--small' onClick={()=>setIsLogin(true)}>login</Button></span>
                    </div>}
                    { isLogin && <div className='login-signup-span'>
                        <span>Don't have an account? <Button buttonStyle='btn--outline' buttonSize='btn--small' onClick={()=>setIsLogin(false)}>signup</Button></span>
                    </div>}
                </form>
            </div>
        </Card>
    )

}
export default LoginPage