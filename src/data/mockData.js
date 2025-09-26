// src/data/mockData.js
import { FiTrendingUp, FiUsers, FiUserPlus, FiDollarSign } from 'react-icons/fi';
import { FaSlack, FaMailchimp, FaStripe, FaSalesforce, FaHubspot } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";

export const summaryCards = [
  {
    icon: FiTrendingUp,
    title: 'Registrations',
    value: '50.8K',
    change: '+2.47%',
    changeType: 'increase',
  },
  {
    icon: FiUsers,
    title: 'Monthly users',
    value: '23.6K',
    change: '-0.47%',
    changeType: 'decrease',
  },
  {
    icon: FiUserPlus,
    title: 'New sign-ups',
    value: '756',
    change: '+0.00%',
    changeType: 'neutral',
  },
  {
    icon: FiDollarSign,
    title: 'Subscriptions',
    value: '2.3K',
    change: '-1.12%',
    changeType: 'decrease',
  },
];

export const mainChartData12m = [
  { name: 'Jan', Revenue: 4000, Expenses: 2400 },
  { name: 'Feb', Revenue: 3000, Expenses: 1398 },
  { name: 'Mar', Revenue: 2000, Expenses: 9800 },
  { name: 'Apr', Revenue: 2780, Expenses: 3908 },
  { name: 'May', Revenue: 1890, Expenses: 4800 },
  { name: 'Jun', Revenue: 2390, Expenses: 3800 },
  { name: 'Jul', Revenue: 3490, Expenses: 4300 },
  { name: 'Aug', Revenue: 2000, Expenses: 9800 },
  { name: 'Sep', Revenue: 2780, Expenses: 3908 },
  { name: 'Oct', Revenue: 1890, Expenses: 4800 },
  { name: 'Nov', Revenue: 2390, Expenses: 3800 },
  { name: 'Dec', Revenue: 3490, Expenses: 4300 },
];

export const mainChartData6m = [
  { name: 'Jul', Revenue: 3490, Expenses: 4300 },
  { name: 'Aug', Revenue: 2000, Expenses: 9800 },
  { name: 'Sep', Revenue: 2780, Expenses: 3908 },
  { name: 'Oct', Revenue: 1890, Expenses: 4800 },
  { name: 'Nov', Revenue: 2390, Expenses: 3800 },
  { name: 'Dec', Revenue: 3490, Expenses: 4300 },
];

export const mainChartData30d = [
  { name: 'Day 1', Revenue: 200, Expenses: 150 },
  { name: 'Day 5', Revenue: 400, Expenses: 300 },
  { name: 'Day 10', Revenue: 350, Expenses: 200 },
  { name: 'Day 15', Revenue: 500, Expenses: 400 },
  { name: 'Day 20', Revenue: 450, Expenses: 350 },
  { name: 'Day 25', Revenue: 600, Expenses: 450 },
  { name: 'Day 30', Revenue: 550, Expenses: 500 },
];

export const recentOrders = [
    { id: 'HR32', date: 'Dec 28, 11:09 AM', status: 'Paid', total: 329.40 },
    { id: 'HR31', date: 'Dec 28, 11:02 AM', status: 'Pending', total: 117.28 },
    { id: 'HR30', date: 'Dec 28, 10:14 AM', status: 'Pending', total: 52.16 },
    { id: 'HR29', date: 'Dec 27, 3:32 PM', status: 'Paid', total: 310.52 },
    { id: 'HR28', date: 'Dec 27, 1:01 PM', status: 'Pending', total: 240.78 },
];

export const profitChartData = {
  '12m': [
      { name: '12 AM', value: 200 }, { name: '', value: 300 },
      { name: '8 AM', value: 400 }, { name: '', value: 250 },
      { name: '4 PM', value: 500 }, { name: '', value: 350 },
      { name: '11 PM', value: 450 }, { name: '', value: 300 },
  ],
  '6m': [
      { name: '12 AM', value: 180 }, { name: '8 AM', value: 350 },
      { name: '4 PM', value: 480 }, { name: '11 PM', value: 400 },
  ],
  '30d': [
      { name: 'Week 1', value: 150 }, { name: 'Week 2', value: 200 },
      { name: 'Week 3', value: 180 }, { name: 'Week 4', value: 220 },
  ],
};

