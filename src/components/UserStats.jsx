// src/components/UserStats.jsx
import React from 'react';
import { userStats } from '../data/mockData';
import { FiMoreHorizontal } from 'react-icons/fi';

const UserStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {userStats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</h3>
            <FiMoreHorizontal className="text-slate-500 cursor-pointer" />
          </div>
          <p className="text-3xl font-bold text-slate-800 dark:text-white mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};
export default UserStats;