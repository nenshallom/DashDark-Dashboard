// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage'; 
import TaskPage from './pages/TaskPage'; 

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
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
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;