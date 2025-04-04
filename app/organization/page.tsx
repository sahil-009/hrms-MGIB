import { Header } from "@/components/header"
import { PageTabs } from "@/components/page-tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Users, UserPlus, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function OrganizationPage() {
  const tabs = [
    { label: "Organization", href: "/organization" },
    { label: "Hierarchy", href: "/organization/hierarchy" },
    { label: "Directory", href: "/organization/directory" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Organization" />
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="" />
      </div>

      <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Building className="mr-2 h-5 w-5 text-primary" />
              Company Information
            </CardTitle>
            <CardDescription>View company details and structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Acme Corporation</h3>
                  <p className="text-sm text-muted-foreground">Technology</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Departments
            </CardTitle>
            <CardDescription>Browse departments and teams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Engineering</h3>
                    <p className="text-sm text-muted-foreground">42 members</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Human Resources</h3>
                    <p className="text-sm text-muted-foreground">12 members</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <UserPlus className="mr-2 h-5 w-5 text-primary" />
              New Employees
            </CardTitle>
            <CardDescription>Recently joined team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">UX Designer • Joined 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Mike Smith</h3>
                  <p className="text-sm text-muted-foreground">Developer • Joined 1 week ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Organization Chart</CardTitle>
            <CardDescription>View the company hierarchy</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/empty-organization.png"
                alt="Organization Chart"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <p className="text-lg font-medium text-gray-500">Organization chart is being prepared</p>
            <p className="text-sm text-gray-400 mt-1">Check back later to view the complete organization structure</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

