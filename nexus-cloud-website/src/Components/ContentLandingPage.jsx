import React from "react";
import { useEffect, useState } from "react";

export default function ContentLandingPage() {

    return (
        <div className="">
            {/*Right Side */}
            <div className="w-3/5 h-screen absolute right-20">
                <div className="text-right mr-10 mt-20">
                    <h2 className="text-yellow-500 font-semibold text-4xl tracking-wide italic">Get Certified. Get Ahead. Stay Relevant.</h2>
                    <h1 className="text-white font-bold text-[120px] text-right">LAUNCH YOUR CAREER</h1>
                    <h2 className="text-white text-5xl font-semibold text-right ">No Experience Needed!</h2>
                    <button className="px-6 py-3 border-2 rounded-4xl text-yellow-400 border-white font-bold mt-20 text-4xl tracking-wide">Start Learning Today!</button>
                </div>
            </div>
        </div>
    )
}