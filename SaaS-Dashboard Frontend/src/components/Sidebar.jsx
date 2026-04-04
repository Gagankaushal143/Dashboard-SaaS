import { FaHome, FaFile, FaFolder, FaChartBar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { SiReactivex } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export const Sidebar = ({ user, isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    setLoading(true);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`w-full max-w-64 h-screen fixed top-0 left-0 z-50 border-r-2 border-gray-700 bg-gray-950 text-white lg:p-4 flex flex-col justify-between shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:p-4`}
      >
        <div>
          <div className=" flex items-center justify-between px-2">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                <SiReactivex />
              </motion.div>
              DevFlow
            </div>
            <div>
              <button
                className="lg:hidden p-4 text-xl text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
          <hr className="text-gray-600 mt-2" />

          <div className="space-y-2 mt-2 py-4 px-2 select-none my-auto">
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out">
              <FaHome />
              Dashboard
            </div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out">
              <FaFile />
              Notes
            </div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out">
              <FaFolder />
              Projects
            </div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out">
              <FaChartBar />
              Analytics
            </div>
            <div className="hover:bg-gray-900 p-2 rounded-lg transition-all duration-300 cursor-pointer flex gap-3 items-center text-gray-400 hover:text-gray-100 border-l-4 border-transparent hover:border-blue-500 ease-in-out">
              <FaGear />
              Settings
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col space-y-4">
          <div className="px-2 mt-4 text-gray-300 flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center cursor-pointe ">
              <h1 className="text-sm font-semibold">
                {getInitials(user?.name)}
              </h1>
            </div>
            <h1 className="text-lg">
              {user?.name}
              <p className="text-xs text-gray-400">Pro User</p>
            </h1>
          </div>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="bg-gray-900 w-full mb-4 px-2 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 cursor-pointer hover:scale-103 transition-all duration-300 active:scale-97 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CiLogout /> {loading ? "Logging out" : "Logout"}
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
          </button>
        </div>
      </div>
    </>


  );
};
