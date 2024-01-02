import React, { useState, useEffect } from "react";
const useScreenHandling = () => {
  const [screen, setscreen] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState("w-full");

  const handleScreenChange = (screenWrapper) => {
    const widthMappings = {
      1200: { wrapperStyle: "w-full", screenWidth: 1200 },
      950: { wrapperStyle: "w-[950px]", screenWidth: 950 },
      420: { wrapperStyle: "w-[420px]", screenWidth: 420 },
      // Add more width mappings as needed
    };

    const { wrapperStyle, screenWidth } = widthMappings[screenWrapper] || {};

    if (wrapperStyle && screenWidth) {
      setWrapperStyle(wrapperStyle);
      setScreenWidth(screenWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth);
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    setscreen(window.innerWidth);
    setScreenWidth(window.innerWidth);
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render
  // Return necessary state variables and methods
  return { screen, screenWidth, wrapperStyle, handleScreenChange };
};

export default useScreenHandling;
