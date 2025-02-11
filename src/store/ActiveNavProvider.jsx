import { createContext, useState } from "react";
import { useLenis } from "../utils/LenisProvider";

export const ActiveNavContext = createContext({
  isNavActive: "home",
  setIsNavActive: () => {},
  handleSelectNav: () => {},
});

export default function ActiveNavProvider({ children }) {
  const [isNavActive, setIsNavActive] = useState("home");
  const lenis = useLenis();

  // Easing function
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  // Handle select nav
  const handleSelectNav = (sectionId) => {
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, {
        duration: 1.5,
        offset: 0,
        easing: easeInOutQuad,
      });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setIsNavActive(sectionId);
  };

  const ctxValue = {
    isNavActive,
    setIsNavActive,
    handleSelectNav,
  };

  return (
    <ActiveNavContext.Provider value={ctxValue}>
      {children}
    </ActiveNavContext.Provider>
  );
}
