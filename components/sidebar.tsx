"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Calendar,
  FileText,
  Plane,
  CheckSquare,
  Star,
  File,
  MoreHorizontal,
  Settings,
  BarChart,
} from "lucide-react"
import Image from "next/image"

export function Sidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calendar, label: "Leave Tracker", href: "/leave" },
    { icon: FileText, label: "Files", href: "/files" },
    { icon: Plane, label: "Travel", href: "/travel" },
    { icon: CheckSquare, label: "Tasks", href: "/tasks" },
    { icon: Star, label: "HR Letters", href: "/hr-letters" },
    { icon: File, label: "General", href: "/general" },
    { icon: MoreHorizontal, label: "More", href: "/more" },
    { icon: Settings, label: "Operations", href: "/operations" },
    { icon: BarChart, label: "Reports", href: "/reports" },
  ]

  return (
    <div className="sidebar">
      <div className="p-3">
        <Image src="/images/zoho-logo.png" alt="Zoho Logo" width={32} height={32} />
      </div>

      {sidebarItems.map((item) => {
        const isActive = pathname.startsWith(item.href)
        return (
          <Link key={item.href} href={item.href} className={isActive ? "sidebar-item-active" : "sidebar-item"}>
            <item.icon className="sidebar-icon" />
            <span className="sidebar-text">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

