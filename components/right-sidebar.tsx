import { MessageCircle, Bell, User } from "lucide-react"

export function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-icon">
        <MessageCircle />
      </div>
      <div className="right-sidebar-icon">
        <Bell />
      </div>
      <div className="right-sidebar-icon">
        <User />
      </div>
    </div>
  )
}

