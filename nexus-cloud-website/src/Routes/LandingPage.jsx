import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import About from './About.jsx'
import Footer from '../Components/Footer.jsx'

export default function LandingPage() {
    

    return(
        <div className="w-full h-auto bg-black relative">
            <div className="w-full h-auto bg-black sm:h-screen">
                <Header className="position-fixed drop-shadow-xl"/>
                <div>
                    <ContentLadingPage />
                </div>
            </div>
            <div className="w-full h-auto bg-gradient-to-r from-purple-700 to-pink-700 sm:mt-50 sm:h-auto">
                <About />
            </div>
            <div className="mt-40">
                <Footer />
            </div>
        </div>
    )
}