// src/components/UsersTable.jsx
import React, { useState } from 'react';
import { allUsersData } from '../data/mockData';
import { FiChevronDown, FiEdit, FiTrash2, FiBarChart2 } from 'react-icons/fi';

const UsersTable = () => {
    const [users, setUsers] = useState(allUsersData.map(u => ({ ...u, checked: false })));

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setUsers(users.map(user => ({ ...user, checked })));
    };

    const handleSelectSingle = (id) => {
        setUsers(users.map(user => user.id === id ? { ...user, checked: !user.checked } : user));
    };
    
    const getStatusClass = (status) => {
        return status === 'Online' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">All Users</h3>
                <span className="text-sm text-slate-500">1-10 of {users.length}</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                            <th className="p-4"><input type="checkbox" onChange={handleSelectAll} className="rounded" /></th>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Company</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                        {users.slice(0, 10).map((user) => ( // Slicing to show only 10 for now
                            <tr key={user.id} className="border-b border-slate-200 dark:border-slate-700">
                                <td className="p-4"><input type="checkbox" checked={user.checked} onChange={() => handleSelectSingle(user.id)} className="rounded" /></td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <div className="font-medium text-slate-800 dark:text-white">{user.name}</div>
                                            <div className="text-xs text-slate-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">{user.phone}</td>
                                <td className="p-4">{user.location}</td>
                                <td className="p-4">{user.company}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-4 text-slate-500">
                                        <FiBarChart2 className="cursor-pointer hover:text-blue-500" />
                                        <FiEdit className="cursor-pointer hover:text-green-500" />
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
export default UsersTable;