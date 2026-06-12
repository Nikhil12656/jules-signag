import { Plus, GripVertical, Settings, Clock, Image as ImageIcon, Video, PlayCircle } from 'lucide-react';

export default function Playlists() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-5 border-b border-slate-200">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Playlists</h3>
          <p className="text-sm text-slate-500 mt-1">Organize your assets into continuous playback loops.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center shadow-sm transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Create Playlist
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Playlist Card 1 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
          <div className="p-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 flex items-center">
                Lobby Welcome
                <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  Active
                </span>
              </h4>
              <p className="text-sm text-slate-500 mt-1 flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1.5" /> 45s total duration • 5 items
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors">
                <PlayCircle className="h-5 w-5" />
              </button>
              <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md hover:bg-slate-100 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-0 flex-1">
            <ul className="divide-y divide-slate-100">
              {/* Item 1 */}
              <li className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <GripVertical className="h-4 w-4 text-slate-300 mr-3 cursor-move" />
                <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">Welcome Image.jpg</p>
                  <p className="text-xs text-slate-500">10s</p>
                </div>
              </li>
              {/* Item 2 */}
              <li className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <GripVertical className="h-4 w-4 text-slate-300 mr-3 cursor-move" />
                <div className="h-10 w-10 bg-rose-100 rounded flex items-center justify-center flex-shrink-0">
                  <Video className="h-5 w-5 text-rose-600" />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">Company_Promo_Q3.mp4</p>
                  <p className="text-xs text-slate-500">25s</p>
                </div>
              </li>
              {/* Item 3 */}
               <li className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <GripVertical className="h-4 w-4 text-slate-300 mr-3 cursor-move" />
                <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">Core_Values.jpg</p>
                  <p className="text-xs text-slate-500">10s</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 text-center">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">+ Add media to playlist</button>
          </div>
        </div>

        {/* Playlist Card 2 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
          <div className="p-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 flex items-center">
                Cafeteria Menu
                <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                  Inactive
                </span>
              </h4>
              <p className="text-sm text-slate-500 mt-1 flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1.5" /> 30s total duration • 2 items
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors">
                <PlayCircle className="h-5 w-5" />
              </button>
              <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md hover:bg-slate-100 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-0 flex-1">
            <ul className="divide-y divide-slate-100">
               {/* Item 1 */}
               <li className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <GripVertical className="h-4 w-4 text-slate-300 mr-3 cursor-move" />
                <div className="h-10 w-10 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">Lunch_Specials.png</p>
                  <p className="text-xs text-slate-500">15s</p>
                </div>
              </li>
               {/* Item 2 */}
               <li className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <GripVertical className="h-4 w-4 text-slate-300 mr-3 cursor-move" />
                <div className="h-10 w-10 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">Healthy_Options.png</p>
                  <p className="text-xs text-slate-500">15s</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 text-center">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">+ Add media to playlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
