import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
import React, { useEffect } from "react";
const product = () => {
  useGSAP(() => {
    function gsapImgAnimation() {
      let imgStag = 0.3;
      let imgDur = 1.2;

      //grid-img scale animation
      //gsap.registerPlugin(ScrollTrigger);

      //gsap.defaults({ ease: "power1.inOut" });
      ScrollTrigger.batch(".grid-cell-img.gsap", {
        start: "top 90%",
        end: "center 110%",
        preventOverlaps: true,
        fastScrollEnd: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            scale: 1,
            stagger: { each: imgStag },
            duration: imgDur,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            scale: 1.3,
            stagger: { each: imgStag },
            duration: imgDur,
          }),
        // scrub: true
        // markers: true
      });
    }
    gsapImgAnimation();
    function homeArtistTitleAnimation() {
      let textNum = document.querySelectorAll(".h-wrapper_h2._p.a-name span");

      //   let kubotaSpan = document.querySelector(".h2.a-name.kubota span");
      //   let yutakaSpan = document.querySelector(".h2.a-name.yutaka span");
      //   let izumiSpan = document.querySelector(".h2.a-name.izumi span");
      //   let yuichiSpan = document.querySelector(".h2.a-name.yuichi span");
      //   let kenSpan = document.querySelector(".h2.a-name.ken span");
      //   let eikohSpan = document.querySelector(".h2.a-name.eikoh span");
      //   let chiharuSpan = document.querySelector(".h2.a-name.chiharu span");
      let chimpomSpan = document.querySelectorAll(
        ".h-wrapper_h2._p.a-name.chimpom span"
      );
      //   let ishiuchiSpan = document.querySelector(".h2.a-name.ishiuchi span");

      //   gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia("(min-width: 1200px)").matches) {
        gsap.set(textNum, { opacity: 0, yPercent: 100 });

        //animation-settings
        let gsapDur = 0.5;
        let gsapStag = 0.04;

        //kubota
        gsap.to(chimpomSpan, {
          scrollTrigger: {
            trigger: ".next-artist_section",
            start: "top 50%",
            end: "top -90%",
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
      } else {
        gsap.set(textNum, { opacity: 0 });

        //animation-settings
        let gsapDur = 0.5;
        let gsapStag = 0.04;

        //kubota
        gsap.to(chimpomSpan, {
          scrollTrigger: {
            trigger: ".next-artist_section",
            start: "top 50%",
            end: "top -90%",
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
      }
    }
    function nextArtistSection() {
      let showImg = document.querySelectorAll(
        ".next-artist_section .grid-img_p"
      ); // next-artist-section - grid images
      let artNameText = document.querySelectorAll(".h1-line_h1 span");

      //animation settings
      //grid images
      let showImgDelay = 0.04;
      let showImgDur = 1;

      //text
      let showTxtDelay = 0.08;
      let showTxtDur = 1;

      //grid-img scale animation
      //gsap.registerPlugin(ScrollTrigger);

      gsap.set(showImg, { opacity: 0 });
      ScrollTrigger.batch(showImg, {
        start: "top 100%",
        end: "bottom 0%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            delay: showImgDelay,
            duration: showImgDur,
          }),
        scrub: true,
      });

      //text appearance animation
      gsap.set(artNameText, { opacity: 0, yPercent: 100 });
      gsap.to(artNameText, {
        scrollTrigger: {
          trigger: artNameText,
          start: "top 110%",
          end: "bottom 20%",
          onEnter: () =>
            gsap.to(artNameText, {
              opacity: 1,
              yPercent: 0,
              stagger: showTxtDelay,
              duration: showTxtDur,
              ease: "power2.out",
            }),
          scrub: true,
        },
      });

      //clears console
      /*document.querySelector(function () {
  setTimeout(function () {
    console.clear();
  }, 1500);
});*/
    }
    function barbaTextTransitionIn() {
      let artLetter = document.querySelectorAll(
        ".h1-line_h1.art-page.is--entering span"
      );
      gsap.set(artLetter, { opacity: 0, yPercent: 60 });
      gsap.to(artLetter, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "Power1.easeOut",
      });
      document
        .querySelector(".h1-line_h1.art-page")
        .classList.remove("is--entering");
    }
    function SplitAnim() {
      const typeSplit = new SplitText(".h4_p.gsap-animation", {
        types: "lines, words",
        linesClass: "line",
      });

      // Get all the .line elements generated by SplitText
      const lines = document.querySelectorAll(".line");

      // Loop through each .line and append the .line-mask div
      lines.forEach(function (line) {
        // Add the .line-mask div inside each .line
        line.innerHTML += "<div class='line-mask'></div>";

        // Create the animation for each line
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: line, // 'line' is the current element in the loop
            start: "top 70%", // When the top of the line reaches 70% of the viewport
            end: "bottom 100%", // When the bottom of the line reaches the bottom of the viewport
            scrub: 1, // Smooth scrolling animation
            ease: "power2.out", // Easing function for smooth animation
            markers: false, // Optional: set to true to see start/end markers for testing
          },
        });

        // Use querySelector to target the .line-mask inside the current line
        tl.to(line.querySelector(".line-mask"), {
          width: "0%", // Animating width of .line-mask to 0%
          duration: 1, // Duration of the animation
        });
      });
    }

    SplitAnim();
    nextArtistSection();
    barbaTextTransitionIn();
    homeArtistTitleAnimation();
  });

  return (
    <div className="art-g-body">
      <section className="section padding-top">
        <div className="content_grid _7-rows tablet_10-rows mobile_12-rows">
          <div className="artist_name-wrapper" id="artist-name-1">
            <div className="h1-line">
              <h1 className="h1-line_h1 art-page is--entering chiharu-h1">
                <span className="art-letter">C</span>
                <span className="art-letter">h</span>
                <span className="art-letter">i</span>
                <span className="art-letter">h</span>
                <span className="art-letter">a</span>
                <span className="art-letter">r</span>
                <span className="art-letter">u</span>
              </h1>
            </div>
            <div className="h1-line">
              <h1 className="h1-line_h1 art-page is--entering chiharu-h1">
                <span className="art-letter">S</span>
                <span className="art-letter">h</span>
                <span className="art-letter">i</span>
                <span className="art-letter">o</span>
                <span className="art-letter t-letter">t</span>
                <span className="art-letter">a</span>
              </h1>
            </div>
          </div>
          <div className="grid-img_p wrapper" id="artist-name-2">
            <img
              src="https://artworks.joe8lee.com/images/img_198.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="artist-name-3">
            <img
              src="https://artworks.joe8lee.com/images/img_191.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="artist-name-4">
            <div
              data-lenis-stop=""
              className="grid-img_p wrapper play-btn-wrapper"
            >
              <a
                id="trigger1"
                data-lenis-stop=""
                href="#"
                className="grid_img_play-button w-inline-block"
              >
                <div className="link-text-and-arrow">
                  <p className="description_p caps white">PLAY VIDEO</p>
                  <img
                    src="https://artworks.joe8lee.com/images/arrow_2.svg"
                    loading="lazy"
                    alt=""
                    className="video_arrow"
                  />
                </div>{" "}
              </a>
              <img
                src="https://artworks.joe8lee.com/images/img_194.webp"
                loading="lazy"
                alt=""
                className="grid-cell-img gsap"
              />
            </div>
          </div>
          <div className="grid-img_p wrapper" id="artist-name-5">
            <img
              src="https://artworks.joe8lee.com/images/img_200.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="artist-name-6">
            <img
              src="https://artworks.joe8lee.com/images/img_192.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="h4-wrapper" id="artist-name-7">
            <div className="text-inner-container">
              <div className="indent-154">
                <h4 className="h4_p gsap-animation">
                  Hiroji began his career assisting Magnum
                </h4>
              </div>
              <h4 className="h4_p gsap-animation">
                <span className="invisible--indent">ind</span>Confronting
                fundamental concerns such as life, death and relationships,
                Shiota explores human existence throughout various dimensions by
                creating an existence in the absence either in her large-scale
                thread installations that include a variety of common objects
                and external memorabilia or through her drawings, sculptures,
                photography and videos.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-2_p">
        <div className="content_grid _12-rows tablet_15-rows mobile_22-rows">
          <div className="h4-wrapper" id="artist-para-1">
            <div className="text-inner-container bottom_margin">
              <div className="indent-154">
                <h4 className="h4_p gsap-animation">
                  “I love beautiful things, and I want to
                </h4>
              </div>
              <h4 className="h4_p gsap-animation">
                <span className="invisible--indent">ind</span>With her netlike
                environments, Shiota doesn’t work according to a fixed, detailed
                outline or model prepared beforehand in the studio, but goes
                where the ball of wool takes her.
              </h4>
            </div>
            <div className="text-inner-container">
              <div className="indent-154">
                <h4 className="h4_p gsap-animation">
                  Hiroji began his career assisting Magnum
                </h4>
              </div>
              <h4 className="h4_p gsap-animation">
                <span className="invisible--indent">ind</span>“When I create the
                installation, it is like drawing in the air,” she explains.
                “When you draw on paper, you don’t make a sketch of what you are
                going to draw. You just begin to draw. If you draw a wrong line
                on paper, you can erase it, and when I draw a wrong line with
                the thread, I can cut it.”
              </h4>
            </div>
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_1">
            <img
              src="https://artworks.joe8lee.com/images/img_190.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_2">
            <img
              src="https://artworks.joe8lee.com/images/img_196.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_3">
            <img
              src="https://artworks.joe8lee.com/images/img_193.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_4">
            <img
              src="https://artworks.joe8lee.com/images/img_197.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_5">
            <img
              src="https://artworks.joe8lee.com/images/img_195.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_6">
            <img
              src="https://artworks.joe8lee.com/images/img_203.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_7">
            <img
              src="https://artworks.joe8lee.com/images/img_199.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_8">
            <img
              src="https://artworks.joe8lee.com/images/img_204.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_9">
            <img
              src="https://artworks.joe8lee.com/images/img_216.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_10">
            <img
              src="https://artworks.joe8lee.com/images/img_201.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_11">
            <img
              src="https://artworks.joe8lee.com/images/img_202.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_12">
            <img
              src="https://artworks.joe8lee.com/images/img_209.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_13">
            <img
              src="https://artworks.joe8lee.com/images/img_218.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_14">
            <img
              src="https://artworks.joe8lee.com/images/img_205.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div className="grid-img_p wrapper" id="sec_2-grid-img_15">
            <img
              src="https://artworks.joe8lee.com/images/img_206.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
      </section>
      <section className="section section-2_p">
        <div className="content_grid _21-rows tablet_22-rows mobile_34-rows">
          <div className="h4-wrapper" id="sec-3_artist-para-1">
            <div className="text-inner-container bottom_margin">
              <div className="indent-154">
                <h4 className="h4_p gsap-animation">
                  Kubota has proved to be a remarkably
                </h4>
              </div>
              <h4 className="h4_p gsap-animation">
                <span className="invisible--indent">ind</span>Shiota likens
                weaving to a meditative process and allows herself to be guided
                by the site, creating artwork directly in the museum or gallery
                space. Usually working with a team of five to 10 assistants for
                10 to 14 days on one installation, her movements are rapid and
                meticulous: sometimes left, sometimes right, passing the thread
                in front or behind those that have preceded, pulling more or
                less tightly, creating lines and angles.
              </h4>
            </div>
            <div className="text-inner-container">
              <div className="indent-154">
                <h4 className="h4_p gsap-animation">
                  Kubota has proved to be a remarkably
                </h4>
              </div>
              <h4 className="h4_p gsap-animation">
                <span className="invisible--indent">ind</span>It’s always a
                struggle and the weave represents her current mindset: when
                she’s troubled, the thread tangles erratically and more knots
                are formed. When she’s in a balanced mood, the weave is more
                regular.
              </h4>
            </div>
          </div>
          <div id="sec_3-grid-img_1" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_208.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_2" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_212.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_3" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_207.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_4" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_211.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_5" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_210.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_6" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_217.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_7" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_213.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_8" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_214.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_9" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_215.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_10" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_219.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_11" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_229.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_12" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_221.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_13" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_220.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_14" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_222.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_15" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_224.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_16" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_223.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_17" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_230.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_18" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_225.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_19" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_228.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_20" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_227.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_21" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_226.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="trigger2" className="hidden-cellhidden-cell _p">
            <div id="play_button-two" className="play_button-two"></div>
          </div>
        </div>
      </section>
      <section className="next-artist_section">
        <div className="content_grid _6-rows">
          <div id="artist-text-1_p" className="next-artist-name-container">
            <div className="next-artist">
              <p className="paragraph">next artist</p>
            </div>
            <a
              //   id="artist-text-1_p"
              href=""
              className="h-wrapper centered yutaka is--relative next-artist_a-name w-inline-block"
            >
              <h1 className="h-wrapper_h2 _p a-name chimpom">
                <span className="art-letter">C</span>
                <span className="art-letter">h</span>
                <span className="art-letter">i</span>
                <span className="art-letter">m</span>
                <span className="art-letter symbol">↑</span>
                <span className="art-letter">P</span>
                <span className="art-letter">o</span>
                <span className="art-letter">m</span>
              </h1>
            </a>
            <link rel="prefetch" href="" />
            <a href="" className="next-artist-button w-inline-block">
              <p className="paragraph red is--centered">view artist</p>
            </a>
            <link rel="prefetch" href="" />
          </div>
          <div id="artist-img-1_p" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_235.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="artist-img-2_p" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_247.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="artist-img-3_p" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_241.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="artist-img-4_p" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_251.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
          <div id="artist-img-5_p" className="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_250.webp"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default product;
