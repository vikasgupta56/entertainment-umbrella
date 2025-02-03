// import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
// import SmoothScrolling from "@/components/home/SmoothScrolling";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/newPage.css";
import "@/styles/dhamaka.css";
import "@/styles/productdetails.css";
import { usePathname } from "next/navigation";
import MainpageHero from "@/components/mainpage/MainpageHero";
import "@/styles/rageentertainment.css";
import Footer2 from "@/common/Footer2";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollToPlugin); // Register GSAP ScrollToPlugin
export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const footerRef = useRef(null); // Create a ref for the footer

  const handleScrollToFooter = (event) => {
    event.preventDefault();
    // Scroll to the footer element using GSAP
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: footerRef.current, offsetY: 50 },
    });
  };
  return (
    // <SmoothScrolling>
    <>
      {pathname === "/" ? (
        <>
          <MainpageHero />
        </>
      ) : (
        <>
          {" "}
          <Navbar onContactClick={handleScrollToFooter} />
          <Component {...pageProps} />
          {/* <Footer /> */}
          <Footer2 ref={footerRef} />
        </>
      )}
    </>
    // </SmoothScrolling>
  );
}
