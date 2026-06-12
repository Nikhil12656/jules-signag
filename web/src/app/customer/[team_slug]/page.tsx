import {
  MonitorPlay,
  Images,
  ListVideo,
  CalendarDays,
  Clock,
  Settings2,
  UserPlus
} from 'lucide-react';
import { use } from 'react';

export default function DashboardPage({ params }: { params: Promise<{ team_slug: string }> }) {
  // Unwrap params using React.use for Next.js 15+
  const resolvedParams = use(params);
  // In a real app, we would fetch workspace metrics from Supabase here

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Dashboard Overview</h3>
        <p className="text-sm text-slate-500 mt-1">Here's what's happening in your workspace today.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Metric Cards */}
        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-xl">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                <MonitorPlay className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Total Screens</dt>
                  <dd>
                    <div className="text-2xl font-semibold text-slate-900">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm flex items-center space-x-2">
              <span className="flex items-center text-emerald-600 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-1.5"></span>
                10 Online
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center text-rose-600 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-1.5"></span>
                2 Offline
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-xl flex flex-col justify-between">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                <Images className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Media Assets</dt>
                  <dd>
                    <div className="text-2xl font-semibold text-slate-900">145</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
            <div className="text-sm text-slate-500">
              <span className="text-indigo-600 font-medium">+12</span> added this week
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-xl flex flex-col justify-between">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-violet-50 p-3 rounded-lg">
                <ListVideo className="h-6 w-6 text-violet-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Active Playlists</dt>
                  <dd>
                    <div className="text-2xl font-semibold text-slate-900">8</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
            <div className="text-sm text-slate-500">
               Managing <span className="font-medium text-slate-700">42</span> total items
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-xl flex flex-col justify-between">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-50 p-3 rounded-lg">
                <CalendarDays className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Upcoming Schedules</dt>
                  <dd>
                    <div className="text-2xl font-semibold text-slate-900">3</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
            <div className="text-sm text-slate-500">
              Next transition in <span className="font-medium text-slate-700">2h 15m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="px-6 py-4 flex items-start space-x-4 hover:bg-slate-50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full mt-1">
              <Settings2 className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-900 font-medium">Admin updated "Lobby Playlist"</p>
              <p className="text-sm text-slate-500">Added 3 new promotional videos to the rotation.</p>
            </div>
            <div className="flex-shrink-0 flex items-center text-sm text-slate-400">
              <Clock className="h-3 w-3 mr-1" /> 10m ago
            </div>
          </div>

          <div className="px-6 py-4 flex items-start space-x-4 hover:bg-slate-50 transition-colors">
             <div className="bg-rose-100 p-2 rounded-full mt-1">
              <MonitorPlay className="h-4 w-4 text-rose-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-900 font-medium">Screen "Reception TV" went offline</p>
              <p className="text-sm text-slate-500">Device has missed 3 consecutive heartbeats.</p>
            </div>
            <div className="flex-shrink-0 flex items-center text-sm text-slate-400">
              <Clock className="h-3 w-3 mr-1" /> 1h ago
            </div>
          </div>

          <div className="px-6 py-4 flex items-start space-x-4 hover:bg-slate-50 transition-colors">
             <div className="bg-emerald-100 p-2 rounded-full mt-1">
              <UserPlus className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-900 font-medium">New user invited</p>
              <p className="text-sm text-slate-500">Sarah Jenkins was invited to join as an Editor.</p>
            </div>
            <div className="flex-shrink-0 flex items-center text-sm text-slate-400">
              <Clock className="h-3 w-3 mr-1" /> 1d ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
