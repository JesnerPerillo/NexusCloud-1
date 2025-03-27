import { useState, useEffect } from "react";
import AdminHeader from "./Components/AdminHeader";
import SideBar from "./Components/Sidebar";
import { FaEdit } from "react-icons/fa";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImCross } from "react-icons/im";
import AccountImg from '../Images/account.svg';

export default function Account() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ 
  name: '', 
  email: '', 
  password: ''});
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [pricing, setPricing] = useState({ original_price: "", discounted_price: "" });
  const [createAdminSuccess, setCreateAdminSuccess] = useState(false);
  const [createAdminFailed, setCreateAdminFailed] = useState(false);

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
      setCreateAdminSuccess(true);
    })
    .catch((err) => {
      console.error("Error adding admin:", err);
      setCreateAdminFailed(true);
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

  useEffect(() => {
    if (createAdminSuccess) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [createAdminSuccess]);



  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="w-full h-20">
        <AdminHeader />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 lg:w-1/5">
          <SideBar />
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 p-5 w-full">
          {/* Admin User List */}
          <div className="w-full md:w-2/5 bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin User List</h2>
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

          {/* Right Section */}
          <div className="flex flex-col gap-5 w-full md:w-3/5">
            {/* Update Course Pricing */}
            <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-300">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Update Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
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
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={(e) => setPricing((prev) => ({ ...prev, original_price: e.target.value }))}
                />
                <input
                  type="number"
                  placeholder="Discounted Price"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={(e) => setPricing((prev) => ({ ...prev, discounted_price: e.target.value }))}
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="w-1/2 mt-4 p-2 bg-black text-white rounded-lg flex items-center justify-center text-sm font-medium hover:bg-gray-900 transition duration-200"
                  onClick={updatePricing}
                >
                  <FaEdit className="mr-1 text-lg" /> Update
                </button>
              </div>
            </div>

            {/* Create Admin Account */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              <form onSubmit={addAdmin} className="bg-white w-full md:w-1/2 p-6 rounded-xl shadow-lg border border-gray-300">
                <h2 className="text-lg text-center font-semibold text-gray-800 mb-4">Create an Admin Account</h2>
                <div className="space-y-4">
                  <input
                    placeholder="Enter Username"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                    type="text"
                    value={newAdmin.username}
                    onChange={(e) => setNewAdmin((prev) => ({ ...prev, username: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Enter Email"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                    type="email"
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Enter Password"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                    type="password"
                    value={newAdmin.password}
                    onChange={(e) => setNewAdmin((prev) => ({ ...prev, password: e.target.value }))}
                    required
                    minLength="6"
                  />
                  <div className="w-full flex justify-center">
                    <button
                      className="w-full bg-black hover:bg-gray-900 transition duration-200 text-white py-2 rounded-lg text-sm"
                      type="submit"
                    >
                      Create an Account
                    </button>
                  </div>
                </div>
              </form>
              <img src={AccountImg} alt="account" className="w-40 md:w-96 h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Success & Error Messages */}
      {createAdminSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: [1.1, 0.9, 1], opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className="bg-white p-6 rounded-xl flex flex-col items-center justify-center relative">
              <motion.div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
                <CheckCircle className="text-white w-10 h-10" />
              </motion.div>
              <h1 className="text-lg font-bold pt-5">Admin Created Successfully!</h1>
              <button className="mt-4 text-sm text-gray-600 hover:underline" onClick={() => setCreateAdminSuccess(false)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}

      {createAdminFailed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: [1.1, 0.9, 1], opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className="bg-white p-6 rounded-xl flex flex-col items-center justify-center relative">
              <motion.div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">
                <ImCross className="text-white w-10 h-10" />
              </motion.div>
              <h1 className="text-lg font-bold pt-5">Failed to Create Admin!</h1>
              <button className="mt-4 text-sm text-gray-600 hover:underline" onClick={() => setCreateAdminFailed(false)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}