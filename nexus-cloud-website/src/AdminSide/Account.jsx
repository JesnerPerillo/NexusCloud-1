import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";

export default function Account() {
  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <h1>Account
          
        </h1>
      </div>
    </div>
  );
}