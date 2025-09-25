// src/components/SideCharts.jsx
import React from 'react';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { profitChartData, sessionsChartData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const SideCharts = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const axisColor = isDarkMode ? '#64748b' : '#94a3b8';

    return (
        <div className="flex flex-col gap-8">
            {/* Total Profit Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Total profit</h3>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mt-2">$144.6K <span className="text-sm text-green-500 align-middle">↑28.5%</span></p>
                <div className="mt-4 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={profitChartData}>
                            <XAxis dataKey="name" stroke={axisColor} fontSize={12} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Total Sessions Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Total sessions</h3>
                 <p className="text-2xl font-bold text-slate-800 dark:text-white mt-2">400 <span className="text-sm text-red-500 align-middle">↓6.8%</span></p>
                <div className="mt-4 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sessionsChartData}>
                            <XAxis dataKey="name" stroke={axisColor} fontSize={12} />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SideCharts;