// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ViewModePrompt from './components/ViewModePrompt'; // Import the prompt
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import TaskPage from './pages/TaskPage';
import IntegrationsPage from './pages/IntegrationsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  // Set initial sidebar state based on screen width
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  // State to manage the visibility of the prompt
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the prompt has been dismissed in the current session
    const promptDismissed = sessionStorage.getItem('promptDismissed');
    // Show the prompt only if the screen is small AND it hasn't been dismissed yet
    if (window.innerWidth <= 768 && !promptDismissed) {
      setShowPrompt(true);
    }
  }, []); // The empty array ensures this runs only once on mount

  const handleClosePrompt = () => {
    setShowPrompt(false);
    // Remember that the user has dismissed the prompt for this session
    sessionStorage.setItem('promptDismissed', 'true');
  };

  return (
    <Router>
      {/* Conditionally render the prompt */}
      {showPrompt && <ViewModePrompt onClose={handleClosePrompt} />}
      
      <div className="flex bg-slate-100 dark:bg-slate-950 min-h-screen">
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-col flex-grow h-screen overflow-y-auto">
          <Header />
          <main className="flex-grow p-4 md:p-8">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;