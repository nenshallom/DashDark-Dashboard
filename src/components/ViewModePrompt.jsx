// src/components/ViewModePrompt.jsx
import React from 'react';
import { FiMonitor, FiX } from 'react-icons/fi';

const ViewModePrompt = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-sm text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900">
                    <FiMonitor className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4">Optimal Viewing Experience</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    This dashboard is best viewed on a wider screen, like a tablet or desktop, for full functionality.
                </p>
                <div className="mt-6">
                    <button 
                        onClick={onClose} 
                        className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700"
                    >
                        Continue Anyway
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewModePrompt;