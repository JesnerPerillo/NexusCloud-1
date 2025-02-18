import "tailwindcss";
import { HashRouter as Router, Routes, Route } from 'react-router';
import LandingPage from "./Routes/LandingPage.jsx";
import gsap from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function App(){
  return (
    // const [count, setCount] = useState(0)
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  )
}