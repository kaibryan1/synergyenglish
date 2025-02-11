import { useState, useEffect } from "react";

// Custom hook to get the window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update the window size when the resize event triggers
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  return windowSize;
}

export default useWindowSize;
