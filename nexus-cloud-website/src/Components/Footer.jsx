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
                <div className="w-4/5 h-50 flex flex-col justify-between items-center border-b-1 pb-2 border-white sm:justify-around">
                    <div className="flex flex-col items-center justify-center">
                        <img src={NexusLogo} alt="NexusCloud IT Solutions Logo" className="w-20 h-10 sm:w-20 h-20"/>
                        <p className="footer text-sm">NexusCloud IT Solutions</p>
                    </div>
                    <div className="flex justify-around w-full">
                        <div className="footer text-xs">
                            <p>Services</p>
                            <p>About</p>
                            <p>Courses</p>
                            <p>Offer</p>
                        </div>
                        <div className="footer text-xs">
                            <p>Contact</p>
                            <p>Online</p>
                            <p>On-site</p>
                        </div>
                        <div className="footer text-xs">
                            <p>Seminar</p>
                            <p>Activities</p>
                        </div>
                    </div>
                </div>
                {/*Bottom Footer */}
                <div className="w-4/5 h-32 flex text-sm flex-col items-center justify-around">
                    <div className="flex justify-center gap-5 items-center footer">
                        <a href="https://www.facebook.com/nxs88"><LiaFacebook className="w-8 h-8"/></a>
                        <a href="https://www.instagram.com/nexuscloud_/?next=%2F"><TfiInstagram className="w-6 h-6"/></a>
                        <a href="https://www.youtube.com/@nexusittrainingcenter8063"><TiSocialYoutubeCircular  className="w-8 h-8"/></a>
                        <a href="https://www.tiktok.com/@nexuscloud_"><FaTiktok className="w-5 h-5"/></a>
                    </div>
                    <div>
                        <p className="footer">&copy; Copyrights. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}