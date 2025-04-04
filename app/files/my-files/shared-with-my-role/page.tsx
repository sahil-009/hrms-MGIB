import { Button } from "@/components/ui/button"
import { EmptyState } from "@/components/empty-state"

export default function SharedWithMyRolePage() {
  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm">
          Manage
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-files.png"
          message="No files shared with your role"
          subMessage="Files shared with your role will appear here"
        />
      </div>
    </div>
  )
}

