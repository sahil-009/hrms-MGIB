import { Calendar } from "lucide-react"

export function AttendanceCard() {
  // Sample data for the current month
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const today = new Date().getDate()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">April 2025</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Present</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-xs">Absent</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs">Half Day</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Holiday</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="text-center text-xs font-medium">
            {day}
          </div>
        ))}

        {/* Empty cells for days before the 1st of the month */}
        {Array.from({ length: 1 }, (_, i) => (
          <div key={`empty-${i}`} className="h-8"></div>
        ))}

        {days.map((day) => {
          // Randomly assign attendance status for demo
          let bgColor = "bg-muted"
          if (day < today) {
            const rand = Math.random()
            if (rand > 0.9)
              bgColor = "bg-red-500" // Absent
            else if (rand > 0.8)
              bgColor = "bg-yellow-500" // Half day
            else if ([6, 13, 20, 27].includes(day))
              bgColor = "bg-blue-500" // Holiday
            else bgColor = "bg-green-500" // Present
          }

          return (
            <div
              key={day}
              className={`flex h-8 items-center justify-center rounded-md text-xs ${
                day === today ? "ring-2 ring-primary" : ""
              } ${bgColor} ${
                ["bg-green-500", "bg-blue-500", "bg-red-500", "bg-yellow-500"].includes(bgColor) ? "text-white" : ""
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Total Working Days:</span>
          <span className="font-medium">22</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Present Days:</span>
          <span className="font-medium">18</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Absent Days:</span>
          <span className="font-medium">1</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Half Days:</span>
          <span className="font-medium">2</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Holidays:</span>
          <span className="font-medium">1</span>
        </div>
      </div>
    </div>
  )
}

