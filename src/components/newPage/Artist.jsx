import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Artist = () => {
  useEffect(() => {
    gsap.to("#aboutimages .grid-cell-img", {
      scale: 1,
      scrollTrigger: {
        trigger: "#aboutsection",
        // scroller: "body",
        start: "0% 50%",
        end: "20% 40%",
        scrub: 0.5,
      },
    });
    gsap.to(".sectionlink .grid-cell-img", {
      scale: 1,
      scrollTrigger: {
        trigger: ".sectionlink",
        // scroller: "body",
        start: "bottom 50%",
        end: "bottom 40%",
        scrub: 0.5,
      },
    });
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

    var artisttex = document.querySelectorAll(".artisttext");
    var allLetters = [];
    artisttex.forEach((name) => {
      var clutter = "";
      // ... existing code ...
      name.textContent.split("").forEach((letter, index) => {
        clutter += `<div class="letterspan letterspan${index}">${letter}</div>`;
      });
      // ... existing code ...
      name.innerHTML = clutter;
      allLetters.push(...name.querySelectorAll(".letterspan"));
    });

    gsap.from("#textone .letterspan", {
      y: 50,
      stagger: {
        each: 0.6,
      },
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "#artistWrapper",
        // scroller: "body",
        start: "20% 70%",
        end: "30% 50%",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(".hiroji .grid-cell-img", {
      scale: 1,
      scrollTrigger: {
        trigger: "#artistWrapper",
        // scroller: "body",
        start: "20% 70%",
        end: "30% 50%",
        scrub: 0.5,
      },
    });

    // var artistsection = document.querySelector("#artistsection").offsetHeight;
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#artistsection",
        // scroller: "body",
        start: "-0.1% top",
        end: "top -400%",
        // pin: true,
        scrub: 10,
        markers: true,
      },
    });
    tl.to(
      "#textone .letterspan",
      {
        y: "-100%",
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "none",
        delay: 3,
      },
      "a"
    )
      .from(
        "#texttwo .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "none",
          delay: 3,
        },
        "a"
      )
      .to(
        ".hiroji",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "a"
      )
      .to(
        ".yutaka",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "a"
      )
      .to(
        ".yutaka .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "a"
      )

      .to(
        "#texttwo .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "b"
      )
      .from(
        "#textthree .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "b"
      )
      .to(
        ".yutaka",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "b"
      )
      .to(
        ".izumi",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "b"
      )
      .to(
        ".izumi .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "b"
      )

      .to(
        "#textthree .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "c"
      )
      .from(
        "#textfour .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "c"
      )
      .to(
        ".izumi",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "c"
      )
      .to(
        ".yuichi",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "c"
      )
      .to(
        ".yuichi .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "c"
      )

      .to(
        "#textfour .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "d"
      )
      .from(
        "#textfive .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "d"
      )
      .to(
        ".yuichi",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "d"
      )
      .to(
        ".ken",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "d"
      )
      .to(
        ".ken .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "d"
      )

      .to(
        "#textfive .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "e"
      )
      .from(
        "#textsix .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "e"
      )
      .to(
        ".ken",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "e"
      )
      .to(
        ".eikoh",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "e"
      )
      .to(
        ".eikoh .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "e"
      )

      .to(
        "#textsix .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "f"
      )
      .from(
        "#textseven .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "f"
      )
      .to(
        ".eikoh",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "f"
      )
      .to(
        ".chiharu",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "f"
      )
      .to(
        ".chiharu .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "f"
      )

      .to(
        "#textseven .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "g"
      )
      .from(
        "#texteight .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "g"
      )
      .to(
        ".chiharu",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "g"
      )
      .to(
        ".chimpom",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "g"
      )
      .to(
        ".chimpom .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "g"
      )

      .to(
        "#texteight .letterspan",
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "h"
      )
      .from(
        "#textnine .letterspan",
        {
          y: "50",
          opacity: 0,
          duration: 1.5,
          delay: 3,
          stagger: 0.1,
          ease: "none",
        },
        "h"
      )
      .to(
        ".chimpom",
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
        },
        "h"
      )
      .to(
        ".ishiuchi",
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
        "h"
      )
      .to(
        ".ishiuchi .grid-cell-img",
        {
          scale: 1,
          duration: 1.5,
          delay: 3,
        },
        "h"
      );

    const artistTextWrapper = document.querySelector(".artisttext-wraper");
    const viewCursore = document.querySelector(".viewcursore");

    artistTextWrapper.addEventListener("mousemove", (dets) => {
      const rect = artistTextWrapper.getBoundingClientRect();
      const x = dets.clientX - rect.left;
      const y = dets.clientY - rect.top;

      gsap.to(viewCursore, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    artistTextWrapper.addEventListener("mouseenter", () => {
      gsap.to(viewCursore, {
        scale: 1,
        opacity: 1,
      });
    });

    artistTextWrapper.addEventListener("mouseleave", () => {
      gsap.to(viewCursore, {
        scale: 0,
        opacity: 0,
      });
    });
  }, []);
  return (
    <>
      <section className="section three">
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
              <div
                id="w-node-dcef4b0a-0b81-f79b-7540-6e77ee6ccc9f-c7f4dd6b"
                className="grid-img wrapper"
              >
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
      <section id="artistsection" className="section artists">
        <div id="artistWrapper" className="artist-wrapper">
          <div className="artisttext-wraper">
            <div className="viewcursore">view artist</div>
            <div className="textwraper">
              <h1 id="textone" className="artisttext">
                hiroji
              </h1>
              <h1 id="textone" className="artisttext">
                kubota
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="texttwo" className="artisttext">
                yutaka
              </h1>
              <h1 id="texttwo" className="artisttext">
                sone
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textthree" className="artisttext">
                izumi
              </h1>
              <h1 id="textthree" className="artisttext">
                kato
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textfour" className="artisttext">
                yuichi
              </h1>
              <h1 id="textfour" className="artisttext">
                hibi
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textfive" className="artisttext">
                ken
              </h1>
              <h1 id="textfive" className="artisttext">
                domom
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textsix" className="artisttext">
                eikoh
              </h1>
              <h1 id="textsix" className="artisttext">
                hosoe
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textseven" className="artisttext">
                chiharu
              </h1>
              <h1 id="textseven" className="artisttext">
                shiota
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="texteight" className="artisttext">
                chim↑pom
              </h1>
            </div>
            <div className="textwraper">
              <h1 id="textnine" className="artisttext">
                ishiuchi
              </h1>
              <h1 id="textnine" className="artisttext">
                miyko
              </h1>
            </div>
          </div>
        </div>
        <div className="content-wrapper2 centered">
          <div className="content2 grid artist-info">
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b822-c7f4dd6b"
              className="grid-img hiroji is--active"
              style={{ opacity: 1 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/hk-01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b824-c7f4dd6b"
              className="grid-img hiroji is--active"
              style={{ opacity: 1 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/hk-02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b826-c7f4dd6b"
              className="grid-img hiroji is--active"
              style={{ opacity: 1 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/hk-03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b828-c7f4dd6b"
              className="grid-img yutaka"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/YUTAKA_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82a-c7f4dd6b"
              className="grid-img yutaka"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/YUTAKA_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82c-c7f4dd6b"
              className="grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Izumi_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b82e-c7f4dd6b"
              className="grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Izumi_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b830-c7f4dd6b"
              className="grid-img izumi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Izumi_03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b832-c7f4dd6b"
              className="grid-img yuichi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Yuichi_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b834-c7f4dd6b"
              className="grid-img yuichi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Yuichi_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b836-c7f4dd6b"
              className="grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b838-c7f4dd6b"
              className="grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83a-c7f4dd6b"
              className="grid-img ken"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ken_03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83c-c7f4dd6b"
              className="grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b83e-c7f4dd6b"
              className="grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b840-c7f4dd6b"
              className="grid-img eikoh"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Eikoh_03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b842-c7f4dd6b"
              className="grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b844-c7f4dd6b"
              className="grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b846-c7f4dd6b"
              className="grid-img chiharu"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chiharu_03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b848-c7f4dd6b"
              className="grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84a-c7f4dd6b"
              className="grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84c-c7f4dd6b"
              className="grid-img chimpom"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Chim_03.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b84e-c7f4dd6b"
              className="grid-img ishiuchi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ishiuchi_01.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
            </div>
            <div
              id="w-node-_17284a8f-b135-01b9-aada-a7be7621b850-c7f4dd6b"
              className="grid-img ishiuchi"
              style={{ opacity: 0 }}
            >
              <img
                src="https://artworks.joe8lee.com/images/Ishiuchi_02.jpg"
                loading="lazy"
                alt=""
                className="grid-cell-img art-info"
              />
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
      </section>
    </>
  );
};

export default Artist;
