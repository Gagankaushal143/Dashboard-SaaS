import { FaHome, FaFile, FaFolder, FaChartBar  } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { SiReactivex } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/login")
  }

  return (
    <div className="w-full max-w-64 h-screen sticky top-0 border-r-2 border-gray-700 bg-gray-950 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-wider flex items-center gap-2 cursor-pointer"><SiReactivex />DevFlow</h1>
          <div className="space-y-2 mt-6 py-4 px-2 select-none my-auto">
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out"><FaHome />Dashboard</div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out"><FaFile />Notes</div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out"><FaFolder />Projects</div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out"><FaChartBar />Analytics</div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out"><FaGear />Settings</div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
            <button onClick={handleLogout} className="bg-gray-900 w-full px-2 py-2 rounded-lg flex items-center justify-center gap-2"> <CiLogout />Logout</button>
        </div>
    </div>
  )
}
