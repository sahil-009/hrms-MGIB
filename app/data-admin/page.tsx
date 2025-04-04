export default function DashboardPage() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen font-sans text-sm">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Welcome back, Alex!</h1>
        <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg shadow hover:bg-red-600 text-sm">Check In</button>
      </header>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg p-3 shadow">
          <h2 className="text-xs text-gray-600">Hours Worked</h2>
          <p className="text-lg font-semibold">32.5h</p>
          <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="bg-green-500 w-2/3 h-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 shadow">
          <h2 className="text-xs text-gray-600">Leave Balance</h2>
          <p className="text-lg font-semibold">18 days</p>
          <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="bg-blue-500 w-3/4 h-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 shadow">
          <h2 className="text-xs text-gray-600">Tasks</h2>
          <p className="text-lg font-semibold">8</p>
          <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-500 w-1/2 h-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow mb-4">
        <h2 className="text-md font-semibold mb-3">Attendance Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-1.5 text-left">Week</th>
                <th className="p-1.5 text-center">Sun</th>
                <th className="p-1.5 text-center">Mon</th>
                <th className="p-1.5 text-center">Tue</th>
                <th className="p-1.5 text-center">Wed</th>
                <th className="p-1.5 text-center">Thu</th>
                <th className="p-1.5 text-center">Fri</th>
                <th className="p-1.5 text-center">Sat</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((week) => (
                <tr key={week} className="border-b">
                  <td className="p-1.5 text-left">Week {week}</td>
                  {[...Array(7)].map((_, i) => (
                    <td key={i} className="p-1.5 text-center">{week * 7 - 6 + i}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-3 shadow">
          <h2 className="text-md font-semibold mb-3">Leave Requests</h2>
          <ul className="space-y-2">
            <li className="bg-green-100 text-green-800 p-2 rounded-lg flex justify-between">
              Sick Leave - Approved
              <span>Apr 14-16</span>
            </li>
            <li className="bg-yellow-100 text-yellow-800 p-2 rounded-lg flex justify-between">
              Vacation - Pending
              <span>May 10-15</span>
            </li>
            <li className="bg-red-100 text-red-800 p-2 rounded-lg flex justify-between">
              Personal Leave - Rejected
              <span>Mar 25</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-3 shadow">
          <h2 className="text-md font-semibold mb-3">Tasks</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Complete quarterly report</span>
              <span className="text-red-500">High</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Review project proposal</span>
              <span className="text-yellow-500">Medium</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Update team documentation</span>
              <span className="text-green-500">Low</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}