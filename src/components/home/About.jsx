import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useEffect(() => {
    if (window.innerWidth > 540) {
      const magnets = document.querySelectorAll(".magnetic");

      magnets.forEach((magnet) => {
        let inView = false;

        gsap.to(magnet, {
          scrollTrigger: {
            trigger: magnet.parentElement,
            start: "top bottom",
            end: "bottom top",
            scroller: "body",
            onEnter: () => {
              inView = true;
            },
            onEnterBack: () => {
              inView = true;
            },
            onLeave: () => {
              inView = false;
            },
            onLeaveBack: () => {
              inView = false;
            },
          },
        });

        const moveMagnet = (event) => {
          if (inView) {
            const bounding = magnet.getBoundingClientRect();
            const magnetsStrength = magnet.getAttribute("data-strength");

            gsap.to(magnet, {
              x:
                ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) *
                magnetsStrength,
              y:
                ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) *
                magnetsStrength,
              rotate: "0.001deg",
              ease: "Power4.easeOut",
            });
          }
        };

        document.addEventListener("mousemove", moveMagnet);

        // Cleanup function
        return () => {
          document.removeEventListener("mousemove", moveMagnet);
        };
      });
    }
  }, []);

  return (
    <section className="intro" data-scroll-section="">
      <div className="intro__container magneticWrapper">
        <div className="itext">
          <h1>ABOUT US</h1>
          <h3 className="fhl o_italic">
            <span className="itext__line">
              Welcome to Mr. and Mrs. Films... and Sometimes Events!
            </span>
            <span className="itext__line">
              A powerhouse where the art of
              <span className="itext__thumb">
                <img
                  src="https://halomedia.com/wp-content/uploads/2022/07/text-thumb.png"
                  alt=""
                />
              </span>
              <a href="https://halomedia.com/studio/"> storytelling meets</a>
            </span>
            <span className="itext__line">
              <a href="https://halomedia.com/collective/">
                the magic of live experiences.
              </a>
              <span className="itext__thumb">
                <img
                  src="https://halomedia.com/wp-content/uploads/2022/07/text-thumb2.png"
                  alt=""
                />
              </span>
              &amp;
              <a href="https://halomedia.com/savoir-flair/">Born from</a>
              our work
            </span>
            <span className="itext__line">
              our love of creativity, &amp; we are a film production house
            </span>
            <span className="itext__line">
              committed to finding a fresh angle every time we tell a story.
            </span>
            <span className="itext__line">
              But our penchant for crafting long-lingering moments didn't
            </span>
            <span className="itext__line">
              stop right there. Today, we take pride in ourselves as an event-
            </span>
            <span>
              creating, unforgettable-experience-building company too.
            </span>
          </h3>
        </div>
        <div
          className="intro__video magnetic"
          data-strength={100}
          data-strength-text={-100}
        >
          <div className="intro__video--wrapper btn-text">
            <video muted autoPlay playsInline loop className="v_autoplay">
              <source src="https://halomedia.com/wp-content/uploads/2022/08/2022-SHOWREEL-compressed-no-sound.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
