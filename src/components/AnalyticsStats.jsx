// src/components/AnalyticsStats.jsx
import React from 'react';
import { analyticsStats } from '../data/mockData';

const AnalyticsStats = () => {
  // ... (You can reuse the StatCard logic or build a new one based on the new design)
  // For simplicity, here's a direct implementation:
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {analyticsStats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white mt-2">{stat.value}</p>
          <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</p>
        </div>
      ))}
    </div>
  );
};
export default AnalyticsStats;