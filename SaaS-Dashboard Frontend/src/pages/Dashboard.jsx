import { FaRegFolder, FaRegUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Card } from "../components/Card"
import { Navbar } from "../components/Navbar"
import { ChartSection } from "../components/ChartSection";
import { Activity } from "../components/Activity";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem("token");

    if(!token){
      navigate("/login");
    }
  }, [navigate])

  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
            <Card title= "Total Users" value= "1,245" subtitle= "+12% this month" icon={<FaRegUser />}/>
            <Card title= "Revenue" value= "$12,430" subtitle= "+8% from last week" icon={<MdAttachMoney />}/>
            <Card title= "Active Project" value= "32" subtitle= "+5 Completed today" icon={<FaRegFolder />}/>
            {/* <Card title= "Growth" value= "+18%" subtitle= "Compared to last month" /> */}
        <div className="col-span-2">
          <ChartSection />
        </div>
        <div className="col-span-1">
          <Activity />
        </div>
        </div>
    </div>
  )
}
