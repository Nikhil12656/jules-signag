import { Plus, MoreVertical, MonitorPlay, CircleDot } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Button } from './ui/Button';
import { DataTable, Column } from './cms/DataTable';

interface ScreenData {
  id: string;
  name: string;
  model: string;
  status: 'online' | 'offline';
  content: string;
  layout: string;
  lastSync: string;
}

export default function Screens() {
  const mockScreens: ScreenData[] = [
    { id: '1', name: 'Lobby TV 1', model: 'Samsung QLED 55"', status: 'online', content: 'Welcome Playlist', layout: 'Split Screen', lastSync: 'Just now' },
    { id: '2', name: 'Breakroom Display', model: 'LG WebOS', status: 'offline', content: 'Corporate News', layout: 'Fullscreen', lastSync: '2 hours ago' },
  ];

  const columns: Column<ScreenData>[] = [
    {
      key: 'details',
      header: 'Screen Details',
      cell: (item) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
            <MonitorPlay className="h-5 w-5 text-slate-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-slate-900">{item.name}</div>
            <div className="text-sm text-slate-500">{item.model}</div>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      cell: (item) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'online' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
          <CircleDot className={`mr-1.5 h-2 w-2 ${item.status === 'online' ? 'text-emerald-500 fill-emerald-500' : 'text-rose-500 fill-rose-500'}`} />
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      )
    },
    {
      key: 'content',
      header: 'Current Content',
      cell: (item) => (
        <div>
          <div className="text-sm text-slate-900 font-medium">{item.content}</div>
          <div className="text-xs text-slate-500">Layout: {item.layout}</div>
        </div>
      )
    },
    {
      key: 'lastSync',
      header: 'Last Sync',
      cell: (item) => <span className="text-sm text-slate-500">{item.lastSync}</span>
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-2">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Screens</h3>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor your digital signage displays.</p>
        </div>
        <Button leftIcon={<Plus className="h-4 w-4" />}>
          Add Screen
        </Button>
      </div>

      <Card noPadding>
        <DataTable
          data={mockScreens}
          columns={columns}
          keyExtractor={(item) => item.id}
          actions={(item) => (
            <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors">
              <MoreVertical className="h-5 w-5" />
            </button>
          )}
        />
      </Card>
    </div>
  );
}
