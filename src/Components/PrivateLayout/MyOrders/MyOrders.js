import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrderRow from './MyOrderRow/MyOrderRow';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://murmuring-beyond-78221.herokuapp.com/user-orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [user]);

    const handleOrderDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`https://murmuring-beyond-78221.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order Deleted');
                        const rest = myOrders.filter(order => order._id !== id);
                        setMyOrders(rest);
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className=" w-full px-12">
                <h2 className="text-3xl font-bold py-3 text-center">My Orders</h2>
                <div className="flex flex-col text-left">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="text-left">
                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Product Name</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Product Id</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Status</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            myOrders.map(myOrder => <MyOrderRow key={myOrder._id} myOrder={myOrder} handleOrderDelete={handleOrderDelete}></MyOrderRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;