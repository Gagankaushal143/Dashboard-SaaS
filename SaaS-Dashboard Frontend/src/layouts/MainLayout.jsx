import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Dashboard } from "../pages/Dashboard"
import { getCurrentUser } from "../utils/api";
import { Notes } from "../pages/Notes";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getCurrentUser();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="flex">
      <Sidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar user={user} setIsOpen={setIsOpen} />
        <div>
          <Outlet context={{ user, setUser, isOpen, setIsOpen }} />
        </div>
      </div>
    </div>
  )
}
