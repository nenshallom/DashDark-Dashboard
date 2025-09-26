// src/components/SettingsSidebar.jsx
import React from 'react';
import { FiUser, FiShield, FiBell } from 'react-icons/fi';

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'profile', name: 'Profile', icon: FiUser },
        { id: 'security', name: 'Security', icon: FiShield },
        { id: 'notifications', name: 'Notifications', icon: FiBell },
    ];

    return (
        <nav className="space-y-2">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                        activeTab === tab.id
                        ? 'bg-slate-200 dark:bg-slate-800 text-purple-600 dark:text-purple-400'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                >
                    <tab.icon size={18} />
                    <span>{tab.name}</span>
                </button>
            ))}
        </nav>
    );
};

export default SettingsSidebar;