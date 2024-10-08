import SmoothScrolling from "@/components/home/SmoothScrolling";
import "@/styles/globals.css";
import "@/styles/home.css";
export default function App({ Component, pageProps }) {
  return (
    <SmoothScrolling>
      <Component {...pageProps} />
    </SmoothScrolling>
  );
}
