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
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function AboutNexus() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [weAreIndex, setWeAreIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Track when sections are in view
  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });



  return(
    <div className="con overflow-x-hidden w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>

      {/*Who We Are Container */}
      <motion.div 
      className="w-full h-auto flex flex-col justify-around sm:w-full sm:h-screen sm:flex-row hover:cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="w-auto mt-30 h-auto flex flex-col items-center sm:w-1/3 sm:h-[40rem]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
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
        <motion.div 
          className="mt-10 w-full bg-white/30 backdrop-blur-lg shadow-lg p-2 rounded-2xl flex items-center justify-around sm:w-[20rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {weAreSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Thumbnail ${index + 1}`}
              className={`h-10 w-10 object-cover rounded-full cursor-pointer duration-500 hover:opacity-100 hover:scale-130 ${index === weAreIndex ? 'border-2 border-black' : 'opacity-70'}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full text-center mt-20 p-0 text-white pr-0 sm:w-1/2 sm:p-10 sm:pr-20 sm:text-right mt-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[3rem] oswald-bold sm:text-[4rem] text">WHO WE ARE</h1>
        <p className="text text-lg px-5 text-justify leading-7 montserrat-semibold sm:text-sm sm:px-0">
          We are a team of dedicated IT professionals and educators committed to empowering individuals with practical, job-ready skills in Information Technology. With a strong foundation in industry-leading certifications, we bridge the gap between learning and real-world application.<br /><br />
          Our trainers are highly experienced and certified experts (MCT, CCNA, CCNP, MCSE, AWS, VCP, Citrix) with over 20 years of experience in finance, retail, managed services, and government sectors. We believe in accessible, hands-on training that prepares students not just to pass exams, but to excel in their careers.<br /><br />
          At our core, we are mentors, industry leaders, and innovators who are passionate about helping aspiring IT professionals build their future with confidence.
        </p>
      </motion.div>
    </motion.div>

    {/* What We Do Container */}  
    <motion.div
      className="w-full h-auto flex flex-col-reverse justify-between relative mt-0 px-5 sm:w-full sm:h-auto sm:flex-row sm:px-20 gap-20 p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Text Content */}
      <motion.div 
        className="w-full text-white z-20 sm:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[3rem] text-center oswald-bold text sm:text-[4rem] sm:text-left">
          WHAT WE DO
        </h1>
        <p className="text-md text-justify text montserrat-semibold">
          We are a team of dedicated IT professionals and educators committed to empowering individuals with practical, job-ready skills in Information Technology. With a strong foundation in industry-leading certifications, we bridge the gap between learning and real-world application.<br /><br />

          Our trainers are highly experienced and certified experts (MCT, CCNA, CCNP, MCSE, AWS, VCP, Citrix) with over 20 years of experience in finance, retail, managed services, and government sectors. <br /><br />

          We believe in accessible, hands-on training that prepares students not just to pass exams, but to excel in their careers. At our core, we are mentors, industry leaders, and innovators who are passionate about helping aspiring IT professionals build their future with confidence.
        </p>
      </motion.div>

      {/* Image Carousel */}
      <motion.div 
        className="relative mt-20 z-20 w-full max-w-2xl mx-auto h-3/4 bg-white/20 backdrop-blur-lg shadow-lg flex items-center justify-between rounded-xl p-2 sm:p-0 sm:w-1/2 sm:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            key={currentIndex} 
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[35rem] object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Prev Button */}
        <GrCaretPrevious
          onClick={prevSlide}
          className="absolute w-20 h-8 top-1/2 left-[-40px] transform -translate-y-1/2 text duration-500 hover:scale-110 sm:w-20 sm:h-20 sm:left-[-50px]"
        />

        {/* Next Button */}
        <GrCaretNext
          onClick={nextSlide}
          className="absolute w-20 h-8 top-1/2 right-[-40px] transform -translate-y-1/2 text duration-500 hover:scale-110 sm:w-20 sm:h-20 sm:right-[-50px]"
        />

        {/* Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-gray-600'}`}
            ></span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
      <div className="w-full con pt-40 flex flex-col items-center text-white">
      {/* Title */}
      <motion.h1 
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-5xl text oswald-bold sm:text-[6rem]"
      >
        CORE PRINCIPLES
      </motion.h1>

      {/* Cards Container */}
      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="flex w-full items-center flex-col justify-center p-5 mt-10 gap-5 sm:flex-row sm:gap-0"
      >
        {/* Vision Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" 
          style={{ backgroundImage: `url(${VisionImg})`}} 
          onClick={handleToggle}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? "opacity-70" : "opacity-40"} group-hover:opacity-70`}></div>
          <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-white transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[15rem]" : ""}`}>VISION</h1>
          <p className={`absolute text-md text-white text-justify px-5 opacity-0 transition-opacity duration-500 z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} group-hover:opacity-100 group-hover:translate-y-0 sm:text-xl`}>
          Our vision at Nexuscloud IT Solution is to be the preferred choice for individuals and organizations seeking top-notch IT training. We aspire to create an inclusive learning environment where participants can acquire cutting-edge industry knowledge, practical skills, and valuable certifications at a low-cost fee. We are dedicated to continuously expanding our offerings, leveraging advanced technology, and partnering with industry leaders to ensure our clients receive the best possible training experience.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group sm:w-1/3" 
          style={{ backgroundImage: `url(${MissionImg})`}} 
          onClick={handleToggle}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
          <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-white transition-all duration-500 group-hover:translate-y-[-13rem] ${isActive ? "-translate-y-[15rem]" : ""}`}>MISSION</h1>
          <p className={`absolute text-lg text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20 ${isActive ? "opacity-100 tranlate-y-5" : "opacity-0 translate-y-5"}`}>
          At Nexuscloud IT Solution, we aim to provide high-quality training and development opportunities to individuals and organizations, empowering them with the skills and knowledge essential for success in the digital age. We are committed to delivering exceptional value through comprehensive programs, affordable fees, and a wide range of freebies.
          </p>
        </motion.div>

        {/* Values Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full h-[35rem] relative flex justify-center items-center hover:cursor-pointer group group-hover:w-full sm:w-1/3" 
          style={{ backgroundImage: `url(${ValuesImg})`}} 
          onClick={handleToggle}
        >
          <div className={`absolute inset-0 bg-black transition-opacity group-hover:opacity-70 ${isActive ? "opacity-70" : "opacity-40"}`}></div>
          <h1 className={`montserrat-bold text-6xl tracking-wide z-20 text-white group-hover:translate-y-[-13rem] duration-500 ${isActive ? "-translate-y-[15rem]" : ""}`}>VALUES</h1>
          <p className={`absolute text-xs text-white text-justify px-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[3rem] z-20 ${isActive ? "opacity-100 translate-y-5" : "opacity-0 translate-y-5"} sm:text-[14px]`}>
          <span className="montserrat-bold">High-Quality Training</span>: Our commitment to excellence is evident in our meticulously crafted training programs, facilitated by industry experts who provide practical and hands-on learning experiences.<br /><br />

          <span className="montserrat-bold">Low-Cost Fees</span>: We are dedicated to providing quality training at affordable costs, ensuring accessibility for individuals and organizations with varying budgets.<br /><br />

          <span className="montserrat-bold">Lots of Freebies</span>: We offer freebies like study materials, practice exams, and online resources to enhance clients learning experience and ensure they get the most out of their training.<br /><br />

          <span className="montserrat-bold">Customer-Focused Approach</span>: Our focus is on putting clients at the center of our operations, ensuring they are satisfied with our services and building long-term relationships based on trust and integrity.<br /><br />

          Nexuscloud IT Solution aims to equip individuals and organizations with the necessary knowledge and skills to thrive in the rapidly evolving IT landscape.
          </p>
        </motion.div>
      </motion.div>
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