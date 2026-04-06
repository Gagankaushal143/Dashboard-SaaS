import { FaRegFolder, FaRegUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Card } from "../components/Card"
import { Navbar } from "../components/Navbar"
import { ChartSection } from "../components/ChartSection";
import { Activity } from "../components/Activity";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardStats } from "../utils/api";


export const Dashboard = ({ user, setIsOpen }) => {

  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };
    fetchData();
  }, []);
  if (!stats) {
    return <div className="text-lg h-screen flex items-center justify-center gap-2"> Loading <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div className="">
      <Navbar user={user} setIsOpen={setIsOpen} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6">
        <Card title="Total Users" value={stats?.users} subtitle="+12% this month" icon={<FaRegUser />} />
        <Card title="Revenue" value={stats?.revenue} subtitle="+8% from last week" icon={<MdAttachMoney />} />
        <Card title="Active Project" value={stats?.projects} subtitle="+5 Completed today" icon={<FaRegFolder />} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6">
        <div className="col-span-2">
          <ChartSection stats={stats} />
        </div>
        <div className="col-span-1">
          <Activity stats={stats} />
        </div>
      </div>
    </div>
  )
}
