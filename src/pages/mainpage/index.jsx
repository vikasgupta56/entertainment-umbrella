import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const mainpage = () => {
  useEffect(() => {
    // Declare variables
    let lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 50;
    function moveBackground() {
      // Update the position with a smooth transition (GSAP's tweening)
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      // GSAP animation for background transform
      gsap.to(".page-canvas", {
        duration: 0.02, // Small duration for smooth movement
        x: x,
        y: y,
        scale: 1.2,
        ease: "none",
      });

      // Request the next frame for continuous animation
      requestAnimationFrame(moveBackground);
    }

    // Event listener for mouse move and click
    window.addEventListener("mousemove", function (e) {
      const lMouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - e.clientX)
      );
      const lMouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - e.clientY)
      );
      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (20 * lMouseY) / 100;
    });

    window.addEventListener("click", function (e) {
      const lMouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - e.clientX)
      );
      const lMouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - e.clientY)
      );
      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (20 * lMouseY) / 100;
    });

    moveBackground();
  }, []);
  return (
    <div className="mainPage">
      {" "}
      <div className="page-canvas">
        <div
          className="landing-page"
          data-scroll=""
          data-theme=""
          data-theme-md="dark"
          data-entry=""
        >
          <div className="landing-page-left_img_cntr_ul">
            <div className="landing-page-li">
              <a href="" className="landing-page-a main_big_img_1">
                <img
                  src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91145/the-birch-wood-md-web.webp"
                  alt=""
                />
              </a>
            </div>
            <div className="landing-page-li">
              <a href="" className="landing-page-a main_big_img_2">
                <img
                  src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91268/Domy-1948-Wajda-Poster-Version.webp"
                  alt=""
                />
              </a>
            </div>
            <div className="landing-page-li">
              <a href="" className="landing-page-a main_big_img_3">
                <img
                  src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91145/the-birch-wood-md-web.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-inner">
        <div className="landing-page-text">
          <div className="landing-page-text-inner">
            <h2 />
            <p>Select a side and start exploring.</p>
          </div>
        </div>
        <ul className="landing-page-ul">
          <li className="landing-page-li">
            <a href="" className="landing-page-a">
              <span className="landing-page-a-text">MR.&MRS</span>
            </a>
          </li>
          <li className="landing-page-li">
            <a href="/newPage" className="landing-page-a">
              <span className="landing-page-a-text">RAGE MEDIA</span>
            </a>
          </li>
          <li className="landing-page-li">
            <a href="/dhamaka" className="landing-page-a">
              <span className="landing-page-a-text">DHAMAKA</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="desktop_hidden">
        <div className="landing-page-mobile">
          <div className="landing-page-mobile-inner">
            <div className="landing-page-mobile-links">
              <a href="" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91145/the-birch-wood-md-web.webp"
                    alt=""
                    // fill
                  />
                </div>
                <span className="landing-page-mobile-link-title">MR.&MRS</span>
              </a>
              <div className="divider">
                <div className="divider-text">or</div>
              </div>
              <a href="" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91268/Domy-1948-Wajda-Poster-Version.webp"
                    alt=""
                  />
                </div>
                <span className="landing-page-mobile-link-title">
                  RAGE MEDIA
                </span>
              </a>
              <div className="divider">
                <div className="divider-text">or</div>
              </div>
              <a href="" className="landing-page-mobile-link">
                <div className="landing-page-mobile-link-image">
                  <img
                    src="https://www.filmsecession.com/assets/general/Exhibition/Andrzej-Wajda/_homeTransformWebP/91268/Domy-1948-Wajda-Poster-Version.webp"
                    alt=""
                  />
                </div>
                <span className="landing-page-mobile-link-title">DHAMAKA</span>
              </a>
            </div>
            {/* <div className="landing-page-mobile-text">
              <p className="landing-page-mobile-text-cta">
                Select a side and start exploring.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainpage;
