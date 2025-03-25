import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { forwardRef, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Footer2 = forwardRef((props, ref) => {
  function formHandler() {
    if (document.querySelector(".footer")) {
      // Replace jQuery's $.fn.extend with native JS

      // Handle backspace (delete text) animation
      //   function backspace(el, options) {
      //     const settings = Object.assign(
      //       {
      //         callback: function () {},
      //         keypress: function () {},
      //         t: 100,
      //         e: 0.04,
      //       },
      //       options
      //     );

      //     let value = el.value || el.innerHTML;

      //     function deleteText(length) {
      //       if (length > 0) {
      //         el[/(np|x)/i.test(el.tagName) ? "value" : "innerHTML"] =
      //           value.slice(0, -1);
      //         settings.keypress.call(el);
      //         setTimeout(() => deleteText(length - 1), settings.t);
      //       } else {
      //         settings.callback.call(el);
      //       }
      //     }

      //     deleteText(value.length);
      //   }

      // Handle typing animation
      //   function typetype(el, str, options) {
      //     const settings = Object.assign(
      //       {
      //         callback: function () {},
      //         keypress: function () {},
      //         t: 100,
      //         e: 0.04,
      //       },
      //       options
      //     );

      //     let index = 0;

      //     function typeText() {
      //       if (index < str.length) {
      //         el[/(np|x)/i.test(el.tagName) ? "value" : "innerHTML"] +=
      //           str[index];
      //         settings.keypress.call(el);
      //         index++;
      //         setTimeout(typeText, settings.t);
      //       } else {
      //         settings.callback.call(el);
      //       }
      //     }

      //     typeText();
      //   }

      // Smooth scroll event (simplified example)
      const scrollElement = document.querySelector(".form_wrapper");
      if (scrollElement) {
        scrollElement.addEventListener("scroll", () => {
          let progress =
            scrollElement.scrollTop /
            (scrollElement.scrollHeight - scrollElement.clientHeight);
          if (progress > 0.1) {
            document.querySelector(".step_1").classList.add("show");
            document.querySelector("#about_you_input").focus();
          }
        });
      }

      const stepNextBtn = document.querySelector(".step_next");
      const submitBtn = document.querySelector(".footer__submit");
      const stepPrevBtn = document.querySelector(".step_prev");

      // Next button functionality
      stepNextBtn.addEventListener("click", (event) => {
        event.preventDefault();
        // Handle transitions for each step
        if (
          document.querySelector(".step_1").classList.contains("show") &&
          !document.querySelector(".step_2").classList.contains("show") &&
          document.querySelector("#about_you_input").validity.valid &&
          document.querySelector("#about_you_input").value.length > 0
        ) {
          document.querySelector(".step_1").classList.add("hide");
          setTimeout(() => {
            document.querySelector(".step_2").classList.add("show");
            gsap.to(".footer__bottom--line--inner", {
              width: "50%",
              duration: 0.5,
            });
            stepPrevBtn.classList.remove("disable");
            setTimeout(() => {
              document.querySelector("#email_input").focus();
            }, 500);
          }, 500);
        }

        if (
          document.querySelector(".step_2").classList.contains("show") &&
          !document.querySelector(".step_3").classList.contains("show") &&
          document.querySelector("#email_input").validity.valid &&
          document.querySelector("#email_input").value.length > 0
        ) {
          document.querySelector(".step_2").classList.add("hide");
          setTimeout(() => {
            document.querySelector(".step_3").classList.add("show");
            gsap.to(".footer__bottom--line--inner", {
              width: "75%",
              duration: 0.5,
            });
            setTimeout(() => {
              document.querySelector("#phone_input").focus();
            }, 500);
          }, 500);
        }

        if (
          document.querySelector(".step_3").classList.contains("show") &&
          document.querySelector("#phone_input").validity.valid &&
          document.querySelector("#phone_input").value.length > 0
        ) {
          document.querySelector(".step_3").classList.add("hide");
          document.querySelector(".step_4").classList.add("show");
          gsap.to(".footer__bottom--line--inner", {
            width: "100%",
            duration: 0.5,
          });
          stepNextBtn.classList.add("hide");
          submitBtn.classList.add("show");
          setTimeout(() => {
            document.querySelector("#message_input").focus();
          }, 500);
        }
      });

      // Previous button functionality
      stepPrevBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (document.querySelector(".step_4").classList.contains("show")) {
          setTimeout(() => {
            stepNextBtn.classList.remove("hide");
            submitBtn.classList.remove("show");
            document.querySelector(".step_4").classList.remove("show");
            document.querySelector(".step_3").classList.remove("hide");
            gsap.to(".footer__bottom--line--inner", {
              width: "75%",
              duration: 0.5,
            });
          }, 500);
        }

        if (document.querySelector(".step_3").classList.contains("show")) {
          setTimeout(() => {
            gsap.to(".footer__bottom--line--inner", {
              width: "50%",
              duration: 0.5,
            });
            document.querySelector(".step_3").classList.remove("show");
            document.querySelector(".step_2").classList.remove("hide");
          }, 500);
        }

        if (document.querySelector(".step_2").classList.contains("show")) {
          setTimeout(() => {
            gsap.to(".footer__bottom--line--inner", {
              width: "25%",
              duration: 0.5,
            });
            document.querySelector(".step_2").classList.remove("show");
            document.querySelector(".step_1").classList.remove("hide");
            stepPrevBtn.classList.add("disable");
          }, 500);
        }
      });

      // Submit button functionality
      submitBtn.addEventListener("click", (event) => {
        document.querySelector(".step_4").classList.add("hide");
        document.querySelector(".footer__greeting").classList.add("show");
        document.querySelector(".footer__bottom--btn").classList.add("hide");
      });
    }
  }

  useGSAP(() => {
    formHandler();
  });
  //** Form handler **//

  return (
    <div>
      <footer ref={ref} id="footerr" className="footer" data-scroll-section="">
        <div
          className="footer__wrapper"
          data-scroll=""
          // data-scroll-speed={-1}
          data-scroll-id="footer"
        >
          <div className="footer__top" data-scroll="">
            <div
              className="footer__top--left"
              data-scroll=""
              data-scroll-id="form_wrapper"
            >
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f197-o1"
                lang="en-US"
                dir="ltr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true" />
                  <ul />
                </div>
                <form
                  action=""
                  method="post"
                  className="wpcf7-form init footer__top--left--form form"
                  noValidate="novalidate"
                  data-status="init"
                >
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" defaultValue={197} />
                    <input
                      type="hidden"
                      name="_wpcf7_version"
                      defaultValue="5.6.4"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_locale"
                      defaultValue="en_US"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      defaultValue="wpcf7-f197-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      defaultValue={0}
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      defaultValue=""
                    />
                  </div>
                  <div className="form__step step_1 show">
                    <p className="your_name fht">1. what’s your name?</p>
                    <div className="form__inputblock">
                      <div className="form__inputblock--heading">
                        <h2 className="fht">Enough about us</h2>
                      </div>
                      <div className="form__inputblock--input has_word">
                        <span className="form__inputblock--input--word">
                          let’s talk About
                        </span>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="you"
                        >
                          <input
                            type="text"
                            name="you"
                            defaultValue=""
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            id="about_you_input"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="YOU"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form__step step_2">
                    <p className="your_name fht">2. How can we contact you?</p>
                    <div className="form__inputblock">
                      <div className="form__inputblock--heading">
                        <h2 className="fht">your email</h2>
                      </div>
                      <div className="form__inputblock--input">
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="email-716"
                        >
                          <input
                            type="email"
                            name="email-716"
                            defaultValue=""
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            id="email_input"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="yourname@email.com"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form__step step_3">
                    <p className="your_name fht">3. Enter Your Phone Number</p>
                    <div className="form__inputblock">
                      <div className="form__inputblock--heading">
                        <h2 className="fht">phone number</h2>
                      </div>
                      <div className="form__inputblock--input">
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="tel-473"
                        >
                          <input
                            type="tel"
                            name="tel-473"
                            defaultValue=""
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                            id="phone_input"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="01234567890"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form__step step_4">
                    <p className="your_name fht">4. let’s finish things up</p>
                    <div className="form__inputblock">
                      <div className="form__inputblock--heading">
                        <h2 className="fht">your message</h2>
                      </div>
                      <div className="form__inputblock--input">
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="message"
                        >
                          <input
                            type="text"
                            name="message"
                            defaultValue=""
                            size={40}
                            className="wpcf7-form-control wpcf7-text message_input"
                            id="message_input"
                            aria-invalid="false"
                            placeholder="Please type your message here..."
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span
                      id="wpcf7-6705552988e8d-wrapper"
                      className="wpcf7-form-control-wrap honeypot-391-wrap"
                    >
                      <input
                        type="hidden"
                        name="honeypot-391-time-start"
                        defaultValue={1728402729}
                      />
                      <input
                        type="hidden"
                        name="honeypot-391-time-check"
                        defaultValue={4}
                      />
                      <input
                        id="wpcf7-6705552988e8d-field"
                        className="wpcf7-form-control wpcf7-text"
                        type="text"
                        name="honeypot-391"
                        defaultValue=""
                        size={40}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </span>
                    <br />
                    <button
                      value="send"
                      className="wpcf7-form-control has-spinner wpcf7-submit hidden"
                      id="hidden"
                    >
                      <span>send</span>
                    </button>
                  </p>
                  <div className="wpcf7-response-output" aria-hidden="true" />
                </form>
              </div>
            </div>
            {/* <div className="footer__top--right">
              <p>contact us</p>
            </div> */}
          </div>
          <div className="footer__bottom">
            <div className="footer__error">
              <h5 className="footer__error--name">
                Please enter your first name
              </h5>
              <h5 className="footer__error--email">
                Please enter a valid email address
              </h5>
              <h5 className="footer__error--phone">
                Please enter a valid phone number
              </h5>
              <h5 className="footer__error--message">Please enter a message</h5>
            </div>
            <div className="footer__bottom--line">
              <div className="footer__bottom--line--inner" />
            </div>
            <div className="footer__bottom--btn">
              <a href="" className="footer__nav disable step_prev">
                <span className="btn-text">Previous</span>
              </a>
              <a href="" className="footer__nav step_next">
                <span className="btn-text">Next</span>
              </a>
              <button type="button" className="footer__submit submit-js">
                Submit
              </button>
            </div>
            <div className="footer__bottom--text">
              <div className="footer__bottom--text--left">
                <h3 className="fht">
                  Are you ready to watch your idea come into being? Whether it
                  be through film, an event, or social movement, we will make it
                  happen.
                </h3>
              </div>
              <div className="footer__bottom--text--right">
                <div className="footer__bottom--text--block fht">
                  <h6>CONTACT US</h6>
                  <p>
                    <a href="callto:+91-7506037555">+91-7506037555</a>
                  </p>
                  <p>
                    <a href="maillto:hello@halomedia.com">
                      chahat@mrandmrsfilms.com
                    </a>
                  </p>
                </div>
                <div className="footer__bottom--text--block fht">
                  <h6>Follow US</h6>
                  <p>
                    <a href="#">Instagram</a>
                  </p>
                  <p>
                    <a href="#">Facebook</a>
                  </p>
                  <p>
                    <a href="#">Twitter</a>
                  </p>
                </div>
                <div className="footer__bottom--text--block fht">
                  <h6>VISIT US</h6>
                  <p>
                    Abhinay Bungalow, Juhu
                    <br />
                    Mumbai, India
                  </p>
                </div>
                {/* <div className="haloLogo">
                  <div className="haloLogo__img" />
                  <h3>
                    {" "}
                    <FaArrowUpLong />
                  </h3>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer__greeting">
            <h5>thank you</h5>
            <h2>SOMETHING GREAT IS COMING</h2>
            <p>Thank you for expressing interest, we’ll be in touch soon.</p>
          </div>
          <p className="copytext">
            <span>
              <span className="copy fht"> © 2024 entertainment umbrella </span>
              <span className="fht">
                <Link
                  className="privacy-policy"
                  data-title="privacy-policy"
                  href="/privacy-policy"
                >
                  PRIVACY
                </Link>
              </span>
            </span>{" "}
            <span className="by fht">
              Developed by{" "}
              <Link href="https://zerrorstudio.com">ZerroStudio</Link>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
});

export default Footer2;
