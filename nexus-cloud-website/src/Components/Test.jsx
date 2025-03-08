import { useState } from "react";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import CCNAImg from "../Images/ccna.jpg"; 
import CCSTImg from "../Images/ccst.png"; 
import EthicalHackingImg1 from "../Images/ethical-hacking.jpg"; 
import COMPTIAImg from "../Images/comptia.png"; 

const courses = [
  {
    id: 1,
    title: "Certified Cisco Network Associate (CCNA 200-301)",
    price: "P18,888.00",
    originalPrice: "P25,000",
    img: CCNAImg,
    description: "Learn networking fundamentals and prepare for the CCNA exam."
  },
  {
    id: 2,
    title: "Cisco Certified Support Technician (CCST) Networking 2025",
    price: "P3,000.00",
    originalPrice: "P5,000",
    img: CCSTImg,
    backgroundColor: "white",
    description: "Get hands-on experience with Cisco networking basics."
  },
  {
    id: 3,
    title: "Ethical Hacking & Penetration Testing",
    price: "P3,500.00",
    originalPrice: "P8,000",
    img: EthicalHackingImg1,
    description: "Learn ethical hacking techniques to secure networks."
  },
  {
    id: 4,
    title: "CompTIA CyberSecurity CySA+ 2025",
    price: "P3,999.00",
    originalPrice: "P25,000",
    img: COMPTIAImg,
    description: "Master cybersecurity concepts and get certified."
  },
];

const CardContainer = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-2 px-5 gap-5 flex mb-10 justify-around flex-col sm:flex-row">
      {courses.map((course) => (
        <Card key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
      ))}

      {/* Render Modal if a course is selected */}
      {selectedCourse && <Modal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
};

export default CardContainer;
