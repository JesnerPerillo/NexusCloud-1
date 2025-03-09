/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ course, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [allowedDates, setAllowedDates] = useState([]);

  useEffect(() => {
    if (course?.title) {
      axios.get("http://localhost:5000/api/courses")
        .then((res) => {
          console.log("API Response:", res.data); 
          
          const courseData = res.data.find(c => c.course_name === course.title);
          if (courseData && courseData.dates.length > 0) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
    
            const formattedDates = courseData.dates
              .map(dateStr => {
                const date = new Date(dateStr);
                console.log("Converted Date:", date); 
                return date;
              })
              .filter(date => date >= today);
    
            setAllowedDates(formattedDates);
          }
        })
        .catch((err) => console.error("Error fetching courses:", err));
    }
  }, [course]);
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <h2 className="text-xl text-black font-bold">{course.title}</h2>
        <p className="mt-2 text-black">{course.description}</p>
        <p className="mt-4 font-semibold text-black">Price: {course.discountedPrice}</p>

        <hr className="text-black"/>

        <form className="flex flex-col space-y-2 bg-gray-400 p-2 rounded text-sm text-white mt-10">
          <div>
            <label className="block">Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 p-1"
            />
          </div>

          <div>
            <label className="block">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 p-1"
            />
          </div>

          <div>
            <label className="block text-white">Course</label>
            <input 
              type="text" 
              placeholder={course.title} 
              className="w-full border-b border-gray-300 p-1 text-white cursor-not-allowed" 
              disabled
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              includeDates={allowedDates} 
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              placeholderText="Choose a future date"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 p-1"
              dayClassName={(date) => {
                const isAllowed = allowedDates.some(allowedDate => {
                  return (
                    allowedDate.getFullYear() === date.getFullYear() &&
                    allowedDate.getMonth() === date.getMonth() &&
                    allowedDate.getDate() === date.getDate()
                  );
                });
                return isAllowed ? "bg-blue-500 text-white rounded-full" : "text-white";
              }}
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>


        {/* Close Button */}
        <button 
          className="mt-4 p-2 absolute top-0 right-3 text-sm text-black rounded-full hover:cursor-pointer" 
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
