import gsap from "gsap";
import React, { useEffect } from "react";
import TextPlugin from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(TextPlugin);
const HomeHero = () => {
  useEffect(() => {
    gsap.set(".letter-container", { yPercent: 200 });
    gsap.set(".welcome", { autoAlpha: 0, y: -20 });

    const welcome = gsap.timeline({
      defaults: { duration: 0.4, ease: "expo.out" },
    });
    welcome.to(".letter-container", { yPercent: 0, stagger: 0.1 });
    welcome.to(
      ".hero-mask-part",
      { scaleY: 0, ease: "power3.out", duration: 2 },
      "<"
    );
    welcome.to(
      ".welcome",
      { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8 },
      "<"
    );
    const DESKTOP_BREAKPOINT = window.matchMedia("(min-width: 768px)");

    const DESCRIPTOR_NAMES = [
      "FLIMS",
      "EVENTS",
      // "DESIGN CREW",
      // "PRODUCT SQUAD",
      // "COMMUNICATION AGENCY",
    ];
    const DESCRIPTOR_NAMES2 = [
      "EVENTS",
      "FLIMS",

      // "DESIGN CREW",
      // "PRODUCT SQUAD",
      // "COMMUNICATION AGENCY",
    ];
    // if (DESKTOP_BREAKPOINT.matches) {
    //   const e = document.querySelector(".hero-heading"),
    //     // t = document.querySelector(".background-video-wrapper"),
    //     o = Array.from(t.querySelectorAll("video")),
    //     a = e.querySelectorAll(".heading-link"),
    //     n = e.querySelectorAll(".not-hoverable"),
    //     r = document.querySelector(".bottom-links-wrapper"),
    //     i = Array.from(a);
    //   let s = !1,
    //     l = !1,
    //     c = ["#0D99FE", "#FFD73B", "#F15F1B"];
    //   o[0].load(),
    //     o[1].load(),
    //     o[2].load(),
    //     a.forEach((e, t) => {
    //       let d = i.indexOf(a[t]),
    //         u = i.filter((e, t) => t != d),
    //         p = o.filter((e, o) => o != t);
    //       e.addEventListener("mouseenter", () => {
    //         setTimeout(() => {
    //           if (s && !l) {
    //             let a = gsap.timeline({
    //               defaults: { ease: "circ.inOut", duration: 0.5 },
    //               onStart: () => {
    //                 o[t].play(), (l = !0);
    //               },
    //               onComplete: () => {
    //                 l = !1;
    //               },
    //             });
    //             a.set(p, { autoAlpha: 0 }),
    //               a.to(o[t], { autoAlpha: 1, scale: 1 }, "<"),
    //               a.to(n, { autoAlpha: 0 }, "<"),
    //               a.to(".letter-container", { autoAlpha: 0 }, "<"),
    //               // a.to(r, { autoAlpha: 0 }, "<"),
    //               // a.to(u, { autoAlpha: 0 }, "<"),
    //               a.to(
    //                 e,
    //                 {
    //                   // "--animated-link-width": 0,
    //                   // "--animated-link-opacity": 0,
    //                   // paddingLeft: 12,
    //                   // paddingRight: 12,
    //                   // paddingTop: 6,
    //                   // paddingBottom: 6,
    //                   // marginLeft: -12,
    //                   // marginRight: -12,
    //                   // marginTop: -6,
    //                   // marginBottom: -6,
    //                   // backgroundColor: c[t],
    //                   // color: "#fff",
    //                 },
    //                 "<"
    //               );
    //           }
    //         }, 300);
    //       }),
    //         e.addEventListener("mouseleave", () => {
    //           let a = setInterval(() => {
    //             if (!s && !l) {
    //               let i = gsap.timeline({
    //                 defaults: { ease: "circ.inOut", duration: 0.5 },
    //                 onStart: () => {
    //                   o[t].pause();
    //                 },
    //               });
    //               i.to(o[t], { autoAlpha: 0, scale: 1.15 }, "<"),
    //                 i.to(n, { autoAlpha: 1 }, "<"),
    //                 i.to(".letter-container", { autoAlpha: 1 }, "<"),
    //                 i.to(r, { autoAlpha: 1 }, "<"),
    //                 i.to(u, { autoAlpha: 1 }, "<"),
    //                 i.to(
    //                   e,
    //                   {
    //                     "--animated-link-width": 100,
    //                     "--animated-link-opacity": 1,
    //                     paddingLeft: 0,
    //                     paddingRight: 0,
    //                     paddingTop: 0,
    //                     paddingBottom: 0,
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     marginTop: 0,
    //                     marginBottom: 0,
    //                     backgroundColor: "transparent",
    //                     color: "#d42223",
    //                   },
    //                   "<"
    //                 ),
    //                 clearInterval(a);
    //             }
    //           }, 200);
    //         }),
    //         e.addEventListener("mousemove", () => {
    //           s = !0;
    //         }),
    //         e.addEventListener("mouseout", () => {
    //           s = !1;
    //         });
    //     });
    // }

    const handleDescriptorCycle = () => {
      let t = -1;
      gsap.to(".descriptor > *", {
        text: () => {
          t += 1;
          if (t > 1) t = 0;
          return DESCRIPTOR_NAMES[t];
        },
        duration: 1,
        repeatDelay: 1,
        repeat: -1,
        repeatRefresh: true,
      });
      gsap.to(".descriptor:nth-child(2) > *", {
        text: () => {
          t += 1;
          if (t > 1) t = 0;
          return DESCRIPTOR_NAMES2[t];
        },
        duration: 1,
        repeatDelay: 1,
        repeat: -1,
        repeatRefresh: true,
      });
    };

    // const handleTimeDisplay = () => {
    //   const o = document.getElementById("local-time");
    //   const timeFormat = {
    //     weekday: "short",
    //     hour: "numeric",
    //     minute: "2-digit",
    //     second: "2-digit",
    //   };

    //   const updateTime = () => {
    //     // Get the current time in UTC
    //     const now = new Date();

    //     // Convert UTC to IST (UTC +5:30)
    //     // const utcOffset = 5 * 60 + 30; // 5 hours and 30 minutes in minutes
    //     const localTime = new Date(now.getTime()); // Adjust time by the offset

    //     // Format the time using toLocaleString
    //     o.innerHTML = localTime.toLocaleString("en-IN", timeFormat);
    //   };

    //   updateTime(); // Initialize immediately
    //   setInterval(updateTime, 1000); // Update every second
    // };

    if (
      (DESKTOP_BREAKPOINT.matches && handleDescriptorCycle(),
      // handleTimeDisplay(),
      DESKTOP_BREAKPOINT.matches)
    ) {
      const e = Array.from(document.querySelectorAll(".letter-container")),
        t = document
          .querySelector(".sprite-wrapper")
          .querySelectorAll(".sprite-container");
      (t[1].children[0].src = "/assets/images/pic/sprites/A-1.avif"),
        (t[2].children[0].src = "/assets/images/pic/sprites/D.avif"),
        (t[3].children[0].src = "/assets/images/pic/sprites/I.avif"),
        (t[4].children[0].src = "/assets/images/pic/sprites/AA.avif"),
        (t[5].children[0].src = "/assets/images/pic/sprites/N.avif"),
        // (t[6].children[0].src = "/assets/images/pic/sprites/C.avif"),
        // (t[7].children[0].src = "/assets/images/pic/sprites/E.avif"),
        gsap.set(t, { autoAlpha: 0, scale: 1.3 }),
        e.forEach((e, o) => {
          let a = e.getBoundingClientRect(),
            n = t[o].querySelector(".sprite");
          3 == o
            ? gsap.set(t[o], { x: a.left - t[o].offsetWidth / 2 })
            : gsap.set(t[o], { x: a.left - 24 });
          let r = gsap.timeline({ defaults: { duration: 0.7 } }).pause();
          r.fromTo(e, { opacity: 1 }, { opacity: 0, duration: 0.3 }),
            r.fromTo(
              t[o],
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.3 },
              "<"
            ),
            r.fromTo(
              n,
              { x: 0 },
              {
                x:
                  -t[0].children[0].scrollWidth +
                  t[0].children[0].scrollWidth / 18,
                ease: "steps(17)",
              },
              "<"
            ),
            e.addEventListener("mouseenter", (e) => {
              r.restart();
            }),
            e.addEventListener("mouseleave", (e) => {
              setTimeout(() => {
                r.reverse();
              }, 200);
            });
        });
    } else {
      let e = "hero-physics.json",
        t = document.querySelector(".mobile-letters-lottie-container"),
        o = { frame: 0 },
        a = lottie.loadAnimation({
          container: t,
          renderer: "svg",
          loop: !1,
          autoplay: !1,
          path: e,
          rendererSettings: { preserveAspectRatio: "xMaxYMax meet" },
        });
      a.addEventListener("DOMLoaded", function () {
        gsap.to(o, {
          frame: a.totalFrames - 1,
          ease: "none",
          duration: 6,
          onStart: () => {},
          onUpdate: () => a.goToAndStop(o.frame, !0),
        });
      });
    }
  }, []);
  // useGSAP(() => {
  //   const image = document.querySelector(".hero-section-video");
  //   const tl = gsap.timeline();
  //   gsap.to(".image", {
  //     scrollTrigger: {
  //       trigger: image,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //       markers: false, // Set to `true` for debugging purposes
  //     },
  //     yPercent: 32,
  //     ease: "none",
  //   });
  // }, []);

  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-section-video">
        <video
          loop
          playsInline
          muted
          autoPlay
          src="/assets/images/Mr&Mrs/videos/mrandmrsbg.mp4"
          className="image"
        ></video>
        <div className="grad_up"></div>
      </div>
      <div className="heading-wrapper">
        <h2 className="hero-heading">
          <span className="not-hoverable">
            {" "}
            Mr. and Mrs.
            <span className="descriptor">
              {" "}
              <span className="welcome">Films</span>
            </span>
            ... and Sometimes{" "}
            <span className="descriptor">
              {" "}
              <span className="welcome">Events</span>
            </span>{" "}
          </span>{" "}
          <br />
          <span className="not-hoverable not-hoverable2">
            {" "}
            We don’t say no to anything &nbsp;entertainment.
          </span>
          <br />
          {/* <span className="heading-link">Event Creation, &nbsp;</span>
          <span className="heading-link"> Creative Storytelling.</span>
          <span className="not-hoverable"> and everything we touch</span> */}
          <div className="hero-mask">
            <div className="hero-mask-part" />
            <div className="hero-mask-part" />
          </div>
        </h2>
        <h2 className="hero-heading-mobile">
          We live our best lives excelling at design and branding, advertising,
          web development and everything we touch
        </h2>
      </div>
      <div className="bottom-wrapper">
        {/* <div className="bottom-links-wrapper">
          <div>
            <div className="welcome" id="local-time">
              MON 04:21:30
            </div>
            <div className="welcome" id="local-place">
              MUMBAI, INDIA
            </div>
          </div>
          <div className="divider" />
          <div className="descriptor">
            <div className="welcome">COMMUNICATION AGENCY</div>
          </div>
          <div className="divider" />
          <div>
            <a href="" target="_blank" className="animated-link welcome">
              <span>BEHANCE</span>
            </a>
            <a href="" target="_blank" className="animated-link welcome">
              <span>INSTAGRAM</span>
            </a>
            <a href="" target="_blank" className="animated-link welcome">
              <span>DPROFILE</span>
            </a>
          </div>
        </div> */}
        <div className="letters-wrapper">
          <div id="letter-r" className="letter-container">
            <h1>M</h1>
          </div>
          <div id="letter-a" className="letter-container">
            <h1>R.&nbsp;</h1>
          </div>
          <div id="letter-d" className="letter-container">
            <h1>&</h1>
          </div>
          <div id="letter-i" className="letter-container">
            <h1>&nbsp;M</h1>
          </div>
          <div id="letter-a-s" className="letter-container">
            <h1>R</h1>
          </div>
          <div id="letter-n" className="letter-container">
            <h1>S.</h1>
          </div>
        </div>
        <div className="sprite-wrapper">
          <div className="sprite-container">
            <img
              className="sprite"
              src="/assets/images/pic/sprites/R.avif"
              loading="eager"
              alt="R Letter"
            />
          </div>
          <div className="sprite-container">
            <img
              className="sprite"
              loading="lazy"
              alt="A Letter"
              // src="/assets/images/pic/sprites/A-1.avif"
            />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="D Letter" />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="I Letter" />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="A Letter" />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="N Letter" />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="C Letter" />
          </div>
          <div className="sprite-container">
            <img className="sprite" loading="lazy" alt="E Letter" />
          </div>
        </div>
      </div>

      <div className="mobile-letters-lottie-container" />
    </section>
  );
};

export default HomeHero;
