import { useState, useRef } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import NexusLogo from "../Images/nexusLogo.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DarkMode from '../Components/DarkMode.jsx';
import '../darkmode.css';

gsap.registerPlugin(ScrollTrigger);
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const home = useRef(null);

    useGSAP(() => {

        gsap.to('.nav-bar', {
            ScrollTrigger: 'header',
            position: 'sticky',
            top: 0,
            left: 0,

        })
    }
)



    const homeScroll = () => {
        home.current.scrollIntoView({ behavior: "smooth", block: "start"});
        setIsOpen(false);
    }

    return (
    <header className="w-full fixed text-black z-30 bg-white dark:bg-black shadow-lg transition-colors footer">
            <div className=" w-full flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={NexusLogo} alt="NexusCloud Logo" className="h-12 w-12 mr-2" />
                    <h1 className="text-black dark:text-white text-xl md:text-xl oswald-bold tracking-widest text">
                        NexusCloud IT Solutions
                    </h1>
                </div>

                <div className="flex space-x-10 items-center">
                    {/* Menu - Desktop */}
                <nav className="hidden md:flex space-x-6 text-white text-sm font-semibold">
                    <Link to="/" className=" group relative inline-block text"  onClick={homeScroll}><span className="nav-items">HOME</span></Link>
                    <Link to="/aboutnexus" className=" group relative inline-block text"><span className="nav-items">ABOUT</span></Link>
                    <Link to="/courses" className=" group relative inline-block text"><span className="nav-items">COURSES</span></Link>
                    <Link to="/process" className=" group relative inline-block text"><span className="nav-items">PROCESS</span></Link>
                    <Link to="/faqs" className=" group relative inline-block text"><span className="nav-items">FAQs</span></Link>
                </nav>
                <DarkMode />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden nav text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu - Responsive */}
            {isOpen && (
                <nav className="md:hidden text-md flex flex-col items-center py-4 space-y-4">
                    <Link to="/" onClick={() => setIsOpen(false)}><span className="text">HOME</span></Link>
                    <Link to="/aboutnexus" onClick={() => setIsOpen(false)}><span className="text">ABOUT</span></Link>
                    <Link to="/courses" onClick={() => setIsOpen(false)}><span className="text">COURSES</span></Link>
                    <Link to="/process" onClick={() => setIsOpen(false)}><span className="text">PROCESS</span></Link>
                    <Link to="/faqs" onClick={() => setIsOpen(false)}><span className="text">FAQs</span></Link>
                </nav>
            )}
        </header>
    );
}
