/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QRCode from '../Images/qr.jpg';
import { TfiClose } from "react-icons/tfi";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { TiWarning } from "react-icons/ti";

const Modal = ({ course, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [allowedDates, setAllowedDates] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [qrcodeModal, setQrcodeModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [referenceNumberModal, setReferenceNumberModal] = useState(false); 
  const [policyPopup, setPolicyPopup] = useState(false);
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
      setPolicyPopup(true);
      setQrcodeModal(true);
      setReferenceNumberModal(true);
    } else {
      setQrcodeModal(false);
      setReferenceNumberModal(false);
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Open the confirmation modal first
  setShowConfirmation(true);
};

const confirmSubmission = async () => {
  if (!agreedToPolicy) {
    alert("Please agree to the no refund policy before proceeding.");
    return;
  }

  const updateFormData = {
    ...formData,
    date: selectedDate ? selectedDate.toISOString().split("T")[0] : null, // ✅ Ensure date format
  };

  try {
    const response = await axios.post("http://localhost:5000/api/enrollees/create", updateFormData);
    console.log("Form submitted successfully:", response.data);

    setSuccess(true);
    setShowConfirmation(false);
  } catch (error) {
    console.log(selectedDate,)
    console.error("Error submitting form:", error.response?.data || error.message);
    alert(`Error submitting form: ${error.response?.data?.error || "Please try again later. Error: " + error.message}`);
  }
};


  
  

  {/*API call for courses in the database (abang lang to) */}

  useEffect(() => {
    if (course?.title) {
<<<<<<< HEAD
        axios.get("http://localhost:5000/api/courses/")
          .then((res) => {
          console.log("fetching courses date:", res.data.date);

=======
      console.log("Fetching courses for:", course.title);
  
      axios.get("http://localhost:5000/api/courses?sortby=course_name&order=desc")
        .then((res) => {
          console.log("API Response:", res.data);
  
>>>>>>> 1a9b485a5e537d23608e26beeca520f77c25b06f
          const courseData = res.data.find(c => c.course_name === course.title);
          console.log("Matched course data", courseData);
  
          if (courseData && courseData.date) {
            console.log("Course Data(Raw):", courseData.date);
  
            const today = new Date();
            today.setHours(0, 0, 0, 0);
  
            const formattedDate = new Date(courseData.date);
            console.log("Converted Date:", formattedDate);
  
            if (formattedDate >= today) {
              setAllowedDates([formattedDate]);
            } else {
              console.warn("Date is in the past", formattedDate);
            }
          } else {
            console.warn("No data field in course data");
          }
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    }
  }, [course]); // Closing properly
  
  console.log(selectedDate);
  
  


  // useEffect(() => {
  //   if (course?.title) {
  //     axios.get("http://localhost:5000/api/courses")
  //       .then((res) => {
  //         console.log("API Response:", res.data);

  //         const courseData = res.data.find(c => c.course_name === course.title);
  //         if (courseData && courseData.dates.length > 0) {
  //           console.log("Course Data:", courseData.date);
  //           const today = new Date();
  //           today.setHours(0, 0, 0, 0);

  //           const formattedDates = courseData.dates
  //             .map(dateStr => {
  //               const date = new Date(dateStr);
  //               console.log("Converted Date:", date);
  //               return date;
  //             })
  //             .filter(date => date >= today);

  //           setAllowedDates(formattedDates);
  //         }
  //       })
  //       .catch((err) => console.error("Error fetching courses:", err.message));
  //   }
  // }, [course]);
  // console.log(selectedDate)

  const handlesChange = (e) => {
    const { name, value } = e.target;
  
    // Allow only numeric values
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-30">
      <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 120, // Strong bounce
        damping: 10, // Soft return after bounce
        bounce: 0.4, // Bounce intensity
      }}
      className="bg-white p-5 rounded-lg shadow-lg w-full mx-2 relative sm:max-w-[40rem]"
    >
      <h2 className="text-xl text-black font-bold oswald-bold">{course.title}</h2>
      <p className="text-xs">{course.modality}</p>
      <p className="mt-4 text-sm text-black">Price: {course.discountedPrice}</p>

      <hr className="text-black mb-2" />

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex text-xs flex-col space-y-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
        <div className="flex gap-2">
          {/* Name Field */}
          <div className="w-1/2">
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email Field */}
          <div className="w-1/2">
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
        </div>

        {/* Phone Number */}
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

        {/* Course Field */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Course</label>
          <input
            type="text"
            name="course_name"
            value={formData.course}
            onChange={handleChange}
            placeholder={course.title}
            disabled
            className="w-full px-3 text-black py-2 border border-gray-200 rounded-md cursor-not-allowed"
          />
        </div>

        <div className="flex gap-2">
          {/* Modality Field */}
          <div className="w-1/2">
            <label className="block text-xs font-medium text-gray-700 mb-1">Modality</label>
            <select
              name="modality"
              value={formData.modality}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md"
            >
              <option value="" hidden>Select Modality</option>
              <option value="online">Online (via Zoom)</option>
              <option value="onsite">On-Site (At the office)</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="w-1/2">
            <label className="block text-xs font-medium text-gray-700 mb-1">Select Date</label>
            <DatePicker
              selected="2025-03-27"
              onChange={(date) => setSelectedDate(date)}
              includeDates={allowedDates}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              name='date'
              className="w-full px-3 text-black py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">Mode of Payment</label>
          <div className="flex space-x-2">
            <label className="flex items-center p-2 rounded-md border border-gray-200 hover:border-blue-400 cursor-pointer w-1/2">
              <input
                type="radio"
                name="paymentMethod"
                value="Gcash"
                checked={paymentMethod === "Gcash"}
                onChange={handlePaymentMethodChange}
              />
              <span className="ml-3 text-gray-700">Gcash</span>
            </label>
            <label className="flex items-center p-2 rounded-md border border-gray-200 hover:border-blue-400 cursor-pointer w-1/2">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={handlePaymentMethodChange}
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
              type="number"

              name="referenceNumber"
              onChange={handleChange}
              maxLength={13}
              placeholder="Reference Number"
              className="w-full px-3 text-black  py-2 border border-gray-200 rounded-md appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none border p-2"
            />
          </div>
          )}

        {/* Submit Button */}
        <div className="flex justify-center">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            bounce: 0.4,
          }}
          className="mt-6 w-1/2 bg-black text-white py-2.5 rounded-md hover:bg-[#1b1c1c] transition-all duration-200 hover:cursor-pointer"
        >
          Submit
        </motion.button>
        </div>
      </form>

      {/* Close Button */}
      <div className="flex justify-center">
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          bounce: 0.4,
        }}
        className="mt-4 p-2 text-sm text-black rounded-full hover:cursor-pointer"
      >
        Close
      </motion.button>
      </div>
    </motion.div>

      {/*QR code modal for Gcash */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white/70 backdrop-blur-2xl shadow-2xl text-gray-900 transform transition-all duration-300 ease-in-out rounded-l-2xl flex flex-col justify-center items-center border border-gray-200 ${
                qrcodeModal ? "translate-x-0" : "translate-x-full"
              }`}
      >
        <button
          className="absolute top-4 left-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition shadow-md hover:cursor-pointer"
          onClick={() => setQrcodeModal(false)}
        >
          <TfiClose className="text-lg" />
        </button>

        <h3 className="text-2xl oswald-bold mt-5 tracking-wide text-gray-800">GCASH PAYMENT</h3>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="bg-white p-5 rounded-2xl shadow-xl mt-4 relative"
        >
          <img src={QRCode} alt="Gcash QR Code" className="w-48 h-48 mx-auto rounded-lg drop-shadow-3xl" />
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl opacity-30"></div>
        </motion.div>

        <div className="mt-6 text-sm w-full px-6 text-gray-700">
          <p className="flex items-center space-x-2">
            <span className="font-medium text-gray-600">👤 Name:</span>
            <span className="font-semibold">CHRISTOPHER BUENAVENTURA</span>
          </p>
          <p className="flex items-center space-x-2 mt-1">
            <span className="font-medium text-gray-600">📞 Gcash Number:</span>
            <span className="font-semibold">09958494428</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-xs text-gray-700 w-11/12 bg-gray-100/80 border-l-4 border-black p-3 rounded-lg shadow-sm"
        >
          <p className="leading-relaxed">
            Scan the QR code above to make a GCash payment for the exact amount. After completing the
            payment, take a screenshot of the receipt and send it to our Facebook page{" "}
            <a
              href="https://www.facebook.com/nxs88"
              className="font-semibold text-blue-600 hover:underline"
            >
              NexusCloud IT Solutions.
            </a>{" "}
            Once verified, you will receive an email receipt, which you must present at the office on the
            day of the training.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setQrcodeModal(false)}
          className="mt-6 w-11/12 py-3 bg-gradient-to-r from-black to-gray-400 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition hover:from-gray-700 hover:to-black hover:cursor-pointer"
        >
          Okay, Got It!
        </motion.button>
      </motion.div>


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
              Enrollment Successful!
            </h1>
    
            {/* Close Button */}
            <button
              onClick={() => setSuccess(false)}
              className="mt-10 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 hover:cursor-pointer transition duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 200, // Increase for faster bounce
              damping: 10, // Lower for more bounciness
              mass: 0.8, // Lower mass for faster motion
              bounce: 0.5, // Controls how much it bounces back
            }}
            className="bg-white p-6 rounded-lg shadow-xl w-[24rem]"
          >
            <h2 className="text-xl font-bold text-black mb-4">Confirm Enrollment</h2>
            <p className="text-sm text-gray-700 mb-4">
              By proceeding, you agree to the <span className="font-semibold text-red-500">No Return of Money</span> policy.
            </p>

            {/* Checkbox */}
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                checked={agreedToPolicy}
                onChange={() => setAgreedToPolicy(!agreedToPolicy)}
                className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500 hover:cursor-pointer"
              />
              <label className="ml-2 text-sm text-gray-700">
                I have read and agree to the No Return of Money policy.
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition duration-150"
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={confirmSubmission}
                className={`px-4 py-2 text-sm text-white rounded-md hover:cursor-pointer ${
                  agreedToPolicy ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!agreedToPolicy}
              >
                Confirm
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {policyPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-3">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: [1.1, 0.9, 1], opacity: 1 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            className="w-full h-1/2 bg-red-200 rounded-xl p-5 flex flex-col justify-between items-center shadow-lg sm:w-1/4 sm:h-1/2 text-black"
          >
            {/* 🚨 Animated Warning Icon */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              <TiWarning className="text-red-500 mb-2" size={80} />
            </motion.div>
            <span className="montserrat-semibold text-2xl">Important Notice:</span>
            <p className="text-center">
              Once the payment is made through our online platform, it is 
              <span className="montserrat-semibold"> non-refundable </span> and 
              <span className="montserrat-semibold"> non-transferable </span> to another person. 
              Please ensure all details are correct before completing your payment.
            </p>

            <button 
              onClick={() => setPolicyPopup(false)} 
              className="mt-4 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition hover:cursor-pointer"
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