// Replace the old sessionsChartData array
export const sessionsChartData = {
  '12m': [
      { name: '12 AM', value: 100 }, { name: '4 AM', value: 200 },
      { name: '8 AM', value: 150 }, { name: '12 PM', value: 400 },
      { name: '4 PM', value: 250 }, { name: '8 PM', value: 300 },
      { name: '11 PM', value: 200 },
  ],
  '6m': [
      { name: '12 AM', value: 80 }, { name: '8 AM', value: 180 },
      { name: '4 PM', value: 220 }, { name: '11 PM', value: 190 },
  ],
  '30d': [
      { name: 'Week 1', value: 50 }, { name: 'Week 2', value: 90 },
      { name: 'Week 3', value: 70 }, { name: 'Week 4', value: 110 },
  ],
};

export const reportsOverviewData = {
  '1y': [
      { name: 'Desktop users', value: 15624, color: '#a855f7' },
      { name: 'Phone app users', value: 5546, color: '#3b82f6' },
      { name: 'Laptop users', value: 2478, color: '#22d3ee' },
  ],
  '6m': [
      { name: 'Desktop users', value: 8312, color: '#a855f7' },
      { name: 'Phone app users', value: 2145, color: '#3b82f6' },
      { name: 'Laptop users', value: 1023, color: '#22d3ee' },
  ],
  '30d': [
      { name: 'Desktop users', value: 1245, color: '#a855f7' },
      { name: 'Phone app users', value: 456, color: '#3b82f6' },
      { name: 'Laptop users', value: 198, color: '#22d3ee' },
  ],
};


export const usersByCountryData = {
  '1y': {
      totalUsers: '12.4K',
      change: '+28.5%',
      countries: [
          { name: 'United states', percentage: 30, color: 'bg-purple-500', pos: { top: '35%', left: '22%' } },
          { name: 'United Kingdom', percentage: 20, color: 'bg-gray-400', pos: { top: '25%', left: '48%' } },
          { name: 'Australia', percentage: 15, color: 'bg-cyan-400', pos: { top: '70%', left: '85%' }, active: true },
          { name: 'Canada', percentage: 20, color: 'bg-gray-400', pos: { top: '20%', left: '15%' } },
          { name: 'Spain', percentage: 15, color: 'bg-gray-400', pos: { top: '40%', left: '45%' } },
      ],
  },
  '6m': {
      totalUsers: '7.8K',
      change: '+15.2%',
      countries: [
          { name: 'United states', percentage: 35, color: 'bg-purple-500', pos: { top: '35%', left: '22%' } },
          { name: 'United Kingdom', percentage: 25, color: 'bg-gray-400', pos: { top: '25%', left: '48%' } },
          { name: 'Australia', percentage: 10, color: 'bg-cyan-400', pos: { top: '70%', left: '85%' }, active: true },
          { name: 'Canada', percentage: 15, color: 'bg-gray-400', pos: { top: '20%', left: '15%' } },
          { name: 'Germany', percentage: 15, color: 'bg-gray-400', pos: { top: '30%', left: '52%' } },
      ],
  },
  '30d': {
      totalUsers: '1.1K',
      change: '+5.8%',
      countries: [
          { name: 'United states', percentage: 40, color: 'bg-purple-500', pos: { top: '35%', left: '22%' } },
          { name: 'Canada', percentage: 25, color: 'bg-gray-400', pos: { top: '20%', left: '15%' } },
          { name: 'Australia', percentage: 20, color: 'bg-cyan-400', pos: { top: '70%', left: '85%' }, active: true },
          { name: 'India', percentage: 15, color: 'bg-gray-400', pos: { top: '50%', left: '70%' } },
      ],
  }
};

export const analyticsStats = [
  { title: 'New Products', value: '50.8K', change: '+28.4%', changeType: 'increase' },
  { title: 'Stock Products', value: '23.6K', change: '-12.6%', changeType: 'decrease' },
  { title: 'Sale Products', value: '756', change: '+3.1%', changeType: 'increase' },
  { title: 'Average Revenue', value: '2.3K', change: '+11.3%', changeType: 'increase' },
];

