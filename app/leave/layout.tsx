import type React from "react"
import { Header } from "@/components/header"

export default function LeaveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "My Data", href: "/leave" },
    { label: "Team", href: "/team" },
    { label: "Holidays", href: "/holidays" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="" tabs={tabs} />
      {children}
    </div>
  )
}

