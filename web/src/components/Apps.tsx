export default function Apps() {
  const appsList = [
    { name: 'Clock', icon: '🕒' },
    { name: 'World Clock', icon: '🌍' },
    { name: 'Countdown Timer', icon: '⏳' },
    { name: 'Count Up Timer', icon: '⏱️' },
    { name: 'Weather', icon: '☀️' },
    { name: 'RSS Feed', icon: '📰' },
    { name: 'News Feed', icon: '🗞️' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Google Calendar', icon: '📆' },
    { name: 'Google Slides', icon: '📊' },
    { name: 'Website Embed', icon: '🌐' },
    { name: 'YouTube', icon: '▶️' },
    { name: 'QR Code Generator', icon: '📱' },
    { name: 'Image Gallery', icon: '🖼️' },
    { name: 'Digital Notice Board', icon: '📌' },
    { name: 'Stock Ticker', icon: '📈' },
    { name: 'Currency Exchange', icon: '💱' },
    { name: 'Social Feed', icon: '👥' },
    { name: 'Birthday Board', icon: '🎂' },
    { name: 'Employee Recognition', icon: '🏆' },
    { name: 'Announcements', icon: '📢' },
    { name: 'Traffic Information', icon: '🚗' },
    { name: 'Meeting Room Display', icon: '🚪' },
    { name: 'KPI Dashboard', icon: '📉' },
    { name: 'Clock + Weather Combo', icon: '🕰️' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">App Marketplace</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {appsList.map((app, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">{app.icon}</div>
            <h4 className="text-sm font-medium text-gray-900">{app.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
