import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import PrivateHeader from '../Shared/PrivateHeader/PrivateHeader';

const PrivateLayout = () => {
    return (
        <>
            <PrivateHeader />
            <Dashboard></Dashboard>
        </>
    );
};

export default PrivateLayout;