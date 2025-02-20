import { PiMapPinLight } from "react-icons/pi";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return(
    <div className="bg-gradient-to-r from-purple-700 to-pink-700 w-full h-auto sm:w-full h-auto">
      <div className="flex w-full items-center justify-evenly h-screen pl-50 gap-30">
        <div className="bg-[#cb6ce6] w-3/4 h-3/4 relative">
          <h1 className="text-[6rem] play-bold text-[#f4ca4f] absolute top-[-70px] left-10">CONTACT US</h1>
          <div className="h-full text-white flex flex-col items-left justify-evenly absolute left-[-60px] top-5">
            <div className="flex items-center text-xl">
              <a href="https://www.google.com/maps/place/NEXUSCLOUD+IT+SOLUTIONS+INC/@14.5896052,121.0584803,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8170cbf03d9:0xcfe9a8f04e9cc91!8m2!3d14.5896052!4d121.0610552!16s%2Fg%2F11smm1k9bz?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"><PiMapPinLight className="w-32 h-24"/></a>
              <p className="pl-3">U1414  14TH FL. AIC BURGUNDY EMPIRE TOWER II, ADB AVE. ORTIGAS CENTER PASIG CITY</p>
            </div>
            <div className="flex items-center text-xl">
              <BsTelephone className="w-24 h-20"/>
              <p className="pl-5">+63 912 345 6789 </p>
            </div>
            <div className="flex items-center text-xl">
              <a href="mailto:kdoz@live.com"><CiMail className="w-28 h-24 "/></a>
              <p className="pl-5">kdoz@live.com</p>
            </div>
          </div>
        </div>
        <div className="bg-[#8c52ff] w-3/4 h-3/4 relative">
          <h1 className="text-[6rem] text-[#f4ca4f] absolute top-[-70px] play-bold left-30">SOCIALS</h1>
          <div className="h-full text-white flex flex-col items-left justify-evenly absolute left-[-60px] top-5">
            <div className="flex items-center text-xl">
              <a href="https://web.facebook.com/nxs88"><BsFacebook className="w-32 h-24 "/></a>
              <p className="pl-5">NexusCloud I.T. Solutions</p>
            </div>
            <div className="flex items-center text-xl">
              <a href="https://www.tiktok.com/@nexuscloud_"><FaTiktok className="w-32 h-24 "/></a>
              <p className="pl-5">nexuscloud_</p>
            </div>
            <div className="flex items-center text-xl">
              <a href="https://www.youtube.com/@NexuscloudITSolutions"><FaYoutube className="w-32 h-24 "/></a>
              <p className="pl-5">NexusCloud I.T. Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}