import Footer from '../Components/Footer.jsx';
import Contact from '../Components/Contact.jsx';
import Header from '../Components/Header.jsx';
import EthicalHackingImg from '../Images/ethical-hacking.jpg';
import CCNAImg1 from '../Images/ccna1.png';
import AzureImg from '../Images/azure.png';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cards from '../Components/CardContent.jsx';
import WhatWeDo3 from '../Images/whatwedo3.jpg';
import WhatWeDo4 from '../Images/whatwedo4.jpg';
import WhatWeDo2 from '../Images/whatwedo2.jpg';



export default function Courses() {

  const images = [
      { src: WhatWeDo3, clip: "polygon(0% 0%, 95% 0%, 85% 100%, 0% 100%)" },
      { src: WhatWeDo4, clip: "polygon(10% 0%, 95% 0%, 85% 100%, 0% 100%)" },
      { src: WhatWeDo2, clip: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const courses = [
    {
      title: "ETHICAL HACKING & PENETRATION TESTING",
      description:
        "The Ethical Hacking & Penetration Testing course equips professionals with the skills to identify and exploit vulnerabilities in networks, systems, and applications—just like a hacker, but legally and ethically. It covers topics like reconnaissance, exploitation, malware analysis, and security countermeasures. Ideal for cybersecurity professionals, ethical hackers, and penetration testers, this certification helps strengthen defenses against cyber threats and enhances security expertise in real-world scenarios. 🚀",
      image: EthicalHackingImg,
    },
    {
      title: "Certified Cisco Network Associate (CCNA 200-301)",
      description:
        "The CCNA 200-301 certification from Cisco validates essential networking skills, including IP addressing, routing, switching, security, and automation. It prepares candidates for roles in network administration, cybersecurity, and IT infrastructure. Covering topics like VLANs, OSPF, wireless networking, and network automation, CCNA is ideal for beginners and professionals looking to advance in the IT industry. Passing the 200-301 exam demonstrates expertise in modern networking technologies, making it a valuable credential for career growth. 🚀",
      image: CCNAImg1,
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      description:
        "The Microsoft Certified: Azure Administrator Associate certification validates expertise in managing and monitoring Azure cloud services, including computing, storage, networking, and security. It covers deploying and managing virtual machines, configuring Azure identities, implementing security controls, and optimizing cloud performance. Ideal for IT professionals, this certification demonstrates the ability to administer Azure environments effectively, making it a valuable credential for cloud administrators and engineers. 🚀",
      image: AzureImg,
    },
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: {
        staggerChildren: 0.3, // Delay between each image animation
      }
    }
  };
  
  const imageVariants = {
    hidden: { 
      y: -1000, // Start above the viewport
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const leftSlideVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const rightSlideVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };



  return(
    <div className="con w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>

      <div className="relative w-full h-auto con">
      <motion.h1
        className="absolute z-20 text-7xl left-5 card-text bottom-20 sm:bottom-0 sm:left-20 oswald-bold sm:text-[8rem]"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 50,
          damping: 10,
          delay: 0.2
        }}
      >
        ZERO-TO-JOB-READY COURSES
      </motion.h1>

      {/* White Text - Slides in from bottom */}
      <motion.h1
        className="absolute z-20 text left-4 text-7xl bottom-22 sm:bottom-2 sm:left-18 oswald-bold sm:text-[8rem]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 50,
          damping: 10,
          delay: 0.4
        }}
        >
          ZERO-TO-JOB-READY COURSES
        </motion.h1>
        <motion.div
        className="flex justify-center items-center pt-22 relative opacity-70"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[450px] bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${image.src})`,
              clipPath: image.clip,
              marginLeft: index !== 0 ? "-5%" : "0",
            }}
            variants={imageVariants}
            custom={index} // Pass index to calculate individual delays
          />
        ))}
      </motion.div>
      </div>
      
      <motion.div 
        className="w-full h-auto con pt-20 flex flex-col items-center text"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="flex w-full flex-col justify-between mt-10 mb-10 sm:mt-10 mb-0 sm:items-center sm:flex-row">
          <motion.div 
            className="w-40 ml-5 mt-2 border-l-15 border-text"
            variants={leftSlideVariant}
          >
            <h1 className="text-6xl play-bold pl-5 oswald-bold text">AVAILABLE COURSES</h1>
          </motion.div>
          
          <motion.div 
            className="text w-full text-2xl text-justify px-10 mt-5 sm:mt-0 sm:text-right sm:pr-5 sm:w-3/5"
            variants={rightSlideVariant}
          >
            <h1>Our available courses are designed to equip learners with essential IT skills for career advancement. With a focus on practical knowledge and industry-recognized certifications, our programs provide hands-on training in cutting-edge technologies.</h1>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second Section - Recommended */}
      <motion.div 
        className="w-full text-2xl mt-20 mb-50 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        <div className="absolute h-20 flex items-center pr-2 right-0 border-r-10 border-yellow-500 mr-1 sm:mr-5">
          <h1 className="text-6xl pl-0 oswald-bold text sm:pl-5">RECOMMENDED</h1>
        </div>
      </motion.div>
        <div className="w-full h-5/6 flex items-center justify-center sm:w-full">
          <div className="bg-gray-200 rounded-lg sm:p-2 relative">
            <div className="flex w-full justify-center items-center h-auto">
              <div className="w-[390px] h-[600px] relative overflow-hidden bg-white shadow-lg rounded-lg sm:w-[1100px] sm:h-[500px]">
                <motion.div
                  key={courses[index].title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full"
                >
                  <img
                    className="absolute w-full h-full object-cover"
                    src={courses[index].image}
                    alt={courses[index].title}
                  />
                  <div className="absolute inset-0 bg-black opacity-70"></div>
                  <div className="absolute z-20 w-full h-full p-15 text-white flex flex-col justify-center">
                    <h1 className="text-xl oswald-bold sm:text-6xl">{courses[index].title}</h1>
                    <hr className="w-1/2 border-t-8 text-yellow-500 mt-2"></hr>
                    <p className="mt-2 w-full montserrat-semibold text-sm sm:max-w-md sm:text-sm">{courses[index].description}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform z-20 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">❮</button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform z-20 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">❯</button>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center w-full mb-10">
            <div className="hidden border-t border sm:flex-1 sm:block"></div>
              <span className="px-10 tracking-widest text-5xl oswald-bold text sm:text-7xl">ALL COURSES</span>
            <div className="hidden border-t border sm:flex-1 sm:block"></div>
          </div>
          {/*Card Container #1st Line*/}
          <Cards />
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