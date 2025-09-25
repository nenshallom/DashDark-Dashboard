// src/pages/UsersPage.jsx
import React from 'react';
import UserStats from '../components/UserStats';
import UsersTable from '../components/UsersTable';
import { FiSearch, FiPlus } from 'react-icons/fi';

// This could be a reusable component
const PageHeader = ({ title }) => (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-0">{title}</h1>
        <div className="flex items-center gap-4">
            <div className="relative">
                <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search for..." className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none" />
            </div>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                <FiPlus />
                Add user
            </button>
        </div>
    </div>
);


const UsersPage = () => {
    return (
        <div className="space-y-8">
            <PageHeader title="Users" />
            <UserStats />
            <UsersTable />
        </div>
    );
};

export default UsersPage;