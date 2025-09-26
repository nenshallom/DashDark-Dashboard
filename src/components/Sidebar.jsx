// src/components/Sidebar.jsx
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGraphUp, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FiSettings, FiUsers, FiStar, FiDollarSign, FiLink, FiChevronsLeft, FiSearch, FiChevronsRight } from 'react-icons/fi';
import { RiDashboardLine, RiShoppingBagLine } from "react-icons/ri";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const location = useLocation(); // Get the current URL location
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    if (!isSidebarOpen) {
      setSidebarOpen(true);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };

  // This is now a simple list of our main navigation links
  const navLinks = [
    { icon: <RiDashboardLine size={20} />, name: 'Reports', path: '/' },
    { icon: <RiShoppingBagLine size={20} />, name: 'Products', path: '/products' },
    { icon: <FiStar size={20} />, name: 'Task', path: '/tasks' }, 
    { icon: <FiUsers size={20} />, name: 'Users', path: '/users' },
    { icon: <FiLink size={20} />, name: 'Integrations', path: '/integrations' },
  ];

  return (
    // Added "sticky top-0" to fix the sidebar's position on scroll
    <div className={`sticky top-0 h-screen flex flex-col p-4 bg-slate-900 text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-80' : 'w-20'}`}>
      <div className="flex items-center justify-between mb-8">
        <div className={`flex items-center gap-2 overflow-hidden ${isSidebarOpen ? 'w-full' : 'w-0'}`}>
            <BsGraphUp size={30} className="text-purple-500" />
            <h1 className="text-2xl font-bold whitespace-nowrap">Dashdark X</h1>
        </div>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1 rounded-lg hover:bg-slate-800">
            {isSidebarOpen ? <FiChevronsLeft size={24} /> : <FiChevronsRight size={24} />}
        </button>
      </div>

      <div className="relative mb-8" onClick={handleSearchClick}>
        <div className="p-2 cursor-pointer">
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        </div>
        {isSidebarOpen && (
            <input ref={searchInputRef} type="text" placeholder="Search for..." className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        )}
      </div>

      <nav className="flex-grow">
        <ul>
          {navLinks.map((link) => {
            // Check if the current page's path matches the link's path
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="mb-2">
                <Link to={link.path} className={`flex items-center p-2 rounded-lg relative ${isActive ? 'bg-slate-800 text-white' : 'hover:bg-slate-800 text-gray-400 hover:text-white'}`}>
                  <div className="flex items-center gap-3">
                    {isActive && <span className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-r-md"></span>}
                    {link.icon}
                    {isSidebarOpen && <span>{link.name}</span>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className="border-slate-700 my-4" />

      <div className="space-y-2">
         {/* You can add paths to these links later as you build the pages */}
         <Link to="/settings" className="flex items-center p-2 rounded-lg hover:bg-slate-800 text-gray-400 hover:text-white"><div className="flex items-center gap-3"><FiSettings size={20} />{isSidebarOpen && <span>Settings</span>}</div></Link>
      </div>

       <div className={`flex items-center gap-3 mt-8 pt-4 border-t border-slate-700 ${!isSidebarOpen && 'justify-center'}`}>
            <img src="https://i.pravatar.cc/40" alt="User Avatar" className="rounded-full" />
            {isSidebarOpen && (
                <div>
                    <p className="font-semibold">John Carter</p>
                    <p className="text-sm text-gray-400">Account settings</p>
                </div>
            )}
       </div>
    </div>
  );
};

export default Sidebar;