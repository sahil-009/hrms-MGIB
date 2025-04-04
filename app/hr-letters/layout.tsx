import type React from "react"
import { Header } from "@/components/header"

export default function HRLettersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tabs = [
    { label: "Address Proof", href: "/address-proof" },
    { label: "Bonafide Letter", href: "/bonafide-letter" },
    { label: "Experience Letter", href: "/experience-letter" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="" tabs={tabs} />
      {children}
    </div>
  )
}

