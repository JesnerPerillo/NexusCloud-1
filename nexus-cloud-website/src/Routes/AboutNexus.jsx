import { useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import VisionImg from '../Images/meeting.jpg';
import MissionImg from '../Images/meeting2.jpg';
import ValuesImg from '../Images/meeting1.webp';
import Footer from '../Components/Footer.jsx';

export default function AboutNexus() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <div className="bg-gradient-to-r from-purple-700 to-pink-700 w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>
      <div className="w-full bg-gradient-to-r from-purple-700 to-pink-700 pt-40 flex flex-col items-center text-white">
        <h1 className="text-5xl play-bold sm:text-7xl">CORE PRINCIPLES</h1>
        <div className="flex w-full items-center flex-col justify-center p-5 mt-10 gap-5 sm:flex-row sm:gap-0">
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" style={{ backgroundImage: `url(${VisionImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? "opacity-70" : "opacity-40"} group-hover:opacity-70`}></div>
            <h1 className={`play-bold text-7xl tracking-wide z-20 text-yellow-500 transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[13rem]" : ""}`}>VISION</h1>
            <p className={`absolute text-lg text-white text-justify px-5 opacity-0 transition-opacity duration-500 z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} group-hover:opacity-100 group-hover:translate-y-0 sm:text-xl`}>Our vision at Nexuscloud IT Solution is to be the preferred choice for individuals and organizations seeking top-notch IT training. We aspire to create an inclusive learning environment where participants can acquire cutting-edge industry knowledge, practical skills, and valuable certifications at a low-cost fee. We are dedicated to continuously expanding our offerings, leveraging advanced technology, and partnering with industry leaders to ensure our clients receive the best possible training experience.</p>
          </div>
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" style={{ backgroundImage: `url(${MissionImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
            <h1 className={`play-bold text-7xl tracking-wide z-20 text-yellow-500 transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[13rem]" : ""}`}>MISSION</h1>
            <p className={`absolute text-xl text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20 ${isActive ? "opacity-100 tranlate-y-5" : "opacity-0 translate-y-5"}`}>At Nexuscloud IT Solution, we aim to provide high-quality training and development opportunities to individuals and organizations, empowering them with the skills and knowledge essential for success in the digital age. We are committed to delivering exceptional value through comprehensive programs, affordable fees, and a wide range of freebies.</p>
          </div>
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group group-hover:w-full sm:w-1/3" style={{ backgroundImage: `url(${ValuesImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
            <h1 className={`play-bold text-7xl tracking-wide z-20 text-yellow-500 group-hover:translate-y-[-13rem] duration-500 ${isActive ? "-translate-y-[13rem]" : ""}`}>VALUES</h1>
            <p className={`absolute text-xs text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[3rem] z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} sm:text-[17px]`}>
            <u>High-Quality Training</u>: Our commitment to excellence is evident in our meticulously crafted training programs, facilitated by industry experts who provide practical and hands-on learning experiences.<br /><br />

            <u>Low-Cost Fees</u>: We are dedicated to providing quality training at affordable costs, ensuring accessibility for individuals and organizations with varying budgets.<br /><br />

            <u>Lots of Freebies</u>: We offer freebies like study materials, practice exams, and online resources to enhance clients learning experience and ensure they get the most out of their training.<br /><br />

            <u>Customer-Focused Approach</u>: Our focus is on putting clients at the center of our operations, ensuring they are satisfied with our services and building long-term relationships based on trust and integrity.<br /><br />

            Nexuscloud IT Solution aims to equip individuals and organizations with the necessary knowledge and skills to thrive in the rapidly evolving IT landscape.</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}