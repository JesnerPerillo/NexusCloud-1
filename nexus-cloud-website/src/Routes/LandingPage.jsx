import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';
import About from './About.jsx'

export default function LandingPage() {
    

    return(
        <div className="w-full h-auto bg-gradient-to-r from-purple-700 to-pink-700">
            <div className="w-full h-screen bg-gradient-to-r from-purple-700 to-pink-700 sm:h-screen">
                <Header className="position-fixed drop-shadow-xl"/>
                <div>
                    <ContentLadingPage />
                </div>
            </div>
            <div className="w-full h-screen bg-gradient-to-r from-purple-700 to-pink-700 mt-50 sm:h-screen">
                <About />
            </div>
        </div>
    )
}