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
      <div className="bg-white p-6 rounded-lg shadow-lg w-full m-2 relative sm:max-w-md">
        <h2 className="text-xl text-black font-bold oswald-bold">{course.title}</h2>
        <p className="mt-4 font-semibold text-black">Price: {course.discountedPrice}</p>

        <hr className="text-black" />

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

          {/* Mode of Payment Section */}
          <div className="flex flex-col space-y-2">
            <label className="text-white">Mode of Payment</label>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Gcash"
                  checked={paymentMethod === "Gcash"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                />
                <span>Gcash</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                />
                <span>Cash at our Office</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
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
          <h3 className="text-xl font-bold mb-4 mt-5">Gcash Payment</h3>
          <img src={QRCode} alt="Gcash QR Code" className="w-48 h-48 mx-auto mb-4" />
          <p className="text-sm font-semibold text-left oswald-bold">
            <span>Name: </span>CHRISTOPHER BUENAVENTURA
          </p>
          <p className="text-sm font-semibold text-left oswald-bold">
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