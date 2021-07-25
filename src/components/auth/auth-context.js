import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    onLogout: ()=>{},
    onlogin: (token, expirationTime)=>{},
    
});

//calculating time for a user to be automatically logged out
const calculateRemainingTime = (expirationTime)=>{
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration
}

const retrieveStoredToken = ()=>{
    const storedToken = localStorage.getItem('token');
    const storedExpDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {token: storedToken, duration: remainingTime};
}

export const AuthContextProvider = ({children})=>{
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }
    
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logOutHandler = useCallback(()=>{
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    }, []);

    const loginHandler = (token, expirationTime)=>{
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime)

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logOutHandler, remainingTime)
    }

    useEffect(()=>{
        if(tokenData){
            logoutTimer = setTimeout(logOutHandler, tokenData.duration)
        }
    }, [tokenData, logOutHandler])
    return(
        <AuthContext.Provider
            value={{
                token: token,
                isLoggedIn: userIsLoggedIn,
                onLogout: logOutHandler,
                onLogin: loginHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;