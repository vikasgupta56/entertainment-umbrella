import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import SplitText from "gsap/dist/SplitText";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const Histoy = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading (replace this with your actual data fetching logic)
    const loadContent = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000); // Simulate a 1 second loading time
    };

    loadContent();
  }, []);

  useEffect(() => {
    if (!isLoaded) return; // Wait for content to load

    const targets = gsap.utils.toArray(".gsap");

    if (targets.length === 0) return; // Exit if no targets found

    const animations = targets.map((target) =>
      gsap.to(target, {
        duration: 1.5,
        scale: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
        },
      })
    );

    ScrollTrigger.refresh(); // Refresh triggers

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoaded]);

  // useEffect(() => {
  //   const paragraphs = document.querySelectorAll(".Cpb_para");

  //   paragraphs.forEach((paragraph) => {
  //     const text = new SplitText(paragraph, {
  //       type: "lines,words,chars",
  //     });
  //     const chars = text.chars;

  //     // Create a ScrollTrigger for each paragraph
  //     gsap.to(chars, {
  //       scrollTrigger: {
  //         trigger: paragraph, // Trigger the animation for each individual paragraph
  //         start: "top 80%", // Adjust as needed
  //         end: "bottom 60%", // Adjust as needed
  //         markers: true,
  //         scrub: true,
  //       },
  //       duration: 1.5,
  //       stagger: 0.1, // Adjust stagger as needed
  //       ease: "linear",
  //       color: "#fff",
  //     });
  //   });

  //   // Optional: Refresh triggers if necessary
  //   ScrollTrigger.refresh();
  // }, []);
  return (
    <>
      <section className="section_black">
        {/* <div id="w-node" className="content-sticky-wrap"> */}
        {/* <div className="sticky"> */}
        {/* <div className="content grid sticky"> */}
        <div id="w-node-1" className="h2-wrapper">
          <div className="h-wrapper">
            <h1 className="h2 cbh2">history</h1>
          </div>
        </div>
        <div className="image_cntr image_1_cntr">
          <div id="w-node-2" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
        <div className="image_cntr image_2_cntr">
          <div id="w-node-3" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>

        <div className="image_cntr image_3_cntr">
          <div id="w-node-4" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
        <div id="w-node-5" className="p-container">
          {/* <div className="indent-154">
            <p className="paragraph cbp">
              The history of photography &amp; fine arts is full of beautiful
            </p>
          </div> */}
          <p className="paragraph cbp has--indent Cpb_para">
            The history of photography &amp; fine arts is full of beautiful
            masterpieces. Expressions have been captured and shared throughout
            the history. Each and every work of art encapsulates a unique moment
            frozen in time, offering a&nbsp;glimpse into the lives, emotions,
            and struggles of those who came before us.
          </p>
        </div>
        <div className="image_cntr image_4_cntr">
          <div id="w-node-6" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
        <div className="image_cntr image_5_cntr">
          <div id="w-node-7" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
        <div className="image_cntr image_6_cntr">
          <div id="w-node-8" className="grid-img wrapper">
            <img
              src="https://artworks.joe8lee.com/images/photo_01.jpg"
              loading="lazy"
              alt=""
              className="grid-cell-img gsap"
            />
          </div>
        </div>
        <div id="w-node-9" className="grid-img wrapper is--hidden-in-mobile">
          <img
            src="https://artworks.joe8lee.com/images/photo_01.jpg"
            loading="lazy"
            alt=""
            className="grid-cell-img gsap"
          />
        </div>
        <div id="w-node-10" className="p-container">
          <div id="w-node-11" className="text-inner-container bottom_margin">
            {/* <div className="">
              <p className="paragraph cbp line-wrap__nowrap">
                Photography and fine arts, in their essence, are not merely
              </p>
            </div> */}
            <p className="paragraph cbp Cpb_para">
              Photography and fine arts, in their essence, are not merely
              confined to documenting events or portraying aesthetics; they hold
              within them a profound narrative that transcends time and space.
              From the captivating black and white landscapes captured by the
              renowned Hiroji Kubota to the enigmatic urban scenes portrayed by
              Yuichi Hibi, or Chiharu Shiota's mesmerizing installations,
              intertwined with profound emotions, that take viewers on a journey
              of self-reflection and introspection, “Artworks” presents a
              kaleidoscope of artistic expressions that transcend borders and
              cultures.
            </p>
          </div>
          <div className="text-inner-container">
            {/* <div className="">
              <p className="paragraph cbp line-wrap__nowrap">
                As we move forward, the history of photography and fine arts
              </p>
            </div> */}
            <p className="paragraph cbp Cpb_para">
              As we move forward, the history of photography and fine arts will
              undoubtedly be enriched by groundbreaking innovations and
              ever-evolving expressions. Through the lens of artistic vision,
              the beauty and complexities of the human experience will continue
              to be celebrated and shared, shaping our understanding of the
              world and&nbsp;the&nbsp;people&nbsp;in&nbsp;it.
            </p>
          </div>
        </div>
        {/* </div> */}
        <div className="w-embed">
          {/* <style>
              dangerouslySetInnerHTML={{
                __html:
                                  "@media (min-width: 820px) and (max-width: 880px) {
                                      .content.grid.sticky {
                                        position: sticky;
                                        top: -126em;
                                    }
                                    }
                                        @media (min-width: 820px) and (max-width: 960px) {
                                            .content.grid.sticky {
                                            position: sticky;
                                            top: -135em;

                                        }
                                    }
                                        @media (min-width: 960px) and (max-width: 991px) {
                                            .content.grid.sticky {
                                            position: sticky;
                                            top: -140em;

                                        }
                                    }
                                        @media (min-width: 991px) and (max-width: 1100px) {
                                            .content.grid.sticky {
                                            position: sticky;
                                            top: -80em;

                                        }
                                        .section.black.sticky {
                                            height: 140em;

                                        }
                                    }
                                        @media (min-width: 1100px) and (max-width: 1180px) {
                                            .content.grid.sticky {
                                            position: sticky;
                                            top: -64em;

                                        }
                                        .section.black.sticky {
                                            height: 140em;

                                        }
                                    }
                                        ",
              }}
            </style> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Histoy;
