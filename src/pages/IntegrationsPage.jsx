// src/pages/IntegrationsPage.jsx
import React, { useState, useMemo } from 'react';
import { integrationsData } from '../data/mockData';
import IntegrationCard from '../components/IntegrationCard';
import { FiSearch } from 'react-icons/fi';

const IntegrationsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    
    const categories = ['All', ...new Set(integrationsData.map(item => item.category))];

    const filteredIntegrations = useMemo(() => {
        let filtered = integrationsData;

        if (activeCategory !== 'All') {
            filtered = filtered.filter(item => item.category === activeCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [searchQuery, activeCategory]);

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Connect Your Favorite Tools</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your integrations and connect new applications.</p>
            </div>

            {/* Filter and Search Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-200 dark:bg-slate-900 p-1 rounded-lg">
                    {categories.map(category => (
                        <button 
                            key={category} 
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-1.5 text-sm font-semibold rounded-md ${
                                activeCategory === category 
                                ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white' 
                                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-auto">
                    <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search integrations..." 
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map(integration => (
                    <IntegrationCard key={integration.id} integration={integration} />
                ))}
            </div>

            {filteredIntegrations.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-500 dark:text-slate-400">No integrations found.</p>
                </div>
            )}
        </div>
    );
};

export default IntegrationsPage;