import React from "react"
import "tailwindcss";
import NexusLogo from '../Images/nexusLogo.png';
import { Link } from "react-router";

export default function Header() {
    return (
        <div>
            <header className="w-full h-20 bg-gray-800 flex justify-around items-center position-fixed drop-shadow-xl">
                {/*Logo */}
                <div className="w-1/5 h-fit">
                  <img src={NexusLogo} alt="NexusCloud Logo" className="h-40 w-40 mt-10"/>
                </div>
                {/*Nav side */}
                <div className="flex justify-between list-none w-1/2 text-2xl text-white">
                    <Link to=""><li>HOME</li></Link>
                    <Link to=""><li>ABOUT</li></Link>
                    <Link to=""><li>COURSES</li></Link>
                    <Link to=""><li>PACKAGES</li></Link>
                    <Link to=""><li>FAQs</li></Link>
                </div>
            </header>
        </div>
    )
}