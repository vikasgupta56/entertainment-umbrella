import SmoothScrolling from "@/components/home/SmoothScrolling";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/navbar.css";
import "@/styles/newPage.css";
export default function App({ Component, pageProps }) {
  return (
    <SmoothScrolling>
      <Component {...pageProps} />
    </SmoothScrolling>
  );
}
