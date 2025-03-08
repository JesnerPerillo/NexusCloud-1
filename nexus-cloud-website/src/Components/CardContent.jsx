import { useState } from "react";
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


const courses = [
  {
    title: "Certified Cisco Network Associate (CCNA 200-301)",
    originalPrice: "P25,000",
    discountedPrice: "P18,888.00",
    imgSrc: CCNAImg,
  },
  {
    title: "Cisco Certified Support Technician (CCST) Networking 2025",
    originalPrice: "P5,000",
    discountedPrice: "P3,000.00",
    imgSrc: CCSTImg,
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    originalPrice: "P8,000",
    discountedPrice: "P3,500.00",
    imgSrc: EthicalHackingImg1,
  },
  {
    title: "CompTIA CyberSecurity CySA+ 2025",
    originalPrice: "P25,000",
    discountedPrice: "P3,999.00",
    imgSrc: COMPTIAImg,
  },
  {
    title: "4 Certificates in 1-Day Cybersecurity Essentials 2025",
    originalPrice: "P4,000",
    discountedPrice: "P2,500.00",
    imgSrc: CyberSecEsImg,
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    originalPrice: "P25,000",
    discountedPrice: "P17,888.00",
    imgSrc: COMPTIASecImg,
  },
  {
    title: "Microsoft Certified: Security Operations Analyst Associate (SC-200)",
    originalPrice: "P95,000",
    discountedPrice: "P28,000.00",
    imgSrc: SOAImg,
  },
  {
    title: "Microsoft Certified: Cybersecurity Architect Expert (SC-100)",
    originalPrice: "P71,000",
    discountedPrice: "P35,000.00",
    imgSrc: CyberArc,
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    originalPrice: "P95,000",
    discountedPrice: "P38,000.00",
    imgSrc: AzureAdmin,
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
    originalPrice: "P93,000",
    discountedPrice: "P37,000.00",
    imgSrc: AzureSolutionArchitect,
  },
  {
    title: "Microsoft Certified: Identity and Access Administrator Associate (SC-300)",
    originalPrice: "P179,000",
    discountedPrice: "P53,000.00",
    imgSrc: AzureIdentifyAccessAdmin,
  },
  {
    title: "Microsoft 365 Endpoint Administrator Associate (MD-102)",
    originalPrice: "P89,000",
    discountedPrice: "P28,000.00",
    imgSrc: ModernDesktopAdmin,
  },
  {
    title: "Microsoft 365 Certified: Administrator Expert (MS-102)",
    originalPrice: "P71,000",
    discountedPrice: "P35,000.00",
    imgSrc: EnterpriseAdmin,
  },
  {
    title: "Microsoft Certified: Windows Server 2022 & Azure Cloud Hybrid Administrator (AZ-800)",
    originalPrice: "P12,888",
    discountedPrice: "P5,500.00",
    imgSrc: WSHA,
  },
  {
    title: "VMware vSphere 7 Data Center Virtualization",
    originalPrice: "P10,000",
    discountedPrice: "P4,000.00",
    imgSrc: VMware,
  },
  {
    title: "Microsoft Windows Server 2019 Administration Automation",
    originalPrice: "P10,000",
    discountedPrice: "P3,388.00",
    imgSrc: WindowsServer,
  },
];

export default function CardContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-2 px-5 gap-5  mb-10 justify-around grid grid-cols-4 sm:flex-row">
      {courses.map((course) => (
        <Card key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
      ))}

      {/* Render Modal if a course is selected */}
      {selectedCourse && <Modal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
};

