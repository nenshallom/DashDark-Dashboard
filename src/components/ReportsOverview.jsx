// src/components/ReportsOverview.jsx
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { reportsOverviewData } from '../data/mockData';

const ReportsOverview = () => {
    const [timeframe, setTimeframe] = useState('1y');
    const chartData = useMemo(() => reportsOverviewData[timeframe], [timeframe]);
    const totalUsers = chartData.reduce((sum, item) => sum + item.value, 0);
    const selectClasses = "bg-slate-100 dark:bg-slate-800 text-xs dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500";

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Reports overview</h3>
                <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className={selectClasses}>
                    <option value="1y">This Year</option>
                    <option value="6m">Last 6 Months</option>
                    <option value="30d">Last 30 Days</option>
                </select>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div className="relative h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={chartData} cx="50%" cy="80%" startAngle={180} endAngle={0} innerRadius={70} outerRadius={90} fill="#8884d8" paddingAngle={2} dataKey="value" >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-x-0 top-2/3 -translate-y-1/2 flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold text-slate-800 dark:text-white">{totalUsers.toLocaleString()}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Users by device</p>
                    </div>
                </div>
                <div className="w-full mt-6 space-y-3 px-4">
                    {chartData.map((item) => (
                        <li key={item.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="h-3 w-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></span>
                                <span className="text-slate-500 dark:text-slate-400">{item.name}</span>
                            </div>
                            <span className="font-medium text-slate-800 dark:text-white">{item.value.toLocaleString()}</span>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportsOverview;