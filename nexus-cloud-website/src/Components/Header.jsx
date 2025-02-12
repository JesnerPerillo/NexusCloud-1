import React from "react"
import "tailwindcss";
import NexusLogo from '../Images/nexusLogo.png';
import { Link } from "react-router";

export default function Header() {
    return (
        <div>
            <header className="w-full h-20 bg-gray-800 flex justify-around items-center">
                {/*Logo */}
                <div className="w-1/5 h-fit">
                  <img src={NexusLogo} alt="NexusCloud Logo" className="h-40 w-40 mt-10"/>
                </div>
                {/*Nav side */}
                <div className="flex justify-around list-none w-1/3 text-white">
                    <Link to=""><li>Home</li></Link>
                    <Link to=""><li>About</li></Link>
                    <Link to=""><li>Courses</li></Link>
                    <Link to=""><li>Some</li></Link>
                    <Link to=""><li>Some</li></Link>
                    <Link to=""><li>FAQ</li></Link>
                </div>
            </header>
        </div>
    )
}