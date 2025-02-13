import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Image from "next/image";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Artist = () => {
  useEffect(() => {
    const paraHeaders = document.querySelectorAll(".para-btn-cntr");

    const toggleVisibility = (event) => {
      const button = event.currentTarget; // Get the clicked button
      const hiddenParaCntr = button
        .closest(".item")
        .querySelector(".g-item-list-para-cntr"); // Find the corresponding content
      const plusMinus = button.querySelector(".plus-minus"); // Select the specific plus-minus for the clicked button

      // Toggle the open class on the button
      const isOpen = button.classList.toggle("open");

      if (isOpen) {
        // Add open class to the specific plus-minus
        plusMinus.classList.add("open");
        plusMinus.classList.remove("active"); // Ensure active is removed

        // Optionally close other items
        paraHeaders.forEach((otherButton) => {
          if (otherButton !== button) {
            otherButton.classList.remove("open");
            otherButton.querySelector(".plus-minus").classList.remove("open");
            otherButton.querySelector(".plus-minus").classList.add("active"); // Add active to remove content
            const otherContent = otherButton
              .closest(".item")
              .querySelector(".g-item-list-para-cntr");
            gsap.to(otherContent, {
              height: 0,
              duration: 0.5,
              ease: "expo.inout",
            });
          }
        });

        // Animate the clicked content
        gsap.to(hiddenParaCntr, {
          height: "auto",
          duration: 0.5,
          ease: "expo.inout",
        });
      } else {
        // Remove open class from the specific plus-minus
        plusMinus.classList.remove("open");
        plusMinus.classList.add("active"); // Add active to remove content
        gsap.to(hiddenParaCntr, {
          height: 0,
          duration: 0.5,
          ease: "expo.inout",
        });
      }
    };

    // Attach event listeners to each button
    paraHeaders.forEach((button) => {
      button.addEventListener("click", toggleVisibility);
    });

    // Open the first paragraph container on page load
    if (paraHeaders.length > 0) {
      const firstButton = paraHeaders[0];
      const firstPlusMinus = firstButton.querySelector(".plus-minus");
      firstButton.classList.add("open");
      firstPlusMinus.classList.add("open");
      firstPlusMinus.classList.remove("active");

      const firstContent = firstButton
        .closest(".item")
        .querySelector(".g-item-list-para-cntr");
      gsap.to(firstContent, {
        height: "auto",
        duration: 0.5,
        ease: "expo.inout",
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      paraHeaders.forEach((button) => {
        button.removeEventListener("click", toggleVisibility);
      });
    };
  }, []);

  useEffect(() => {
    // gsap.to("#aboutimages .grid-cell-img", {
    //   scale: 1,
    //   scrollTrigger: {
    //     trigger: "#aboutsection",
    //     // scroller: "body",
    //     start: "0% 50%",
    //     end: "20% 40%",
    //     scrub: 0.5,
    //   },
    // });
    // gsap.to(".sectionlink .grid-cell-img", {
    //   scale: 1,
    //   scrollTrigger: {
    //     trigger: ".sectionlink",
    //     // scroller: "body",
    //     start: "bottom 50%",
    //     end: "bottom 40%",
    //     scrub: 0.5,
    //   },
    // });

    //   artist image hover animation
    // document.querySelectorAll(".list-item").forEach((item) => {
    //   item.addEventListener("mouseenter", () => {
    //     gsap.to(item.querySelector("img"), { opacity: 1, duration: 0.5 });
    //   });
    //   item.addEventListener("mouseleave", () => {
    //     gsap.to(item.querySelector("img"), {
    //       opacity: 0,
    //       duration: 0.5,
    //     });
    //   });
    //   item.addEventListener("mousemove", (event) => {
    //     const img = item.querySelector("img");
    //     const rect = item.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const y = event.clientY - rect.top;
    //     gsap.to(img, {
    //       x: x - rect.width / 2,
    //       y: y - rect.height / 2,
    //       duration: 0.3,
    //       ease: "power2.out",
    //     });
    //   });
    // });

    //   new gsap code
    var artisttex = document.querySelectorAll(".h-wrapper_h2.a-name");
    var allLetters = [];
    artisttex.forEach((name) => {
      var clutter = "";
      // ... existing code ...
      name.textContent.split("").forEach((letter, index) => {
        clutter += `<span class="art-letter">${letter}</span>`;
      });
      // ... existing code ...
      name.innerHTML = clutter;
      //   allLetters.push(...name.querySelectorAll(".letterspan"));
    });
    let showImg = document.querySelectorAll("#artistsection .artist-grid-img");
    let textNum = document.querySelectorAll(".h-wrapper_h2.a-name span");
    let kubotaSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.kubota span"
    );
    let yutakaSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.yutaka span"
    );
    let izumiSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.izumi span"
    );
    let yuichiSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.yuichi span"
    );
    let kenSpan = document.querySelectorAll(".h-wrapper_h2.a-name.ken span");
    let eikohSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.eikoh span"
    );
    let chiharuSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.chiharu span"
    );
    let chimpomSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.chimpom span"
    );
    let ishiuchiSpan = document.querySelectorAll(
      ".h-wrapper_h2.a-name.ishiuchi span"
    );

    if (window.matchMedia("(min-width: 1200px)").matches) {
      gsap.set(textNum, { opacity: 0, yPercent: 100 });

      //animation-settings
      let gsapDur = 0.5;
      let gsapStag = 0.04;

      //kubota
      gsap.to(kubotaSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top 50%",
          end: "top -90%",
          onEnter: () =>
            gsap.to(kubotaSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(kubotaSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(kubotaSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(kubotaSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(yutakaSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -90%",
          end: "top -180%",
          onEnter: () =>
            gsap.to(yutakaSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(yutakaSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(yutakaSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(yutakaSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(izumiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -180%",
          end: "top -270%",
          onEnter: () =>
            gsap.to(izumiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(izumiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(izumiSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(izumiSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(yuichiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -270%",
          end: "top -360%",
          onEnter: () =>
            gsap.to(yuichiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(yuichiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(yuichiSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(yuichiSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      // gsap.to(kenSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -360%",
      //     end: "top -450%",
      //     onEnter: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 0,
      //         yPercent: -100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 0,
      //         yPercent: 100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(eikohSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -450%",
      //     end: "top -540%",
      //     onEnter: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 0,
      //         yPercent: -100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 0,
      //         yPercent: 100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(chiharuSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -540%",
      //     end: "top -630%",
      //     onEnter: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 0,
      //         yPercent: -100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 0,
      //         yPercent: 100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(chimpomSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -630%",
      //     end: "top -720%",
      //     onEnter: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 0,
      //         yPercent: -100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 0,
      //         yPercent: 100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(ishiuchiSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -720%",
      //     end: "top -810%",
      //     onEnter: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         yPercent: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 0,
      //         yPercent: 100,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });
    } else {
      gsap.set(textNum, { opacity: 0 });

      //animation-settings
      let gsapDur = 0.5;
      let gsapStag = 0.04;

      //kubota
      gsap.to(kubotaSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top 50%",
          end: "top -90%",
          onEnter: () =>
            gsap.to(kubotaSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(kubotaSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(kubotaSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(kubotaSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(yutakaSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -90%",
          end: "top -180%",
          onEnter: () =>
            gsap.to(yutakaSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(yutakaSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(yutakaSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(yutakaSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(izumiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -180%",
          end: "top -270%",
          onEnter: () =>
            gsap.to(izumiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(izumiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(izumiSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(izumiSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(yuichiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -270%",
          end: "top -360%",
          onEnter: () =>
            gsap.to(yuichiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(yuichiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(yuichiSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(yuichiSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      // gsap.to(kenSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -360%",
      //     end: "top -450%",
      //     onEnter: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(kenSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(eikohSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -450%",
      //     end: "top -540%",
      //     onEnter: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(eikohSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(chiharuSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -540%",
      //     end: "top -630%",
      //     onEnter: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(chiharuSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(chimpomSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -630%",
      //     end: "top -720%",
      //     onEnter: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(chimpomSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });

      // gsap.to(ishiuchiSpan, {
      //   scrollTrigger: {
      //     trigger: ".section.artists",
      //     start: "top -720%",
      //     end: "top -810%",
      //     onEnter: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onEnterBack: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeave: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 1,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     onLeaveBack: () =>
      //       gsap.to(ishiuchiSpan, {
      //         opacity: 0,
      //         stagger: gsapStag,
      //         duration: gsapDur,
      //       }),
      //     scrub: true,
      //   },
      // });
    }
    //   Image scaling animation on scroll
    let gsapImgAnimKubota = document.querySelectorAll(
      ".artist-grid-img.hiroji .artist_grid-cell-img"
    );
    let gsapImgAnimYutaka = document.querySelectorAll(
      ".artist-grid-img.yutaka .artist_grid-cell-img"
    );
    let gsapImgAnimIzumi = document.querySelectorAll(
      ".artist-grid-img.izumi .artist_grid-cell-img"
    );
    let gsapImgAnimYuichi = document.querySelectorAll(
      ".artist-grid-img.yuichi .artist_grid-cell-img"
    );
    let gsapImgAnimKen = document.querySelectorAll(
      ".artist-grid-img.ken .artist_grid-cell-img"
    );
    let gsapImgAnimEikoh = document.querySelectorAll(
      ".artist-grid-img.eikoh .artist_grid-cell-img"
    );
    let gsapImgAnimChiharu = document.querySelectorAll(
      ".artist-grid-img.chiharu .artist_grid-cell-img"
    );
    let gsapImgAnimChimpom = document.querySelectorAll(
      ".artist-grid-img.chimpom .artist_grid-cell-img"
    );
    let gsapImgAnimIshiuchi = document.querySelectorAll(
      ".artist-grid-img.ishiuchi .artist_grid-cell-img"
    );
    // gsap.registerPlugin(ScrollTrigger);

    let imgArtStag = 0.1;
    let imgArtDur = 0.6;
    let scaleInit = 1.3;
    let scaleAnim = 1;
    //Kubota
    gsap.to(gsapImgAnimKubota, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top 50%",
        end: "top -90%",
        onEnter: () =>
          gsap.to(gsapImgAnimKubota, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimKubota, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimKubota, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimKubota, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Yutaka
    gsap.to(gsapImgAnimYutaka, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -90%",
        end: "top -180%",
        onEnter: () =>
          gsap.to(gsapImgAnimYutaka, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimYutaka, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimYutaka, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimYutaka, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Izumi
    gsap.to(gsapImgAnimIzumi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -180%",
        end: "top -270%",
        onEnter: () =>
          gsap.to(gsapImgAnimIzumi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimIzumi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimIzumi, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimIzumi, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Yuichi
    gsap.to(gsapImgAnimYuichi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -270%",
        end: "top -360%",
        onEnter: () =>
          gsap.to(gsapImgAnimYuichi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimYuichi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimYuichi, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimYuichi, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Ken
    // gsap.to(gsapImgAnimKen, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -360%",
    //     end: "top -450%",
    //     onEnter: () =>
    //       gsap.to(gsapImgAnimKen, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgAnimKen, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgAnimKen, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgAnimKen, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Eikoh
    // gsap.to(gsapImgAnimEikoh, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -450%",
    //     end: "top -540%",
    //     onEnter: () =>
    //       gsap.to(gsapImgAnimEikoh, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgAnimEikoh, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgAnimEikoh, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgAnimEikoh, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Chiharu
    // gsap.to(gsapImgAnimChiharu, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -540%",
    //     end: "top -630%",
    //     onEnter: () =>
    //       gsap.to(gsapImgAnimChiharu, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgAnimChiharu, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgAnimChiharu, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgAnimChiharu, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Chimpom
    // gsap.to(gsapImgAnimChimpom, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -630%",
    //     end: "top -720%",
    //     onEnter: () =>
    //       gsap.to(gsapImgAnimChimpom, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgAnimChimpom, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgAnimChimpom, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgAnimChimpom, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Ishiuchi
    // gsap.to(gsapImgAnimIshiuchi, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -720%",
    //     end: "top -810%",
    //     onEnter: () =>
    //       gsap.to(gsapImgAnimIshiuchi, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgAnimIshiuchi, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgAnimIshiuchi, {
    //         scale: scaleAnim,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgAnimIshiuchi, {
    //         scale: scaleInit,
    //         stagger: imgArtStag,
    //         duration: imgArtDur,
    //       }),
    //     scrub: true,
    //   },
    // });

    //   Grid image revealed anim

    let gsapImgKubota = document.querySelectorAll(".artist-grid-img.hiroji");
    let gsapImgYutaka = document.querySelectorAll(".artist-grid-img.yutaka");
    let gsapImgIzumi = document.querySelectorAll(".artist-grid-img.izumi");
    let gsapImgYuichi = document.querySelectorAll(".artist-grid-img.yuichi");
    let gsapImgKen = document.querySelectorAll(".artist-grid-img.ken");
    let gsapImgEikoh = document.querySelectorAll(".artist-grid-img.eikoh");
    let gsapImgChiharu = document.querySelectorAll(".artist-grid-img.chiharu");
    let gsapImgChimpom = document.querySelectorAll(".artist-grid-img.chimpom");
    let gsapImgIshiuchi = document.querySelectorAll(
      ".artist-grid-img.ishiuchi"
    );
    // gsap.registerPlugin(ScrollTrigger);

    let stagDuration = 0.1;
    let animTime = 0.08;

    //Kubota
    gsap.set(gsapImgKubota, { opacity: 1 });
    gsap.to(gsapImgKubota, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top 0%",
        end: "top -90%",
        onEnter: () =>
          gsap.to(gsapImgKubota, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgKubota, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgKubota, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgKubota, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Yutaka
    gsap.set(gsapImgYutaka, { opacity: 0 });
    gsap.to(gsapImgYutaka, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -90%",
        end: "top -180%",
        onEnter: () =>
          gsap.to(gsapImgYutaka, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgYutaka, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgYutaka, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgYutaka, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Izumi
    gsap.set(gsapImgIzumi, { opacity: 0 });
    gsap.to(gsapImgIzumi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -180%",
        end: "top -270%",
        onEnter: () =>
          gsap.to(gsapImgIzumi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgIzumi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgIzumi, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgIzumi, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Yuichi
    gsap.set(gsapImgYuichi, { opacity: 0 });
    gsap.to(gsapImgYuichi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -270%",
        end: "top -360%",
        onEnter: () =>
          gsap.to(gsapImgYuichi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgYuichi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgYuichi, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgYuichi, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Ken
    // gsap.set(gsapImgKen, { opacity: 0 });
    // gsap.to(gsapImgKen, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -360%",
    //     end: "top -450%",
    //     onEnter: () =>
    //       gsap.to(gsapImgKen, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgKen, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgKen, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgKen, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Eikoh
    // gsap.set(gsapImgEikoh, { opacity: 0 });
    // gsap.to(gsapImgEikoh, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -450%",
    //     end: "top -540%",
    //     onEnter: () =>
    //       gsap.to(gsapImgEikoh, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgEikoh, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgEikoh, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgEikoh, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Chiharu
    // gsap.set(gsapImgChiharu, { opacity: 0 });
    // gsap.to(gsapImgChiharu, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -540%",
    //     end: "top -630%",
    //     onEnter: () =>
    //       gsap.to(gsapImgChiharu, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgChiharu, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgChiharu, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgChiharu, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Chimpom
    // gsap.set(gsapImgChimpom, { opacity: 0 });
    // gsap.to(gsapImgChimpom, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -630%",
    //     end: "top -720%",
    //     onEnter: () =>
    //       gsap.to(gsapImgChimpom, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgChimpom, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgChimpom, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgChimpom, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     scrub: true,
    //   },
    // });

    //Ishiuchi
    // gsap.set(gsapImgIshiuchi, { opacity: 0 });
    // gsap.to(gsapImgIshiuchi, {
    //   scrollTrigger: {
    //     trigger: ".section.artists",
    //     start: "top -720%",
    //     end: "top -810%",
    //     onEnter: () =>
    //       gsap.to(gsapImgIshiuchi, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onEnterBack: () =>
    //       gsap.to(gsapImgIshiuchi, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeave: () =>
    //       gsap.to(gsapImgIshiuchi, {
    //         opacity: 1,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(gsapImgIshiuchi, {
    //         opacity: 0,
    //         stagger: stagDuration,
    //         duration: animTime,
    //       }),
    //     scrub: true,
    //   },
    // });
  }, []);

  // useEffect(() => {
  //   const quotess = document.querySelectorAll(".quotetriggerr");
  //   const items = document.querySelectorAll(".item"); // Correct selector for .item class

  //   items.forEach((item) => {
  //     const styles = window.getComputedStyle(item, "::after");
  //     const borderBottom = styles.getPropertyValue("border-bottom"); // Access the 'border-bottom' property of the ::after pseudo-element

  //     console.log(borderBottom); // Log the border-bottom style
  //   });

  //   function setupSplits() {
  //     quotess.forEach((quotes) => {
  //       const splitTexts = new SplitText(quotes, {
  //         type: "lines",
  //         linesClass: "split-linee",
  //       });
  //       gsap.set(".split-linee", { yPercent: 100, overflow: "hidden" });

  //       // Apply transition to the border-bottom in the pseudo-element
  //       items.forEach((item) => {
  //         gsap.set(item, {
  //           // Set initial state of border (width to 0%)
  //           "--border-width": "0%",
  //         });
  //       });

  //       // Add ScrollTrigger to handle the animations
  //       ScrollTrigger.batch(".quotetriggerCntrr", {
  //         onEnter: (batch) => {
  //           batch.forEach((section, i) => {
  //             gsap.to(section.querySelectorAll(".split-linee"), {
  //               // Animate the text
  //               yPercent: 0,
  //               duration: 0.8,
  //               ease: "power1.inOut",
  //               stagger: 0.05,
  //               delay: i * 0.1,
  //             });

  //             // Animate the border of the item (pseudo-element's border-bottom)
  //             gsap.to(section, {
  //               duration: 0.8,
  //               ease: "power1.inOut",
  //               stagger: 0.05,
  //               delay: i * 0.1,
  //               "--border-width": "100%", // Change custom property for the border width
  //             });
  //           });
  //         },
  //         start: "top 95%",
  //       });
  //     });
  //   }

  //   setupSplits();
  // }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, SplitText);

  //   var quotess = document.querySelectorAll(".quotetriggerr");
  //   function setupSplits() {
  //     quotess.forEach((quote) => {
  //       console.log(quote);
  //       // Reset animation and splits if needed
  //       if (quote.anim) {
  //         quote.anim.progress(1).kill(); // Stop the existing animation
  //         quote.split.revert(); // Revert splitText
  //       }

  //       // Split text into lines
  //       quote.split = new SplitText(quote, {
  //         type: "lines,words",
  //         linesClass: "split-line",
  //       });

  //       // Set up new animation
  //       quote.anim = gsap.from(quote.split, {
  //         scrollTrigger: {
  //           trigger: quote,
  //           toggleActions: "restart pause resume reverse",
  //           start: "top 95%",
  //           markers: false,
  //         },
  //         duration: 0.6,
  //         ease: "circ.out",
  //         y: 80,
  //         stagger: 0.02,
  //       });
  //     });
  //   }

  //   // Setup splits on initial load
  //   setupSplits();

  //   // Re-run setupSplits on ScrollTrigger refresh
  //   ScrollTrigger.addEventListener("refresh", setupSplits);

  //   // Cleanup function to remove listeners when component is unmounted
  //   return () => {
  //     ScrollTrigger.removeEventListener("refresh", setupSplits);
  //     quotess.forEach((quote) => {
  //       if (quote.split) {
  //         quote.split.revert(); // Revert any splits when component is unmounted
  //       }
  //     });
  //   };
  // }, []);
  return (
    <>
      <section className="section three quotetriggerCntrr">
        <div className="">
          <div id="aboutsection">
            <div className="">
              <div className="h2-wrapper">
                <div className="h-wrapper align-top">
                  <h1 className="artistsheading quotetriggerr">Our Services</h1>
                  {/* <h1 className="h2 star">*</h1> */}

                  {/* <div className="border-bottom"></div> */}
                </div>
              </div>
              <div className="text-inner-container bottom_margin">
                <h4 className="gallerypera quotetriggerr">
                  At Rage Media, we offer all services in-house, covering every
                  aspect of your brand needs. Our multi-brand structure allows
                  us to seamlessly integrate strategies, ensuring a cohesive and
                  tailored approach for each client.
                </h4>
              </div>
            </div>

            <div className="about-a-section">
              {/* <div className="text-inner-container bottom_margin">
                <h4 className="gallerypera">
                  At Rage Media, we offer all services in-house, covering every
                  aspect of your brand needs. Our multi-brand structure allows
                  us to seamlessly integrate strategies, ensuring a cohesive and
                  tailored approach for each client.
                </h4>
              </div> */}
              <div className="g-item-list quote">
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Celebrity Management
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Digital Marketing
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Website Development
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Brand Shoots
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Launch Events
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Influencer Marketing
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="item quotetriggerCntrr">
                  <header className="">
                    <button className="para-btn-cntr">
                      <h3 className="para_title_head quotetriggerr">
                        Public Relations (PR)
                      </h3>
                      <span
                        className="flex-shrink-0 plus-minus flex-shrink-0"
                        // tag="span"
                        role="presentation"
                      ></span>
                    </button>
                  </header>
                  <div className="g-item-list-para-cntr">
                    <div className="g-item-content">
                      <div className="g-item-content-inside">
                        It’s the result of the unprecedented{" "}
                        <a href="" target="_blank" rel="noopener">
                          collaboration
                        </a>{" "}
                        between the iconic Absolut Vodka and one of the most
                        visionary and creative Italian design brands: Seletti.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="artistsection" className="section artists">
        <div className="artist-wrapper">
          <div className="artist-name gsap-scroll num1">
            <a
              href="/newPage/product"
              className="h-wrapper centered kubota w-inline-block"
              style={{ pointerEvents: "none" }}
            >
              <h1 className="h-wrapper_h2 a-name kubota">hiroji</h1>
              <h1 className="h-wrapper_h2 a-name kubota">kubota</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="hiroji-kubota" /> */}
            <a
              href="/newPage/product"
              className="h-wrapper centered yutaka w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name yutaka">
                <span className="art-letter t-letter">T</span>
                yutaka
              </h1>
              <h1 className="h-wrapper_h2 a-name yutaka">sone</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/yutaka-sone" /> */}
            <a
              href="/newPage/product"
              className="h-wrapper centered izumi w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name izumi">izumi</h1>
              <h1 className="h-wrapper_h2 a-name izumi">
                {/* <span className="art-letter a-letter">a</span> */}
                kato
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/izumi-kato" /> */}
            <a
              href="/newPage/product"
              className="h-wrapper centered yuichi w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name yuichi">yuichi</h1>
              <h1 className="h-wrapper_h2 a-name yuichi">hibi</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/yuichi-hibi" /> */}
            {/* <a
              href="/newPage/product"
              className="h-wrapper centered ken w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name ken">ken</h1>
              <h1 className="h-wrapper_h2 a-name ken">domom</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a> */}

            {/* <a
              href="/newPage/product"
              className="h-wrapper centered eikoh w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name eikoh">eikoh</h1>
              <h1 className="h-wrapper_h2 a-name eikoh">hosoe</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a> */}

            {/* <a
              href="/newPage/product"
              className="h-wrapper centered chiharu w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name pad-left chiharu">chiharu</h1>
              <h1 className="h-wrapper_h2 a-name chiharu">
                shiota
               
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a> */}

            {/* <a
              href="/newPage/product"
              className="h-wrapper centered chimpom w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name chimpom">
                chim↑pom
               
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile chimpom">
                view artist
              </p>
            </a> */}

            {/* <a
              href="/newPage/product"
              className="h-wrapper centered ishiuchi w-inline-block"
            >
              <h1 className="h-wrapper_h2 a-name ishiuchi">ishiuchi</h1>
              <h1 className="h-wrapper_h2 a-name ishiuchi">
                
                miyko
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a> */}
          </div>
          <div className="w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html: "\n.h2.a-name span {\ndisplay: inline-block;\n}",
              }}
            />
          </div>
        </div>
        <div className="content-wrapper centered">
          <div className="content grid artist-info">
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b822-c7f4dd6b"
              className="artist-grid-img hiroji is--active"
            >
              <img
                src="/assets/images/RangeMedia/DSC05253.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b824-c7f4dd6b"
              className="artist-grid-img hiroji is--active"
            >
              <img
                src="/assets/images/RangeMedia/DSC04847.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b826-c7f4dd6b"
              className="artist-grid-img hiroji is--active"
            >
              <img
                src="/assets/images/RangeMedia/Darkroom (Bangalore).jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b828-c7f4dd6b"
              className="artist-grid-img yutaka"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/Bryan_Portray-52.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82a-c7f4dd6b"
              className="artist-grid-img yutaka"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/BOGOTA-18.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82c-c7f4dd6b"
              className="artist-grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/ragemedia_home_image.jpeg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82e-c7f4dd6b"
              className="artist-grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/Rage by the bay2.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b830-c7f4dd6b"
              className="artist-grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/gold dusk .jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b832-c7f4dd6b"
              className="artist-grid-img yuichi"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/Dyavol after dark2.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b834-c7f4dd6b"
              className="artist-grid-img yuichi"
              style={{ opacity: 0 }}
            >
              <img
                src="/assets/images/RangeMedia/413465283_316743758005094_8521863154678045555_n.webp"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b836-c7f4dd6b"
              className="artist-grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_01.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b838-c7f4dd6b"
              className="artist-grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83a-c7f4dd6b"
              className="artist-grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_03.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83c-c7f4dd6b"
              className="artist-grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_01.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83e-c7f4dd6b"
              className="artist-grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b840-c7f4dd6b"
              className="artist-grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_03.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b842-c7f4dd6b"
              className="artist-grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_01.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b844-c7f4dd6b"
              className="artist-grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b846-c7f4dd6b"
              className="artist-grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_03.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b848-c7f4dd6b"
              className="artist-grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_01.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84a-c7f4dd6b"
              className="artist-grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84c-c7f4dd6b"
              className="artist-grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_03.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84e-c7f4dd6b"
              className="artist-grid-img ishiuchi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ishiuchi_01.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
            {/* <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b850-c7f4dd6b"
              className="artist-grid-img ishiuchi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ishiuchi_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div> */}
          </div>
        </div>
      </section>
      <section className="sectionlinks">
        <div className="content2 grid artist-links">
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab3-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/3-3 (1)-2.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab5-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/Dyavol after dark2.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab7-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/Bryan_Portray-52.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab9-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/RangeMedia/ragemedia_home_image.jpeg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896babb-c7f4dd6b"
            className="grid-cell"
          >
            <div className="w-embed">
              {/* <style>
                  .artist-links .description.italic {
                    margin-bottom: 0.1em;
                  }
                </style> */}
            </div>
            <div className="artist-links quote">
              <p className="description italic">Hiroji Kubota</p>
              <p className="description italic">Yutaka Sone</p>
              <p className="description italic">Izumi Kato</p>
              <p className="description italic">Yuichi Hibi</p>
              <p className="description italic">Ken Domon</p>
              <p className="description italic">Eikoh Hosoe</p>
              <p className="description italic">Chiharu Shiota</p>
              <p className="description italic">Chim↑Pom</p>
              <p className="description italic">Ishiuchi Miyako</p>
            </div>
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bad0-c7f4dd6b"
            className="grid-cell"
          >
            <div className="artist-links align-right quote">
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Artist;
