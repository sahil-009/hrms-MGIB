import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { ChatFooter } from "@/components/chat-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HR Portal",
  description: "Human Resources Management System",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex">
            <Sidebar />
            <div className="ml-[60px] w-[calc(100%-60px-40px)]">{children}</div>
            <RightSidebar />
          </div>
          <ChatFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'