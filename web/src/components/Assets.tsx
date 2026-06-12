export default function Assets() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Media Assets</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
          Upload Asset
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Placeholder Asset Cards */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">🖼️</span>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900 truncate">promo_image_{item}.jpg</p>
              <p className="text-xs text-gray-500">Image • 2.4 MB</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
