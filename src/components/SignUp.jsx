import logo from '../assets/starsiegeRemoved.png'
export default function SignUp(){
    return(
        <div className="min-h-screen w-full flex bg-black text-white px-5 items-center justify-center"> 
            <div className="w-1/2 h-[95vh] relative overflow-hidden p-16 flex flex-col justify-center items-center text-center rounded-3xl">

            {/* Main radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,1),rgba(0,0,0,1))]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[60%] 
                            bg-[radial-gradient(circle,rgba(236,72,153,0.5),transparent)] blur-2xl opacity-70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                
                <span className="text-white font-bold text-4xl flex flex-inline" id='crap'><img src={logo} className='w-15 h-15'/><span className='mt-3'>Code Whisperer</span></span>
                <h1 className="text-white text-3xl font-semibold mt-3 flex">Get Started with Us</h1>
                <p className="text-gray-300 mt-4 text-center">
                Sign Up.
                </p>
            </div>
            </div>


                <div className="md:w-1/2 p-16 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold">Sign Up Account</h2>
                    <p className="text-gray-400 mb-8">Enter your personal data to create your account</p>

                    <div className="flex space-x-4 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-700 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-900 transition">
                            <img src='https://www.svgrepo.com/show/475656/google-color.svg' alt='Google' className='w-5 h-5'/>
                            Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-700 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-900 transition">
                            <img src='https://www.svgrepo.com/show/512317/github-142.svg' alt='Github' className='w-5 h-5'/>
                            Github
                        </button>
                    </div>
                    <div className="text-center text-gray-500 mb-4">Or</div>

                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <input type="text" placeholder="eg. Smith" className="rounded-md bg-[#111] text-white flex-1 p-3 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                            <input type="text" placeholder="eg. Francisco" className="rounded-md bg-[#111] text-white flex-1 p-3 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                            <input type="email" placeholder="Email" className="w-full rounded-md bg-[#111] text-white p-3 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                            <input type="password" placeholder="Enter your password" className="w-full rounded-md bg-[#111] text-white p-3 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 pr-10"/>

                            <button type="submit" className="w-full bg-white text-black p-3 rounded hover:bg-gray-200">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-gray-400">
                        Already have an account?{''}
                        <a href="/signin" className="text-blue-500">Log in</a>
                    </p>
                </div>  
        </div>
    );
}