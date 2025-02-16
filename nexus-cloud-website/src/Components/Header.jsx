import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NexusLogo from "../Images/nexusLogo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const home = useRef(null);

    const homeScroll = () => {
        home.current.scrollIntoView({ behavior: "smooth", block: "start"});
        setIsOpen(false);
    }

    return (
        <header className="w-full bg-gradient-to-r from-purple-700 to-pink-700 shadow-lg">
            <div className="container w-full flex justify-around items-center p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={NexusLogo} alt="NexusCloud Logo" className="h-12 w-12 mr-2" />
                    <h1 className="text-white text-xl md:text-3xl font-bold tracking-widest">
                        NexusCloud IT Solutions
                    </h1>
                </div>

                {/* Menu - Desktop */}
                <nav className="hidden md:flex space-x-6 text-white text-lg font-semibold">
                    <Link to="/" className="hover:underline" onClick={homeScroll}>HOME</Link>
                    <Link to="/about" className="hover:underline">ABOUT</Link>
                    <Link to="/courses" className="hover:underline">COURSES</Link>
                    <Link to="/packages" className="hover:underline">PACKAGES</Link>
                    <Link to="/faqs" className="hover:underline">FAQs</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu - Responsive */}
            {isOpen && (
                <nav className="md:hidden bg-purple-800 text-white text-lg flex flex-col items-center py-4 space-y-4">
                    <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
                    <Link to="/courses" onClick={() => setIsOpen(false)}>COURSES</Link>
                    <Link to="/packages" onClick={() => setIsOpen(false)}>PACKAGES</Link>
                    <Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
                </nav>
            )}
        </header>
    );
}
