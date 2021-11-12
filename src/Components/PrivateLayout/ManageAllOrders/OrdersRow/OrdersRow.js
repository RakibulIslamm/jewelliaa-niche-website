import React from 'react';

const OrdersRow = ({ order, handleOrderDelete, handleOrderApprove }) => {
    const { productName, _id, phone, status, email } = order;
    return (
        <tr className="text-left">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-lg font-bold text-gray-700">
                    {productName} <br />
                    <p className="font-serif text-sm font-normal">{_id}</p>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-500">
                {phone} <br />
                <p className=" font-serif">{email}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                {status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                {
                    status === 'pending' && <button onClick={() => handleOrderApprove(_id)} className="px-2 bg-yellow-200 text-black font-semibold">Approve</button>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                <button onClick={() => handleOrderDelete(_id)} className="px-3 bg-yellow-300">Delete</button>
            </td>
        </tr>
    );
};

export default OrdersRow;