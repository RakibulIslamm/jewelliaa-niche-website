import React from 'react';
import { IoCloseSharp, } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const MobileMenu = ({ handleToggle, toggle }) => {
    const { user, logOut } = useAuth()
    const history = useHistory()

    return (
        <div className={`fixed z-10 top-0 right-0 ${toggle ? 'w-11/12 visible' : 'w-0 invisible'} min-h-screen bg-yellow-900 flex justify-center items-center transition-all delay-300`}>
            <button onClick={handleToggle} className="text-3xl text-white absolute top-5 left-5">
                <IoCloseSharp></IoCloseSharp>
            </button>
            <div className="flex justify-center items-center flex-col gap-3 text-white text-2xl">
                <Link onClick={handleToggle} to='/'>Home</Link>
                <Link onClick={handleToggle} to='/shop'>Shop</Link>
                <Link onClick={handleToggle} to='/my-orders'>My Orders</Link>
                {!user && <Link onClick={handleToggle} to='/Login'>Login</Link>}
                {!user && <Link onClick={handleToggle} to='/register'>Register</Link>}
                {user && <Link onClick={handleToggle} to='/dashboard'>Dashboard</Link>}
                {user && <button onClick={() => logOut(history)}>Log Out</button>}
            </div>
        </div>
    );
};

export default MobileMenu;