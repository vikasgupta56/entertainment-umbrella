import gsap from "gsap";
import React, { useEffect } from "react";
import TextPlugin from "gsap/dist/TextPlugin";
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
      "DESIGN STUDIO",
      "DEVELOPMENT TEAM",
      "DESIGN CREW",
      "PRODUCT SQUAD",
      "COMMUNICATION AGENCY",
    ];

    if (DESKTOP_BREAKPOINT.matches) {
      const e = document.querySelector(".hero-heading"),
        t = document.querySelector(".background-video-wrapper"),
        o = Array.from(t.querySelectorAll("video")),
        a = e.querySelectorAll(".heading-link"),
        n = e.querySelectorAll(".not-hoverable"),
        r = document.querySelector(".bottom-links-wrapper"),
        i = Array.from(a);
      let s = !1,
        l = !1,
        c = ["#0D99FE", "#FFD73B", "#F15F1B"];
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
                  a.to(n, { autoAlpha: 0 }, "<"),
                  a.to(".letter-container", { autoAlpha: 0 }, "<"),
                  a.to(r, { autoAlpha: 0 }, "<"),
                  a.to(u, { autoAlpha: 0 }, "<"),
                  a.to(
                    e,
                    {
                      "--animated-link-width": 0,
                      "--animated-link-opacity": 0,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 6,
                      paddingBottom: 6,
                      marginLeft: -12,
                      marginRight: -12,
                      marginTop: -6,
                      marginBottom: -6,
                      backgroundColor: c[t],
                      color: "#fff",
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
                    i.to(n, { autoAlpha: 1 }, "<"),
                    i.to(".letter-container", { autoAlpha: 1 }, "<"),
                    i.to(r, { autoAlpha: 1 }, "<"),
                    i.to(u, { autoAlpha: 1 }, "<"),
                    i.to(
                      e,
                      {
                        "--animated-link-width": 100,
                        "--animated-link-opacity": 1,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        backgroundColor: "transparent",
                        color: "#d42223",
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
    const handleDescriptorCycle = () => {
      let t = -1;
      gsap.to(".descriptor > *", {
        text: () => {
          t += 1;
          if (t > 4) t = 0;
          return DESCRIPTOR_NAMES[t];
        },
        duration: 0.7,
        repeatDelay: 1,
        repeat: -1,
        repeatRefresh: true,
      });
    };

    const handleTimeDisplay = () => {
      const o = document.getElementById("local-time");
      const timeFormat = {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      };

      const updateTime = () => {
        // Get the current time in UTC
        const now = new Date();

        // Convert UTC to IST (UTC +5:30)
        // const utcOffset = 5 * 60 + 30; // 5 hours and 30 minutes in minutes
        const localTime = new Date(now.getTime()); // Adjust time by the offset

        // Format the time using toLocaleString
        o.innerHTML = localTime.toLocaleString("en-IN", timeFormat);
      };

      updateTime(); // Initialize immediately
      setInterval(updateTime, 1000); // Update every second
    };

    if (
      (DESKTOP_BREAKPOINT.matches && handleDescriptorCycle(),
      handleTimeDisplay(),
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
  return (
    <section id="hero-section" className="hero-section">
      <div className="heading-wrapper">
        <h2 className="hero-heading">
          <span className="not-hoverable">
            {/* We fuse and to craft unforgettable moments, always pushing the
            boundaries of */}
            We live our best lives excelling at{" "}
          </span>
          <span className="heading-link"> Film Production</span>
          <br />
          <span className="heading-link">Event Creation, &nbsp;</span>
          <span className="heading-link"> Creative Storytelling.</span>
          <span className="not-hoverable"> and everything we touch</span>
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
        <div className="bottom-links-wrapper">
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
        </div>
        <div className="letters-wrapper">
          <div id="letter-r" className="letter-container">
            <h1>M</h1>
            {/* <svg
              width="14.9375em"
              height="16.6875em"
              viewBox="0 0 239 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 266.058V0H134.976C193.73 0 230.65 28.1942 230.65 78.229C230.65 121.513 203.258 147.325 155.223 149.707V152.884C176.66 159.635 187.379 172.739 197.303 192.197L238.59 266.058H189.761L149.268 194.58C136.564 171.548 126.242 160.826 95.2773 160.826H42.8748V266.058H0ZM42.8748 128.264H137.755C175.072 128.264 187.776 115.557 187.776 83.3913C187.776 52.0203 175.072 38.5188 137.755 38.5188H42.8748V128.264Z"
                fill="currentColor"
              />
            </svg> */}
          </div>
          <div id="letter-a" className="letter-container">
            <h1>R.&nbsp;</h1>
            {/* <svg
              width="18.4375em"
              height="16.6875em"
              viewBox="0 0 295 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M244.545 266.058L215.168 196.962H78.2068L48.8296 266.058H0L116.318 0H177.851L294.169 266.058H244.545ZM94.8803 158.443H198.891L162.765 73.8609L148.474 39.7101H145.298L131.006 73.8609L94.8803 158.443Z"
                fill="currentColor"
              />
            </svg> */}
          </div>
          <div id="letter-d" className="letter-container">
            {/* <svg
              width="15.875em"
              height="16.6875em"
              viewBox="0 0 254 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M118.7 0C201.273 0 253.279 50.829 253.279 133.029C253.279 215.229 201.273 266.058 118.7 266.058H0V0H118.7ZM118.7 227.539C182.615 227.539 207.625 201.33 207.625 133.029C207.625 64.7275 182.615 38.5188 118.7 38.5188H42.8748V227.539H118.7Z"
                fill="currentColor"
              />
            </svg> */}
            <h1>&</h1>
          </div>
          <div id="letter-i" className="letter-container">
            {/* <svg
              width="2.6875em"
              height="16.6875em"
              viewBox="0 0 43 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 266.058V0H42.8748V266.058H0Z" fill="currentColor" />
            </svg> */}
            <h1>&nbsp;M</h1>
          </div>
          <div id="letter-a-s" className="letter-container">
            {/* <svg
              width="18.4375em"
              height="16.6875em"
              viewBox="0 0 295 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M244.545 266.058L215.168 196.962H78.2068L48.8296 266.058H0L116.318 0H177.851L294.169 266.058H244.545ZM94.8803 158.443H198.891L162.765 73.8609L148.474 39.7101H145.298L131.006 73.8609L94.8803 158.443Z"
                fill="currentColor"
              />
            </svg> */}
            <h1>R</h1>
          </div>
          <div id="letter-n" className="letter-container">
            {/* <svg
              width="15.0625em"
              height="16.6875em"
              viewBox="0 0 241 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 266.058V0H46.0508L194.922 199.742H197.7V0H240.575V266.058H194.525L45.6537 69.4928H42.8749V266.058H0Z"
                fill="currentColor"
              />
            </svg> */}
            <h1>S.</h1>
          </div>
          {/* <div id="letter-c" className="letter-container">
            <svg
              width="16.5em"
              height="16.6875em"
              viewBox=" 0 0 264 274"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M134.976 274C53.9905 274 0 219.994 0 137C0 54.0058 53.9905 0 134.976 0C215.168 0 263.997 39.7101 263.997 103.643V108.806H218.741V103.643C218.741 59.9623 194.128 41.6956 134.976 41.6956C72.649 41.6956 45.6537 67.9044 45.6537 137C45.6537 206.096 72.649 232.304 134.976 232.304C194.128 232.304 218.741 214.038 218.741 170.357V165.194H263.997V170.357C263.997 234.29 215.565 274 134.976 274Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div id="letter-e" className="letter-container">
            <svg
              width="13.125em"
              height="16.6875em"
              viewBox="0 0 210 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M209.61 38.5188H42.8749V112.777H203.655V151.693H42.8749V227.539H209.61V266.058H0V0H209.61V38.5188Z"
                fill="currentColor"
              />
            </svg>
          </div> */}
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
      <div className="background-video-wrapper">
        <video
          id="background-video-1"
          preload="none"
          loop
          muted
          playsInline
          disablePictureInPicture=""
          controlsList="nodownload"
          // src="https://radiance.family/video/branding-portfolio.webm"
          // typeof="video/mp4"
        >
          <source
            src="https://radiance.family/video/branding-portfolio.webm"
            type="video/webm"
          />
          <source
            src="https://radiance.family/video/branding-portfolio.webm"
            type="video/mp4"
          />
        </video>
        <video
          id="background-video-2"
          preload="none"
          loop
          muted
          playsInline
          disablePictureInPicture=""
          controlsList="nodownload"
        >
          <source
            src="https://radiance.family/video/ads-portfolio.webm"
            type="video/webm"
          />
          <source
            src="https://radiance.family/video/ads-portfolio.webm"
            type="video/mp4"
          />
        </video>
        <video
          id="background-video-3"
          preload="none"
          loop
          muted
          playsInline
          disablePictureInPicture=""
          controlsList="nodownload"
        >
          <source
            src="https://radiance.family/video/web-portfolio.webm"
            type="video/webm"
          />
          <source
            src="https://radiance.family/video/web-portfolio.webm"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="mobile-letters-lottie-container" />
    </section>
  );
};

export default HomeHero;
