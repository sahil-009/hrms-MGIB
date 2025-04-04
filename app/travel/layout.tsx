import type React from "react"
import { Header } from "@/components/header"
import { PageTabs } from "@/components/page-tabs"

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "Travel Request", href: "/request" },
    { label: "Travel Expense", href: "/expense" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="Travel Request" />
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="/travel" />
      </div>
      {children}
    </div>
  )
}

