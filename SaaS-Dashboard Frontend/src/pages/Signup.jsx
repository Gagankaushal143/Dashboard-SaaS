import { SiReactivex } from "react-icons/si";



export const Signup = () => {
  return (
    <div className="flex h-screen p-12">

        <div className="bg-linear-to-br from-blue-500 to-purple-600 flex rounded-2xl">
            {/* Left side  */}
        <div className="w-1/2 flex items-center justify-center bg-white m-4 rounded-2xl">
            <div className="flex flex-col bg-white items-center justify-center p-6 rounded-2xl shadow-xl w-96 border border-gray-200 ">
                <h1 className="text-3xl pb-6">Signup</h1>
                <div className="flex flex-col space-y-4">
                    <input type="text" placeholder="Name" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    <input type="text" placeholder="Email" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    <input type="text" placeholder="Password" className="w-full border transition duration-200 bg-gray-50 focus:bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>

                    {/* <p className="text-right text-xs text-gray-700 cursor-pointer hover:text-blue-600">Forgot password?</p> */}

                    <button className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 text-white rounded-lg  transition-all hover:scale-103 duration-300 cursor-pointer ">Signup</button>

                    <p className="text-xs text-center">Already have an account? <span className="hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"><a href=""></a></span></p>
                </div>
            </div>
        </div>



        {/* Right side */}
        <div className="w-1/2 rounded-r-2xl">
            <div className="flex justify-center mt-8 flex-col">
                <h1 className="text-2xl text-white font-bold tracking-wider flex items-center justify-end gap-2 cursor-pointer px-8"><SiReactivex />DevFlow</h1>
                <div className=" mt-25 text-white font-bold px-12 space-y-4">
                    <p className="tracking-wide text-4xl leading-loose">
                    Create your account 🚀
                    </p>
                    <div className="tracking-wide text-3xl leading-11">
                        Start managing your projects 
                        Track analytics in real-time  
                        Boost your productivity
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
