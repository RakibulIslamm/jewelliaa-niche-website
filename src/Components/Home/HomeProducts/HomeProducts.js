import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import useAuth from '../../hooks/useAuth';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const { loading } = useAuth();

    useEffect(() => {
        fetch('https://murmuring-beyond-78221.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="py-10">
            {
                !products.length ? <h1 className="text-xl font-bold text-center py-20">Loading...</h1> : <div className="px-20 xs:px-6 sm:px-10">
                    <h1 className="text-4xl font-bold text-center">Feature Products</h1>
                    {
                        loading ? <h1 className="text-xl font-bold text-center py-20">Loading...</h1> : <div className="grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-8 pt-10">
                            {
                                products.slice().reverse().slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default HomeProducts;