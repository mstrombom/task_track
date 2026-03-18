import { BarChart3, Users, DollarSign, Activity, Home, Settings, FileText, Bell } from 'lucide-react';

export default function HomePage() {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'bg-indigo-500',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+23.1%',
      icon: Activity,
      color: 'bg-violet-500',
    },
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created new task', time: '2 minutes ago', status: 'success' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '15 minutes ago', status: 'info' },
    { id: 3, user: 'Mike Johnson', action: 'Completed project', time: '1 hour ago', status: 'success' },
    { id: 4, user: 'Sarah Williams', action: 'Added comment', time: '2 hours ago', status: 'info' },
    { id: 5, user: 'Tom Brown', action: 'Deleted task', time: '3 hours ago', status: 'warning' },
  ];

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/', active: true },
    { name: 'Tasks', icon: FileText, href: '/tasks', active: false },
    { name: 'Analytics', icon: BarChart3, href: '/analytics', active: false },
    { name: 'Notifications', icon: Bell, href: '/notifications', active: false },
    { name: 'Settings', icon: Settings, href: '/settings', active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">TaskTrack</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your tasks efficiently</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
      {navItems.map((item) => {
  const Icon = item.icon;
  return (
    <a
      key={item.name}
      href={item.href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        item.active
          ? 'bg-indigo-600 text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{item.name}</span>
    </a>
  );
})}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back, John</h2>
              <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              New Task
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-emerald-600 text-sm font-semibold">{stat.change}</span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Activity Table */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <p className="text-sm text-gray-600 mt-1">Latest updates from your team</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-900">{activity.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            activity.status === 'success'
                              ? 'bg-emerald-100 text-emerald-700'
                              : activity.status === 'warning'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
