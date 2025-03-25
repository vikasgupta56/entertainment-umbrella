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

  // useEffect(() => {
  //   const quotess = document.querySelectorAll(".quotetrigger");

  //   const setupSplits = () => {
  //     quotess.forEach((quotes) => {
  //       const splitTexts = new SplitText(quotes, {
  //         type: "lines",
  //         linesClass: "split-line",
  //       });
  //       gsap.set(splitTexts.lines, { yPercent: 200, overflow: "hidden" });
  //     });

  //     ScrollTrigger.batch(".quotetriggerCntr", {
  //       onEnter: (batch) => {
  //         batch.forEach((section, i) => {
  //           gsap.to(section.querySelectorAll(".split-line"), {
  //             yPercent: 0,
  //             duration: 0.8,
  //             ease: "power1.inOut",
  //             // stagger: 0.01,
  //             delay: i * 0.3,
  //             markers: true, // Use markers to debug the start and end points of ScrollTrigger
  //           });
  //         });
  //       },
  //       start: "top 95%",
  //     });
  //   };

  //   setupSplits();

  //   return () => {
  //     // Clean up the ScrollTrigger when the component unmounts
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  // new code
  useEffect(() => {
    const quotes = document.querySelectorAll(".quote");

    function setupSplits() {
      quotes.forEach((quote) => {
        // Reset animation and splits if needed
        if (quote.anim) {
          quote.anim.progress(1).kill(); // Stop the existing animation
          quote.split.revert(); // Revert splitText
        }

        // Split text into lines
        quote.split = new SplitText(quote, {
          type: "lines",
          linesClass: "split-line",
        });

        // Set up new animation
        quote.anim = gsap.from(quote.split.lines, {
          scrollTrigger: {
            trigger: quote,
            toggleActions: "restart pause resume reverse",
            start: "top top",
            markers: false,
          },
          duration: 0.6,
          ease: "circ.out",
          y: 80,
          stagger: 0.02,
        });
      });
    }

    // Setup splits on initial load
    setupSplits();

    // Re-run setupSplits on ScrollTrigger refresh
    ScrollTrigger.addEventListener("refresh", setupSplits);

    // Cleanup function to remove listeners when component is unmounted
    return () => {
      ScrollTrigger.removeEventListener("refresh", setupSplits);
      quotes.forEach((quote) => {
        if (quote.split) {
          quote.split.revert(); // Revert any splits when component is unmounted
        }
      });
    };
  }, []);
  return (
    <section className="intro" data-scroll-section="">
      <div className="intro__container magneticWrapper">
        <div className="itext">
          {/* <h1>ABOUT US</h1> */}
          <h3 className="fhl o_italic quote">
            Welcome to Mr. and Mrs. Films... and Sometimes Events! A powerhouse
            where the art of storytelling meets the magic of live experiences.
            Born from our love of creativity, we are a film production house
            committed to finding a fresh angle every time we tell a story. But
            our penchant for crafting long-lingering moments didn't stop right
            there. Today, we take pride in ourselves as an event-creating,
            unforgettable-experience-building company too.
          </h3>
        </div>
        <div
          className="intro__video magnetic"
          data-strength={100}
          data-strength-text={-100}
        >
          <div className="intro__video--wrapper btn-text">
            <video muted autoPlay playsInline loop className="v_autoplay">
              <source src="/assets/images/mrandmrs/videos/video_to_go_in_the_circle (malti_ka_sapna).webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
