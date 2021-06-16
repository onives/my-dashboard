import React, {useState} from 'react';
import LoginPage from './LoginPage';
import Card from './generics/Card'


const LoginLayout = ()=>{
    const [user, setUser] = useState([]);

    const handleLogin = (loginCredentials)=>{
        setUser([loginCredentials, ...user])
    }
    return(
        <Card className='login'>
            <LoginPage onLogIn={handleLogin}/>
        </Card>
    )
};

export default LoginLayout;