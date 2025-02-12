import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
// import SplitText from "gsap/dist/SplitText";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Histoy = () => {
  useGSAP(() => {
    function gsapImgAnimation() {
      let imgStag = 0.3;
      let imgDur = 1.2;

      //grid-img scale animation
      //gsap.registerPlugin(ScrollTrigger);

      gsap.defaults({ ease: "power1.inOut" });
      ScrollTrigger.batch(".grid-cell-img.gsap", {
        start: "top 90%",
        end: "center 110%",
        preventOverlaps: true,
        fastScrollEnd: true,

        onEnter: (batch) => {
          console.log("Entering:", batch);
          gsap.to(batch, {
            scale: 1,
            stagger: { each: imgStag },
            duration: imgDur,
          });
        },
        onLeaveBack: (batch) => {
          console.log("Leaving:", batch);
          gsap.to(batch, {
            scale: 1.3,
            stagger: { each: imgStag },
            duration: imgDur,
          });
        },
        // scrub: true
        // markers: true,
      });
    }
    gsapImgAnimation();

    // if (!isLoaded) return; // Wait for content to load

    // const targets = gsap.utils.toArray(".grid-cell-img.gsap");

    // if (targets.length === 0) return; // Exit if no targets found

    // const animations = targets.map((target) =>
    //   gsap.to(target, {
    //     duration: 1.5,
    //     scale: 1,
    //     ease: "linear",
    //     scrollTrigger: {
    //       trigger: target,
    //       start: "top 80%",
    //       end: "bottom 50%",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   })
    // );

    // ScrollTrigger.refresh(); // Refresh triggers

    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
  });

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
    <>
      <div className="TwoColumnText_root quotetriggerCntr">
        {/* <div className="TwoColumnText_left TwoColumnText_col">
          <h2 className="AnimatedTextLines_root text-heading-md AnimatedTextLines_mask AnimatedTextLines_animate">
            Why partner with Rage Entertainment?
            About
          </h2>
        </div> */}
        <div className="TwoColumnText_right TwoColumnText_col">
          <p className="AnimatedTextLines_root text-heading-para AnimatedTextLines_line-height AnimatedTextLines_animate quotetrigger">
            At Rage Media, we’ve had the privilege of working with over 30
            brands—ranging from individual entrepreneurs to large corporations.
            But no matter your size, one thing remains constant: for us, it’s
            all about finding the right fit.
          </p>
          {/* <a className="text-accent text-body-animate-in active" href="">
            Say Hello
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Histoy;
