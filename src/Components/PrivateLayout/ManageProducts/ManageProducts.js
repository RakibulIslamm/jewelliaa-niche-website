import React, { useEffect, useState } from 'react';
import TableRow from './TableRow/TableRow';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://murmuring-beyond-78221.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    const handleDeleteProduct = (id) => {
        fetch(`https://murmuring-beyond-78221.herokuapp.com/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const restProduct = products.filter(product => product._id !== id);
                    setProducts(restProduct);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="w-full pt-5 pb-10">
            <div className="w-full px-12">
                <h2 className="text-4xl font-bold py-4">Product List</h2>
                <div className="flex flex-col text-left">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="text-left">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Id</th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        loading ? <p className="text-lg font-bold py-5 px-5">Loading...</p> : !products.length ? <p className="text-lg font-bold py-5 px-5">No product found</p> : <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                products.slice().reverse().map(product => <TableRow key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></TableRow>)
                                            }
                                        </tbody>
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ManageProducts;