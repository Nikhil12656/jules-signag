'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MonitorPlay,
  Images,
  ListVideo,
  CalendarDays,
  Blocks,
  Settings,
  Bell,
  Menu,
  X,
  UserCircle
} from 'lucide-react';

export default function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ team_slug: string }>;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Unwrap params using React.use for Next.js 15+
  const resolvedParams = use(params);
  const teamSlug = resolvedParams?.team_slug || 'workspace';

  const navItems = [
    { name: 'Dashboard', href: `/customer/${teamSlug}`, icon: LayoutDashboard },
    { name: 'Screens', href: `/customer/${teamSlug}/screens`, icon: MonitorPlay },
    { name: 'Assets', href: `/customer/${teamSlug}/assets`, icon: Images },
    { name: 'Playlists', href: `/customer/${teamSlug}/playlists`, icon: ListVideo },
    { name: 'Schedules', href: `/customer/${teamSlug}/schedules`, icon: CalendarDays },
    { name: 'Layout Designer', href: `/customer/${teamSlug}/layout-designer`, icon: Blocks },
    { name: 'Apps', href: `/customer/${teamSlug}/apps`, icon: Blocks },
    { name: 'Settings', href: `/customer/${teamSlug}/settings`, icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out shadow-xl flex flex-col`}>
        <div className="flex items-center justify-between h-16 px-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center space-x-2 truncate">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              {teamSlug.charAt(0).toUpperCase()}
            </div>
            <span className="text-lg font-bold text-white truncate capitalize">{teamSlug.replace('-', ' ')}</span>
          </div>
          <button
            className="md:hidden p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.name !== 'Dashboard' && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/10 text-blue-400'
                      : 'hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-slate-800/50 text-slate-300">
            <span className="truncate block w-full text-xs text-slate-400">Plan: Enterprise</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 z-10">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              className="text-slate-500 hover:text-slate-700 md:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1 flex justify-end">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <button className="bg-white p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-5 w-5" />
                </button>
                <div className="relative">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    <UserCircle className="h-8 w-8 text-slate-400 hover:text-slate-600 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50/50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
