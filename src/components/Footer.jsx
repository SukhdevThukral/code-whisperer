export default function Footer(){
    return(
        <>
        <section class="relative bg-gradient-to-b from-black to-gray-900 py-24 px-6 overflow-hidden" id="newsletter"/>
        <footer className='bg-gray-900 text-gray-300 px-8 py-12'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                <div className="md:flex-1">
                    <h2 className="text-xl font-semibold text-pink-500 mb-4"> Contact us</h2>
                    <p className="mb-2 text-gray-400"> Collab? wai not?</p>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li>Email: <a href="" className="hover:text-pink-500">sukhdevthukral2411@gmail.com</a></li>
                        <li>Location: <span className="italic">Delhi, India</span></li>
                    </ul>
                </div>
                <div className="md:flex-1 flex flex-col items-start md:items-end">
                    <p className="text-sm mb-6 font-light">
                        Made with <span className="text-pink-500">❤️</span> by <span class="font-semibold text-pink-400">Sukhdev Thukral</span>
                    </p>
                    <div class="flex space-x-8 text-gray-400 text-sm font-semibold">
                        <a href="https://instagram.com/sukhdevthukral" target="_blank" rel="noopener" class="hover:text-pink-500 transition-colors duration-200">Instagram</a>
                        <a href="https://linkedin.com/in/sukhdevthukral" target="_blank" rel="noopener" class="hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
                        <a href="https://x.com/shizzei" target="_blank" rel="noopener" class="hover:text-sky-400 transition-colors duration-200">X</a>
                        <a href="https://github.com/SukhdevThukral" target="_blank" rel="noopener" class="hover:text-gray-100 transition-colors duration-200">GitHub</a>
                    </div>                    
                </div>
            </div>
            <div class="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-600 select-text">
                © 2025 Sukhdev Thukral. All rights reserved.
                </div>
        </footer>
        </>
    )
}