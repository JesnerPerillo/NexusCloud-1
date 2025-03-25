import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";

export default function Account() {
  return(
    <div className="w-full h-screen overflow-hidden con">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div>
      </div>
    </div>
  );
}