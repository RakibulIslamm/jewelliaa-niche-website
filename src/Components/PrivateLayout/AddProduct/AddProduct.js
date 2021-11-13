import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    let { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://murmuring-beyond-78221.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added successfully');
                    reset()
                }
            })
    };


    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="">
                <h2 className="text-3xl font-bold">Add a new product</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 xs:w-full sm:w-full flex items-center flex-col">
                <div className="w-8/12 flex items-center xs:flex-col gap-3 xs:gap-0">
                    <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("name", { required: true })} placeholder="Product Title" />
                    <input className="bg-gray-200 px-5 py-3 block w-6/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("price", { required: true })} placeholder="Price" />
                </div>
                {errors?.name?.type === "required" && <p className="text-left text-red-600 w-8/12">Title is required</p>}
                {errors?.price?.type === "required" && <p className="text-left text-red-600 w-8/12">Price is required</p>}
                <input className="bg-gray-200 px-5 py-3 block w-8/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("shortDesc", { required: true, minLength: 30, maxLength: 60 })} placeholder="Short Dscription" />
                {errors?.shortDesc?.type === 'minLength' && <p className="text-left text-red-600 w-8/12">Minimum character is 30 max character is 60</p>}
                {errors?.shortDesc?.type === 'maxLength' && <p className="text-left text-red-600 w-8/12">Minimum character is 30 max character is 60</p>}
                <input className="bg-gray-200 px-5 py-3 block w-8/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("img", { required: true })} placeholder="Image url" />
                <textarea className="bg-gray-200 px-5 py-3 block w-8/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("desc", { required: true })} placeholder="Description" />
                <button className="bg-yellow-500 text-gray-900 py-3 block px-5 outline-none rounded my-2 text-xl font-semibold" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;