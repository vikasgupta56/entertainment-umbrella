import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
const BacktoTop = () => {
  function btntop() {
    const btn = document.querySelector(".buttonTop");
    console.log(btn);

    // Scroll event listener
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });

    // Click event listener
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Using GSAP for smooth scroll animation
      gsap.to(window, { scrollTo: { y: 0 }, duration: 1.5, ease: "slow" });
    });
  }

  useEffect(() => {
    btntop();
  }, []);
  return (
    <div>
      <Link href={""} className="buttonTop">
        <FaArrowUpLong />
      </Link>
    </div>
  );
};

export default BacktoTop;
