// import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import SmoothScrolling from "@/components/home/SmoothScrolling";
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
import BacktoTop from "@/common/BacktoTop";
import useAuthentication from "@/hooks/useAuthentication";
gsap.registerPlugin(ScrollToPlugin); // Register GSAP ScrollToPlugin
export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const contactRef = useRef(null); // Create a ref for the footer
  const isAuthenticate = useAuthentication();
  return (
    <>
    {isAuthenticate ?  (
      <>
      <SmoothScrolling>
        {pathname === "/" ? (
          <>
            <MainpageHero />
          </>
        ) : (
          <>
            {" "}
            <Navbar contactRef={contactRef} />
            <Component {...pageProps} />
            {/* <Footer /> */}
            <Footer2 ref={contactRef} />
            <BacktoTop />
          </>
        )}
      </SmoothScrolling>
    </>
    ) :  <div
    className="containerWrapperlogin"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100vh",
    }}
  >
    <h1>Please log in to view the content of this page</h1>
  </div>
}
   </>
  );
}
