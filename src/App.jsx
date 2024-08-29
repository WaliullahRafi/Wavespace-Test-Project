import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import UxDesign from "./Components/UxDesign/UxDesign";
import Headroom from "react-headroom";
import DesignService from "./Components/DesignService/DesignService";
import ProcessDesign from "./Components/ProcessDesign/ProcessDesign";
import Company from "./Components/Company/Company";
import Quciky from "./Components/Quciky/Quciky";
import OurWork from "./Components/OurWork/OurWork";
import Solution from "./Components/Solution/Solution";
import Partner from "./Components/Partner/Partner";
import Support from "./Components/Support/Support";
import Questions from "./Components/Questions/Questions";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Calender from "./Components/Calender/Calender";

import Lenis from 'lenis'

function App() {
  // smooth scrolling_
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Home />
      <UxDesign />
      <DesignService />
      <ProcessDesign />
      <Company />
      <Quciky />
      <Calender />
      <OurWork />
      <Solution />
      <Partner />
      <Support />
      <Questions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
