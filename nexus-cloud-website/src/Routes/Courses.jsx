import Footer from '../Components/Footer.jsx';
import Contact from '../Components/Contact.jsx';
import Header from '../Components/Header.jsx';
import CCNAImg from '../Images/ccna.jpg';
import EthicalHackingImg from '../Images/ethical-hacking.jpg';
import CCNAImg1 from '../Images/ccna1.png';
import AzureImg from '../Images/azure.png';
import CCSTImg from '../Images/ccst.png';
import EthicalHackingImg1 from '../Images/ethicalhacking.png';
import COMPTIAImg from '../Images/comptia.png';
import CyberSecEsImg from '../Images/cybersecurity-essentials.webp'
import COMPTIASecImg from '../Images/comptia-security.webp';
import SOAImg from '../Images/SOA.webp';
import CyberArc from '../Images/CA.png';
import AzureAdmin from '../Images/azureadmin.png';
import AzureSolutionArchitect from '../Images/azure-sol-arc.jpg';
import AzureIdentifyAccessAdmin from '../Images/Identify-access-admin.png';
import ModernDesktopAdmin from '../Images/MDA.png';
import EnterpriseAdmin from '../Images/enterprise-admin.png';
import WSHA from '../Images/WSHA.png';
import VMware from '../Images/vmware.png';
import WindowsServer from '../Images/windows.png';
import { PiMagnifyingGlass } from "react-icons/pi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";



