import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Sfimpact = () => {
  useEffect(() => {
    const tickerTapeArr = document.querySelectorAll(".ticker__row");
    let tickerSpeed;
    let tickerInterval;
    const initialTickerSpeed = 4;

    function resizeTicker() {
      gsap.to(".ticker", {
        height: tickerTapeArr[0].offsetHeight * tickerTapeArr.length,
      });
      for (let i = 0; i < tickerTapeArr.length; i++) {
        gsap.to(tickerTapeArr[i], {
          top: i * tickerTapeArr[i].offsetHeight,
        });
      }
    }
    resizeTicker();
    // function initTickerTape() {
    // window.tickerTapeArr = document.getElementsByClassName("ticker__row");
    // resizeTicker();
    window.addEventListener("resize", resizeTicker);
    tickerSpeed = initialTickerSpeed;
    // window.addEventListener("scroll", (e) => {
    //   tickerSpeed = initialTickerSpeed + e * 2;
    //     console.log(e);
    // });
    for (let i = 0; i < tickerTapeArr.length; i++) {
      let tickerBlock = tickerTapeArr[i].children[0];
      //See how many spans are needed to fill the tape. Add 1
      let tickerDiv =
        Math.round(window.innerWidth / tickerBlock.offsetWidth) + 3;
      for (let j = 0; j < tickerDiv; j++) {
        tickerTapeArr[i].innerHTML += tickerBlock.outerHTML;
      }
    }
    gsap.to(".ticker__row__block", {
      y: 100,
    });

    setTimeout(() => {
      gsap.to(".ticker__row__block", {
        scrollTrigger: {
          trigger: ".sfimpact__banner",
          start: "top-=100 top",
          once: true,
        },

        y: 0,
        duration: 1.8,
        ease: "Power3.ease",
      });
    }, 500);

    tickerInterval = setInterval(() => {
      let innerW = window.innerWidth;
      let innerH = window.innerHeight;
      //For each of the ticker-tapes
      for (let i = 0; i < tickerTapeArr.length; i++) {
        let gbcrTicker = tickerTapeArr[i].getBoundingClientRect();

        if (gbcrTicker.top <= innerH + innerH / 10 && gbcrTicker.bottom >= 0) {
          let tickerRev = tickerTapeArr[i].dataset.reverse;
          let currX;

          // IIFE for return false of creating inner
          (function () {
            if (tickerRev === "true") {
              currX =
                gsap.getProperty(tickerTapeArr[i], "x") + tickerSpeed * 0.3;

              if (!(gbcrTicker.left > -10)) {
                return false;
              }
            } else {
              currX =
                gsap.getProperty(tickerTapeArr[i], "x") - tickerSpeed * 0.3;

              if (!(gbcrTicker.right < innerW)) {
                return false;
              }
            }

            tickerTapeArr[i].innerHTML +=
              tickerTapeArr[i].children[0].outerHTML;
          })();

          if (tickerRev === "true") {
            gsap.to(tickerTapeArr[i], {
              x: "+=" + tickerSpeed,
              duration: 0.7,
            });
            gsap.to(tickerTapeArr[i].querySelectorAll(".ticker__rot"), {
              rotate: "+=" + tickerSpeed * 4,
              duration: 0.7,
              repeat: -1,
            });
            gsap.to(tickerTapeArr[i].querySelectorAll(".ticker__rot--semi"), {
              rotate: (tickerSpeed - 1) * 2,
              duration: 0.5,
            });
          } else {
            gsap.to(tickerTapeArr[i], {
              x: "-=" + tickerSpeed,
              duration: 0.7,
            });
            gsap.to(tickerTapeArr[i].querySelectorAll(".ticker__rot"), {
              rotate: "-=" + tickerSpeed * 4,
              duration: 0.7,
              repeat: -1,
            });
            gsap.to(tickerTapeArr[i].querySelectorAll(".ticker__rot--semi"), {
              rotate: -(tickerSpeed - initialTickerSpeed) * 2,
              duration: 0.5,
            });
          }
        }
      }
    }, 90);
    // }
  }, []);
  return (
    <section className="sfimpact sfimpact--full" data-scroll-section="">
      <div className="sfimpact__banner">
        <div
          className="sfimpact__banner--img mobilePrallax"
          data-scroll=""
          data-scroll-speed={-2}
          data-scroll-direction="vertical"
        >
          <img
            src="https://halomedia.com/wp-content/uploads/2022/07/Rectangle-135.jpg"
            alt=""
            className="sfimpact__banner--img--desktop"
          />
          <img
            src="https://halomedia.com/wp-content/uploads/2022/07/2110050000001600082-2.jpg"
            alt=""
            className="sfimpact__banner--img--mobile"
          />
        </div>
      </div>
      <div className="sfimpact__text sfimpact--full__text">
        <h5 className="o_italic">
          With a laser focus on insights, we harness our rich history of
          storytelling and digital expertise to help our clients unlock uncommon
          growth despite an overcrowded and noisy digital world.
        </h5>
        <p className="fht">
          Utilizing a data-driven yet human-centered approach, Halo Collective
          is the hybrid solution that uses more than just AI to manage
          campaigns. We use our proprietary tools, deep insider knowledge, and
          long-standing relationships to meticulously curate our influencer
          roster as well as create stories that matter — and deliver measurable
          results.
        </p>
        <a
          href="https://www.instagram.com/wearehalocollective/"
          className="brandsInfo__textBlock--btn fht btn-pr"
        >
          <span className="btn-text link_white" data-title="View on Instagram">
            View on Instagram
          </span>
        </a>
        <div className="ticker">
          <div className="ticker__row" data-reverse="false">
            <div className="ticker__row__block">
              <h4>
                Brand Strategies
                <span>
                  <img
                    src="https://halomedia.com/wp-content/uploads/2022/07/Group-38.svg"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Influencer Insights
                <span>
                  <img
                    className="ticker__rot"
                    src="https://halomedia.com/wp-content/uploads/2022/07/star-black.fe4462b0-6.svg"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Campaign Management
                <span>
                  <img
                    className="ticker__rot--semi"
                    src="https://halomedia.com/wp-content/uploads/2022/07/smile-1.svg"
                    alt=""
                  />
                </span>
              </h4>
            </div>
          </div>
          <div className="ticker__row" data-reverse="true">
            <div className="ticker__row__block">
              <h4>
                Content Production
                <span>
                  <img
                    src="https://halomedia.com/wp-content/uploads/2022/07/smile-1.svg"
                    className="ticker__rot--semi"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Talent Casting
                <span>
                  <img
                    className="ticker__rot"
                    src="https://halomedia.com/wp-content/uploads/2022/07/star-black.fe4462b0-6.svg"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Campaign Tracking
                <span>
                  <img
                    src="https://halomedia.com/wp-content/uploads/2022/07/Group-38.svg"
                    alt=""
                  />
                </span>
              </h4>
            </div>
          </div>
          <div className="ticker__row" data-reverse="false">
            <div className="ticker__row__block">
              <h4>
                Curated Experiences
                <span>
                  <img
                    className="ticker__rot"
                    src="https://halomedia.com/wp-content/uploads/2022/07/star-black.fe4462b0-6.svg"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Budget Planning
                <span>
                  <img
                    src="https://halomedia.com/wp-content/uploads/2022/07/smile-1.svg"
                    className="ticker__rot--semi"
                    alt=""
                  />
                </span>
              </h4>
              <h4>
                Insights + Measurement
                <span>
                  <img
                    src="https://halomedia.com/wp-content/uploads/2022/07/Group-38.svg"
                    alt=""
                  />
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sfimpact;
