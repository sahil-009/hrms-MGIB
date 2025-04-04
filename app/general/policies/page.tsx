import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"

export default function PoliciesPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Company Policies</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="bg-primary text-white">
            Upload Policy
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-files.png"
          message="No policies available"
          subMessage="Company policies and guidelines will appear here"
        />
      </div>
    </div>
  )
}

