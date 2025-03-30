import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import DarkMode from '../../Components/DarkMode.jsx';
import '../../darkmode.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      {/* Menu Button for Small and Medium Screens */}
      {!isLargeScreen && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden fixed pt-20 top-5 left-2 p-2 rounded-full z-30"
        >
          <FiMenu size={24} />
        </button>
      )}
      
      <div 
        className={`fixed top-0 pt-30 left-0 h-full sidebar drop-shadow-2xl transition-all duration-300 z-20 
        ${isLargeScreen ? "w-14 hover:w-48" : isOpen ? "w-3/6 md:w-48" : " hidden"}`} 
        onMouseEnter={() => isLargeScreen && setIsOpen(true)}
        onMouseLeave={() => isLargeScreen && setIsOpen(false)}
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div className="flex flex-col space-y-6">
            <Link to="/admindashboard">
              <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
                <MdSpaceDashboard size={24} />
                <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                  Dashboard
                </span>
              </button>
            </Link>
            <Link to="/enrollees">
              <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
                <HiUserGroup size={24} />
                <span className={`text-sm font-medium transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                  Enrollees
                </span>
              </button>
            </Link>
            <Link to="/account">
              <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
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
            <button className="flex items-center space-x-2 text hover:text-red-500 hover:cursor-pointer" onClick={handleLogout}>
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