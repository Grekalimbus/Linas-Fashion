import React, { useState, useEffect } from "react";
const useScreenHandling = () => {
  const [screen, setscreen] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState("w-full");

  const handleScreenChange = (screenWrapper) => {
    const widthMappings = {
      1152: { wrapperStyle: "w-full", screen: 1152 },
      950: { wrapperStyle: "w-[950px]", screen: 950 },
    };

    const { wrapperStyle, screenWidth } = widthMappings[screenWrapper] || {};

    if (wrapperStyle && screenWidth) {
      setWrapperStyle(wrapperStyle);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth);
    };

    // Set initial width
    setscreen(window.innerWidth);

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return { screen, wrapperStyle, handleScreenChange };
};

export default useScreenHandling;
