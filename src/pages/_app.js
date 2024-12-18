import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import SmoothScrolling from "@/components/home/SmoothScrolling";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/newPage.css";
import "@/styles/dhamaka.css";
import "@/styles/productdetails.css";
import { usePathname } from "next/navigation";
import Mainpage from "@/components/mainpage/Mainpage";
export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <SmoothScrolling>
      <>
        {pathname === "/" ? (
          <>
            <Mainpage />
          </>
        ) : (
          <>
            {" "}
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </>
    </SmoothScrolling>
  );
}
