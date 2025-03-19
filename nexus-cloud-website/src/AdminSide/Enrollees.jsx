import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";
import { PiUserListThin } from "react-icons/pi";
import { MdEdit, MdDelete  } from "react-icons/md";

export default function Enrollees() {
  const [enrollees, setEnrollees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 12;
  const [hasMore, setHasMore] = useState(true);


  const fetchEnrollees = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/enrollees?limit=${limit}&offset=${currentPage * limit}`
      );
  
      // ✅ Format the date before setting the state
      const formattedData = response.data.map((enrollee) => ({
        ...enrollee,
        date: new Date(enrollee.date).toLocaleDateString("en-CA"), // Format to YYYY-MM-DD
      }));
  
      setEnrollees(formattedData);
  
      // ✅ Check if there's more data
      setHasMore(response.data.length === limit);
    } catch (error) {
      console.error("Error fetching enrollees:", error);
    }
  };
  
  useEffect(() => {
    fetchEnrollees();
  }, [currentPage]);
  
  

  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="w-full flex items-center justify-center bg-gray-100">
        <div className="p-6 ml-15 w-9/10 h-[calc(100vh-80px)] rounded-3xl bg-white shadow-xl relative">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl mr-3 text-gray-800 tracking-tight">Enrollees</h2>
            <PiUserListThin size={40}/>
          </div>
          <div className="overflow-y-auto max-h-[70vh] rounded-xl border border-gray-200 shadow-md">
            <table className="w-full text-[10px] text-left text-gray-700">
              <thead className="bg-gray-200 sticky top-0 text-gray-700 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Phone Number</th>
                  <th className="px-4 py-3 font-medium">Course</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Modality</th>
                  <th className="px-4 py-3 font-medium">Payment Method</th>
                  <th className="px-4 py-3 font-medium">Reference Number</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {enrollees.map((enrollee, index) => (
                  <tr
                    key={enrollee.id}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    }`}
                  >
                    <td className="px-4 py-3">{enrollee.id}</td>
                    <td className="px-4 py-3">{enrollee.name}</td>
                    <td className="px-4 py-3">{enrollee.email}</td>
                    <td className="px-4 py-3">{enrollee.phone_number}</td>
                    <td className="px-4 py-3">{enrollee.course}</td>
                    <td className="px-4 py-3">{enrollee.date}</td>
                    <td className="px-4 py-3">{enrollee.modality}</td>
                    <td className="px-4 py-3">{enrollee.payment_method}</td>
                    <td className="px-4 py-3">{enrollee.reference_number || "NA"}</td>
                    <td className="flex justify-evenly p-3 items-center"><MdEdit size={15} className="text-green-500"/><MdDelete size={15} className="text-red-600"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Modern Pagination */}
          <div className="flex absolute right-5 bottom-5 justify-end mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={`px-5 py-2 rounded-full border ${
                currentPage === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-900 transition hover:cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={!hasMore}
              className={`px-5 py-2 rounded-full border ${
                hasMore
                  ? "bg-gray-800 text-white hover:bg-gray-900 hover:cursor-pointer transition"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}