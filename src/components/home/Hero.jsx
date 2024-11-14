import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import About from "./About";
import Sfimpact from "./Sfimpact";
import HomeHero from "./HomeHero";

const Hero = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <Gallery />
      <Sfimpact />
    </>
  );
};

export default Hero;
