import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import DarkMode from '../../Components/DarkMode.jsx';
import '../../darkmode.css';
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button for Small and Medium Screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-25 left-2 p-2 rounded-full z-30"
      >
        <FiMenu size={24} />
      </button>
      
      <div 
        className={`fixed top-0 pt-30 left-0 h-full bg-white drop-shadow-2xl transition-all duration-300 z-20 ${isOpen ? "w-3/6 md:w-48" : "w-14 md:block hidden "}`} 
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text hover:text-black"
            >
              <FiMenu size={24} />
              <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                Menu
              </span>
            </button>
            <Link to="/admindashboard">
              <button className="flex items-center space-x-2 text hover:text-black">
                <MdSpaceDashboard size={24} />
                <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                  Dashboard
                </span>
              </button>
            </Link>
            <Link to="/enrollees">
              <button className="flex items-center space-x-2 text hover:text-black">
                <HiUserGroup size={24} />
                <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                  Enrollees
                </span>
              </button>
            </Link>
            <Link to="/account">
              <button className="flex items-center space-x-2 text hover:text-black">
                <MdManageAccounts size={24} />
                <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                  Account
                </span>
              </button>
            </Link>
          </div>
          <div>
            <div className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"} mb-3`}>
              <DarkMode />
            </div>
            <button className="flex items-center space-x-2 text hover:text-red-500">
              <CiLogout size={24} />
              <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
