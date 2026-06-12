import { Search, Filter, AppWindow } from 'lucide-react';

export default function Apps() {
  const appsList = [
    { name: 'Clock', icon: '🕒', category: 'Time & Weather' },
    { name: 'World Clock', icon: '🌍', category: 'Time & Weather' },
    { name: 'Countdown Timer', icon: '⏳', category: 'Time & Weather' },
    { name: 'Count Up Timer', icon: '⏱️', category: 'Time & Weather' },
    { name: 'Weather', icon: '☀️', category: 'Time & Weather' },
    { name: 'RSS Feed', icon: '📰', category: 'News & Social' },
    { name: 'News Feed', icon: '🗞️', category: 'News & Social' },
    { name: 'Calendar', icon: '📅', category: 'Productivity' },
    { name: 'Google Calendar', icon: '📆', category: 'Productivity' },
    { name: 'Google Slides', icon: '📊', category: 'Productivity' },
    { name: 'Website Embed', icon: '🌐', category: 'General' },
    { name: 'YouTube', icon: '▶️', category: 'Media' },
    { name: 'QR Code Generator', icon: '📱', category: 'General' },
    { name: 'Image Gallery', icon: '🖼️', category: 'Media' },
    { name: 'Digital Notice Board', icon: '📌', category: 'General' },
    { name: 'Stock Ticker', icon: '📈', category: 'Finance' },
    { name: 'Currency Exchange', icon: '💱', category: 'Finance' },
    { name: 'Social Feed', icon: '👥', category: 'News & Social' },
    { name: 'Birthday Board', icon: '🎂', category: 'Culture' },
    { name: 'Employee Recognition', icon: '🏆', category: 'Culture' },
    { name: 'Announcements', icon: '📢', category: 'General' },
    { name: 'Traffic Information', icon: '🚗', category: 'General' },
    { name: 'Meeting Room Display', icon: '🚪', category: 'Productivity' },
    { name: 'KPI Dashboard', icon: '📉', category: 'Productivity' },
    { name: 'Clock + Weather Combo', icon: '🕰️', category: 'Time & Weather' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center">
            <AppWindow className="h-6 w-6 mr-2 text-blue-600" />
            App Marketplace
          </h3>
          <p className="text-sm text-slate-500 mt-1">Enhance your screens with dynamic widgets and integrations.</p>
        </div>
        <div className="flex space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
              placeholder="Search apps..."
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Time & Weather', 'News & Social', 'Productivity', 'Media', 'Finance', 'Culture', 'General'].map((cat) => (
          <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === 'All' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {appsList.map((app, idx) => (
          <div key={idx} className="group bg-white border border-slate-200 rounded-xl p-5 text-center hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">{app.icon}</div>
              <h4 className="text-sm font-semibold text-slate-900 leading-tight">{app.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{app.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
