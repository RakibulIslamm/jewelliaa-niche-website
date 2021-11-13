import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import img from '../../images/Login-amico.svg'
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const history = useHistory();
    const { login, error, loading, setError } = useAuth();

    const onSubmit = data => {
        const { email, password } = data;
        login(email, password, location, history)
    };

    useEffect(() => {
        setError('')
    }, [setError]);

    return (
        <div className="-mt-12">
            <div className="px-20 xs:px-5 sm:px-10 min-h-screen flex justify-between items-center">
                <div className="w-1/2 xs:hidden sm:hidden">
                    <img className="w-10/12" src={img} alt="" />
                </div>
                <div className="w-1/2 xs:w-full sm:w-full">
                    <h2 className="text-4xl font-bold my-5 text-gray-600 text-center">Hello, <br /> Welcome back</h2>
                    <form className="w-full flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="email" {...register("email", { required: true })} placeholder="Email" />
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="password" {...register("password", { required: true })} placeholder="Password" />
                        <p className="text-red-600 w-8/12 text-left">{error}</p>
                        <button className="bg-yellow-500 text-gray-900 px-5 py-3 block w-8/12 xs:w-full outline-none rounded my-2 text-xl font-semibold" type="submit">{loading ? 'loading...' : 'Login'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;