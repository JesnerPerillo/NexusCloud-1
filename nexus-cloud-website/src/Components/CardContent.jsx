/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import CardInformation from './CardInformation.jsx';
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
import FacebookAds from '../Images/facebookads.png';

{/*Sample Data Only */}
const courses = [
  {
    title: "Certified Cisco Network Associate (CCNA 200-301)",
    originalPrice: "₱25,000",
    discountedPrice: "₱19,999.00",
    imgSrc: CCNAImg,
    description: "The Certified Cisco Network Associate (CCNA 200-301) is a widely recognized entry-level certification offered by Cisco Systems. It validates foundational knowledge and skills in networking, including network fundamentals, IP connectivity, network access, IP services, security fundamentals, and automation and programmability. The CCNA certification is ideal for IT professionals seeking to build or advance their careers in networking and is a stepping stone to more advanced Cisco certifications. The exam (200-301) tests both theoretical understanding and practical skills in configuring and managing Cisco devices and networks.",
    modality: "Face-to-Face",
  },
  {
    title: "Cisco Certified Support Technician (CCST) Networking 2025",
    originalPrice: "₱9,000",
    discountedPrice: "₱4,500.00",
    imgSrc: CCSTImg,
    description: "The Cisco Certified Support Technician (CCST) Networking certification is an entry-level credential designed for individuals looking to start a career in IT networking. It focuses on foundational networking skills, including understanding network components, IP addressing, network troubleshooting, and basic security concepts. The CCST Networking certification is tailored for those with little to no prior experience and serves as a stepping stone to more advanced certifications like the CCNA.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    originalPrice: "₱8,000",
    discountedPrice: "₱4,444.00",
    imgSrc: EthicalHackingImg1,
    description: "The Ethical Hacking & Penetration Testing Certification validates an individual's ability to identify, exploit, and fix security vulnerabilities in computer systems and networks. It equips professionals with skills in penetration testing, network security, vulnerability assessment, and ethical hacking tools and techniques. The certification covers areas such as footprinting, scanning, exploitation, and post-exploitation, helping to strengthen an organization's security posture by simulating real-world cyberattacks.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "CompTIA CyberSecurity CySA+ 2025",
    originalPrice: "₱25,000",
    discountedPrice: "₱12,500.00",
    imgSrc: COMPTIAImg,
    description: "The CompTIA Cybersecurity Analyst (CySA+) 2025 is a globally recognized certification that validates the ability to apply behavioral analytics to networks and devices to prevent, detect, and combat cybersecurity threats. It focuses on security operations, vulnerability management, threat intelligence, and incident response. The certification emphasizes hands-on skills in analyzing and responding to security incidents, conducting threat analysis, and implementing security measures to protect against advanced cyber threats.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Cybersecurity Essentials",
    originalPrice: "₱9,000",
    discountedPrice: "₱4,500.00",
    imgSrc: CyberSecEsImg,
    description: "The 1-Day Cybersecurity Essentials 2025: Defend, Protect & Secure! is an intensive training program designed to provide foundational knowledge and practical skills in cybersecurity. It covers key topics such as threat identification, network defense, malware protection, and security best practices. Participants will learn how to recognize vulnerabilities, respond to attacks, and implement effective security measures to protect systems and data. Ideal for beginners and IT professionals seeking to strengthen their cybersecurity expertise.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    originalPrice: "₱25,000",
    discountedPrice: "₱12,500.00",
    imgSrc: COMPTIASecImg,
    description: "The CompTIA Security+ (SY0-701) is a globally recognized certification that validates the essential skills required to perform core security functions in an IT environment. It covers a wide range of security topics, including threat management, network security, cryptography, access control, risk management, and incident response. The SY0-701 exam focuses on assessing a candidate's ability to identify and mitigate security threats, implement secure network architectures, and respond to security incidents. It’s ideal for IT professionals aiming to start or advance their career in cybersecurity.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft Certified: Security Operations Analyst Associate (SC-200)",
    originalPrice: "₱95,940",
    discountedPrice: "₱21,782.00",
    imgSrc: SOAImg,
    description: "The Microsoft Certified: Security Operations Analyst Associate (SC-200) certification validates expertise in mitigating cybersecurity threats using Microsoft’s security solutions. It focuses on managing security incidents, monitoring threats, and improving threat protection across Microsoft 365 and Azure environments. Candidates are tested on their ability to investigate, analyze, and respond to security incidents using tools like Microsoft Defender, Microsoft Sentinel, and Microsoft 365 Defender. This certification is ideal for security analysts aiming to strengthen their skills in threat management and incident response within Microsoft's security ecosystem.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft Certified: Cybersecurity Architect Expert (SC-100)",
    originalPrice: "₱71,170",
    discountedPrice: "₱19,585.00",
    imgSrc: CyberArc,
    description: "The Microsoft Certified: Cybersecurity Architect Expert (SC-100) certification validates a candidate’s ability to design and implement cybersecurity strategies to protect an organization’s digital assets. It covers areas such as Zero Trust architecture, identity and access management, data security, compliance, and risk management. Candidates are tested on their expertise in developing security strategies using Microsoft’s security technologies, including Microsoft Defender, Microsoft Sentinel, and Azure Security Center. This certification is intended for senior security architects and professionals responsible for designing and managing an organization’s overall security posture.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    originalPrice: "₱95,940",
    discountedPrice: "₱16,999.00",
    imgSrc: AzureAdmin,
    description: "The Microsoft Certified: Azure Administrator Associate (AZ-104) certification validates a candidate’s expertise in managing and monitoring an organization’s Microsoft Azure environment. It covers core tasks such as implementing and managing virtual networks, managing storage, deploying and managing virtual machines, configuring and managing Azure Active Directory (Azure AD), and monitoring and optimizing Azure resources. This certification is ideal for IT professionals responsible for handling Azure infrastructure, including security, networking, and resource management.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
    originalPrice: "₱93,478",
    discountedPrice: "₱21,888.00",
    imgSrc: AzureSolutionArchitect,
    description: "The Microsoft Certified: Azure Solutions Architect Expert (AZ-305) certification validates a candidate's ability to design and implement solutions that run on Microsoft Azure, including aspects like compute, storage, networking, and security. It focuses on architecting solutions that meet business requirements by defining infrastructure, security, data integration, and monitoring strategies. This certification is intended for experienced Azure professionals who have advanced knowledge of IT operations, including networking, virtualization, identity, security, business continuity, and disaster recovery.",
    modality: "via Zoom",
  },
  {
    title: "Microsoft Certified: Identity and Access Administrator Associate (SC-300)",
    originalPrice: "₱170,400",
    discountedPrice: "₱23,820.00",
    imgSrc: AzureIdentifyAccessAdmin,
    description: "The Microsoft Certified: Identity and Access Administrator Associate (SC-300) certification validates expertise in implementing and managing identity and access solutions using Microsoft Entra ID (Azure Active Directory). It focuses on configuring and managing identity governance, securing access to resources, and providing seamless user experiences while maintaining security. The certification covers key areas such as user and group management, access control, authentication, and identity protection. It is ideal for professionals responsible for identity and access management within an organization's security infrastructure.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft 365 Endpoint Administrator Associate (MD-102)",
    originalPrice: "₱89,452",
    discountedPrice: "₱20,500.00",
    imgSrc: ModernDesktopAdmin,
    description: "The Microsoft 365 Endpoint Administrator Associate (MD-102) certification validates the skills required to deploy, manage, configure, and protect endpoints within a Microsoft 365 environment. It focuses on modern endpoint management using Microsoft Intune, configuring policies, managing device compliance, deploying apps, and securing data. The certification covers key areas such as identity and access management, endpoint security, application management, and monitoring endpoint health. It is ideal for IT professionals who manage and secure enterprise devices and ensure smooth user experiences across multiple platforms.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft 365 Certified: Administrator Expert (MS-102)",
    originalPrice: "₱109,452",
    discountedPrice: "₱25,350.00",
    imgSrc: EnterpriseAdmin,
    description: "The Microsoft 365 Certified: Administrator Expert (MS-102) certification validates expertise in managing and securing a Microsoft 365 environment. It focuses on key administrative tasks such as managing identity and access, implementing security and compliance solutions, managing user access and authentication, and monitoring service health. Candidates will also learn to configure and manage Microsoft 365 services like Exchange, SharePoint, Teams, and OneDrive. This certification is ideal for administrators responsible for managing Microsoft 365 enterprise environments and ensuring seamless collaboration and security.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Microsoft Certified: Windows Server 2022 & Azure Cloud Hybrid Administrator (AZ-800)",
    originalPrice: "₱25,000",
    discountedPrice: "₱12,000.00",
    imgSrc: WSHA,
    description: "The Microsoft Certified: Windows Server 2022 & Azure Cloud Hybrid Administrator (AZ-800) certification validates expertise in managing and maintaining Windows Server 2022 in on-premises, hybrid, and Azure environments. It covers key areas such as Windows Server infrastructure, hybrid identity and management, networking, storage, and virtualization. Candidates will learn how to integrate Windows Server with Azure services, implement hybrid solutions, and manage Active Directory, Group Policy, and DNS. This certification is ideal for system administrators responsible for maintaining Windows Server environments and extending them to the cloud.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "3-Day VMware vSphere 8.0 Data Center Virtualization",
    originalPrice: "₱20,000",
    discountedPrice: "₱10,000.00",
    imgSrc: VMware,
    description: "The 3-Day VMware vSphere 8.0 Data Center Virtualization training covers the key features and functionalities of VMware vSphere 8.0 for building and managing virtualized data centers. The course begins with an introduction to vSphere architecture, where participants will learn how to install and configure ESXi hosts and vCenter Server. It then moves on to managing virtual machines (VMs), configuring virtual networks and storage, and implementing high availability using vSphere HA (High Availability) and resource management with vSphere DRS (Distributed Resource Scheduler). The final day focuses on performance monitoring, troubleshooting, and implementing security best practices within a vSphere environment. This certification equips IT professionals with the skills to effectively deploy, manage, and optimize vSphere environments, ensuring high availability and efficient resource utilization.",
    modality: "via Zoom",
  },
  {
    title: "IT Support Admin Engineer by automating Windows Server",
    originalPrice: "₱12,000",
    discountedPrice: "₱6,000.00",
    imgSrc: WindowsServer,
    description: "An IT Support Admin Engineer specializing in Windows Server automation is responsible for streamlining and enhancing the management of Windows Server environments through automation. This involves using tools like PowerShell, Ansible, and System Center to automate repetitive tasks such as user provisioning, server configuration, patch management, and performance monitoring. The engineer creates and manages automation scripts to deploy and maintain Active Directory, DNS, DHCP, and Group Policy settings. They also implement automated backup and disaster recovery solutions to ensure data integrity and business continuity. By reducing manual effort and improving operational efficiency, the IT Support Admin Engineer helps to minimize downtime, enhance security, and ensure consistent server performance across the enterprise infrastructure.",
    modality: "Face-to-Face | via Zoom",
  },
  {
    title: "Facebook Ads Strategies 2025",
    originalPrice: "₱8,888",
    discountedPrice: "₱4,888.00",
    imgSrc: FacebookAds,
    description: "Facebook Ads Strategies for 2025 focus on leveraging advanced targeting, automation, and creative optimization to maximize campaign performance. In 2025, AI-driven audience targeting plays a crucial role in identifying and engaging high-converting audiences. Marketers are focusing on custom audiences and lookalike audiences to refine targeting precision based on user behavior, interests, and past interactions. Dynamic ad content is more effective than ever, with Facebook’s AI automatically adjusting headlines, images, and calls to action based on user engagement patterns. Video ads and carousel ads remain powerful tools, offering interactive and visually appealing formats to capture attention.",
    modality: "Face-to-Face | via Zoom",
  },
];

{/*This is for production */}
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
    "Facebook Ads Strategies 2025": FacebookAds,
  };

  return images[courseName] || WindowsServer;
};

export default function CardContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [course, setCourse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/courses")
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
    <div className="p-2 gap-5 mb-10 justify-around grid grid-cols-1 sm:grid-cols-4 sm:px-5 sm:flex-row">
      {courses.map((course) => (
        <Card key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
      ))}

      {/* Render CardInformation if a course is selected */}
      {selectedCourse && (
        <CardInformation
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenModal={() => setIsModalOpen(true)}
        />
      )}

      {/* Render Modal if isModalOpen is true */}
      {isModalOpen && (
        <Modal
          course={selectedCourse}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

