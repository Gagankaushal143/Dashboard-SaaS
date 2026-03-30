import { Sidebar } from "../components/Sidebar"
import { Dashboard } from "../pages/Dashboard"

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
            <Dashboard />
        </div>
    </div>
  )
}
