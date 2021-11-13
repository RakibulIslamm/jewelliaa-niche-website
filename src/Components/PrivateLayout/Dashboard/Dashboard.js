import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {

    const { user } = useAuth()

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="-mt-20">
                <h2 className="text-3xl font-bold">Welcome {user?.displayName}</h2>
            </div>
        </div>
    );
};

export default Dashboard;