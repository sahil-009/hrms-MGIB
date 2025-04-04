import { Calendar, Clock, Users } from "lucide-react"

export function UpcomingEventsCard() {
  const events = [
    {
      id: 1,
      title: "Team Meeting",
      date: "Today",
      time: "2:00 PM - 3:00 PM",
      location: "Conference Room A",
      participants: 8,
    },
    {
      id: 2,
      title: "Project Deadline",
      date: "Tomorrow",
      time: "5:00 PM",
      priority: "High",
    },
    {
      id: 3,
      title: "Training Session",
      date: "Apr 6, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Training Room",
      participants: 15,
    },
    {
      id: 4,
      title: "Company Town Hall",
      date: "Apr 8, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Main Auditorium",
      participants: 50,
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start space-x-3 rounded-md border p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <div className="font-medium">{event.title}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {event.date}, {event.time}
            </div>
            {event.location && <div className="text-sm text-muted-foreground">Location: {event.location}</div>}
            {event.participants && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-1 h-3 w-3" />
                {event.participants} participants
              </div>
            )}
            {event.priority && <div className="text-sm font-medium text-red-500">Priority: {event.priority}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

