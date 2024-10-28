import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Artist = () => {
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
    document.querySelectorAll(".list-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item.querySelector("img"), { opacity: 1, duration: 0.5 });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item.querySelector("img"), {
          opacity: 0,
          duration: 0.5,
        });
      });
      item.addEventListener("mousemove", (event) => {
        const img = item.querySelector("img");
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        gsap.to(img, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    //   new gsap code
    var artisttex = document.querySelectorAll(".h2.a-name");
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
    let textNum = document.querySelectorAll(".h2.a-name span");
    let kubotaSpan = document.querySelectorAll(".h2.a-name.kubota span");
    let yutakaSpan = document.querySelectorAll(".h2.a-name.yutaka span");
    let izumiSpan = document.querySelectorAll(".h2.a-name.izumi span");
    let yuichiSpan = document.querySelectorAll(".h2.a-name.yuichi span");
    let kenSpan = document.querySelectorAll(".h2.a-name.ken span");
    let eikohSpan = document.querySelectorAll(".h2.a-name.eikoh span");
    let chiharuSpan = document.querySelectorAll(".h2.a-name.chiharu span");
    let chimpomSpan = document.querySelectorAll(".h2.a-name.chimpom span");
    let ishiuchiSpan = document.querySelectorAll(".h2.a-name.ishiuchi span");

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

      gsap.to(kenSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -360%",
          end: "top -450%",
          onEnter: () =>
            gsap.to(kenSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(kenSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(kenSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(kenSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(eikohSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -450%",
          end: "top -540%",
          onEnter: () =>
            gsap.to(eikohSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(eikohSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(eikohSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(eikohSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(chiharuSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -540%",
          end: "top -630%",
          onEnter: () =>
            gsap.to(chiharuSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(chiharuSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(chiharuSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(chiharuSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(chimpomSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -630%",
          end: "top -720%",
          onEnter: () =>
            gsap.to(chimpomSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(chimpomSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(chimpomSpan, {
              opacity: 0,
              yPercent: -100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(chimpomSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(ishiuchiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -720%",
          end: "top -810%",
          onEnter: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              yPercent: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 0,
              yPercent: 100,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });
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

      gsap.to(kenSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -360%",
          end: "top -450%",
          onEnter: () =>
            gsap.to(kenSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(kenSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(kenSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(kenSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(eikohSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -450%",
          end: "top -540%",
          onEnter: () =>
            gsap.to(eikohSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(eikohSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(eikohSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(eikohSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(chiharuSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -540%",
          end: "top -630%",
          onEnter: () =>
            gsap.to(chiharuSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(chiharuSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(chiharuSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(chiharuSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(chimpomSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -630%",
          end: "top -720%",
          onEnter: () =>
            gsap.to(chimpomSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(chimpomSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(chimpomSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(chimpomSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });

      gsap.to(ishiuchiSpan, {
        scrollTrigger: {
          trigger: ".section.artists",
          start: "top -720%",
          end: "top -810%",
          onEnter: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onEnterBack: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeave: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 1,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          onLeaveBack: () =>
            gsap.to(ishiuchiSpan, {
              opacity: 0,
              stagger: gsapStag,
              duration: gsapDur,
            }),
          scrub: true,
        },
      });
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
    gsap.to(gsapImgAnimKen, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -360%",
        end: "top -450%",
        onEnter: () =>
          gsap.to(gsapImgAnimKen, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimKen, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimKen, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimKen, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Eikoh
    gsap.to(gsapImgAnimEikoh, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -450%",
        end: "top -540%",
        onEnter: () =>
          gsap.to(gsapImgAnimEikoh, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimEikoh, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimEikoh, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimEikoh, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Chiharu
    gsap.to(gsapImgAnimChiharu, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -540%",
        end: "top -630%",
        onEnter: () =>
          gsap.to(gsapImgAnimChiharu, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimChiharu, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimChiharu, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimChiharu, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Chimpom
    gsap.to(gsapImgAnimChimpom, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -630%",
        end: "top -720%",
        onEnter: () =>
          gsap.to(gsapImgAnimChimpom, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimChimpom, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimChimpom, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimChimpom, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

    //Ishiuchi
    gsap.to(gsapImgAnimIshiuchi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -720%",
        end: "top -810%",
        onEnter: () =>
          gsap.to(gsapImgAnimIshiuchi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgAnimIshiuchi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeave: () =>
          gsap.to(gsapImgAnimIshiuchi, {
            scale: scaleAnim,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgAnimIshiuchi, {
            scale: scaleInit,
            stagger: imgArtStag,
            duration: imgArtDur,
          }),
        scrub: true,
      },
    });

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
    gsap.set(gsapImgKen, { opacity: 0 });
    gsap.to(gsapImgKen, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -360%",
        end: "top -450%",
        onEnter: () =>
          gsap.to(gsapImgKen, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgKen, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgKen, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgKen, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Eikoh
    gsap.set(gsapImgEikoh, { opacity: 0 });
    gsap.to(gsapImgEikoh, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -450%",
        end: "top -540%",
        onEnter: () =>
          gsap.to(gsapImgEikoh, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgEikoh, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgEikoh, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgEikoh, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Chiharu
    gsap.set(gsapImgChiharu, { opacity: 0 });
    gsap.to(gsapImgChiharu, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -540%",
        end: "top -630%",
        onEnter: () =>
          gsap.to(gsapImgChiharu, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgChiharu, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgChiharu, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgChiharu, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Chimpom
    gsap.set(gsapImgChimpom, { opacity: 0 });
    gsap.to(gsapImgChimpom, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -630%",
        end: "top -720%",
        onEnter: () =>
          gsap.to(gsapImgChimpom, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgChimpom, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgChimpom, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgChimpom, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });

    //Ishiuchi
    gsap.set(gsapImgIshiuchi, { opacity: 0 });
    gsap.to(gsapImgIshiuchi, {
      scrollTrigger: {
        trigger: ".section.artists",
        start: "top -720%",
        end: "top -810%",
        onEnter: () =>
          gsap.to(gsapImgIshiuchi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onEnterBack: () =>
          gsap.to(gsapImgIshiuchi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeave: () =>
          gsap.to(gsapImgIshiuchi, {
            opacity: 1,
            stagger: stagDuration,
            duration: animTime,
          }),
        onLeaveBack: () =>
          gsap.to(gsapImgIshiuchi, {
            opacity: 0,
            stagger: stagDuration,
            duration: animTime,
          }),
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <section className="section three">
        <div className="">
          <div className="h2-wrapper">
            <div className="h-wrapper align-top">
              <h1 className="artistsheading">artists</h1>
              <h1 className="h2 star">*</h1>
              <div className="border-bottom"></div>
            </div>
            <div className="description-wrapper">
              <div className="description-item is--hidden-in-mobile">
                <p className="description italic">contemporary</p>
              </div>
              <div className="description-item">
                <p className="description italic">conceptual</p>
              </div>
              <div className="description-item">
                <p className="description italic">performance</p>
              </div>
              <div className="description-item last">
                <p className="description italic cbp">(2023)</p>
              </div>
            </div>
          </div>
          <div id="aboutsection">
            <div id="aboutimages">
              <div
                id="w-node-dcef4b0a-0b81-f79b-7540-6e77ee6ccc9f-c7f4dd6b"
                className="aboutimages_grid-img wrapper"
              >
                <img
                  src="https://artworks.joe8lee.com/images/img_09.webp"
                  loading="lazy"
                  alt=""
                  className="aboutimages_grid-cell-img gsap"
                />
              </div>
              <div
                id="w-node-dcef4b0a-0b81-f79b-7540-6e77ee6ccca1-c7f4dd6b"
                className="aboutimages_grid-img wrapper"
              >
                <img
                  src="https://artworks.joe8lee.com/images/img_156.webp"
                  loading="lazy"
                  alt=""
                  className="aboutimages_grid-cell-img gsap"
                />
              </div>
              <div
                id="w-node-_2aa2d919-6be5-9a10-06b9-0433c83f6446-c7f4dd6b"
                className="aboutimages_grid-img wrapper is--visible-in-mobile visible-in-tablet"
              >
                <img
                  src="https://artworks.joe8lee.com/images/photo_03.jpg"
                  loading="lazy"
                  alt=""
                  className="aboutimages_grid-cell-img gsap"
                />
              </div>
            </div>

            <div className="about-a-section">
              <div className="text-inner-container bottom_margin">
                <h4 className="gallerypera">
                  The gallery is build upon tremendous works of art. As you
                  explore, you’ll gain a much deeper understanding of the
                  history behind some of the most iconic and acknowledged art
                  pieces
                </h4>
              </div>
              <div className="g-item-list">
                <div className="list-item one">
                  <p className="paragraph list">Photography</p>
                  <p className="paragraph italic list">(1)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_15.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item two">
                  <p className="paragraph list">Sculpture &amp; Paintings</p>
                  <p className="paragraph italic list">(2)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_75.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item three">
                  <p className="paragraph list">Black &amp; White</p>
                  <p className="paragraph italic list">(3)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_157.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item four">
                  <p className="paragraph list">Installation Art</p>
                  <p className="paragraph italic list">(4)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_200.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
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
              href="hiroji-kubota"
              className="h-wrapper centered kubota w-inline-block"
              style={{ pointerEvents: "none" }}
            >
              <h1 className="h2 a-name kubota">hiroji</h1>
              <h1 className="h2 a-name kubota">
                {/* <span className="art-letter">k</span> */}
                {/* <span className="art-letter t-letter">t</span> */}
                kubota
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="hiroji-kubota" /> */}
            <a
              href="yutaka-sone"
              className="h-wrapper centered yutaka w-inline-block"
            >
              <h1 className="h2 a-name yutaka">
                <span className="art-letter t-letter">T</span>
                yutaka
              </h1>
              <h1 className="h2 a-name yutaka">sone</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/yutaka-sone" /> */}
            <a
              href="izumi-kato"
              className="h-wrapper centered izumi w-inline-block"
            >
              <h1 className="h2 a-name izumi">izumi</h1>
              <h1 className="h2 a-name izumi">
                {/* <span className="art-letter a-letter">a</span> */}
                kato
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/izumi-kato" /> */}
            <a
              href="yuichi-hibi"
              className="h-wrapper centered yuichi w-inline-block"
            >
              <h1 className="h2 a-name yuichi">yuichi</h1>
              <h1 className="h2 a-name yuichi">hibi</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/yuichi-hibi" /> */}
            <a
              href="ken-domon"
              className="h-wrapper centered ken w-inline-block"
            >
              <h1 className="h2 a-name ken">ken</h1>
              <h1 className="h2 a-name ken">domom</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/ken-domon" /> */}
            <a
              href="eikoh-hosoe"
              className="h-wrapper centered eikoh w-inline-block"
            >
              <h1 className="h2 a-name eikoh">eikoh</h1>
              <h1 className="h2 a-name eikoh">hosoe</h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/eikoh-hosoe" /> */}
            <a
              href="chiharu-shiota"
              className="h-wrapper centered chiharu w-inline-block"
            >
              <h1 className="h2 a-name pad-left chiharu">chiharu</h1>
              <h1 className="h2 a-name chiharu">
                shiota
                {/* <span className="art-letter t-letter">t</span> */}
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/chiharu-shiota" /> */}
            <a
              href="chim-pom"
              className="h-wrapper centered chimpom w-inline-block"
            >
              <h1 className="h2 a-name chimpom">
                chim↑pom
                {/* <span className="art-letter">C</span>
                <span className="art-letter">h</span>
                <span className="art-letter">i</span>
                <span className="art-letter">m</span>
                <span className="art-letter">P</span>
                <span className="art-letter">o</span>
                <span className="art-letter">m</span> */}
                {/* <span className="art-letter symbol">↑</span> */}
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile chimpom">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/chim-pom" /> */}
            <a
              href="ishiuchi-miyako"
              className="h-wrapper centered ishiuchi w-inline-block"
            >
              <h1 className="h2 a-name ishiuchi">ishiuchi</h1>
              <h1 className="h2 a-name ishiuchi">
                {/* <span className="art-letter y-letter">y</span> */}
                miyko
              </h1>
              <p className="paragraph view-artist_button red is--visible-in-mobile">
                view artist
              </p>
            </a>
            {/* <link rel="prefetch" href="/ishiuchi-miyako" /> */}
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
                src="https://artworks.joe8lee.com/images/hk-01.jpg"
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
                src="https://artworks.joe8lee.com/images/hk-02.jpg"
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
                src="https://artworks.joe8lee.com/images/hk-03.jpg"
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
                src="https://artworks.joe8lee.com/images/YUTAKA_01.jpg"
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
                src="https://artworks.joe8lee.com/images/YUTAKA_02.jpg"
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
                src="https://artworks.joe8lee.com/images/Izumi_01.jpg"
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
                src="https://artworks.joe8lee.com/images/Izumi_02.jpg"
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
                src="https://artworks.joe8lee.com/images/Izumi_03.jpg"
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
                src="https://artworks.joe8lee.com/images/Yuichi_01.jpg"
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
                src="https://artworks.joe8lee.com/images/Yuichi_02.jpg"
                loading="lazy"
                alt=""
                className="artist_grid-cell-img art-info"
              />
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </div>
      </section>
      <section className="sectionlinks">
        <div className="content2 grid artist-links">
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab3-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_02.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab5-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_05.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab7-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_03.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab9-c7f4dd6b"
            className="sectionlinks_grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
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
            <div className="artist-links">
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
            <div className="artist-links align-right">
              <a href="hiroji-kubota" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="yutaka-sone" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="izumi-kato" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="yuichi-hibi" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="ken-domon" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="eikoh-hosoe" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="chiharu-shiota" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="chim-pom" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                  <div className="border-bottom link-border"></div>
                </div>
                <img src="" loading="lazy" alt="" />
              </a>
              <a href="ishiuchi-miyako" className="link w-inline-block">
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
      {/* <section className="section three">
        <div className="content grid artists">
          <div className="h2-wrapper">
            <div className="h-wrapper align-top">
              <h1 className="artistsheading">artists</h1>
              <h1 className="h2 star">*</h1>
              <div className="border-bottom" />
            </div>
            <div className="description-wrapper">
              <div className="description-item is--hidden-in-mobile">
                <p className="description italic">contemporary</p>
              </div>
              <div className="description-item">
                <p className="description italic">conceptual</p>
              </div>
              <div className="description-item">
                <p className="description italic">performance</p>
              </div>
              <div className="description-item last">
                <p className="description italic cbp">(2023)</p>
              </div>
            </div>
          </div>
          <div id="aboutsection">
            <div id="aboutimages">
              <div id="aboutimagesw-node-1" className="grid-img wrapper">
                <img
                  src="https://artworks.joe8lee.com/images/img_09.webp"
                  loading="lazy"
                  alt=""
                  className="grid-cell-img gsap"
                />
              </div>
              <div
                id="w-node-dcef4b0a-0b81-f79b-7540-6e77ee6ccca1-c7f4dd6b"
                className="grid-img wrapper"
              >
                <img
                  src="https://artworks.joe8lee.com/images/img_156.webp"
                  loading="lazy"
                  alt=""
                  className="grid-cell-img gsap"
                />
              </div>
              <div
                id="w-node-_2aa2d919-6be5-9a10-06b9-0433c83f6446-c7f4dd6b"
                className="grid-img wrapper is--visible-in-mobile visible-in-tablet"
              >
                <img
                  src="https://artworks.joe8lee.com/images/photo_03.jpg"
                  loading="lazy"
                  alt=""
                  className="grid-cell-img gsap"
                />
              </div>
            </div>
            <div className="about-a-section">
              <div className="text-inner-container bottom_margin">
                <h4 className="gallerypera">
                  The gallery is build upon tremendous works of art. As you
                  explore, you’ll gain a much deeper understanding of the
                  history behind some of the most iconic and acknowledged art
                  pieces
                </h4>
              </div>
              <div className="g-item-list">
                <div className="list-item one">
                  <p className="paragraph list">Photography</p>
                  <p className="paragraph italic list">(1)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_15.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item two">
                  <p className="paragraph list">Sculpture &amp; Paintings</p>
                  <p className="paragraph italic list">(2)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_75.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item three">
                  <p className="paragraph list">Black &amp; White</p>
                  <p className="paragraph italic list">(3)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_157.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
                <div className="list-item four">
                  <p className="paragraph list">Installation Art</p>
                  <p className="paragraph italic list">(4)</p>
                  <img
                    src="https://artworks.joe8lee.com/images/img_200.webp"
                    loading="eager"
                    alt=""
                    className="img is--absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionlink">
        <div className="content2 grid artist-links">
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab3-c7f4dd6b"
            className="grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_02.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab5-c7f4dd6b"
            className="grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_05.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab7-c7f4dd6b"
            className="grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_03.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896bab9-c7f4dd6b"
            className="grid-img wrapper"
          >
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_1cae41b8-9168-5f5b-112a-d8b08896babb-c7f4dd6b"
            className="grid-cell"
          >
            <div className="artist-links">
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
            <div className="artist-links align-right">
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
              <a href="#" className="link w-inline-block">
                <div className="link_text-container">
                  <p className="description italic">link</p>
                </div>
                <img
                  src="https://artworks.joe8lee.com/images/arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <link rel="prefetch" href="#" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Artist;
