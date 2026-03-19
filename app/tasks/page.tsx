'use client';

import { BarChart3, Users, Home, Settings, FileText, Bell, Plus, Search, Filter, CheckCircle2, Clock, AlertCircle, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import NewTaskModal, { TaskFormData } from '../components/NewTaskModal';

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create mockups and wireframes for the new product landing page',
      status: 'in-progress',
      priority: 'high',
      assignee: 'John Doe',
      dueDate: '2026-03-20',
      tags: ['Design', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Fix authentication bug',
      description: 'Users are unable to login with Google OAuth',
      status: 'todo',
      priority: 'urgent',
      assignee: 'Jane Smith',
      dueDate: '2026-03-19',
      tags: ['Bug', 'Backend'],
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Add API documentation for new endpoints',
      status: 'completed',
      priority: 'low',
      assignee: 'Mike Johnson',
      dueDate: '2026-03-15',
      tags: ['Documentation'],
    },
    {
      id: 4,
      title: 'Implement dark mode',
      description: 'Add dark mode support across the application',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Sarah Williams',
      dueDate: '2026-03-25',
      tags: ['Feature', 'UI/UX'],
    },
    {
      id: 5,
      title: 'Database optimization',
      description: 'Optimize slow queries and add proper indexes',
      status: 'todo',
      priority: 'high',
      assignee: 'Tom Brown',
      dueDate: '2026-03-22',
      tags: ['Performance', 'Backend'],
    },
    {
      id: 6,
      title: 'User testing session',
      description: 'Conduct user testing for the new checkout flow',
      status: 'completed',
      priority: 'medium',
      assignee: 'John Doe',
      dueDate: '2026-03-10',
      tags: ['Research', 'UX'],
    },
  ]);

  const handleCreateTask = (taskData: TaskFormData) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskData.title,
      description: taskData.description,
      status: 'todo' as const,
      priority: taskData.priority,
      assignee: taskData.assignee || 'Unassigned',
      dueDate: taskData.dueDate || new Date().toISOString().split('T')[0],
      tags: taskData.tags ? taskData.tags.split(',').map(tag => tag.trim()) : [],
    };
    setTasks([newTask, ...tasks]);
  };

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/', active: false },
    { name: 'Tasks', icon: FileText, href: '/tasks', active: true },
    { name: 'Analytics', icon: BarChart3, href: '/analytics', active: false },
    { name: 'Notifications', icon: Bell, href: '/notifications', active: false },
    { name: 'Settings', icon: Settings, href: '/settings', active: false },
  ];

  const taskStats = [
    {
      title: 'Total Tasks',
      value: '48',
      icon: FileText,
      color: 'bg-indigo-500',
    },
    {
      title: 'In Progress',
      value: '12',
      icon: Clock,
      color: 'bg-amber-500',
    },
    {
      title: 'Completed',
      value: '28',
      icon: CheckCircle2,
      color: 'bg-emerald-500',
    },
    {
      title: 'Overdue',
      value: '8',
      icon: AlertCircle,
      color: 'bg-rose-500',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30 backdrop-blur-sm';
      case 'in-progress':
        return 'bg-amber-500/20 text-amber-300 border-amber-400/30 backdrop-blur-sm';
      case 'todo':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-sm';
      default:
        return 'bg-white/10 text-white/70 border-white/20 backdrop-blur-sm';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-rose-500/20 text-rose-300 border-rose-400/30 backdrop-blur-sm';
      case 'high':
        return 'bg-orange-500/20 text-orange-300 border-orange-400/30 backdrop-blur-sm';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30 backdrop-blur-sm';
      case 'low':
        return 'bg-white/10 text-white/70 border-white/20 backdrop-blur-sm';
      default:
        return 'bg-white/10 text-white/70 border-white/20 backdrop-blur-sm';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

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
              <h2 className="text-2xl font-bold text-white">Tasks</h2>
              <p className="text-white/70 mt-1">Manage and track all your tasks in one place</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg font-medium transition-colors border border-white/30"
            >
              <Plus className="w-5 h-5" />
              New Task
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {taskStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${stat.color} p-3 rounded-lg backdrop-blur-sm`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white/70 text-sm font-medium">{stat.title}</h3>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filters and Search */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Filter className="w-5 h-5 text-white/70" />
                <span className="text-white font-medium">Filters</span>
              </button>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{task.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{task.description}</p>
                  </div>
                  <button className="text-white/50 hover:text-white/80 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-semibold">
                      {task.assignee.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Assigned to</p>
                      <p className="text-sm font-medium text-white">{task.assignee}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-white/50">Due date</p>
                    <p className="text-sm font-medium text-white">{task.dueDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(task.status)}`}>
                    {formatStatus(task.status)}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(task.priority)}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </div>
              </div>
            ))}
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

