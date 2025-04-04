import type React from "react"
import { Header } from "@/components/header"

export default function MySpaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "My Space", href: "/my-space" },
    { label: "Organization", href: "/organization" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="" tabs={tabs} />
      {children}
    </div>
  )
}

