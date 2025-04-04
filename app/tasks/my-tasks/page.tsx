import { PageTabs } from "@/components/page-tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MyTasksPage() {
  const tabs = [
    { label: "My Tasks", href: "/my-tasks" },
    { label: "Track Tasks", href: "/track-tasks" },
    { label: "All Tasks", href: "/all-tasks" },
    { label: "Form View", href: "/form-view" },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white">
        <PageTabs tabs={tabs} basePath="/tasks" />
      </div>

      <div className="p-4 flex-1">
        <div className="flex justify-end mb-4">
          <Button variant="default" size="sm" className="bg-primary text-white">
            Add Task
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 mb-4">
            <Image
              src="/images/empty-tasks.png"
              alt="Empty state"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <p className="text-lg font-medium text-gray-500">No tasks to list here</p>
        </div>
      </div>
    </div>
  )
}

