import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function LeaveRequestCard() {
  const leaveRequests = [
    {
      id: 1,
      type: "Sick Leave",
      startDate: "Apr 15, 2025",
      endDate: "Apr 16, 2025",
      days: 2,
      status: "Approved",
      approvedBy: "Jane Smith",
    },
    {
      id: 2,
      type: "Vacation",
      startDate: "May 10, 2025",
      endDate: "May 15, 2025",
      days: 5,
      status: "Pending",
    },
    {
      id: 3,
      type: "Personal Leave",
      startDate: "Mar 25, 2025",
      endDate: "Mar 25, 2025",
      days: 1,
      status: "Rejected",
      rejectedBy: "Jane Smith",
      reason: "Insufficient leave balance",
    },
  ]

  return (
    <div className="space-y-4">
      {leaveRequests.map((request) => (
        <div key={request.id} className="flex items-start justify-between rounded-md border p-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{request.type}</span>
              <Badge
                variant={
                  request.status === "Approved" ? "success" : request.status === "Rejected" ? "destructive" : "outline"
                }
              >
                {request.status}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              {request.startDate} {request.startDate !== request.endDate && `- ${request.endDate}`}
            </div>
            <div className="text-sm">
              {request.days} {request.days === 1 ? "day" : "days"}
            </div>
            {request.status === "Approved" && (
              <div className="text-xs text-muted-foreground">Approved by {request.approvedBy}</div>
            )}
            {request.status === "Rejected" && (
              <div className="text-xs text-muted-foreground">
                Rejected by {request.rejectedBy}: {request.reason}
              </div>
            )}
          </div>

          {request.status === "Pending" && (
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                <Check className="h-4 w-4" />
                <span className="sr-only">Approve</span>
              </Button>
              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
                <span className="sr-only">Reject</span>
              </Button>
            </div>
          )}

          {request.status === "Approved" && <Check className="h-5 w-5 text-green-500" />}

          {request.status === "Rejected" && <X className="h-5 w-5 text-red-500" />}
        </div>
      ))}

      <Button className="w-full">Apply for Leave</Button>
    </div>
  )
}

