export default function Playlists() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Playlists</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
          Create Playlist
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Lobby Welcome</h4>
              <p className="text-sm text-gray-500 mt-1">5 items • 45s total duration</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">⚙️</button>
          </div>
          <div className="mt-4 flex space-x-2">
            <div className="h-12 w-12 bg-gray-200 rounded"></div>
            <div className="h-12 w-12 bg-gray-200 rounded"></div>
            <div className="h-12 w-12 bg-gray-200 rounded"></div>
            <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">+2</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Cafeteria Menu</h4>
              <p className="text-sm text-gray-500 mt-1">2 items • 30s total duration</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">⚙️</button>
          </div>
          <div className="mt-4 flex space-x-2">
            <div className="h-12 w-12 bg-gray-200 rounded"></div>
            <div className="h-12 w-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
