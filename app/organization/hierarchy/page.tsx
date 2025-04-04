import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"

export default function HierarchyPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Organization Hierarchy</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Expand All
          </Button>
          <Button variant="outline" size="sm">
            Collapse All
          </Button>
          <Button variant="default" size="sm" className="bg-primary text-white">
            Print
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-organization.png"
          message="Organization hierarchy is being prepared"
          subMessage="Check back later to view the complete organization structure"
        />
      </div>
    </div>
  )
}

