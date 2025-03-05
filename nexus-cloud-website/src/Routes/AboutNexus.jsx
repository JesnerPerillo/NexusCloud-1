import { useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import VisionImg from '../Images/meeting.jpg';
import MissionImg from '../Images/meeting2.jpg';
import ValuesImg from '../Images/meeting1.webp';
import Footer from '../Components/Footer.jsx';
import Contact from '../Components/Contact.jsx';
import WhoWeAreImg from '../Images/whoweare.jpg';
import WhoWeAre1Img from '../Images/whoweare1.jpg';
import WhoWeAre2Img from '../Images/whoweare2.jpg';
import WhoWeAre3Img from '../Images/whoweare3.jpg';
import WhoWeAre4Img from '../Images/whoweare4.jpg';
import WhatWeDoImg from '../Images/whatwedo.jpg';
import WhatWeDo1Img from '../Images/whatwedo1.jpg';
import WhatWeDo2Img from '../Images/whatwedo2.jpg';
import WhatWeDo3Img from '../Images/whatwedo3.jpg';
import WhatWeDo4Img from '../Images/whatwedo4.jpg';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

export default function AboutNexus() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [weAreIndex, setWeAreIndex] = useState(0);
  
    const slides = [
      WhatWeDoImg,
      WhatWeDo1Img,
      WhatWeDo2Img,
      WhatWeDo3Img,
      WhatWeDo4Img
    ];

    const weAreSlides = [
      WhoWeAreImg,
      WhoWeAre1Img,
      WhoWeAre2Img,
      WhoWeAre3Img,
      WhoWeAre4Img
    ]
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }

  const handleToggle = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  const weAreSlide = () => {
    setWeAreIndex((prevIndex) => (prevIndex + 1) % weAreSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(weAreSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setWeAreIndex(index);
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <div className="con overflow-x-hidden w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>

      {/*Who We Are Container */}
      <div className="w-full h-auto flex flex-col items-center justify-around sm:w-full sm:h-screen sm:flex-row">
        <div className="w-auto mt-30 h-auto flex flex-col items-center sm:w-1/2 sm:h-[40rem]">
          <div className="relative w-full max-w-2xl mx-auto h-3/4 bg-white/20 backdrop-blur-lg shadow-lg flex items-center justify-between rounded-xl ">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <img
                src={weAreSlides[weAreIndex]}
                alt={`Slide ${weAreIndex + 1}`}
                className="w-full h-[35rem] object-cover rounded-xl"
              />
            </div>
          </div>
          {/* Mini images (thumbnails) */}
        <div className="mt-10 w-full bg-white/30 backdrop-blur-lg shadow-lg p-2 rounded-2xl flex items-center justify-around sm:w-[20rem]">
          {weAreSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Thumbnail ${index + 1}`}
              className={`h-10 w-10 object-cover rounded-full cursor-pointer duration-500 hover:opacity-100 ${index === weAreIndex ? 'border-2 border-yellow-300' : 'opacity-70'}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-0 p-0 text-white pr-0 sm:w-1/2 sm:p-5 sm:pr-15 sm:text-right">
        <h1 className="text-[4rem] mb-10 oswald-bold text-[#f4ca4f] sm:text-[5rem] ">WHO WE ARE</h1>
        <p className="text text-lg  text-justify leading-7 montserrat-semibold sm:text-lg">We are a team of dedicated <span className="text-[#f4ca4f]">IT professionals and educators</span> committed to empowering individuals with practical, job-ready skills in Information Technology. With a strong foundation in industry-leading certifications, we bridge the gap between learning and real-world application.<br /> <br />

        Our trainers are highly experienced and certified experts (MCT, CCNA, CCNP, MCSE, AWS, VCP, Citrix) with <span className="text-[#f4ca4f]">over 20 years of experience</span> in finance, retail, managed services, and government sectors. We believe in accessible, hands-on training that prepares students not just to pass exams, but to excel in their careers.<br /> <br/>

        At our core, we are mentors, industry leaders, and innovators who are passionate about helping aspiring IT professionals build their future with confidence
        .</p>
      </div>
    </div>

    {/* What We Do Container */}  
        <div className="w-full h-auto flex flex-col justify-between relative mt-0 px-5 p-0 sm:w-full sm:h-auto sm:flex-row sm:px-20 gap-20 p-5 mt-50">
          <div className="absolute flex blur drop-shadow-2xl mx-0 rounded-xl sm:mx-10"></div>
          <div className="w-full text-white z-20 sm:w-1/2">
            <h1 className="text-[4rem] mb-15 text-center oswald-bold text-[#f4ca4f] sm:text-[5rem]">WHAT WE DO</h1>
            <p className="text-lg text-justify text montserrat-semibold">We are a team of dedicated IT professionals and educators committed to empowering individuals with practical, job-ready skills in Information Technology. With a strong foundation in industry-leading certifications, we bridge the gap between learning and real-world application.<br /><br />

            Our trainers are highly experienced and certified experts (MCT, CCNA, CCNP, MCSE, AWS, VCP, Citrix) with over 20 years of experience in finance, retail, managed services, and government sectors. <br /><br />

            We believe in accessible, hands-on training that prepares students not just to pass exams, but to excel in their careers. At our core, we are mentors, industry leaders, and innovators who are passionate about helping aspiring IT professionals build their future with confidence .
            </p>
          </div>
          <div className="relative mt-20 z-20 w-full max-w-2xl mx-auto h-3/4 bg-white/20 backdrop-blur-lg shadow-lg flex items-center justify-between rounded-xl p-2 sm:p-0 sm:w-1/2 sm:mt-0">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slides[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[35rem] object-cover rounded-xl"
              />
            </div>
            
            {/* Prev Button */}
            <GrCaretPrevious
              onClick={prevSlide}
              className="absolute w-20 h-8 top-1/2 left-[-40px] transform -translate-y-1/2 text-[#f4ca4f] duration-500 hover:-translate-x-[-5px] sm:w-20 sm:h-20 sm:left-[-50px]"
            />

            {/* Next Button */}
            <GrCaretNext
              onClick={nextSlide}
              className="absolute w-20 h-8 top-1/2 right-[-40px] transform -translate-y-1/2 text-[#f4ca4f] duration-500 hover:-translate-x-[5px] sm:w-20 sm:h-20 sm:right-[-50px]"
            />

            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-gray-600'}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      <div className="w-full con pt-40 flex flex-col items-center text-white">
        <h1 className="text-4xl text-[#f4ca4f] oswald-bold sm:text-[6rem]">CORE PRINCIPLES</h1>
        <div className="flex w-full items-center flex-col justify-center p-5 mt-10 gap-5 sm:flex-row sm:gap-0">
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" style={{ backgroundImage: `url(${VisionImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? "opacity-70" : "opacity-40"} group-hover:opacity-70`}></div>
            <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-yellow-500 transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[15rem]" : ""}`}>VISION</h1>
            <p className={`absolute text-md text-white text-justify px-5 opacity-0 transition-opacity duration-500 z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} group-hover:opacity-100 group-hover:translate-y-0 sm:text-xl`}>Our vision at Nexuscloud IT Solution is to be the preferred choice for individuals and organizations seeking top-notch IT training. We aspire to create an inclusive learning environment where participants can acquire cutting-edge industry knowledge, practical skills, and valuable certifications at a low-cost fee. We are dedicated to continuously expanding our offerings, leveraging advanced technology, and partnering with industry leaders to ensure our clients receive the best possible training experience.</p>
          </div>
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" style={{ backgroundImage: `url(${MissionImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
            <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-yellow-500 transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[15rem]" : ""}`}>MISSION</h1>
            <p className={`absolute text-lg text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20 ${isActive ? "opacity-100 tranlate-y-5" : "opacity-0 translate-y-5"}`}>At Nexuscloud IT Solution, we aim to provide high-quality training and development opportunities to individuals and organizations, empowering them with the skills and knowledge essential for success in the digital age. We are committed to delivering exceptional value through comprehensive programs, affordable fees, and a wide range of freebies.</p>
          </div>
          <div className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group group-hover:w-full sm:w-1/3" style={{ backgroundImage: `url(${ValuesImg})`}} onClick={handleToggle}>
            <div className={`absolute inset-0 bg-black transition-opacity group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
            <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-yellow-500 group-hover:translate-y-[-13rem] duration-500 ${isActive ? "-translate-y-[15rem]" : ""}`}>VALUES</h1>
            <p className={`absolute text-xs text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[3rem] z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} sm:text-[14px]`}>
            <u>High-Quality Training</u>: Our commitment to excellence is evident in our meticulously crafted training programs, facilitated by industry experts who provide practical and hands-on learning experiences.<br /><br />

            <u>Low-Cost Fees</u>: We are dedicated to providing quality training at affordable costs, ensuring accessibility for individuals and organizations with varying budgets.<br /><br />

            <u>Lots of Freebies</u>: We offer freebies like study materials, practice exams, and online resources to enhance clients learning experience and ensure they get the most out of their training.<br /><br />

            <u>Customer-Focused Approach</u>: Our focus is on putting clients at the center of our operations, ensuring they are satisfied with our services and building long-term relationships based on trust and integrity.<br /><br />

            Nexuscloud IT Solution aims to equip individuals and organizations with the necessary knowledge and skills to thrive in the rapidly evolving IT landscape.</p>
          </div>
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}