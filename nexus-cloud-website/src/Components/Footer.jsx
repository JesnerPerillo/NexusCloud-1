import NexusLogo from '../Images/nexusLogo.png'
import { LiaFacebook } from "react-icons/lia";
import {  TiSocialYoutubeCircular  } from "react-icons/ti";
import { TfiInstagram } from "react-icons/tfi";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return(
        <div className="w-full bg-gradient-to-r text-white text-xs from-purple-900 to-pink-900 drop-shadow-xl sm:mt-40 sm:text-xl sm:w-full sm:h-1/5">
            <footer className="flex flex-col items-center justify-center">
                {/*Top Footer */}
                <div className="w-4/5 h-40 flex justify-around items-center border-b-1 border-white">
                    <div>
                        <img src={NexusLogo} alt="NexusCloud IT Solutions Logo" className="w-20 h-20"/>
                        <p>NexusCloud IT Solutions</p>
                    </div>
                    <div>
                        <p>Services</p>
                        <p>About</p>
                        <p>Courses</p>
                        <p>Offer</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>Online</p>
                        <p>On-site</p>
                    </div>
                    <div>
                        <p>Seminar</p>
                        <p>Activities</p>
                    </div>
                </div>
                {/*Bottom Footer */}
                <div className="w-4/5 h-32 flex flex-col items-center justify-around">
                    <div className="flex justify-center gap-5 items-center ">
                        <a href="https://web.facebook.com/nxs88"><LiaFacebook className="w-8 h-8"/></a>
                        <a href="https://www.instagram.com/nexuscloud_/?next=%2F"><TfiInstagram className="w-6 h-6"/></a>
                        <a href="https://www.youtube.com/@NexuscloudITSolutions"><TiSocialYoutubeCircular  className="w-8 h-8"/></a>
                        <a href="https://www.tiktok.com/@nexuscloud_"><FaTiktok className="w-5 h-5"/></a>
                    </div>
                    <div>
                        <p>&copy; Copyrights. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}