// src/components/UsersByCountry.jsx
import React, { useState, useMemo } from 'react';
import { usersByCountryData } from '../data/mockData';
import worldMapUrl from'/world-map.svg';

const UsersByCountry = () => {
    const [timeframe, setTimeframe] = useState('1y');
    const countryData = useMemo(() => usersByCountryData[timeframe], [timeframe]);
    const selectClasses = "bg-slate-100 dark:bg-slate-800 text-xs dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500";

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Users by country</h3>
                <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className={selectClasses}>
                    <option value="1y">This Year</option>
                    <option value="6m">Last 6 Months</option>
                    <option value="30d">Last 30 Days</option>
                </select>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
                <div className="w-full md:w-1/3">
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">{countryData.totalUsers}
                        <span className="text-sm text-green-500 align-middle ml-2">{countryData.change}</span>
                    </p>
                    <div className="space-y-4 mt-4">
                        {countryData.countries.map((country) => (
                            <div key={country.name}>
                                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                                    <span>{country.name}</span>
                                    <span>{country.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-1">
                                    <div className={`${country.color} h-2 rounded-full`} style={{ width: `${country.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-2/3 relative">
                    <img src={worldMapUrl} alt="World Map" className="w-full h-full object-contain" />
                    {countryData.countries.map((country) => (
                        <div key={country.name} className="absolute" style={{ top: country.pos.top, left: country.pos.left }}>
                            <span className="relative flex h-4 w-4">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${country.color} opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-4 w-4 ${country.color}`}></span>
                            </span>
                            {country.active && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-slate-800 text-white text-sm rounded-md shadow-lg">
                                    1.86 K <div className="font-light text-xs text-slate-400">Australia</div>
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersByCountry;