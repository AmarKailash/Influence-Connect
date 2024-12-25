import React from 'react';
import { Users, Package, ShoppingBag, DollarSign, AlertTriangle, BarChart3 } from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<DollarSign className="w-8 h-8 text-green-500" />}
            title="Total Revenue"
            value="₹8,45,290"
            trend="+12.5%"
            isPositive={true}
          />
          <StatCard
            icon={<Package className="w-8 h-8 text-blue-500" />}
            title="Total Orders"
            value="1,234"
            trend="+8.2%"
            isPositive={true}
          />
          <StatCard
            icon={<Users className="w-8 h-8 text-purple-500" />}
            title="Total Users"
            value="5,678"
            trend="+15.3%"
            isPositive={true}
          />
          <StatCard
            icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />}
            title="Pending Issues"
            value="23"
            trend="-5.1%"
            isPositive={false}
          />
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="text-green-500 hover:text-green-600">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Order ID</th>
                  <th className="text-left py-3">Customer</th>
                  <th className="text-left py-3">Product</th>
                  <th className="text-left py-3">Amount</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3">#{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.product}</td>
                    <td className="py-3">₹{order.amount.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        statusColors[order.status]
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActionCard
            icon={<ShoppingBag className="w-6 h-6" />}
            title="Add New Product"
            description="List a new refurbished product"
          />
          <QuickActionCard
            icon={<Users className="w-6 h-6" />}
            title="Manage Users"
            description="View and manage user accounts"
          />
          <QuickActionCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="View Reports"
            description="Access detailed analytics"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, trend, isPositive }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className={`text-sm ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function QuickActionCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

const recentOrders = [
  {
    id: '12345',
    customer: 'John Doe',
    product: 'iPhone 13 Pro',
    amount: 54999,
    status: 'Completed'
  },
  {
    id: '12344',
    customer: 'Jane Smith',
    product: 'MacBook Air M1',
    amount: 69999,
    status: 'Processing'
  },
  {
    id: '12343',
    customer: 'Mike Johnson',
    product: 'iPad Pro',
    amount: 71999,
    status: 'Pending'
  },
  {
    id: '12342',
    customer: 'Sarah Williams',
    product: 'AirPods Pro',
    amount: 12999,
    status: 'Completed'
  }
];

const statusColors = {
  Completed: 'bg-green-100 text-green-800',
  Processing: 'bg-blue-100 text-blue-800',
  Pending: 'bg-yellow-100 text-yellow-800'
};

export default AdminDashboard;