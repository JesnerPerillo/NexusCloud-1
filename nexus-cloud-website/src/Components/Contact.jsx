import { PiMapPinLight } from "react-icons/pi";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Track when sections are in view
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [socialRef, socialInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });


  return (
    <div className="con bg-gray-100 w-full h-auto sm:w-full h-auto py-16 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16 sm:flex-row sm:gap-32 items-center justify-center">
        {/* Contact Section */}
        <motion.div 
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "show" : "hidden"}
          variants={containerVariants}
          className="con relative rounded-xl shadow-xl p-8 flex flex-col items-start justify-between w-full sm:w-1/2 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <div className="absolute w-180 h-180 footer rounded-full opacity-50 top-[-3rem] right-20 z-10"></div>
          
          <motion.h1 variants={itemVariants} className="text-3xl font-semibold mb-4 z-20">
            CONTACT US
          </motion.h1>
          
          <motion.div variants={containerVariants} className="space-y-4 z-20">
            {/* Address */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.google.com/maps/place/NEXUSCLOUD+IT+SOLUTIONS+INC/@14.5896052,121.0584803,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8170cbf03d9:0xcfe9a8f04e9cc91!8m2!3d14.5896052!4d121.0610552!16s%2Fg%2F11smm1k9bz?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D">
                <PiMapPinLight className="h-8 w-8" />
              </a>
              <a href="https://www.google.com/maps/place/NEXUSCLOUD+IT+SOLUTIONS+INC/@14.5896052,121.0584803,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8170cbf03d9:0xcfe9a8f04e9cc91!8m2!3d14.5896052!4d121.0610552!16s%2Fg%2F11smm1k9bz?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D">
                <p className="hover:cursor-pointer">U1414 14TH FL. AIC BURGUNDY EMPIRE TOWER II, ADB AVE. ORTIGAS CENTER PASIG CITY</p>
              </a>
            </motion.div>

            {/* Phone Number */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <BsTelephone className="w-8 h-8" />
              <p className="hover:cursor-pointer">+63 995 8494 428</p>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="mailto:kdoz@live.com">
                <CiMail className="h-8 w-8" />
              </a>
              <a href="mailto:kdoz@live.com">
                <p className="hover:cursor-pointer">kdoz@live.com</p>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          ref={socialRef}
          initial="hidden"
          animate={socialInView ? "show" : "hidden"}
          variants={containerVariants}
          className="con relative rounded-xl shadow-xl p-8 flex flex-col items-start justify-between w-full sm:w-1/2 sm:h-68 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <div className="absolute w-180 h-180 footer rounded-full opacity-50 top-[-3rem] left-20 z-10"></div>
          
          <motion.h1 variants={itemVariants} className="text-3xl font-semibold mb-4 z-20">
            SOCIALS
          </motion.h1>
          
          <motion.div variants={containerVariants} className="space-y-4 z-20">
            {/* Facebook */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://web.facebook.com/nxs88">
                <BsFacebook className="w-8 h-8 text-blue-500" />
              </a>
              <a href="https://web.facebook.com/nxs88">
                <p className="hover:cursor-pointer">NexusCloud I.T. Solutions</p>
              </a>
            </motion.div>

            {/* TikTok */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.tiktok.com/@nexuscloud_">
                <FaTiktok className="w-8 h-8 text-black" />
              </a>
              <a href="https://www.tiktok.com/@nexuscloud_">
                <p className="hover:cursor-pointer">nexuscloud_</p>
              </a>
            </motion.div>

            {/* YouTube */}
            <motion.div variants={itemVariants} className="flex items-center text-lg space-x-4 transition-all hover:text-[#f4ca4f]">
              <a href="https://www.youtube.com/@NexuscloudITSolutions">
                <FaYoutube className="w-8 h-8 text-red-500" />
              </a>
              <a href="https://www.youtube.com/@NexuscloudITSolutions">
                <p className="hover:cursor-pointer">NexusCloud I.T. Solutions</p>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
