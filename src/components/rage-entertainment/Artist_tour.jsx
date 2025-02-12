import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
const Artist_tour = () => {
  useGSAP(() => {
    if (!window.matchMedia("(max-width: 992px)").matches) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Artist_tour",
          start: "top 0%",
          end: "top -400%",
          scrub: 2,
          pin: !0,
        },
      });
      tl.to(".Artist_tour_center_title", {
        opacity: 0,
        duration: 1,
      });
      tl.to(".Artist_tour_left_imageCntr", {
        y: "0%",
        stagger: 0.2,
        duration: 1,
      })
        .to(
          ".Artist_tour_image", // Target all elements with the same class
          {
            x: (index, target, targets) => {
              // Set custom x values for each image based on its index
              if (index === 0) {
                return "200%"; // First image
              } else if (index === 1) {
                return "100%"; // Second image
              } else if (index === 2) {
                return "0%"; // Third image
              }
              return "0%"; // Default if there are more than 3 images
            },
            duration: 2, // Duration for the horizontal movement
            onStart: function () {
              // Dynamically set z-index for all images, in decreasing order
              this.targets().forEach((target, index, targets) => {
                gsap.set(target, { zIndex: targets.length - index });
              });
            },
          },
          "a" // All images start moving at the same time
        )
        //   .to(
        //     ".st",
        //     {
        //       opacity: 0,
        //       duration: 0,
        //     },
        //     "a"
        //   )
        .to(
          ".Artist_tour_text-wrap h1",
          {
            y: 0,
            stagger: 0.2,
            duration: 1,
            delay: 0.5,
          },
          "a"
        )
        .to(
          ".learn_more_text_cntr, .Artist_tour-middleCntr,.Artist_tour_btm_text",
          {
            opacity: 1,
            duration: 0.5,
            delay: -0.2,
          }
        )
        .to(
          ".defl",
          {
            scale: 1.2,
            duration: 1,
          },
          "b"
        )
        .to(
          ".tour_image.im-1",
          {
            top: 0,
            duration: 1,
          },
          "b"
        )
        .to(
          "#count",
          {
            y: "-100%",
            duration: 1,
          },
          "b"
        )
        .to(
          ".t-1",
          {
            opacity: 0.4,
            duration: 0.3,
          },
          "b"
        )
        .to(
          ".t-2",
          {
            opacity: 1,
            duration: 0.3,
          },
          "b"
        )
        .to(
          ".tour_image.im-1",
          {
            scale: 1.2,
            duration: 1,
          },
          "c"
        )
        .to(
          ".tour_image.im-2",
          {
            top: 0,
            duration: 1,
          },
          "c"
        )
        .to(
          "#count",
          {
            y: "-200%",
            duration: 1,
          },
          "c"
        )
        .to(
          ".t-2",
          {
            opacity: 0.4,
            duration: 0.3,
          },
          "c"
        )
        .to(
          ".t-3",
          {
            opacity: 1,
            duration: 0.3,
          },
          "c"
        )
        .to(
          ".tour_image.im-2",
          {
            scale: 1.2,
            duration: 1,
          },
          "d"
        )
        .to(
          ".tour_image.im-3",
          {
            top: 0,
            duration: 1,
          },
          "d"
        )
        .to(
          "#count",
          {
            y: "-300%",
            duration: 1,
          },
          "d"
        )
        .to(
          ".t-3",
          {
            opacity: 0.4,
            duration: 0.3,
          },
          "d"
        )
        .to(
          ".t-4",
          {
            opacity: 1,
            duration: 0.3,
          },
          "d"
        )
        .to(
          ".tour_image.im-3",
          {
            scale: 1.2,
            duration: 1,
          },
          "e"
        )
        .to(
          ".tour_image.im-4",
          {
            top: 0,
            duration: 1,
          },
          "e"
        )
        .to(
          "#count",
          {
            y: "-400%",
            duration: 1,
          },
          "e"
        )
        .to(
          ".t-4",
          {
            opacity: 0.4,
            duration: 0.3,
          },
          "e"
        )
        .to(
          ".t-5",
          {
            opacity: 1,
            duration: 0.3,
          },
          "e"
        )
        .to(
          ".tour_image.im-4",
          {
            scale: 1.2,
            duration: 1,
          },
          "f"
        )
        .to(
          ".tour_image.im-5",
          {
            top: 0,
            duration: 1,
          },
          "f"
        )
        .to(
          "#count",
          {
            y: "-500%",
            duration: 1,
          },
          "f"
        )
        .to(
          ".t-5",
          {
            opacity: 0.4,
            duration: 0.3,
          },
          "f"
        )
        .to(
          ".t-6",
          {
            opacity: 1,
            duration: 0.3,
          },
          "f"
        );
    }
  });
  return (
    <>
      <div className="Artist_tour">
        <h1 className="Artist_tour_center_title">International Artist</h1>

        <div className="Artist_tour_inner">
          <div className="Artist_tour_left_textCntr">
            <div>
              <div className="Artist_tour_text-wrap">
                <h1>International </h1>
              </div>
              <div className="Artist_tour_text-wrap">
                <h1>Artist</h1>
              </div>
              <div className="learn_more_text_cntr">
                <h4 className="learn_more_text">
                  Tours of international artists organized & promoted by Rage
                  Entertainment.
                </h4>
                {/* <div className="learn_more_arrow">
                  <FaArrowRightLong />
                  <FaArrowRightLong />
                </div> */}
              </div>
            </div>
          </div>
          <div className="Artist_tour-middleCntr">
            <div></div>
            <div className="featured_cntr_artist_tour">
              {/* <h4>Featured:</h4> */}
              <h4>
                Name:
                <br />
                {[
                  "Artbat",
                  "Boris brejcha",
                  "Hugel",
                  "Hozho",
                  "Onfaya",
                  "Dickson",
                ].map((el, index) => {
                  const tclasses = ["t-1", "t-2", "t-3", "t-4", "t-5", "t-6"];
                  return (
                    <span key={index} className={`${tclasses[index]}`}>
                      {" "}
                      <br />
                      {el}
                    </span>
                  );
                })}
              </h4>
            </div>
            <h4 className="Number_paginationCntr">
              <span id="count">
                <h4>1</h4>
                <h4>2</h4>
                <h4>3</h4>
                <h4>4</h4>
                <h4>5</h4>
                <h4>6</h4>
              </span>
              — 6
            </h4>
          </div>
        </div>
        <div className="Artist_tour_imageCntr">
          <div className="Artist_tour_left_imageCntr Artist_tour_image">
            <Image
              width={1000}
              height={1000}
              className="defl"
              src="/assets/images/RangeMedia/3-3 (1)-2.jpg"
              loading="lazy"
            />
            <Image
              width={1000}
              height={1000}
              className="tour_image im-1"
              src="/assets/images/RangeMedia/DSC04847.jpg"
              loading="lazy"
            />{" "}
            <Image
              width={1000}
              height={1000}
              className="tour_image im-2"
              src="/assets/images/RangeMedia/Bryan_Portray-52.jpg"
              loading="lazy"
            />
            <Image
              width={1000}
              height={1000}
              className="tour_image im-3"
              src="/assets/images/RangeMedia/DSC05253.jpg"
              loading="lazy"
            />
            <Image
              width={1000}
              height={1000}
              className="tour_image im-4"
              src="/assets/images/RangeMedia/DSC08021.jpg"
              loading="lazy"
            />{" "}
            <Image
              width={1000}
              height={1000}
              className="tour_image im-5"
              src="/assets/images/RangeMedia/Dyavol after dark2.jpg"
              loading="lazy"
            />
          </div>
          <div className="Artist_tour_left_imageCntr Artist_tour_image">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/Rage by the bay2.jpg"
              loading="lazy"
            />
          </div>
          <div className="Artist_tour_left_imageCntr Artist_tour_image">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/front2.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="Artist_tour_mobile">
        <div className="Artist_tour_mobileImgCntr">
          <Image
            width={1000}
            height={1000}
            src="/assets/images/RangeMedia/3-3 (1)-2.jpg"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0ecedb66e792ccc46f93_home-slider-7-p-800.webp"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f62564099bffe03063b85_Kosarev-art-1-10-p-800.webp"
            alt=""
          />
        </div>
        <div className="Artist_tour_mobileImgTextCntrBottom">
          <h2 className="artist_tour_mbletxt">Explore </h2>
          <h2 className="artist_tour_mbletxt">Experiment </h2>
          <div className="learn_more_text_cntr mble">
            <h4 className="learn_more_text">learn more</h4>
            <div className="learn_more_arrow mble">
              <FaArrowRightLong />
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist_tour;
