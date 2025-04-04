import type React from "react"
import { PageTabs } from "@/components/page-tabs"

export default function MyFilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "Shared with Me", href: "/shared-with-me" },
    { label: "Shared with My Role", href: "/shared-with-my-role" },
  ]

  return (
    <div>
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="/files/my-files" />
      </div>
      {children}
    </div>
  )
}

