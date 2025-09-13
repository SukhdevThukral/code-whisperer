import logo from '../assets/starsiege.png'
import meGIF from '../assets/adrian_nub.gif'
import sauceGIF from '../assets/me.gif'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <header className="flex items-center justify-between p-1 bg-black text-white">
            <div className='container mx-auto flex flex-wrap items-center justify-between p-3'>
            {/* stupid section graaaahhh */}
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className='w-15 h-15'></img>
                <span className='text-xl font-semibold mt-2' id="logoText">CodeWhisperer</span>
            </div>

            {/*nav links*/}
            <nav className='flex flex-wrap space-x-4 mt-3 sm:mt-0' id="navLinks">
                <a href='sukhdevthukral.xyz' className='flex items-center transition-colors duration-200'>
                    <img src={meGIF} alt='meIcon' className='w-9 h-9 mr-2 object-contain'/>
                    me me me
                </a>
                <a href='#' className='flex items-center transition-colors duration-200'>
                    <img src={meGIF} alt='meIcon' className='w-9 h-9 mr-2 object-contain'/>
                    readme
                </a>
                <a href='https://github.com/SukhdevThukral/code-whisperer' className='flex items-center transition-colors duration-200'>
                    <img src={sauceGIF} alt='meIcon' className='w-5 h-5 ml-1 mr-2 object-contain'/>
                    sauce
                </a>
            </nav>
            {/*try ts out button*/}
            <Link to="/SignUp" className='mb-1'>
            <button className='flex items-center mt-3 sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition'>
                <i className="bi bi-stars mr-3 text-xl mb-1"></i>
                <div className='mb-1'>Try it out :p</div>
            </button>
            </Link>
            </div>
        </header>   
        <div className="h-[1px] bg-[#3B3A3A] w-full"></div>
        </>
    );
}