import Header from '../Components/Header.jsx';
import WhatWeDo3 from '../Images/whatwedo3.jpg';
import WhatWeDo4 from '../Images/whatwedo4.jpg';
import WhatWeDo2 from '../Images/whatwedo2.jpg';
import Footer from '../Components/Footer.jsx';

export default function Process() {
  const images = [
    { src: WhatWeDo3, clip: "polygon(0% 0%, 95% 0%, 85% 100%, 0% 100%)" },
    { src: WhatWeDo4, clip: "polygon(10% 0%, 95% 0%, 85% 100%, 0% 100%)" },
    { src: WhatWeDo2, clip: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  ];



  return(
    <div className="con">
      <div>
        <Header />
      </div>

      <div className="relative w-full h-auto con">
        <h1 className="absolute z-20 text-7xl left-5 text-purple-500 bottom-20 sm:bottom-0 sm:left-20 oswald-bold sm:text-[8rem]">ZERO-TO-JOB-READY PACKAGES </h1>
        <h1 className="absolute z-20 text-white left-4 text-7xl bottom-22 sm:bottom-2 sm:left-18 oswald-bold sm:text-[8rem]">ZERO-TO-JOB-READY PACKAGES </h1>
        <div className="flex justify-center items-center pt-22 relative opacity-70">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[450px] bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${image.src})`,
              clipPath: image.clip,
              marginLeft: index !== 0 ? "-5%" : "0", // Overlapping effect
            }}
          ></div>
          ))}
        </div>
      </div>
      <div className="p-10 con">
        <p className="text text-xl mb-10">We offer a 1-year unlimited, practical, and job-ready IT certification training program designed for real-world success. Our bite-sized lessons include hands-on labs and projects to ensure practical learning.
        </p>
        <h2 className="text-[#ffbd59] oswald-bold text-2xl mb-10">Fast-Track & Flexible Learning</h2>
        <p className="text text-xl mb-10">Courses run 1 to 5 days instead of months, giving you more flexibility. Our Job-Ready Program lasts 3 to 6 months part-time, with a 2-year internship for industry experience.</p>
        <h2 className="text-[#ffbd59] oswald-bold text-2xl mb-10">Training Options</h2>
        <ul className="list-disc p-5 mb-10 text-xl text">
          <li>Live Online (Zoom & MS Teams) – Learn from home while working.</li>
          <li>On-Site (Ortigas Data Center) – Get hands-on with physical Cisco routers and switches.</li>
        </ul>
        <h2 className="text-[#ffbd59] oswald-bold text-2xl mb-10">Expert Instructors & Certification Success</h2>
        <p className="text text-xl mb-10">Learn from certified professionals (MCT, CCNA, AWS, VCP, Citrix, etc.) with 20+ years of experience. With study guides, hands-on labs, and reviewers, most students pass their exams within days.
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}