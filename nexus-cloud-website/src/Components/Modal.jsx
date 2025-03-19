/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QRCode from '../Images/qr.jpg';
import { TfiClose } from "react-icons/tfi";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Modal = ({ course, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [allowedDates, setAllowedDates] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [qrcodeModal, setQrcodeModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [referenceNumberModal, setReferenceNumberModal] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    course: course.title,
    modality: '',
    date: selectedDate,
    paymentMethod: '',
    referenceNumber: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handlePaymentMethodChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: selectedPaymentMethod,
    }));
  
    if (selectedPaymentMethod === "Gcash") {
      setQrcodeModal(true);
      setReferenceNumberModal(true);
    } else {
      setQrcodeModal(false);
      setReferenceNumberModal(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updateFormData = {
      ...formData,
      date: selectedDate ? selectedDate.toISOString().split("T")[0] : null, // ✅ Ensure date format
    };
  
    try {
      const response = await axios.post("http://localhost:4000/api/enrollee/create", updateFormData);
      console.log("Form submitted successfully:", response.data);
      setSuccess(true);
  
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert(`Error submitting form: ${error.response?.data?.error || "Please try again later."}`);
    }
  };
  

  {/*API call for courses in the database (abang lang to) */}
  useEffect(() => {
    if (course?.title) {
      axios.get("http://localhost4:000/api/courses/create")
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
      <div className="bg-white p-5 rounded-lg shadow-lg w-full mx-2 relative sm:max-w-[40rem]">
        <h2 className="text-xl text-black font-bold oswald-bold">{course.title}</h2>
        <p>{course.modality}</p>
        <p className="mt-4 font-semibold text-black">Price: {course.discountedPrice}</p>

        <hr className="text-black mb-2" />

        <form onSubmit={handleSubmit} className="flex text-xs flex-col space-y-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {/*Name Field */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-3 text-black  py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/*Email Field */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phoneNumber}
              maxLength={11}
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/*Course Field (automatic)*/}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder={course.title}
              className="w-full px-3 text-black  py-2 border border-gray-200 rounded-md cursor-not-allowed"
              disabled
            />
          </div>

          {/*Modality of choice */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Modality</label>
            <select
              name="modality"
              value={formData.modality}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md"
            >
              <option value="modality" selected hidden>Select Modality</option>
              <option value="Online">Online (via Zoom)</option>
              <option value="On-Site">On-Site (At the office)</option> 
            </select>
          </div>


          {/*Date Picker */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              includeDates={allowedDates}
              minDate={new Date()}
              autoComplete="off"
              name="date"
              value={formData.date}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select schedule"
              className="w-full px-3 text-black  py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:cursor-pointer"
              dayClassName={(date) => {
                const isAllowed = allowedDates.some(allowedDate => {
                  return (
                    allowedDate.getFullYear() === date.getFullYear() &&
                    allowedDate.getMonth() === date.getMonth() &&
                    allowedDate.getDate() === date.getDate()
                  );
                });
                return isAllowed ? "bg-blue-500 text-white rounded-full" : "text-gray-700";
              }}
            />
          </div>

          {/*Mode of Payment Section */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">Mode of Payment</label>
            <div className="flex flex-col space-y-2">
              {/*Gcash Option */}
              <label className="flex items-center p-2 rounded-md border border-gray-200 hover:border-blue-400 transition-all duration-200 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Gcash"
                  checked={paymentMethod === "Gcash"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                />
                <span className="ml-3 text-gray-700">Gcash</span>
              </label>

              {/*Cash at our Office Option */}
              <label className="flex items-center p-2 rounded-md border border-gray-200 hover:border-blue-400 transition-all duration-200 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                />
                <span className="ml-3 text-gray-700">Cash at our Office</span>
              </label>
            </div>
          </div>
          {/*Reference Number Field (automatic)*/}
          {referenceNumberModal && (
            <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Reference Number</label>
            <input
              value={formData.referenceNumber}
              type="text"
              name="referenceNumber"
              onChange={handleChange}
              maxLength={13}
              placeholder="Reference Number"
              className="w-full px-3 text-black  py-2 border border-gray-200 rounded-md"
            />
          </div>
          )}

          {/*Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-6 w-1/2 bg-black text-white py-2.5 rounded-md hover:bg-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 hover:cursor-pointer duration-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/*Close Button */}
        <div className="w-full flex justify-center">
          <button
            className="mt-4 p-2 text-sm text-black rounded-full hover:cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      {/*QR code modal for Gcash */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg text-black transform transition-transform duration-300 ease-in-out ${
          qrcodeModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col items-center relative">
          <h3 className="text-xl font-bold mb-4 mt-5 oswald-bold">Gcash Payment</h3>
          <img src={QRCode} alt="Gcash QR Code" className="w-48 h-48 mx-auto mb-4" />
          <p className="text-xs font-semibold text-left oswald-bold">
            <span>Name: </span>CHRISTOPHER BUENAVENTURA
          </p>
          <p className="text-xs font-semibold text-left oswald-bold">
            <span>Gcash Number: </span>09958494428
          </p>
          <p className="text-xs mt-10">Note: You can scan the QR code above to make a GCash payment for the exact amount. After completing the payment, please take a screenshot of the receipt and send it to our facebook page <a href="https://www.facebook.com/nxs88" className="montserrat-semibold">NexusCloud IT Solutions.</a> Once verified, you will receive an email receipt, which you must present at the office on the day of the training.</p>

          <button
            className="absolute top-2 left-2 p-2 hover:bg-gray-100 rounded-full hover:cursor-pointer"
            onClick={() => setQrcodeModal(false)}
          >
            <TfiClose className="text-lg" />
          </button>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-80 h-80 bg-white drop-shadow-2xl p-6 rounded-2xl flex flex-col items-center justify-center"
          >
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <CheckCircle className="text-white w-10 h-10" />
            </motion.div>
    
            <h1 className="text-lg font-semibold text-gray-700 mt-4">
              Payment Successful!
            </h1>

            <button
              onClick={() => {setSuccess(false); onClose();}}
              className="mt-10 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 hover:cursor-pointer transition duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Modal;