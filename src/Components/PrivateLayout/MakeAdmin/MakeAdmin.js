import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const { user, error, setError } = useAuth();
    const onSubmit = (data) => {
        // console.log(data);
        fetch(`http://localhost:5000/make-admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("successfully maded admin");
                }
                else if (data.error) {
                    setError(data.error);
                }
            })
            .catch(error => setError(error))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="-mt-20">
                <h2 className="text-3xl font-bold">Make an admin</h2>
            </div>
            <p>{error}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 xs:w-full sm:w-full flex items-center flex-col">
                <input className="bg-gray-200 px-5 py-3 block w-8/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="email" {...register("email", { required: true })} placeholder="Email" />
                <button className="bg-yellow-500 text-gray-900 px-5 py-3 block px-5 outline-none rounded my-2 text-xl font-semibold" type="submit">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;