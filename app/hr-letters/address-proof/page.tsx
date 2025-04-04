import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AddressProofPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Address Proof View</span>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View All Data
          </Button>
          <Button variant="outline" size="sm">
            Reportees + My Data
          </Button>
          <Button variant="default" size="sm" className="bg-primary text-white">
            Add Record
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
        <div className="w-32 h-32 mb-4">
          <Image
            src="/images/empty-records.png"
            alt="Empty state"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <p className="text-lg font-medium text-gray-500">No records found</p>
      </div>
    </div>
  )
}

