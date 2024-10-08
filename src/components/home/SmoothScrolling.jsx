import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        // duration: 1.5,
        smoothTouch: true,
        smoothWheel: true,

        // syncTouchLerp: 5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
