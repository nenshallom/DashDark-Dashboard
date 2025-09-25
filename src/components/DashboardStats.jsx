// src/components/DashboardStats.jsx
import React from 'react';
import { summaryCards } from '../data/mockData';

const DashboardStats = () => {
  const getChangeColor = (type) => {
    switch (type) {
      case 'increase': return 'text-green-500';
      case 'decrease': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryCards.map((card, index) => (
        <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.title}</h3>
            <card.icon className="text-slate-500" size={22} />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-slate-800 dark:text-white">{card.value}</p>
            <p className={`text-sm mt-1 ${getChangeColor(card.changeType)}`}>{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;