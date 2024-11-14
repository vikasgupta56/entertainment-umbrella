import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Histoy from "./Histoy";
import Artist from "./Artist";
gsap.registerPlugin(ScrollTrigger);
const ClipCntr = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  useLayoutEffect(() => {
    // This ensures ScrollTrigger runs after DOM is fully loaded (client-side)
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!isBrowser) return; // Skip if not in browser (e.g., SSR)

    const animate = () => {
      if (window.innerWidth >= 1024) {
        // GSAP timeline setup
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".clip-container",
            start: "-0.1% top",
            end: "bottom bottom",
            scrub: true,
            // markers: true, // Uncomment for debugging
          },
        });

        tl.to(".hero-content", { scale: 2 }, "a")
          .to("h1.hero.left", { x: "-160%", scale: 2.1 }, "a")
          .to("h1.hero.right", { x: "160%", scale: 2.1 }, "a")
          .to(
            ".hero-img",
            {
              rotate: 0,
              clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            },
            "a"
          )
          .to(".hero_img.hero-inner", { scale: 0.8 }, "b");
      }
    };

    animate();

    // Resize handling
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024;
      if (newIsLargeScreen !== isLargeScreen) {
        setIsLargeScreen(newIsLargeScreen);
      }
    };

    window.addEventListener("resize", handleResize);

    // Ensure ScrollTrigger recalculates on resize
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, [isBrowser, isLargeScreen]);

  return (
    <div className="clip-container">
      <section className="section hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <a
              href="#"
              data-w-id="59271182-f875-d4dc-3a94-3de05c5eb035"
              className="h1-wrapper w-inline-block"
              // style={{ pointerEvents: "auto" }}
            >
              <h1 className="h1 hero left">
                <span className="animeword">
                  <span className="letter">r</span>
                  <span className="letter">a</span>
                  <span className="letter">g</span>
                  <span className="letter">e</span>
                </span>
              </h1>
              <h1 className="h1 hero right">
                <span className="animeword">
                  <span className="letter">m</span>
                  <span className="letter">e</span>
                  <span className="letter">d</span>
                  <span className="letter">i</span>
                  <span className="letter">a</span>
                </span>
              </h1>
            </a>
            <div className="hero-img">
              <img
                src="../../../assets/images/img1-1.png"
                loading="lazy"
                alt=""
                className="hero_img hero-inner"
              />
            </div>
            <a href="#history" className="hero-link w-inline-block" />
          </div>
          <div className="explore_button-container is--visible-in-mobile">
            <p className="paragraph is--centered">
              The gallery of photography and fine arts
            </p>
            <a href="#history" className="explore-button w-inline-block">
              <p className="paragraph red">explore</p>
              <div className="explore-arrow">
                <img
                  src="images/arrow_1.svg"
                  loading="lazy"
                  alt=""
                  className="explore-arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <Histoy />
      <Artist />
    </div>
  );
};

export default ClipCntr;