export default function Courses() {
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log("Current Image URL:", courses[index].image);


  return(
    <div className="con w-full h-auto sm:w-full h-auto">
      <div>
        <Header />
      </div>
      
      <div className="w-full h-auto con pt-20 flex flex-col items-center text-white">
        <div className="w-full h-100 bg-red-800 flex justify-between  items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
          <div className="flex flex-col items-center h-full justify-around ">
            <h1 className="text-7xl text-white oswald-bold">
              CCNA <br /> CERTIFICATION
            </h1>
            <div className="w-[40rem] bg-white flex items-center border rounded-3xl pl-2 ml-10 gap-2 z-20">
              <PiMagnifyingGlass className=" w-5 h-5 text-violet-600 hover:cursor-pointer focus:outline-hidden "/>
              <input className="w-full pl-3 h-13 text-black w-full rounded-r-2xl z-20 focus:outline-none" placeholder="Search Course"/>
            </div>
          </div>
          <div className="absolute right-80 scale-300 top-30">
            <img src={CCNAImg} alt="CCNA Image" className="w-60 h-60 rounded-full opacity-80"/>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between mt-10 mb-10 sm:mt-0 mb-0 sm:items-center sm:flex-row">
          <div className="w-1/2 ml-5 mt-2 border-l-15 border-yellow-500">
            <h1 className="text-6xl play-bold pl-5 oswald-bold text">AVAILABLE COURSES</h1>
          </div>
          <div className="text text-2xl text-justify px-10 pr-5 mt-5 sm:mt-0 sm:text-right sm:px-0">
            <h1>Our available courses are designed to equip learners with essential IT skills for career advancement. With a focus on practical knowledge and industry-recognized certifications, our programs provide hands-on training in cutting-edge technologies. </h1>
          </div>
        </div>
      </div>
      <div className="w-full text-2xl mt-10 mb-50 relative">
          <div className="absolute h-20 flex items-center pr-2 right-0 border-r-10 border-yellow-500 mr-5">
            <h1 className="text-6xl pl-5 oswald-bold text">RECOMMENDED</h1>
          </div>
        </div>
        <div className="w-full h-5/6 flex items-center justify-center sm:w-full">
          <div className="bg-gray-200 rounded-lg sm:p-2">
            <div className="flex justify-center items-center h-auto">
              <div className="w-[420px] h-[500px] relative overflow-hidden bg-white shadow-lg rounded-lg sm:w-[1100px] sm:h-[500px]">
                
                {/* Motion div wrapper for image and text */}
                <motion.div
                  key={courses[index].title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full"
                >
                  {/* Image */}
                  <img
                    className="absolute w-full h-full object-cover"
                    src={courses[index].image}
                    alt={courses[index].title}
                  />
                  <div className="absolute inset-0 bg-black opacity-70"></div>
                  {/* Text overlay */}
                  <div className="absolute z-20 w-full h-full p-15 text-white flex flex-col justify-center">
                    <h1 className="text-xl montserrat-bold sm:text-6xl">{courses[index].title}</h1>
                    <hr className="w-1/2 border-t-8 text-yellow-500 mt-2"></hr>
                    <p className=" mt-2 w-full montserrat-semibold text-sm sm:max-w-md sm:text-sm">{courses[index].description}</p>
                    <button className=" absolute right-30 bottom-0 px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 hover:cursor-pointer sm:bottom-10 sm:right-20">
                      REGISTER NOW
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text text-[6rem] oswald-bold tracking-wide text-center mb-10">ALL COURSES</h1>
          {/*Card Container #1st Line*/}
          <div className="p-2 px-5 gap-5 flex mb-10 justify-around flex-col sm:flex-row">
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 rounded-t-3xl overflow-hidden">
                <img src={CCNAImg} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Certified Cisco Network Associate (CCNA 200-301)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P25,000</span> P18,888.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl">
                <img src={CCSTImg} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Cisco Certified Support Technician (CCST) Networking 2025</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P5,000</span> P3,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={EthicalHackingImg1} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Ethical Hacking & Penetration Testing</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P8,000</span> P3,500.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl">
                <img src={COMPTIAImg} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">CompTIA CyberSecurity CySA+ 2025</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P25,000</span> P3,999.00</p>
              </div>
            </div>
          </div>

          {/*Card Container #2nd Line*/}
          <div className="p-2 flex flex-col gap-5 px-5 mb-10 justify-around sm:flex-row">
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-red-900 rounded-t-3xl overflow-hidden">
                <img src={CyberSecEsImg} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">4 Certificates in 1-Day Cybersecurity Essentials 2025</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P4,000</span> P2,500.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-red-900 rounded-t-3xl overflow-hidden">
                <img src={COMPTIASecImg} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">CompTIA Security+ (SY0-701)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P25,000</span> P17,888.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-red-900 rounded-t-3xl overflow-hidden">
                <img src={SOAImg} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Security Operations Analyst Associate (SC-200)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P95,000</span> P28,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={CyberArc} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Cybersecurity Architect Expert (SC-100)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P71,000</span> P35,000.00</p>
              </div>
            </div>
          </div>

          {/*Card Container #3rd Line*/}
          <div className="p-2 flex flex-col mb-10 gap-5 px-5 justify-around sm:flex-row">
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={AzureAdmin} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Azure Administrator Associate (AZ-104)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P95,000</span> P38,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={AzureSolutionArchitect} alt="Microsoft Certified: Azure Solutions Architect Expert (AZ-305)" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Azure Solutions Architect Expert (AZ-305)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P93,000</span> P37,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={AzureIdentifyAccessAdmin} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Identity and Access Administrator Associate (SC-300)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P179,000</span> P53,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={ModernDesktopAdmin} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft 365 Endpoint Administrator Associate (MD-102)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P89,000</span> P28,000.00</p>
              </div>
            </div>
          </div>

          {/*Card Container #4th Line*/}
          <div className="p-2 flex flex-col gap-5 px-5 justify-around sm:flex-row">
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={EnterpriseAdmin} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft 365 Certified: Administrator Expert (MS-102)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P71,000</span> P35,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={WSHA} alt="CCNA Image" className="w-full h-full object-contain"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Certified: Windows Server 2022 & Azure Cloud Hybrid Administrator (AZ-800)</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P12,888</span> P5,500.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bgwhite rounded-t-3xl overflow-hidden">
                <img src={VMware} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">VMware vSphere 7 Data Center Virtualization</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P10,000</span> P4,000.00</p>
              </div>
            </div>
            <div className="w-full rounded-4xl h-[30rem] drop-shadow-3xl card sm:w-68 sm:h-80">
              <div className="h-3/5 bg-white rounded-t-3xl overflow-hidden">
                <img src={WindowsServer} alt="CCNA Image" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 relative p-2">
                <h1 className="card-text">Microsoft Windows Server 2019 Administration Automation</h1>
                <p className="card-text absolute bottom-0 right-5"><span className="text-gray-400 line-through">P10,000</span> P3,388.00</p>
              </div>
            </div>
          </div>
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