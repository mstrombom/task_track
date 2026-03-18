import { BarChart3, Users, Home, Settings, FileText, Bell, Plus, Search, Filter, CheckCircle2, Clock, AlertCircle, MoreVertical } from 'lucide-react';

export default function TasksPage() {
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

  const tasks = [
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
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'in-progress':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'todo':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

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
              <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
              <p className="text-gray-600 mt-1">Manage and track all your tasks in one place</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
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
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filters and Search */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filters</span>
              </button>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{task.description}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
                      {task.assignee.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Assigned to</p>
                      <p className="text-sm font-medium text-gray-900">{task.assignee}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">Due date</p>
                    <p className="text-sm font-medium text-gray-900">{task.dueDate}</p>
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
    </div>
  );
}

