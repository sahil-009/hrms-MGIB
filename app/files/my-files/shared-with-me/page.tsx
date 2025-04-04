import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SharedWithMePage() {
  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm">
          Manage
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
        <div className="w-32 h-32 mb-4">
          <Image src="/images/empty-files.png" alt="Empty state" width={128} height={128} className="object-contain" />
        </div>
        <p className="text-lg font-medium text-gray-500">No shared files to display</p>
        <p className="text-sm text-gray-400 mt-1">Files shared to you by other employees will be listed here.</p>
      </div>
    </div>
  )
}

