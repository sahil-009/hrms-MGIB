import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceCardProps {
  name: string
  icon: ReactNode
  href: string
}

export function ServiceCard({ name, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="service-card">
      <div className="service-icon">{icon}</div>
      <span className="text-sm font-medium text-center">{name}</span>
    </Link>
  )
}

