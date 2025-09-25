// src/components/RevenueChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueChartData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const RevenueChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Revenue by customer type</h3>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#334155' : '#e2e8f0'} />
            <XAxis dataKey="name" stroke={isDarkMode ? '#64748b' : '#94a3b8'} />
            <YAxis stroke={isDarkMode ? '#64748b' : '#94a3b8'} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }}/>
            <Legend />
            <Bar dataKey="current" stackId="a" fill="#8884d8" />
            <Bar dataKey="subscribers" stackId="a" fill="#82ca9d" />
            <Bar dataKey="new" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default RevenueChart;