export const revenueChartData = [
    { name: 'Jan', current: 4000, subscribers: 2400, new: 2400 },
    { name: 'Feb', current: 3000, subscribers: 1398, new: 2210 },
    { name: 'Mar', current: 2000, subscribers: 9800, new: 2290 },
    { name: 'Apr', current: 2780, subscribers: 3908, new: 2000 },
    { name: 'May', current: 1890, subscribers: 4800, new: 2181 },
    { name: 'Jun', current: 2390, subscribers: 3800, new: 2500 },
    { name: 'Jul', current: 3490, subscribers: 4300, new: 2100 },
];

export const teamProgressData = [
    { name: 'John Carter', email: 'john.carter@example.com', progress: 80 },
    { name: 'Sophie Moore', email: 'sophie.moore@example.com', progress: 32 },
    { name: 'Matt Cannon', email: 'matt.cannon@example.com', progress: 78 },
];

export const websiteVisitorsSourcesData = {
  '1y': [
      { name: 'Organic', value: 30, color: '#a855f7' },
      { name: 'Social', value: 50, color: '#3b82f6' },
      { name: 'Direct', value: 20, color: '#22d3ee' },
  ],
  '6m': [
      { name: 'Organic', value: 35, color: '#a855f7' },
      { name: 'Social', value: 45, color: '#3b82f6' },
      { name: 'Direct', value: 20, color: '#22d3ee' },
  ],
  '30d': [
      { name: 'Organic', value: 25, color: '#a855f7' },
      { name: 'Social', value: 55, color: '#3b82f6' },
      { name: 'Direct', value: 20, color: '#22d3ee' },
  ],
};


export const productsListData = [
    { name: 'iPhone 14 Pro Max', stock: '524 in stock', price: 1099.00 },
    { name: 'Apple Watch S8', stock: '320 in stock', price: 789.00 },
];

export const websiteVisitorsTransactionsData = [
    { name: 'Sell', value: 60, color: '#a855f7' },
    { name: 'Distribute', value: 25, color: '#3b82f6' },
    { name: 'Return', value: 15, color: '#22d3ee' },
];

export const ordersStatusData = [
  { id: '#1532', clientName: 'John Carter', clientEmail: 'hello@johncarter.com', date: 'Jan 30, 2024', status: 'Delivered', country: 'United States', total: 1099.24, checked: true },
  { id: '#1531', clientName: 'Sophie Moore', clientEmail: 'contact@sophiemoore.com', date: 'Jan 27, 2024', status: 'Canceled', country: 'United Kingdom', total: 5870.32, checked: false },
  { id: '#1530', clientName: 'Matt Cannon', clientEmail: 'contact@mattcannon.com', date: 'Jan 24, 2024', status: 'Delivered', country: 'Australia', total: 13899.48, checked: true },
  { id: '#1529', clientName: 'Graham Hills', clientEmail: 'hi@grahamhills.com', date: 'Jan 21, 2024', status: 'Pending', country: 'India', total: 1569.12, checked: false },
  { id: '#1528', clientName: 'Sandy Houston', clientEmail: 'contact@sandyhouston.com', date: 'Jan 18, 2024', status: 'Delivered', country: 'Canada', total: 899.16, checked: true },
  { id: '#1527', clientName: 'Andy Smith', clientEmail: 'hello@andysmith.com', date: 'Jan 15, 2024', status: 'Pending', country: 'United States', total: 2449.64, checked: false },
];

export const userStats = [
  { title: 'Total Users', value: '250' },
  { title: 'New Users', value: '16' },
  { title: 'Top Users', value: '200' },
  { title: 'Other Users', value: '35' },
];

