import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const collageVideosData = [
  {
    // src: "/assets/images/mrandmrs/Srk Aryan.jpg",
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_1_gallery.webm",
    alt: "",
    caption: "",
  },
  {
    // Videosrc: "/assets/images/mrandmrs/Srk Aryan.jpg",
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_2_gallery.webm",
    alt: "",
    caption: "",
  },
  {
    // Videosrc: "/assets/images/mrandmrs/Srk Aryan.jpg",
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_3_gallery.webm",
    alt: "",
    caption: "",
  },
  {
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_4_gallery.webm",
    alt: "",
    caption: "",
  },
  {
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_5_gallery.webm",
    alt: "",
    caption: "",
  },
  {
    Videosrc: "/assets/images/mrandmrs/collagevideos/video_6_gallery.webm",
    alt: "",
    caption: "",
  },
];
const Collage = () => {
  useGSAP(() => {
    const reveal_duration = 2;
    const easing_type = "expo.inOut";
    const stagger = 0.2;
    const vfSec = gsap.utils.toArray(".collage_VideoBox");

    // // Placeholder values – customize as needed
    // const reveal_duration = 1.2;
    // const easing_type = "power2.out";
    // const stagger = 0.2;

    // Set initial clipPath and wrapper height
    gsap.set(vfSec, {
      clipPath: `inset(100% 0% 0% 0%)`,
    });
    gsap.set(".Collage_wrapper", {
      height: "50vh",
    });

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: ".Collage_wrapper",
      start: "top bottom",
      markers: false,
      onEnter: () => {
        revealItems(vfSec);
      },
      onLeaveBack: (self) => self.disable(),
      invalidateOnRefresh: true,
    });

    // Animation logic
    function revealItems(elems) {
      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh(); // Refresh after full sequence
        },
      });

      // Reveal animation
      tl.to(elems, {
        duration: reveal_duration,
        clipPath: `inset(0% 0% 0% 0%)`,
        ease: easing_type,
        stagger: stagger * 0.5,
      });

      // Optional hide animation
      //   tl.to(
      //     elems,
      //     {
      //       duration: reveal_duration,
      //       clipPath: `inset(0% 0% 100% 0%)`,
      //       ease: easing_type,
      //       delay: 5,
      //       stagger: stagger * 0.5,
      //     },
      //     "a"
      //   );

      // Collapse wrapper
      //   tl.to(
      //     ".Collage_wrapper",
      //     {
      //       duration: reveal_duration,
      //       height: 0,
      //       ease: easing_type,
      //       //   delay: 6,
      //     },
      //     "a+=7"
      //   );
    }
  });

  return (
    <div className="Collage_wrapper">
      {collageVideosData.map((el, index) => {
        return (
          <div key={index} className="collage_VideoBox">
            <video loop autoPlay muted playsInline src={el.Videosrc}></video>
          </div>
        );
      })}
    </div>
  );
};

export default Collage;
