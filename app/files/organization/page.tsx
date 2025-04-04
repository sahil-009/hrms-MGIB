import { Button } from "@/components/ui/button"
import { EmptyState } from "@/components/empty-state"

export default function OrganizationFilesPage() {
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
          message="No organization files available"
          subMessage="Organization-wide files will appear here"
        />
      </div>
    </div>
  )
}

