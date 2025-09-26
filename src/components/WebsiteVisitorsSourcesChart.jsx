// src/components/WebsiteVisitorsSourcesChart.jsx
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { websiteVisitorsSourcesData } from '../data/mockData';

const WebsiteVisitorsSourcesChart = () => {
    const [timeframe, setTimeframe] = useState('1y');
    const chartData = useMemo(() => websiteVisitorsSourcesData[timeframe], [timeframe]);
    const selectClasses = "bg-slate-100 dark:bg-slate-800 text-xs dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500";

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md h-full">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Website Visitors</h3>
                <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className={selectClasses}>
                    <option value="1y">This Year</option>
                    <option value="6m">Last 6 Months</option>
                    <option value="30d">Last 30 Days</option>
                </select>
            </div>
            <div className="relative h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius={70} fill="#8884d8">
                             {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        </Pie>
                        <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={65} innerRadius={60} fill="#8884d8" opacity={0.5}>
                             {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-4xl font-bold text-slate-800 dark:text-white">150k</p>
                </div>
            </div>
            <div className="w-full mt-6 space-y-3 px-4">
                {chartData.map((item) => (
                    <li key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="h-3 w-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></span>
                            <span className="text-slate-500 dark:text-slate-400">{item.name}</span>
                        </div>
                        <span className="font-medium text-slate-800 dark:text-white">{item.value}%</span>
                    </li>
                ))}
            </div>
        </div>
    );
};
export default WebsiteVisitorsSourcesChart;