import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
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
  });
  return (
    <>
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
      <section class="section section-2_p">
        <div class="content_grid _12-rows tablet_15-rows mobile_22-rows">
          <div class="h4-wrapper" id="artist-para-1">
            <div class="text-inner-container bottom_margin">
              <div class="indent-154">
                <h4 class="h4_p gsap-animation">
                  “I love beautiful things, and I want to
                </h4>
              </div>
              <h4 class="h4_p gsap-animation">
                <span class="invisible--indent">ind</span>With her netlike
                environments, Shiota doesn’t work according to a fixed, detailed
                outline or model prepared beforehand in the studio, but goes
                where the ball of wool takes her.
              </h4>
            </div>
            <div class="text-inner-container">
              <div class="indent-154">
                <h4 class="h4_p gsap-animation">
                  Hiroji began his career assisting Magnum
                </h4>
              </div>
              <h4 class="h4_p gsap-animation">
                <span class="invisible--indent">ind</span>“When I create the
                installation, it is like drawing in the air,” she explains.
                “When you draw on paper, you don’t make a sketch of what you are
                going to draw. You just begin to draw. If you draw a wrong line
                on paper, you can erase it, and when I draw a wrong line with
                the thread, I can cut it.”
              </h4>
            </div>
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_1">
            <img
              src="https://artworks.joe8lee.com/images/img_190.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_2">
            <img
              src="https://artworks.joe8lee.com/images/img_196.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_3">
            <img
              src="https://artworks.joe8lee.com/images/img_193.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_4">
            <img
              src="https://artworks.joe8lee.com/images/img_197.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_5">
            <img
              src="https://artworks.joe8lee.com/images/img_195.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_6">
            <img
              src="https://artworks.joe8lee.com/images/img_203.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_7">
            <img
              src="https://artworks.joe8lee.com/images/img_199.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_8">
            <img
              src="https://artworks.joe8lee.com/images/img_204.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_9">
            <img
              src="https://artworks.joe8lee.com/images/img_216.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_10">
            <img
              src="https://artworks.joe8lee.com/images/img_201.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_11">
            <img
              src="https://artworks.joe8lee.com/images/img_202.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_12">
            <img
              src="https://artworks.joe8lee.com/images/img_209.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_13">
            <img
              src="https://artworks.joe8lee.com/images/img_218.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_14">
            <img
              src="https://artworks.joe8lee.com/images/img_205.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div class="grid-img_p wrapper" id="sec_2-grid-img_15">
            <img
              src="https://artworks.joe8lee.com/images/img_206.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
        </div>
      </section>
      <section class="section section-2_p">
        <div class="content_grid _21-rows tablet_22-rows mobile_34-rows">
          <div class="h4-wrapper" id="sec-3_artist-para-1">
            <div class="text-inner-container bottom_margin">
              <div class="indent-154">
                <h4 class="h4_p gsap-animation">
                  Kubota has proved to be a remarkably
                </h4>
              </div>
              <h4 class="h4_p gsap-animation">
                <span class="invisible--indent">ind</span>Shiota likens weaving
                to a meditative process and allows herself to be guided by the
                site, creating artwork directly in the museum or gallery space.
                Usually working with a team of five to 10 assistants for 10 to
                14 days on one installation, her movements are rapid and
                meticulous: sometimes left, sometimes right, passing the thread
                in front or behind those that have preceded, pulling more or
                less tightly, creating lines and angles.
              </h4>
            </div>
            <div class="text-inner-container">
              <div class="indent-154">
                <h4 class="h4_p gsap-animation">
                  Kubota has proved to be a remarkably
                </h4>
              </div>
              <h4 class="h4_p gsap-animation">
                <span class="invisible--indent">ind</span>It’s always a struggle
                and the weave represents her current mindset: when she’s
                troubled, the thread tangles erratically and more knots are
                formed. When she’s in a balanced mood, the weave is more
                regular.
              </h4>
            </div>
          </div>
          <div id="sec_3-grid-img_1" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_208.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_2" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_212.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_3" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_207.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_4" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_211.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_5" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_210.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_6" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_217.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_7" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_213.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_8" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_214.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_9" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_215.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_10" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_219.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_11" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_229.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_12" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_221.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_13" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_220.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_14" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_222.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_15" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_224.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_16" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_223.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_17" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_230.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_18" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_225.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_19" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_228.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_20" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_227.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div id="sec_3-grid-img_21" class="grid-img_p wrapper">
            <img
              src="https://artworks.joe8lee.com/images/img_226.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div
            id="trigger2"
            class="hidden-cell w-node-_3750a21b-fa60-3a6d-f10b-325a9c007748-9c007748"
          >
            <div id="play_button-two" class="play_button-two"></div>
          </div>
        </div>
      </section>
      <section class="next-artist_section">
        <div class="content grid _6-rows">
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb72b-df82a457"
            class="next-artist-name-container"
          >
            <div class="next-artist">
              <p class="paragraph">next artist</p>
            </div>
            <a
              id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb72f-df82a457"
              href="chim-pom"
              class="h-wrapper centered yutaka is--relative next-artist_a-name w-inline-block"
            >
              <h1 class="h2 a-name chimpom">
                <span class="art-letter">C</span>
                <span class="art-letter">h</span>
                <span class="art-letter">i</span>
                <span class="art-letter">m</span>
                <span class="art-letter symbol">↑</span>
                <span class="art-letter">P</span>
                <span class="art-letter">o</span>
                <span class="art-letter">m</span>
              </h1>
            </a>
            <link rel="prefetch" href="chim-pom" />
            <a href="chim-pom" class="next-artist-button w-inline-block">
              <p class="paragraph red is--centered">view artist</p>
            </a>
            <link rel="prefetch" href="chim-pom" />
          </div>
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb746-df82a457"
            class="grid-img_p wrapper"
          >
            <img
              src="images/img_235.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb748-df82a457"
            class="grid-img_p wrapper"
          >
            <img
              src="images/img_247.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb74a-df82a457"
            class="grid-img_p wrapper"
          >
            <img
              src="images/img_241.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb74c-df82a457"
            class="grid-img_p wrapper"
          >
            <img
              src="images/img_251.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
          <div
            id="w-node-_0be5e7ef-8262-2731-1877-4c80192cb74e-df82a457"
            class="grid-img_p wrapper"
          >
            <img
              src="images/img_250.webp"
              loading="lazy"
              alt=""
              class="grid-cell-img gsap"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default product;
