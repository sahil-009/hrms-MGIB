import { EmptyState } from "@/components/empty-state"

export default function LeaveBalancePage() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <EmptyState
          icon="/images/empty-checklist.png"
          message="No leave balance information available"
          subMessage="Update your joining date to see leave balance details."
        />
      </div>
    </div>
  )
}

