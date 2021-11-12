import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Rating } from 'react-simple-star-rating'


const Review = () => {
    const [rating, setRating] = useState(5)
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const handleRating = (rate) => {
        setRating(rate);
    }

    const onSubmit = data => {
        data.name = user?.displayName;
        data.rating = rating;
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // console.log(data);
    };


    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="-mt-20 w-full">
                <h2 className="text-3xl font-bold text-center">Rate us</h2>
                <form className="flex justify-center items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input className="bg-gray-200 px-5 py-3 block w-5/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" value={user?.displayName} {...register("name", { required: true, disabled: true })} placeholder="Name" />
                    <textarea className="bg-gray-200 px-5 py-3 block w-5/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("desc", { required: true })} />
                    <Rating onClick={handleRating} ratingValue={rating} className="text-left w-5/12" />
                    <button className="bg-yellow-500 text-gray-900 px-5 py-3 block w-5/12 outline-none rounded my-2 text-xl font-semibold" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;