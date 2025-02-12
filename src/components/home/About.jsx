import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
  useEffect(() => {
    function initoTalic() {
      const items = document.querySelectorAll(".o_italic");
      const oldlinks = document.querySelectorAll(".o_italic a");
      const oldimg = document.querySelectorAll(".o_italic img");

      items.forEach((item, index) => {
        item.innerHTML = item.innerHTML.replace(/\o/g, "<i>O</i>");
      });
      items.forEach((item, index) => {
        item.innerHTML = item.innerHTML.replace(/\O/g, "<i>O</i>");
      });

      // Reset all links and image src
      setTimeout(() => {
        const newlinks = document.querySelectorAll(".o_italic a");
        newlinks.forEach((link, index) => {
          link.href = oldlinks[index].href;
        });
        const newimg = document.querySelectorAll(".o_italic img");
        newimg.forEach((img, index) => {
          img.src = oldimg[index].src;
        });
      }, 500);
    }
    // initoTalic();

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

  useEffect(() => {
    const quotess = document.querySelectorAll(".quotetrigger");
    function setupSplits() {
      quotess.forEach((quotes) => {
        const splitTexts = new SplitText(quotes, {
          type: "lines",
          linesClass: "split-line",
        });
        gsap.set(".split-line", { yPercent: 100, overflow: "hidden" });
        // console.log(quote);
      });
      ScrollTrigger.batch(".quotetriggerCntr", {
        onEnter: (batch) => {
          batch.forEach((section, i) => {
            gsap.to(section.querySelectorAll(".split-line"), {
              // autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
              ease: "power1.inOut",
              stagger: 0.01,
              delay: i * 0.1,
              marker: true,
              // delay: 1,
            });
          });
        },
        start: "top 95%",
      });
    }
    setupSplits();
  }, []);
  return (
    <section className="intro quotetriggerCntr" data-scroll-section="">
      <div className="intro__container magneticWrapper">
        <div className="itext">
          {/* <h1>ABOUT US</h1> */}
          <h3 className="fhl o_italic quotetrigger">
            Welcome to Mr. and Mrs. Films... and Sometimes Events! A powerhouse
            where the art of storytelling meets the magic of live experiences.
            Born from our love of creativity, we are a film production house
            committed to finding a fresh angle every time we tell a story. But
            our penchant for crafting long-lingering moments didn't stop right
            there. Today, we take pride in ourselves as an event-creating,
            unforgettable-experience-building company too.
            {/* <span className="itext__line">
              Welcome to Mr. and Mrs. Films... and Sometimes Events!
            </span>
            A powerhouse where the art of the magic of live
            <span className="itext__line">
              experiences. Born from our work our love of creativity,
            </span>
            <span className="itext__line">we are a film production house</span>
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
            </span> */}
          </h3>
        </div>
        <div
          className="intro__video magnetic"
          data-strength={100}
          data-strength-text={-100}
        >
          <div className="intro__video--wrapper btn-text">
            <video muted autoPlay playsInline loop className="v_autoplay">
              <source src="/assets/videos/Dhamaka-video 2.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
