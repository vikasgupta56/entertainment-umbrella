import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Image from "next/image";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Logos = () => {
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
    <div>
      <section className="brands quotetriggerCntr">
        <div className="full-brands__section full-brands__clients once-inview">
          <div className="">
            <h2 className="full-brands__title full-brands__clients__title once-inview quotetrigger">
              SELECTED BRANDS
            </h2>
            <h4 className="full-brands__para quotetrigger">
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
                src="/assets/images/RangeMedia/Logos/dhamaka_record_logo.png"
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
    </div>
  );
};

export default Logos;
