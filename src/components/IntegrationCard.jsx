// src/components/IntegrationCard.jsx
import React from 'react';

const IntegrationCard = ({ integration }) => {
    const isConnected = integration.status === 'Connected';

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-start gap-4 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between w-full">
                <integration.logo size={40} className="text-slate-700 dark:text-slate-300" />
                {isConnected && (
                    <span className="text-xs font-semibold text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">
                        Active
                    </span>
                )}
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{integration.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{integration.description}</p>
            </div>
            <button 
                className={`w-full text-center py-2 rounded-lg text-sm font-semibold ${
                    isConnected 
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
            >
                {isConnected ? 'Manage' : 'Connect'}
            </button>
        </div>
    );
};

export default IntegrationCard;