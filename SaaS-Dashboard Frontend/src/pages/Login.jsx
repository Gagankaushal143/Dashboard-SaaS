import { useState } from "react";
import { SiReactivex } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import { motion } from "framer-motion";


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            return setError("All fields are required !!")
        }

        const data = await loginUser({ email, password });


        if (data.token) {
            localStorage.setItem("token", data.token);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
            setLoading(true);
            setEmail("");
            setPassword("");
        } else {
            setError(data.message)
        }

    }

    return (
        <div className="flex min-h-screen flex-col">
            <motion.span initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-2xl font-bold tracking-wide flex items-center gap-1 px-4 md:hidden mt-4 -mb-12 text-blue-600">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                    <SiReactivex />
                </motion.div>
                DevFlow
            </motion.span>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex min-h-screen p-4 sm:p-6 lg:p-12 items-center w-full">
                <div className="bg-linear-to-br from-blue-500 to-purple-600 flex md:flex-row rounded-2xl w-full max-w-6xl mx-auto px-0 py-4 md:p-0">
                    {/* Left side or upper part*/}
                    <div className="w-full lg:w-1/2 rounded-2xl hidden md:block">
                        <div className="flex justify-center mt-4 md:mt-8 flex-col mb-10 md:mb-0">
                            <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl sm:text-2xl text-white font-bold tracking-wider flex items-center gap-2 cursor-pointer px-4 sm:px-8">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                                    <       SiReactivex />
                                </motion.div>
                                DevFlow
                            </motion.h1>
                            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className=" mt-20 text-white font-bold space-y-2 text-center">
                                <p className="tracking-wide text-xl sm:text-2xl lg:text-3xl leading-loose">
                                    Manage your projects 🚀
                                </p>
                                <p className="text-xl sm:text-2xl lg:text-3xl px-2 md:px-4 md:leading-11">
                                    Track growth, users, and analytics in one place
                                </p>
                            </motion.div>
                        </div>
                    </div>


                    {/* Right side or bottom part */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 flex self-center sm:items-center justify-center p-6 lg:p-18 rounded-2xl bg-white m-4">
                        <div className="w-full max-w-sm px-4 lg:px-12">
                            <h1 className="text-3xl md:text-4xl text-center mb-12">Login</h1>
                            <div className="flex flex-col space-y-4">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border transition-all duration-300 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border transition-all duration-300 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-blue-500" />

                                <p className="text-right text-xs text-gray-700 cursor-pointer hover:text-blue-600">Forgot password?</p>

                                <span className="text-center text-red-500 text-sm">{error}</span>

                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} disabled={loading} onClick={(handleLogin)} className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? "Logging in..." : "Login"}
                                    {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                                </motion.button>

                                <p className="text-xs text-center">Don't have an account? <span className="hover:underline text-blue-600 hover:text-purple-600 transition-colors cursor-pointer">
                                    <Link to="/signup">
                                        Signup
                                    </Link>
                                </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
