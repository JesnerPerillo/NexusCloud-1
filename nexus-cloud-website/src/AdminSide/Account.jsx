import { useState, useEffect } from "react";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";
import { FaUserPlus, FaEdit } from "react-icons/fa";

export default function Account() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "", role: "Admin" });
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [pricing, setPricing] = useState({ original_price: "", discounted_price: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/getadmin")
      .then((res) => res.json())
      .then((data) => setAdmins(data))
      .catch((err) => console.error("Error fetching admins:", err));
    
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const addAdmin = () => {
    fetch("http://localhost:5000/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => setAdmins([...admins, data]))
      .catch((err) => console.error("Error adding admin:", err));
  };

  const updatePricing = () => {
    fetch(`http://localhost:5000/api/courses/${selectedCourse}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pricing),
    })
      .then((res) => res.json())
      .then(() => alert("Course pricing updated successfully!"))
      .catch((err) => console.error("Error updating pricing:", err));
  };

  return (
    <div className="w-full h-screen con">
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="flex-1 p-6 m-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Admin List</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr key={index} className="border">
                    <td className="border p-2">{admin.username}</td>
                    <td className="border p-2">{admin.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-2 border rounded mt-2" 
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border rounded mt-2" 
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} 
            />
            <button className="w-full mt-4 p-2 bg-blue-500 text-white rounded flex items-center justify-center" onClick={addAdmin}>
              <FaUserPlus className="mr-2" /> Add Admin
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Update Course Pricing</h2>
          <select 
            className="w-full p-2 border rounded" 
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option>Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.course_name}>{course.course_name}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Original Price" 
            className="w-full p-2 border rounded mt-2" 
            onChange={(e) => setPricing({ ...pricing, original_price: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder="Discounted Price" 
            className="w-full p-2 border rounded mt-2" 
            onChange={(e) => setPricing({ ...pricing, discounted_price: e.target.value })} 
          />
          <button className="w-full mt-4 p-2 bg-green-500 text-white rounded flex items-center justify-center" onClick={updatePricing}>
            <FaEdit className="mr-2" /> Update Pricing
          </button>
        </div>
      </div>
    </div>
  );
}