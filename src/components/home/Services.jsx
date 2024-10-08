import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  useEffect(() => {
    const cubeElement = document.querySelector(".cube-wrapper .cube");
    const otherElement = document.querySelector(".height-fix");
    const otherElement2 = document.querySelector(
      ".cube-wrapper .icon:nth-child(1)"
    );

    if (!cubeElement || !otherElement || !otherElement2) return; // Ensure elements exist

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cube-wrapper",
        start: "top 30%",
        end: window.innerWidth >= 960 ? "+=1850px" : "+=800px",
        markers: false,
        pin: ".cube-wrapper",
        scrub: 0.2,
        anticipatePin: true,
        onEnter: toggleInnerClass,
        onEnterBack: toggleInnerClass,
        onLeaveBack: () => toggleInnerClass(false),
      },
      onComplete: () => toggleInnerClass(false),
    });

    tl.to(
      cubeElement,
      {
        rotateY: "360deg",
        duration: 20,
        ease: "none",
        onUpdate: updateVisibility,
      },
      "a +=0.05"
    ).to(
      ".cube-wrapper",
      {
        transform: "translateX(0px, 1930px)",
      },
      "c +=0.5"
    );

    function toggleInnerClass(add = true) {
      const innerElement = document.querySelector(".cube-wrapper .inner");
      if (innerElement) {
        innerElement.classList[add ? "add" : "remove"]("innerInview");
      }
    }

    function updateVisibility() {
      const currentRotation = gsap.getProperty(cubeElement, "rotationY");
      if (currentRotation >= 200 && currentRotation <= 360) {
        otherElement.style.display = "initial";
        otherElement2.style.display = "none";
      } else {
        otherElement.style.display = "none";
        otherElement2.style.display = "initial";
      }
    }

    return () => {
      tl.kill(); // Clean up the timeline on component unmount
    };
  }, []);

  return (
    <section>
      <div className="row expanded title" data-v-f2426fb2="">
        <div className="xxlarge-7 xxlarge-offset-1 columns" data-v-f2426fb2="">
          <h2 className="h-large enter">
            <div
              className="block"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <span className="bold-sans">Benefits</span>
            </div>
          </h2>
        </div>
      </div>
      <div className="benefits-wrapper">
        <div className="benefits-anim-wrapper">
          <div className="cube-wrapper">
            <div className="inner">
              <div className="cube">
                <div className="face front">
                  <img
                    src="https://cdn.sanity.io/images/ktdoobes/production/19720d310037cae8b57a62a01820962e4be3bd43-324x241.svg?auto=format&w=600"
                    className="icon"
                  />
                  <img
                    src="https://cdn.sanity.io/images/ktdoobes/production/90ea284d86a7bcb73b19bc6b94caeae83f07236b-174x307.svg?auto=format&w=600"
                    className="icon height-fix"
                  />
                </div>
                <div className="face back">
                  <img
                    src="https://cdn.sanity.io/images/ktdoobes/production/f5d53f6741c36564560c70b9a460c4227725359d-305x194.svg?auto=format&w=600"
                    className="icon"
                  />
                </div>
                <div className="face left">
                  <img
                    src="https://cdn.sanity.io/images/ktdoobes/production/3ef53716e9a5f410e4093203b6fd09a32d5b875d-282x284.svg?auto=format&w=600"
                    className="icon"
                  />
                </div>
                <div className="face right">
                  <img
                    src="https://cdn.sanity.io/images/ktdoobes/production/1c587635f2e4be21c1d4b9f899429b8a6b24cdb2-242x242.svg?auto=format&w=600"
                    className="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded align-middle">
          <div className="xxlarge-6 xxlarge-offset-9 small-16 small-offset-0">
            <div className="text-wrapper">
              <div className="inner">
                <h3>Workation</h3>
                <p>
                  Once a year, we cover all expenses for our team to spend a
                  week together in a nice location connecting in different ways:
                  working, sharing ideas, and having fun together. A healthy mix
                  of work and vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded align-middle">
          <div className="xxlarge-6 xxlarge-offset-9 small-16 small-offset-0">
            <div className="text-wrapper">
              <div className="inner">
                <h3>Time Off</h3>
                <p>
                  Sometimes you just need to take a few days off. We don’t
                  dif­fer­en­ti­ate between sick days, floating holidays and
                  paid time off. If you need the time, take it. We measure
                  results, not hours in front of the screen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded align-middle">
          <div className="xxlarge-6 xxlarge-offset-9 small-16 small-offset-0">
            <div className="text-wrapper">
              <div className="inner">
                <h3>Education</h3>
                <p>
                  There is a LOT of great content on the internet to learn for
                  free. We share with you everything we have. But sometimes
                  there are some special books, magazines or courses. We cover
                  these.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded align-middle">
          <div className="xxlarge-6 xxlarge-offset-9 small-16 small-offset-0">
            <div className="text-wrapper">
              <div className="inner">
                <h3>Flexible Schedule</h3>
                <p>
                  We all have different routines. Some people prefer to meditate
                  or work out in the morning. Others prefer to sleep. If it
                  works for you and everyone involved, all good.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded align-middle">
          <div className="xxlarge-6 xxlarge-offset-9 small-16 small-offset-0">
            <div className="text-wrapper">
              <div className="inner">
                <h3>Continuous Development</h3>
                <p>
                  We can only grow if our people grow too. It is in our best
                  interest to surround ourselves with ambitious people that we
                  can help develop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
    </section>
  );
};

export default Services;
