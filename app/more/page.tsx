import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  DollarSign,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Calendar,
  BarChart,
  Settings,
} from "lucide-react"

export default function MorePage() {
  const services = [
    {
      name: "Payroll",
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      href: "/payroll",
      description: "View salary details and payslips",
    },
    {
      name: "Benefits",
      icon: <Heart className="w-12 h-12 text-red-500" />,
      href: "/benefits",
      description: "Manage your health and wellness benefits",
    },
    {
      name: "Performance",
      icon: <Award className="w-12 h-12 text-amber-500" />,
      href: "/performance",
      description: "View performance reviews and goals",
    },
    {
      name: "Recruitment",
      icon: <Briefcase className="w-12 h-12 text-blue-500" />,
      href: "/recruitment",
      description: "Track job openings and applications",
    },
    {
      name: "Training",
      icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
      href: "/training",
      description: "Access learning resources and courses",
    },
    {
      name: "Exit Details",
      icon: <FileText className="w-12 h-12 text-gray-500" />,
      href: "/exit-details",
      description: "Manage employee offboarding",
    },
    {
      name: "Events",
      icon: <Calendar className="w-12 h-12 text-cyan-500" />,
      href: "/events",
      description: "View company events and activities",
    },
    {
      name: "Analytics",
      icon: <BarChart className="w-12 h-12 text-indigo-500" />,
      href: "/analytics",
      description: "Access HR metrics and insights",
    },
    {
      name: "Preferences",
      icon: <Settings className="w-12 h-12 text-gray-500" />,
      href: "/preferences",
      description: "Customize your HR portal experience",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="More Services" />

      <div className="p-4">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle>Additional HR Services</CardTitle>
            <CardDescription>Explore more HR tools and resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {services.map((service) => (
                <Card key={service.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {service.icon}
                    <h3 className="mt-4 font-medium">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

