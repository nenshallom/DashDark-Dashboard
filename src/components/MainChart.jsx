// src/components/MainChart.jsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mainChartData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const MainChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Total deals</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm">Jan 2024 - Dec 2024</p>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mainChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke={isDarkMode ? '#64748b' : '#94a3b8'} />
            <YAxis stroke={isDarkMode ? '#64748b' : '#94a3b8'} />
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#334155' : '#e2e8f0'} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDarkMode ? '#1e293b' : '#ffffff', 
                borderColor: isDarkMode ? '#334155' : '#e2e8f0'
              }} 
            />
            <Area type="monotone" dataKey="Revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="Expenses" stroke="#82ca9d" fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MainChart;