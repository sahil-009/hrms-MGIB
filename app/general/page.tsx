import { Header } from "@/components/header"
import { PageTabs } from "@/components/page-tabs"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"

export default function GeneralPage() {
  const tabs = [
    { label: "Announcements", href: "/general" },
    { label: "Policies", href: "/general/policies" },
    { label: "Forms", href: "/general/forms" },
  ]

  return (
    <div className="flex flex-col h-screen bg-light-blue">
      <Header title="General" />
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Announcements</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="bg-primary text-white">
              Create Announcement
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <EmptyState
            icon="/images/empty-announcements.png"
            message="No announcements available"
            subMessage="Stay tuned for company announcements and updates"
          />
        </div>
      </div>
    </div>
  )
}

