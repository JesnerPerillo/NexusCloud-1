import { CheckCircle, CreditCard, FileText, Pencil, Calendar, Mail, Users, GraduationCap, Clock, ShieldCheck, Banknote, Building2, Wallet } from "lucide-react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Contact from "../Components/Contact.jsx";

const steps = [
  { icon: <FileText size={32} className="text" />, title: "Browse Courses", description: "Explore a variety of IT training courses." },
  { icon: <Pencil size={32} className="text" />, title: "Fill Out Enrollment Form", description: "Provide your details and select the course you want to enroll in." },
  { icon: <Calendar size={32} className="text" />, title: "Select Schedule", description: "Choose a seminar date that fits your availability." },
  { icon: <CreditCard size={32} className="text" />, title: "Make Payment", description: "Pay securely via GCash or Cash at our office." },
  { icon: <Mail size={32} className="text" />, title: "Receive Confirmation", description: "An email receipt and confirmation will be sent to you." },
  { icon: <CheckCircle size={32} className="text" />, title: "Start Learning", description: "Attend the seminar and enhance your skills!" },
];

const benefits = [
  { icon: <GraduationCap size={32} className="text" />, title: "Industry-Recognized Certificates", description: "Get certified upon completing your training." },
  { icon: <Users size={32} className="text" />, title: "Expert Instructors", description: "Learn from experienced professionals in IT and cybersecurity." },
  { icon: <Clock size={32} className="text" />, title: "Flexible Schedules", description: "Choose seminar dates that fit your availability." },
  { icon: <ShieldCheck size={32} className="text" />, title: "Secure Payments", description: "We offer trusted and secure payment options." },
  { icon: <CheckCircle size={32} className="text" />, title: "Hands-on Learning", description: "Work on real-world projects and practical exercises to enhance your skills." },
  { icon: <Mail size={32} className="text" />, title: "Career Support", description: "Get guidance on job opportunities, resume building, and interview preparation." },
  { icon: <CreditCard size={32} className="text" />, title: "Affordable Pricing", description: "Receive high-quality training at competitive prices with no hidden fees." },
  { icon: <Users size={32} className="text" />, title: "Networking Opportunities", description: "Connect with industry professionals and peers to expand your career network." },
];


const paymentMethods = [
  { 
    icon: <Wallet size={32} className="text" />, 
    title: "GCash Payment", 
    description: "Send your payment via GCash to our official number. Ensure that you provide the correct reference number in the enrollment form. A confirmation email will be sent once payment is verified.",
    additionalInfo: "Processing time: 1-2 hours during business hours."
  },
  { 
    icon: <Banknote size={32} className="text" />, 
    title: "Cash at Office", 
    description: "Visit our office during business hours to pay in cash. Our staff will assist you with the enrollment process and provide an official receipt.",
    additionalInfo: "Office hours: Monday to Saturday, 9 AM - 5 PM."
  },
  { 
    icon: <Building2 size={32} className="text" />, 
    title: "Bank Transfer (BDO) (Coming Soon)", 
    description: "Transfer your payment via BDO online banking or over-the-counter. Send a screenshot of the transaction receipt to our email for verification.",
    additionalInfo: "Account details will be provided upon course reservation."
  },
  { 
    icon: <CreditCard size={32} className="text" />, 
    title: "Credit/Debit Card (Coming Soon)", 
    description: "We will soon accept credit and debit card payments for easier transactions. Stay tuned for updates!",
    additionalInfo: "Expected launch: Q2 2025."
  }
];

const testimonials = [
  { name: "Mark A.", feedback: "The training was excellent! The instructors were knowledgeable, and I got certified after completing my course." },
  { name: "Sarah L.", feedback: "I loved the flexibility of schedules. I was able to enroll and learn at my own pace while working full-time." },
  { name: "John D.", feedback: "The enrollment process was seamless. I received my confirmation email within minutes, and everything was well-organized!" },
  { name: "Mark A.", feedback: "The training was excellent! The instructors were knowledgeable, and I got certified after completing my course." },
  { name: "Sarah L.", feedback: "I loved the flexibility of schedules. I was able to enroll and learn at my own pace while working full-time." },
  { name: "John D.", feedback: "The enrollment process was seamless. I received my confirmation email within minutes, and everything was well-organized!" },
  { name: "Mark A.", feedback: "The training was excellent! The instructors were knowledgeable, and I got certified after completing my course." },
  { name: "Sarah L.", feedback: "I loved the flexibility of schedules. I was able to enroll and learn at my own pace while working full-time." },
  { name: "John D.", feedback: "The enrollment process was seamless. I received my confirmation email within minutes, and everything was well-organized!" },
];


export default function Process() {
  return (
    <div className="con">
      <Header />

      {/* Enrollment Process */}
      <div className="max-w-6xl h-full mx-auto py-16 pt-30 px-6 text-center sm:h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Enroll in a Course</h2>
        <p className="text-gray-400 text-lg">Follow these simple steps to enroll and start learning.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center report shadow-lg p-6 rounded-2xl hover:scale-110 transition-transform">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose NexusCloud? */}
      <div className="con h-full sm:h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose NexusCloud IT Solutions?</h2>
          <p className="text-gray-400 text-lg mb-10">We provide high-quality IT training with real-world applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center report shadow-lg p-6 rounded-2xl hover:scale-110 transition-transform">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-6xl h-full sm:h-screen mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Methods</h2>
        <p className="text-gray-400 text-lg mb-10">Choose the most convenient way to pay for your course.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="report p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 transition-transform">
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="con h-full sm:h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="report shadow-lg p-6 rounded-2xl hover:scale-110 transition-transform">
                <p className="">`{testimonial.feedback}`</p>
                <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
