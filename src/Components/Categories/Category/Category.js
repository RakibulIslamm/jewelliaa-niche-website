import React from 'react';

const Category = ({ category }) => {
    return (
        <div className="m-2">
            <img className="w-full h-80 object-cover border border-gray-300 shadow" src={category?.img} alt="" />
            <h2 className="text-2xl tracking-wider py-2 font-bold">{category.catName}</h2>
        </div>
    );
};

export default Category;