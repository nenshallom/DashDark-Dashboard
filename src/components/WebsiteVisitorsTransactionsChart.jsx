// src/components/WebsiteVisitorsTransactionsChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { websiteVisitorsTransactionsData } from '../data/mockData';

const WebsiteVisitorsTransactionsChart = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md h-full">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Website Visitors</h3>
            <div className="relative h-40 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie 
                            data={websiteVisitorsTransactionsData} 
                            dataKey="value" 
                            startAngle={180} 
                            endAngle={0} 
                            innerRadius={60} 
                            outerRadius={80} 
                            >
                            {websiteVisitorsTransactionsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">80%</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Transactions</p>
                </div>
            </div>
             <div className="flex justify-center items-center gap-6 mt-4">
                {websiteVisitorsTransactionsData.map((item) => (
                    <div key={item.name} className="flex items-center">
                        <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WebsiteVisitorsTransactionsChart;