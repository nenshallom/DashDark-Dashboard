// src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import ProfileSettings from '../components/ProfileSettings';
import NotificationsSettings from '../components/NotificationsSettings';
// You can create and import SecuritySettings.jsx in the same way

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileSettings />;
            case 'notifications':
                return <NotificationsSettings />;
            case 'security':
                // Placeholder for the security component
                return <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md"><h2 className="text-xl font-bold text-slate-800 dark:text-white">Security Settings</h2></div>;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Settings</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column: Navigation */}
                <div className="lg:col-span-1">
                    <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                {/* Right Column: Content */}
                <div className="lg:col-span-3">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;