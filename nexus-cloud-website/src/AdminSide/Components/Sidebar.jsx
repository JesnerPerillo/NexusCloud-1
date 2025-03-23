
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import DarkMode from '../../Components/DarkMode.jsx';
import '../../darkmode.css';

export default function SideBar() {

  return (
    <div 
    className={`sidebar drop-shadow-2xl w-14 fixed flex flex-col justify-between items-start p-4 transition-all duration-300 z-20 hover:w-48 group`} 
    style={{
      height: `calc(100vh - 5rem)`, 
    }}
>
  <div className="flex flex-col space-y-6">
    <button
      className="flex items-center space-x-2 text hover:text-black"
    >
      <FiMenu size={24} />
      <span className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100 group-hover:translate-x-2">
        Menu
      </span>
    </button>
    <Link to="/admindashboard">
      <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
        <MdSpaceDashboard size={24} />
        <span className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100">
          Dashboard
        </span>
      </button>
    </Link>
    <Link to="/enrollees">
      <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
        <HiUserGroup size={24} />
        <span className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100">
          Enrollees
        </span>
      </button>
    </Link>
    <Link to="/account">
      <button className="flex items-center space-x-2 text hover:text-black hover:cursor-pointer">
        <MdManageAccounts size={24} />
        <span className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100">
          Account
        </span>
      </button>
    </Link>
  </div>
  <div>
    <div className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100 mb-3">
      <DarkMode />
    </div>
    <button className="flex items-center space-x-2 text hover:text-red-500 hover:cursor-pointer">
      <CiLogout size={24} />
      <span className="text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:delay-300 group-hover:opacity-100">
        Logout
      </span>
    </button>
  </div>
</div>

  );
}
