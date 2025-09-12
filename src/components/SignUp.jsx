import logo from '../assets/starsiegeRemoved.png'
import { supabase } from '../supabaseClient';
import { useState } from 'react';

export default function SignUp(){

    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUpHandling = async (e) => {
        e.preventDefault()

        const {data,error} = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            alert(error.message)
        } else {
            alert('abc!')

            await supabase.from('profiles').insert({
            id: data.user.id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            })
        }
    }

    return(
        <div className="min-h-screen w-full flex bg-black text-white px-5 items-center justify-center"> 
            <div className="w-1/2 h-[95vh] relative overflow-hidden p-16 flex flex-col justify-center items-center text-center rounded-3xl">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,1),rgba(0,0,0,1))]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[60%] 
                                bg-[radial-gradient(circle,rgba(236,72,153,0.5),transparent)] blur-2xl opacity-70" />
                                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-white font-bold text-4xl flex flex-inline" id='crap'><img src={logo} className='w-15 h-15'/><span className='mt-3'>Code Whisperer</span></span>
                    <h1 className="text-white text-3xl font-semibold mt-3 flex">Get Started with Us</h1>
                    <p className="text-gray-300 mt-4 text-center">
                        Sign Up.
                    </p>
                </div>
            </div>


            <div className="hidden md:flex md:w-1/2 p-10 items-center justify-center">
                <div className='w-full max-w-md mx-auto flex flex-col space-y-6'>
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold">Create Account</h2>
                        <p className="text-gray-400 mt-2">Enter your data to create an account!!</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="w-full h-12 flex items-center justify-center gap-3 border border-gray-700 bg-gray-900 text-white text-md rounded-lg hover:bg-gray-900 transition">
                            {/*THIS IS AI GEN SVG PLEASE :3*/}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M21 12.2c0-.63-.06-1.24-.18-1.82H12v3.44h5.45c-.24 1.25-.99 2.31-2.12 3.02v2.5h3.43c2.01-1.85 3.22-4.59 3.22-7.14z" fill="#4285F4"/>
                                <path d="M12 22c2.7 0 4.95-.9 6.6-2.44l-3.43-2.5c-.95.64-2.18 1.02-3.17 1.02-2.44 0-4.5-1.65-5.24-3.87H3.22v2.43C4.87 19.96 8.2 22 12 22z" fill="#34A853"/>
                                <path d="M6.76 14.21a6.99 6.99 0 010-4.42V7.36H3.22a9.99 9.99 0 000 9.28l3.54-2.43z" fill="#FBBC05"/>
                                <path d="M12 6.5c1.46 0 2.78.5 3.82 1.48l2.86-2.86C16.96 3.6 14.7 3 12 3 8.2 3 4.87 5.04 3.22 7.57l3.54 2.43C7.5 8.15 9.56 6.5 12 6.5z" fill="#EA4335"/>
                            </svg>
                            <span className='font-semibold'>Google</span>
                        </button>
                        <button className="w-full h-12 flex items-center justify-center gap-3 border border-gray-700 bg-gray-900 text-white text-md rounded-lg hover:bg-gray-900 transition">
                            {/*THIS IS AI GEN SVG PLEASE :3*/}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 .5C5.73.5.91 5.32.91 11.58c0 4.6 2.99 8.5 7.14 9.88.52.1.71-.23.71-.5 0-.25-.01-.9-.01-1.76-2.9.63-3.51-1.4-3.51-1.4-.48-1.24-1.17-1.57-1.17-1.57-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.32-.27-4.76-1.16-4.76-5.17 0-1.14.4-2.06 1.06-2.79-.11-.27-.46-1.36.1-2.85 0 0 .87-.28 2.85 1.06a9.73 9.73 0 012.6-.35c.88 0 1.77.12 2.6.35 1.98-1.34 2.85-1.06 2.85-1.06.56 1.49.21 2.58.1 2.85.66.73 1.06 1.65 1.06 2.79 0 4.01-2.45 4.89-4.78 5.16.38.33.71.97.71 1.96 0 1.41-.01 2.54-.01 2.88 0 .27.19.6.72.5C20.1 20.08 23.01 16.18 23.01 11.58 23.01 5.32 18.19.5 12 .5z" />
                            </svg>
                           <span className='font-semibold'>Github</span>
                        </button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex-1 h-px bg-gray-700'></div>
                        <div className='text-gray-500 text-sm'>Or</div>
                        <div className='flex-1 h-px bg-gray-700'></div>

                    </div>
                    <form onSubmit={SignUpHandling} className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className='text-sm text-gray-400 mb-2 block'>First Name</label>
                                <input type="text" 
                                placeholder="eg. Smith" value={firstName} onChange={e => setFirstName(e.target.value)}
                                className="h-12 w-full rounded-lg bg-[#111] px-4 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                            </div> 

                            <div>
                                <label className='text-sm text-gray-400 mb-2 block'>Last Name</label>
                                <input type="text" 
                                placeholder="eg. Francisco" value={lastName} onChange={e => setLastName(e.target.value)}
                                className="h-12 w-full rounded-lg bg-[#111] px-4 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                            </div>

                        </div>
                        <div>
                            <label className='text-sm text-gray-400 mb-2 block'>Email</label>
                            <input type="email" 
                            placeholder="eg. smithfrancs@gmail.com" value={email} onChange={e => setEmail(e.target.value)}
                            className="h-12 w-full rounded-lg bg-[#111] px-4 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                        </div>    
                        <div>
                            <label className='text-sm text-gray-400 mb-2 block'>Password</label>
                            <div className='relative'>
                                <input type="password" 
                                placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}
                                className="h-12 w-full rounded-lg bg-[#111] px-4 pr-12 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"/>
                                <button type='button' className='absolute inset-y-0 right-3 flex items-center text-gray-400'>
                                    {/*THIS IS AI GEN SVG PLEASE :3*/}
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5c4.97 0 9.27 3.11 11 7-1.73 3.89-6.03 7-11 7S3.73 15.89 2 12c1.73-3.89 6.03-7 10-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <p className='text-sm text-gray-400 mt-2'>Must be at least 8 chars.</p>
                            </div>
                            <div>
                            <button type="submit" className="h-12 rounded-lg w-full bg-white text-black font-medium hover:bg-gray-200 transition">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-400">
                        Already have an account?
                        <a href="/signin" className="text-white font-medium hover:underline"> Log in</a>
                    </p>
                </div>  
            </div>
        </div>
    );
}