import React from "react";
import { useState } from "react";
import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import BackgroundImg from '../Images/bg.jpg';

export default function LandingPage() {
    

    return(
        <div>
            <Header className="position-fixed drop-shadow-xl"/>
            <img src={BackgroundImg} className="w-full h-screen absolute"/>
                <ContentLadingPage className="z-30"/>
        </div>
    )
}