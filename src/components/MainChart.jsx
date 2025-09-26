// src/components/MainChart.jsx
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mainChartData12m, mainChartData6m, mainChartData30d } from '../data/mockData'; // Import all datasets
import { useTheme } from '../context/ThemeContext';

const MainChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  // State to manage the active timeframe
  const [timeframe, setTimeframe] = useState('12m');

  // useMemo will re-calculate the chartData only when the timeframe changes
  const chartData = useMemo(() => {
    switch (timeframe) {
      case '6m':
        return mainChartData6m;
      case '30d':
        return mainChartData30d;
      default:
        return mainChartData12m;
    }
  }, [timeframe]);
  
  const timeframes = [
      { key: '12m', label: '12 Months' },
      { key: '6m', label: '6 Months' },
      { key: '30d', label: '30 Days' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
      {/* Chart Header with Timeframe Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Total deals</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
                {timeframe === '12m' && 'Jan 2024 - Dec 2024'}
                {timeframe === '6m' && 'Jul 2024 - Dec 2024'}
                {timeframe === '30d' && 'Last 30 Days'}
            </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mt-4 sm:mt-0">
            {timeframes.map(tf => (
                <button 
                    key={tf.key}
                    onClick={() => setTimeframe(tf.key)}
                    className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                        timeframe === tf.key
                        ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                >
                    {tf.label}
                </button>
            ))}
        </div>
      </div>
      
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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