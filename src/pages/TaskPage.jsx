// src/pages/TaskPage.jsx
import React, { useState } from 'react'; 
import TaskBoard from '../components/TaskBoard'; // Updated import
import { FiSearch } from 'react-icons/fi';

const TaskPage = () => {
    const [sortOrder, setSortOrder] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'newest' ? 'oldest' : 'newest'));
    };


    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-left  md:flex-row flex-col gap-4">
                    <div className="relative">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search for Task..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white dark:bg-slate-900 border border-slate-200 text-gray-500 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none" />
                    </div>
                    <button onClick={toggleSortOrder} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 capitalize">
                        Sort by: {sortOrder}
                    </button>
                </div>
            </div>
            {/* Pass the sortOrder state down to the TaskBoard */}
            <TaskBoard sortOrder={sortOrder} searchQuery={searchQuery} />
        </div>
    );
};

export default TaskPage;