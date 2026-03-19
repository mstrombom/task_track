'use client';

import { BarChart3, Users, DollarSign, Activity, Home, Settings, FileText, Bell } from 'lucide-react';
import { useState } from 'react';
import NewTaskModal, { TaskFormData } from './components/NewTaskModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateTask = (taskData: TaskFormData) => {
    console.log('New task created:', taskData);
    // In a real app, you would save this to a database or state management
    // For now, we'll just log it
  };
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
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col">
        <div className="p-6 border-b border-white/20">
          <h1 className="text-2xl font-bold text-white">TaskTrack</h1>
          <p className="text-sm text-white/70 mt-1">Manage your tasks efficiently</p>
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
          ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{item.name}</span>
    </a>
  );
})}
        </nav>

        <div className="p-4 border-t border-white/20">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-white/60 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/20 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Welcome back, John</h2>
              <p className="text-white/70 mt-1">Here's what's happening with your projects today.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg font-medium transition-colors border border-white/30"
            >
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
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg backdrop-blur-sm`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-emerald-300 text-sm font-semibold">{stat.change}</span>
                  </div>
                  <h3 className="text-white/70 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Activity Table */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg">
            <div className="px-6 py-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              <p className="text-sm text-white/70 mt-1">Latest updates from your team</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 backdrop-blur-sm">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-transparent">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-sm font-semibold">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="ml-3 text-sm font-medium text-white">{activity.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">
                        {activity.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border backdrop-blur-sm ${
                            activity.status === 'success'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                              : activity.status === 'warning'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                              : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
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

      {/* New Task Modal */}
      <NewTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}
