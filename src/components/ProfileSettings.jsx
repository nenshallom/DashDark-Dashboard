// src/components/ProfileSettings.jsx
import React from 'react';

const ProfileSettings = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Profile</h2>
            <form className="space-y-6">
                <div className="flex items-center gap-6">
                    <img src="https://i.pravatar.cc/80" alt="User Avatar" className="w-20 h-20 rounded-full" />
                    <div>
                        <button type="button" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-700">Upload new photo</button>
                        <p className="text-xs text-slate-500 mt-2">Recommended: 200x200px, PNG or JPG.</p>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Full Name</label>
                    <input type="text" defaultValue="John Carter" className="mt-1 block w-full rounded-md bg-slate-100 dark:bg-slate-800 border-transparent focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Email Address</label>
                    <input type="email" defaultValue="john.carter@example.com" disabled className="mt-1 block w-full rounded-md bg-slate-200 dark:bg-slate-700 border-transparent cursor-not-allowed" />
                </div>
                <div className="flex justify-end pt-4">
                    <button type="submit" className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700">Save Changes</button>
                </div>
            </form>
        </div>
    );
};
export default ProfileSettings;