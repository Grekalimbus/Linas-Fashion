"use client";
import React, {useState, useEffect} from "react";
import FirstDisplay from "./components/FirstDisplay";
import SecondDisplay from "./components/SecondDisplay";
import ThirdDisplay from "./components/ThirdDisplay";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";

const page = () => {
  const [screen, setscreen] = useState(window.innerWidth);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const [wrapperWidth, setWrapperWidth] = useState("w-full");

  const handleChangeScreen = (screenWrapper) => {
    if (screenWrapper === 1200) {
      setWrapperWidth("w-full");
      setscreenWidth(1200);
    }
    if (screenWrapper === 950) {
      setWrapperWidth("w-[950px]");
      setscreenWidth(950);
    }
    if (screenWrapper === 360) {
      setWrapperWidth("w-[360px]");
      setscreenWidth(360);
    }
  };

  const handleResize = () => {
    setscreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen]);

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      {screen >= 950 ? (
        <Header
          screenWidth={screenWidth}
          handleChangeScreen={handleChangeScreen}
        />
      ) : (
        <></>
      )}
      <div
        className={`${wrapperWidth} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} screenWidth={screenWidth} />
        <FirstDisplay screen={screen} screenWidth={screenWidth} />
        <SecondDisplay screen={screen} screenWidth={screenWidth} />
        <ThirdDisplay />
      </div>
    </main>
  );
};

export default page;
