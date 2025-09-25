// src/components/OrdersStatusTable.jsx
import React from 'react';
import { ordersStatusData } from '../data/mockData';
import { FiUser, FiCalendar, FiFlag, FiDollarSign, FiEdit, FiTrash2 } from 'react-icons/fi';
import { RiFileList2Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const OrdersStatusTable = () => {
    // In a real app, this state would be managed more globally (e.g., with Context or Redux)
    const [orders, setOrders] = React.useState(ordersStatusData);

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        const updatedOrders = orders.map(order => ({ ...order, checked }));
        setOrders(updatedOrders);
    };

    const handleSelectSingle = (id) => {
        const updatedOrders = orders.map(order => 
            order.id === id ? { ...order, checked: !order.checked } : order
        );
        setOrders(updatedOrders);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Canceled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Orders Status</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                            <th className="p-4"><input type="checkbox" onChange={handleSelectAll} className="rounded" /></th>
                            <th className="p-4 flex items-center gap-2"><RiFileList2Line /> Order</th>
                            <th className="p-4"><FiUser /> Client</th>
                            <th className="p-4"><FiCalendar /> Date</th>
                            <th className="p-4"><GoDotFill /> Status</th>
                            <th className="p-4"><FiFlag /> Country</th>
                            <th className="p-4"><FiDollarSign /> Total</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-slate-200 dark:border-slate-700">
                                <td className="p-4"><input type="checkbox" checked={order.checked} onChange={() => handleSelectSingle(order.id)} className="rounded" /></td>
                                <td className="p-4 font-medium text-purple-500">{order.id}</td>
                                <td className="p-4">
                                    <div className="font-medium text-slate-800 dark:text-white">{order.clientName}</div>
                                    <div className="text-xs text-slate-500">{order.clientEmail}</div>
                                </td>
                                <td className="p-4">{order.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4">{order.country}</td>
                                <td className="p-4 font-medium text-slate-800 dark:text-white">${order.total.toLocaleString()}</td>
                                <td className="p-4">
                                    <div className="flex gap-4 text-slate-500">
                                        <FiEdit className="cursor-pointer hover:text-blue-500" />
                                        <FiTrash2 className="cursor-pointer hover:text-red-500" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersStatusTable;