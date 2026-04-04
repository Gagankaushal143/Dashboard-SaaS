import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Dashboard } from "../pages/Dashboard"
import { getCurrentUser } from "../utils/api";

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
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <Dashboard user={user} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}
