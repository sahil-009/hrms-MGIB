import { EmptyState } from "@/components/empty-state"

export default function ShiftPage() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-checklist.png"
          message="No shift information available"
          subMessage="Your shift details will appear here once assigned."
        />
      </div>
    </div>
  )
}

