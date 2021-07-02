import React from 'react';
import LoginPage from './LoginPage'
import { Redirect, useLocation } from 'react-router';

const Login = ()=>{
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { state } = useLocation()

    const handleLoginAuth = (email, password)=>{

    }
    
    const login = ()=> fakeAuth.authenticate(()=>{
        setRedirectToReferrer(true)
    })
    if (redirectToReferrer === true) {
        // if the user was redirected there from a previous route, 
        // once they authenticate, they’re taken back to that original route.
        return <Redirect to={state?.from || '/'} />
    }

    return(
        <LoginPage onLogIn={handleLoginAuth} />
    )
}
export default Login