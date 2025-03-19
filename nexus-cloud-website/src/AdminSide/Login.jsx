import { useState } from 'react';
import NexusLogo from '../Images/nexusLogo.png';
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from 'axios';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login with:", formData);

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username: formData.username,
        password: formData.password,
      });
  
      console.log("Login response:", response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      window.location.href = '/dashboard';
  
    } catch (error) {
      console.error("Login error:", error);
      console.log("Error response:", error.response);  
      alert(error.response?.data?.error || 'Login failed');
    }
  };
  
  

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      <div className="w-2/5 h-3/4 bg-white rounded-xl drop-shadow-xl flex flex-col items-center p-8">
        <img src={NexusLogo} alt="NexusCloud Logo" className="h-20 w-20 mb-4" />
        <h1 className="text-2xl font-bold tracking-wide text-gray-800 mb-8">WELCOME ADMIN</h1>
        <form onSubmit={handleSubmit} className="w-80 flex flex-col items-center">
          <div className="w-full mb-4">
            <label className="text-sm font-semibold block mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-semibold block mb-1">Password</label>
            <div className="flex">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border border-gray-300 p-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="bg-gray-300 rounded-r-lg px-4"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white font-semibold py-2 px-6 rounded-lg w-40 hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}