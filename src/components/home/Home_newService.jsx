import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Home_newService = () => {
  // useEffect(() => {
  //   const quotes = document.querySelectorAll(".quote");

  //   function setupSplits() {
  //     quotes.forEach((quote) => {
  //       // Reset if needed
  //       if (quote.anim) {
  //         quote.anim.progress(1).kill();
  //         quote.split.revert();
  //       }

  //       quote.split = new SplitText(quote, {
  //         type: "lines,words",
  //         linesClass: "split-line",
  //       });

  //       // Set up the anim
  //       quote.anim = gsap.from(quote.split.words, {
  //         scrollTrigger: {
  //           trigger: quote,
  //           toggleActions: "restart pause resume reverse",
  //           start: "top 50%",
  //           markers: { startColor: "#fff", endColor: "transparent" },
  //           // once: true,
  //         },
  //         ease: "slow",
  //         duration: 0.5,
  //         yPercent: 100,
  //         stagger: 0.01,
  //       });
  //     });
  //   }

  //   ScrollTrigger.addEventListener("refresh", setupSplits);
  //   setupSplits();
  // }, []);

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
              stagger: 0.05,
              delay: i * 0.3,
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
      <div className="_services p-small" data-scroll data-scroll-speed=".3">
        <div className="s-indented-title_wrapper quotetriggerCntr">
          <div className="s-indented-title_cntr quotetrigger">
            <h2>What we do</h2>
            <p className="s-indented-title_cntr_para">
              No event is big or small for us, be it a music concert, bar night,
              brand activation, corporate events, a wedding, or private parties.
            </p>
            {/* <p className="quote">
              {" "}
              No event is big or small for us, be it a music concert, bar night,
              brand activation, corporate events, a wedding, or private parties.
            </p> */}
          </div>
        </div>
        <div className="groups g-table">
          <ul>
            <li className="quotetriggerCntr">
              <h3 className="quotetrigger">Film & Media:</h3>{" "}
              <ul className="opacity-40 quotetrigger">
                <li className="service_hover_link">
                  <span className="links2">Film Production</span>
                </li>
                <li className="service_hover_link">
                  {" "}
                  <span className="links2">Photography and Stills</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Scripting and Storyboarding</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Celebrity Endorsements</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Casting</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Post-Production</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Behind-The-Scenes Content</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Animation and Graphic Design</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Video Marketing Content</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Documentary Filming</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Music Video Production</span>
                </li>
                {/* <li>Print</li>
                <li>Editorial design</li>
                <li>Type design</li> */}
              </ul>
            </li>
            <li className="quotetriggerCntr">
              <h3 className="quotetrigger">Event Services:</h3>{" "}
              <ul className="opacity-40 quotetrigger">
                <li className="service_hover_link">
                  <span className="links2">
                    Event Design & Conceptualization
                  </span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Venue & Logistics Management</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Talent & Artist Coordination</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Guest & VIP Services</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Branding & Event Assets</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Live Production & Coverage</span>
                </li>
                <li>
                  <span className="links2">Corporate & Private Events</span>
                </li>
                <li>
                  <span className="links2">Security & Risk Management</span>
                </li>
                {/* <li>Digital Publishing</li> */}
              </ul>
            </li>
            <li className="quotetriggerCntr">
              <h3 className="quotetrigger">Types of Events:</h3>{" "}
              <ul className="opacity-40 quotetrigger">
                <li className="service_hover_link">
                  <span className="links2">Music concerts, Bar nights</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Branded Events</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">
                    Wedding Planning and Coordination
                  </span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Private Parties and Gala Event</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Fashion Shows</span>
                </li>
                <li className="service_hover_link">
                  <span className="links2">Product Launches</span>
                </li>
                {/* <li>Video direction</li> */}
                {/* <li>Campaign concept</li> */}
              </ul>
            </li>
            {/* <li>
              <h3>Business Design</h3>{" "}
              <ul className="opacity-40">
                <li>Concept development</li>
                <li>Research and strategy</li>
                <li>Communication strategy</li>
                <li>Design strategy</li>
                <li>Digital and experience strategy</li>
                <li>Business innovation and transformation</li>
                <li>Brand platforms and strategy</li>
                <li>Brand portfolio strategy</li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home_newService;
