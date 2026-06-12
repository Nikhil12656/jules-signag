import { Plus, MoreVertical, MonitorPlay, CircleDot } from 'lucide-react';

export default function Screens() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-5">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Screens</h3>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor your digital signage displays.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center shadow-sm transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Screen
        </button>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Screen Details</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Content</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Sync</th>
                <th scope="col" className="relative px-6 py-4"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <MonitorPlay className="h-5 w-5 text-slate-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900">Lobby TV 1</div>
                      <div className="text-sm text-slate-500">Samsung QLED 55"</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    <CircleDot className="mr-1.5 h-2 w-2 text-emerald-500 fill-emerald-500" />
                    Online
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-900 font-medium">Welcome Playlist</div>
                  <div className="text-xs text-slate-500">Layout: Split Screen</div>
                </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  Just now
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <MonitorPlay className="h-5 w-5 text-slate-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900">Breakroom Display</div>
                      <div className="text-sm text-slate-500">LG WebOS</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                    <CircleDot className="mr-1.5 h-2 w-2 text-rose-500 fill-rose-500" />
                    Offline
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-900 font-medium">Corporate News</div>
                  <div className="text-xs text-slate-500">Layout: Fullscreen</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  2 hours ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
