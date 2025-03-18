import TeachImg from "../Images/tree.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { SteppedEase } from 'gsap';
import {  useRef } from 'react';
import  splitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function ContentLandingPage() {

    const contentRef = useRef(null);
    useGSAP(() =>{
        const myText =  new splitType(contentRef.current)
        gsap.to(".char", {
            y: 0,
            stagger: 0.05,
            delay: 0.3,
            duration: .5,
            opacity: 1
        })
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".type-writer",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        tl.fromTo(
            '.type-writer', 
            { width: 0 },
            { width: "20.18em", ease: SteppedEase.config(37), duration: 8 }
        );
    }, []);

    return (
        <div className="flex flex-col con mt-0 lg:flex-row items-center justify-between px-5 lg:px-20 py-10 overflow-hidden">
            <div className="w-full mt-20 text-left lg:w-3/4">
                <div className="rounded-xl p-5 lg:p-2 flex flex-col justify-center">
                    <h2 className="text-yellow-500 font-semibold text-2xl sm:text-3xl lg:text-3xl tracking-wide">
                        Get Certified. Get Ahead. Stay Relevant.
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                        <h1 id="career" ref={contentRef} className="text text-fuchsia-50 font-bolder text-5xl sm:text-7xl lg:text-[100px] mt-5 flex items-center montserrat-bold xl:text-[140xl] type-writer translate-y-5 transition-transform duration-500">
                            LAUNCH YOUR CAREER🚀
                        </h1>
                    </div>
                    <h2 className="text text-white text-3xl sm:text-2xl lg:text-2xl mt-5">
                        No Experience Needed!
                    </h2>
                    <p className="text text-white w-full mt-5 text-justify sm:w-1/2">
                        {`Join us today and take the first step toward mastering the tech skills of tomorrow! Whether you're a beginner exploring the world of technology or a professional looking to enhance your expertise, our comprehensive seminars will equip you with the knowledge, hands-on experience, and industry insights needed to stay ahead in the ever-evolving digital landscape. Don't miss this opportunity to learn from expert instructors, engage with like-minded individuals, and unlock new career possibilities in the world of IT!`}
                    </p>
                    <button className="relative w-40 mt-10 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group hover:cursor-pointer">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Enroll Now!</span>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0">
                <img src={TeachImg} alt="Teaching Image" className="w-full scale-100 sm:scale-200 sm:w-2/3 lg:w-full" />
            </div>
        </div>
    );
}
