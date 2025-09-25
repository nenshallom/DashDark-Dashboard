// src/components/RecentOrdersTable.jsx
import React from 'react';
import { recentOrders } from '../data/mockData';

const RecentOrdersTable = () => {
    const getStatusClass = (status) => {
        return status === 'Paid' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Recent orders</h3>
            <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Order</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="bg-white dark:bg-slate-900 border-b dark:border-slate-700">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{order.id}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">${order.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrdersTable;