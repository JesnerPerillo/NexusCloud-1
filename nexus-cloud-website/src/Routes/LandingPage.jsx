import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';

export default function LandingPage() {
    

    return(
        <div className="w-full h-screen bg-gradient-to-r from-purple-700 to-pink-700 sm:h-screen">
            <Header className="position-fixed drop-shadow-xl"/>
            <div>
                <ContentLadingPage />
            </div>
        </div>
    )
}