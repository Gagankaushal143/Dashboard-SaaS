import { useState } from "react";
import { SiReactivex } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../utils/api";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import { motion } from "framer-motion";


export const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (name.trim() === "" || password.trim() === "" || email.trim() === "") {
            return setError("All fields are required !!")
        }

        const data = await signupUser({ name, email, password });

        if (data) {
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            setLoading(true);
            setError("");
        } else {
            alert("Signup failed");
        }

        setEmail("");
        setName("");
        setPassword("");

    }

    return (
        <div className="flex min-h-screen flex-col bg-linear-to-br from-gray-100 via-blue-100 to-purple-200">
            <motion.span initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-2xl font-bold tracking-wide flex items-center gap-1 px-4 md:hidden mt-4 -mb-12 text-blue-600">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                    <SiReactivex />
                </motion.div>
                DevFlow
            </motion.span>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex min-h-screen p-4 sm:p-6 lg:p-12 items-center w-full">
                <div className="bg-linear-to-br from-blue-500 to-purple-600 flex flex-col-reverse md:flex-row rounded-2xl w-full max-w-6xl mx-auto p-4 md:p-0 shadow-2xl">
                    {/* Left side  */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 flex self-center sm:items-center justify-center p-6 lg:p-18 bg-white m-4 rounded-2xl">
                        <div className="w-full max-w-sm px-4 lg:px-12">
                            <h1 className="text-3xl md:text-4xl text-center mb-12">Signup</h1>
                            <div >
                                <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full border transition-all duration-300 focus:scale-[1.02] bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border transition-all duration-300 focus:scale-[1.02] bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    <div className="relative">
                                        <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border transition-all duration-300 focus:scale-[1.02] bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                        <button type="button" onClick={() => setShow(!show)} className="text-xl absolute top-2.5 right-3 cursor-pointer px-1">
                                            {show ? <FaRegEyeSlash /> : <FaRegEye/> }
                                        </button>
                                    </div>

                                    <span className="text-center text-red-500 text-sm">{error}</span>

                                    {/* <p className="text-right text-xs text-gray-700 cursor-pointer hover:text-blue-600">Forgot password?</p> */}

                                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} disabled={loading} type="submit" className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">

                                        {loading ? "Signing up..." : "Signup"}
                                        {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                                    </motion.button>

                                    <p className="text-xs text-center">Already have an account? <span className="hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </motion.div>



                    {/* Right side */}
                    <div className="w-full lg:w-1/2 rounded-2xl hidden md:block">
                        <div className="flex justify-center mt-4 md:mt-8 flex-col mb-10 md:mb-0">
                            <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl sm:text-2xl text-white font-bold tracking-wider flex items-center justify-start md:justify-end gap-2 cursor-pointer sm:px-8 px-4">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                                    <       SiReactivex />
                                </motion.div>
                                DevFlow
                            </motion.h1>
                            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className=" mt-20 text-white font-bold px-12 space-y-2 text-center">
                                <p className="tracking-wide text-xl sm:text-xl lg:text-3xl leading-loose">
                                    Create your account 🚀
                                </p>
                                <div className="text-xl sm:text-xl lg:text-3xl px-2 md:px-4 leading-8 lg:leading-11 ">
                                    Start managing your projects,
                                    Track analytics in real-time,
                                    Boost your productivity
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
