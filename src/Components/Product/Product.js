import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, shortDesc, price, _id } = product
    return (
        <div className="border border-gray-300 flex justify-between items-center flex-col py-10 px-5 min-h-96 text-center shadow">
            <img className=" w-48 h-48 object-contain" src={img} alt="" />
            <h3 className="text-3xl font-bold">{name}</h3>
            <p className="text-lg font-medium">{shortDesc}</p>
            <p className="text-2xl font-bold py-2">${price}</p>
            <Link to={`/order/${_id}`}>
                <button className="px-6 py-1 bg-yellow-400 font-bold focus:bg-yellow-300 flex items-center gap-1"><BiShoppingBag /> Buy Now</button>
            </Link>
        </div>
    );
};

export default Product;