import { LayoutTemplate, Save, MonitorUp, GripHorizontal, Maximize2, Settings2, Image as ImageIcon, Type, Video, LayoutGrid } from 'lucide-react';

export default function LayoutDesigner() {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center">
            <LayoutTemplate className="h-6 w-6 mr-2 text-blue-600" />
            Layout Designer
          </h3>
          <p className="text-sm text-slate-500 mt-1">Design multi-zone screen layouts.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium flex items-center transition-colors">
            <Save className="h-4 w-4 mr-2 text-slate-500" />
            Save Draft
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center shadow-sm transition-colors">
            <MonitorUp className="h-4 w-4 mr-2" />
            Publish Layout
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left Sidebar - Toolbar */}
        <div className="w-64 flex flex-col gap-4 overflow-y-auto pr-2 pb-4 scrollbar-hide">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
              <LayoutGrid className="h-4 w-4 mr-1.5 text-slate-500" />
              Zones & Widgets
            </h4>
            <div className="space-y-2">
              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center text-sm font-medium text-slate-700 cursor-grab hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <GripHorizontal className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500" />
                Main Content Area
              </div>
              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center text-sm font-medium text-slate-700 cursor-grab hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <GripHorizontal className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500" />
                Sidebar Sidebar
              </div>
              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center text-sm font-medium text-slate-700 cursor-grab hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <GripHorizontal className="h-4 w-4 mr-2 text-slate-400 group-hover:text-blue-500" />
                Scrolling Ticker
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Basic Elements</h4>
              <div className="grid grid-cols-2 gap-2">
                 <div className="p-2 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center text-xs font-medium text-slate-600 cursor-grab hover:bg-slate-50 hover:border-blue-300 transition-colors aspect-square">
                  <ImageIcon className="h-6 w-6 mb-1 text-indigo-500" /> Image
                 </div>
                 <div className="p-2 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center text-xs font-medium text-slate-600 cursor-grab hover:bg-slate-50 hover:border-blue-300 transition-colors aspect-square">
                  <Video className="h-6 w-6 mb-1 text-rose-500" /> Video
                 </div>
                 <div className="p-2 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center text-xs font-medium text-slate-600 cursor-grab hover:bg-slate-50 hover:border-blue-300 transition-colors aspect-square">
                  <Type className="h-6 w-6 mb-1 text-emerald-500" /> Text
                 </div>
                 <div className="p-2 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center text-xs font-medium text-slate-600 cursor-grab hover:bg-slate-50 hover:border-blue-300 transition-colors aspect-square">
                  <span className="text-xl mb-1">🕒</span> Clock
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Canvas area */}
        <div className="flex-1 bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-inner relative">
          {/* Canvas Toolbar */}
          <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
             <div className="flex space-x-2">
                <button className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-slate-600">1920x1080 (16:9)</button>
             </div>
             <div className="flex space-x-2">
                <button className="text-slate-400 hover:text-slate-600"><Maximize2 className="h-4 w-4" /></button>
             </div>
          </div>

          {/* Canvas Background (Grid) */}
          <div className="flex-1 relative overflow-auto p-8 flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')]">

            {/* The Actual Canvas Representing the Screen */}
            <div className="w-[800px] h-[450px] bg-white border border-slate-300 shadow-md relative overflow-hidden ring-1 ring-slate-900/5">

              {/* Main Zone Example */}
              <div className="absolute top-0 left-0 right-[250px] bottom-[50px] border-2 border-blue-400 bg-blue-50/50 flex flex-col items-center justify-center group cursor-pointer hover:bg-blue-50 transition-colors">
                 <div className="absolute top-2 left-2 text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-2 py-0.5 rounded">Main Zone</div>
                 <ImageIcon className="h-12 w-12 text-blue-200 group-hover:text-blue-300 transition-colors" />
                 <p className="text-sm font-medium text-blue-400 mt-2">Empty Zone</p>
              </div>

              {/* Sidebar Example */}
              <div className="absolute top-0 right-0 w-[250px] bottom-[50px] border-2 border-indigo-400 bg-indigo-50/50 flex flex-col items-center justify-center group cursor-pointer hover:bg-indigo-50 transition-colors">
                <div className="absolute top-2 left-2 text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-100 px-2 py-0.5 rounded">Sidebar</div>
                <span className="text-4xl opacity-50 group-hover:opacity-75 transition-opacity">🕒</span>
              </div>

              {/* Ticker Example */}
              <div className="absolute left-0 right-0 bottom-0 h-[50px] border-2 border-emerald-400 bg-emerald-50/50 flex items-center justify-center group cursor-pointer hover:bg-emerald-50 transition-colors overflow-hidden">
                <div className="absolute top-1 left-2 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded">Ticker</div>
                <div className="w-full truncate px-4 text-emerald-600/50 font-mono text-sm mt-2">
                  BREAKING NEWS: Company Q3 earnings exceed expectations...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-64 bg-white border border-slate-200 rounded-xl shadow-sm p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
             <h4 className="text-sm font-semibold text-slate-900 flex items-center">
                <Settings2 className="h-4 w-4 mr-1.5 text-slate-500" />
                Properties
              </h4>
          </div>

          <div className="space-y-4">
             <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Zone Name</label>
                <input type="text" className="w-full text-sm border border-slate-300 rounded px-2 py-1.5 focus:ring-blue-500 focus:border-blue-500" defaultValue="Main Zone" />
             </div>

             <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Width (%)</label>
                  <input type="number" className="w-full text-sm border border-slate-300 rounded px-2 py-1.5" defaultValue="68" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Height (%)</label>
                  <input type="number" className="w-full text-sm border border-slate-300 rounded px-2 py-1.5" defaultValue="88" />
                </div>
             </div>

             <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Background Color</label>
                <div className="flex items-center space-x-2">
                  <input type="color" className="h-8 w-8 rounded border border-slate-200 cursor-pointer" defaultValue="#000000" />
                  <span className="text-sm font-mono text-slate-500">#000000</span>
                </div>
             </div>

             <div className="pt-4 border-t border-slate-100">
               <button className="w-full py-2 bg-rose-50 text-rose-600 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors">
                 Delete Zone
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
