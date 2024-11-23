import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const Product = () => {
  useGSAP(() => {
    gsap.fromTo(
      [...document.querySelectorAll(".hero .header, .hero .year")],
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", yPercent: 80 },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        yPercent: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      },
      "<0.2"
    );
    const vfSec = document.querySelectorAll(".media-container");
    vfSec.forEach((t) => {
      //   var e = t.querySelector(".hero-image-inner");
      gsap.to(t, {
        scrollTrigger: {
          trigger: t,
          start: "top bottom",
          end: "bottom 10%",
          //   scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
        clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
        ease: "none",
      });
    });
  });
  return (
    <>
      <section className="site-container hero">
        <div className="inner_site-grid">
          <div className="header">
            <h1 className="display-1 | font-sans font-extralight uppercase">
              Impero
            </h1>
          </div>
          <span className="year | display-1">2020</span>
          <p className="introInfo | body-2">
            Impero is a global integrated agency with offices in London and
            Buenos Aires.
          </p>
          <p className="credits | body-2">
            Design direction //Branding // Typography // Graphic Design //
            Digital Design
            <br />
            <br />
          </p>
        </div>
      </section>
      <figure className="hero-image">
        <div className="hero-image-inner">
          <div className="media-container">
            <video
              className="media media--video"
              src="https://a.storyblok.com/f/277319/x/b01d33b69f/impero_logo.mp4"
              muted
              loop
              playsInline
              preload=""
              //   data-dom=""
            />
          </div>
        </div>
      </figure>
      <div className="product-image-wrapper">
        <section data-images-count={2} className="site-container image-section">
          <div className="inner_site-grid_2">
            <div className="item">
              <div className="media-container">
                <video
                  className="media media--video"
                  src="https://a.storyblok.com/f/277319/x/e259c2f6ff/denim__crown.mp4"
                  muted=""
                  loop=""
                  playsInline=""
                  preload="metadata"
                  data-dom="video"
                />
              </div>
            </div>
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1920/32ecaf2168/impero_02.png/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1920}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_3">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/3392x1908/d98ef60a3f/impero_03.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={3392}
                  height={1908}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={2} className="site-container image-section">
          <div className="inner_site-grid_4">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1884/22620e64cb/impero_04.png/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1884}
                />
              </figure>
            </div>
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1920/f09e202e29/impero_05.png/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1920}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_5">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/3392x1908/907095a95e/impero_06.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={3392}
                  height={1908}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_6">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/3392x1908/3b35dfe3c1/impero_07.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={3392}
                  height={1908}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={2} className="site-container image-section">
          <div className="inner_site-grid_7">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1920/432cebf353/impero_08.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1920}
                />
              </figure>
            </div>
            <div className="item">
              <div className="media-container">
                <video
                  className="media media--video"
                  src="https://a.storyblok.com/f/277319/x/2a267274f9/technical_crown.mp4"
                  muted=""
                  loop=""
                  playsInline=""
                  preload="metadata"
                  data-dom="video"
                />
              </div>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_8">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/3392x1920/21d9793955/impero_10.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={3392}
                  height={1920}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={2} className="site-container image-section">
          <div className="inner_site-grid_9">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1920/fb84044d82/impero_11.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1920}
                />
              </figure>
            </div>
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/1684x1920/40b0b76144/impero_12.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={1684}
                  height={1920}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_10">
            <div className="item">
              <figure className="media-container">
                <img
                  src="https://a.storyblok.com/f/277319/3392x1908/11f150677f/impero_13.jpg/m/"
                  className="media media--image"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  data-dom="image"
                  width={3392}
                  height={1908}
                />
              </figure>
            </div>
          </div>
        </section>
        <section data-images-count={1} className="site-container image-section">
          <div className="inner_site-grid_11">
            <div className="item">
              <div className="media-container">
                <video
                  className="media media--video"
                  src="https://a.storyblok.com/f/277319/x/1af4728f00/404.mp4"
                  muted=""
                  loop=""
                  playsInline=""
                  preload="metadata"
                  data-dom="video"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="next-project">
        <a href="" data-transition="toCaseStudy">
          <div className="site-container next-project-inner">
            <div className="inner_site-grid_12">
              <span className="label | body-2">Next project</span>
              <div className="header_bottom">
                <h2 className="title | display-2">F/BRAUN</h2>
                <span className="body-2 | font-serif">2022</span>
              </div>
              <div className="images">
                <div className="col-span-2 lg-down:col-span-2">
                  <figure className="media-container">
                    <img
                      src="https://a.storyblok.com/f/277319/1245x1020/680f45407d/braun_01.jpg/m/"
                      className="media media--image"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      data-dom="image"
                      width={1245}
                      height={1020}
                    />
                  </figure>
                </div>
                <div className="lg-down:col-span-2">
                  <figure className="media-container">
                    <img
                      src="https://a.storyblok.com/f/277319/816x1020/99bfc89c88/braun_02.jpg/m/"
                      className="media media--image"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      data-dom="image"
                      width={816}
                      height={1020}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default Product;
