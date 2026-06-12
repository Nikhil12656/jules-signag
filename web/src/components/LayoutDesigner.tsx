export default function LayoutDesigner() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Layout Designer</h3>
        <div className="space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">
            Save Draft
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
            Publish Layout
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 mt-4">
        {/* Toolbar */}
        <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <h4 className="font-medium text-gray-900 mb-4">Zones</h4>
          <div className="space-y-2">
            <div className="p-3 border border-dashed border-gray-300 rounded bg-gray-50 text-center text-sm text-gray-600 cursor-move">
              Main Content Zone
            </div>
            <div className="p-3 border border-dashed border-gray-300 rounded bg-gray-50 text-center text-sm text-gray-600 cursor-move">
              Sidebar Zone
            </div>
            <div className="p-3 border border-dashed border-gray-300 rounded bg-gray-50 text-center text-sm text-gray-600 cursor-move">
              Ticker / Footer Zone
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
          <div className="text-gray-500 text-center">
            <p>Drag and drop zones here to create a layout.</p>
            <p className="text-sm mt-2">1920x1080 (16:9)</p>
          </div>

          {/* Example of a layout being built */}
          <div className="absolute inset-4 border-2 border-blue-400 bg-white opacity-50 pointer-events-none"></div>
          <div className="absolute top-4 left-4 right-64 bottom-4 border-2 border-green-400 bg-white opacity-50 pointer-events-none flex items-center justify-center text-xs">Main Zone</div>
          <div className="absolute top-4 right-4 w-56 bottom-4 border-2 border-yellow-400 bg-white opacity-50 pointer-events-none flex items-center justify-center text-xs">Sidebar</div>
        </div>
      </div>
    </div>
  );
}
