import { EmptyState } from "@/components/empty-state"

export default function LeaveRequestsPage() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-checklist.png"
          message="No leave requests found"
          subMessage="Your leave requests will appear here."
        />
      </div>
    </div>
  )
}