export const allUsersData = [
{ id: 1, name: 'John Carter', email: 'john@google.com', phone: '(414) 997 - 1274', location: 'United States', company: 'Google', status: 'Online', avatar: 'https://i.pravatar.cc/40?img=1' },
{ id: 2, name: 'Sophie Moore', email: 'sophie@webflow.com', phone: '(216) 480 - 4277', location: 'United Kingdom', company: 'Webflow', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=2' },
{ id: 3, name: 'Matt Cannon', email: 'matt@facebook.com', phone: '(310) 698 - 1989', location: 'United Kingdom', company: 'Facebook', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=3' },
{ id: 4, name: 'Graham Hills', email: 'graham@twitter.com', phone: '(616) 612 - 3890', location: 'India', company: 'Twitter', status: 'Online', avatar: 'https://i.pravatar.cc/40?img=4' },
{ id: 5, name: 'Sandy Houston', email: 'sandy@youtube.com', phone: '(440) 410 - 3848', location: 'Canada', company: 'YouTube', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=5' },
{ id: 6, name: 'Andy Smith', email: 'andy@reddit.com', phone: '(504) 488 - 3288', location: 'United States', company: 'Reddit', status: 'Online', avatar: 'https://i.pravatar.cc/40?img=6' },
{ id: 7, name: 'Lily Woods', email: 'lily@spotify.com', phone: '(381) 652 - 1819', location: 'Australia', company: 'Spotify', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=7' },
{ id: 8, name: 'Patrick Meyer', email: 'patrick@pinterest.com', phone: '(760) 582 - 5670', location: 'United Kingdom', company: 'Pinterest', status: 'Online', avatar: 'https://i.pravatar.cc/40?img=8' },
{ id: 9, name: 'Frances Willer', email: 'frances@twitch.com', phone: '(216) 438 - 5964', location: 'Canada', company: 'Twitch', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=9' },
{ id: 10, name: 'Ernest Houten', email: 'ernest@linkedin.com', phone: '(754) 339 - 8913', location: 'India', company: 'LinkedIn', status: 'Offline', avatar: 'https://i.pravatar.cc/40?img=10' },
// Add more users if you want to test pagination further
];

export const kanbanData = {
  todo: {
    name: 'To do',
    items: [
      { id: 'task-1', title: 'Landing page design & development', description: 'Lorem ipsum dolor sit amet...', tags: ['Development'], assignees: [1, 2], comments: 10, attachments: 4, createdAt: '2025-09-25T10:00:00Z' },
      { id: 'task-2', title: 'Landing page design', description: 'Lorem ipsum dolor sit amet...', tags: ['Design'], assignees: [3], comments: 8, attachments: 3, createdAt: '2025-09-24T14:30:00Z' },
    ],
  },
  inProgress: {
    name: 'In progress',
    items: [
      { id: 'task-3', title: 'Mobile app UI/UX design & development', description: 'Lorem ipsum dolor sit amet...', tags: ['Development'], assignees: [1, 3], comments: 10, attachments: 2, createdAt: '2025-09-23T09:00:00Z' },
      { id: 'task-4', title: 'Fix homepage bugs', description: 'Lorem ipsum dolor sit amet...', tags: ['Development'], assignees: [2], comments: 4, attachments: 12, createdAt: '2025-09-22T11:00:00Z' },
    ],
  },
  completed: {
    name: 'Completed',
    items: [
      { id: 'task-5', title: 'SEO campaign', description: 'Lorem ipsum dolor sit amet...', tags: ['Marketing'], assignees: [1, 2, 3], comments: 11, attachments: 10, createdAt: '2025-09-21T16:00:00Z' },
      { id: 'task-6', title: 'Target definition meeting', description: 'Lorem ipsum dolor sit amet...', tags: ['Marketing'], assignees: [1], comments: 3, attachments: 14, createdAt: '2025-09-20T18:45:00Z' },
    ],
  },
};

export const integrationsData = [
  { id: 1, name: 'Slack', logo: FaSlack, description: 'Sync your team conversations and notifications.', category: 'Communication', status: 'Connected' },
  { id: 2, name: 'Google Analytics', logo: DiGoogleAnalytics, description: 'Track your website traffic and user behavior.', category: 'Marketing', status: 'Connected' },
  { id: 3, name: 'Mailchimp', logo: FaMailchimp, description: 'Manage your email campaigns and subscribers.', category: 'Marketing', status: 'Not Connected' },
  { id: 4, name: 'Stripe', logo: FaStripe, description: 'Process payments and manage subscriptions.', category: 'Sales', status: 'Not Connected' },
  { id: 5, name: 'Salesforce', logo: FaSalesforce, description: 'Manage your customer relationships and sales pipeline.', category: 'Sales', status: 'Connected' },
  { id: 6, name: 'HubSpot', logo: FaHubspot, description: 'All-in-one platform for marketing, sales, and service.', category: 'Marketing', status: 'Not Connected' },
];