import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const { loading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="py-10">
            <div className="px-20 min-h-screen">
                <h1 className="text-4xl font-bold text-center">All Products</h1>
                {
                    loading ? <div className="flex justify-center items-center py-40">
                        <h1 className="text-xl font-bold">Loading...</h1>
                    </div> : <div className="grid grid-cols-3 gap-8 pt-10">
                        {
                            products.slice().reverse().map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;