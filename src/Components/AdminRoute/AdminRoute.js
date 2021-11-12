import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();
    if (!admin.admin) {
        return <div className="w-full py-44 flex justify-center items-center">
            <p>Loading...</p>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user && admin.admin ? children : <Redirect
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