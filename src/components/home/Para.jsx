import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Para = () => {
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
          <h1>Para</h1>
          <h3 className="fhl o_italic">
            <span className="itext__line">
              halo media is the middle east’s premier digital
            </span>
            <span className="itext__line">
              media company, consisting of
              <span className="itext__thumb">
                <img
                  src="https://halomedia.com/wp-content/uploads/2022/07/text-thumb.png"
                  alt=""
                />
              </span>
              <a href="https://halomedia.com/studio/">halo studio</a>
            </span>
            <span className="itext__line">
              <a href="https://halomedia.com/collective/">halo collective</a>
              <span className="itext__thumb">
                <img
                  src="https://halomedia.com/wp-content/uploads/2022/07/text-thumb2.png"
                  alt=""
                />
              </span>
              &amp;
              <a href="https://halomedia.com/savoir-flair/">savoir flair.</a>
              our work
            </span>
            <span className="itext__line">
              with luxury &amp; lifestyle brands has earned us
            </span>
            <span className="itext__line">
              a reputation for highly relevant and sought-
            </span>
            <span className="itext__line">
              after content, as well as world-class events,
            </span>
            <span className="itext__line">
              videos, photoshoots &amp; marketing opportunities
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

export default Para;
