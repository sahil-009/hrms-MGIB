import { Check, Clock } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export function TasksCard() {
  const tasks = [
    {
      id: 1,
      title: "Complete quarterly report",
      dueDate: "Today",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Review project proposal",
      dueDate: "Today",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Update team documentation",
      dueDate: "Tomorrow",
      priority: "Low",
      completed: false,
    },
    {
      id: 4,
      title: "Prepare presentation slides",
      dueDate: "Apr 6, 2025",
      priority: "Medium",
      completed: true,
    },
    {
      id: 5,
      title: "Schedule team building event",
      dueDate: "Apr 10, 2025",
      priority: "Low",
      completed: true,
    },
  ]

  const completedTasks = tasks.filter((task) => task.completed).length
  const completionPercentage = (completedTasks / tasks.length) * 100

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Progress</span>
          <span>
            {completedTasks}/{tasks.length} completed
          </span>
        </div>
        <Progress value={completionPercentage} />
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start justify-between rounded-md border p-3 ${task.completed ? "bg-muted/50" : ""}`}
          >
            <div className="flex items-start space-x-3">
              <Checkbox id={`task-${task.id}`} checked={task.completed} />
              <div>
                <label
                  htmlFor={`task-${task.id}`}
                  className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {task.title}
                </label>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {task.dueDate}
                  </div>
                  <div
                    className={`${
                      task.priority === "High"
                        ? "text-red-500"
                        : task.priority === "Medium"
                          ? "text-amber-500"
                          : "text-green-500"
                    }`}
                  >
                    {task.priority}
                  </div>
                </div>
              </div>
            </div>

            {task.completed && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

