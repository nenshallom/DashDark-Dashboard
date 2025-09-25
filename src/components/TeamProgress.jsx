// src/components/TeamProgress.jsx
import React from 'react';
import { teamProgressData } from '../data/mockData';

const TeamProgress = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Team progress</h3>
            <div className="space-y-6">
                {teamProgressData.map((member) => (
                    <div key={member.name}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium text-slate-800 dark:text-white">{member.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{member.email}</p>
                            </div>
                            <span className="text-sm font-semibold text-slate-800 dark:text-white">{member.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                            <div 
                                className="bg-purple-500 h-2 rounded-full"
                                style={{ width: `${member.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TeamProgress;