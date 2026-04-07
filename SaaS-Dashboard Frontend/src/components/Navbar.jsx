import { FaSearch, FaBell } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import {  motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const Navbar = ({ user, setIsOpen }) => {


    const location = useLocation();

    const titles = {
        "/dashboard" : "Dashboard",
        "/notes" : "Notes",
        "/projects" : "Projects",
        "/analytics" : "Analytics",
        "/settings" : "Settings"
    }
    const title = titles[location.pathname] || "Dashboard";

    const getInitials = (name) => {
        if (!name) return "";

        return name.split(" ").map((word) => word[0]).join("").toUpperCase();
    };

    return (
        <div className="w-full h-16 border-b border-gray-300 flex items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="text-xl md:text-2xl font-semibold flex items-center justify-center ">
                <button onClick={() => setIsOpen(true)} className="lg:hidden text-base text-black rounded-full hover:bg-gray-300 cursor-pointer p-2">
                    <CiMenuFries />
                </button>
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                    {title}
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="md:flex items-center justify-center hidden">
                <input type="text" placeholder="Search.." className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 outline-none focus:ring-2 ring-blue-500 focus:bg-white transition w-72 duration-200 shadow-sm" />
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative right-8 text-gray-500">
                    <FaSearch className="cursor-pointer transition duration-200" />
                </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-between gap-6">
                <FaSearch className="hover:text-blue-500 cursor-pointer transition duration-200 text-gray-500 md:hidden" />
                <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200 text-xl hover:scale-105" />
                <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all duration-200 hover:scale-105 ">
                    <h1 className="text-sm text-gray-600">{getInitials(user?.name)}</h1>
                </div>
            </motion.div>
        </div>
    )
}
