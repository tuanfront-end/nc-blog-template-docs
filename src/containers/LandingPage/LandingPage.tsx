import React from "react";
import { Nav } from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { SectionDemos } from "./SectionDemos";
import { SectionLayouts } from "./SectionLayouts";

const LandingPage = () => {
  return (
    <div className="relative">
      <Nav />
      <Section1 />
      <SectionDemos />
      {/* <SectionLayouts /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default LandingPage;
