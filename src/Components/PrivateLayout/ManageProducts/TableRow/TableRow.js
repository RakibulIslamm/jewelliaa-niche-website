import React from 'react';

const TableRow = ({ product, handleDeleteProduct }) => {
    const { name, _id, price, img } = product;

    return (
        <tr className="text-left">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img src={img} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-lg font-bold text-gray-700">
                            {name}
                        </div>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                <div className="text-sm text-gray-500">${price}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2inline-flextext-xsleading-5font-semiboldrounded-fullbg-green-100text-green-800">
                    Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-500">
                {_id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                <button onClick={() => handleDeleteProduct(_id)} className="px-6 py-1 bg-yellow-400">Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;