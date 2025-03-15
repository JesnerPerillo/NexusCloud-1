/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QRCode from '../Images/qr.jpg';
import { TfiClose } from "react-icons/tfi";

const Modal = ({ course, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [allowedDates, setAllowedDates] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [qrcodeModal, setQrcodeModal] = useState(false); // State for QR code modal

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

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);

    // Show QR code modal only if Gcash is selected
    if (selectedPaymentMethod === "Gcash") {
      setQrcodeModal(true);
    } else {
      setQrcodeModal(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full m-2 relative sm:max-w-xl">
        <h2 className="text-xl text-black font-bold oswald-bold">{course.title}</h2>
        <p>{course.modality}</p>
        <p className="mt-4 font-semibold text-black">Price: {course.discountedPrice}</p>

        <hr className="text-black mb-2" />

        <form className="flex text-sm flex-col space-y-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Course Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <input
              type="text"
              placeholder={course.title}
              className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
              disabled
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              includeDates={allowedDates}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select schedule"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:cursor-pointer"
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

          {/* Mode of Payment Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mode of Payment</label>
            <div className="flex flex-col space-y-2">
              {/* Gcash Option */}
              <label className="flex items-center p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-all duration-200 cursor-pointer">
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

              {/* Cash at Office Option */}
              <label className="flex items-center p-3 rounded-md border border-gray-200 hover:border-blue-400 transition-all duration-200 cursor-pointer">
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

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-6 w-1/2 bg-blue-500 text-white py-2.5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Close Button */}
        <div className="w-full flex justify-center">
          <button
            className="mt-4 p-2 text-sm text-black rounded-full hover:cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      {/* QR Code Modal - Slides in from the right */}
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
    </div>
  );
};

export default Modal;