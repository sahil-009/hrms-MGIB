"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plus, Search, Bell, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title: string
  tabs?: { label: string; href: string }[]
}

export function Header({ title, tabs = [] }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="bg-navy-blue text-white">
      <div className="flex items-center h-16 px-4">
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-medium">{title}</h1>

          {tabs.length > 0 && (
            <div className="flex">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`px-4 py-2 text-sm font-medium ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

