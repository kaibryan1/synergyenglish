import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.7, // Set duration for smooth scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true, // Enable smooth scrolling
      lerp: 0.4,
    });

    // Scroll update function
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Clean up
    return () => {
      // Clean up Lenis instance
      lenis.destroy();
    };
  }, []);

  return;
}
