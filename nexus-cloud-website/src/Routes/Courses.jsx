import Footer from '../Components/Footer.jsx';
import Contact from '../Components/Contact.jsx';
import Header from '../Components/Header.jsx';
import CCNAImg from '../Images/ccna.jpg';
import { PiMagnifyingGlass } from "react-icons/pi";



export default function Courses() {
  


  return(
    <div className="con w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>
      
      <div className="w-full h-auto con pt-20 flex flex-col items-center text-white">
        <div className="w-full h-100 bg-red-800 flex justify-between  items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
          <div className="flex flex-col items-center h-full justify-around ">
            <h1 className="text-7xl text-white oswald-bold">
              CCNA <br /> CERTIFICATION
            </h1>
            <div className="w-[40rem] bg-white flex items-center border rounded-3xl pl-2 ml-10 gap-2 z-20">
              <PiMagnifyingGlass className=" w-5 h-5 text-violet-600 hover:cursor-pointer focus:outline-hidden "/>
              <input className="w-full pl-3 h-13 text-black w-full rounded-r-2xl z-20 focus:outline-none" placeholder="Search Course"/>
            </div>
          </div>
          <div className="absolute right-80 scale-300 top-30">
            <img src={CCNAImg} alt="CCNA Image" className="w-60 h-60 rounded-full opacity-80"/>
          </div>
        </div>

        <div className="flex w-full justify-between items-center ">
          <div className="w-1/2 ml-5 mt-2 border-l-15 border-yellow-500">
            <h1 className="text-6xl play-bold pl-5 oswald-bold text">CISCO CERTIFIED NETWORK ASSOCIATE (CCNA 200-301)</h1>
          </div>
          <div className="flex bg-violet-500 rounded-xl mr-5 w-2/5 h-full mt-5 p-5 items-center justify-center">
            <div className="border-r-10 p-5 text-center border-yellow-500 w-1/3">
              <p className="text-xl text-yellow-400 play-bold">35 HOURS</p>
              <p className="text-xl">DURATION</p>
            </div>
            <div className="p-5 text-center p-5 w-1/3">
              <p className="text-xl text-yellow-400 play-bold">INTERMEDIATE</p>
              <p className="text-xl">LEVEL</p>
            </div>
            <div className="border-l-10 p-5 text-center border-yellow-500 w-1/3">
              <p className="text-xl text-yellow-400 play-bold">ON-SITE</p>
              <p className="text-xl">MODALITY</p>
            </div>
          </div>
        </div>
        <div className="p-20 text-2xl text-center">
          <p className="montserrat-semibold">The CCNA 200-301 (Cisco Certified Network Associate) course provides foundational networking knowledge and practical skills required for a career in IT networking. This comprehensive course covers essential topics such as network fundamentals, IP connectivity, security basics, automation, and wireless networking. Participants will learn how to configure, troubleshoot, and secure networks using Cisco technologies. Designed for beginners and IT professionals alike, the course prepares students for the CCNA 200-301 certification exam, validating their ability to manage modern networks. Upon completion, learners will be equipped for roles such as network administrator, support engineer, and IT technician.</p>
          <button className="w-60 h-16 bg-yellow-500 rounded-xl play-bold mt-10">ENROLL NOW</button>
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}