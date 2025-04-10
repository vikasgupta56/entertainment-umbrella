import React from "react";
import Gallery from "./Gallery";
import Services from "./Services";
import About from "./About";
import Sfimpact from "./Sfimpact";
import HomeHero from "./HomeHero";
// import HomeService from "./HomeService";
import Home_newService from "./Home_newService";
import Home_heroNew from "./Home_heroNew";
import Collage from "./Collage";

const Hero = () => {
  return (
    <>
      <Home_heroNew />
      {/* <HomeHero /> */}
      <About />
      <Collage />
      <Gallery />
      <Home_newService />
      {/* <HomeService /> */}
      {/* <Services /> */}
      <div className="textxCntr"></div>
      <Sfimpact />
    </>
  );
};

export default Hero;
