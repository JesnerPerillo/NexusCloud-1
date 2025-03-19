import { useState } from "react";
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import DarkMode from '../../Components/DarkMode.jsx';
import '../../darkmode.css';

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
    className={`sidebar drop-shadow-2xl fixed flex flex-col justify-between items-start p-4 transition-all duration-300 z-20 ${
      isExpanded ? "w-48" : "w-16"}` } 
    style={{
      height: `calc(100vh - 5rem)`, 
    }}
    >
      <div className="flex flex-col space-y-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer"
        >
          <FiMenu size={24} />
          {isExpanded && <span className="text-sm font-medium">Menu</span>}
        </button>
        <Link to="/admindashboard"><button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
          <MdSpaceDashboard size={24} />
          {isExpanded && <span className="text-sm font-medium">Dashboard</span>}
        </button></Link>
        <Link to="/enrollees"><button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
          <HiUserGroup size={24} />
          {isExpanded && <span className="text-sm font-medium">Enrollees</span>}
        </button></Link>
        <Link to="/account"><button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
          <MdManageAccounts size={24} />
          {isExpanded && <span className="text-sm font-medium">Account</span>}
        </button></Link>
      </div>
      <div>
        {isExpanded ? <DarkMode /> : ""}
        <button className="flex items-center space-x-2 text   hover:text-red-500 hover:cursor-pointer">
          <CiLogout size={24} />
          {isExpanded && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}
