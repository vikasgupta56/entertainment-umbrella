import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import SmoothScrolling from "@/components/home/SmoothScrolling";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/newPage.css";
export default function App({ Component, pageProps }) {
  return (
    <SmoothScrolling>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SmoothScrolling>
  );
}
