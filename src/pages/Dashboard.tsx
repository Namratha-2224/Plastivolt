import React from 'react';
import { 
  BarChart3, 
  Users, 
  Battery, 
  Trash2, 
  Settings, 
  Bell, 
  User,
  ChevronDown,
  Search
} from 'lucide-react';
import Header from '../components/Header';

const Dashboard = () => {
  const stats = [
    { label: 'Total Waste Processed', value: '1,234 tons', change: '+12%' },
    { label: 'Energy Generated', value: '456 MWh', change: '+8%' },
    { label: 'Carbon Offset', value: '789 tons', change: '+15%' },
    { label: 'Efficiency Rate', value: '94.5%', change: '+2%' }
  ];

  const recentActivity = [
    { type: 'Waste Collection', location: 'North Facility', amount: '12.5 tons', time: '2 hours ago' },
    { type: 'Energy Generation', location: 'Main Plant', amount: '45 MWh', time: '4 hours ago' },
    { type: 'System Update', location: 'AI Core', amount: 'v2.3.4', time: '6 hours ago' },
    { type: 'Maintenance', location: 'South Facility', amount: 'Completed', time: '8 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            
            <button className="p-2 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-700">John Doe</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm mb-2">{stat.label}</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-green-600 text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Performance Overview</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Placeholder for chart */}
              <BarChart3 className="h-12 w-12 text-gray-400" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    {activity.type === 'Waste Collection' ? (
                      <Trash2 className="h-5 w-5 text-green-600" />
                    ) : activity.type === 'Energy Generation' ? (
                      <Battery className="h-5 w-5 text-green-600" />
                    ) : activity.type === 'System Update' ? (
                      <Settings className="h-5 w-5 text-green-600" />
                    ) : (
                      <Users className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-gray-500">{activity.location}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-medium text-green-600">{activity.amount}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-center text-green-600 hover:text-green-700 text-sm font-medium">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;