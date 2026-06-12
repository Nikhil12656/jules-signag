export default function SchedulesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Schedules</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
          Create Schedule
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
        <div className="text-4xl mb-4">📅</div>
        <h4 className="text-lg font-medium text-gray-900">No schedules created yet</h4>
        <p className="text-gray-500 mt-2">Start by creating a schedule to automate your content playback.</p>
      </div>
    </div>
  );
}
