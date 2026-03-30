import { FaSearch, FaBell } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full h-16 border-b border-gray-300 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="text-2xl font-semibold">Dashboard</div>
        <div className="flex items-center justify-center ">
            <input type="text" placeholder="Search.." className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 outline-none focus:ring-2 ring-blue-500 focus:bg-white transition w-72 duration-200 shadow-sm"/>
            <div className="relative right-8 text-gray-500">
                <FaSearch className="hover:text-blue-500 cursor-pointer transition duration-200"/>
            </div>
        </div>
        <div className="flex items-center justify-between gap-6">
            <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200 text-xl hover:scale-105"/>
            <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all duration-200 hover:scale-105 ">
                <h1 className="text-sm text-gray-600">GK</h1>
            </div>
        </div>
    </div>
  )
}
