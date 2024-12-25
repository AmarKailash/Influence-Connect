import React from 'react';
import { Package, ShoppingBag, Heart, Settings, CreditCard, Bell } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* User Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
              <p className="text-gray-600">Member since March 2024</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Orders */}
          <DashboardCard
            icon={<Package className="w-8 h-8 text-blue-500" />}
            title="My Orders"
            count={5}
            link="/orders"
          />

          {/* Listed Items */}
          <DashboardCard
            icon={<ShoppingBag className="w-8 h-8 text-green-500" />}
            title="Listed Items"
            count={3}
            link="/listings"
          />

          {/* Wishlist */}
          <DashboardCard
            icon={<Heart className="w-8 h-8 text-red-500" />}
            title="Wishlist"
            count={8}
            link="/wishlist"
          />

          {/* Settings */}
          <DashboardCard
            icon={<Settings className="w-8 h-8 text-gray-500" />}
            title="Settings"
            link="/settings"
          />

          {/* Payment Methods */}
          <DashboardCard
            icon={<CreditCard className="w-8 h-8 text-purple-500" />}
            title="Payment Methods"
            link="/payments"
          />

          {/* Notifications */}
          <DashboardCard
            icon={<Bell className="w-8 h-8 text-yellow-500" />}
            title="Notifications"
            count={2}
            link="/notifications"
          />
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y">
              {activities.map((activity, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, count, link }: {
  icon: React.ReactNode;
  title: string;
  count?: number;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        {icon}
        {count !== undefined && (
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            {count}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <a href={link} className="text-green-500 text-sm hover:underline mt-2 inline-block">
        View Details →
      </a>
    </div>
  );
}

const activities = [
  {
    title: 'Order Delivered',
    description: 'Your order #12345 has been delivered successfully',
    time: '2 hours ago'
  },
  {
    title: 'New Message',
    description: 'You received a message regarding iPhone 13 Pro',
    time: '5 hours ago'
  },
  {
    title: 'Price Drop Alert',
    description: 'MacBook Air M1 price has dropped by ₹5,000',
    time: '1 day ago'
  },
  {
    title: 'Item Listed',
    description: 'Your Samsung Galaxy S21 has been listed successfully',
    time: '2 days ago'
  }
];

export default Dashboard;