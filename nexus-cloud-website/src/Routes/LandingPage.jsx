import "tailwindcss";
import Header from '../Components/Header.jsx';
import ContentLadingPage from '../Components/ContentLandingPage.jsx';

export default function LandingPage() {
    

    return(
        <div className="w-full h-screen bg-black">
            <Header className="position-fixed drop-shadow-xl"/>
            <div>
                <ContentLadingPage />
            </div>
        </div>
    )
}