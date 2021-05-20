import React, {useState} from 'react';
import LoginPage from './LoginPage'

const LoginLayout = ()=>{
    const [user, setUser] = useState([]);

    const handleLogin = (loginCredentials)=>{
        setUser([loginCredentials, ...user])
    }
    return(
        <div>
            <LoginPage onLogIn={handleLogin}/>

        </div>
    )
};

export default LoginLayout;