import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import About from './About.jsx'
import Footer from '../Components/Footer.jsx'
import Contact from "../Components/Contact.jsx";
import { useEffect } from "react";

export default function LandingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="w-full h-auto bg-black relative con">
            <div className="w-full h-auto con bg-black sm:h-screen">
                <Header className="position-fixed drop-shadow-xl"/>
                <div>
                    <ContentLadingPage />
                </div>
            </div>
            <div className="w-full h-auto sm:mt-50 sm:h-auto">
                <About />
            </div>
            <div>
                <Contact />
            </div>
            <div className="mt-40 drop-shadow-2xl">
                <Footer />
            </div>
        </div>
    )
}