import heroImg from '../assets/canvaText.png'
import heroImg1 from '../assets/canvaText1.png'

export default function HeroSection(){
    return(
        <>
        <section className="bg-black text-white py-10">
            <div className="container mx-auto px-1">
                <div className='mb-9 justify-center'>
                    <img
                        src={heroImg1}
                        alt="canva"
                        className="rounded-lg shadow-lg w-full h-[750px] max-w-[2000px]"
                    />
                </div>
                <div className="space-y-9">
                    <div className="inline-flex items-center rounded-md bg-[#242424] px-3 py-1 text-sm text-gray-300 shadow-md" id="badge">
                        <i class="bi bi-cpu mr-2 p-[1px]"></i>
                        AI INTEGRATED
                    </div>
                    <div className="flex-inline items-between text-7xl py-3" id="titleSorta">
                        <span>The Ultimate<br></br>
                        Software:</span><span className="text-[#A8A8A8] font-regular"> Built for the</span>
                        <br/>
                        <span className="text-[#A8A8A8] font-regular"> next generation.</span>
                    </div>
                    <div className="flex-inline items-between text-lg max-w-3xl" id="descp">
                        <span>It automatically explains your code, adds helpful comments, analyzes complexity, and exports clean documentation - making coding easier, clearer, and more fun for everyone 🚀</span>
                    </div>
                    <button className='flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition'>
                        <i className="bi bi-stars mr-3 text-xl mb-1"></i>
                        <div className='mb-1'>Try it out :p</div>
                    </button>                    
                </div>
            </div>
        </section>
        </>
    )
}