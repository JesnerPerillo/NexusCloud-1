import { Link } from 'react-router';
import { motion } from 'framer-motion';
import LandingImg from '../Images/landing.png';
import { CgArrowLongRight } from "react-icons/cg";
import { ImRocket } from "react-icons/im";

export default function ContentLandingPage() {



return (
    <div className="flex flex-col con mt-0 lg:flex-row items-center justify-between px-5 lg:px-20 py-10 overflow-hidden">
      
    {/* Right Side */}
    <motion.div 
      className="w-full mt-20 text-left lg:w-3/4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="rounded-xl p-5 lg:p-2 flex flex-col justify-center">
        <motion.h2 
          className="text oswald-bold text-2xl sm:text-3xl lg:text-3xl tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Get Certified. Get Ahead. Stay Relevant.
        </motion.h2>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text text-fuchsia-50 gap-5 font-bolder text-5xl sm:text-7xl lg:text-[100px] mt-5 flex items-center oswald-bold xl:text-[75px]">
            LAUNCH YOUR CAREER <ImRocket />
          </h1>
        </motion.div>

        <motion.h2 
          className="text text-white text-3xl sm:text-2xl lg:text-2xl mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          No Experience Needed!
        </motion.h2>

        <motion.p 
          className="text text-white w-full mt-5 text-justify sm:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {`Join us today and take the first step toward mastering the tech skills of tomorrow! Whether you're a beginner exploring the world of technology or a professional looking to enhance your expertise, our comprehensive seminars will equip you with the knowledge, hands-on experience, and industry insights needed to stay ahead in the ever-evolving digital landscape. Don't miss this opportunity to learn from expert instructors, engage with like-minded individuals, and unlock new career possibilities in the world of IT!`}
        </motion.p>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          
          <Link to="/courses">
            <motion.button 
              className="button w-40 flex items-center justify-around p-2 rounded-xl hover:cursor-pointer"
              initial={false}
              whileHover={{
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Enroll Now! <CgArrowLongRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>

    {/* Left Side */}
    <motion.div 
      className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={LandingImg}
        alt="Teaching Image"
        className="w-full sm:w-2/3 lg:w-full"
        animate={{
          y: [-10, 10, -10], // Moves up and down
          scale: [1, 1.05, 1] // Subtle pulse effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
  </div>
    );
}
