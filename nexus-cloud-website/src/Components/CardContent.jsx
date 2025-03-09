import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import CCNAImg from "../Images/ccna.jpg"; 
import CCSTImg from "../Images/ccst.png"; 
import EthicalHackingImg1 from "../Images/ethicalhacking.png"; 
import COMPTIAImg from "../Images/comptia.png"; 
import CyberSecEsImg from '../Images/cybersecurity-essentials.webp'
import COMPTIASecImg from '../Images/comptia-security.webp';
import SOAImg from '../Images/SOA.webp';
import CyberArc from '../Images/CA.png';
import AzureAdmin from '../Images/azureadmin.png';
import AzureSolutionArchitect from '../Images/azure-sol-arc.jpg';
import AzureIdentifyAccessAdmin from '../Images/Identify-access-admin.webp';
import ModernDesktopAdmin from '../Images/MDA.png';
import EnterpriseAdmin from '../Images/enterprise-admin.png';
import WSHA from '../Images/WSHA.png';
import VMware from '../Images/vmware.png';
import WindowsServer from '../Images/windows.png';


const getImageForCourse = (courseName) => {
  const images = {
    "Certified Cisco Network Associate (CCNA 200-301)": CCNAImg,
    "Cisco Certified Support Technician (CCST) Networking 2025": CCSTImg,
    "Ethical Hacking & Penetration Testing": EthicalHackingImg1,
    "CompTIA CyberSecurity CySA+ 2025": COMPTIAImg,
    "4 Certificates in 1-Day Cybersecurity Essentials 2025": CyberSecEsImg,
    "CompTIA Security+ (SY0-701)": COMPTIASecImg,
    "Microsoft Certified: Security Operations Analyst Associate (SC-200)": SOAImg,
    "Microsoft Certified: Cybersecurity Architect Expert (SC-100)": CyberArc,
    "Microsoft Certified: Azure Administrator Associate (AZ-104)": AzureAdmin,
    "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)": AzureSolutionArchitect,
    "Microsoft Certified: Identity and Access Administrator Associate (SC-300)": AzureIdentifyAccessAdmin,
    "Microsoft 365 Endpoint Administrator Associate (MD-102)": ModernDesktopAdmin,
    "Microsoft 365 Certified: Administrator Expert (MS-102)": EnterpriseAdmin,
    "Microsoft Certified: Windows Server 2022 & Azure Cloud Hybrid Administrator (AZ-800)": WSHA,
    "VMware vSphere 7 Data Center Virtualization": VMware,
    "Microsoft Windows Server 2019 Administration Automation": WindowsServer,
  };

  return images[courseName] || WindowsServer;
};

export default function CardContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((response) => {
        const formattedCourses = response.data.map((course) => ({
          title: course.course_name,
          originalPrice: `P${course.original_price || "N/A"}`,
          discountedPrice: `P${course.discounted_price || "N/A"}`,
          imgSrc: getImageForCourse(course.course_name),
        }));
        setCourse(formattedCourses);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="p-2 gap-5  mb-10 justify-around grid grid-cols-1 sm:grid-cols-4 sm:px-5 sm:flex-row">
      {course.map((course) => (
        <Card key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
      ))}
      {selectedCourse && <Modal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
};

