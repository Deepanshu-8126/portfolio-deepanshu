import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Certifications from "./Certifications";
import WhatIDo from "./WhatIDo";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Work from "./Work";
import Hackathons from "./Hackathons";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";
import GalaxyBackground from "./GalaxyBackground";

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <GalaxyBackground />
      <Navbar />
      <div className="container-main-content">
        <Landing />
        <About />
        <WhatIDo />
        <TechStackNew />
        <Career />
        <Work />
        <Hackathons />
        <Certifications />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
