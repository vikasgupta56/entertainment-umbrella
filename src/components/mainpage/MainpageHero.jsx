import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const homePageCardData = [
  {
    id: 1,
    heading: "MR & MRS",
    subHeading: "Production ads and events",
    imgSrc: "/assets/images/mrandmrs/Srk Aryan.jpg",
    link: "../../mrandmrs",
  },
  {
    id: 1,
    heading: "RAGE MEDIA",
    subHeading: "Social Media Management",
    imgSrc: "/assets/images/RangeMedia/gold dusk .jpg",
    link: "../../newPage",
  },
  {
    id: 1,
    heading: "RAGE ENTERTAINMENT",
    subHeading: "Large Scale Events",
    imgSrc:
      "/assets/images/RageEntertainment/6.22.24 Hozho - Highlights - Edited Files-21.jpg",
    link: "../../rage-entertainment",
  },
  {
    id: 1,
    heading: "DHAMAKA",
    subHeading: "Marketing for Music and Movies",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8yItj77S93-ONUYiUYCvsyfbnbZ_OGjjqSviJ8cLNYqx0xhuKhotugItLP-jYcshOEE&usqp=CAU",
    link: "../../dhamaka",
  },
];
const MainpageHero = () => {
  const router = useRouter();
  useEffect(() => {
    const DESKTOP_BREAKPOINT = window.matchMedia("(min-width: 768px)");
    if (DESKTOP_BREAKPOINT.matches) {
      const e = document.querySelector(".landing-page-left_img_cntr_ul"),
        t = document.querySelector(".background-video-wrapper"),
        o = Array.from(t.querySelectorAll("video")),
        a = e.querySelectorAll(".landing-page-a"),
        // n = e.querySelectorAll(".not-hoverable"),
        // r = document.querySelector(".bottom-links-wrapper"),
        i = Array.from(a);
      let s = !1,
        l = !1,
        c = ["transparent", "transparent", "transparent", "transparent"];
      o[0].load(),
        o[1].load(),
        o[2].load(),
        a.forEach((e, t) => {
          let d = i.indexOf(a[t]),
            u = i.filter((e, t) => t != d),
            p = o.filter((e, o) => o != t);
          e.addEventListener("mouseenter", () => {
            setTimeout(() => {
              if (s && !l) {
                let a = gsap.timeline({
                  defaults: { ease: "circ.inOut", duration: 0.5 },
                  onStart: () => {
                    o[t].play(), (l = !0);
                  },
                  onComplete: () => {
                    l = !1;
                  },
                });
                a.set(p, { autoAlpha: 0 }),
                  a.to(o[t], { autoAlpha: 1, scale: 1 }, "<"),
                  // a.to(n, { autoAlpha: 0 }, "<"),

                  // a.to(r, { autoAlpha: 0 }, "<"),
                  a.to(u, { autoAlpha: 0 }, "<"),
                  a.to(
                    e,
                    {
                      "--animated-link-width": 0,
                      "--animated-link-opacity": 0,
                    },
                    "<"
                  );
              }
            }, 300);
          }),
            e.addEventListener("mouseleave", () => {
              let a = setInterval(() => {
                if (!s && !l) {
                  let i = gsap.timeline({
                    defaults: { ease: "circ.inOut", duration: 0.5 },
                    onStart: () => {
                      o[t].pause();
                    },
                  });
                  i.to(o[t], { autoAlpha: 0, scale: 1.15 }, "<"),
                    // i.to(n, { autoAlpha: 1 }, "<"),
                    // i.to(".letter-container", { autoAlpha: 1 }, "<"),
                    // i.to(r, { autoAlpha: 1 }, "<"),
                    i.to(u, { autoAlpha: 1 }, "<"),
                    i.to(
                      e,
                      {
                        "--animated-link-width": 100,
                        "--animated-link-opacity": 1,
                        backgroundColor: "transparent",
                      },
                      "<"
                    ),
                    clearInterval(a);
                }
              }, 200);
            }),
            e.addEventListener("mousemove", () => {
              s = !0;
            }),
            e.addEventListener("mouseout", () => {
              s = !1;
            });
        });
    }
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(
      ".landing-page-li a.landing-page-a"
    );
    const tl = gsap.timeline();
    gsap.to(cards, {
      // autoAlpha: 1,
      opacity: 1,
      ease: "linear",
      delay: 1,
      marginTop: 0,
      stagger: 0.2,
    });
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.1,
          // delay: 0.5,
        });
        card.classList.add("is-hover");
        card.classList.add("is-hover--finish");
        card.querySelectorAll(".glass-point").forEach((E) => {
          E.classList.add("is-hover");
          gsap.to(E, {
            scale: 0,
            delay: 0.5,
          });
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          // delay: 0.5,
        });
        card.classList.remove("is-hover");
        card.classList.remove("is-hover--finish");
        card.querySelectorAll(".glass-point").forEach((E) => {
          gsap.to(E, {
            scale: 1,
            delay: 0.5,
          });

          E.classList.remove("is-hover");
        });
      });
    });
  }, []);

  // useEffect(() => {
  //   const a = document.querySelectorAll(".landing-page-a");
  //   // Declare variables
  //   let lFollowX = 0,
  //     lFollowY = 0,
  //     x = 0,
  //     y = 0,
  //     friction = 1 / 50;
  //   function moveBackground() {
  //     // Update the position with a smooth transition (GSAP's tweening)
  //     x += (lFollowX - x) * friction;
  //     y += (lFollowY - y) * friction;

  //     // GSAP animation for background transform
  //     gsap.to(".background-video-wrapper", {
  //       duration: 0.02, // Small duration for smooth movement
  //       x: x,
  //       y: y,
  //       scale: 1.2,
  //       ease: "none",
  //     });

  //     // Request the next frame for continuous animation
  //     requestAnimationFrame(moveBackground);
  //   }

  //   // Event listener for mouse move and click
  //   a.forEach((el) => {
  //     el.addEventListener("mousemove", function (e) {
  //       const lMouseX = Math.max(
  //         -100,
  //         Math.min(100, window.innerWidth / 2 - e.clientX)
  //       );
  //       const lMouseY = Math.max(
  //         -100,
  //         Math.min(100, window.innerHeight / 2 - e.clientY)
  //       );
  //       lFollowX = (20 * lMouseX) / 100;
  //       lFollowY = (20 * lMouseY) / 100;
  //     });
  //   });

  //   window.addEventListener("click", function (e) {
  //     const lMouseX = Math.max(
  //       -100,
  //       Math.min(100, window.innerWidth / 2 - e.clientX)
  //     );
  //     const lMouseY = Math.max(
  //       -100,
  //       Math.min(100, window.innerHeight / 2 - e.clientY)
  //     );
  //     lFollowX = (20 * lMouseX) / 100;
  //     lFollowY = (20 * lMouseY) / 100;
  //   });

  //   moveBackground();
  // }, []);
  useGSAP(() => {
    var ball = document.querySelectorAll(".landing-page-li .landing-page-a");
    ball.forEach((elems, index) => {
      gsap.set(elems, {
        top: -100,
        opacity: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainPage",
          start: "top 1%", // Adjust start position
          end: "bottom top", // Adjust end position
          markers: false,
        },
      });

      tl.to(
        elems,
        0.5,
        {
          top: "80%",
          ease: "Bounce.easeInOut",
          duration: 5,
        },
        "bounce"
      )
        /* ball bounce down */
        .to(
          elems,
          0.4,
          {
            top: "80%",
            ease: "Power1.easeIn",
            // duration: 5,
          },
          "bounce"
        );

      // .to(
      //   elems,
      //   0.3,
      //   {
      //     top: "50%",
      //     ease: "Bounce.ease",
      //   },
      //   "bounce3"
      // );
    });
    // console.log(ball);
  });

  return (
    <>
      <div className="PrimaryHeaderSection_wrapper">
        <div className="scrolldown_box">
          <h1>Scroll Down</h1>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="PrimaryHeaderSection_backgroundWrapper">
          <div className="PrimaryHeaderSection_cubeWrapper PrimaryHeaderSection_two">
            <div className="PrimaryHeaderSection_cube">
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_front" />
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_right PrimaryHeaderSection_cutOverflow">
                <div className="Media_alternativeVideoPlayerWrapper">
                  <div>
                    <video
                      src="/assets/images/mainpage/final_hero_section_landing_page.webm"
                      preload
                      autoPlay
                      loop
                      playsInline
                      // webkit-playsInline
                      // x5-playsInline
                      style={{ width: "100%", height: "100%" }}
                      muted
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PrimaryHeaderSection_cubeWrapper PrimaryHeaderSection_five">
            <div className="PrimaryHeaderSection_cube">
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_front" />
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_right PrimaryHeaderSection_cutOverflow">
                <div className="Media_wrapper PrimaryHeaderSection_media">
                  <div className="Image_wrapper">
                    <img
                      alt=""
                      loading="lazy"
                      width={800}
                      height={800}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      srcSet="
                https://a.storyblok.com/f/283181/1920x1080/8b7104fd0e/website-test-photos-22.jpg/m/0x0/filters:quality(80) 1x,
                https://a.storyblok.com/f/283181/1920x1080/8b7104fd0e/website-test-photos-22.jpg/m/0x0/filters:quality(80) 2x
              "
                      src="https://a.storyblok.com/f/283181/1920x1080/8b7104fd0e/website-test-photos-22.jpg/m/0x0/filters:quality(80)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PrimaryHeaderSection_cubeWrapper PrimaryHeaderSection_zero">
            <div className="PrimaryHeaderSection_cube">
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_front" />
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_right PrimaryHeaderSection_cutOverflow">
                <div className="Media_wrapper PrimaryHeaderSection_media">
                  <div className="Image_wrapper">
                    <img
                      alt=""
                      loading="lazy"
                      width={800}
                      height={800}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      srcSet="
                https://a.storyblok.com/f/283181/1920x1080/69fefa9010/website-test-photos-23.jpg/m/0x0/filters:quality(80) 1x,
                https://a.storyblok.com/f/283181/1920x1080/69fefa9010/website-test-photos-23.jpg/m/0x0/filters:quality(80) 2x
              "
                      src="https://a.storyblok.com/f/283181/1920x1080/69fefa9010/website-test-photos-23.jpg/m/0x0/filters:quality(80)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PrimaryHeaderSection_cubeWrapper PrimaryHeaderSection_k">
            <div className="PrimaryHeaderSection_cube">
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_front" />
              <div className="PrimaryHeaderSection_face PrimaryHeaderSection_right PrimaryHeaderSection_cutOverflow">
                <div className="Media_wrapper PrimaryHeaderSection_media">
                  <div className="Image_wrapper">
                    <img
                      alt=""
                      loading="lazy"
                      width={800}
                      height={800}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      srcSet="
                https://a.storyblok.com/f/283181/1920x1080/c5b6552b81/website-test-photos-24.jpg/m/0x0/filters:quality(80) 1x,
                https://a.storyblok.com/f/283181/1920x1080/c5b6552b81/website-test-photos-24.jpg/m/0x0/filters:quality(80) 2x
              "
                      src="https://a.storyblok.com/f/283181/1920x1080/c5b6552b81/website-test-photos-24.jpg/m/0x0/filters:quality(80)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="PrimaryHeaderSection_overlay" />
      </div>

      <div className="mainPage">
        {" "}
        <div className="page-canvas" style={{ backgroundColor: "#000" }}>
          {/* <video autoPlay playsInline muted>
            <source src="../../fade-in.mp4" type="video/mp4" />
            <source src="fade-in.webm" type="video/webm" />
            <source src="fade-in.ogv" type="video/ogg" />
          </video> */}
          <div className="background-video-wrapper">
            <video
              id="background-video-1"
              preload
              loop
              muted
              playsInline
              disablePictureInPicture=""
              controlsList="nodownload"
              // src="https://radiance.family/video/branding-portfolio.webm"
              // typeof="video/mp4"
            >
              <source
                src="../../../assets/images/mrandmrs/videos/mrandmrsbg.mp4"
                type="video/webm"
              />
              <source
                src="../../../assets/images/mrandmrs/videos/mrandmrsbg.mp4"
                type="video/mp4"
              />
            </video>
            <video
              id="background-video-2"
              preload
              loop
              muted
              playsInline
              disablePictureInPicture=""
              controlsList="nodownload"
            >
              <source
                src="../../../assets/images/mrandmrs/videos/Dyavol_after_dark10.mp4"
                type="video/webm"
              />
              <source
                src="../../../assets/images/mrandmrs/videos/Dyavol_after_dark10.mp4"
                type="video/mp4"
              />
            </video>
            <video
              id="background-video-3"
              preload
              loop
              muted
              playsInline
              disablePictureInPicture=""
              controlsList="nodownload"
            >
              <source
                src="/assets/images/mainpage/videos/rage_entertainment.webm"
                type="video/webm"
              />
              <source
                src="/assets/images/mainpage/videos/rage_entertainment.webm"
                type="video/mp4"
              />
            </video>
            <video
              id="background-video-4"
              preload
              loop
              muted
              playsInline
              disablePictureInPicture=""
              controlsList="nodownload"
            >
              <source
                src="/assets/images/mainpage/videos/dhamaka_hover.webm"
                type="video/webm"
              />
              <source
                src="/assets/images/mainpage/videos/dhamaka_hover.webm"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div
          className="landing-page"
          data-scroll=""
          data-theme=""
          data-theme-md="dark"
          data-entry=""
        >
          <div className="landing-page-left_img_cntr_ul">
            <div className="mainPage_heading">
              <h1>All In on Entertainment</h1>
            </div>
            {homePageCardData.map((el, index) => {
              return (
                <div key={index} className="landing-page-li">
                  <a
                    href={el.link}
                    className="landing-page-a"
                    data-group="studio"
                  >
                    {/* <span className="home__sections__section__outline home__sections__section__outline--left"></span>
                    <span className="home__sections__section__outline home__sections__section__outline--top"></span>
                    <span className="home__sections__section__outline home__sections__section__outline--right"></span>
                    <span className="home__sections__section__outline home__sections__section__outline--bottom"></span>

                    <div className="home__sections__section__link">
                     
                      <span className="glass-point">
                        <span className="glass-point__inset"></span>
                      </span>
                    </div> */}

                    <div className="home__sections__section__title_subtitle">
                      <div className="home__sections__section__title">
                        <h2>{el.heading}</h2>
                        <span>{el.heading}</span>
                      </div>
                      <h4>{el.subHeading}</h4>
                    </div>
                    {/* <img src={el.imgSrc} alt="" /> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="desktop_hidden">
        <div className="landing-page-mobile">
          <div className="landing-page-mobile-inner">
            <div className="landing-page-mobile-links">
              <Link href="/mrandmrs" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91145/the-birch-wood-md-web.webp"
                    alt=""
                    // fill
                  />
                </div>
                <span className="landing-page-mobile-link-title">MR.&MRS</span>
              </Link>
              <div className="divider">
                <div className="divider-text">or</div>
              </div>
              <Link href="/newPage" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91268/Domy-1948-Wajda-Poster-Version.webp"
                    alt=""
                  />
                </div>
                <span className="landing-page-mobile-link-title">
                  RAGE MEDIA
                </span>
              </Link>
              <div className="divider">
                <div className="divider-text">or</div>
              </div>
              <Link href="/dhamaka" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91268/Domy-1948-Wajda-Poster-Version.webp"
                    alt=""
                  />
                </div>
                <span className="landing-page-mobile-link-title">DHAMAKA</span>
              </Link>
            </div>
           
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default MainpageHero;
