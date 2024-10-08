import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, scrollTrigger);
const Gallery = () => {
  useEffect(() => {
    const galleryImageBottomInnerElements = document.querySelectorAll(
      ".gallery_image_bottom_inner"
    );
    const Main = document.querySelector(".Main");

    const colors = [
      "rgb(238, 238, 234)",
      "rgb(42, 70, 85)",
      "rgb(231, 20, 66)",
      "rgb(38, 44, 41)",
      "rgb(153, 75, 54)",
      "rgb(32, 32, 69)",
      "rgb(30, 33, 38)",
    ];

    galleryImageBottomInnerElements.forEach((container, index) => {
      container.addEventListener("mouseenter", () => {
        gsap.to(Main, {
          backgroundColor: colors[index] || "#000",
          duration: 0.5,
        });
      });

      container.addEventListener("mouseleave", () => {
        gsap.to(Main, {
          backgroundColor: "#000",
          duration: 0.5,
        });
      });
    });
  }, []);
  useGSAP(() => {
    const blanDiv = document.querySelector(".blan_div");
    const blanDiv2 = document.querySelector(".blan_div2");
    const triggerCntr = gsap.utils.toArray(".gallery_cntr");
    const galleryItemsClip = gsap.utils.toArray(".fixed_image_clip_cntr");
    const galleryItemsClipImg = gsap.utils.toArray(
      ".fixed_image_clip_cntr img"
    );
    // Create ScrollTrigger for blanDiv scrollDown
    scrollTrigger.create({
      trigger: blanDiv,
      start: "top top",
      end: "bottom 80%",
      markers: false,
      scrub: true,
      onEnter: () => {
        // Set opacity to 0
        gsap.to(".ScrollDown_btm", {
          opacity: 0,
          // visibility: "hidden", // Optionally hide the element
          duration: 0.3, // Duration of the animation
        });
      },
      onLeaveBack: () => {
        // Reset opacity to 1 and visibility to visible when scrolling back up
        gsap.to(".ScrollDown_btm", {
          opacity: 1,
          // visibility: "visible", // Reset visibility
          duration: 0.3,
        });
      },
    });
    // Create ScrollTrigger for blanDiv scrollUp
    scrollTrigger.create({
      trigger: blanDiv2,
      start: "top top",
      end: "bottom 80%",
      markers: false,
      scrub: true,
      onEnter: () => {
        // Set opacity to 0
        gsap.to(".ScrollUp_btm", {
          opacity: 1,
          // visibility: "hidden", // Optionally hide the element
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        // Reset opacity to 1 and visibility to visible when scrolling back up
        gsap.to(".ScrollUp_btm", {
          opacity: 0,
          // visibility: "visible", // Reset visibility
          duration: 0.3, // Duration of the animation
        });
      },
    });

    // animtion for scrll down text
    triggerCntr.forEach((textCntr, index) => {
      const imgClip = galleryItemsClip[index]; // Get the corresponding imgClip
      const img = galleryItemsClipImg[index]; // Get the corresponding image
      // Create a timeline for the current textCntr and corresponding imgClip
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textCntr,
          start: "top top",
          end: "bottom 0%",
          scrub: true,
          // markers: true,
          once: false,
        },
      });

      // First animation
      tl.to(imgClip, {
        clipPath: "inset(0% 0px 0%)",
        ease: "none",
      });

      tl.to(
        img,
        {
          scale: 1.0724,
          ease: "none",
        },
        "<"
      );
      // Second animation
      tl.to(
        imgClip,
        {
          clipPath: "inset(0% 0px 100%)",
          ease: "none",
        },
        ">"
      );
      tl.to(
        img,
        {
          scale: 1.2,
          ease: "none",
        },
        "<<"
      );
    });
  });
  return (
    <>
      <div className="Main"></div>
      <figure data-track="nav" className="blan_div">
        <p className="ScrollDown_btm">SCROLL Down</p>
      </figure>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Givenchy
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Givenchy"
                  href="givenchy"
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/4deceba7fbbfb685d55a0cd4eaaa6077e68135c9-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Replay
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Replay"
                  href="replay "
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/ef3e1575c2c83d455d48d0cece290e2af704f5b7-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Equinox
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label=" Equinox "
                  href=" equinox "
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/947b09129d093a71b27c670a366038159da4c03d-1000x1250.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Sophie
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Sophie"
                  href="sophie"
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/ca3bae94469a74660456f1e8ab395104446eb394-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Harley
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Harley"
                  href="harley"
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/48404a0139bd362614834f55025a6aef8caa4b58-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Renew
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Renew"
                  href="renew"
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/704e277065144efc4dc942cf409a1c1bce105f61-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text">
              <Link href={""} className="gallery_title_maintext">
                Originals
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Originals"
                  href="originals"
                  className="w-full h-full"
                ></Link>
              </figure>
            </div>
            {/* Fixed Image Section */}
            <figure className="Fixed_image_cntr">
              <div
                data-start="hidden"
                className="fixed_image_clip_cntr fixed_image_clip_cntr1"
              >
                <img
                  src="https://cdn.sanity.io/images/mbttrbyl/production/c3f31ae29a626f9b779f8b29ad642166be277755-2000x2500.jpg?h=1080&q=60&auto=format"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      <figure data-track="nav2" className="blan_div2">
        <p className="ScrollUp_btm">SCROLL UP</p>
      </figure>
    </>
  );
};

export default Gallery;
