import Image from "next/image"

interface EmptyStateProps {
  icon: string
  message: string
  subMessage?: string
}

export function EmptyState({ icon, message, subMessage }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-32 h-32 mb-4 relative">
        <Image src={icon || "/placeholder.svg"} alt="Empty state" width={128} height={128} className="object-contain" />
      </div>
      <p className="text-lg font-medium text-gray-500">{message}</p>
      {subMessage && <p className="text-sm text-gray-400 mt-1">{subMessage}</p>}
    </div>
  )
}

