import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    onLogout: ()=>{},
    onlogin: (token)=>{},
    // onLogin: (email, password)=>{},
});

export const AuthContextProvider = ({children})=>{
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const logOutHandler = ()=>{
        setToken(null)
    }

    const loginHandler = (token)=>{
        setToken(token)
    }

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