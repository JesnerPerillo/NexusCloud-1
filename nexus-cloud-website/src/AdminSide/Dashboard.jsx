import AdminHeader from './Components/AdminHeader.jsx';
import SideBar from './Components/Sidebar.jsx';
import { TbReportMoney } from "react-icons/tb";
import Graph from './Components/Graph.jsx';
import { useEffect, useState } from 'react';
export default function Dashboard() {

  const [sales, setSales] = useState({ totalSales: 0, monthlySales: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/sales")
      .then((res) => res.json())
      .then((data) => setSales(data))
      .catch((err) => console.error("Error fetching sales:", err));
  }, []);

  return (
    <div className="w-full h-screen con overflow-hidden">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="flex justify-around ml-20">
        <div className="w-80 report h-40 drop-shadow-3xl p-2 rounded  mt-10 relative">
          <h1 className="text oswald-bold">Total sales</h1>
          <TbReportMoney className="w-10 h-10 text absolute right-2 top-2"/>
          <p className="text mt-2">Sales: P{sales.totalSales}</p>
          
        </div>
        <div className="w-80 h-40 report drop-shadow-3xl p-2 rounded  mt-10 relative">
          <h1 className="oswald-bold mb-2">Monthly Report</h1>
          <p>Sample Sales: P{sales.monthlySales}</p>
        </div>
        <div className="w-1/2 mt-5">
        <div className="flex items-center justify-center p-4 drop-shadow-3xl">
          <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-black text-center mb-4">Sample Data Graph</h2>
            <Graph />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
