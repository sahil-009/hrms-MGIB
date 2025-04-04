import { Mail, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TeamMembersCard() {
  const teamMembers = [
    {
      id: 1,
      name: "sahil",
      role: "Team Lead",
      email: "sahil@example.com",
      phone: "+1 (555) 123-4567",
      status: "Available",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "sahil",
      role: "Senior Developer",
      email: "sahil@example.com",
      phone: "+1 (555) 234-5678",
      status: "In Meeting",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "sahil",
      role: "UX De  signer",
      email: "sahil@example.com",
      phone: "+1 (555) 345-6789",
      status: "On Leave",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "sahil",
      role: "Developer",
      email: "sahil@example.com",
      phone: "+1 (555) 456-7890",
      status: "Available",
      avatar: "/placeholder.svg",
    },
    {
      id: 5,
      name: "sahil",
      role: "QA Engineer",
      email: "sahil@example.com",
      phone: "+1 (555) 567-8901",
      status: "Available",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="text-sm text-muted-foreground">{member.role}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge
              variant={
                member.status === "Available" ? "outline" : member.status === "On Leave" ? "destructive" : "secondary"
              }
            >
              {member.status}
            </Badge>
            <div className="flex items-center space-x-2">
              <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
              <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

