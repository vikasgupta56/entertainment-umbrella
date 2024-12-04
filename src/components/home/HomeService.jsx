import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import React, { useEffect } from "react";
import CustomEase from "gsap/dist/CustomEase";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  CustomEase
  //   SplitText,
  //   TextPlugin,
  //   Draggable
);
const HomeService = () => {
  useGSAP(() => {
    CustomEase.create(
      "oho-ease",
      "M0,0,C0.173,0,0.242,0.036,0.322,0.13,0.401,0.223,0.449,0.367,0.502,0.506,0.546,0.622,0.62,0.824,0.726,0.916,0.799,0.98,0.869,1,1,1"
    );
    let textSpinEls = gsap.utils.toArray(".text-spin");
    textSpinEls.forEach((textSpinEl) => {
      let trigger = textSpinEl.querySelector("a");
      let orig = textSpinEl.querySelector(".orig");
      let clone = textSpinEl.querySelector(".clone");
      let fontChildSplitOrig = new SplitText(orig, {
        type: "chars",
        linesClass: "split-child",
      });
      let fontChildSplitClone = new SplitText(clone, {
        type: "chars",
        linesClass: "split-child",
      });
      let textSpinAnim = gsap
        .timeline({ paused: !0 })
        .to(fontChildSplitOrig.chars, {
          duration: 0.7,
          rotationX: 90,
          transformOrigin: "0 100%",
          ease: "oho-ease",
          scale: 0.93,
          stagger: 0.06,
        })
        .to(
          fontChildSplitClone.chars,
          {
            duration: 0.7,
            rotationX: 0,
            transformOrigin: "100% 0",
            ease: "oho-ease",
            stagger: 0.06,
          },
          "<0.2"
        );
      if (is_touch_enabled()) {
      } else {
        trigger.addEventListener("mouseenter", (event) => {
          textSpinAnim.play();
        });
        trigger.addEventListener("mouseleave", (event) => {
          textSpinAnim.reverse();
        });
      }
    });

    function horizonSlider() {
      let pathScroller;
      let pathScrollerMobile;
      let panel;
      let panelMobile;
      let totalWidth;
      let totalHeight;
      let scrollTriggerOptions;

      // Query selectors for desktop
      pathScroller = document.querySelector(".horizon-slider-wrap--desktop");
      panel = pathScroller.querySelector(".panel");
      const circle = document.querySelector(".theCircle");
      const circleShadow = document.querySelector(".theCircleShadow");
      const path = document.querySelector(".theLine");
      const circleGroup = [circle, circleShadow];
      const textElements = panel.querySelectorAll("text");

      // Set initial opacity of text elements
      gsap.set(textElements, { opacity: 0.2 });
      gsap.set(textElements[0], { opacity: 1 });

      // Query selectors for mobile
      pathScrollerMobile = document.querySelector(
        ".horizon-slider-wrap--mobile"
      );
      panelMobile = pathScrollerMobile.querySelector(".panel");
      const circleMobile = pathScrollerMobile.querySelector(".theCircle");
      const circleShadowMobile =
        pathScrollerMobile.querySelector(".theCircleShadow");
      const pathMobile = pathScrollerMobile.querySelector(".theLine");
      const circleGroupMobile = [circleMobile, circleShadowMobile];
      const textElementsMobile = panelMobile.querySelectorAll(".text");

      gsap.set(textElementsMobile, { opacity: 0.2 });
      gsap.set(textElementsMobile[0], { opacity: 1 });

      function init() {
        gsap.to(circleGroup, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".horizon-slider-wrap",
            start: "top 20%",
            end: () => `${totalWidth * 0.7} 70vw`,
            scrub: 1.2,
            onUpdate: (self) => {
              let circleX =
                circle.getBoundingClientRect().left +
                circle.getBoundingClientRect().width / 2;
              textElements.forEach((text) => {
                let textX =
                  text.getBoundingClientRect().left +
                  text.getBoundingClientRect().width / 2;
                let distanceX = Math.abs(circleX - textX);
                let opacity = Math.max(
                  0.2,
                  1 - distanceX / (window.innerWidth / 2.2)
                );
                gsap.to(text, { opacity: opacity, immediateRender: !1 });
              });
            },
            markers: !1,
          },
        });
        totalWidth = panel.offsetWidth;
        scrollTriggerOptions = {
          trigger: pathScroller,
          start: "top 10%",
          end: () => `${totalWidth * 0.45} 70vw`,
          pin: !0,
          pinSpacing: !0,
          scrub: !0,
          invalidateOnRefresh: !0,
        };
        gsap.to(pathScroller, {
          scrollTrigger: scrollTriggerOptions,
          x: () => (totalWidth - document.documentElement.clientWidth) * -1,
          ease: "none",
        });

        //mobile
        totalHeight = panelMobile.offsetHeight;
        gsap.to(circleGroupMobile, {
          motionPath: {
            path: pathMobile,
            align: pathMobile,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          ease: "none",
          scrollTrigger: {
            trigger: pathScrollerMobile,
            start: "top 20%",
            end: () => `${totalHeight * 0.7} 70vw`,
            scrub: 1.2,
            onUpdate: (self) => {
              let circleX =
                circleMobile.getBoundingClientRect().top +
                circleMobile.getBoundingClientRect().height / 2;
              textElementsMobile.forEach((text) => {
                let textX =
                  text.getBoundingClientRect().top +
                  text.getBoundingClientRect().height / 2;
                let distanceX = Math.abs(circleX - textX);
                let opacity = Math.max(
                  0.2,
                  1 - distanceX / (window.innerHeight / 2.2)
                );
                gsap.to(text, { opacity: opacity, immediateRender: !1 });
              });
            },
            markers: !1,
          },
        });
      }
      function reinit() {
        gsap.set([pathScroller, panel, pathScrollerMobile, panelMobile], {
          clearProps: "all",
        });
        totalWidth = panel.offsetWidth;
        totalHeight = panelMobile.offsetHeight;
        init();
      }

      function handleResize() {
        reinit();
        ScrollTrigger.refresh(true);
      }

      const debouncedResize = debounce(handleResize, 300);

      if (pathScroller) {
        init();

        if (window.matchMedia("(min-width: 80em)").matches) {
          window.addEventListener("resize", debouncedResize);
        }
      }

      function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
      }

      return () => {
        // Cleanup on component unmount
        if (window.matchMedia("(min-width: 80em)").matches) {
          window.removeEventListener("resize", debouncedResize);
        }
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
      };
    }

    horizonSlider();
  });

  return (
    <div id="content" className="main__inner">
      <article>
        <section className="sec-wrap">
          <div className="sec-wrap__inner">
            <div className="sec-wrap_text_grid-wrap">
              <div className="sec-wrap_text_cntr">
                <h1 className="sec_wrap_heading">Our Services</h1>
                <p className="sec_wrap_para">
                  As an owner-managed agency, we have been concentrating on
                  creating great digital products for eight years.
                  <br />
                  <br />
                  We specifically address the needs of our target groups and
                  question existing solutions. Startups, SMEs, foundations and
                  corporations across Switzerland trust us.
                </p>
              </div>
            </div>
            {/* <div className="service_cat-wrap">
              <div className="service_cat_box">
                <h3 className="sec_wrap_para_p fweight--regular fcolor--grey sec_wrap_heading">
                  Strategie
                </h3>
                <ul className="plain">
                  <li className="sec_wrap_para">Workshops</li>
                  <li className="sec_wrap_para">Brand Strategie</li>
                  <li className="sec_wrap_para">Naming</li>
                </ul>
              </div>
              <div className="service_cat_box">
                <h3 className="sec_wrap_para_p fweight--regular fcolor--grey sec_wrap_heading">
                  Design
                </h3>
                <ul className="plain">
                  <li className="sec_wrap_para">Corporate Design</li>
                  <li className="sec_wrap_para">Interface Design</li>
                  <li className="sec_wrap_para">Prototyping</li>
                </ul>
              </div>
              <div className="service_cat_box">
                <h3 className="sec_wrap_para_p fweight--regular fcolor--grey sec_wrap_heading">
                  Webentwicklung
                </h3>
                <ul className="plain">
                  <li className="sec_wrap_para">Programmierung</li>
                  <li className="sec_wrap_para">Generative AI / LLM</li>
                  <li className="sec_wrap_para">Usability Testing</li>
                  <li className="sec_wrap_para">Wartung &amp; Betreuung</li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* <div className="sec-wrap__inner horizon-slider-wrap--trigger">
            <h2 className="sec_wrap_heading">Our way of working</h2>
          </div> */}
          <div className="sec-wrap__inner horizon-slider-wrap horizon-slider-wrap--desktop">
            <div className="panel">
              <svg
                version="1.1"
                className="journeyPath--desktop"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 3501.8 1885"
                style={{ enableBackground: "new 0 0 3501.8 1885" }}
                xmlSpace="preserve"
              >
                <defs>
                  <filter
                    id="shadow"
                    x="-5000%"
                    y="-5000%"
                    width="10000%"
                    height="10000%"
                  >
                    <feDropShadow
                      dx={0}
                      dy={0}
                      stdDeviation={200}
                      floodColor="#ffffff"
                      floodOpacity={1}
                    />
                  </filter>
                  <radialGradient
                    id="whiteToTransparent"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="20%"
                      style={{ stopColor: "white", stopOpacity: "0.3" }}
                    />
                    <stop
                      offset="70%"
                      style={{ stopColor: "white", stopOpacity: 0 }}
                    />
                  </radialGradient>
                </defs>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".jp1{fill:none;stroke:#292929;stroke-width:26;stroke-miterlimit:10;stroke-linecap:round;}.jp3{fill:#FFFFFF;}.jp4{font-size:38px;}.jp6{font-size:18px;}",
                  }}
                />
                <g>
                  <path
                    className="theLine jp1"
                    d="M70.6,636C145,540.2,246,457.9,379.3,443.2c65.6-6.4,134.6,10.4,192.6,39.4c20.9,10.4,40.8,22.5,59.6,36
		c49.9,35.9,82,75.4,125.4,112.4c42.3,36.4,96.1,67.9,150.4,85.5c170.7,59,270.4-69.1,352.7-227.9c30.2-56.4,53.3-114.8,91.2-164.9
		c97.3-130.1,301.5-137.1,435.1-25.7c46.4,37.9,85.6,87.5,130.9,126.8c144.5,132,317.3,42.2,445.7-65.5
		c39.8-33.2,73.1-68.9,109.6-104.6c129.4-132.2,293.2-187,461.6-155.6c86.3,15.4,161.9,57,227.4,114
		c274.5,235.8,302.7,652.8,72.1,909.9c-308.6,312.8-549.9,161.2-901.2,266.8c-193,58-161.2,47.4-368.1,136.8"
                  />
                </g>
                <circle
                  className="theCircle jp3"
                  cx="673.1"
                  cy="530.9"
                  r={14}
                  filter="url(#shadow)"
                  data-svg-origin="659.0999755859375 516.9000244140625"
                  transform="matrix(1,0,0,1,-561.97654,57.41538)"
                  style={{}}
                />
                <circle
                  style={{ opacity: "0.2" }}
                  className="theCircleShadow"
                  cx="693.1"
                  cy="530.9"
                  r={150}
                  fill="url(#whiteToTransparent)"
                  data-svg-origin="543.0999755859375 380.9000244140625"
                  transform="matrix(1,0,0,1,-581.97654,57.41537)"
                />
                <text
                  transform="matrix(1 0 0 1 230.7241 182.4585)"
                  style={{ opacity: "0.6778" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4">
                    Film and Photo Production
                  </tspan>
                  <tspan x={0} y="41.6" className="jp2 jp5 jp6">
                    Lights, camera, action! From conception to the final cut,
                  </tspan>
                  <tspan x={0} y="62.4" className="jp2 jp5 jp6">
                    we handle everything in filmmaking and photoshoots.
                  </tspan>
                  <tspan x={0} y="83.2" className="jp2 jp5 jp6">
                    From corporate videos, music videos, and digital content,
                  </tspan>
                  <tspan x={0} y={104} className="jp2 jp5 jp6">
                    our team exclusively creates impressive visuals
                  </tspan>
                  <tspan x={0} y={125} className="jp2 jp5 jp6">
                    We will tell your brand's story with imagination
                  </tspan>
                  <tspan x={0} y={145} className="jp2 jp5 jp6">
                    and attention to detail.
                  </tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 850.5525 327.1489)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4">
                    Creative Development
                    {/* &amp; */}
                  </tspan>
                  <tspan x={0} y="45.1" className="jp2 jp5 jp6">
                    Great stories begin with great ideas
                  </tspan>
                  <tspan x={0} y="65.6" className="jp2 jp5 jp6">
                    We work hand in hand with our
                  </tspan>
                  <tspan x={0} y="85.4" className="jp2 jp5 jp6">
                    clients to develop scripts
                  </tspan>
                  <tspan x={0} y="128.2" className="jp2 jp5 jp6">
                    storyboards, and ideas that successfully
                  </tspan>
                  <tspan x={0} y={149} className="jp2 jp5 jp6">
                    hit the mark every time.
                  </tspan>
                  {/* <tspan x={0} y={170} className="jp2 jp5 jp6">
                    Projektes
                  </tspan> */}
                </text>
                <text
                  transform="matrix(1 0 0 1 1413.1023 443.2568)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4">
                    Celebrity Endorsements:
                  </tspan>
                  <tspan x={0} y="41.6" className="jp2 jp5 jp6">
                    Power your movie or campaign with star power.
                  </tspan>
                  <tspan x={0} y="62.4" className="jp2 jp5 jp6">
                    We have rightly partnered with high-profile
                  </tspan>
                  <tspan x={0} y="83.2" className="jp2 jp5 jp6">
                    celebrities like Alia Bhatt,Ranbir Kapoor,
                  </tspan>
                  <tspan x={0} y={104} className="jp2 jp5 jp6">
                    and SRK and MANY MANY more to increase the
                  </tspan>
                  <tspan x={0} y={125} className="jp2 jp5 jp6">
                    reach of your film Our network performs the
                  </tspan>
                  <tspan x={0} y={146} className="jp2 jp5 jp6">
                    right fit to make an impact on your work.
                  </tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 1917.6821 113.2364)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4">
                    Casting
                  </tspan>
                  <tspan x={0} y="41.6" className="jp2 jp5 jp6">
                    Finding the right people to bring
                  </tspan>
                  <tspan x={0} y="62.4" className="jp2 jp5 jp6">
                    your vision to life is everything.
                  </tspan>
                  <tspan x={0} y="83.2" className="jp2 jp5 jp6">
                    We take pride in our casting services,
                  </tspan>
                  <tspan x={0} y={104} className="jp2 jp5 jp6">
                    making sure your film or campaign has
                  </tspan>
                  <tspan x={0} y={125} className="jp2 jp5 jp6">
                    the perfect talent to make it shine.
                  </tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 2690.7517 208.5494)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4">
                    Post-Production
                  </tspan>
                  <tspan x={0} y="41.6" className="jp2 jp5 jp6">
                    That's where the magic happens—editing,
                  </tspan>
                  <tspan x={0} y="62.4" className="jp2 jp5 jp6">
                    sound design, visual effects, and color
                  </tspan>
                  <tspan x={0} y="83.2" className="jp2 jp5 jp6">
                    grading. We ensure every project looks
                  </tspan>
                  <tspan x={0} y={104} className="jp2 jp5 jp6">
                    and sounds great.
                  </tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 2849.9114 503.7327)"
                  //   style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4 jp6">
                    ( Mr. and Mrs. Events )
                  </tspan>
                  <tspan x={0} y="35" className="jp2 jp4">
                    Conceptualization of Events:
                  </tspan>
                  <tspan x={0} y="65.6" className="jp2 jp5 jp6">
                    We dream big so that you grow.
                  </tspan>
                  <tspan x={0} y="85.4" className="jp2 jp5 jp6">
                    Our team creates different fashions of
                  </tspan>
                  <tspan x={0} y="105.2" className="jp2 jp5 jp6">
                    event themes and concepts tailored to what
                  </tspan>
                  <tspan x={0} y={125} className="jp2 jp5 jp6">
                    you have in mind for the perfect execution.
                  </tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 2849.9114 815.5708)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4 jp6">
                    ( Mr. and Mrs. Events )
                  </tspan>
                  <tspan x={0} y="40" className="jp2 jp4">
                    Event Management:
                  </tspan>
                  <tspan x={0} y="75.6" className="jp2 jp5 jp6">
                    We organize the logistics behind every event.
                  </tspan>
                  <tspan x={0} y="96.4" className="jp2 jp5 jp6">
                    From planning to execution, we pay attention to
                  </tspan>
                  <tspan x={0} y="117.2" className="jp2 jp5 jp6">
                    Versprechen und dein Gewinn.
                  </tspan>
                  <tspan x={0} y={149} className="jp2 jp5 jp6">
                    every minute detail to ensure that
                  </tspan>
                  <tspan x={0} y={170} className="jp2 jp5 jp6">
                    your event is smooth and flawless.
                  </tspan>
                  {/* <tspan x={0} y={190} className="jp2 jp5 jp6">
                    Projektes essenziell.
                  </tspan> */}
                  {/* </tspan> */}
                </text>
                <text
                  transform="matrix(1 0 0 1 2150.9211 1150.5708)"
                  style={{ opacity: "0.2" }}
                >
                  <tspan x={0} y={0} className="jp2 jp4 jp6">
                    ( Mr. and Mrs. Events )
                  </tspan>
                  <tspan x={0} y="40" className="jp2 jp4">
                    Production Services:
                  </tspan>
                  <tspan x={0} y="75.6" className="jp2 jp5 jp6">
                    We bring the WOW Factore with high-quality
                  </tspan>
                  <tspan x={0} y="96.4" className="jp2 jp5 jp6">
                    production—high-tech lighting,
                  </tspan>
                  <tspan x={0} y="117.2" className="jp2 jp5 jp6">
                    sound, and stage design
                  </tspan>
                  {/* <tspan x={0} y={149} className="jp2 jp5 jp6">
                    every minute detail to ensure that
                  </tspan>
                  <tspan x={0} y={170} className="jp2 jp5 jp6">
                    your event is smooth and flawless.
                  </tspan> */}
                  {/* </tspan> */}
                </text>
              </svg>
            </div>
          </div>
          <div className="sec-wrap__inner horizon-slider-wrap horizon-slider-wrap--mobile">
            <div className="panel">
              <svg
                version="1.1"
                className="journeyPath--mobile"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 814.6 3223.2"
                // style={{ enableBackground: "new 0 0 814.6 3223.2" }}
                xmlSpace="preserve"
              >
                <defs>
                  <filter
                    id="shadowMobile"
                    x="-5000%"
                    y="-5000%"
                    width="10000%"
                    height="10000%"
                  >
                    <feDropShadow
                      dx={0}
                      dy={0}
                      stdDeviation={200}
                      floodColor="#ffffff"
                      floodOpacity={1}
                    />
                  </filter>
                  <radialGradient
                    id="whiteToTransparentMobile"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="20%"
                      style={{ stopColor: "white", stopOpacity: "0.3" }}
                    />
                    <stop
                      offset="70%"
                      style={{ stopColor: "white", stopOpacity: 0 }}
                    />
                  </radialGradient>
                </defs>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.jp1{fill:none;stroke:#292929;stroke-width:26;stroke-miterlimit:10;stroke-linecap:round;}\n\t.jp3{fill:#FFFFFF;}\n\t.jp4{font-size:38px;}\n\t.jp6{font-size:18px;}\n",
                  }}
                />
                <g>
                  <path
                    className="theLine jp1"
                    d="M121.7,92.2c12.1,47.8,26.9,96,58.5,134.5c29,35.6,64.5,63,102.6,90.3c52.7,37.2,109.8,69.9,163.6,104
		C612.2,520.1,746,695.7,698.3,897.4c-21.3,91.7-82.7,166.9-161.2,217.5c-65.4,44-143.6,71-211.2,110.7
		c-26.3,15.8-51.4,34.5-71.1,58.2c-36,41.7-48.3,100.5-28.1,151.7c23.1,60.3,76.1,101.8,129.4,136.5c55.9,36,115.7,65.2,173.7,97
		c43.7,24.2,86,50.7,119.6,87.5c134.7,149.5,86.1,433.3,9.6,611.7c-28,63.6-64.3,121.7-112,172.7
		c-56.1,60.5-129.9,117.4-187.5,174.7c-126.5,120.3-164.3,251.5-205.4,416.1"
                  />
                </g>
                <circle
                  className="theCircle jp3"
                  cx="673.1"
                  cy="530.9"
                  r={14}
                  filter="url(#shadowMobile)"
                />
                <circle
                  style={{ opacity: "0.2" }}
                  className="theCircleShadow"
                  cx="693.1"
                  cy="530.9"
                  r={150}
                  fill="url(#whiteToTransparentMobile)"
                />
                <text
                  transform="matrix(1 0 0 1 306.5023 119.4366)"
                  className="jp2 jp4"
                >
                  Verstehen
                </text>
                <text
                  transform="matrix(1 0 0 1 306.5023 161.0367)"
                  className="jp2 jp5 jp6"
                >
                  Wir setzen uns intensiv mit den
                </text>
                <text
                  transform="matrix(1 0 0 1 306.5023 181.8368)"
                  className="jp2 jp5 jp6"
                >
                  Menschen auseinander, für die wir
                </text>
                <text
                  transform="matrix(1 0 0 1 306.5023 202.6367)"
                  className="jp2 jp5 jp6"
                >
                  arbeiten. Durch Zuhören und
                </text>
                <text
                  transform="matrix(1 0 0 1 306.5023 223.4366)"
                  className="jp2 jp5 jp6"
                >
                  Beobachten lernen wir, was wirklich
                </text>
                <text
                  transform="matrix(1 0 0 1 306.5023 244.7765)"
                  className="jp2 jp5 jp6"
                >
                  benötigt wird.
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 501.7864)"
                  className="jp2 jp4"
                >
                  Ideenfindung &amp;
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 546.8864)"
                  className="jp2 jp4"
                >
                  Konzept
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 588.3864)"
                  className="jp2 jp5 jp6"
                >
                  Im Gespräch oder Workshop
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 609.1864)"
                  className="jp2 jp5 jp6"
                >
                  finalisieren wir gemeinsam das{" "}
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 629.9865)"
                  className="jp2 jp5 jp6"
                >
                  Konzept und erstellen eine realistische
                </text>
                <text
                  transform="matrix(1 0 0 1 101.9181 650.7864)"
                  className="jp2 jp5 jp6"
                >
                  Roadmap deines Projektes.
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 844.9247)"
                  className="jp2 jp4"
                >
                  Design
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 886.5245)"
                  className="jp2 jp5 jp6"
                >
                  Mit Leidenschaft formen wir
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 907.3246)"
                  className="jp2 jp5 jp6"
                >
                  Prototypen und Entwürfe, die nicht nur
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 928.1246)"
                  className="jp2 jp5 jp6"
                >
                  funktionieren, sondern begeistern.
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 948.9247)"
                  className="jp2 jp5 jp6"
                >
                  Unser Designprozess ist kreativ,
                </text>
                <text
                  transform="matrix(1 0 0 1 173.7538 969.6222)"
                  className="jp2 jp5 jp6"
                >
                  dynamisch und immer am Puls der Zeit.
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1358.7157)"
                  className="jp2 jp4"
                >
                  Realisation
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1400.3158)"
                  className="jp2 jp5 jp6"
                >
                  In kurzen Arbeitsphasen, den
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1421.1157)"
                  className="jp2 jp5 jp6"
                >
                  sogenannten Sprints, entwickeln wir das
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1441.9158)"
                  className="jp2 jp5 jp6"
                >
                  Produkt Stück für Stück. Dabei bleiben
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1462.7157)"
                  className="jp2 jp5 jp6"
                >
                  wir flexibel, um Änderungen einfach
                </text>
                <text
                  transform="matrix(1 0 0 1 356.7092 1484.8088)"
                  className="jp2 jp5 jp6"
                >
                  einarbeiten zu können.
                </text>
                <text
                  transform="matrix(1 0 0 1 129.5582 1710.4465)"
                  className="jp2 jp4"
                >
                  Testing
                </text>
                <text
                  transform="matrix(1 0 0 1 129.5582 1752.0465)"
                  className="jp2 jp5 jp6"
                >
                  Wir prüfen, was wir entwickelt haben,
                </text>
                <text
                  transform="matrix(1 0 0 1 129.5582 1772.8466)"
                  className="jp2 jp5 jp6"
                >
                  und zwar immer wieder. So finden und{" "}
                </text>
                <text
                  transform="matrix(1 0 0 1 129.5582 1793.6465)"
                  className="jp2 jp5 jp6"
                >
                  beheben wir Schwachstellen frühzeitig und
                </text>
                <text
                  transform="matrix(1 0 0 1 129.5582 1814.4465)"
                  className="jp2 jp5 jp6"
                >
                  stellen sicher, dass alles gut funktioniert.
                </text>
                <text
                  transform="matrix(1 0 0 1 241.0204 2020.7169)"
                  className="jp2 jp4"
                >
                  Launch
                </text>
                <text
                  transform="matrix(1 0 0 1 241.0204 2062.3169)"
                  className="jp2 jp5 jp6"
                >
                  Grund zum Feiern!
                </text>
                <text
                  transform="matrix(1 0 0 1 241.0204 2083.1169)"
                  className="jp2 jp5 jp6"
                >
                  Das fertige Produkt geht an den Start.
                </text>
                <text
                  transform="matrix(1 0 0 1 241.0204 2103.917)"
                  className="jp2 jp5 jp6"
                >
                  Wir sorgen dafür, dass dabei alles{" "}
                </text>
                <text
                  transform="matrix(1 0 0 1 241.0204 2124.717)"
                  className="jp2 jp5 jp6"
                >
                  reibungslos abläuft.
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2333.1143)"
                  className="jp2 jp4"
                >
                  Wartung &amp;
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2378.2141)"
                  className="jp2 jp4"
                >
                  Optimierung
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2419.7141)"
                  className="jp2 jp5 jp6"
                >
                  Eine langfristige Begleitung deiner Marke
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2440.5142)"
                  className="jp2 jp5 jp6"
                >
                  und deiner Projekte ist unser
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2461.3142)"
                  className="jp2 jp5 jp6"
                >
                  Versprechen und dein Gewinn.
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2482.1143)"
                  className="jp2 jp5 jp6"
                >
                  Stetige Weiterentwicklung, Verbesserung
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2504.1602)"
                  className="jp2 jp5 jp6"
                >
                  und Analyse ist für den Erfolg jedes{" "}
                </text>
                <text
                  transform="matrix(1 0 0 1 129.27 2526.1338)"
                  className="jp2 jp5 jp6"
                >
                  Projektes essenziell.
                </text>
              </svg>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HomeService;
