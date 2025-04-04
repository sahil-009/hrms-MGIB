import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"

export default function MySpacePage() {
  const profileTabs = [
    { label: "Activities", href: "#activities", active: true },
    { label: "Feeds", href: "#feeds" },
    { label: "Profile", href: "#profile" },
    { label: "Approvals", href: "#approvals" },
    { label: "Leave", href: "#leave" },
    { label: "Shift", href: "#shift" },
    { label: "Files", href: "#files" },
    { label: "Career History", href: "#career-history" },
    { label: "Related Data", href: "#related-data" },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white flex border-b">
        <Link href="/my-space" className="profile-tab-active">
          Overview
        </Link>
        <Link href="/my-space/dashboard" className="profile-tab">
          Dashboard
        </Link>
      </div>

      <div className="flex-1 p-4">
        <div className="relative">
          <div className="h-40 w-full bg-cover bg-center rounded-t-lg overflow-hidden">
            <Image
              src="/banner.jpg"
              alt="Profile banner"
              width={1200}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-b-lg shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 p-4">
                <div className="-mt-16 flex flex-col items-center">
                  <Avatar className="h-24 w-24 border-4 border-white">
                    <AvatarImage src="./user-profile.webp" alt="User" />
                    <AvatarFallback>SU</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-2 text-sm font-medium">I - sahil</h2>
                </div>

                <div className="mt-6">
                  <h3 className="text-md font-medium mb-2">Department Members</h3>
                  <p className="text-sm text-gray-500">No Data Found</p>
                </div>
              </div>

              <div className="md:w-3/4 p-4">
                <div className="border-b mb-4 flex justify-between items-center">
                  <div className="flex overflow-x-auto">
                    {profileTabs.map((tab) => (
                      <a key={tab.href} href={tab.href} className={tab.active ? "profile-tab-active" : "profile-tab"}>
                        {tab.label}
                      </a>
                    ))}
                  </div>
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>

                <div className="bg-white rounded-lg border p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/images/zoho-people-logo.png" alt="Zoho People" width={24} height={24} />
                    <span className="font-medium">Good Morning sahil</span>
                  </div>
                  <p className="text-sm text-gray-600">Have a productive day!</p>
                  <div className="absolute right-8 bottom-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

