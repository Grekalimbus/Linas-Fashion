"use client";
import React, { useState, useEffect } from "react";
const useScreenHandling = () => {
  const [screen, setscreen] = useState(0);

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

  return { screen };
};

export default useScreenHandling;
