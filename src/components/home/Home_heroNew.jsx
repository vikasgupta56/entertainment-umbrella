import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const data = [
  {
    videoSrc: "/assets/images/mrandmrs/videos/mrandmrsbg.mp4",
  },
  {
    videoSrc: "/assets/images/mrandmrs/videos/FILM_Sarkat_2.mp4",
  },
  {
    videoSrc: "/assets/images/mrandmrs/videos/FILM_Sarkat_1.mp4",
  },
  {
    videoSrc: "/assets/images/mrandmrs/videos/FILM_Sarkat3.mp4",
  },
];
const Home_heroNew = () => {
  useEffect(() => {
    // gsap.to(
    //   [
    //     ".creative-fullpage--slider .swiper-content .title-area .title",
    //     ".creative-fullpage--slider .swiper-content p.disc",
    //   ],
    //   {
    //     opacity: 1,
    //     duration: 2,
    //     ease: "slow",
    //     delay: 0.5,
    //     stagger: 0.5,
    //   }
    // );

    // textreavel
    // gsap.set(".creative-fullpage--slider .swiper-content .title-area .title", {
    //   autoAlpha: 0,
    //   yPercent: 200,
    // });

    // ScrollTrigger.batch(
    //   ".creative-fullpage--slider .swiper-content .title-area ",
    //   {
    //     onEnter: (batch) => {
    //       batch.forEach((section, i) => {
    //         gsap.to(
    //           section.querySelector(
    //             ".creative-fullpage--slider .swiper-content .title-area .title"
    //           ),
    //           {
    //             // autoAlpha: 1,
    //             // yPercent: 0,
    //             transform: "translateY(0)",
    //             duration: 0.8,
    //             ease: "power1.inOut",
    //             stagger: 0.1,
    //             delay: i * 0.3,
    //           }
    //         );
    //       });
    //     },
    //     start: "top 95%",
    //   }
    // );
    gsap.set(".creative-fullpage--slider .swiper-content .title-area .title", {
      autoAlpha: 0,
      yPercent: 200,
      opacity: 0,
    });
    gsap.to(
      document.querySelector(
        ".creative-fullpage--slider .swiper-content .title-area .title"
      ),
      {
        autoAlpha: 1,
        yPercent: 0,
        // transform: "translateY(0)",
        duration: 1,
        ease: "power1.inOut",
        // stagger: 0.1,
        opacity: 1,

        delay: 0.3,
      }
    );
  });
  return (
    <section className="creative-fullpage--slider">
      <div className="banner-horizental">
        <div className="swiper swiper-container-h">
          <Swiper
            speed={1600}
            modules={[
              Autoplay,
              Navigation,
              Pagination,
              Keyboard,
              Parallax,
              Mousewheel,
            ]}
            loop={true}
            direction="horizontal"
            effect="slide"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            parallax={true}
            // rtl={true}
            // loopFillGroupWithBlank={true}
            mousewheel={{
              enabled: true,
              eventsTarget: ".swiper-slide",
              sensitivity: 1,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              hide: false,
              draggable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "progressbar",
            }}
            className="swiper-wrapper"
          >
            {data.map((el, i) => (
              <>
                {" "}
                <SwiperSlide className="swiper-slide">
                  <div className="slider-inner" data-swiper-parallax={100}>
                    <div className="grad_up"></div>

                    <video
                      data-scroll
                      data-scroll-speed="-0.4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      src={el.videoSrc}
                      alt=""
                      className="full_screen-image"
                    />
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>

          <div className="swiper-content" data-swiper-parallax={2000}>
            <div className="title-area">
              {/* <p className="tag">OUR VISION</p> */}
              <div
                href="#"
                className="title"
                // data-scroll
                // data-scroll-speed=".1"
                // data-swiper-parallax={2000}
              >
                MR & MRS
              </div>
            </div>
            <p className="disc" data-scroll data-scroll-speed=".1">
              We don’t say no to anything &nbsp;entertainment.
            </p>
          </div>
          <div className="swiper-button-wrapper creative-button--wrapper">
            <div
              className="swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <BsArrowRight />
            </div>
            <div
              className="swiper-button-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <BsArrowLeft />
            </div>
          </div>
          <div className="slider-pagination-area">
            <h5 className="slide-range one">01</h5>
            <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
              <span
                className="swiper-pagination-progressbar-fill"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scaleX(0.666667) scaleY(1)",
                  transitionDuration: "1500ms",
                }}
              />
            </div>
            <h5 className="slide-range three">05</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_heroNew;
