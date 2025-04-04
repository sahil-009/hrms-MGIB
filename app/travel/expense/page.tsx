import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"

export default function TravelExpensePage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Travel Expense View</span>
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

      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-checklist.png"
          message="No travel expenses found"
          subMessage="Your travel expense records will appear here."
        />
      </div>
    </div>
  )
}

