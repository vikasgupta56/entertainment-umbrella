import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
gsap.registerPlugin(CustomEase);
const Navbar = () => {
  const initIntroAnim = () => {
    if (document.querySelectorAll(".heroBanner").length > 0) {
      const body = document.querySelector("body");
      const logo = document.querySelector(".haloLogo__img");
      const hero = document.querySelector(".heroBanner");
      const herocon = document.querySelector(".heroBanner__container");
      const heroTextOne = document.querySelector(".h-text-1");
      const heroTextTwo = document.querySelector(".h-text-2");
      const heroImgOne = document.querySelector(".h-img-1");
      const heroImgTwo = document.querySelector(".h-img-2");
      const semiheading1 = document.querySelector(".semiheading1");
      const semiheading2 = document.querySelector(".semiheading2");

      body.classList.add("is-loaded");
      hero.classList.add("loaded");

      const introTl = gsap.timeline();

      CustomEase.create("easeTitle", ".075, .82, .165, 1");

      if (document.querySelectorAll(".homehero").length > 0) {
        introTl.to(".heroBanner__container", {
          opacity: 1,
          duration: 2,
          ease: "Power3.none",
        });
        introTl.to(
          heroTextOne,
          {
            y: 0,
            duration: 1.2,
            ease: "Expo.easeOut",
          },
          ">-2"
        );
        introTl.to(
          heroTextTwo,
          {
            y: 0,
            duration: 1.2,
            ease: "Expo.easeOut",
          },
          ">-.8"
        );
        introTl.to(
          logo,
          {
            y: 0,
            duration: 1.5,
            ease: "Power3.easeInOut",
          },
          ">-1.7"
        );
        introTl.to(
          heroImgTwo,
          {
            scale: 1.1,
            duration: 2.8,
            ease: "Power3.easeInOut",
          },
          ">-1.8"
        );
        introTl.to(
          heroImgOne,
          {
            scale: 1.1,
            duration: 2.8,
            ease: "Power3.easeInOut",
          },
          ">-2.9"
        );
        introTl.to(
          semiheading1,
          {
            y: 0,
            duration: 0.55,
            ease: "easeTitle",
          },
          ">-1.2"
        );
        introTl.to(
          semiheading2,
          {
            y: 0,
            duration: 0.55,
            ease: "easeTitle",
          },
          ">-.46"
        );
      } else {
        introTl.to(".heroBanner__container", {
          opacity: 1,
          duration: 2,
          ease: "Power3.none",
        });
      }
    }
  };
  useEffect(() => {
    //** Navugation handler **/
    // function navHandler() {
    //   if (window.innerWidth > 768) {
    //     const navbar = document.querySelector(".navbar");

    //     const navItems = document.querySelectorAll(
    //       ".nav_link:not(.brandsInfo__textBlock--btn)"
    //     );

    //     const navText = document.querySelectorAll(".nav_text");

    //     var timeout;
    //     const navtl = gsap.timeline();

    //     CustomEase.create("easeNavbar", ".075, .82, .165, 1");

    //     navItems.forEach((btn, index) => {
    //       btn.addEventListener("mouseenter", () => {
    //         if (timeout != null) {
    //           clearTimeout(timeout);
    //         }

    //         timeout = setTimeout(() => {
    //           // Use navbar directly instead of getElementsByClassName
    //           if (
    //             !navbar.classList.contains("anim_going") &&
    //             !navbar.classList.contains("refresh")
    //           ) {
    //             navbar.classList.add("hover_in");

    //             navtl.to(".heroBanner__container", {
    //               y: 90,
    //               scaleX: 0.97,
    //               borderRadius: "+20px",
    //               duration: 1.2,
    //               ease: "Expo.easeInOut",
    //             });

    //             if (!navbar.classList.contains("refresh")) {
    //               navtl.to(
    //                 navText[index],
    //                 {
    //                   y: 0,
    //                   autoAlpha: 1,
    //                   duration: 0.5,
    //                   ease: "Expo.easeInOut",
    //                 },
    //                 ">-.6"
    //               );
    //             }

    //             setTimeout(() => {
    //               navbar.classList.add("anim_going");
    //             }, 300);
    //           } else {
    //             navtl.to(navText[index], {
    //               y: 0,
    //               autoAlpha: 1,
    //               duration: 0.5,
    //               ease: "Expo.easeInOut",
    //             });
    //           }

    //           if (!navbar.classList.contains("refresh")) {
    //             btn.classList.add("active");
    //           }
    //         }, 300);
    //       });

    //       btn.addEventListener("mouseleave", function () {
    //         if (timeout != null) {
    //           clearTimeout(timeout);

    //           timeout = null;
    //         }
    //         // herocon.classList.remove('nav_open')
    //         btn.classList.remove("active");
    //         navtl.to(navText[index], {
    //           y: 10,
    //           autoAlpha: 0,
    //           duration: 0.5,
    //           ease: "Expo.easeInOut",
    //         });

    //         // navText[index].classList.remove('show')
    //       });
    //       btn.addEventListener("click", function () {
    //         navbar.classList.add("refresh");
    //         btn.classList.remove("active");
    //         navbar.classList.remove("hover_in");

    //         navtl.to(navText[index], {
    //           y: 10,
    //           autoAlpha: 0,
    //           duration: 0.3,
    //         });
    //       });
    //     });
    //     navbar.addEventListener("mouseleave", function () {
    //       navbar.classList.remove("anim_going");
    //       navbar.classList.remove("hover_in");
    //       navtl.to(".heroBanner__container", {
    //         y: 0,
    //         scale: 1,
    //         borderRadius: "0",
    //         duration: 1.2,
    //         ease: "Expo.easeInOut",
    //       });
    //     });
    //     // lenis.on("scroll", (args) => {
    //     // Ensure args.delta.y exists
    //     // if (args.delta && args.delta.y > 50) {
    //     //     gsap.to(".navbar", {
    //     //       autoAlpha: 0,
    //     //       duration: 0.3, // Optional: add a duration for smoothness
    //     //     });
    //     //   } else {
    //     // gsap.to(".navbar", {
    //     //   autoAlpha: 1,
    //     //   duration: 0.3, // Optional: add a duration for smoothness
    //     // });
    //   }

    //   // });
    // }

    //** Mobile Navugation handler **/
    function mobileNavHandler() {
      const app = document.querySelector("body");
      const navopenbtn = document.querySelector(".mobilenavbar__togglebtn");
      const navclsebtn = document.querySelector(
        ".mobilenavbar__content--close"
      );
      const nav = document.querySelector(".mobilenavbar__content");
      const navitem = document.querySelectorAll(".mobilenavbar__content ul li");
      const navitemlink = document.querySelectorAll(
        ".mobilenavbar__content ul li a"
      );

      // Event listener for opening the navbar
      navopenbtn.addEventListener("click", (event) => {
        event.preventDefault();
        nav.classList.add("show");
        app.classList.add("fixed");
      });

      // Event listener for closing the navbar
      navclsebtn.addEventListener("click", (event) => {
        event.preventDefault();
        nav.classList.remove("show");
        app.classList.remove("fixed");
      });

      // Close the navbar when any link is clicked
      navitemlink.forEach((item) => {
        item.addEventListener("click", () => {
          nav.classList.remove("show");
          app.classList.remove("fixed");
        });
      });

      // Activate the correct menu item based on the URL
      const menuItems = document.getElementsByClassName(
        "mobilenavbar__content--menu--item"
      );

      if (window.location.href.includes("studio")) {
        menuItems[2]?.classList.add("active"); // 3rd item (index 2)
      } else if (window.location.href.includes("collective")) {
        menuItems[3]?.classList.add("active"); // 4th item (index 3)
      } else if (window.location.href.includes("savoir")) {
        menuItems[1]?.classList.add("active"); // 2nd item (index 1)
      } else {
        menuItems[0]?.classList.add("active"); // 1st item (index 0)
      }
    }
    function introNav() {
      CustomEase.create("easeNav", ".075, .82, .165, 1");

      gsap.to(".navbar--menu--item a", {
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "easeNav",
        onComplete: function () {
          // Assuming you want to add the class to all elements with this class
          const items = document.getElementsByClassName("navbar--menu--item");
          for (let i = 0; i < items.length; i++) {
            items[i].classList.add("loaded"); // Add class to each item
          }

          const navbar = document.getElementsByClassName("navbar");
          if (navbar.length > 0) {
            navbar[0].classList.remove("refresh"); // Remove class from the first navbar element
          }
        },
      });
    }
    function updateActiveMenu() {
      let currActive = document.querySelector(".navbar--menu--item a.curr");
      if (currActive) {
        currActive.classList.remove("curr");
      }

      let nextActive = document.querySelector(
        `.navbar--menu--item a[href="${window.location.href}"]`
      );
      if (nextActive) {
        nextActive.classList.add("curr");
      }
    }
    //**  Intro animations **/
    window.addEventListener("load", initIntroAnim);
    // initIntroAnim();
    mobileNavHandler();
    updateActiveMenu();
    introNav();
  }, []);
  // const router = useRouter();
  // const isHome2 = router.pathname === "/newPage";
  return (
    <>
      <div className="navbar">
        <ul className="navbar--menu fhl">
          <li className="navbar--menu--item">
            <a href="/" className="nav_link">
              <span className="btn-text link" data-title="halo media">
                Mr. & Mrs
              </span>
              {/* <span className="nav_text">
                The Middle East’s Premier Digital Media Company
              </span> */}
            </a>
          </li>
          <li className="navbar--menu--item">
            <a href={"/newPage"} className="nav_link">
              <span className="btn-text link" data-title="savoir flair">
                ⁠Rage Media
              </span>
              {/* <span className="nav_text">
                The Middle East’s First Online Magazine
              </span> */}
            </a>
          </li>
          <li className="navbar--menu--item">
            <a href="/dhamaka" className="nav_link">
              <span className="btn-text link" data-title="halo studio">
                Dhamaka
              </span>
              {/* <span className="nav_text">
                {" "}
                Next-Gen White-Label Production{" "}
              </span> */}
            </a>
          </li>
          {/* <li className="navbar--menu--item">
            <a href="" className="nav_link">
              <span className="btn-text link" data-title="halo collective">
                halo collective
              </span>
              <span className="nav_text">
                {" "}
                Pioneering Influencer Marketing{" "}
              </span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="mobilenavbar">
        <div className="mobilenavbar__logo">
          <h5>
            <a href="">
              Entertainment <br />
              Umbrella
            </a>
          </h5>
        </div>
        <button className="mobilenavbar__togglebtn">
          <span>menu</span>
        </button>
        <div className="mobilenavbar__content">
          <button className="mobilenavbar__content--close">Close</button>
          <ul className="mobilenavbar__content--menu fhl">
            <li className="mobilenavbar__content--menu--item">
              <a
                href={"/"}
                className="nav_link o_italic"
                data-title="halo media"
              >
                Mr. & Mrs
              </a>
            </li>
            <li className="mobilenavbar__content--menu--item">
              <a
                href={"/newPage"}
                className="nav_link o_italic"
                data-title="savoir flair"
              >
                ⁠Rage Media
              </a>
            </li>
            <li className="mobilenavbar__content--menu--item">
              <a
                href="/dhamaka"
                className="nav_link o_italic"
                data-title="halo studio"
              >
                Dhamaka
              </a>
            </li>
            {/* <li className="mobilenavbar__content--menu--item">
              <a
                href=""
                className="nav_link o_italic"
                data-title="halo collective"
              >
                halo collective
              </a>
            </li> */}
          </ul>
          <div className="mobilenavbar__content--footer">
            <div className="mobilenavbar__content--footer--col">
              <h6>CONTACT US</h6>
              <p>
                <a href="">01 234 56789</a>
              </p>
              <p>
                <a href="maillto:entertainment@media.com">
                  entertainment@media.com
                </a>
              </p>
            </div>
            <div className="mobilenavbar__content--footer--col">
              <h6>VISIT US</h6>
              <p>
                Suite 2703-2704 JBC2,
                <br />
                Cluster V, JLT, Dubai,
                <br />
                United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
