import { useState } from "react";
import { SiReactivex } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";



export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    
    
    const handleLogin = async (e) =>{
        e.preventDefault();
        
        if(email.trim() === "" || password.trim() === ""){
            return setError("All fields are required !!")
        }
        
        const data = await loginUser({email, password});
        

        if(data.token){
            localStorage.setItem("token", data.token);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
            setLoading(true);
            setEmail("");
            setPassword("");
        }else{
            setError(data.message)
        }
        
    }

  return (
    <div className="flex h-screen p-12">
        <div className="bg-linear-to-br from-blue-500 to-purple-600 flex rounded-2xl">
            {/* Left side */}
        <div className="w-1/2 rounded-2xl">
            <div className="flex justify-center mt-8 flex-col">
                <h1 className="text-2xl text-white font-bold tracking-wider flex items-center gap-2 cursor-pointer px-8"><SiReactivex />DevFlow</h1>
                <div className=" mt-25 text-white font-bold px-10 space-y-4 text-center">
                    <p className="tracking-wide text-4xl leading-loose">
                    Manage your projects 🚀
                    </p>
                    <p className="tracking-wide text-4xl leading-11">
                    Track growth, users, and analytics in one place
                    </p>
                </div>
            </div>
        </div>


        {/* Right side  */}
        <div className="w-1/2 flex items-center justify-center rounded-2xl bg-white m-4">
            <div className="flex flex-col bg-white items-center justify-center p-6 rounded-2xl shadow-xl w-96 border border-gray-200 ">
                <h1 className="text-3xl pb-6">Login</h1>
                <div className="flex flex-col space-y-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>

                    <p className="text-right text-xs text-gray-700 cursor-pointer hover:text-blue-600">Forgot password?</p>

                    <span className="text-center text-red-500 text-sm">{error}</span>

                    <button disabled={loading} onClick={(handleLogin)} className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 text-white rounded-lg  transition-all hover:scale-103 duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    
                    {loading ? "Logging in..." : "Login"}
                    {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                    </button>

                    <p className="text-xs text-center">Don't have an account? <span className="hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                        <Link to="/signup">
                            Signup
                        </Link>    
                        </span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
