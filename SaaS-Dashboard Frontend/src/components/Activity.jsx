import { FaRegFolder, FaRegUser } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

export const Activity = ({ stats }) => {
  return (
    <div className="p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl mb-4 py-2">Recent Activity</h2>

      <div className="space-y-3 mt-4">
        <p className="flex items-center gap-2"><FaRegUser /> User signed up : <span>{stats.users}</span></p>
        <p className="flex items-center gap-2"><FaRegFolder />Project created : <span>{stats.projects}</span></p>
        <p className="flex items-center gap-2"><IoMdDoneAll /> Task completed : 5</p>
      </div>
    </div>
  )
}
