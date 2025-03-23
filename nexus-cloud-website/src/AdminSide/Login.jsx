import { useState } from 'react';
import NexusLogo from '../Images/nexusLogo.png';
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TiWarning } from "react-icons/ti";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username: formData.username,
        password: formData.password,
      });

      console.log("Login response:", response.data);
      localStorage.setItem('token', response.data.token);
      setLoginSuccess(true);

      setTimeout(() => {
        navigate('/admindashboard');
      }, 5000);
      
    } catch (error) {
      console.error("Login error:", error);
      setIncorrectPassword(true);
      setTimeout(() => {
        setIncorrectPassword(false);
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center border border-gray-300 relative"
      >
        {/* Nexus Logo */}
        <motion.img 
          src={NexusLogo} 
          alt="NexusCloud Logo" 
          className="h-16 w-16 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />

        <h1 className="text-3xl montserrat-semibold text-gray-800 tracking-wide mb-6">
          WELCOME ADMIN
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          {/* Username */}
          <div className="w-full mb-6">
            <label className="text-sm font-semibold block mb-2 text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
              required
            />
          </div>

          {/* Password */}
          <div className="w-full mb-6">
            <label className="text-sm font-semibold block mb-2 text-gray-700">Password</label>
            <motion.div
              animate={incorrectPassword ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
              className="flex items-center border rounded-xl shadow-md bg-white"
              style={{
                borderColor: incorrectPassword ? "red" : "#d1d5db",
                borderWidth: "2px",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-5 py-3 bg-transparent focus:outline-none"
                required
              />
              <button 
                type="button" 
                onClick={togglePassword} 
                className="px-4 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
              </button>
            </motion.div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-1/2 py-2 mt-4 text-white text-lg font-semibold rounded-xl shadow-md transition-all hover:cursor-pointer ${
                loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-black to-gray-700 hover:shadow-lg'
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </div>
        </form>

        {/* Incorrect Password Modal */}
        {incorrectPassword && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-80px] bg-white border border-red-500 shadow-lg rounded-lg px-6 py-4 flex items-center space-x-4"
          >
            <TiWarning className="text-red-500" size={28} />
            <p className="text-sm font-semibold text-red-600">Incorrect password! Please try again.</p>
          </motion.div>
        )}

        {/* Login Success Modal */}
        {loginSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[-80px] bg-green-500 text-white shadow-lg rounded-lg px-6 py-4 flex items-center space-x-4"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-center font-semibold">Login successful! Redirecting to the Dashboard. Welcome {formData.username}!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
