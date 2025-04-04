import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, Building, FileText, Shield, Upload, Download } from "lucide-react"

export default function DataAdminPage() {
  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Data Administration" />

      <div className="p-4">
        <Tabs defaultValue="data" className="space-y-4">
          <TabsList>
            <TabsTrigger value="data">Data Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="data" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Employee Data
                  </CardTitle>
                  <CardDescription>Manage employee records</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add, edit, or remove employee information including personal details, job roles, and departments.
                  </p>
                  <Button size="sm">Manage</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    Organization Structure
                  </CardTitle>
                  <CardDescription>Configure company hierarchy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set up departments, teams, and reporting relationships within the organization.
                  </p>
                  <Button size="sm">Manage</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    Document Templates
                  </CardTitle>
                  <CardDescription>Customize HR documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create and edit templates for offer letters, contracts, and other HR documents.
                  </p>
                  <Button size="sm">Manage</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Import/Export</CardTitle>
                <CardDescription>Bulk manage your HR data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Upload className="mr-2 h-4 w-4 text-primary" />
                        Import Data
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload CSV or Excel files to bulk import employee data, attendance records, or other
                        information.
                      </p>
                      <Button size="sm">Import</Button>
                    </CardContent>
                  </Card>

                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Download className="mr-2 h-4 w-4 text-primary" />
                        Export Data
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Download employee data, reports, or system information in various formats for backup or
                        analysis.
                      </p>
                      <Button size="sm">Export</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage system users and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button className="bg-primary text-white">Add User</Button>
                </div>
                <div className="border rounded-md">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  <div className="p-4 text-center text-muted-foreground">
                    No users to display. Add your first user to get started.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure global system preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">General Settings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Company Information</span>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Regional Settings</span>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Email Notifications</span>
                            <Button size="sm" variant="outline">
                              Configure
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Module Settings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Attendance Rules</span>
                            <Button size="sm" variant="outline">
                              Configure
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Leave Policies</span>
                            <Button size="sm" variant="outline">
                              Configure
                            </Button>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Approval Workflows</span>
                            <Button size="sm" variant="outline">
                              Configure
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage system security and access controls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        Access Control
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Role-Based Permissions</span>
                          <Button size="sm" variant="outline">
                            Configure
                          </Button>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Password Policy</span>
                          <Button size="sm" variant="outline">
                            Configure
                          </Button>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Two-Factor Authentication</span>
                          <Button size="sm" variant="outline">
                            Enable
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Audit Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        View system activity logs to monitor user actions and security events.
                      </p>
                      <Button size="sm">View Logs</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

