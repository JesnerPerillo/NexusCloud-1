import TeachImg from "../Images/tech.png";

export default function ContentLandingPage() {
    return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 py-10 mt-20">
        {/* Right Side */}
        <div className="w-full lg:w-3/4 text-center lg:text-left">
            <div className="rounded-xl p-5 lg:p-2 flex flex-col justify-center">
                <h2 className="text-yellow-500 font-semibold text-2xl sm:text-3xl lg:text-3xl tracking-wide">
                Get Certified. Get Ahead. Stay Relevant.
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                    <h1 className="text-white font-bolder text-5xl sm:text-7xl lg:text-[140px] mt-5 flex items-center play-bold">
                        LAUNCH YOUR CAREER🚀
                    </h1>
                </div>
                <h2 className="text-white text-3xl sm:text-2xl lg:text-2xl mt-5">
                No Experience Needed!
                </h2>
                <button className="w-full sm:w-80 py-3 border-2 rounded-xl bg-white border-white mt-10 sm:mt-20 text-xl sm:text-xl lg:text-2xl tracking-wide hover:cursor-pointer hover:bg-black border-white hover:text-white duration-600 ease-in-out">
                Enroll Today!
                </button>
            </div>
        </div>

            {/* Left Side */}
        <div className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0">
            <img src={TeachImg} alt="Teaching Image" className="w-full sm:w-2/3 lg:w-full" />
        </div>
    </div>
    );
}
