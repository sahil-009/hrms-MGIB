"use client"
// app/my-space/dashboard/page.tsx
import { Bell, Calendar, Clock, FileText, Users, Menu as MenuIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"
import { UserNav } from "@/components/user-nav"
import { useState } from "react"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Sample data
  const leaveRequests = [
    { type: "Sick Leave", status: "Approved", dateRange: "Apr 14-16" },
    { type: "Vacation", status: "Pending", dateRange: "May 10-15" },
    { type: "Personal Leave", status: "Rejected", dateRange: "Mar 25" },
  ]

  const tasks = [
    { name: "Complete quarterly report", priority: "High", due: "Today" },
    { name: "Review project proposal", priority: "Medium", due: "Today" },
    { name: "Update team documentation", priority: "Low", due: "Apr 6" },
  ]

  const upcomingEvents = [
    { title: "Team Meeting", time: "Today, 2:00 PM - 2:00 PM", tasks: ["Explore Concerned Event A", "As a participant"] },
    { title: "Training Session", time: "Apr 6, 2025, 9:00 AM - 10:00 PM", tasks: ["Explore Training Bites", "As To Participants"] },
  ]

  // Calendar data for April 2025
  const calendarDays = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27]
  ]

  return (
    <div className="flex min-h-screen bg-muted/40">
      <SideNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1">
        <div className="border-b bg-background">
          <div className="flex h-16 items-center px-4">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <UserNav />
            </div>
          </div>
        </div>
        <div className="space-y-4 p-4 md:p-8 pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
            <h2 className="text-3xl font-bold tracking-tight">Welcome back, Sahil!</h2>
            <div className="flex items-center space-x-2">
              <Button>
                <Clock className="mr-2 h-4 w-4" />
                Check In
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="leaves">Leaves</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Hours Worked</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32.5h</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last week</p>
                    <Progress value={65} className="mt-3" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">16 days</div>
                    <p className="text-xs text-muted-foreground">1 day (phone)</p>
                    <Progress value={75} className="mt-3" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tasks</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">2 days remaining</p>
                    <Progress value={40} className="mt-3" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">2 out of office</p>
                    <div className="mt-3 flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Avatar key={i} className="border-2 border-background">
                          <AvatarFallback>{String.fromCharCode(64 + i)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                        +7
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Attendance Overview</CardTitle>
                    <CardDescription>Your attendance for the current month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="p-2 text-left"></th>
                            <th className="p-2 text-center">M</th>
                            <th className="p-2 text-center">T</th>
                            <th className="p-2 text-center">W</th>
                            <th className="p-2 text-center">T</th>
                            <th className="p-2 text-center">Present</th>
                            <th className="p-2 text-center">Absent</th>
                            <th className="p-2 text-center">Half Day</th>
                            <th className="p-2 text-center">Holiday</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calendarDays.map((week, weekIndex) => (
                            <tr key={weekIndex} className="border-b">
                              <td className="p-2 text-left">{5 + weekIndex * 7}</td>
                              {week.map((day, dayIndex) => (
                                <td key={dayIndex} className="p-2 text-center">
                                  {day}
                                </td>
                              ))}
                              <td className="p-2 text-center"></td>
                              <td className="p-2 text-center"></td>
                              <td className="p-2 text-center"></td>
                              <td className="p-2 text-center"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-md font-medium mb-2">Total Working Days:</h4>
                      <ul className="space-y-1">
                        <li className="flex justify-between">
                          <span>Present Days:</span>
                          <span></span>
                        </li>
                        <li className="flex justify-between">
                          <span>Absent Days:</span>
                          <span></span>
                        </li>
                        <li className="flex justify-between">
                          <span>Half Days:</span>
                          <span></span>
                        </li>
                        <li className="flex justify-between">
                          <span>Holidays:</span>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events for the next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h3 className="font-medium">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                          <div className="mt-2 space-y-1">
                            {event.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Leave Requests</CardTitle>
                    <CardDescription>Recent leave requests and approvals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {leaveRequests.map((request, index) => (
                        <li
                          key={index}
                          className={`${
                            request.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          } p-3 rounded-lg flex justify-between`}
                        >
                          {request.type} - {request.status}
                          <span>{request.dateRange}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Tasks</CardTitle>
                    <CardDescription>Your assigned tasks and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tasks.map((task, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <span>{task.name}</span>
                          <span className={
                            task.priority === "High"
                              ? "text-red-500"
                              : task.priority === "Medium"
                              ? "text-yellow-500"
                              : "text-green-500"
                          }>
                            {task.priority} ({task.due})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="attendance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Log</CardTitle>
                  <CardDescription>Your attendance records for the current month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">Attendance details will appear here</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      View your daily check-ins, check-outs, and work hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="leaves" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Leave Management</CardTitle>
                  <CardDescription>Apply for leaves and view your leave history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">Leave details will appear here</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Apply for new leaves or check the status of your leave requests
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>View your team members and their details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Avatar>
                          <AvatarFallback>{String.fromCharCode(64 + i)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Team Member {i}</p>
                          <p className="text-sm text-muted-foreground">Role {i}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}