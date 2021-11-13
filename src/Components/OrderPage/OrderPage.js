import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const OrderPage = () => {
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user, loading } = useAuth();

    useEffect(() => {
        fetch(`https://murmuring-beyond-78221.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }, [id]);



    const onSubmit = data => {
        data.name = user.displayName;
        data.email = user.email;
        data.status = 'pending'
        data.productName = product.name;
        data.productId = product._id;
        fetch('https://murmuring-beyond-78221.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            {
                !loading ? <div>
                    <div className="px-20 py-5 min-h-screen flex items-start gap-5">
                        <div className="w-6/12 flex flex-col items-end text-right">
                            <img className="w-3/6 border border-gray-200 shadow" src={product.img} alt="" />
                            <h2 className="text-2xl font-bold mt-2 mb-1">{product.name}</h2>
                            <p className="text-lg font-semibold mb-3">{product.shortDesc}</p>
                            <p className="text-lg">{product.desc}</p>
                        </div>
                        <div className="w-6/12">
                            <form className="w-full flex items-start flex-col" onSubmit={handleSubmit(onSubmit)}>
                                {/* <h2 className="text-2xl font-bold">Order Now</h2> */}
                                <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("name")} value={user?.displayName} disabled placeholder="Name" />
                                <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="email" {...register("email")} value={user?.email} disabled placeholder="Email" />
                                <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("phone", { required: true })} placeholder="Phone" />
                                <div className="w-full flex items-center gap-3">
                                    <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("address", { required: true })} placeholder="Address" />
                                    <input className="bg-gray-200 px-5 py-3 block w-6/12 outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("zipCode", { required: true })} placeholder="Zip Code" />
                                </div>
                                <textarea className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("note")} placeholder="Short note" />
                                <button className="bg-yellow-500 text-gray-900 px-5 py-3 block w-full outline-none rounded my-2 text-xl font-semibold" type="submit">Place Order</button>
                            </form>
                        </div>
                    </div>
                </div> : <p>Loading....</p>
            }
        </>
    );
};

export default OrderPage;