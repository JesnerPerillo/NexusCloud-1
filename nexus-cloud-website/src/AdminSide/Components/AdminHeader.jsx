import { Link } from "react-router";
import NexusLogo from "../../Images/nexusLogo.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsPersonVcard } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);
export default function AdminHeader() {

    useGSAP(() => {

        gsap.to('.nav-bar', {
            ScrollTrigger: 'header',
            position: 'sticky',
            top: 0,
            left: 0,

        })
      }
    )

return (
  <header className="w-full fixed text-black z-30 bg-white dark:bg-black shadow-lg transition-colors footer">
    <div className=" w-full flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link to="/"><img src={NexusLogo} alt="NexusCloud Logo" className="h-12 w-12 mr-2" /></Link>
        <h1 className="text-black dark:text-white text-xl md:text-xl oswald-bold tracking-widest text">
            NexusCloud IT Solutions
        </h1>
      </div>

      <div className="flex space-x-2 items-center">
      <h1 className="oswald-bold text-2xl">ADMIN</h1>
      <BsPersonVcard size={30}/>
      </div>
    </div>
    </header>
  );
}
