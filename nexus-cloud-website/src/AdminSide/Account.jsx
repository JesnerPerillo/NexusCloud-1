import { useState, useEffect } from "react";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";
import { FaEdit } from "react-icons/fa";

export default function Account() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ 
  name: '', 
  email: '', 
  password: ''});
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

  const addAdmin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    fetch("http://localhost:5000/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: newAdmin.username,
        email: newAdmin.email,
        password: newAdmin.password
      }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add admin");
      }
      return res.json();
    })
    .then((data) => {
      setAdmins([...admins, data]);
      // Reset form after successful submission
      setNewAdmin({
        username: '',
        email: '',
        password: ''
      });
      alert('Admin created successfully!');
    })
    .catch((err) => {
      console.error("Error adding admin:", err);
      alert('Error creating admin. Please try again.');
    });
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
      <div className="flex-1 p-10 bg-gray-100 flex flex-col items-center min-h-screen">
      <div className="w-full flex flex-wrap justify-center gap-10">
        {/* Admin List */}
        <div className="bg-white w-1/3 p-6 rounded-xl shadow-lg border border-gray-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin List</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr key={index} className="border-t text-gray-700 hover:bg-gray-100 transition">
                    <td className="p-3">{admin.username}</td>
                    <td className="p-3">{admin.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Admin Account */}
        <form onSubmit={addAdmin} className="bg-white w-1/3 p-6 rounded-xl shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create an Account</h2>
      <div className="space-y-4">
        <input
          placeholder="Enter Username"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm"
          type="text"
          value={newAdmin.username}
          onChange={(e) => setNewAdmin((prev) => ({ ...prev, username: e.target.value }))}
          required
        />
        <input
          placeholder="Enter Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm"
          type="email"
          value={newAdmin.email}
          onChange={(e) => setNewAdmin((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
        <input
          placeholder="Enter Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm"
          type="password"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin((prev) => ({ ...prev, password: e.target.value }))}
          required
          minLength="6"
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 rounded-lg text-sm font-medium"
          type="submit"
        >
          Create an Account
        </button>
      </div>
    </form>
      </div>

      {/* Update Course Pricing */}
      <div className="w-96 mt-12 bg-white p-6 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Update Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 text-sm"
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.course_name}>{course.course_name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Original Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 text-sm"
            onChange={(e) => setPricing((prev) => ({ ...prev, original_price: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Discounted Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 text-sm"
            onChange={(e) => setPricing((prev) => ({ ...prev, discounted_price: e.target.value }))}
          />
        </div>
        <button
          className="w-full mt-4 p-3 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-medium hover:bg-green-600 transition duration-200"
          onClick={updatePricing}
        >
          <FaEdit className="mr-1 text-lg" /> Update
        </button>
      </div>
    </div>
    </div>
  );
}