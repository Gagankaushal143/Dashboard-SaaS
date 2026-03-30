import { SiReactivex } from "react-icons/si";



export const Login = () => {
  return (
    <div className="flex h-screen">

        {/* Left side */}
        <div className="w-1/2 bg-linear-to-br from-blue-500 to-purple-600 ">
            <div className="flex justify-center mt-8 flex-col">
                <h1 className="text-2xl text-white font-bold tracking-wider flex items-center gap-2 cursor-pointer px-8"><SiReactivex />DevFlow</h1>
                <div className=" mt-40 text-white font-bold px-10 space-y-4 text-center">
                    <p className="tracking-wide text-4xl leading-tight">
                    Manage your projects smarter
                    </p>
                    <p className="tracking-wide text-4xl">
                    Track growth, users, and analytics in one place
                    </p>
                </div>
            </div>
        </div>


        {/* Right side  */}
        <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col bg-white items-center justify-center p-6 rounded-2xl shadow-xl w-96 border border-gray-200 ">
                <h1 className="text-3xl pb-6">Login</h1>
                <div className="flex flex-col space-y-4">
                    <input type="text" placeholder="Email" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    <input type="text" placeholder="Password" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>

                    <p className="text-right text-xs text-gray-700 cursor-pointer hover:text-blue-600">Forgot password?</p>

                    <button className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 text-white rounded-lg  transition-all hover:scale-103 duration-300 cursor-pointer ">Login</button>

                    <p className="text-xs text-center">Don't have an account? <span className="hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">Signup</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
