import { Calendar, FileText, FolderOpen, Plane, Star, User, CheckSquare, Database } from "lucide-react"

export function LeaveTrackerIcon({ className }: { className?: string }) {
  return <Calendar className={`text-cyan-500 ${className}`} />
}

export function FilesIcon({ className }: { className?: string }) {
  return <FolderOpen className={`text-blue-500 ${className}`} />
}

export function EmployeeInfoIcon({ className }: { className?: string }) {
  return <User className={`text-amber-500 ${className}`} />
}

export function TravelIcon({ className }: { className?: string }) {
  return <Plane className={`text-cyan-500 ${className}`} />
}

export function TasksIcon({ className }: { className?: string }) {
  return <CheckSquare className={`text-orange-500 ${className}`} />
}

export function HRLettersIcon({ className }: { className?: string }) {
  return <Star className={`text-orange-500 ${className}`} />
}

export function GeneralIcon({ className }: { className?: string }) {
  return <FileText className={`text-amber-500 ${className}`} />
}

export function ApprovalsIcon({ className }: { className?: string }) {
  return <CheckSquare className={`text-amber-500 ${className}`} />
}

export function DataAdminIcon({ className }: { className?: string }) {
  return <Database className={`text-fuchsia-500 ${className}`} />
}

