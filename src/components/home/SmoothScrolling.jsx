import React, { useEffect } from "react";

const SmoothScrolling = ({ children }) => {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: 2,
        smoothMobile: true,
        resetNativeScroll: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        mouseMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrolling;
