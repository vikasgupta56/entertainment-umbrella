import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Histoy from "./Histoy";
import Artist from "./Artist";
// import Artist_tour from "../rage-entertainment/Artist_tour";
import Logos from "./Logos";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const ClipCntr = () => {
  // const [isLargeScreen, setIsLargeScreen] = useState(false);
  // const [isBrowser, setIsBrowser] = useState(false);

  // useLayoutEffect(() => {
  //   // This ensures ScrollTrigger runs after DOM is fully loaded (client-side)
  //   setIsBrowser(true);
  // }, []);

  // useEffect(() => {
  //   if (!isBrowser) return; // Skip if not in browser (e.g., SSR)

  //   const animate = () => {
  //     if (window.innerWidth >= 1024) {
  //       // GSAP timeline setup
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".clip-container",
  //           start: "-0.1% top",
  //           end: "bottom bottom",
  //           scrub: true,
  //           // markers: true, // Uncomment for debugging
  //         },
  //       });

  //       tl.to(".hero-content", { scale: 2 }, "a")
  //         .to("h1.hero.left", { x: "-160%", scale: 2.1 }, "a")
  //         .to("h1.hero.right", { x: "160%", scale: 2.1 }, "a")
  //         .to(
  //           ".hero-img",
  //           {
  //             rotate: 0,
  //             clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
  //           },
  //           "a"
  //         )
  //         .to(".hero_img.hero-inner", { scale: 0.8 }, "b");
  //     }
  //   };

  //   animate();

  //   // Resize handling
  //   const handleResize = () => {
  //     const newIsLargeScreen = window.innerWidth >= 1024;
  //     if (newIsLargeScreen !== isLargeScreen) {
  //       setIsLargeScreen(newIsLargeScreen);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Ensure ScrollTrigger recalculates on resize
  //   window.addEventListener("load", () => {
  //     ScrollTrigger.refresh();
  //   });

  //   // Clean up event listeners
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("load", () => ScrollTrigger.refresh());
  //   };
  // }, [isBrowser, isLargeScreen]);
  useEffect(() => {
    // Select all .vf-section elements
    const vfSec = document.querySelectorAll(".vf-section");

    //  vfSec.forEach((t, index) => {
    const mediaBackground = document.querySelector(".media-background");

    // Check if .media-background exists in this .vf-section
    if (mediaBackground) {
      gsap.to(mediaBackground, {
        scrollTrigger: {
          trigger: vfSec,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          markers: false, // Set to `true` for debugging purposes
        },
        yPercent: 32,
        ease: "none",
      });
    }
    //  });

    // Cleanup the ScrollTrigger instance on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    function heroScroll() {
      if (window.matchMedia("(min-width: 988px)").matches) {
        var speed = 0.1;
        var wheelTimeline = gsap.timeline({
          paused: true,
          onUpdate: function () {
            this.time(this.time() * speed);
          },
        });

        let heroTrigger = document.querySelector(".section.hero");
        let heroContent = document.querySelector(".hero-content");
        let heroImg = document.querySelector(".hero-img");
        let innerImg = document.querySelector(".hero-img img");
        let leftText = document.querySelector(".h1.hero.left");
        let rightText = document.querySelector(".h1.hero.right");

        // Create a timeline for the animation of leftText
        var leftSideTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger, // ID of the element to animate
            start: "top 0%", // Animation starts when the top of the element reaches the top of the hero section
            end: "top -2000%", // Animation ends when the bottom of the element reaches the bottom of the hero section
            scrub: true, // Animation is scrubbed (played back and forth) during scrolling
            markers: false, // Add markers to visualize the trigger and end points of the animation
          },
        });

        leftSideTimeline.to(leftText, {
          x: "-100%",
          // ease: "power1.inOut"
          ease: "slow",
        });

        // Create a timeline for the animation of rightText
        var rightSideTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger, // ID of the element to animate
            start: "top 0%", // Animation starts when the top of the element reaches the top of the hero section
            end: "top -2000%", // Animation ends when the bottom of the element reaches the bottom of the hero section
            scrub: true, // Animation is scrubbed (played back and forth) during scrolling
            markers: false, // Add markers to visualize the trigger and end points of the animation
          },
        });
        rightSideTimeline.to(rightText, {
          x: "100%",
          ease: "slow",
        });

        // Create a timeline for the animation of leftText
        var heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger, // ID of the element to animate
            start: "top 0%", // Animation starts when the top of the element reaches the top of the hero section
            end: "bottom -500%", // Animation ends when the bottom of the element reaches the bottom of the hero section
            scrub: true, // Animation is scrubbed (played back and forth) during scrolling
            markers: false, // Add markers to visualize the trigger and end points of the animation
          },
        });

        heroTimeline.to(heroContent, {
          scale: "4",
          // ease: "power1.inOut"
          ease: "slow",
          // pin: true
        });

        // Create a timeline for the animation of leftText
        var heroImgTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger, // ID of the element to animate
            start: "top 0%", // Animation starts when the top of the element reaches the top of the hero section
            end: "top -700%", // Animation ends when the bottom of the element reaches the bottom of the hero section
            scrub: true, // Animation is scrubbed (played back and forth) during scrolling
            markers: false, // Add markers to visualize the trigger and end points of the animation
          },
        });

        heroImgTimeline.to(heroImg, {
          rotate: 150,
          scale: 2.4,
          // ease: "power1.inOut"
          ease: "slow",
          //ease: "power2.out"
        });

        var innerImgTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger, // ID of the element to animate
            start: "top 0%", // Animation starts when the top of the element reaches the top of the hero section
            end: "top -700%", // Animation ends when the bottom of the element reaches the bottom of the hero section
            scrub: true, // Animation is scrubbed (played back and forth) during scrolling
            markers: false, // Add markers to visualize the trigger and end points of the animation
          },
        });

        innerImgTimeline.to(innerImg, {
          rotate: -155,
          scale: 0.1,
          // ease: "power1.inOut"
          ease: "slow",
        });
        // Control the animation speed based on mouse wheel scrolling
        document.querySelector("wheel", function (event) {
          //  event.preventDefault();
          speed += event.originalEvent.deltaY * -0.001;
          speed = Math.max(0.1, Math.min(5, speed)); // Limit the speed between 0.1 and 5
          wheelTimeline.invalidate().play();
        });

        //when clicking "hero Button" page scrolls to sectionTwo

        let sectionTwo = "#sectionTwo";
        let heroButton = document.querySelector(".h1-wrapper, .explore-button");

        //for mobile view
        //hide and show the "explore button" on scroll
        let exploreButton = document.querySelector(".explore_button-container");
        var exploreButtonTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger,
            start: "top 0%",
            end: "top -100%",
            scrub: true,
            markers: false,
          },
        });
        exploreButtonTimeline.to(exploreButton, {
          opacity: 0,
          yPercent: 200,
          ease: "slow",
        });

        heroButton.addEventListener("click", function () {
          var isSafari =
            /constructor/i.test(window.HTMLElement) ||
            (function (p) {
              return p.toString() === "[object SafariRemoteNotification]";
            })(
              !window["safari"] ||
                (typeof safari !== "undefined" &&
                  window["safari"].pushNotification)
            );
          if (isSafari) {
            document.querySelector(".hero-link").trigger("click");
            // 5 millisecond timeout in this case
            console.log("apple user");
          } else {
            gsap.to(window, {
              duration: 3,
              scrollTo: sectionTwo,
              ease: "power2.inOut",
            });
          }
          // css("pointer-events", "none");
        });

        //disabling pointer events for hero text once we scrolled the page
        // window.addEventListener("scroll", function () {
        //   // Get the scroll position
        //   var scrollPosition = window.scrollY || document.body.scrollTop;

        //   if (scrollPosition >= 100) {
        //     document.querySelector(".h1-wrapper").style.pointerEvents = "none";
        //     document.querySelector(".cursor-dot .paragraph").textContent =
        //       "view";
        //   } else {
        //     document.querySelector(".h1-wrapper").style.pointerEvents = "auto";
        //     document.querySelector(".cursor-dot .paragraph").textContent =
        //       "explore";
        //   }
        // });

        // window.addEventListener("scroll", function () {
        //   // Get the scroll position again
        //   var scrollPosition = window.scrollY || document.body.scrollTop;

        //   if (scrollPosition >= 1500) {
        //     document.querySelector(".cursor-dot .paragraph").textContent =
        //       "view";
        //   } else {
        //     document.querySelector(".cursor-dot .paragraph").textContent =
        //       "explore";
        //   }
        // });
      } else {
        //when clicking "hero Button" page scrolls to sectionTwo\
        let heroTrigger = document.querySelector(".section.hero");
        //for mobile view
        //hide and show the "explore button" on scroll
        let exploreButton = document.querySelector(".explore_button-container");
        var exploreButtonTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroTrigger,
            start: "top 0%",
            end: "top -100%",
            scrub: true,
          },
        });
        exploreButtonTimeline.to(exploreButton, {
          opacity: 0,
          yPercent: 200,
          ease: "slow",
        });

        exploreButton.addEventListener("click", function () {
          // 5 millisecond timeout in this case
        });
      }
    }
    heroScroll();
  }, []);
  return (
    <div className="clip-container">
      {/* <section className="section hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <a
              href="#"
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
          <div className="hero-info-text">
            <h2>Turning Ideas Into Impactful Digital Experiences.</h2>
          </div>
          <div className="explore_button-container is--visible-in-mobile">
            <p className="paragraph _hero is--centered">
              The gallery of photography and fine arts
            </p>
            <a href="#history" className="explore-button w-inline-block">
              <p className="paragraph _hero red">explore</p>
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
      </section> */}
      <section className="section hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <Link
              href="#"
              data-w-id="59271182-f875-d4dc-3a94-3de05c5eb035"
              className="h1-wrapper w-inline-block"
            >
              <h1 className="h1 hero left">Rage</h1>
              <h1 className="h1 hero right">Media</h1>
            </Link>
            <div className="hero-img">
              <img
                src="../../../assets/images/img1-1.png"
                loading="lazy"
                sizes="100vw"
                alt=""
                className="img hero-inner"
              />
            </div>
          </div>
          <div className="explore_button-container is--visible-in-mobile">
            <p className="paragraph is--centered">
              Turning Ideas Into Impactful Digital Experiences.
            </p>
            <Link href="#history" className="explore-button w-inline-block">
              {/* <p className="paragraph red">explore</p> */}
              {/* <div className="explore-arrow">
                <img
                  src="images/arrow_1.svg"
                  loading="lazy"
                  alt=""
                  className="explore-arrow"
                />
              </div> */}
            </Link>
          </div>
        </div>
      </section>

      <Histoy id="sectionTwo" />
      <section className="vf-section bg-primary">
        <div className="v-wrapper">
          <div className="v-wrapper-inner">
            <div className="c-wrapper bg-primary">
              <div className="v-wrapper-inner-content">
                <h2 className="v-wrapper-heading">Why choose us?</h2>
                {/* <h3 className="ff-t tt-u fs-md mt-0b">by GPC</h3> */}
                <p className="">
                  We believe in building true partnerships, not just
                  transactions. For us to be successful together, we need to be
                  in sync with your brand, your vision, and your goals. This
                  isn’t about simply closing a deal—it’s about forging a
                  relationship that lasts and helps your brand grow. We’re
                  selective in who we work with because we understand that the
                  most impactful collaborations are those where our synergies
                  align. When we work with you, we’re with you every step of the
                  way. We’re thinking about your brand first thing in the
                  morning and long after you’ve signed off for the day. We’re
                  planning for the next week, next month, and next year—because
                  we believe in the long-term success of your brand.
                </p>
                {/* <div className="mb-1">
                  <a
                    href=""
                    target="_blank"
                    className="a-underline is-rvrsd prevent"
                    title="Have a good trip !"
                  >
                    <span>Have a good trip !</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div
              className="media-background js-prllx lazy-container"
              //   data-scroll
              //   data-scroll-speed="-0.2"
            >
              {/* <picture>
                <source
                  data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/olivia-chaber-J0bc-3dgmcI-unsplash.webp"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  src="https://gaelleperrin.com/wp-content/uploads/2024/09/olivia-chaber-J0bc-3dgmcI-unsplash.webp"
                  alt=""
                  width={1480}
                  height={987}
                  aspect=""
                />
              </picture> */}
              <video
                src="../../../assets/videos/Dhamaka-video 5.mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
        </div>
      </section>

      <Logos />
      <Artist />
      {/* <Artist_tour /> */}
    </div>
  );
};

export default ClipCntr;
