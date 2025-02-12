import React from "react";
import "tailwindcss";
import { HashRouter as Router, Routes, Route } from 'react-router';
import LandingPage from "./Routes/LandingPage.jsx";

export default function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  )
}