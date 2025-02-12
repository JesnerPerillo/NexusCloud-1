import React from "react";
import { useState } from "react";
import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';

export default function LandingPage() {
    

    return(
        <div>
            <Header />
            <div className="w-full h-screen bg-gray-500">
                <ContentLadingPage />
            </div>
        </div>
    )
}