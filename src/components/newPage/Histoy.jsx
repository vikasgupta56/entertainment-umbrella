import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import SplitText from "gsap/dist/SplitText";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const Histoy = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Simulate content loading (replace this with your actual data fetching logic)
  //   const loadContent = () => {
  //     setTimeout(() => {
  //       setIsLoaded(true);
  //     }, 1000); // Simulate a 1 second loading time
  //   };

  //   loadContent();
  // }, []);
  // useEffect(() => {
  //   // function gsapImgAnimation() {
  //   let imgStag = 0.3;
  //   let imgDur = 1.2;

  //   //grid-img scale animation
  //   //gsap.registerPlugin(ScrollTrigger);

  //   //gsap.defaults({ ease: "power1.inOut" });
  //   const targets = gsap.utils.toArray(".grid-cell-img.gsap");
  //   if (targets.length === 0) return; // Exit if no targets found

  //   ScrollTrigger.batch(".grid-cell-img.gsap", {
  //     start: "top 90%",
  //     end: "center 110%",
  //     preventOverlaps: true,
  //     fastScrollEnd: true,
  //     // markers: true,
  //     onEnter: (batch) =>
  //       gsap.to(batch, {
  //         scale: 1,
  //         stagger: { each: imgStag },
  //         duration: imgDur,
  //       }),
  //     onLeaveBack: (batch) =>
  //       gsap.to(batch, {
  //         scale: 1.3,
  //         stagger: { each: imgStag },
  //         duration: imgDur,
  //       }),
  //     scrub: true,
  //     // markers: true
  //   });
  //   // }
  // }, []);
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

  // useEffect(() => {
  //   const paragraphs = document.querySelectorAll(".Cpb_para");

  //   paragraphs.forEach((paragraph) => {
  //     const text = new SplitText(paragraph, {
  //       type: "lines,words,chars",
  //     });
  //     const chars = text.chars;

  //     // Create a ScrollTrigger for each paragraph
  //     gsap.to(chars, {
  //       scrollTrigger: {
  //         trigger: paragraph, // Trigger the animation for each individual paragraph
  //         start: "top 80%", // Adjust as needed
  //         end: "bottom 60%", // Adjust as needed
  //         markers: true,
  //         scrub: true,
  //       },
  //       duration: 1.5,
  //       stagger: 0.1, // Adjust stagger as needed
  //       ease: "linear",
  //       color: "#fff",
  //     });
  //   });

  //   // Optional: Refresh triggers if necessary
  //   ScrollTrigger.refresh();
  // }, []);
  return (
    <>
      <div className="TwoColumnText_root">
        {/* <div className="TwoColumnText_left TwoColumnText_col">
          <h2 className="AnimatedTextLines_root text-heading-md AnimatedTextLines_mask AnimatedTextLines_animate">
            Why partner with Rage Entertainment?
            About
          </h2>
        </div> */}
        <div className="TwoColumnText_right TwoColumnText_col">
          <p className="AnimatedTextLines_root text-heading-para AnimatedTextLines_line-height AnimatedTextLines_animate">
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
