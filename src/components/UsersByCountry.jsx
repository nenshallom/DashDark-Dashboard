// src/components/UsersByCountry.jsx
import React from 'react';
import { usersByCountryData } from '../data/mockData';
import worldMapUrl from'/world-map.svg'; // Ensure you have a world map SVG in assets

const UsersByCountry = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Users by country</h3>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
                {/* Left Side: Country List & Progress Bars */}
                <div className="w-full md:w-1/3">
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">{usersByCountryData.totalUsers}
                        <span className="text-sm text-green-500 align-middle ml-2">{usersByCountryData.change}</span>
                    </p>
                    <div className="space-y-4 mt-4">
                        {usersByCountryData.countries.map((country) => (
                            <div key={country.name}>
                                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                                    <span>{country.name}</span>
                                    <span>{country.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-1">
                                    <div 
                                        className={`${country.color} h-2 rounded-full`}
                                        style={{ width: `${country.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Map */}
                <div className="w-full md:w-2/3 relative">
                    {/* 2. Use the imported URL in an <img> tag */}
                    <img 
                        src={worldMapUrl} 
                        alt="World Map" 
                        className="w-full h-full object-contain"
                    />
                    {usersByCountryData.countries.map((country) => (
                        <div 
                            key={country.name} 
                            className="absolute"
                            style={{ top: country.pos.top, left: country.pos.left }}
                        >
                            <span className="relative flex h-4 w-4">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${country.color} opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-4 w-4 ${country.color}`}></span>
                            </span>
                            
                            {country.active && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-slate-800 text-white text-sm rounded-md shadow-lg">
                                    1.86 K
                                    <div className="font-light text-xs text-slate-400">Australia</div>
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