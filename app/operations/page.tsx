import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { Calendar, FileText, User, Plane, CheckSquare, Star, File, CheckCircle, Database } from "lucide-react"

export default function OperationsPage() {
  const services = [
    { name: "Leave Tracker", icon: Calendar, color: "text-cyan-500", href: "/leave" },
    { name: "Files", icon: FileText, color: "text-blue-500", href: "/files" },
    { name: "Employee Information", icon: User, color: "text-amber-500", href: "/employee-info" },
    { name: "Travel", icon: Plane, color: "text-cyan-500", href: "/travel" },
    { name: "Tasks", icon: CheckSquare, color: "text-orange-500", href: "/tasks" },
    { name: "HR Letters", icon: Star, color: "text-orange-500", href: "/hr-letters" },
    { name: "General", icon: File, color: "text-amber-500", href: "/general" },
    { name: "Approvals", icon: CheckCircle, color: "text-amber-500", href: "/approvals" },
    { name: "Data Administration", icon: Database, color: "text-fuchsia-500", href: "/data-admin" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Operations" />
      <div className="p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search Operations" className="pl-10 bg-white border-0 shadow-sm" />
        </div>

        <h2 className="text-lg font-medium mb-4">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
              <span className="text-sm font-medium text-center">{service.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

