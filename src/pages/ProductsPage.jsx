// src/pages/ProductsPage.jsx
import React from 'react';
import AnalyticsStats from '../components/AnalyticsStats';
import RevenueChart from '../components/RevenueChart';
import TeamProgress from '../components/TeamProgress';
import WebsiteVisitorsSourcesChart from '../components/WebsiteVisitorsSourcesChart';
import ProductsList from '../components/ProductsList';
import WebsiteVisitorsTransactionsChart from '../components/WebsiteVisitorsTransactionsChart';
import OrdersStatusTable from '../components/OrdersStatusTable'; // Import

const ProductsPage = () => {
  return (
    <div className="space-y-8">
      <AnalyticsStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <WebsiteVisitorsSourcesChart />
        </div>
        <div className="lg:col-span-3">
          <RevenueChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProductsList />
        <TeamProgress />
        <WebsiteVisitorsTransactionsChart />
      </div>

      {/* Section 3 */}
      <OrdersStatusTable />
    </div>
  );
};

export default ProductsPage;