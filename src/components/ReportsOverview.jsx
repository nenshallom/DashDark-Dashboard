// src/components/ReportsOverview.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { reportsOverviewData } from '../data/mockData';

const ReportsOverview = () => {
    const totalUsers = reportsOverviewData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Reports overview</h3>
            <div className="flex flex-col items-center mt-4">
                {/* Donut Chart */}
                <div className="relative h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={reportsOverviewData}
                                cx="50%"
                                cy="80%" // Position the chart lower to cut off the bottom
                                startAngle={180} // Start angle for a semi-circle
                                endAngle={0} // End angle for a semi-circle
                                innerRadius={70}
                                outerRadius={90}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                                             >
                                {reportsOverviewData.map((entry, index) => (
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
                {/* Legend */}
                <div className="w-full mt-6 space-y-3 px-4">
                    {reportsOverviewData.map((item) => (
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