import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TravelRequestPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Travel Request View</span>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View All Data
          </Button>
          <Button variant="outline" size="sm">
            Reportees + My Data
          </Button>
          <Button variant="default" size="sm" className="bg-primary text-white">
            Add Record
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-10 px-4 py-2 text-left">
                  <Input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Employee ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Travel ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Employee Department</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Place of visit</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Expected date of departure</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Expected date of arrival</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Purpose of visit</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Expected duration in days</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Is billable to customer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Input type="checkbox" className="h-4 w-4" />
                </td>
                <td className="px-4 py-3 text-sm">sahil</td>
                <td className="px-4 py-3 text-sm">TravelID1</td>
                <td className="px-4 py-3 text-sm">HR</td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-2 border-t flex justify-between items-center">
          <div className="text-sm">Total Record Count: 1</div>
          <div className="flex items-center gap-2">
            <select className="text-sm border rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <Button variant="outline" size="sm" disabled>
              &lt;
            </Button>
            <span className="text-sm">1-1</span>
            <Button variant="outline" size="sm" disabled>
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

