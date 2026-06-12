'use client';

import { useState, use } from 'react';
import Link from 'next/link';

export default function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ team_slug: string }>;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Unwrap params using React.use for Next.js 15+
  const resolvedParams = use(params);
  const teamSlug = resolvedParams?.team_slug || 'workspace';

  const navItems = [
    { name: 'Dashboard', href: `/customer/${teamSlug}` },
    { name: 'Screens', href: `/customer/${teamSlug}/screens` },
    { name: 'Assets', href: `/customer/${teamSlug}/assets` },
    { name: 'Playlists', href: `/customer/${teamSlug}/playlists` },
    { name: 'Schedules', href: `/customer/${teamSlug}/schedules` },
    { name: 'Apps', href: `/customer/${teamSlug}/apps` },
    { name: 'Settings', href: `/customer/${teamSlug}/settings` },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
          <span className="text-xl font-bold truncate">{teamSlug}</span>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="mt-5 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              className="text-gray-500 hover:text-gray-700 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰ Menu
            </button>
            <div className="flex-1 flex justify-end">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="sr-only">View notifications</span>
                  🔔
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      U
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
