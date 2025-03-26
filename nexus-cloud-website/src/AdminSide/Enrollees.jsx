import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";
import { PiUserListThin } from "react-icons/pi";
import { MdEdit, MdDelete  } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


export default function Enrollees() {
  const [enrollees, setEnrollees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 12;
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  
  const filteredEnrollees = enrollees.filter((enrollee) =>
    enrollee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCourse ? enrollee.course === selectedCourse : true) &&
    (selectedModality ? enrollee.modality === selectedModality : true)
  );



  const fetchEnrollees = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getenrollees?limit=${limit}&offset=${currentPage * limit}`
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
      <div className="w-full flex items-center justify-center con">
        <div className="p-6 w-9/10 h-[calc(100vh-80px)] rounded-3xl report shadow-xl relative">
          <h2 className="text-2xl text tracking-tight flex items-center">
            <PiUserListThin size={32} className="mr-2" /> Enrollees
          </h2>
          <div className="flex text justify-between items-center mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search by name..."
                className="pl-2 h-8 text border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="pl-2 h-8 border text con text-xs rounded-lg w-80"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">All Courses</option>
                {[...new Set(enrollees.map((e) => e.course))].map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              <select
                className="pl-2 h-8 border text con text-xs rounded-lg"
                value={selectedModality}
                onChange={(e) => setSelectedModality(e.target.value)}
              >
                <option value="">All Modalities</option>
                {[...new Set(enrollees.map((e) => e.modality))].map((modality) => (
                  <option key={modality} value={modality}>{modality}</option>
                ))}
              </select>
              
            </div>
            <div className="flex w-40 justify-end mb-3 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className={`px-2 py-2 rounded-full border transition ${
                  currentPage === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }`}
              >
                <GrLinkPrevious />
              </button>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={!hasMore}
                className={`px-2 py-2 rounded-full border transition ${
                  hasMore
                    ? "bg-gray-800 text-white hover:bg-gray-900"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <GrLinkNext />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[70vh] rounded-xl border border-gray-200 shadow-md">
            <table className="w-full text-xs text-left text-gray-700">
              <thead className="footer text sticky top-0 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-1 font-medium">ID</th>
                  <th className="px-4 py-1 font-medium">Name</th>
                  <th className="px-4 py-1 font-medium">Email</th>
                  <th className="px-4 py-1 font-medium w-40">Phone Number</th>
                  <th className="px-4 py-1 font-medium">Course</th>
                  <th className="px-4 py-1 font-medium w-30">Date</th>
                  <th className="px-4 py-1 font-medium">Modality</th>
                  <th className="px-4 py-1 font-medium">Payment Method</th>
                  <th className="px-4 py-1 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnrollees.map((enrollee, index) => (
                  <tr
                    key={enrollee.id}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "report" : "footer text"
                    }`}
                  >
                    <td className="px-4 py-1">{enrollee.id}</td>
                    <td className="px-4 py-1">{enrollee.name}</td>
                    <td className="px-4 py-1">{enrollee.email}</td>
                    <td className="px-4 py-1">{enrollee.phone_number}</td>
                    <td className="px-4 py-1">{enrollee.course}</td>
                    <td className="px-4 py-1">{enrollee.date}</td>
                    <td className="px-4 py-1">{enrollee.modality}</td>
                    <td className="px-4 py-1">{enrollee.payment_method}</td>
                    <td className="flex justify-evenly p-3 items-center">
                      <MdEdit size={18} className="text-green-500 cursor-pointer" />
                      <MdDelete size={18} className="text-red-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}