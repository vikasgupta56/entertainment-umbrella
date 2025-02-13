import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Histoy from "./Histoy";
// import Artist from "./Artist";
// import Artist_tour from "../rage-entertainment/Artist_tour";
// import Logos from "./Logos";
import Link from "next/link";
import SplitText from "gsap/dist/SplitText";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, SplitText);
const ClipCntr = () => {
  useEffect(() => {
    const paraHeaders = document.querySelectorAll(".para-btn-cntr");

    const toggleVisibility = (event) => {
      const button = event.currentTarget; // Get the clicked button
      const hiddenParaCntr = button
        .closest(".item")
        .querySelector(".g-item-list-para-cntr"); // Find the corresponding content
      const plusMinus = button.querySelector(".plus-minus"); // Select the specific plus-minus for the clicked button

      // Toggle the open class on the button
      const isOpen = button.classList.toggle("open");

      if (isOpen) {
        // Add open class to the specific plus-minus
        plusMinus.classList.add("open");
        plusMinus.classList.remove("active"); // Ensure active is removed

        // Optionally close other items
        paraHeaders.forEach((otherButton) => {
          if (otherButton !== button) {
            otherButton.classList.remove("open");
            otherButton.querySelector(".plus-minus").classList.remove("open");
            otherButton.querySelector(".plus-minus").classList.add("active"); // Add active to remove content
            const otherContent = otherButton
              .closest(".item")
              .querySelector(".g-item-list-para-cntr");
            gsap.to(otherContent, {
              height: 0,
              duration: 0.5,
              ease: "expo.inout",
            });
          }
        });

        // Animate the clicked content
        gsap.to(hiddenParaCntr, {
          height: "auto",
          duration: 0.5,
          ease: "expo.inout",
        });
      } else {
        // Remove open class from the specific plus-minus
        plusMinus.classList.remove("open");
        plusMinus.classList.add("active"); // Add active to remove content
        gsap.to(hiddenParaCntr, {
          height: 0,
          duration: 0.5,
          ease: "expo.inout",
        });
      }
    };

    // Attach event listeners to each button
    paraHeaders.forEach((button) => {
      button.addEventListener("click", toggleVisibility);
    });

    // Open the first paragraph container on page load
    if (paraHeaders.length > 0) {
      const firstButton = paraHeaders[0];
      const firstPlusMinus = firstButton.querySelector(".plus-minus");
      firstButton.classList.add("open");
      firstPlusMinus.classList.add("open");
      firstPlusMinus.classList.remove("active");

      const firstContent = firstButton
        .closest(".item")
        .querySelector(".g-item-list-para-cntr");
      gsap.to(firstContent, {
        height: "auto",
        duration: 0.5,
        ease: "expo.inout",
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      paraHeaders.forEach((button) => {
        button.removeEventListener("click", toggleVisibility);
      });
    };
  }, []);
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

  // useEffect(() => {
  //   const quotess = document.querySelectorAll(".quotetrigger");
  //   function setupSplits() {
  //     quotess.forEach((quotes) => {
  //       const splitTexts = new SplitText(quotes, {
  //         type: "lines",
  //         linesClass: "split-line",
  //       });
  //       gsap.set(".split-line", { yPercent: 100, overflow: "hidden" });
  //       // console.log(quote);
  //     });
  //     ScrollTrigger.batch(".quotetriggerCntr", {
  //       onEnter: (batch) => {
  //         batch.forEach((section, i) => {
  //           gsap.to(section.querySelectorAll(".split-line"), {
  //             // autoAlpha: 1,
  //             yPercent: 0,
  //             duration: 0.8,
  //             ease: "power1.inOut",
  //             stagger: 0.05,
  //             delay: i * 0.3,
  //             marker: true,
  //             // delay: 1,
  //           });
  //         });
  //       },
  //       start: "top 95%",
  //     });
  //   }
  //   setupSplits();
  // }, []);

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
          type: "lines,words",
          linesClass: "split-line",
        });

        // Set up new animation
        quote.anim = gsap.from(quote.split.words, {
          scrollTrigger: {
            trigger: quote,
            toggleActions: "restart pause resume reverse",
            start: "top 95%",
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

  useEffect(() => {
    const quotess = document.querySelectorAll(".quoteee");
    const items = document.querySelectorAll(".item"); // Correct selector for .item class

    function setupSplitss() {
      quotess.forEach((quotes) => {
        const splitTexts = new SplitText(quotes, {
          type: "lines",
          linesClass: "split-linee",
        });
        gsap.set(".split-linee", { yPercent: 100, overflow: "hidden" });

        quotess.forEach((section, i) => {
          // Set up the ScrollTrigger for each section (quoteee)
          ScrollTrigger.create({
            trigger: section,
            start: "top 95%",
            onEnter: () => {
              // Animate the text in the quoteee
              gsap.to(section.querySelectorAll(".split-linee"), {
                yPercent: 0,
                duration: 0.8,
                ease: "power1.inOut",
                stagger: 0.05,
                delay: i * 0.1, // Delay for each section
              });
            },
          });
        });
      });

      // Apply transition to the border-bottom in the pseudo-element of .item
      items.forEach((item) => {
        gsap.set(item, {
          // borderBottom: "solid 1px transparent", // Set initial transparent border
          "--border-width": 0,
        });
      });

      // Add ScrollTrigger to handle the border animation on .item
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 95%",
          onEnter: () => {
            // Animate the border-bottom of the .item when it enters the viewport
            gsap.to(item, {
              duration: 0.8,
              ease: "power1.inOut",
              // borderBottom: "solid 1px #fff", // Animate border-bottom to solid color
              delay: i * 0.1, // Delay for each .item
              "--border-width": "100%",
            });
          },
        });
      });
    }

    setupSplitss();
  }, []);
  return (
    <div className="clip-container">
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
                src="/assets/images/RangeMedia/pexels-leeloothefirst-7598017.jpg"
                // src="../../../assets/images/RangeMedia/pexels-ivan-samkov-7676406.jpg"
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

      {/* <Histoy id="sectionTwo" /> */}
      <div className="TwoColumnText_root">
        {/* <div className="TwoColumnText_left TwoColumnText_col">
          <h2 className="AnimatedTextLines_root text-heading-md AnimatedTextLines_mask AnimatedTextLines_animate">
            Why partner with Rage Entertainment?
            About
          </h2>
        </div> */}
        <div className="TwoColumnText_right TwoColumnText_col">
          <p className="AnimatedTextLines_root text-heading-para AnimatedTextLines_line-height AnimatedTextLines_animate quote">
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
      <section className="vf-section bg-primary">
        <div className="v-wrapper">
          <div className="v-wrapper-inner">
            <div className="c-wrapper bg-primary">
              <div className="v-wrapper-inner-content">
                <h2
                  className="v-wrapper-heading quote"
                  style={{ color: "#000" }}
                >
                  Why choose us?
                </h2>
                {/* <h3 className="ff-t tt-u fs-md mt-0b">by GPC</h3> */}
                <p className="quote" style={{ color: "#000" }}>
                  We believe in building true partnerships, not just
                  transactions. For us to be successful together, we need to be
                  in sync with your brand, your vision, and your goals. This
                  isn’t about simply closing a deal—it’s about forging a
                  relationship that lasts and helps your brand grow.
                  {/* We’re
                  selective in who we work with because we understand that the
                  most impactful collaborations are those where our synergies
                  align. When we work with you, we’re with you every step of the
                  way. We’re thinking about your brand first thing in the
                  morning and long after you’ve signed off for the day. We’re
                  planning for the next week, next month, and next year—because
                  we believe in the long-term success of your brand. */}
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

      {/* <Logos /> */}
      <section className="brands">
        <div className="full-brands__section full-brands__clients once-inview">
          <div className="">
            <h2 className="full-brands__title full-brands__clients__title once-inview quote">
              SELECTED BRANDS
            </h2>
            <h4 className="full-brands__para quote">
              We’ve partnered with businesses across a wide range of industries,
              including Beauty, Events, Jewelry, Wellness, Entertainment,
              Fitness, Hospitality, Food and beverage, Startups, Tech, Fashion,
              Lifestyle, Finance, and NGOs. Our expertise spans diverse sectors,
              enabling us to deliver customized digital solutions.
            </h4>
          </div>
          <div className="full-brands__section__list full-brands__clients__list">
            <figure className="full-brands__section__item">
              <Image
                alt="dfdsggsd"
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Afleabythetree.png"
              />
            </figure>
            <figure className="full-brands__section__item">
              <Image
                alt=""
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Anjali .png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Chezy.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Cineyug.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Coconut.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Colexion.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Dfitzy.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Dhamaka Records.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Dome.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Fay nyx.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Furcrew.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Furfiesta.png"
              ></Image>
            </figure>
          </div>
        </div>
      </section>
      {/* <Artist /> */}
      <section className="section three">
        <div className="">
          <div id="aboutsection">
            <div className="">
              <div className="h2-wrapper">
                <div className="h-wrapper align-top">
                  <h1 className="artistsheading quoteee">Our Services</h1>
                </div>
              </div>
              <div className="text-inner-container bottom_margin">
                <h4 className="gallerypera quoteee">
                  At Rage Media, we offer all services in-house, covering every
                  aspect of your brand needs. Our multi-brand structure allows
                  us to seamlessly integrate strategies, ensuring a cohesive and
                  tailored approach for each client.
                </h4>
              </div>
            </div>

            <div className="about-a-section">
              <div className="g-item-list">
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">
                        Celebrity Management
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside quoteee">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">
                        Digital Marketing
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">
                        Website Development
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">Brand Shoots</h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">Launch Events</h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">
                        Influencer Marketing
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="item">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quoteee">
                        Public Relations (PR)
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Artist_tour /> */}
    </div>
  );
};

export default ClipCntr;
