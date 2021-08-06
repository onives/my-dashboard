import React, {useContext} from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import AuthContext from './auth/auth-context';

const PublicRoute = ({ children, ...rest }) => {
    const authCtx = useContext(AuthContext);
    const { state } = useLocation()
    return (
        <Route
            {...rest}
            render={() => {
                console.log(authCtx.isLoggedIn)
                if (authCtx.isLoggedIn) {
                    return <Redirect to={state?.from || '/dashboard'} />;
                }

                return children;
            }}
        />
    );
};

export default PublicRoute;
