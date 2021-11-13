import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="w-full py-44 flex justify-center items-center">
            <p>Loading...</p>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default PrivateRoute;