import NexusLogo from '../Images/nexusLogo.png'
import { LiaFacebook } from "react-icons/lia";
import {  TiSocialYoutubeCircular  } from "react-icons/ti";
import { TfiInstagram } from "react-icons/tfi";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return(
        <div className="w-full footer text-white text-xs drop-shadow-2xl sm:mt-40 sm:text-xl sm:w-full sm:h-1/5">
            <footer className="flex flex-col items-center justify-center">
                {/*Top Footer */}
                <div className="w-4/5 h-50 flex flex-col justify-around items-center border-b-1 border-white">
                    <div className="flex items-center">
                        <img src={NexusLogo} alt="NexusCloud IT Solutions Logo" className="w-16 h-16"/>
                        <p className="text text-sm">NexusCloud IT Solutions</p>
                    </div>
                    <div className="flex justify-between items-center w-full sm:w-1/2">
                        <div className="text text-xs">
                            <p>Services</p>
                            <p>About</p>
                            <p>Courses</p>
                            <p>Offer</p>
                        </div>
                        <div className="text text-xs">
                            <p>Contact</p>
                            <p>Online</p>
                            <p>On-site</p>
                        </div>
                        <div className="text text-xs">
                            <p>Seminar</p>
                            <p>Activities</p>
                        </div>
                    </div>
                </div>
                {/*Bottom Footer */}
                <div className="w-4/5 h-32 flex text-sm flex-col items-center justify-around">
                    <div className="flex justify-center gap-5 items-center text">
                        <a href="https://www.facebook.com/nxs88"><LiaFacebook className="w-8 h-8"/></a>
                        <a href="https://www.instagram.com/nexuscloud_/?next=%2F"><TfiInstagram className="w-6 h-6"/></a>
                        <a href="https://www.youtube.com/@nexusittrainingcenter8063"><TiSocialYoutubeCircular  className="w-8 h-8"/></a>
                        <a href="https://www.tiktok.com/@nexuscloud_"><FaTiktok className="w-5 h-5"/></a>
                    </div>
                    <div>
                        <p className="text">&copy; Copyrights. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}