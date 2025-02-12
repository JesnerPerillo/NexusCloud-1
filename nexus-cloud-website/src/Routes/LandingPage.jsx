import React from "react";
import { useState } from "react";
import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import BackgroundImg from '../Images/bg.png';

export default function LandingPage() {
    

    return(
        <div>
            <Header className="position-fixed drop-shadow-xl"/>
            <div className="w-full h-screen" style={{backgroundImage: `url(${BackgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} >
                <ContentLadingPage />
            </div>
        </div>
    )
}