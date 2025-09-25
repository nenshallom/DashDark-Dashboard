// src/pages/TaskPage.jsx
import React from 'react';
import TaskBoard from '../components/TaskBoard'; // Updated import
import { FiSearch } from 'react-icons/fi';

const TaskPage = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-0">Tasks</h1> {/* Updated title */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search for..." className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none" />
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                        Sort by
                    </button>
                </div>
            </div>
            <TaskBoard /> 
        </div>
    );
};

export default TaskPage;