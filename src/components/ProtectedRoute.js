// It has the same API as <Route />.
// It renders a <Route /> and passes all the props through to it.
// It checks if the user is authenticated. If they are, it renders the “component” prop. 
// If not, it redirects the user to /login.

import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import AuthContext from './auth/auth-context';

const ProtectedRoute = ({ children, ...rest })=>{
    const authCtx = useContext(AuthContext);

    return(
        <Route {...rest} render={({ location })=>{
           
            return authCtx.isLoggedIn === true
            ? children 
            : <Redirect to={{
                pathname: '/',
                state: { from: location }
            }}
             />
        }}/>

    )
}

export default ProtectedRoute