import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart, LineChart, Download, Filter, Calendar } from "lucide-react"
import Image from "next/image"

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Reports" />

      <div className="p-4">
        <Tabs defaultValue="attendance" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="leave">Leave</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <TabsContent value="attendance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Attendance Overview</CardTitle>
                  <CardDescription>Monthly attendance statistics</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex justify-center py-4">
                    <div className="w-32 h-32">
                      <PieChart className="w-full h-full text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm">Present</span>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm">Late</span>
                      </div>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm">Absent</span>
                      </div>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Daily Attendance</CardTitle>
                  <CardDescription>Attendance trends over time</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex justify-center py-4">
                    <div className="w-full h-32">
                      <LineChart className="w-full h-full text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Department Comparison</CardTitle>
                  <CardDescription>Attendance by department</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex justify-center py-4">
                    <div className="w-full h-32">
                      <BarChart className="w-full h-full text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Reports</CardTitle>
                <CardDescription>Generate and download detailed attendance reports</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-32 h-32 mb-4">
                  <Image
                    src="/images/empty-reports.png"
                    alt="Reports"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-gray-500">No reports generated yet</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Create your first report to get started</p>
                <Button className="bg-primary text-white">Generate Report</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave Reports</CardTitle>
                <CardDescription>Generate and view leave reports</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-32 h-32 mb-4">
                  <Image
                    src="/images/empty-reports.png"
                    alt="Reports"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-gray-500">No leave reports available</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Generate a report to view leave statistics</p>
                <Button className="bg-primary text-white">Generate Report</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Reports</CardTitle>
                <CardDescription>View team and individual performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-32 h-32 mb-4">
                  <Image
                    src="/images/empty-reports.png"
                    alt="Reports"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-gray-500">No performance data available</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  Performance reports will appear here once data is available
                </p>
                <Button className="bg-primary text-white">Set Up Performance Tracking</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>Create and save custom report templates</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-32 h-32 mb-4">
                  <Image
                    src="/images/empty-reports.png"
                    alt="Reports"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-gray-500">No custom reports created</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Create your first custom report template</p>
                <Button className="bg-primary text-white">Create Custom Report</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

