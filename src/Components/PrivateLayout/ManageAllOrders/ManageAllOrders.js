import React, { useEffect, useState } from 'react';
import OrdersRow from './OrdersRow/OrdersRow';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updatedOrder, setUpdatedOrder] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error))
    }, [updatedOrder]);

    const handleOrderDelete = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('Are you sure you want to delete?')
                if (proceed) {
                    if (data.deletedCount) {
                        alert('Order Deleted');
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }
                }
            })
            .catch(error => console.log(error))
    }

    const handleOrderApprove = (id) => {
        fetch(`http://localhost:5000/update-order`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const updated = orders.find(order => order._id === id);
                    setUpdatedOrder(updated);
                }
                console.log(data);
            })
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className=" w-full px-12">
                <h2 className="text-3xl font-bold py-3">This is manage all orders</h2>
                <div className="flex flex-col text-left">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="text-left">
                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Product Name & Id</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Phone & Email</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Status</th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider"></th>

                                            <th scope="col" className="px-6 py-3 text-left text-sm text-gray-900 font-bold uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            orders.map(order => <OrdersRow key={order._id} order={order} handleOrderDelete={handleOrderDelete} handleOrderApprove={handleOrderApprove}></OrdersRow>)
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

export default ManageAllOrders;