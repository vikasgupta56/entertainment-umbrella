import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Link from "next/link";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Dhamaka_Hero = () => {
  useEffect(() => {
    // Select all .vf-section elements
    const vfSec = document.querySelectorAll(".vf-section");

    vfSec.forEach((t, index) => {
      const mediaBackground = t.querySelector(".media-background");

      // Check if .media-background exists in this .vf-section
      if (mediaBackground) {
        gsap.to(mediaBackground, {
          scrollTrigger: {
            trigger: t,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            markers: false, // Set to `true` for debugging purposes
          },
          yPercent: 32,
          ease: "none",
        });
      }
    });

    // Cleanup the ScrollTrigger instance on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useGSAP(() => {
    // var e = function () {
    const To = new SplitText(".js-t", {
      type: "lines, words, chars",
      linesClass: "ln-t",
      charsClass: "ch-t",
    });
    const Co = new SplitText(
      document.querySelector(".js-c", {
        type: "lines",
      })
    );
    gsap.set(To.chars, { y: "115%" });
    gsap.set(Co.lines, { opacity: 0, y: 40 });

    const Po = document.querySelectorAll(".vsl-wrapper .vsl-item");
    gsap.set(Po, { opacity: 0, y: 200 });

    ScrollTrigger.create({
      trigger: document.querySelector(".hero-section"),
      start: "top 10%",
      end: "bottom 80%",
      scrub: !0,
      invalidateOnRefresh: !0,
      //   markers: true,
      onUpdate: function (t) {
        //   var e = (1 - t.progress) * window.ldrLogo.totalFrames;
        //   window.ldrLogo.goToAndStop(e, !0);
      },
    }),
      gsap
        .timeline({
          onComplete: function () {
            return Co.revert();
          },
        })
        .to(To.chars, {
          y: "4%",
          duration: 1.24,
          stagger: 0.01,
          ease: "expo.out",
          force3D: !0,
        })
        .to(
          Co.lines,
          {
            opacity: 1,
            y: 0,
            duration: 1.24,
            stagger: 0.032,
            ease: "expo.out",
          },
          0.4
        )
        .to(
          Po,
          {
            opacity: 1,
            y: 0,
            ease: "expo.out",
            duration: 2,
            stagger: 0.16,
          },
          0
        );
    var e = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".hero-section"),
        start: "top top",
        end: "bottom top",
        scrub: !0,
        fastScrollEnd: !0,
        invalidateOnRefresh: !0,
      },
    });
    Po.forEach(function (t, r) {
      var i = 1 === r ? -48 : -32;
      e.to(t, { ease: "none", yPercent: i }, 0);
    });
    //vosection
    var vosection = document.querySelector(".vo-section");
    var iHeadings = document.querySelectorAll(".i-wrapper-heading"),
      i = vosection.querySelectorAll(".o-item"),
      n = Math.max(80, (window.innerWidth / 100) * 8.5),
      s = i[i.length - 1].offsetHeight,
      a = (i.length - 1) * n + s;

    i.forEach((t, e) => {
      var i = e * n;

      ScrollTrigger.create({
        trigger: t,
        start: "top =".concat(i, "30px top"),
        endTrigger: vosection,
        end: "bottom ".concat(a, "px"),
        scrub: true,
        // markers: true,
        pin: true,
        pinSpacing: false, // Pin spacing is not needed since we’re not pinning
        invalidateOnRefresh: true,
        onEnter: () => {
          // Hide the corresponding heading when the o-item enters
          if (iHeadings[e]) {
            gsap.to(iHeadings[e], {
              // display: "none",
              // opacity: 0,
              ease: "linear",
              duration: 0.5,
            });
          }
        },
        onLeaveBack: () => {
          // Show the corresponding heading again when the o-item leaves
          if (iHeadings[e]) {
            gsap.to(iHeadings[e], {
              // display: "",
              // opacity: 1,
              // ease: "linear",
            });
          }
        },
      });
    });
    //   vh-section
    var o = document.querySelector(".js-v-outter"),
      l = document.querySelector(".js-v-inner");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: o,
          start: "top top",
          end: function () {
            return "+=" + l.scrollHeight;
          },
          scrub: !0,
          pin: !0,
          invalidateOnRefresh: !0,
          //   markers: true,
        },
      })
      .to(o, {
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        duration: 0.16,
      })
      .to(
        l,
        {
          y: function () {
            var t = o.offsetHeight;
            return -(l.scrollHeight - t);
          },
          ease: "none",
        },
        0
      );
    var h = document.querySelectorAll(".js-v-item");
    function p() {
      h.forEach(function (t) {
        gsap.killTweensOf(t),
          gsap.killTweensOf(t.querySelector(".c-vsl-wrapper")),
          gsap.set(t, { zIndex: 1 }),
          gsap.to(t, { opacity: 1, duration: 0.4 }),
          gsap.to(t.querySelector(".c-vsl-wrapper"), {
            opacity: 0,
            duration: 0.72,
          });
      });
    }
    h.forEach(function (t) {
      var e = t.querySelectorAll(".js-v-vsl");
      e[0] &&
        gsap.set(e[0], {
          y: gsap.utils.random(-32, 8) + "vh",
          x: gsap.utils.random(-40, -32) + "vw",
        }),
        e[1] &&
          gsap.set(e[1], {
            y: gsap.utils.random(-32, 16) + "vh",
            x: gsap.utils.random(-16, 8) + "vw",
          }),
        e[2] &&
          gsap.set(e[2], {
            y: gsap.utils.random(-32, 8) + "vh",
            x: gsap.utils.random(24, 30) + "vw",
          }),
        t.addEventListener("mouseenter", function () {
          return (
            (e = t),
            void h.forEach(function (t) {
              gsap.killTweensOf(t),
                gsap.killTweensOf(t.querySelector(".c-vsl-wrapper")),
                gsap.set(t, { zIndex: t === e ? 10 : 1 }),
                gsap.to(t, {
                  opacity: t === e ? 1 : 0.16,
                  duration: 0.4,
                }),
                gsap.to(t.querySelector(".c-vsl-wrapper"), {
                  opacity: t === e ? 1 : 0,
                  duration: 1.2,
                  delay: 0.08,
                });
            })
          );
          var e;
        }),
        t.addEventListener("mouseleave", p);
    });
  });
  return (
    <>
      <section className="Dhamaka_hero-section">
        <div className="c-wrapper">
          <h1 className="js-t ff-t tt-u fs-xl">
            marketing agency
            <br />
            driving brand engagement <br />
            across entertainment
            <br />
            and influence.
          </h1>
          <p className="js-c tt-u fs-rg br-unset mb-4 mb-0@sm px-1 px-3@sm">
            India’s largest influencer marketing agency and a <br />
            leader in the industry. At Dhamaka Talent, we help <br />
            brands make a lasting impact by leveraging influencers <br />
            to amplify their message and seamlessly connect with <br />
            audiences across brand and entertainment spaces.
          </p>
        </div>
        <div className="vsl-wrapper z-up">
          <div className="vsl-item vsl-lt" data-scroll data-scroll-speed=".05">
            <div className="media-background lazy-container">
              <video
                src="../../../assets/videos/Dhamaka-video 2.mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
          <div className="vsl-item vsl-rc" data-scroll data-scroll-speed="0.3">
            <div className="media-background lazy-container">
              <video
                src="../../../assets/videos/Dhamaka-video 3.mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
          <div className="vsl-item vsl-lb" data-scroll data-scroll-speed="0.3">
            <div className="media-background lazy-container">
              <video
                src="../../../assets/videos/Dhamaka-video 4.mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
        </div>
      </section>
      <section className="vf-section bg-primary">
        <div className="v-wrapper">
          <div className="v-wrapper-inner">
            <div className="c-wrapper bg-primary">
              <div className="v-wrapper-inner-content">
                <h2 className="v-wrapper-heading">Our vision</h2>
                <p className="">
                  As a project scout, we help our clients highlight their
                  expertise in the art of living and in creating homes to live
                  in. <br />
                  <br />
                  Our traveling soul leads us to collaborate in the promotion of
                  destinations, travel homes and know-how from here and there.
                  We believe in the power of authentic stories and clear
                  discourse to strengthen the reputation and image of our
                  clients.
                </p>
              </div>
            </div>
            <div
              className="media-background js-prllx lazy-container"
              //   data-scroll
              //   data-scroll-speed="-0.2"
            >
              {/* <picture>
                <source
                  data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/kees-kortmulder-LzDtQIWBgoU-unsplash.webp"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  src="https://gaelleperrin.com/wp-content/uploads/2024/09/kees-kortmulder-LzDtQIWBgoU-unsplash.jpg"
                  alt=""
                  width={1480}
                  height={987}
                  aspect=""
                />
              </picture> */}
              <video
                src="../../../assets/videos/Dhamaka-Video (1).mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
        </div>
      </section>
      <section className="vo-section">
        <div className="v-wrapper bg-primary">
          <div className="o-wrapper">
            <div className="o-wrapper-inner">
              <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">01</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">Campaign Planning</h3>
                    <p className="i-wrapper-para">
                      We design brand identities that match our clients' values.
                    </p>
                  </div>
                </div>
              </div>
              <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">02</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">
                      Content Strategizing
                      {/* <br />
                      and development <br />
                      strategy consulting */}
                    </h3>
                    <p className="i-wrapper-para">
                      We work closely with our clients to develop customized
                      strategies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">03</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">End-to-End Execution</h3>
                    <p className="i-wrapper-para">
                      We produce content to strengthen our clients' online and
                      offline presence .
                    </p>
                  </div>
                </div>
              </div>
              <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">04</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">Production</h3>
                    <p className="i-wrapper-para">
                      We seek strategic partnerships to strengthen our clients'
                      position in the market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">05</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">Marketing</h3>
                    <p className="i-wrapper-para">
                      We set up campaigns to attract the attention of media and
                      influencers.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="o-item">
                <div className="o-item_inner">
                  <span className="o-item_inner_num">06</span>
                  <div className="i-wrapper">
                    <h3 className="i-wrapper-heading">
                      Digital <br />
                      communication
                    </h3>
                    <p className="i-wrapper-para">
                      We manage online communication, from content creation to
                      media buying.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="vh-section js-v-outter bg-primary">
        <div className="v-wrapper">
          <div className="js-v-inner bg-secondary c-primary">
            <div className="js-v-inner-wrapper">
              <div className="intro-wrapper">
                <h2 className="intro-wrapper-inner">
                  We place a <br /> strong emphasis on branded content, <br />
                  creating authentic messages <br /> for our customers.
                </h2>
              </div>
              <div className="c-wrapper">
                <div className="c-wrapper-inner">
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href="https://www.comptoirdesvoyages.fr/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Myntra</h3>
                      <span className="js-v-item-inner-para">
                        Consulting in press relations strategy
                        <br />
                        and awareness development
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/4-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/4-copie.jpg"
                              alt="Voyage en train, liaison Ella Kandy"
                              width={1314}
                              height={867}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/9-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/9-copie.jpg"
                              alt="Peche"
                              width={1680}
                              height={1120}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/10-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/10-copie.jpg"
                              alt="Atelier Rhum Arrangé le Tapacala"
                              width={1134}
                              height={756}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href="https://www.tahititourisme.fr/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Pepsi</h3>
                      <span className="js-v-item-inner-para">
                        Communication consultancy, <br />
                        press relations and influence
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/1-fare-tiaia.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/1-fare-tiaia.jpg"
                              alt="1-fare-tiaia"
                              width={1518}
                              height={1000}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/P2_11_DSC_3078-A©-GreIgory-Lecoeur-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/P2_11_DSC_3078-A©-GreIgory-Lecoeur-copie.jpg"
                              alt="P2_11_DSC_3078 Â© GreÌgory Lecoeur - copie"
                              width={1110}
                              height={740}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_1279.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_1279.jpg"
                              alt="IMG_1279"
                              width={709}
                              height={945}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://www.paradisecovehotel.com/fr?sjrncid=GA_20260659040&sjrnaid=GA_661298141992&gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOtqrI3dp0NbONIo99f_b-Y2RHPuOFeNp4jUI5PruFCcatcMPG9aNwaAgamEALw_wcB&gclsrc=aw.ds"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Coca-Cola</h3>
                      <span className="js-v-item-inner-para">
                        Development of awareness
                        <br />
                        Press relations and influence
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-Love-Nest-1-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-Love-Nest-1-copie.jpg"
                              alt="PCBH Love Nest 1 - copie"
                              width={709}
                              height={473}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-Outdoor-Spa-_-Spa-exterieure-1-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-Outdoor-Spa-_-Spa-exterieure-1-copie.jpg"
                              alt="PCBH Outdoor Spa _ Spa extérieure 1 - copie"
                              width={691}
                              height={461}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-The-Cove-Beach-_-Plage-The-Cove-1-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/PCBH-The-Cove-Beach-_-Plage-The-Cove-1-copie.jpg"
                              alt="PCBH The Cove Beach _ Plage The Cove 1 - copie"
                              width={691}
                              height={461}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://hotels-attitude.com/fr"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Coke Studio</h3>
                      <span className="js-v-item-inner-para">
                        Communication <br />
                        and press relations consultancy, influence
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/TRA_Pool_noprint-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/TRA_Pool_noprint-copie.jpg"
                              alt="TRA_Pool_noprint - copie"
                              width={1152}
                              height={768}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/ZA-Juicebar_noprint-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/ZA-Juicebar_noprint-copie.jpg"
                              alt="ZA Juicebar_noprint - copie"
                              width={960}
                              height={1440}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/ZA_Entrance_Entree-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/ZA_Entrance_Entree-copie.jpg"
                              alt="Entrance view"
                              width={709}
                              height={473}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://jardindesdouars.com/fr/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Flipkar</h3>
                      <span className="js-v-item-inner-para">
                        Press relations, influence, <br />
                        awareness strategy
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_8163-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_8163-copie.jpg"
                              alt="IMG_8163 - copie"
                              width={1872}
                              height={1248}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/CDD14-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/CDD14-copie.jpg"
                              alt="CDD14 - copie"
                              width={1070}
                              height={1338}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_0809-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/IMG_0809-copie.jpg"
                              alt="IMG_0809 - copie"
                              width={569}
                              height={853}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://www.aireaucarre.com/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Uniqlo</h3>
                      <span className="js-v-item-inner-para">
                        Consulting in press relations strategy
                        <br />
                        and awareness development
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/0N5A1899-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/0N5A1899-copie.jpg"
                              alt="0N5A1899 - copie"
                              width={585}
                              height={877}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/R2-VILLA-H-28-copie-scaled.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/R2-VILLA-H-28-copie-scaled.jpg"
                              alt="R2-VILLA H-28 - copie"
                              width={1692}
                              height={2560}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/29112023-29112023-0N5A0008-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/29112023-29112023-0N5A0008-copie.jpg"
                              alt="29112023-29112023-0N5A0008 - copie"
                              width={787}
                              height={1181}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://maisonomani.com/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Bisleri</h3>
                      <span className="js-v-item-inner-para">
                        Consulting in press relations strategy
                        <br />
                        and awareness development
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-18-41-06-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-18-41-06-copie.jpg"
                              alt="PHOTO-2024-09-10-18-41-06 - copie"
                              width={709}
                              height={1062}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-18-40-55-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-18-40-55-copie.jpg"
                              alt="PHOTO-2024-09-10-18-40-55 - copie"
                              width={709}
                              height={1062}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://www.chemins.voyage/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head"> T-Series</h3>
                      <span className="js-v-item-inner-para">
                        Communication
                        <br />
                        and development strategy consulting
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/chemins-tracedirecte-BD_42-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/chemins-tracedirecte-BD_42-copie.jpg"
                              alt="chemins-tracedirecte-BD_42 - copie"
                              width={695}
                              height={1042}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/P1000848_redimensionner-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/P1000848_redimensionner-copie.jpg"
                              alt="P1000848_redimensionner - copie"
                              width={1200}
                              height={674}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/P1001038_redimensionner-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/P1001038_redimensionner-copie.jpg"
                              alt="P1001038_redimensionner - copie"
                              width={1200}
                              height={674}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://www.hotel-bergerie.com/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Saregama</h3>
                      <span className="js-v-item-inner-para">
                        Communication strategy consulting
                        <br />
                        Press relations and influence
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-62.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-62.jpg"
                              alt="HOTEL LA BERGERIE"
                              width={1067}
                              height={1600}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-349.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-349.jpg"
                              alt="HOTEL LA BERGERIE"
                              width={1600}
                              height={1067}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-218.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/bergerie-hiver-2019-marion-co-photography-218.jpg"
                              alt="HOTEL LA BERGERIE"
                              width={1600}
                              height={1067}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://shoplalla.com/"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Panorama Studios</h3>
                      <span className="js-v-item-inner-para">
                        Communication consulting, <br />
                        Brand awareness development
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/3W7A7306-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/3W7A7306-copie.jpg"
                              alt="3W7A7306 - copie"
                              width={709}
                              height={1063}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/hippywalakineponge-iris-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/hippywalakineponge-iris-copie.jpg"
                              alt="hippywalakineponge-iris - copie"
                              width={1344}
                              height={2016}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/soccoeponge-vert-mallorca-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/soccoeponge-vert-mallorca-copie.jpg"
                              alt="soccoeponge-vert mallorca - copie"
                              width={850}
                              height={1276}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href="https://curiosity-lab.com/?srsltid=AfmBOopC662y4hq5KKD7B1xOn-o3d-VeoW8FWpeL16fNivtHabmcNWjl"
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Namoh Studios</h3>
                      <span className="js-v-item-inner-para">
                        Communication <br />
                        and development strategy consulting
                      </span>
                    </a>
                    <div className="c-vsl-wrapper">
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/34B3655-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/34B3655-copie.jpg"
                              alt="_34B3655 - copie"
                              width={992}
                              height={661}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/CURIOSITY_LAB_017_1634-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/CURIOSITY_LAB_017_1634-copie.jpg"
                              alt="CURIOSITY_LAB_017_1634 - copie"
                              width={1052}
                              height={842}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                      <div className="js-v-vsl vsl-item">
                        <div className="media-background lazy-container">
                          <picture>
                            <source
                              data-srcset="https://gaelleperrin.com/wp-content/uploads/2024/09/KIMONO_1-copie.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazy"
                              src="https://gaelleperrin.com/wp-content/uploads/2024/09/KIMONO_1-copie.jpg"
                              alt="KIMONO_1 - copie"
                              width={709}
                              height={970}
                              aspect=""
                            />
                          </picture>
                          <div className="placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Tips Music</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation of the France
                        communication strategy
                        <br />
                        Management of RS, press relations and influence
                      </span>
                    </a>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <a
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Vivo</h3>
                      <span className="js-v-item-inner-para">
                        Development of awareness
                        <br />
                        Press relations
                      </span>
                    </a>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Samsung</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Crocs</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Fireboltt, Lakme</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Maybelline</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Azorte</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Rare Rabbit</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Boat</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Philips</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Sparx</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Realme</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Max</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Amazon</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Wrangler</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Soezi</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Saffola</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>{" "}
                  <div className="js-v-item v-item">
                    <Link
                      className="js-v-link js-v-item-inner"
                      href=""
                      target="_blank"
                      title=""
                    >
                      <h3 className="js-v-item-inner-head">Fanztar</h3>
                      <span className="js-v-item-inner-para">
                        Definition and implementation <br />
                        of the France communication strategy
                      </span>
                    </Link>
                    <div className="c-vsl-wrapper" />
                  </div>
                </div>
              </div>
              <div className="l-wrapper py-8 py-4@sm">
                {/* <div className="v-logo">
                  <svg width={48} height={64} viewBox="0 0 48 64">
                    <path d="M20.0578 38.8121C18.2215 38.8121 16.529 38.4917 14.9804 37.8509C13.4317 37.2101 12.0932 36.3373 10.9649 35.2324C9.85873 34.1055 8.98485 32.7907 8.34326 31.2881C7.72379 29.7635 7.41406 28.1283 7.41406 26.3826C7.41406 24.6591 7.72379 23.046 8.34326 21.5434C8.96272 20.0187 9.82555 18.704 10.9317 17.5991C12.0379 16.4722 13.3543 15.5883 14.8808 14.9475C16.4074 14.2846 18.0888 13.9531 19.925 13.9531C22.3365 13.9531 24.4383 14.4724 26.2303 15.511C28.0444 16.5274 29.5157 17.9637 30.644 19.8198L28.9847 20.7811C28.0555 19.168 26.8387 17.9306 25.3343 17.0688C23.8299 16.1849 22.0268 15.743 19.925 15.743C18.3321 15.743 16.883 16.0302 15.5777 16.6048C14.2945 17.1572 13.1884 17.9195 12.2592 18.8918C11.3521 19.8419 10.6441 20.9689 10.1353 22.2726C9.62643 23.5542 9.37201 24.9242 9.37201 26.3826C9.37201 27.8631 9.62643 29.2552 10.1353 30.5589C10.6662 31.8406 11.3963 32.9565 12.3255 33.9066C13.2547 34.8568 14.372 35.6081 15.6773 36.1605C17.0047 36.7129 18.4649 36.9891 20.0578 36.9891C21.5401 36.9891 22.8785 36.7571 24.0732 36.2931C25.29 35.8069 26.3298 35.144 27.1927 34.3044C28.0555 33.4647 28.7413 32.4814 29.2502 31.3544C29.7811 30.2054 30.113 28.968 30.2457 27.6421H24.7451V28.0306C24.4745 27.8291 24.1531 27.6921 23.8037 27.6421H23.2117C23.0766 27.6615 22.9457 27.6938 22.8203 27.7378V27.6421H22.5246V25.8523L22.8203 25.8672V25.8505H31.6477C32.9972 25.8505 34.2251 26.0715 35.3313 26.5134C36.4375 26.9333 37.3777 27.5188 38.1521 28.2701C38.9264 28.9993 39.5237 29.8832 39.9441 30.9218C40.3644 31.9382 40.5746 33.0431 40.5746 34.2363C40.5746 35.4295 40.3644 36.5454 39.9441 37.584C39.5237 38.6004 38.9153 39.4843 38.1189 40.2356C37.3445 40.9869 36.4043 41.5835 35.2981 42.0255C34.214 42.4453 33.0083 42.6552 31.6809 42.6552H24.7451V50.0466H22.8203V40.7473C23.0354 40.8229 23.2668 40.8639 23.5077 40.8639C23.9714 40.8639 24.3996 40.7117 24.7451 40.4546V40.8654H31.5813C32.6875 40.8654 33.672 40.6996 34.5348 40.3682C35.4198 40.0146 36.1609 39.5396 36.7583 38.9429C37.3556 38.3463 37.8091 37.6503 38.1189 36.8548C38.4507 36.0372 38.6166 35.1644 38.6166 34.2363C38.6166 33.2861 38.4507 32.4133 38.1189 31.6178C37.8091 30.8002 37.3445 30.0931 36.7251 29.4965C36.1277 28.8999 35.3866 28.4359 34.5016 28.1044C33.7894 27.8308 32.9943 27.6701 32.1163 27.6224C32.011 28.843 31.7526 30.0207 31.3409 31.1556C30.7878 32.6581 29.9913 33.984 28.9515 35.133C27.9117 36.2599 26.6396 37.1549 25.1352 37.8178C23.6529 38.4807 21.9604 38.8121 20.0578 38.8121Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 23.9709C0 10.7321 10.7452 0 24 0C37.2548 0 48 10.7321 48 23.9709V40.0291C48 53.2679 37.2548 64 24 64C10.7452 64 0 53.2679 0 40.0291V23.9709ZM46.0548 23.9709V40.0291C46.0548 52.1949 36.1805 62.0571 24 62.0571C11.8195 62.0571 1.94522 52.1949 1.94522 40.0291V23.9709C1.94522 11.8051 11.8195 1.94286 24 1.94286C36.1805 1.94286 46.0548 11.8051 46.0548 23.9709Z"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vf-section bg-primary">
        <div className="v-wrapper">
          <div className="v-wrapper-inner">
            <div className="c-wrapper bg-primary">
              <div className="v-wrapper-inner-content">
                <h2 className="v-wrapper-heading">Dhamaka Records</h2>
                <h4 className="ff-t tt-u fs-md mt-0b">
                  Big ideas. Bold moves. That’s Dhamaka.
                </h4>
                <p className="">
                  Our music label has delivered hits like Hum Hindustani, Yeh
                  Galiyan Yeh Chaubara, and Blockbuster
                </p>
                {/* <div className="mb-1">
                  <a
                    href=""
                    target="_blank"
                    className="a-underline is-rvrsd prevent"
                    title="Have a good trip !"
                  >
                    <span>Have a good trip !</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="media-background js-prllx lazy-container">
              <video
                src="../../../assets/videos/Dhamaka-video 5.mp4"
                loop
                autoPlay
                playsInline
                muted
              ></video>
              <div className="placeholder" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dhamaka_Hero;
