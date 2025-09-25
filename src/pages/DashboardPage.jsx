// src/pages/DashboardPage.jsx
import React from 'react';
import DashboardStats from '../components/DashboardStats';
import MainChart from '../components/MainChart';
import SideCharts from '../components/SideCharts';
import RecentOrdersTable from '../components/RecentOrdersTable';
import ReportsOverview from '../components/ReportsOverview';
import UsersByCountry from '../components/UsersByCountry';

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MainChart />
        </div>
        <div className="lg:col-span-1">
          <SideCharts />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ReportsOverview />
        <RecentOrdersTable />
      </div>
      <UsersByCountry />
    </div>
  );
};

export default DashboardPage;