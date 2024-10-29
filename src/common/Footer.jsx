import gsap from "gsap";
// import ScrollSmoother from "gsap/dist/ScrollSmoother";
import React, { useEffect } from "react";
// gsap.registerPlugin(ScrollSmoother);
const Footer = () => {
  useEffect(() => {
    let footer = document.getElementsByClassName("footer")[0];
    let footerLogo = footer.getElementsByClassName("haloLogo")[0];
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (footerLogo) {
      footerLogo.addEventListener("click", handleClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (footerLogo) {
        footerLogo.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top--left" data-scroll-id="form_wrapper">
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
                action="/"
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
                <div className="form__step step_1">
                  <p className="your_name fht">1. what’s your name?</p>
                  <div className="form__inputblock">
                    <div className="form__inputblock--heading">
                      <h2 className="fht">Enough about us</h2>
                    </div>
                    <div className="form__inputblock--input has_word">
                      <span className="form__inputblock--input--word">
                        let’s talk About
                      </span>
                      <span className="wpcf7-form-control-wrap" data-name="you">
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
                  <p className="your_name fht">3. How can we help you?</p>
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
                    id="wpcf7-6704f438aab5a-wrapper"
                    className="wpcf7-form-control-wrap honeypot-391-wrap"
                  >
                    <input
                      type="hidden"
                      name="honeypot-391-time-start"
                      defaultValue={1728377912}
                    />
                    <input
                      type="hidden"
                      name="honeypot-391-time-check"
                      defaultValue={4}
                    />
                    <input
                      id="wpcf7-6704f438aab5a-field"
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
          <div className="footer__top--right">
            <p>contact us</p>
          </div>
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
                The Middle East's Premier Digital Media Company
              </h3>
            </div>
            <div className="footer__bottom--text--right">
              <div className="footer__bottom--text--block fht">
                <h6>CONTACT US</h6>
                <p>
                  <a href="callto:04 366 3399">04 366 3399</a>
                </p>
                <p>
                  <a href="maillto:hello@halomedia.com">hello@halomedia.com</a>
                </p>
              </div>
              <div className="footer__bottom--text--block fht">
                <h6>VISIT US</h6>
                <p>
                  Suite 2703-2704 JBC2,
                  <br />
                  Cluster V, JLT, Dubai,
                  <br />
                  United Arab Emirates
                </p>
              </div>
            </div>
            <div className="haloLogo">
              <div className="haloLogo__img" />
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
            <span className="copy fht"> © 2023 halo media </span>
            <span className="by fht">
              by <a href="https://mallardandclaret.com/">m&amp;c</a>
            </span>
          </span>
          <span className="fht">
            <a
              className="privacy-policy"
              data-title="privacy-policy"
              href="/privacy-policy"
            >
              PRIVACY
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
