// src/components/TaskCard.jsx
import React from 'react';
import { FiMessageSquare, FiPaperclip } from 'react-icons/fi';

const TaskCard = ({ item }) => {
    const getTagColor = (tag) => {
        switch (tag) {
            case 'Development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'Design': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
            case 'Marketing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md mb-4">
            <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
            <div className="mt-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(item.tags[0])}`}>{item.tags[0]}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex -space-x-2">
                    {item.assignees.map(id => (
                        <img key={id} src={`https://i.pravatar.cc/24?img=${id}`} alt="assignee" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" />
                    ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><FiMessageSquare size={14} />{item.comments}</span>
                    <span className="flex items-center gap-1"><FiPaperclip size={14} />{item.attachments}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;