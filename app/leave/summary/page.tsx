import { PageTabs } from "@/components/page-tabs"
import Image from "next/image"

export default function LeaveSummaryPage() {
  const tabs = [
    { label: "Leave Summary", href: "/summary" },
    { label: "Leave Balance", href: "/balance" },
    { label: "Leave Requests", href: "/requests" },
    { label: "Shift", href: "/shift" },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="/leave" />
      </div>

      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 mb-4">
            <Image
              src="/images/empty-checklist.png"
              alt="Empty state"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <p className="text-center">
            <span>Update the </span>
            <a href="#" className="text-primary">
              Date of Joining
            </a>
            <span> for this employee to display their leave information</span>
            <br />
            <span className="text-gray-500">and enable them to perform leave related actions.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

