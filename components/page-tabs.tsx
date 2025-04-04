"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Tab {
  label: string
  href: string
}

interface PageTabsProps {
  tabs: Tab[]
  basePath: string
}

export function PageTabs({ tabs, basePath }: PageTabsProps) {
  const pathname = usePathname()

  return (
    <div className="flex border-b bg-white">
      {tabs.map((tab) => {
        const isActive = pathname === `${basePath}${tab.href}`
        return (
          <Link key={tab.href} href={`${basePath}${tab.href}`} className={isActive ? "nav-tab-active" : "nav-tab"}>
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}

