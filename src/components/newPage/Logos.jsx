import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div>
      <section className="brands">
        <div className="full-brands__section full-brands__clients once-inview">
          <div className="">
            <h2 className="full-brands__title full-brands__clients__title once-inview">
              SELECTED BRANDS
            </h2>
            <h4 className="full-brands__para">
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
                width={1000}
                height={1000}
                src="/assets/images/RangeMedia/Logos/Afleabythetree.png"
              ></Image>
            </figure>
            <figure className="full-brands__section__item">
              <Image
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
    </div>
  );
};

export default Logos;
