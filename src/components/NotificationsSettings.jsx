// src/components/NotificationsSettings.jsx
import React from 'react';

// A simple reusable toggle switch component
const ToggleSwitch = ({ label, enabled }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
        <span className="text-slate-700 dark:text-slate-300">{label}</span>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked={enabled} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
    </div>
);

const NotificationsSettings = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Notifications</h2>
            <p className="text-sm text-slate-500 mb-6">Manage how you receive notifications from us.</p>
            <div>
                <ToggleSwitch label="Weekly Reports" enabled={true} />
                <ToggleSwitch label="Security Alerts" enabled={true} />
                <ToggleSwitch label="Promotional Emails" enabled={false} />
            </div>
             <div className="flex justify-end pt-8">
                <button type="submit" className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700">Save Changes</button>
            </div>
        </div>
    );
};

export default NotificationsSettings;