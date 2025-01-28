import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import About from "./About";
import Sfimpact from "./Sfimpact";
import HomeHero from "./HomeHero";
import HomeService from "./HomeService";
import Home_newService from "./Home_newService";

const Hero = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Home_newService />
      {/* <HomeService /> */}
      {/* <Services /> */}
      <Gallery />
      <Sfimpact />
    </>
  );
};

export default Hero;
