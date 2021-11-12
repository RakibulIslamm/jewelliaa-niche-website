import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../../../images/logo.png'
import useAuth from '../../hooks/useAuth';
import { IoMenuSharp } from 'react-icons/io5'

const PublicHeader = () => {

    const history = useHistory()

    const { user, logOut } = useAuth();

    const navStyle = "text-xl font-medium";
    return (
        <div>
            <div className=" flex justify-between items-center px-20 xs:px-6 sm:px-10 py-3 border-b border-gray-300">
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img className="w-10" src={logo} alt="" />
                        <h1 className="text-3xl font-semibold">Jewelliaa</h1>
                    </div>
                </Link>
                <IoMenuSharp className="text-4xl text-black hidden xs:block sm:block" />
                <div className="flex items-center gap-5 xs:hidden sm:hidden">
                    <NavLink className={navStyle} to="/">Home</NavLink>
                    <NavLink className={navStyle} to="/shop">Shop</NavLink>
                    {
                        !user ? <span className="flex items-center gap-5">
                            <NavLink className={navStyle} to="/login">Login</NavLink>
                            <NavLink className={navStyle} to="/register">Register</NavLink>
                        </span> : <span className="flex items-center gap-5">
                            <NavLink className={navStyle} to="/my-orders">My Orders</NavLink>
                            <NavLink className={navStyle} to="/dashboard">Dashboard</NavLink>
                            <button onClick={() => logOut(history)} className={navStyle}>Log Out</button>
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;