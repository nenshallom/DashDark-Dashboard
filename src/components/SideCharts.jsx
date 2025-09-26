// src/components/SideCharts.jsx
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { profitChartData, sessionsChartData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const SideCharts = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const axisColor = isDarkMode ? '#64748b' : '#94a3b8';

    // State for each chart's timeframe
    const [profitTimeframe, setProfitTimeframe] = useState('12m');
    const [sessionsTimeframe, setSessionsTimeframe] = useState('12m');

    // Dynamically select data based on state
    const profitData = useMemo(() => profitChartData[profitTimeframe], [profitTimeframe]);
    const sessionsData = useMemo(() => sessionsChartData[sessionsTimeframe], [sessionsTimeframe]);

    const selectClasses = "bg-slate-100 dark:bg-slate-800 text-xs dark:text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500";

    return (
        <div className="flex flex-col gap-8">
            {/* Total Profit Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-md  font-semibold text-slate-800 dark:text-white">Total profit</h3>
                        <p className="text-lg font-bold text-slate-800 dark:text-white mt-2">$144.6K <span className="text-sm text-green-500 align-middle">↑28.5%</span></p>
                    </div>
                    <select value={profitTimeframe} onChange={(e) => setProfitTimeframe(e.target.value)} className={selectClasses}>
                        <option value="12m">12 Months</option>
                        <option value="6m">6 Months</option>
                        <option value="30d">30 Days</option>
                    </select>
                </div>
                <div className="mt-4 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={profitData}>
                            <XAxis dataKey="name" stroke={axisColor} fontSize={12} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }} />
                            <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Total Sessions Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-md font-semibold text-slate-800 dark:text-white">Total sessions</h3>
                        <p className="text-lg font-bold text-slate-800 dark:text-white mt-2">400 <span className="text-sm text-red-500 align-middle">↓6.8%</span></p>
                    </div>
                     <select value={sessionsTimeframe} onChange={(e) => setSessionsTimeframe(e.target.value)} className={selectClasses}>
                        <option value="12m">12 Months</option>
                        <option value="6m">6 Months</option>
                        <option value="30d">30 Days</option>
                    </select>
                </div>
                <div className="mt-4 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sessionsData}>
                            <XAxis dataKey="name" stroke={axisColor} fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }} />
                            <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SideCharts;