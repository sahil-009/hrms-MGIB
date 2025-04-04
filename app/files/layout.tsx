import type React from "react"
import { Header } from "@/components/header"
import { PageTabs } from "@/components/page-tabs"

export default function FilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "My Files", href: "/files/my-files" },
    { label: "Organization", href: "/files/organization" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="My Files" />
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="" />
      </div>
      {children}
    </div>
  )
}

