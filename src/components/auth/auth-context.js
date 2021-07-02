import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: ()=>{},
  onLogin: (email, password)=>{}
});

export const AuthContextProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
      
      if(storedUserLoggedInInfo === '1'){
          setIsLoggedIn(true)
      }
    }, []);

    const logOutHandler = ()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = ()=>{
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return(
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logOutHandler,
                onLogin: loginHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;