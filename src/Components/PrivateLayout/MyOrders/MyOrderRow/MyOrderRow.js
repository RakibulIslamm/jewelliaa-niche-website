import React from 'react';

const MyOrderRow = ({ myOrder }) => {
    const { productName, _id, status } = myOrder;
    return (
        <tr className="text-left">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-lg font-bold text-gray-700">
                    {productName}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-500">
                {_id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                {status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                <button className="px-3 bg-yellow-300">Delete</button>
            </td>
        </tr>
    );
};

export default MyOrderRow;