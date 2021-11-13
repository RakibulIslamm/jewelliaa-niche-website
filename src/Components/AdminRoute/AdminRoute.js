import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    if (admin === null) {
        return <div className="w-full py-44 flex justify-center items-center">
            <p>Loading...</p>
        </div>
    }

    console.log(admin);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user && admin ? children : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default AdminRoute;