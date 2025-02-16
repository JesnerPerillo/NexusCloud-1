import "tailwindcss";
import { Link } from "react-router";
import NexusLogo from '../Images/nexusLogo.png';

export default function Header() {
    return (
        <div>
            <header className="w-full h-20 bg-black flex justify-around items-center position-fixed drop-shadow-xl border-b-2 border-white">
                {/*Logo */}
                <div className="w-1/2 h-fit flex items-center">
                    <h1 className="text-white tracking-widest text-3xl">NexusCloud IT Solutions</h1>
                    <img src={NexusLogo} alt="NexusCloud Logo" className="h-14 w-14 "/>
                </div>
                {/*Nav side */}
                <div className="flex justify-evenly list-none w-1/3 text-xl text-white">
                    <Link to="" class="relative text-lg font-semibold text-white after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"><li>HOME</li></Link>
                    <Link to="" class="relative text-lg font-semibold text-white after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"><li>ABOUT</li></Link>
                    <Link to="" class="relative text-lg font-semibold text-white after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"><li>COURSES</li></Link>
                    <Link to="" class="relative text-lg font-semibold text-white after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"><li>PACKAGES</li></Link>
                    <Link to="" class="relative text-lg font-semibold text-white after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"><li>FAQs</li></Link>
                </div>
            </header>
        </div>
    )
}