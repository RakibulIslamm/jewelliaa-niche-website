import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import img from '../../images/signup.svg'
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { signUp, error, setError, loading } = useAuth();

    const onSubmit = data => {
        setError('')
        const { name, email, password } = data;
        if (data.password !== data.password2) {
            setError("Password didn't match");
        }
        else {
            signUp(email, password, name, history);
        }
    };

    useEffect(() => {
        setError('')
    }, [setError]);

    return (
        <div className="-mt-12">
            <div className="px-20 xs:px-5 sm:px-10 min-h-screen flex justify-between items-center">
                <div className="w-1/2 xs:w-full sm:w-full">
                    <h2 className="text-4xl font-bold my-5 text-gray-600 text-center">Create an account</h2>
                    <form className="w-full flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("name", { required: true })} placeholder="Full Name" />
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="email" {...register("email", { required: true })} placeholder="Email" />
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="password" {...register("password", { required: true })} placeholder="Password" />
                        <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="password" {...register("password2", { required: true })} placeholder="Confirm Password" />
                        <p className="text-red-600 w-8/12 text-left">{error}</p>
                        <button className="bg-yellow-400 text-black px-5 py-3 block w-8/12 xs:w-full outline-none rounded my-2 text-xl font-semibold" type="submit">{loading ? 'Loading...' : 'Sign Up'}</button>
                    </form>
                </div>
                <div className="w-1/2 xs:hidden sm:hidden">
                    <img className="w-10/12" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;