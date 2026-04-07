import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Notes } from "./pages/Notes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" 
        element={
          <ProtectedRoutes>
            <MainLayout/>
          </ProtectedRoutes>
        }>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="notes" element={<Notes />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
