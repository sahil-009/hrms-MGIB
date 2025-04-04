import { redirect } from "next/navigation"

export default function MyFilesPage() {
  redirect("/files/my-files/shared-with-me")
}

