import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Clock, Filter } from "lucide-react"
import { EmptyState } from "@/components/empty-state"

export default function ApprovalsPage() {
  const pendingApprovals = [
    {
      id: 1,
      type: "Leave Request",
      requestedBy: "sumit",
      date: "Apr 10, 2025",
      status: "Pending",
      details: "Vacation leave for 3 days",
    },
    {
      id: 2,
      type: "Expense Claim",
      requestedBy: "saisriya",
      date: "Apr 8, 2025",
      status: "Pending",
      details: "$250 for office supplies",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Approvals" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Approval Dashboard</h2>
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending" className="relative">
              Pending
              <Badge className="ml-2 bg-primary text-white">{pendingApprovals.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingApprovals.length > 0 ? (
              pendingApprovals.map((approval) => (
                <Card key={approval.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{approval.type}</CardTitle>
                        <CardDescription>
                          Requested by {approval.requestedBy} on {approval.date}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {approval.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{approval.details}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <Check className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                        <X className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <EmptyState
                    icon="/images/empty-approvals.png"
                    message="No pending approvals"
                    subMessage="You're all caught up!"
                  />
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon="/images/empty-approvals.png"
                  message="No approved requests"
                  subMessage="Approved requests will appear here"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon="/images/empty-approvals.png"
                  message="No rejected requests"
                  subMessage="Rejected requests will appear here"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon="/images/empty-approvals.png"
                  message="No request history"
                  subMessage="Your approval history will appear here"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

