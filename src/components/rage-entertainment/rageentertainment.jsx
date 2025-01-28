import React, { useEffect } from "react";
import ReServices from "./ReServices";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Artist_tour from "./Artist_tour";

gsap.registerPlugin(ScrollTrigger);
const RageEntertainment = () => {
  useGSAP(() => {
    const image = document.querySelector(".bg_image");
    const tl = gsap.timeline();
    gsap.to(".image", {
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false, // Set to `true` for debugging purposes
      },
      yPercent: 32,
      ease: "none",
    });
  }, []);

  return (
    <div>
      <div className="section_rageEn">
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <section className="section_rageEn_home_hero">
                <div className="hero_h1_group day">
                  <h1 className="h1_small once_text">
                    <div className="">
                      The Pulse of Your Event: <br /> Exceptional Artists,
                      Unforgettable Nights
                      {/* <div
                        className="line"
                      
                      >
                        The Pulse of Your Event:
                        
                      </div> */}
                    </div>
                  </h1>
                </div>
                <div className="logo_holder">
                  <h3>RAGE</h3>
                  <h1>ENTERTAINMENT</h1>
                  {/* <img
                    src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/6691b48ef5849526fd6edcd8_GOODNIGHT_RED_WORDMARK.svg"
                    loading="lazy"
                    alt=""
                    className="logo_full night-a"
                    // style={{
                  
                  />
                  <img
                    src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/6676b8ec7d993bf36939bc3d_GOODNIGHT_WHITE_WORDMARK.svg"
                    loading="lazy"
                    alt=""
                    className="logo_full day-a"
                   
                  /> */}
                </div>
                <div className="grad_home _20" />
                <div
                  data-w-id="7dd77b7c-77d7-a6df-6360-f67d5743c15b"
                  className="bg_video"
                >
                  <div className="video_content">
                    <div
                      className="video-bg p w-embed"
                      // style={{ filter: "grayscale(0%)" }}
                    >
                      <div
                        // style={{ width: "100%", height: "100%" }}
                        className="w-background-video w-background-video-atom"
                      >
                        <video
                          playsInline
                          loop
                          muted
                          autoPlay
                          data-wf-ignore="true"
                          data-object-fit="cover"
                        >
                          <source
                            src="https://player.vimeo.com/progressive_redirect/playback/1019498740/rendition/1080p/file.mp4?loc=external&signature=7ecd1aece054b303b6ebd2bd64858c2226cd85b21b365be8c3e0af8ac7394275"
                            data-wf-ignore="true"
                          />
                        </video>
                      </div>
                      <section
                        className="news_modal white is-news"
                        // style={{ display: "none", opacity: 0 }}
                      >
                        <div className="section_label static">
                          <h5 className="h5">Goodnight®</h5>
                          <div className="label_sub">Updates</div>
                        </div>
                        <div className="form-container">
                          <div className="title-width">
                            <h6 className="h3 large is-news">
                              Sign up to our Newsletter
                            </h6>
                          </div>
                          <div className="para-width">
                            <div className="h5 is-news">
                              Be the first to know
                            </div>
                            <p className="centre">
                              Based in London with a global reach, our parties
                              are a masterful blend of visionary creativity,
                              effortless style, forensic attention to detail.
                            </p>
                          </div>
                          <div className="form-div">
                            <div className="w-form">
                              <form
                                id="wf-form-Newsletter-Form"
                                name="wf-form-Newsletter-Form"
                                data-name="Newsletter Form"
                                action="https://goodnight.us9.list-manage.com/subscribe/post?u=54139635289b2850c97060466&amp;id=e8d1ac91c4&amp;f_id=00948ae1f0"
                                method="post"
                                className="form"
                                data-wf-page-id="66762a11be6fa0cb3df0960b"
                                data-wf-element-id="aac942dd-04c3-801e-49b2-beeb61e6ae2a"
                                aria-label="Newsletter Form"
                              >
                                <input
                                  className="field w-input"
                                  maxLength={256}
                                  name="FNAME"
                                  data-name="FNAME"
                                  placeholder="Your Name"
                                  type="text"
                                  id="FNAME-3"
                                  required=""
                                />
                                <input
                                  className="field w-input"
                                  maxLength={256}
                                  name="EMAIL"
                                  data-name="EMAIL"
                                  placeholder="Your Email Address"
                                  type="email"
                                  id="EMAIL-4"
                                  required=""
                                />
                                <input
                                  type="submit"
                                  data-wait="Please wait..."
                                  className="submit w-button"
                                  defaultValue="Submit"
                                />
                              </form>
                              <div
                                className="success-message w-form-done"
                                tabIndex={-1}
                                role="region"
                                aria-label="Newsletter Form success"
                              >
                                <div>Thanks! You're signed up.</div>
                              </div>
                              <div
                                className="error-message w-form-fail"
                                tabIndex={-1}
                                role="region"
                                aria-label="Newsletter Form failure"
                              >
                                <div>
                                  Oops! Something went wrong while submitting
                                  the form.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          data-w-id="aac942dd-04c3-801e-49b2-beeb61e6ae34"
                          href="#"
                          className="close_modal-copy w-inline-block"
                        >
                          <h5 className="h4 white">CLOSE</h5>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <section className="standard_section">
                <div className="section_label">
                  <h5 className="h5">About Rage Entertainment</h5>
                  <div id="date" className="label_sub">
                    21.01.2025
                  </div>
                </div>
                <div className="intro_group">
                  <h3 className="h3 centred mob-off aos_text">
                    <div className="section_rageEn_line-mask">
                      <div
                        className=""
                        // style={{
                        //   textAlign: "center",
                        //   translate: "none",
                        //   rotate: "none",
                        //   scale: "none",
                        //   transform:
                        //     "translate(0px, 0%) scale(1.00001, 1.00001)",
                        // }}
                      >
                        PARTIES FOR PEOPLE &amp; BRANDS WE PRODUCE SPECTACULAR{" "}
                        <br />
                      </div>
                    </div>
                    <div className="section_rageEn_line-mask">
                      <div className=""></div>
                    </div>
                  </h3>
                  <h2 className="h2_mob centred aos_text">
                    <div
                      className="section_rageEn_line-mask"
                      // style={{ height: "57.88px" }}
                    >
                      <div className="line">
                        We produce spectacular parties for people &amp; brands{" "}
                      </div>
                    </div>
                  </h2>
                  <h3 className="h3 centred mob-on aos_text w-dyn-bind-empty">
                    <div className="section_rageEn_line-mask">
                      <div
                        className="line"
                        // style={{
                        //   textAlign: "center",
                        //   translate: "none",
                        //   rotate: "none",
                        //   scale: "none",
                        //   transform:
                        //     "translate(0px, 0%) scale(1.00001, 1.00001)",
                        // }}
                      >
                        {" "}
                      </div>
                    </div>
                  </h3>
                  <div
                    data-w-id="75118230-4c0d-0d85-93ed-23fc39fc8eb2"
                    className="intro_image"
                  >
                    <img
                      src="/assets/images/RageEntertainment/indoorcrwd.jpg"
                      loading="lazy"
                      data-w-id="55fc1117-7048-0f5f-03b2-b8e302f1e482"
                      alt=""
                      sizes="(max-width: 479px) 90vw, (max-width: 991px) 56vw, 42vw"
                    />
                  </div>
                  <div className="holder _40vw">
                    <div className="rich ac w-richtext">
                      <h6>WELCOME TO THE PARTY</h6>
                      <p>‍</p>
                      <p>
                        <strong>
                          Rage Entertainment is a creative events agency that
                          specialises in the design and production of
                          spectacular parties for discerning people and
                          ambitious brands.
                        </strong>{" "}
                      </p>
                      <p>
                        At Rage Entertainment, we’re all about throwing nights
                        that hit different—where the music’s unreal, the vibe’s
                        electric, and the crowd never wants to leave. From
                        underground techno beats to sets by international DJs,
                        we bring the best global sounds straight to the dance
                        floor. Ready for a night that’ll make you forget
                        everything else? Let’s Rage.
                      </p>
                      <p>
                        It’s not just a party—it’s an experience that sticks
                        with you long after the last track drops. At Rage
                        Entertainment, we don’t just throw events, we create
                        moments that pulse with energy and elevate the nightlife
                        scene. With international DJs, underground techno, and
                        an atmosphere that buzzes from start to finish. Every
                        event is like a one-way ticket to something totally
                        unforgettable.
                      </p>
                      <p>‍</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>{" "}
      <section className="standard_section _100min">
        <img
          src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/668a8c2aae9969ce369e438f_redstars.svg"
          loading="lazy"
          data-w-id="43eceaa1-a420-c37d-cae7-1afc04459ae9"
          alt=""
          className="stars_holder og"
          // style={{
          //   willChange: "transform",
          //   transform:
          //     "translate3d(0px, 19.9988%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          //   transformStyle: "preserve-3d",
          // }}
        />
        <div className="b_80 c white bottom">
          <h2 className="h2_display mob-on aos_text">
            <div className="line-masks" style={{ height: "154px" }}>
              <div className="line">Our Services</div>
            </div>
          </h2>
          <h2 className="h2_display mob-off aos_text">
            <div className="line-masks" style={{ height: "154px" }}>
              <div
                className="line"
                // style={{
                //   textAlign: "center",
                //   translate: "none",
                //   rotate: "none",
                //   scale: "none",
                //   transform: "translate(0px, 0%) scale(1.00001, 1.00001)",
                // }}
              >
                Our Services
              </div>
            </div>
            {/* <div className="line-masks" style={{ height: "154px" }}>
              <div
                className="line"
                // style={{
                //   textAlign: "center",
                //   translate: "none",
                //   rotate: "none",
                //   scale: "none",
                //   transform: "translate(0px, 0%) scale(1.00001, 1.00001)",
                // }}
              >
                PARTIES
              </div>
            </div> */}
          </h2>
          <h4 className="h4">Expertly Delivered</h4>
          <div className="b_32 c pt">
            <p className="p">
              We’ll spare you a laundry list of our services. We’d rather show
              you how we approach each event and why it matters. Our values
              shape every decision and infuse every detail. That’s what truly
              sets us apart.
            </p>
          </div>
        </div>
        <div className="bg_image">
          <img
            src="/assets/images/RangeMedia/BOGOTA-18.jpg"
            loading="lazy"
            alt=""
            sizes="100vw"
            // srcSet="https://cdn.prod.website-files.com/667f2710e5449c4792d415da/6716308e265253d733bb1900_66e83e9c30fc9972e0657ef6_Untitled%20design%20(46)%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/667f2710e5449c4792d415da/6716308e265253d733bb1900_66e83e9c30fc9972e0657ef6_Untitled%20design%20(46)%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/667f2710e5449c4792d415da/6716308e265253d733bb1900_66e83e9c30fc9972e0657ef6_Untitled%20design%20(46)%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/667f2710e5449c4792d415da/6716308e265253d733bb1900_66e83e9c30fc9972e0657ef6_Untitled%20design%20(46)%20(1).jpg 1620w"
            className="image p grad_up"
            style={{
              willChange: "transform",
              transform:
                "translate3d(0px, -10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="grad_up" />
        </div>
        <div className="section_label white">
          <h5 className="h5">Why Rage Entertainment?</h5>
        </div>
        <div className="whygn_listwrapper w-dyn-list">
          <div role="list" className="whygn_list w-dyn-items">
            <div role="listitem" className="whygn_item white w-dyn-item">
              <div className="b_whygn">
                <div className="p total_events ar">(01)</div>
                <div className="b_32">
                  <h3 className="h3 small light">
                    Event Production & Conceptualization
                  </h3>
                  <img
                    src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/668067f7fd1494713d2657ad_star.svg"
                    loading="lazy"
                    data-w-id="43eceaa1-a420-c37d-cae7-1afc04459afd"
                    alt=""
                    className="b_32_star white"
                    // style={{
                    //   transform:
                    //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    //   transformStyle: "preserve-3d",
                    // }}
                  />
                </div>
                <div className="p _40 mob">
                  We bring the vision to life—from the first beat to the last.
                  Whether it’s designing an immersive atmosphere or curating the
                  perfect lineup of international DJs, we make sure every detail
                  is on point.
                </div>
              </div>
            </div>
            <div role="listitem" className="whygn_item white w-dyn-item">
              <div className="b_whygn">
                <div className="p total_events ar">(02)</div>
                <div className="b_32">
                  <h3 className="h3 small light">
                    DJ Bookings & Artist Booking across all Genres
                  </h3>
                  <img
                    src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/668067f7fd1494713d2657ad_star.svg"
                    loading="lazy"
                    data-w-id="43eceaa1-a420-c37d-cae7-1afc04459afd"
                    alt=""
                    className="b_32_star white"
                    // style={{
                    //   transform:
                    //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    //   transformStyle: "preserve-3d",
                    // }}
                  />
                </div>
                <div className="p _40 mob">
                  Looking for world-class talent? We’ve got the connections.
                  From cutting-edge techno to global festival headliners, we
                  book the DJs who know how to make a crowd lose themselves in
                  the music.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="200240bd-27a0-6c7a-80f0-28e0a698c64a"
          className="stars_holder off"
          // style={{
          //   willChange: "transform",
          //   transform:
          //     "translate3d(0px, 19.9982%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          //   transformStyle: "preserve-3d",
          // }}
        >
          <div
            id="w-node-_415353e3-a8a8-3d76-b865-60f5f3ba738c-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_002e9d27-3b81-7a42-9fde-ba431456802c-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-edfaf54b-929a-f1f5-7f20-4c21f93d2ef7-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-c1937a38-b19d-c5ed-8079-a76fa5dafdcc-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_8297d70b-801d-421c-4613-da0e3b88d88d-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_6c70eff7-1e72-cc57-9c0c-12887f7ee520-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_57332ded-20bf-4941-3163-0905b6f5a6c1-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-da2eaa69-bdaf-9a7d-bc6b-26b87cee310f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_5ee104cf-7e67-70ab-586d-6072b875b183-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-f70507bb-717a-ec72-7402-7eb17c017d18-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-ca63ef21-4f31-7bef-aac3-1b78a3d0b5ec-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_69542859-7dac-4f76-0595-a5b6a3d1f9af-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-a8466fa7-da42-3cf7-dde6-74ef2a8a52f7-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_721546e7-259f-519f-1a87-72f9156cba90-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_462f239f-5e95-98cc-4999-e18b8db40355-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_20d71327-68c1-b51a-de8c-e57be2e75ce8-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_8f1c853b-708d-e7b7-587c-b76b80208937-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-ef99f47e-7205-dddd-4278-ca94a365cf2f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_2812ed68-ad71-6538-8911-6a0d71b13f10-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_13308ddc-4d4a-8c3d-ad28-2fd339b2ca55-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-f39c0994-29a0-14ad-079e-efd81b36f32c-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-fe805eae-0be2-b7d7-ee0a-fe4268b0320f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_17576b26-a8ba-193e-85c2-522891444a61-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_6da8a657-1fb3-3261-dfd6-31af9a63757e-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_9aae94bc-0328-a345-cf00-810c31cb201f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-e3eebdd0-ad44-edb0-790e-9401f82b1bf9-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_30b21bdd-6506-8208-628a-a3728650bc70-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-c17909f8-cf34-2f7d-bd76-c4cd2d5b80f9-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-f523b65e-6e7a-4019-6eef-d30b6149ea0f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-a17a384f-d984-2d66-ea44-31e6d1f3e3e5-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_2b7fed4e-c7c1-ed3a-1fb7-8f9e36862508-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_52e3d973-fdcd-e1d2-3d7b-3c02e19dd15e-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_27ca9e1b-4f72-7d10-0ad6-f1633d5a4175-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_984aa51f-04de-eee7-d88b-085e77602cf2-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-f392699b-ba71-6caf-4327-a801dbe91459-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_264c8825-0f74-2741-c4fa-137d7b608b50-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_87f8ecef-1782-3c64-8c37-8acf2e924bb9-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_08d7a966-3d1d-0dc3-3681-ff2434772dea-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-daf8ca9b-116f-8175-b226-5b2fcddcbab2-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_54b39973-96cb-1f9e-b756-66cb87f2b9e3-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_233a88d8-3480-ddb3-f3c0-65ac77f3901f-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_9140dae8-9b7e-74da-d7d1-0ec773708b2a-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-ac34ed5b-5a6e-8489-29a0-a1ac76e31f50-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-a2e5371c-ad38-4b08-272d-4d7b5f4b0e75-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_55aa57be-82fe-5ea7-60e4-b80473b48cc7-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_51d6191f-70f2-d2b7-bee6-c6795617ba6e-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_9c6fb9cb-ab54-46e4-548b-a7019b579647-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-b1527764-3152-a607-943d-0f3c4435a5af-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
          <div
            id="w-node-_30fc53d2-6215-3941-efc8-032a7178b7a6-3df0960b"
            className="star_holder"
          >
            <img
              src="https://cdn.prod.website-files.com/66762a11be6fa0cb3df095fd/66af43c7a4ebc78f724d98ed_red_star.svg"
              loading="lazy"
              alt=""
              className="b_32_star"
              // style={{
              //   transform:
              //     "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
              //   transformStyle: "preserve-3d",
              // }}
            />
          </div>
        </div>
      </section>
      <ReServices />
      <Artist_tour />
    </div>
  );
};

export default RageEntertainment;
