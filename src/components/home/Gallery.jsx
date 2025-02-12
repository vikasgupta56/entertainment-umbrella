import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger, { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(useGSAP, scrollTrigger);
const Gallery = () => {
  useEffect(() => {
    const quotes = document.querySelectorAll(".quote");

    function setupSplits() {
      quotes.forEach((quote) => {
        // Reset if needed
        if (quote.anim) {
          quote.anim.progress(1).kill();
          quote.split.revert();
        }

        quote.split = new SplitText(quote, {
          type: "lines,words",
          linesClass: "split-line",
        });

        // Set up the anim
        quote.anim = gsap.from(quote.split.words, {
          scrollTrigger: {
            trigger: quote,
            // toggleActions: "restart pause resume reverse",
            start: "top 50%",
            markers: false,
            once: true,
          },
          ease: "slow",
          duration: 0.5,
          yPercent: 100,
          stagger: 0.01,
        });
      });
    }

    ScrollTrigger.addEventListener("refresh", setupSplits);
    setupSplits();
  }, []);
  useEffect(() => {
    const galleryImageBottomInnerElements = document.querySelectorAll(
      ".gallery_image_bottom_inner"
    );

    const Main = document.querySelector(".Main");

    const colors = [
      "rgb(174, 174, 169)",
      "rgb(42, 70, 85)",
      "rgb(231, 20, 66)",
      "rgb(38, 44, 41)",
      "rgb(153, 75, 54)",
      "rgb(32, 32, 69)",
      "rgb(30, 33, 38)",
    ];
    // Set the initial background color of Main to black
    // gsap.set(Main);

    // Apply GSAP animation to each element
    galleryImageBottomInnerElements.forEach((el, index) => {
      gsap.to(Main, {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          // end: "bottom 0%",
          scrub: 1,
          markers: false,
          duration: 1,
        },
        backgroundColor: colors[index] || "#000", // Change to specific color
      });
    });
    galleryImageBottomInnerElements.forEach((container, index) => {
      // container.addEventListener("mouseenter", () => {
      //   gsap.to(Main, {
      //     backgroundColor: colors[index] || "#000",
      //     duration: 1,
      //   });
      // });
      // container.addEventListener("mouseleave", () => {
      //   gsap.to(Main, {
      //     backgroundColor: "#000",
      //     duration: 1,
      //   });
      // });
    });
  }, []);
  useGSAP(() => {
    const blanDiv = document.querySelector(".blan_div");
    const GalleryTextCntr = document.querySelector(".Gallery_main_textCntr");
    const blanDiv2 = document.querySelector(".blan_div2");
    const triggerCntr = gsap.utils.toArray(".gallery_cntr");
    const galleryItemsClip = gsap.utils.toArray(".fixed_image_clip_cntr");
    const galleryItemsClipImg = gsap.utils.toArray(
      ".fixed_image_clip_cntr img"
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: GalleryTextCntr,
        start: "top top",
        end: "top -100%",
        markers: false,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".Gallery_main_textCntr h1", {
      opacity: 0,
      duration: 1,
    });
    // tl.to(GalleryTextCntr, {
    //   height: "0vh",
    //   duration: 1,
    // });

    // Create ScrollTrigger for blanDiv scrollDown
    // scrollTrigger.create({
    //   trigger: blanDiv,
    //   start: "top top",
    //   end: "bottom 80%",
    //   markers: false,
    //   scrub: true,
    //   onEnter: () => {
    //     // Set opacity to 0
    //     gsap.to(".ScrollDown_btm", {
    //       opacity: 0,
    //       // visibility: "hidden", // Optionally hide the element
    //       duration: 0.3, // Duration of the animation
    //     });
    //   },
    //   onLeaveBack: () => {
    //     // Reset opacity to 1 and visibility to visible when scrolling back up
    //     gsap.to(".ScrollDown_btm", {
    //       opacity: 1,
    //       // visibility: "visible", // Reset visibility
    //       duration: 0.3,
    //     });
    //   },
    // });
    // Create ScrollTrigger for blanDiv scrollUp
    // scrollTrigger.create({
    //   trigger: blanDiv2,
    //   start: "top top",
    //   end: "bottom 80%",
    //   markers: false,
    //   scrub: true,
    //   onEnter: () => {
    //     // Set opacity to 0
    //     gsap.to(".ScrollUp_btm", {
    //       opacity: 1,
    //       // visibility: "hidden", // Optionally hide the element
    //       duration: 0.3,
    //     });
    //   },
    //   onLeaveBack: () => {
    //     // Reset opacity to 1 and visibility to visible when scrolling back up
    //     gsap.to(".ScrollUp_btm", {
    //       opacity: 0,
    //       // visibility: "visible", // Reset visibility
    //       duration: 0.3, // Duration of the animation
    //     });
    //   },
    // });

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
    <section className="Gallery_Mainwrapper">
      <div className="Gallery_main_textCntr quote">
        <h1 className="quote">Selected Work</h1>
      </div>
      <div className="Main"></div>
      {/* <figure data-track="nav" className="blan_div">
        <p className="ScrollDown_btm">SCROLL DOWN</p>
      </figure> */}
      <section className="Gallery_wrapper">
        <figure data-trackcolor className="gallery_cntr">
          {/* <!-- Title Section 14.4 --> */}
          <div className="gallery_text-cntr gallery_text-cntr1">
            <h2 className="gallery_title_text quote">
              <Link href={"/product"} className="gallery_title_maintext">
                Rungta Steel
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Givenchy"
                  href="/product"
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
                  src="/assets/images/mrandmrs/Srk Aryan.jpg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                Lux Cozi
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                D'YAVOL
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                Ruskit
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                Just Herbs
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                Setu
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  alt=""
                  loading="lazy"
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
            <h2 className="gallery_title_text quote">
              <Link href={""} className="gallery_title_maintext">
                Nimaya Project
              </Link>
            </h2>
          </div>
          <div className="">
            {/* Image section */}
            <div data-track className="gallery_image_bottom_sec">
              <figure className="gallery_image_bottom_inner">
                <Link
                  aria-label="Nimaya Project"
                  href="Nimaya Project"
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
                  src="/assets/images/mrandmrs/Mr_mrs.jpeg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </figure>
          </div>
        </figure>
      </section>
      {/* <figure data-track="nav2" className="blan_div2">
        <p className="ScrollUp_btm">SCROLL UP</p>
      </figure> */}
    </section>
  );
};

export default Gallery;
