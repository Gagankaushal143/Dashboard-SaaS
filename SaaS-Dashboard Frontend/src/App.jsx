import { Route, Routes } from "react-router-dom"
import './App.css'
import { MainLayout } from "./layouts/MainLayout"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard"

function App() {

    
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<MainLayout> <Dashboard/> </MainLayout>}/>

      </Routes>
    </>
  )
}

export default App
