import "tailwindcss";
import { HashRouter as Router, Routes, Route } from 'react-router';
import LandingPage from "./Routes/LandingPage.jsx";
import AboutNexus from './Routes/AboutNexus.jsx';
import Courses from './Routes/Courses.jsx';
import Process from './Routes/Process.jsx';
import Login from './AdminSide/Login.jsx';
import Dashboard from './AdminSide/Dashboard.jsx';
import Enrollees from './AdminSide/Enrollees.jsx';
import Account from './AdminSide/Account.jsx';
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
        <Route path="/aboutnexus" element={<AboutNexus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/process" element={<Process />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/enrollees" element={<Enrollees />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    </>
  )
}