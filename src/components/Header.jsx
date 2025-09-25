// src/components/Header.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

// The setSidebarOpen prop is no longer needed here
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 shadow-md">
        <div>
            <h1 className="text-xl md:text-2xl font-bold hidden md:block text-slate-800 dark:text-white">Welcome back, John</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 hidden md:block">Manage your advertising ROI and report website traffic.</p>
        </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white"
      >
        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </header>
  );
};

export default Header;