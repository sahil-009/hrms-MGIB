import type React from "react"
import { Header } from "@/components/header"

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "Tasks", href: "/tasks" },
    { label: "Checklists", href: "/checklists" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="" tabs={tabs} />
      {children}
    </div>
  )
}

