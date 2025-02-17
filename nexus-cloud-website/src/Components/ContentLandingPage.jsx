import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import TeachImg from "../Images/tree.png";
import { SteppedEase } from 'gsap';
// import { TimelineMax } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function ContentLandingPage() {
useGSAP(() => {
    const tl =  gsap.timeline({paused: true});
    tl.fromTo('.type-writer', 8, 
        {
        width: 0
    },{
        width: "20.18em", /* same as CSS .line-1 width */
        ease:  SteppedEase.config(37)
      }, 0);
      tl.play()
})
    

    // gsap.from('.img-logo', {duration: 1, opacity: 0, ease: 'power2.out'});
    return (
    <div className="flex flex-col mt-0 lg:flex-row items-center justify-between px-5 lg:px-20 py-10 overflow-hidden">
        {/* Right Side */}
        <div className="w-full text-left lg:w-3/4">
            <div className="rounded-xl p-5 lg:p-2 flex flex-col justify-center">
                <h2 className="text-yellow-500 font-semibold text-2xl sm:text-3xl lg:text-3xl tracking-wide">
                Get Certified. Get Ahead. Stay Relevant.
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                    <h1 className="type-writer text-white font-bolder text-5xl sm:text-7xl lg:text-[140px] mt-5 flex items-center play-bold">
                        LAUNCH YOUR CAREER🚀
                    </h1>
                </div>
                <h2 className="text-white text-3xl sm:text-2xl lg:text-2xl mt-5">
                No Experience Needed!
                </h2>
                <p className="text-white w-full mt-5 text-justify sm:w-1/2">{`Join us today and take the first step toward mastering the tech skills of tomorrow! Whether you're a beginner exploring the world of technology or a professional looking to enhance your expertise, our comprehensive seminars will equip you with the knowledge, hands-on experience, and industry insights needed to stay ahead in the ever-evolving digital landscape. Don't miss this opportunity to learn from expert instructors, engage with like-minded individuals, and unlock new career possibilities in the world of IT!`}</p>
                <button className="w-full sm:w-80 py-3 border-2 rounded-xl bg-white border-white mt-10 sm:mt-20 text-xl sm:text-xl lg:text-2xl tracking-wide hover:cursor-pointer hover:bg-black border-white hover:text-white duration-600 ease-in-out">
                Enroll Today!
                </button>
            </div>
        </div>

            {/* Left Side */}
        <div className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0">
{/* <<<<<<< HEAD
            <img src={TeachImg} alt="Teaching Image" className="w-full sm:w-2/3 lg:w-full img-logo" />
======= */}
            <img src={TeachImg} alt="Teaching Image" className="w-full scale-100 sm:scale-200 sm:w-2/3 lg:w-full" />
{/* >>>>>>> c40c665dae068f01c25a6f413a3f571101bf3a1a */}
        </div>
    </div>
    );
}
