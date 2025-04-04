import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DirectoryPage() {
  const employees = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Product Manager",
      department: "Product",
      email: "alex.thompson@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Team Lead",
      department: "Engineering",
      email: "jane.smith@example.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Senior Developer",
      department: "Engineering",
      email: "john.doe@example.com",
      phone: "+1 (555) 345-6789",
      location: "Boston",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "UX Designer",
      department: "Design",
      email: "emily.johnson@example.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago",
      avatar: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Developer",
      department: "Engineering",
      email: "michael.brown@example.com",
      phone: "+1 (555) 567-8901",
      location: "Austin",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search employees" className="pl-10 w-full md:w-80" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button variant="default" size="sm" className="bg-primary text-white">
            Add Employee
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {employees.map((employee) => (
            <div key={employee.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={employee.avatar} alt={employee.name} />
                  <AvatarFallback>
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-medium">{employee.name}</h3>
                  <p className="text-sm text-muted-foreground">{employee.role}</p>
                  <p className="text-sm text-muted-foreground">{employee.department}</p>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                      Profile
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

