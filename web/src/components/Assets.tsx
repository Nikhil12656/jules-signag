import { UploadCloud, Image as ImageIcon, FileText, Video, MoreHorizontal, Search, Filter } from 'lucide-react';

export default function Assets() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Media Assets</h3>
          <p className="text-sm text-slate-500 mt-1">Upload and organize your images, videos, and documents.</p>
        </div>
        <div className="flex space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
              placeholder="Search assets..."
            />
          </div>
          <button className="bg-white border border-slate-300 p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
        <div className="mx-auto h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors">
          <UploadCloud className="h-12 w-12" />
        </div>
        <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
          <span className="relative cursor-pointer rounded-md bg-transparent font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
            <span>Upload a file</span>
          </span>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-slate-500 mt-1">PNG, JPG, MP4 up to 50MB</p>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {[
          { name: 'summer_promo_bg.jpg', type: 'image', size: '2.4 MB', icon: ImageIcon },
          { name: 'product_demo.mp4', type: 'video', size: '15.2 MB', icon: Video },
          { name: 'q3_report.pdf', type: 'document', size: '1.1 MB', icon: FileText },
          { name: 'logo_transparent.png', type: 'image', size: '450 KB', icon: ImageIcon },
          { name: 'welcome_video_v2.mp4', type: 'video', size: '22.8 MB', icon: Video },
          { name: 'menu_board_digital.jpg', type: 'image', size: '3.7 MB', icon: ImageIcon },
        ].map((item, idx) => (
          <div key={idx} className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col relative">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-white/90 backdrop-blur-sm rounded-md p-1 shadow-sm">
              <button className="text-slate-500 hover:text-slate-900">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="h-32 bg-slate-100 flex items-center justify-center group-hover:bg-slate-200/50 transition-colors">
              <item.icon className={`h-10 w-10 ${item.type === 'image' ? 'text-blue-400' : item.type === 'video' ? 'text-rose-400' : 'text-emerald-400'}`} />
            </div>
            <div className="p-3 bg-white">
              <p className="text-sm font-medium text-slate-900 truncate" title={item.name}>{item.name}</p>
              <div className="flex items-center justify-between mt-1">
                 <p className="text-xs text-slate-500 capitalize">{item.type}</p>
                 <p className="text-xs text-slate-400">{item.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
