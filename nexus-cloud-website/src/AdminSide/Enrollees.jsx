import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";

export default function Enrollees() {
  const [enrollees, setEnrollees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10; // Show 10 rows per page

  // ✅ Fetch data from backend
  const fetchEnrollees = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/enrollees?limit=${limit}&offset=${currentPage * limit}`);
      setEnrollees(response.data);
    } catch (error) {
      console.error("Error fetching enrollees:", error);
    }
  };

  useEffect(() => {
    fetchEnrollees();
  }, [currentPage]); // Refetch data when currentPage changes

  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="p-6 w-5/6 bg-gray-200 h-screen">
          <h2 className="text-2xl font-bold mb-6 text-black oswald-bold">Enrollees</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse shadow-lg">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-2 text-left font-semibold">ID</th>
                  <th className="p-2 text-left font-semibold">Name</th>
                  <th className="p-2 text-left font-semibold">Email</th>
                  <th className="p-2 text-left font-semibold">Phone Number</th>
                  <th className="p-2 text-left font-semibold">Course</th>
                  <th className="p-2 text-left font-semibold">Date</th>
                  <th className="p-2 text-left font-semibold">Payment Method</th>
                  <th className="p-2 text-left font-semibold">Reference Number</th>
                </tr>
              </thead>
              <tbody>
                {enrollees.map((enrollee) => (
                  <tr
                    key={enrollee.id}
                    className="border-b hover:bg-gray-100"
                  >
                    <td className="p-2 text-gray-800">{enrollee.id}</td>
                    <td className="p-2 text-gray-800">{enrollee.name}</td>
                    <td className="p-2 text-gray-800">{enrollee.email}</td>
                    <td className="p-2 text-gray-800">{enrollee.phone_number}</td>
                    <td className="p-2 text-gray-800">{enrollee.course}</td>
                    <td className="p-2 text-gray-800">{enrollee.date}</td>
                    <td className="p-2 text-gray-800">{enrollee.payment_method}</td>
                    <td className="p-2 text-gray-800">{enrollee.reference_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={`px-4 py-2 border rounded ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black text-white'}`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 border rounded bg-black text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}