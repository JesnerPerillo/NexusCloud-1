import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import About from './About.jsx'
import Footer from '../Components/Footer.jsx'

export default function LandingPage() {
    

    return(
        <div className="w-full h-auto bg-gradient-to-r from-purple-700 to-pink-700 relative">
            <div className="w-full h-auto bg-gradient-to-r from-purple-700 to-pink-700 sm:h-screen">
                <Header className="position-fixed drop-shadow-xl"/>
                <div>
                    <ContentLadingPage />
                </div>
            </div>
            <div className="w-full h-screen bg-gradient-to-r from-purple-700 to-pink-700 sm:mt-50 sm:h-screen">
                <About />
            </div>
            <div className="w-full bg-gradient-to-r from-purple-900 to-pink-900 drop-shadow-xl sm:mt-[500px] sm:w-full sm:h-1/5">
                <Footer />
            </div>
        </div>
    )
}