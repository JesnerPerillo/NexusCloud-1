import { PiMapPinLight } from "react-icons/pi";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="con bg-gray-100 w-full h-auto sm:w-full h-auto py-16 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16 sm:flex-row sm:gap-32 items-center justify-center">
        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-start justify-between w-full sm:w-1/2 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">CONTACT US</h1>
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.google.com/maps/place/NEXUSCLOUD+IT+SOLUTIONS+INC/@14.5896052,121.0584803,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8170cbf03d9:0xcfe9a8f04e9cc91!8m2!3d14.5896052!4d121.0610552!16s%2Fg%2F11smm1k9bz?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D">
                <PiMapPinLight className="h-8 w-8 text-[#f4ca4f]" />
              </a>
              <p className="hover:cursor-pointer">U1414 14TH FL. AIC BURGUNDY EMPIRE TOWER II, ADB AVE. ORTIGAS CENTER PASIG CITY</p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <BsTelephone className="w-8 h-8 text-[#f4ca4f]" />
              <p className="hover:cursor-pointer">+63 912 345 6789</p>
            </div>

            {/* Email */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="mailto:kdoz@live.com">
                <CiMail className="h-8 w-8 text-[#f4ca4f]" />
              </a>
              <p className="hover:cursor-pointer">kdoz@live.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-start justify-around w-full sm:w-1/2 sm:h-68 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">SOCIALS</h1>
          <div className="space-y-4">
            {/* Facebook */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://web.facebook.com/nxs88">
                <BsFacebook className="w-8 h-8 text-[#f4ca4f]" />
              </a>
              <p className="hover:cursor-pointer">NexusCloud I.T. Solutions</p>
            </div>

            {/* TikTok */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.tiktok.com/@nexuscloud_">
                <FaTiktok className="w-8 h-8 text-[#f4ca4f]" />
              </a>
              <p className="hover:cursor-pointer">nexuscloud_</p>
            </div>

            {/* YouTube */}
            <div className="flex items-center text-lg text-gray-700 space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.youtube.com/@NexuscloudITSolutions">
                <FaYoutube className="w-8 h-8 text-[#f4ca4f]" />
              </a>
              <p className="hover:cursor-pointer">NexusCloud I.T. Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
